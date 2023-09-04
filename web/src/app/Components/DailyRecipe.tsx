"use client"
import { ArrowRight, BowlFood, Clock } from "@phosphor-icons/react"
import Link from "next/link"

export default function DailyRecipe() {
    const recipe = {
        imageURL: "https://criadoresid.com/wp-content/uploads/2016/10/criador_criadoresid_ronaldo_de_azevedo_youtuber-1.jpg",
        title: "Coxinha de jaca",
        prepTime: 15,
        portions: "3 - 5",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deleniti officia aspernatur explicabo sapiente minus, amet temporibus commodi laudantium? Quia laudantium molestias magni repellendus nobis veniam quam nulla doloremque tenetur."
    }
    return (
        <div
            className={`p-8 bg-cover rounded-br-md flex flex-col justify-between group col-span-2 w-full`}
            style={{ backgroundImage: `url('${recipe.imageURL}')` }}
        >
            <div
                className="bg-primary-light w-fit flag pr-4">
                <span className="p-2 text-white z-1 font-normal">Receita do dia</span>
            </div>

            <div className="flex gap-16 justify-between items-end">
                <div className="flex flex-col">
                    <h2
                        className="text-4xl font-bold text-white bg-primary-base border-b-0 rounded-sm  group-hover:border-b-4 group-hover:rounded group-hover:rounded-t-sm border-primary-light px-4 py-1 transition-all duration-150">

                        {recipe.title}
                    </h2>
                    <div className="h-0 overflow-hidden transition-all py-0 pb-0 group-hover:h-auto group-hover:py-2  group-hover:pb-4  bg-primary-base px-4 text-white rounded-b-sm duration-300">
                        <div className="flex items-center gap-2 w-full">
                            <span className="flex gap-1 items-center">
                                <Clock weight="bold" size={20} />
                                {recipe.prepTime} minutos
                            </span>
                            <span className="flex gap-1 items-center">
                                <BowlFood weight="bold" size={20} />
                                {recipe.prepTime} porções
                            </span>
                        </div>
                        <p className="font-normal text-base max-w-[400px]">{recipe.desc.substring(0, Math.min(recipe.desc.length, 100))}</p>
                    </div>
                </div>
                <Link
                    href={"a"}
                    className="text-white flex items-center gap-1 whitespace-nowrap recipe__link"
                >
                    <span className="translate-x-0 transition-all">
                        Ver mais
                    </span>
                    <ArrowRight size={20} weight="bold" />
                </Link>
            </div>
        </div>
    )
}