// lib/auth.ts
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { users } from "./data";

export const authOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      authorize(credentials) {
        const user = users.find(
          (u) =>
            u.email === credentials?.email &&
            u.password === credentials?.password
        );
        return user || null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: "next-auth-secret",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
