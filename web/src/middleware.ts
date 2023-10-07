import {NextRequest, NextResponse} from "next/server"

export function middleware(req: NextRequest, res: NextResponse) {
    const token = req.cookies.get("token")?.value
    const url =  req.nextUrl.pathname

    if((url == "/login" || url == "/signup") && token) {
        return NextResponse.redirect(new URL("/", req.url))
    }
    console.log("req url")
    console.log(url)
}

export const config = {
    matcher: ["/login", "/signup"]
}