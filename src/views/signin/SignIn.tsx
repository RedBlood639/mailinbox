import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Input from "components/Input/Input";
import {
  AuthPage,
  AuthDiv,
  AuthTitle,
  AuthFormGroup,
  AuthActionGroup,
} from "./signin.style";
import { OverLayout } from "layouts/layout.style";
import { Button } from "components/Button";

const SignIn = () => {
  const [state, setState] = useState<any>({ email: "", password: "" });

  const handleInputChange = (e: any) => {
    setState({ [e.target.name]: e.target.value });
  };

  const handleSignIn = () => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (state.email === "" || state.password === "") {
      toast.error("Incorrect Email or Password!");
    }
  };

  return (
    <AuthPage>
      <ToastContainer />
      <OverLayout>
        <AuthDiv>
          <AuthTitle>Sign In</AuthTitle>
          <AuthFormGroup>
            <Input
              type="email"
              value={state.email}
              onChange={handleInputChange}
              placeholder="Email"
              name="email"
            />
            <Input
              type="password"
              value={state.password}
              onChange={handleInputChange}
              placeholder="password"
              name="password"
            />
          </AuthFormGroup>
          <AuthActionGroup>
            <Button onClick={handleSignIn} label="Sign In" />
            <Button onClick={() => {}} label="Sign Up" />
          </AuthActionGroup>
        </AuthDiv>
      </OverLayout>
    </AuthPage>
  );
};

export default SignIn;
