import React from "react";
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
  return (
    <AuthPage>
      <OverLayout>
        <AuthDiv>
          <AuthTitle>Sign In</AuthTitle>
          <AuthFormGroup>
            <Input
              type="text"
              value="Name"
              onChange={() => {}}
              placeholder="name"
              name="name"
            />
            <Input
              type="email"
              value="Email"
              onChange={() => {}}
              placeholder="name"
              name="name"
            />
          </AuthFormGroup>
          <AuthActionGroup>
            <Button onClick={() => {}} label="Sign In" />
            <Button onClick={() => {}} label="Sign Up" />
          </AuthActionGroup>
        </AuthDiv>
      </OverLayout>
    </AuthPage>
  );
};

export default SignIn;
