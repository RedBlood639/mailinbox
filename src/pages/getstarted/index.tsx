import Button from "components/button";
import { useReducer } from "react";
import React from "react";
import { Div, Text } from "styles/globals.styled";
import GetStartSection from "view/getstarted";
import {
  GetStartedSection,
  GetStartText,
} from "view/getstarted/getstarted.styled";
import { useRouter } from "next/router";

const GetStartedPage = () => {
  const router = useRouter();
  return (
    <GetStartedSection>
      <GetStartSection />
      <GetStartText>
        <Text fSize={72} fWeight={800}>
          Publish
          <br />
          unsent letters
          <br />
          and emails
        </Text>
        <Text fSize={24} fWeight={500} m="24px 0">
          Speak your mind here
        </Text>
        <Div gap={16}>
          <Button
            label="Sign In"
            onClick={() => {
              router.push("/signin");
            }}
            style={{
              fSize: 16,
              fWeight: 700,
              fColor: "#fff",
              p: "12px 24px",
              bgColor: "#4E6AF0",
              radius: 4,
            }}
          />
          <Button
            label="Sign Up"
            onClick={() => {
              router.push("/signup");
            }}
            style={{
              fSize: 16,
              fWeight: 700,
              p: "12px 24px",
              bColor: "#191D21",
              radius: 4,
            }}
          />
        </Div>
      </GetStartText>
    </GetStartedSection>
  );
};

export default GetStartedPage;
