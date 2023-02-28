import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const EXERCISES_API_KEY = 'Arh3p23GBjJASIjO2A4bovWbjL04VyFSJIQOlUYW'; 

export const getToken = async () => {
  const token = await (AsyncStorage.getItem('token'));
  return token?.split('"')[1];
}

const api = axios.create({
  baseURL: 'http://10.0.0.22:3000',
});

api.interceptors.request.use(async config => {
  const token = await getToken();
  if (token)
      config.headers.Authorization = `Bearer ${token}`

  return config
})

export default api;