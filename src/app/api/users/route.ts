import { auth } from "@/auth"
import { NextResponse } from "next/server"

export const GET = auth(function GET(req) {
    if (req.auth?.user) return NextResponse.json({ user : req.auth }, { status: 200 })
    return NextResponse.json({ message: "Salam Yassir" }, { status: 200 })
})
