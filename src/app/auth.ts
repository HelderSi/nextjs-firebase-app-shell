import NextAuth from 'next-auth';
import { FirestoreAdapter } from "@auth/firebase-adapter"
import { cert } from "firebase-admin/app"
import authConfig from "./auth.config"

export const {
    handlers: { GET, POST },
    auth
} = NextAuth({
    callbacks: {
        async jwt({ token, account }) {
            if (account) {
                token.id = account.providerAccountId
                token.accessToken = account.access_token
            }
            console.log('account', account)
            return token
        },
        async session({ session, token }) {
            console.log('token', token);
            return session
        }
    },
    adapter: FirestoreAdapter({
        credential: cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY,
        }),
        namingStrategy: 'snake_case',
    }),
    session: { strategy: "jwt" },
    ...authConfig
});