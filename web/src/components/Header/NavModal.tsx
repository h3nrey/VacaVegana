import Link from "next/link"
import { category } from "./Nav"
import { X } from "@phosphor-icons/react"
import { createPortal } from "react-dom"

interface IModal {
    showNav: boolean,
    categories: category[]
    closeNav: (navState: boolean) => void
}

export default function NavModal({ showNav, categories, closeNav }: IModal) {
    return (
        <>
            {showNav && (
                <>
                    {createPortal(
                        <div className="absolute flex flex-col top-0 left-0 gap-6 w-full h-full items-center justify-center bg-primary-base">
                            <div className="flex flex-col gap-2 items-center">
                                {categories.map(category => (
                                    <Link href={category.url} key={category.id}>
                                        <span className="font-bold text-[32px] text-white">{category.name}</span>
                                    </Link>
                                ))}
                            </div>

                            <button
                                onClick={() => closeNav(false)}
                            >
                                <X size={48} className="text-white" weight="bold" />
                            </button>

                        </div>,
                        document.body
                    )}
                </>
            )}
        </>
    )
}