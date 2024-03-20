import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import MongooseAdapter from "@/adapter/index";
import dbConnection from "@/adapter/dbConnect";
import User from "@/adapter/models/user";

const DBAdapter = MongooseAdapter(dbConnection)
const handler = NextAuth({
  adapter: DBAdapter,
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOOGLE_SECRET_KEY,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      Credential: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials){
        await dbConnection;
        console.log("credentials: ", credentials);
        try {
          const user = await User.findOne({ email: credentials.email });
          console.log("user found with email:", user);
          if (user) {
              const isCorrectPass = await compare(credentials.password, user.password);
              if (isCorrectPass) {
                console.log('user found with email:', user);
                return user;
              } else {
                throw new Error("Incorrect password");
              }
      
          } else {
            throw new Error("User not found")
          }
        } catch (error) {
          throw new Error(error.message);
        }
      }
    }),
  ],
});

export { handler as GET, handler as POST };
