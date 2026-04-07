import FoodlyApiClient from "./FoodLyAPIClient"

export const getRecipes = async () => {
  const response = await FoodlyApiClient.get("/recipes")
  return response.data.data
}