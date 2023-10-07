import axios from "axios"
import Cookies from "js-cookie"

const API_URL = "http://localhost:5000/api/"

const api = axios.create({
    baseURL: API_URL
})

export async function getDailyRecipeId() {
    const res = await api.get("recipes/daily")
    const payload = await res.data
    return payload
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

type loginType = {
    username: string,
    password: string,
}

export async function loginUser({username, password}: loginType) {
    const response = await api.post("users/login", {
        username,
        password
    })
    const payload = response.data

    if(payload) {
        Cookies.set("token", payload.token)
    }
    console.log(response.data)
}

export async function getUser(userToken: string | null) {
    if(!userToken) return

    const response = await axios.get("http://localhost:5000/api/users/", {
        headers: {
        Authorization: `Bearer ${userToken}`
        }
  })

    return response.data
}

export async function getTrendingRecipes() {
    const res = await fetch(`${API_URL}recipes/trending`);
    const data = await res.json()
    return data
}