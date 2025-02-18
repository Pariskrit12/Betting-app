import dbConnect from "@/lib/dbConnect";
import { User } from "@/model/user.model";
import bcrypt from "bcrypt";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions={
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          username: { label: "Username", type: "text" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials, req) {
            await dbConnect();
          const { username, password } = credentials;
          console.log("user logged in");
          const userExist = await User.findOne({ username });
          if (!userExist) {
            return null;
          }
          const isPasswordValid = await bcrypt.compare(
            password,
            userExist.password
          );
          if (isPasswordValid) {
            return userExist;
          } else {
            return null;
          }
        },
       
      }),
    ]
}
 const handler= NextAuth(authOptions);
 export { handler as GET, handler as POST };
