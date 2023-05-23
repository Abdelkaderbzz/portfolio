import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import jwtDecode from 'jwt-decode';

import { removeTokensFromLocalStorage } from './logalStorage';
import { toast } from 'react-toastify';

import {
  getTokenFromLocalStorage,
  getRefrechTokenFromLocalStorage,
  setTokenToLocalStorage,
} from './logalStorage';

export const isTokenExpired = (token: any) => {
  const decodedToken: any = jwtDecode(token);
  const currentTime = Date.now() / 1000;
  return decodedToken.exp < currentTime;
};

export const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const tokenAxios = axios.create({
  baseURL:
    import.meta.env.MODE === 'production'
      ? import.meta.env.VITE_REACT_APP_API_URL_PROD
      : import.meta.env.VITE_REACT_APP_API_URL_DEV,
});

const appAxios = axios.create({
  baseURL:
    import.meta.env.MODE === 'production'
      ? import.meta.env.VITE_REACT_APP_API_URL_PROD
      : import.meta.env.VITE_REACT_APP_API_URL_DEV,
});
appAxios.interceptors.request.use(
  async (config) => {
    let token: any = getTokenFromLocalStorage();
    if (token) {
      // Check if the token is expired
      const refrechToken = getRefrechTokenFromLocalStorage();
      if (refrechToken && isTokenExpired(token)) {
        try {
          // Send a request to the '/refresh' endpoint to get a new token
          const response = await tokenAxios.post(`users/refrech`, {
            refrechToken,
          });
          const newToken = response?.data?.accessToken;
          console.log(newToken)
          config.headers.Authorization = `Bearer ${newToken}`;
          // Update the token in the storage
          setTokenToLocalStorage(newToken);
        } catch (error)
        {
          // Handle the error (e.g., redirect to login page)
          {
            refrechToken &&
            removeTokensFromLocalStorage();
            window.location.href = '/auth/login';
            toast.info('refrech token expired login to access');
          }
          console.error('Failed to refresh token:', error);
        }
      } else {
        // Set the token in the request headers
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default appAxios;
