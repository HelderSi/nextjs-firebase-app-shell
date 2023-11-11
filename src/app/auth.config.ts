import type { NextAuthConfig } from "next-auth"
import GitHub from 'next-auth/providers/github';

export default {
    providers: [GitHub({
        clientId: process.env.GITHUB_APP_CLIENT_ID as string,
        clientSecret: process.env.GITHUB_APP_CLIENT_SECRET as string
    })],
    pages: {
        signIn: process.env.SIGN_PAGE_URL || '/login'
    },

} satisfies NextAuthConfig
