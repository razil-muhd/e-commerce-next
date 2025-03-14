import { FrontendHome } from "@/api/Api";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import { use } from "react";
// import { callbackify } from "util";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  jwt:{
    secret:process.env.NEXTAUTH_SECRET
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      id: "credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<any> {
        // console.log("credentials:::::", credentials);
        const response = await FrontendHome.LoginApi({
          email: credentials!.email,
          password: credentials!.password,
        });
        console.log("response::", response);
        if (!response.data.success) {
          throw new Error(response.data.message);
        } else {
          console.log("response data::", response.data.userData);
          return response.data.userData;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ token, session }) {
      if (token) {
        session.email = token.email ?? "";
        session.accessToken = token.accessToken;
      }

      return session;
    },
  },
};
