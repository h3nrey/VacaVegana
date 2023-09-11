import { getTrendingRecipes } from "@/lib/api"
import RecipeCard from "./RecipeCard";
import { Post, Recipe } from "@/lib/constants";

export default async function StarredRecipes() {
    const posts: Post[] = await getTrendingRecipes();

    return (
        <div className="flex gap-2">
            {posts ? (
                <>
                    {posts.map(post => (
                        <RecipeCard
                            key={post.id}
                            id={post.id}
                            title={post.recipe.title}
                            image={post.recipe.images[0]}
                            prepTime={post.recipe.prepTime}
                            categories={post.categories}
                        />
                    ))}
                </>
            ) : (
                <p>Monkey</p>
            )}
        </div>
    )
}