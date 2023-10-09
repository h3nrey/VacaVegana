import axios from "axios"
import Cookies from "js-cookie"

const API_URL = "http://localhost:5000/api/"

const api = axios.create({
    baseURL: API_URL
})

type resType = {
    data: any,
    message: string,
    wasSuccessful: boolean,
}

export async function getDailyRecipeId() {
    const res = await api.get("recipes/daily")
    const payload = await res.data
    return payload
}

export async function getSingleRecipe(recipeId: string) {
    try {
        const res = await fetch(`${API_URL}recipes/recipe/${recipeId}`)
        const data = await res.json()
        return data
    } catch {
        return null
    }
    
    
}

type loginType = {
    username: string,
    password: string,
}

type signType = {
    username: string,
    email: string,
    password: string,
}

export async function loginUser({username, password}: loginType) {
    const response = await api.post("users/login", {
        username,
        password
    })
    const payload:resType = response.data

    if(payload.wasSuccessful) {
        Cookies.set("token", payload.data.token)
    }

    return payload
}

export async function registerUser({username, email, password}: signType) {
    const response = await api.post("users/signup", {
        username,
        email,
        password
    })
    const payload:resType = response.data

    if(payload.wasSuccessful) {
        Cookies.set("token", payload.data.token)
    }

    return payload
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