import Link from "next/link";
import { ReactNode } from "react";

interface IButton {
    content: string,
    children: ReactNode
    source: string,
}

export default function Button({ content, children, source }: IButton) {
    return (
        <Link
            href={source}
            className="flex gap-1 items-center hover:bg-primary-light p-1 px-2 rounded-sm transition">
            <span className="whitespace-nowrap">
                {content}
            </span>
            {children}
        </Link>
    )
}