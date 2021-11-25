import React, { useState } from "react";
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
import { isEmail } from "utils/validation";
import { MdAccountCircle } from "react-icons/md";

const SignIn = () => {
  const [state, setState] = useState<any>({ email: "", password: "" });

  const handleInputChange = (e: any) => {
    setState({ [e.target.name]: e.target.value });
  };

  const handleSignIn = () => {
    if (state.email === "" || state.password === "") {
      toast.error("Incorrect email or password!", {
        theme: "colored",
      });
    } else {
      if (!isEmail(state.email)) {
        toast.error("Incorrect email or password!", {
          theme: "colored",
        });
      }
    }
  };

  return (
    <AuthPage>
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
            <AuthAction>Create new account</AuthAction>
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
