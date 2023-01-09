import axios from "axios"
import {ROUTES} from "../constants/routes"

export const getRecipes = async (query: string) => {
  await axios.get(ROUTES.getRecipes(query))
}