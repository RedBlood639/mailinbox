import Button from "components/button";
import Input from "components/input";
import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";

import { Div, Text } from "styles/globals.styled";
import { EmailValidation, passValidation } from "utils/authValidation";
import GoogleLogin from "react-google-login";
import { registerAction } from "actions/authActions";

import credentials from "config/credentials.json";
import { isMobile } from "utils/isMobile";

const SignUpSection = () => {
  const router = useRouter();
  const [state, setState] = useState({
    email: "",
    pass1: "",
    pass2: "",
    isAllow: false,
  });
  const [flag, setFlag] = useState(true);

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

  const handleSignUp = async () => {
    const validation = passValidation(state);
    if (validation !== "success") {
      toast.error(validation, { theme: "colored", autoClose: 3000 });
    } else {
      const data = {
        email: state.email,
        password: state.pass1,
        isAllow: state.isAllow,
      };

      const res = await registerAction(data);
      if (res.error) {
        toast.error(res.error, { theme: "colored", autoClose: 3000 });
      } else {
        toast.success(res.success, { theme: "colored", autoClose: 3000 });
      }
    }
  };

  const handleGotocreate = () => {
    const validation = EmailValidation(state);
    if (validation !== "success") {
      toast.error(validation, { theme: "colored", autoClose: 3000 });
    } else {
      setFlag(false);
      setState((prev) => ({ ...prev, isAllow: false }));
    }
  };

  const googleAuthSuccess = (res: any) => {
    const userInfo = res.profileObj;
    setState({
      ...state,
      email: userInfo.email,
      // fName: userInfo.givenName,
      // lName: userInfo.familyName,
      isAllow: true,
    });
    setFlag(false);
  };

  const googleAuthFailed = (err: any) => {
    toast.error("Google Authentication Failed", {
      theme: "colored",
    });
    setFlag(true);
    setState({ email: "", pass1: "", pass2: "", isAllow: false });
  };

  return (
    <Div mode="column" w={80} maxW={500} m={mobile ? "30px auto" : "auto"}>
      <ToastContainer />
      <Text fSize={36} fWeight={800} mb={32}>
        Create your account
      </Text>
      <GoogleLogin
        // 561228158715-g8dqcj35lqseg3l4231hbh60bs1kggs3.apps.googleusercontent.com
        clientId={credentials.web.client_id}
        buttonText="Login"
        onSuccess={googleAuthSuccess}
        onFailure={googleAuthFailed}
        // uxMode="popup"
        // redirectUri="http://localhost:3000"
        redirectUri={credentials.web.redirect_uris[0]}
        cookiePolicy="single_host_origin"
        render={(renderProps) => (
          <Button
            label={
              <>
                <FcGoogle /> Continue with Google
              </>
            }
            onClick={renderProps.onClick}
            style={{
              fSize: 16,
              fWeight: 700,
              fColor: "#fff",
              p: "12px 20px",
              bgColor: "#2D3748",
              radius: 5,
            }}
          />
        )}
      />

      <Text fColor="#C4C4C4" tAlign="center" m="30px 0">
        -- OR --
      </Text>
      <Div mt={13} />
      <Input
        type="text"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={state.email}
        label="Email"
        disabled={!flag}
      />
      <Div mt={13} />
      {!flag && (
        <>
          <Input
            type="password"
            name="pass1"
            placeholder="Password"
            onChange={handleChange}
            value={state.pass1}
            label="Password"
          />
          <Div mt={13} />
          <Input
            type="password"
            name="pass2"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={state.pass2}
            label="Confirm Password"
          />
        </>
      )}
      <Div mt={26} />
      {flag ? (
        <Button
          label="Go to Create"
          onClick={handleGotocreate}
          style={{
            fSize: 16,
            fWeight: 700,
            fColor: "#fff",
            p: "12px 24px",
            bgColor: "#4E6AF0",
            radius: 5,
          }}
        />
      ) : (
        <Button
          label="Create Account"
          onClick={handleSignUp}
          style={{
            fSize: 16,
            fWeight: 700,
            fColor: "#fff",
            p: "12px 24px",
            bgColor: "#4E6AF0",
            radius: 5,
          }}
        />
      )}

      <Div justifyContent="center" mt={30} gap={5}>
        <Text fColor="#616161" fSize={16}>
          Already have an account?
        </Text>
        <Text
          fColor="#4E6AF0"
          fSize={16}
          style={{ cursor: "pointer" }}
          onClick={() => {
            router.push("/signin");
          }}
        >
          Login
        </Text>
      </Div>
    </Div>
  );
};

export default SignUpSection;
