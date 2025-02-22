import dbConnect from "@/lib/dbConnect";
import { User } from "@/model/user.model";
import bcrypt from "bcrypt";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          await dbConnect(); 

          const { username, password } = credentials;

         
          const userExist = await User.findOne({ username });
          if (!userExist) {
            throw new Error("User not found");
          }

         
          const isPasswordValid = await bcrypt.compare(
            password,
            userExist.password
          );
          if (!isPasswordValid) {
            throw new Error("Invalid password");
          }

          // Return the user object without the password
          return {
            id: userExist._id.toString(), 
            username: userExist.username,
            email: userExist.email, 
          };
        } catch (error) {
          console.error("Authentication error:", error.message);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Add user information to the token
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      // Add user information to the session
      session.user.id = token.id;
      session.user.username = token.username;
      session.user.email = token.email;
      return session;
    },
  },
 
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };