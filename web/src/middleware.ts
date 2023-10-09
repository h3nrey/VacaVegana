import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import {NextRequest, NextResponse} from "next/server"

export function middleware(req: NextRequest, res: NextResponse) {
    const token = req.cookies.get("token")?.value
    const url =  req.nextUrl.pathname

    if((url == "/login" || url == "/signup") && token) {
        return NextResponse.redirect(new URL("/", req.url))
    }

    if((url == "/" && (req.nextUrl.pathname == "/login" || req.nextUrl.pathname == "/signup")) && token) {
        const path = req.nextUrl.searchParams.get('path')
        if(path) revalidatePath(path)
        return NextResponse.redirect(new URL("/", req.url))
    }
}

export const config = {
    matcher: ["/login", "/signup", "/"]
}