/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { DefaultUser } from "next-auth";

// import NextAuth from "next-auth";

interface IUser extends DefaultUser {
  firstName: string;
  lastName: string;
  email: string;
  accessToken: string;
}

declare module "next-auth" {
  interface User extends IUser {}
  interface DefaultSession extends IUser {}
  interface Session extends IUser {}
}
declare module "next-auth/client" {
  interface DefaultSession extends IUser {}
  interface Session extends IUser {}
}
declare module "next-auth/jwt" {
  interface JWT extends IUser {}
}
