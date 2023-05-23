import InputField from "../components/InputField/InputField";
import AnimatedImg from "./../../../assets/images/techny-dashboard-with-user-interface-elements.gif";
import { useFormik } from "formik";
import * as Yup from "yup";
import { redirect, useNavigate, Navigate } from 'react-router-dom';
import Overlay from "../../../components/Overlay/Overlay";
import Progress from "../../../components/Progress/Progress";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/index";
import { SignupState, loginUser } from "../../../store/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector<RootState, SignupState>(
    (state) => state.signup
  );
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .matches(
          /^([a-zA-Z0-9._%+-]+)@((?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})$/,
          "Invalid email address"
        )
        .test(
          "domain",
          "Email domain not allowed",
          (value: string | undefined) =>
            value !== undefined && value.endsWith("gmail.com")
        )
        .test(
          "no-special-chars",
          "Email contains disallowed characters",
          (value: string | undefined) =>
            !value || /^[^<>()\\\/[\]{}\s]+@[^\s]+$/.test(value)
        )
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password is too weak!"),
    }),

    onSubmit: (values) => {
      //@ts-ignore
      dispatch(loginUser(values));
    },
  });
  return (
    <>
      {isLoading ? (
        <>
          <Overlay />
          <Progress />
        </>
      ) : (
        ""
      )}
      <div className="register-container">
        <div className="register-page">
          <h1 style={{ color: "#2693d8" }}>Log in</h1>
          <form className="signup-form" onSubmit={formik.handleSubmit}>
            <InputField
              name="email"
              handleChange={formik.handleChange}
              value={formik.values.email}
              type="email"
              pHolderValue={"Enter your email"}
              labelValue={"Email*"}
              handleBlur={formik.handleBlur}
              classes={
                formik.touched.email && formik.errors.email ? "error" : ""
              }
              errorValue={
                formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : ""
              }
            />
            <InputField
              name="password"
              handleChange={formik.handleChange}
              value={formik.values.password}
              type="password"
              labelValue={"Password*"}
              pHolderValue={"Enter your password"}
              handleBlur={formik.handleBlur}
              classes={
                formik.touched.password && formik.errors.password ? "error" : ""
              }
              errorValue={
                formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : ""
              }
            />
            <div
              style={{
                width: "100%",
              }}
              className="register-btns"
            >
              <button
                className="normal-register"
                type="submit"
                style={{ backgroundColor: "#2693d8" }}
                // disabled={isLoading}
              >
                Log in
              </button>
              {/* <div className='google-register'>
              <img style={{ width: '24px' }} src={GoogleIcon} alt='' />
              <p>Sign up with Google</p>
            </div> */}
            </div>
            <p className="switch-login">
              I don't have an account?
              <span
                style={{ color: "#2693d8" }}
                onClick={() => navigate("/auth/register")}
              >
                {" "}
                Register
              </span>
            </p>
          </form>
        </div>
        <img className="animated-img" src={AnimatedImg} alt="" />
      </div>
    </>
  );
};

export default Login;
