import CookStepsContainer from "@/components/SingleRecipe/CookStepsContainer"
import ImageCarousel from "@/components/SingleRecipe/ImageCarousel"
import IngredientsContainer from "@/components/SingleRecipe/IngredientsContainer"
import NutStats from "@/components/SingleRecipe/NutStats"
import { getSingleRecipe } from "@/lib/api"
import { Post } from "@/lib/constants"

interface Recipe {
    params: {
        id: string,
    }
}

export default async function Recipe({ params }: Recipe) {
    // const data = await getSingleRecipe("aldjalkdjl")
    const data: Post | null = await getSingleRecipe(params.id)
    return (
        <div
            className="px-20 py-10"
        >
            {data ? (
                <div>
                    <header className="flex flex-col gap-2">
                        <h2 className="text-3xl text-primary-base font-bold font-title">
                            {data.recipe.title}
                        </h2>

                        {/* Prep time + Rendimento  */}
                        <div className="flex gap-4 items-center">
                            <div className="flex text-sm gap-2 items-center text-primary-base font-medium">
                                Tempo de preparo
                                <span
                                    className="bg-primary-light py-[2px] px-2 rounded-sm text-white"
                                >
                                    {data.recipe.prepTime} minutos
                                </span>
                            </div>
                            <div className="flex text-sm gap-2 items-center text-primary-base font-medium">
                                Rendimento
                                <span
                                    className="bg-primary-light py-[2px] px-2 rounded-sm text-white"
                                >
                                    {data.recipe.redimento} porções
                                </span>
                            </div>

                        </div>

                    </header>

                    <div className="mt-8 flex flex-col gap-4">
                        <ImageCarousel images={data.recipe.images} />

                        <NutStats
                            stats={data.recipe.stats}
                        />

                        <IngredientsContainer
                            ingredients={data.recipe.ingredients}
                        />

                        <CookStepsContainer steps={data.recipe.cookSteps} />
                    </div>
                </div>
            ) : (
                <div>Recipe Not found</div>
            )}
        </div>
    )
}