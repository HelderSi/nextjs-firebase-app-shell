import NextAuth from 'next-auth';
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
    }
});