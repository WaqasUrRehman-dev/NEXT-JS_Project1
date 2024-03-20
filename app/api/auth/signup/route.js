import dbConnection from "@/DBConnection/db";
import UserSchema from "@/adapter/models/user";
import { hash } from "bcrypt";

export const POST = async (req, res) => {
  const { name, email, password } = await req.json();

  try {
    await dbConnection;
    if (name && email && password) {
        const checKUser = await UserSchema.findOne({ email});
        if (!checKUser) {
            await UserSchema.create({ name, email, password: await hash(password,12) });
            return new Response(JSON.stringify({ message: "User created successfully" }),{ status: 200})
        } else {
            return new Response(JSON.stringify({ message: "User already exists"}),{ status: 400});
        }
    } else {
        return new Response(JSON.stringify({ message: "Please fill all fields"}),{ status: 400});
    }
  } catch (error) {
    return new Response(JSON.stringify({ message: "Internal server error"}),{ status: 500});
  }
};
