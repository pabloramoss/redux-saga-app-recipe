const API_APP_KEY = process.env.VITE_API_APP_KEY
const API_APP_ID = process.env.VITE_API_APP_ID

const getRecipes = (query: string) => `https://api.edamam.com/search?q=${query}&app_id=${API_APP_ID}&app_key=${API_APP_KEY}`

export const ROUTES = {
  getRecipes,
}