"use client"

import { Clock, Heart } from "@phosphor-icons/react"

export default function Cardinfo({ prepTime }: { prepTime: number }) {
    return (
        <div
            className="flex flex-col group-hover:flex text-white absolute w-full h-full justify-between  p-4 top-0"
        >
            <div className="flex w-full justify-end">
                <button className="bg-primary-light p-1 rounded-full hover:scale-110 transition-all">
                    <Heart size={24} weight="bold" />
                </button>
            </div>

            <div className="flex px-[4px] py-[2px] rounded-sm gap-1 bg-primary-light w-fit">
                <Clock size={20} />
                <span>{prepTime} min</span>

            </div>
        </div>
    )
}