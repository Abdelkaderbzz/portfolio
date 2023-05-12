import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './../views/Home'
import Register from './../views/Auth/Register'
import Login from './../views/Auth/Login'
import NotFound from './../views/NotFound'
import MainLayout from '../layouts/MainLayout'
import Service from '../views/Home/components/Service/Service'
import Progress from '../components/Progress'
import AuthGuard from '../components/AuthGuard/AuthGuard'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { setAuth, SignupState } from '../store/auth/authSlice'
import { getTokenFromLocalStorage } from '../helpers/logalStorage'
import { useEffect } from 'react'
const RoutesProvider = () => {
  const dispatch = useDispatch()
  const token = getTokenFromLocalStorage()
  const { isAuthenticated } = useSelector<RootState, SignupState>(
    (state) => state.signup
  )
  useEffect(() => {
    if (token) {
      dispatch(setAuth(true))
    }
  }, [])
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>loading...</h1>}>
        <Routes>
          <Route
            path='/auth/register'
            element={isAuthenticated ? <Navigate to='/' /> : <Register />}
          />
          <Route
            path='/auth/login'
            element={isAuthenticated ? <Navigate to='/' /> : <Login />}
          />
          <Route
            path='/'
            element={
              <AuthGuard>
                <MainLayout />
              </AuthGuard>
            }
          >
            <Route index element={<Home />} />
            <Route path='/contact' element={<Home />} />
            <Route path='/project' element={<Home />} />
            <Route path='/service' element={<Service />} />
            <Route path='/portfolio' element={<Home />} />
            <Route path='/blog' element={<Home />} />
            <Route path='/history' element={<Home />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>

        <ToastContainer
          position='top-right'
          autoClose={5001}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
        />
      </Suspense>
    </BrowserRouter>
  )
}

export default RoutesProvider
