import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { RootState } from "../../store/index";
import { setAuth } from "../../store/auth/authSlice";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  getTokenFromLocalStorage,
  removeTokensFromLocalStorage,
  getRefrechTokenFromLocalStorage,
  setTokenToLocalStorage,
} from "../../helpers/logalStorage";
import { isTokenExpired, tokenAxios } from "../../helpers/axios";
import { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import Progress from "../Progress/Progress";

export interface SignupState {
  isLoading: boolean;
  error: string | null;
  isAuthenticated: boolean;
}
const AuthGuard = ({ children }: any) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const { isAuthenticated } = useSelector<RootState, SignupState>(
    (state) => state.signup
  );

  const token = getTokenFromLocalStorage();
  const refrechToken = getRefrechTokenFromLocalStorage();
  useEffect(() => {
    if (!refrechToken) {
      removeTokensFromLocalStorage();
      dispatch(setAuth(false));
      window.location.href = "/auth/login";
    } else if (
      (!token && !isTokenExpired(refrechToken)) ||
      (isTokenExpired(token) && refrechToken)
    ) {
      const refrechToken = async () => {
        const refrechToken = getRefrechTokenFromLocalStorage();
        try {
          const response: AxiosResponse<{ accessToken: string }> =
            await tokenAxios.post(`users/refrech`, {
              refrechToken,
            });
          const newToken = response?.data?.accessToken;

          setTokenToLocalStorage(newToken);
          dispatch(setAuth(true));
        } catch (error) {
          console.error("refrech token expired Redirect to login");
          dispatch(setAuth(false));
          {
            refrechToken && removeTokensFromLocalStorage();
            toast.info("login to get acess");
          }
        }
      };
      refrechToken();
    } else {
      dispatch(setAuth(true));
    }
    setIsLoading(false);
  }, [dispatch, token]);
  if (isLoading) {
    return <Progress />;
  }
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" />;
  }
  return <>{children}</>;
};
export default AuthGuard;
