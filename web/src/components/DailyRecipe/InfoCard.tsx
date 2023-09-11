"use client"
import { BowlFood, Clock } from "@phosphor-icons/react"

type Category = {
    title: string
}

interface IInfoCard {
    title: string
    prepTime: string
    portions: string
    desc: string
    categories: Category[]
}

export default function InfoCard({ title, prepTime, desc, portions, categories }: IInfoCard) {
    return (
        <div className="flex flex-col gap-1">
            <div
                className="-z-1 translate-y-[150%] group-hover:translate-y-0 transition-all origin-bottom duration-500 gap-2 flex ml-1">
                {categories.map(category => (
                    <>
                        <span
                            key={category.title}
                            className="bg-primary-light text-white rounded-lg py-[2px] pl-2 pr-4 text-start text-sm"
                        >
                            {category.title}
                        </span>
                    </>

                ))}
            </div>
            <div className="flex flex-col z-10">

                <h2
                    className="text-2xl font-bold text-white bg-primary-base border-b-0 rounded-sm  group-hover:border-b-4 group-hover:rounded group-hover:rounded-t-sm border-primary-light px-4 py-1 transition-all duration-150">

                    {title}
                </h2>
                <div className="h-0 overflow-hidden transition-all py-0 pb-0 group-hover:h-auto group-hover:py-2  group-hover:pb-4  bg-primary-base px-4 text-white rounded-b-sm duration-300">
                    <div className="flex items-center gap-2 w-full">
                        <span className="flex gap-1 items-center">
                            <Clock weight="bold" size={20} />
                            {prepTime} minutos
                        </span>
                        <span className="flex gap-1 items-center">
                            <BowlFood weight="bold" size={20} />
                            {portions} porções
                        </span>
                    </div>
                    <p className="font-normal text-base max-w-[400px]">{desc}</p>
                </div>
            </div>
        </div>

    )
}