// https://nextjs.org/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes
// @/app/auth.config is edge runtime compatible
import authConfig from "@/app/auth.config"
import NextAuth from "next-auth"

export const {
    handlers: { GET, POST }
} = NextAuth(authConfig)

// https://authjs.dev/guides/upgrade-to-v5#edge-compatibility
export const runtime = 'edge'; // 'nodejs' (default) | 'edge'