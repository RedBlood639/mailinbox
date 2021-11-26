import React, { useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import Input from "components/Input/Input";
import {
  AuthPage,
  AuthDiv,
  AuthTitle,
  AuthFormGroup,
  AuthActionGroup,
  AuthAction,
} from "./signin.style";
import { OverLayout, VeDivider } from "layouts/layout.style";
import { Button } from "components/Button";
import { validationSignIn } from "utils/validation";
import router from "next/router";
import BG from "assets/images/bg/bg.png";

const SignIn = () => {
  const [state, setState] = useState<any>({ email: "", password: "" });

  const handleInputChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSignIn = () => {
    if (validationSignIn(state) !== "success") {
      toast.error(validationSignIn(state), {
        theme: "colored",
      });
    } else {
      toast.success(validationSignIn(state), {
        theme: "colored",
      });
    }
  };

  return (
    <AuthPage>
      <Image src={BG} layout="fill" objectFit="cover" />
      <ToastContainer autoClose={3000} />
      <OverLayout>
        <AuthDiv>
          <AuthTitle>Sign In</AuthTitle>
          <AuthFormGroup>
            <Input
              label="Email"
              type="email"
              value={state.email}
              onChange={handleInputChange}
              placeholder="Email"
              name="email"
            />
            <Input
              label="Password"
              type="password"
              value={state.password}
              onChange={handleInputChange}
              placeholder="Password"
              name="password"
            />
          </AuthFormGroup>
          <VeDivider mg="20px 0 0 0" />
          <AuthActionGroup>
            <AuthAction>Forgot password?</AuthAction>
            <AuthAction
              onClick={() => {
                router.push("/signup");
              }}
            >
              Create new account
            </AuthAction>
          </AuthActionGroup>
          <VeDivider mg="20px 0 0 0" />
          <AuthActionGroup>
            <Button onClick={handleSignIn} label="Sign In" />
          </AuthActionGroup>
        </AuthDiv>
      </OverLayout>
    </AuthPage>
  );
};

export default SignIn;
