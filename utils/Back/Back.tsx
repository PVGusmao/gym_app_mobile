import axios from "axios"
import { EXERCISES_API_KEY } from "../api";

export async function getMiddleBack(difficulty: string) {
  const response = await axios
    .get(`https://api.api-ninjas.com/v1/exercises?muscle=middle_back&difficulty=${difficulty}`,
    {headers: { 'X-Api-Key': EXERCISES_API_KEY }},
    );
  return response.data;
}

export async function getLowerBack(difficulty: string) {
  const response = await axios
    .get(`https://api.api-ninjas.com/v1/exercises?muscle=lower_back&difficulty=${difficulty}`,
    {headers: { 'X-Api-Key': EXERCISES_API_KEY }},
    );
  return response.data;
}

export async function getLats(difficulty: string) {
  const response = await axios
    .get(`https://api.api-ninjas.com/v1/exercises?muscle=lats&difficulty=${difficulty}`,
    {headers: { 'X-Api-Key': EXERCISES_API_KEY }},
    );
  return response.data;
}