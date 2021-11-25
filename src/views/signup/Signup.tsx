import { Button } from "components/Button";
import Input from "components/Input/Input";
import { OverLayout, VeDivider } from "layouts/layout.style";
import React from "react";
import {
  AuthActionGroup,
  AuthDiv,
  AuthFormGroup,
  AuthPage,
  AuthTitle,
  FormGroup,
} from "views/signin/signin.style";

const Signup = () => {
  return (
    <AuthPage>
      <OverLayout>
        <AuthDiv>
          <AuthTitle>Sign Up</AuthTitle>
          <AuthFormGroup>
            <FormGroup>
              <Input
                label={"First Name"}
                type="text"
                value="Name"
                onChange={() => {}}
                placeholder="name"
                name="name"
              />
              <Input
                label={"Last Name"}
                type="text"
                value="Name"
                onChange={() => {}}
                placeholder="name"
                name="name"
              />
            </FormGroup>
            <Input
              label={"Email"}
              type="email"
              value="Email"
              onChange={() => {}}
              placeholder="name"
              name="name"
            />
            <FormGroup>
              <Input
                label={"Password"}
                type="text"
                value="Name"
                onChange={() => {}}
                placeholder="name"
                name="name"
              />
              <Input
                label={"Confirm Password"}
                type="text"
                value="Name"
                onChange={() => {}}
                placeholder="name"
                name="name"
              />
            </FormGroup>
          </AuthFormGroup>
          <VeDivider mg="20px 0 0 0" />
          <AuthActionGroup>
            <Button onClick={() => {}} label="Sign Up" />
          </AuthActionGroup>
        </AuthDiv>
      </OverLayout>
    </AuthPage>
  );
};

export default Signup;
