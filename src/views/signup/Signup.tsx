import { Button } from "components/Button";
import Image from "next/image";
import Input from "components/Input/Input";
import { OverLayout, VeDivider } from "layouts/layout.style";
import router from "next/router";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { validationSignUp } from "utils/validation";
import {
  AuthAction,
  AuthActionGroup,
  AuthDiv,
  AuthFormGroup,
  AuthPage,
  AuthTitle,
  FormGroup,
} from "views/signin/signin.style";
import BG from "assets/images/bg/bg.png";

const Signup = () => {
  const [state, setState] = useState<any>({
    fName: "",
    lName: "",
    email: "",
    pass1: "",
    pass2: "",
  });

  const handleInputChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSignUpClick = () => {
    if (validationSignUp(state) !== "success") {
      toast.error(validationSignUp(state), {
        theme: "colored",
      });
    } else {
      toast.success("Success", {
        theme: "colored",
      });
    }
  };

  return (
    // <AuthPage>
    //   <Image src={BG} layout="fill" objectFit="cover" />
    //   <ToastContainer autoClose={3000} />
    //   <OverLayout>
    <>
      <ToastContainer autoClose={3000} />
      <AuthDiv>
        <AuthTitle>Sign Up</AuthTitle>
        <AuthFormGroup>
          <FormGroup>
            <Input
              label={"First Name"}
              type="text"
              value={state.fName}
              onChange={handleInputChange}
              placeholder="First Name"
              name="fName"
            />
            <Input
              label={"Last Name"}
              type="text"
              value={state.lName}
              onChange={handleInputChange}
              placeholder="Last name"
              name="lName"
            />
          </FormGroup>
          <Input
            label={"Email"}
            type="email"
            value={state.email}
            onChange={handleInputChange}
            placeholder="Email"
            name="email"
          />
          <FormGroup>
            <Input
              label={"Password"}
              type="password"
              value={state.pass1}
              onChange={handleInputChange}
              placeholder="Password"
              name="pass1"
            />
            <Input
              label={"Confirm Password"}
              type="password"
              value={state.pass2}
              onChange={handleInputChange}
              placeholder="Confirm Password"
              name="pass2"
            />
          </FormGroup>
        </AuthFormGroup>
        <VeDivider mg="20px 0 0 0" />
        {/* <AuthActionGroup
          style={{ justifyContent: "flex-end", alignItems: "flex-end" }}
        >
          <span>Already had an account?&nbsp;</span>
          <AuthAction
            onClick={() => {
              router.push("/signin");
            }}
          >
            Go to sign in
          </AuthAction>
        </AuthActionGroup>
        <VeDivider mg="20px 0 0 0" /> */}
        <AuthActionGroup>
          <Button onClick={handleSignUpClick} label="Sign Up" />
        </AuthActionGroup>
      </AuthDiv>
    </>
    //   </OverLayout>
    // </AuthPage>
  );
};

export default Signup;
