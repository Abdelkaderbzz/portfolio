import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { object } from 'yup'
import { setTokenToLocalStorage } from '../../helpers/logalStorage'
import { RootState } from '../index'
import appAxios from '../../helpers/axios';

export interface SignupState {
  isLoading: boolean
  error: string | null
  isAuthenticated: boolean
}

export interface SignupData {
  confirmPassword: string
  email: string
  password: string
  username: string
}
export interface LoginData {
  email: string
  password: string
}
const initialState: SignupState = {
  isLoading: false,
  error: null,
  isAuthenticated: false,

}

export const signupUser = createAsyncThunk<
  void,
  SignupData,
  { rejectValue: string }
>('signup/signupUser', async (userData: SignupData, thunkAPI) => {
  try {
    const response = await appAxios.post(
      `users/signup`,
      userData
    )
    return response.data
    // Handle success response
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error)
  }
})
export const loginUser = createAsyncThunk<
  void,
  LoginData,
  { rejectValue: string }
>('login/loginUser', async (userData: LoginData, thunkAPI) => {
  try {
    const response = await appAxios.post(
      `users/login`,
      userData
    )
    return response.data
    // Handle success response
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error)
  }
})

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload
  
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(signupUser.fulfilled, (state, { payload }) =>
      {


        //@ts-ignore
        toast.success(`Hello, ${payload.data.user.username} 🔥🔥🔥 `)
        state.isLoading = false
        state.error = null
        state.isAuthenticated = true
        //@ts-ignore
        setTokenToLocalStorage(payload?.token)

      })
      .addCase(signupUser.rejected, (state, { payload }) => {
        toast.error(
          //@ts-ignore
          `${payload?.response?.data?.message || 'wrong credentials 😔😔😔 '}`
        )
        state.isLoading = false
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.error = null
        state.isAuthenticated = true
        //@ts-ignore
        setTokenToLocalStorage(payload?.token)

        //@ts-ignore
        toast.success(`Welcome Back, ${payload?.user?.username} 🔥🔥🔥 `)
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        toast.error(
          //@ts-ignore
          `${payload?.response?.data?.message || 'wrong credentials 😔😔😔 '}`
        )
        state.isLoading = false
      })
  },
})
export const { setAuth } = signupSlice.actions

export default signupSlice.reducer
