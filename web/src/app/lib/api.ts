const API_URL = "http://localhost:5000/api/"
// const API_URL = process.env.API_URL

export async function  getDailyRecipe() {
    console.log(API_URL)
    const res = await fetch(API_URL + "recipes/daily")

    const data = await res.json()
    // console.log(data)
    return data
}