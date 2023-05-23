import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './../views/Home';
const Login = lazy(() => import('./../views/Auth/Login'));
const Register = lazy(() => import('./../views/Auth/Register'));
import NotFound from './../views/NotFound';
const MainLayout = lazy(() => import('../layouts/MainLayout'));
import Progress from '../components/Progress';
import AuthGuard from '../components/AuthGuard/AuthGuard';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setAuth } from '../store/auth/authSlice';
import { isTokenExpired } from '../helpers/axios';
import { getTokenFromLocalStorage } from '../helpers/logalStorage';
export interface SignupState {
  isLoading: boolean;
  error: string | null;
  isAuthenticated: boolean;
}
const RoutesProvider = () => {
  const { isAuthenticated } = useSelector<RootState, SignupState>(
    (state) => state.signup
  );
  const dispatch = useDispatch();
  const token = getTokenFromLocalStorage();
  if (token && !isTokenExpired(token)) {
    dispatch(setAuth(true));
  }
  console.log('routes', isAuthenticated);
  return (
    <BrowserRouter>
      <Suspense fallback={<Progress />}>
        <Routes>
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
            <Route path='/portfolio' element={<Home />} />
            <Route path='/blog' element={<Home />} />
            <Route path='/history' element={<Home />} />
          </Route>
          <Route path='*' element={<NotFound />} />
          <Route
            path='/auth/register'
            element={isAuthenticated ? <Navigate to='/' /> : <Register />}
          />
          <Route
            path='/auth/login'
            element={isAuthenticated ? <Navigate to='/' /> : <Login />}
          />
        </Routes>
        <ToastContainer
          position='top-right'
          autoClose={1501}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
        />
      </Suspense>
    </BrowserRouter>
  );
};

export default RoutesProvider;
