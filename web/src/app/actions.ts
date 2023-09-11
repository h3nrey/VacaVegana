"use server"

import { cookies } from "next/headers";

export async function createPostCookie(value: string) {
    const oneDay = 24 * 60 * 60 * 1000
    cookies().set("daily", value, {
        expires: Date.now() - oneDay
    })
}

export async function getDailyPostCookie() {
    const cookieId = cookies().get("daily")

    if(cookieId) return cookieId.value
    
    return ""
}