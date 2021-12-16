import Button from "components/button";
import Input from "components/input";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";
import { Div, Text } from "styles/globals.styled";
import Checkbox from "components/checkbox";

const SignInSection = () => {
  const [state, setState] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleChange = (e: any) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Div mode="column" w={80} maxW={500} m="auto">
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
        <Text style={{ cursor: "pointer" }}>
          <Checkbox checked={false} onChange={() => {}} />
          <span style={{ marginLeft: 8 }}>Remember me</span>
        </Text>
        <Text fColor="#4E6AF0" fSize={16} style={{ cursor: "pointer" }}>
          Forgot Password?
        </Text>
      </Div>
      <Button
        label="Login now"
        onClick={() => {}}
        style={{
          fSize: 16,
          fWeight: 700,
          fColor: "#fff",
          p: "12px 24px",
          bgColor: "#4E6AF0",
          radius: 5,
        }}
      />
      <Button
        label={
          <>
            <FcGoogle /> Or sign-in with google
          </>
        }
        onClick={() => {}}
        style={{
          fSize: 16,
          fWeight: 700,
          fColor: "#fff",
          p: "12px 24px",
          bgColor: "#2D3748",
          radius: 5,
          mt: 30,
        }}
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
