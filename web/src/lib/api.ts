const API_URL = "http://localhost:5000/api/"
// const API_URL = process.env.API_URL

export async function  getDailyRecipeId() {
    const res = await fetch(API_URL + "recipes/daily")
    const data = await res.json()
    return data
}

export async function getSingleRecipe(recipeId: string) {
    try {
        const res = await fetch(`${API_URL}recipes/recipe/${recipeId}`)
        const data = await res.json()
        console.log(data)
        return data
    } catch {
        return null
    }
    
    
}

export async function getUser() {
    
}

export async function getTrendingRecipes() {
    const res = await fetch(`${API_URL}recipes/trending`);
    const data = await res.json()
    return data
}