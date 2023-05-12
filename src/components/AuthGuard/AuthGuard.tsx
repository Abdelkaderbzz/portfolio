import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { RootState } from '../../store/index'
import { setAuth, SignupState } from '../../store/auth/authSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getTokenFromLocalStorage } from '../../helpers/logalStorage'

const AuthGuard = ({ children }: any) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  
  const { isAuthenticated } = useSelector<RootState, SignupState>(
    (state) => state.signup
    )
    const token = getTokenFromLocalStorage()
    
    useEffect(() => {
      
      if (token) {
        dispatch(setAuth(true))
        navigate("/")
      }
    }, [token])
  

  if (!isAuthenticated) {
    return <Navigate to='/auth/login' />
  }

  return children
}

export default AuthGuard
