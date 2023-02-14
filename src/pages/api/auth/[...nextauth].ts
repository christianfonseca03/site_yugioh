import NextAuth, {type AuthOptions} from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authoptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
};

export default NextAuth(authoptions)
