import Button from "components/button";
import Input from "components/input";
import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";
import { Div, Text } from "styles/globals.styled";
import Checkbox from "components/checkbox";
import GoogleLogin from "react-google-login";
import { ToastContainer, toast } from "react-toastify";
import { loginAction } from "actions/authActions";
import { useAuthContext } from "context/state";
import { LoginValidation } from "utils/authValidation";
import credentials from "config/credentials.json";
import { isMobile } from "utils/isMobile";

const SignInSection = () => {
  const router = useRouter();
  const [state, setState] = useState({
    email: "",
    password: "",
    rememberFlag: false,
  });

  const [loading, setLoading] = useState<any>(false);

  const { authContext, setAuthContext } = useAuthContext();

  const [mobile, setmobile] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setmobile(isMobile(768));
    });
    setmobile(isMobile(768));
  }, []);

  const handleChange = (e: any) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRememberChange = () => {
    setState((prev) => ({ ...prev, rememberFlag: !prev.rememberFlag }));
  };

  const handleForget = () => {};

  const handleLogin = async () => {
    setLoading(true);
    const validation = LoginValidation(state);
    if (validation !== "success") {
      toast.error(validation, { theme: "colored", autoClose: 3000 });
    } else {
      const data = {
        email: state.email,
        password: state.password,
      };
      const result = await loginAction(data);
      if (result.error) {
        toast.error(result.error, { theme: "colored", autoClose: 3000 });
      } else {
        loginSuccess(result);
      }
    }
    setLoading(false);
  };

  const loginSuccess = (data: any) => {
    localStorage.setItem("user", data.token);
    setAuthContext({
      ...authContext,
      isAuthenticated: true,
      user: data.token,
    });

    router.push("/home");
  };

  const googleAuthSuccess = async (res: any) => {
    const userInfo = res.profileObj;
    const data: any = {
      email: userInfo.email,
    };
    const result = await loginAction(data);
    if (result.error) {
      toast.error(result.error, { theme: "colored", autoClose: 3000 });
    } else {
      loginSuccess(result);
    }
  };
  const googleAuthFailed = (err: any) => {
    toast.error("Google Authentication Failed", {
      theme: "colored",
      autoClose: 3000,
    });
  };

  return (
    <Div mode="column" w={80} maxW={500} m={mobile ? "30px auto" : "auto"}>
      <ToastContainer />
      <Text fSize={36} fWeight={800} mb={30}>
        Log into your account
      </Text>
      <Div mt={13} />
      <Input
        type="text"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={state.email}
        label="Email"
      />
      <Div mt={26} />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        value={state.password}
        label="Password"
      />
      <Div mt={13} />
      <Div justifyContent="space-between" m="20px 0 30px 0">
        <Text style={{ cursor: "pointer" }} onClick={handleRememberChange}>
          <Checkbox checked={state.rememberFlag} onChange={() => {}} />
          <span style={{ marginLeft: 8 }}>Remember me</span>
        </Text>
        <Text
          fColor="#4E6AF0"
          fSize={16}
          onClick={handleForget}
          style={{ cursor: "pointer" }}
        >
          Forgot Password?
        </Text>
      </Div>
      <Button
        label="Login now"
        onClick={handleLogin}
        loading={loading}
        style={{
          fSize: 16,
          fWeight: 700,
          fColor: "#fff",
          p: "12px 24px",
          bgColor: "#4E6AF0",
          radius: 5,
        }}
      />
      <GoogleLogin
        clientId={credentials.web.client_id}
        // clientId="561228158715-g8dqcj35lqseg3l4231hbh60bs1kggs3.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={googleAuthSuccess}
        onFailure={googleAuthFailed}
        // uxMode="popup"
        redirectUri={credentials.web.redirect_uris[0]}
        // redirectUri="http://localhost:3000"
        cookiePolicy="single_host_origin"
        render={(renderProps) => (
          <Button
            label={
              <>
                <FcGoogle /> Or sign-in with google
              </>
            }
            onClick={renderProps.onClick}
            style={{
              fSize: 16,
              fWeight: 700,
              fColor: "#fff",
              p: "12px 20px",
              bgColor: "rgb(45, 55, 72)",
              radius: 5,
              mt: 30,
            }}
          />
        )}
      />

      <Div justifyContent="center" mt={30}>
        <Text fColor="#616161" fSize={16}>
          Dont have an account?
        </Text>{" "}
        <Text
          fColor="#4E6AF0"
          fSize={16}
          style={{ cursor: "pointer" }}
          onClick={() => {
            router.push("/signup");
          }}
        >
          Join free today
        </Text>
      </Div>
    </Div>
  );
};

export default SignInSection;
