// apis/api.ts
import axios from 'axios';
import { cookies } from 'next/headers';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});
api.interceptors.request.use(
  (config) => {
    // Attach token if available
    const cookieStore = cookies();
    const authCookie = cookieStore.get("AUTH");
    const auth = authCookie?.value ? JSON.parse(authCookie?.value) : "";
    const token = auth._tokenResponse.idToken
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  
  (response) => {
    console.log("masuk sini 2")

    if (response.status === 401) {
      cookies().delete("AUTH");
      
    }
    // Successfully handle the response
    return response;
  },
  error => {
    const status = error.response ? error.response.status : null;
    if (status === 401) {
      cookies().delete("AUTH");

    } else if (status === 404) {
      // Handle not found errors
    } else {
      // Handle other errors
    }

    return Promise.reject(error);
  }
);

export default api