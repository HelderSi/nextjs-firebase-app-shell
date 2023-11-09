import NextAuth from 'next-auth';
import { FirestoreAdapter } from "@auth/firebase-adapter"
import { cert } from "firebase-admin/app"
import GitHub from 'next-auth/providers/github';

export const {
    handlers: { GET, POST },
    auth
} = NextAuth({
    providers: [
        GitHub({
            clientId: process.env.GITHUB_APP_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_APP_CLIENT_SECRET as string
        })
    ],
    pages: {
        signIn: process.env.SIGN_PAGE_URL || '/login'
    },
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
    })
});