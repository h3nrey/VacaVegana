import { getDailyRecipeId, getSingleRecipe } from "../../lib/api";
import InfoCard from "./InfoCard"
import MoreDetails from "./MoreDetails"

type Recipe = {
    title: string,
    desc: string,
    prepTime: string,
    images: string[],
}

async function getData() {
    const recipeId = await getDailyRecipeId()
    const recipe = await getSingleRecipe(recipeId)
    return recipe
}

export default async function DailyRecipe() {
    const { id, categories, recipe } = await getData()
    console.log("ID")
    console.log(id)
    return (
        <>
            {recipe && (
                <div
                    className={`p-8 bg-cover rounded-br-md flex flex-col justify-between group col-span-2 w-full`}
                    style={{ backgroundImage: `url('${recipe.images[0]}')` }}
                >
                    <div
                        className="bg-primary-light w-fit flag pr-4">
                        <span className="p-2 text-white z-1 font-normal">Receita do dia</span>
                    </div>

                    <div className="flex gap-16 justify-between items-end">
                        <InfoCard
                            title={recipe.title}
                            desc={recipe.desc}
                            portions={recipe.redimento}
                            prepTime={recipe.prepTime}
                            categories={categories}
                        />
                        <MoreDetails id={id} />
                    </div>
                </div>
            )

            }

        </>

    )
}