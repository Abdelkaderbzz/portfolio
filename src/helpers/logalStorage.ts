import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/index'
import { setAuth, SignupState } from '../store/auth/authSlice'
export const setTokenToLocalStorage = (value: string) => {
  localStorage.setItem('JWT_TOKEN', value)
}
export const getTokenFromLocalStorage = () => {
  const JWT_TOKEN = localStorage.getItem('JWT_TOKEN')
  const token = JWT_TOKEN ? JWT_TOKEN : null
  return token
}

export const removeTokenFromLocalStorage = () => {
  
  localStorage.removeItem('JWT_TOKEN')
  const dispatch = useDispatch()
  dispatch(setAuth(false))
}
