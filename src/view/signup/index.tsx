import Button from "components/button";
import Input from "components/input";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";

import { Div, Text } from "styles/globals.styled";
const SignUpSection = () => {
  const router = useRouter();
  return (
    <Div mode="column" w={80} maxW={500} m="auto">
      <Text fSize={36} fWeight={800} mb={32}>
        Create your account
      </Text>
      <Button
        label={
          <>
            <FcGoogle /> Continue with Google
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
        }}
      />
      <Text fColor="#C4C4C4" tAlign="center" m="30px 0">
        -- OR --
      </Text>
      <Div mt={13} />
      <Input
        type="text"
        name="email"
        placeholder="Email"
        onChange={() => {}}
        value="value"
        label="Email"
      />
      <Div mt={13} />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        onChange={() => {}}
        value="value"
        label="Password"
      />
      <Div mt={13} />
      <Input
        type="password"
        name="password2"
        placeholder="Confirm Password"
        onChange={() => {}}
        value="value"
        label="Confirm Password"
      />
      <Div mt={26} />
      <Button
        label="Create Account"
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

      <Div justifyContent="center" mt={30}>
        <Text fColor="#616161" fSize={16}>
          Already have an account?
        </Text>{" "}
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
