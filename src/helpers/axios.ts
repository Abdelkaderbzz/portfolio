import axios from 'axios'
import { basename } from 'path'

export const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}
const appAxios = axios.create({
  baseURL:
    import.meta.env.MODE === 'production'
      ? import.meta.env.VITE_REACT_APP_API_URL_PROD
      : import.meta.env.VITE_REACT_APP_API_URL_DEV,
  headers,
})
console.log(import.meta.env.MODE)
export default appAxios
