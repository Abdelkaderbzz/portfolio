import InputField from '../components/InputField/InputField'
import AnimatedImg from './../../../assets/images/taxi-data-science-graphs-on-pc-screen.gif'
import GoogleIcon from './../../../assets/images/icons8-google-3d-fluency-32.png'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { useDispatch, useSelector } from 'react-redux'
import {
  signupUser,
  SignupData,
  SignupState,
} from '../../../store/auth/authSlice'
import { toast } from 'react-toastify'
import Progress from '../../../components/Progress/Progress'
import { RootState } from '../../../store/index'
import Overlay from '../../../components/Overlay/Overlay'
import { Navigate, useNavigate } from 'react-router-dom'

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isLoading } = useSelector<
    RootState,
    SignupState
  >((state) => state.signup)
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },

    validationSchema: Yup.object({
      username: Yup.string()
        .min(4, 'Invalid User Name address')
        .required('User Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .matches(
          /^([a-zA-Z0-9._%+-]+)@((?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})$/,
          'Invalid email address'
        )
        .test(
          'domain',
          'Email domain not allowed',
          (value: string | undefined) =>
            value !== undefined && value.endsWith('gmail.com')
        )
        .test(
          'no-special-chars',
          'Email contains disallowed characters',
          (value: string | undefined) =>
            !value || /^[^<>()\\\/[\]{}\s]+@[^\s]+$/.test(value)
        )
        .required('Email is required'),
      password: Yup.string()
        .required('Password is required')
        .min(6, 'Password is too weak!'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
        .required('Confirm Password is required'),
    }),

    onSubmit: (values: SignupData) => {
      //@ts-ignore
      dispatch(signupUser(values))
    },
  })

  return (
    <>
      {isLoading ? (
        <>
          <Overlay />
          <Progress />
        </>
      ) : (
        ''
      )}
      <div className='register-container'>
        <div className='register-page'>
          <h1>Sign up</h1>
          <form className='signup-form' onSubmit={formik.handleSubmit}>
            <InputField
              type='text'
              name='username'
              handleChange={formik.handleChange}
              value={formik.values.username}
              labelValue={'Username*'}
              pHolderValue={'Enter your username'}
              handleBlur={formik.handleBlur}
              classes={
                formik.touched.username && formik.errors.username ? 'error' : ''
              }
              errorValue={
                formik.touched.username && formik.errors.username
                  ? formik.errors.username
                  : ''
              }
            />
            <InputField
              name='email'
              handleChange={formik.handleChange}
              value={formik.values.email}
              type='email'
              pHolderValue={'Enter your email'}
              labelValue={'Email*'}
              handleBlur={formik.handleBlur}
              classes={
                formik.touched.email && formik.errors.email ? 'error' : ''
              }
              errorValue={
                formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : ''
              }
            />
            <InputField
              name='password'
              handleChange={formik.handleChange}
              value={formik.values.password}
              type='password'
              labelValue={'Password*'}
              pHolderValue={'Enter your password'}
              handleBlur={formik.handleBlur}
              classes={
                formik.touched.password && formik.errors.password ? 'error' : ''
              }
              errorValue={
                formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : ''
              }
            />
            <InputField
              name='confirmPassword'
              handleChange={formik.handleChange}
              value={formik.values.confirmPassword}
              type='password'
              labelValue={'ConfirmPassword*'}
              pHolderValue={'confirm your password'}
              handleBlur={formik.handleBlur}
              classes={
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? 'error'
                  : ''
              }
              errorValue={
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? formik.errors.confirmPassword
                  : ''
              }
            />
            <div className='register-btns'>
              <button
                className='normal-register'
                type='submit'
                disabled={isLoading}
              >
                Get started
              </button>
              <div className='google-register'>
                <img style={{ width: '24px' }} src={GoogleIcon} alt='' />
                <p>Sign up with Google</p>
              </div>
            </div>
            <p className='switch-login'>
              Aready have an account?
              <span onClick={() => navigate('/auth/login')}> Login</span>
            </p>
          </form>
        </div>
        <img className='animated-img' src={AnimatedImg} alt='' />
      </div>
    </>
  )
}

export default Register
