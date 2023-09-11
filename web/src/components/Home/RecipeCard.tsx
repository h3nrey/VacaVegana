import { Categories } from "@/lib/constants";
import Cardinfo from "./CardInfo";
import Link from "next/link";

interface IRecipeCard {
    id: string,
    title: string,
    image: string,
    prepTime: number,
    categories: Categories[],
}

export default function RecipeCard({ id, title, image, prepTime, categories }: IRecipeCard) {
    return (
        <Link
            href={`/recipe/${id}`}
            className="group cursor-pointer hover:bg-primary-base hover:px-2 py-2 transition-all rounded-md">
            <div
                className="relative w-[22rem] h-[13rem] bg-red-500 rounded-md overflow-hidden"
            >
                <img
                    src={image}
                    className="h-full w-full object-cover"
                />

                <Cardinfo prepTime={prepTime} />
            </div>
            <div>
                <div className="flex flex-col gap-1">
                    {categories.map(category => (
                        <span
                            key={category.id}
                            className="text-primary-light group-hover:text-gray"
                        >
                            {category.title}
                        </span>
                    ))}
                </div>
                <h3 className="text-primary-base text-2xl group-hover:text-white">
                    {title}
                </h3>
            </div>
        </Link>
    )
}