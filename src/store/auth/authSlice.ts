import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import appAxios from "../../helpers/axios";
import { setTokensInLocalStorage } from "../../helpers/logalStorage";

export interface SignupState {
  isLoading: boolean;
  error: string | null;
  isAuthenticated: boolean;
}

export interface SignupData {
  confirmPassword: string;
  email: string;
  password: string;
  username: string;
}
export interface LoginData {
  email: string;
  password: string;
}
const initialState: SignupState = {
  isLoading: false,
  error: null,
  isAuthenticated: false,
};

export const signupUser = createAsyncThunk<
  any,
  SignupData,
  { rejectValue: any }
>("signup/signupUser", async (userData: SignupData, thunkAPI) => {
  try {
    const response = await appAxios.post(`users/signup`, userData);
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const loginUser = createAsyncThunk<any, LoginData, { rejectValue: any }>(
  "login/loginUser",
  async (userData: LoginData, thunkAPI) => {
    try {
      const response = await appAxios.post(`users/login`, userData);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, { payload }) => {
        toast.success(`Hello, ${payload.data.user.username} 🔥 `);
        state.isLoading = false;
        state.error = null;
        state.isAuthenticated = true;

        setTokensInLocalStorage(payload?.token, payload?.refrech_token);
      })
      .addCase(signupUser.rejected, (state, { payload }) => {
        toast.error(
          `${payload?.response?.data?.message || "wrong credentials 😔😔😔 "}`
        );
        state.isLoading = false;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.isAuthenticated = true;

        setTokensInLocalStorage(payload?.token, payload?.refrech_token);

        toast.success(`Welcome Back, ${payload?.user?.username} 🔥 `);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        toast.error(
          `${payload?.response?.data?.message || "wrong credentials 😔😔😔 "}`
        );
        state.isLoading = false;
      });
  },
});
export const { setAuth } = signupSlice.actions;

export default signupSlice.reducer;
