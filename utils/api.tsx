import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const getToken = async () => {
  const token = await (AsyncStorage.getItem('token'));
  return token?.split('"')[1];
}

const api = axios.create({
  // baseURL: 'http://10.0.0.22:3000',
  baseURL: 'https://wger.de/api',
});

// api.interceptors.request.use(async config => {
//   const token = await getToken();
//   if (token)
//       config.headers.Authorization = `Bearer ${token}`

//   return config
// })

export default api;