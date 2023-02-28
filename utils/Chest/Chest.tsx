import axios from "axios"
import { EXERCISES_API_KEY } from "../api";

export async function getChest(difficulty: string) {
  const response = await axios
    .get(`https://api.api-ninjas.com/v1/exercises?muscle=chest&difficulty=${difficulty}`,
    {headers: { 'X-Api-Key': EXERCISES_API_KEY }},
    );
  return response.data;
}