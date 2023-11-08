import { auth } from "@/app/auth"
import { NextResponse } from "next/server"

export async function GET() {
    const session = await auth()

    if (!session) {
        return NextResponse.json({ message: 'You are not logged in.' })
    }

    return NextResponse.json({ name: session.user?.name })
}