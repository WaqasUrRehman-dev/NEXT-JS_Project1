import dbConnection from "@/DBConnection/db";
import Token from "@/adapter/models/Token";
import User from "@/adapter/models/user";
import { getPasswordResetTemplate } from "@/utils/email";
import { nanoid } from "nanoid";
import { createTransport } from "nodemailer";
import bcrypt from "bcrypt";

export const POST = async (req, res) => {
  const { email } = await req.json();

  console.log(email);

  try {
    await dbConnection;

    const user = await User.findOne({ email });

    if (!user) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    } else {
      const token = await Token.findOne({ user: user._id });

      if (token) {
        await Token.findOneAndDelete(token);
      }

      const secureTokenId = nanoid(32);

      await new Token({
        user: user._id,
        token: secureTokenId,
        createdAt: Date.now(),
      }).save();

      const link = `${process.env.NEXT_PUBLIC_APP_URL}/forget-password/${secureTokenId}`;
      const transport = createTransport(process.env.EMAIL_SERVER);
      // console.log(link);
      console.log(process.EMAIL_FROM);
      await transport.sendMail({
        from: 'rehmanwaqas466@gmail.com',
        to: user.email,
        subject: "Reset Password",
        text: "Reset Password Messsage",
        html: getPasswordResetTemplate(link, user.name),
      });
      console.log(user.email)
      return new Response(JSON.stringify({ message: "Email Sent" }), {
        status: 200,
      });
    } 
  } catch (error) {
    // console.log(error);
    return new Response(
      JSON.stringify({ message: error.message }),
      { status: 500 }
    );
  }
};

export const PATCH = async (req, res) => {
  const { tokenId, password } = await req.json();
  console.log(tokenId, password);
  try {
    await dbConnection;

    const token = await Token.findOne({ token: tokenId });

    if (!token) {
      return new Response(
        JSON.stringify({ message: "Invalid or expired token" }),
        { status: 400 }
      );
    }

    const user = await User.findById(token.user);

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const transport = createTransport(process.env.EMAIL_SERVER);

    await User.updateOne(
      { _id: user._id },
      { password: hashedPassword },
      { new: true }
    );

    await transport.sendMail({
      from: process.env.EMAIL_FROM,
      to: user.email,
      subject: "Password reset successufly",
      html: "Password is successfuly reset",
    });

    const deleteToken = await Token.deleteOne({ _id: token._id });

    if (!deleteToken) {
      return new Response(JSON.stringify({ message: "Something went wrong" }), {
        status: 403,
      });
    }

    return new Response(
      JSON.stringify({ message: "Password reset Successfull" }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new Response("Internal sever error", { status: 500 });
  }
};
