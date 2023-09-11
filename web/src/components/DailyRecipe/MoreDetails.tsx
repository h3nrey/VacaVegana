"use client"

import { ArrowRight } from "@phosphor-icons/react"
import Link from "next/link"

export default function MoreDetails({ id }: { id: string }) {
    return (
        <Link
            href={`/recipe/${id}`}
            className="text-white flex items-center gap-1 whitespace-nowrap recipe__link"
        >
            <span className="translate-x-0 transition-all">
                Ver mais
            </span>
            <ArrowRight size={20} weight="bold" />
        </Link>
    )
}