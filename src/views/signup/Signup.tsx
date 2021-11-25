import { Button } from "components/Button";
import Input from "components/Input/Input";
import { OverLayout } from "layouts/layout.style";
import React from "react";
import {
  AuthActionGroup,
  AuthDiv,
  AuthFormGroup,
  AuthPage,
  AuthTitle,
} from "views/signin/signin.style";

const Signup = () => {
  return (
    <AuthPage>
      <OverLayout>
        <AuthDiv>
          <AuthTitle>Sign Up</AuthTitle>
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

export default Signup;
