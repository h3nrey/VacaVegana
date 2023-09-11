export interface Post {
    id: string,
    categories: Categories[],
    recipe: Recipe
}

export interface Recipe{
    title:              string
    desc:               string
    prepTime:           number
    redimento:          string
    images: string[]
    stats:  string[] //[Calories, Fat, Carbohydrates, Protein]
    ingredients: string[]
    cookSteps: CookStep[]
}

export type Categories = {
    id: number,
    title: string
}

export type CookStep = {
    id: number              
    title:  string           
    description:    string     
}