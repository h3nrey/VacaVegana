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
        <div className="">
            <button onClick={() => setShowNav(true)}>
                <List size={24} color={colors.white} weight="bold" />
            </button>

            <NavModal showNav={showNav} categories={categories} closeNav={setShowNav} />
        </div>
    )
}