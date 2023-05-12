import axios from 'axios'

export const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}
const appAxios = axios.create({
  baseURL: import.meta.env.NODE_ENV === 'production'
          ? import.meta.env.VITE_REACT_APP_API_URL_PROD
          : import.meta.env.VITE_REACT_APP_API_URL_DEV,
  headers,
})

export default appAxios
