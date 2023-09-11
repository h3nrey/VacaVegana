"use client"
import { colors } from "@/app/colors";
import { List, X } from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";
import NavModal from "./NavModal";

export interface category {
    id: string,
    name: string,
    url: string,
}
const categories: category[] = [
    {
        id: "1",
        name: "Refeições",
        url: "refeicoes",
    },
    {
        id: "2",
        name: "Lanches",
        url: "lanches",
    },
    {
        id: "3",
        name: "Doces",
        url: "doces",
    },
    {
        id: "4",
        name: "Fit",
        url: "fit",
    },
]
export default function Nav() {
    const [showNav, setShowNav] = useState(false)

    return (
        <>
            <div className="lg:hidden">
                <button onClick={() => setShowNav(true)}>
                    <List size={24} color={colors.white} weight="bold" />
                </button>

                <NavModal showNav={showNav} categories={categories} closeNav={setShowNav} />
            </div>

            <div className="hidden lg:flex lg:gap-2">
                {categories.map(category => (
                    <Link key={category.id} href={category.url}>
                        <div
                            className="text-white text-[1.125rem] relative
                        after:bg-white after:absolute after:left-0 after:top-full after:w-full after:content-[''] after:h-[4px] after:scale-x-0 hover:after:scale-x-100 after:transition-all after:origin-left delay-75 after:-translate-y-[50%]">
                            {category.name}
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}