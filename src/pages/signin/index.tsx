import React from "react";
import GetStartSection from "view/getstarted";
import { GetStartedSection } from "view/getstarted/getstarted.styled";
import SignInSection from "view/signin";

const SignInPage = () => {
  return (
    <GetStartedSection>
      <GetStartSection />
      <SignInSection />
    </GetStartedSection>
  );
};

export default SignInPage;
