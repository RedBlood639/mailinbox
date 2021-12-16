import React from "react";
import GetStartSection from "view/getstarted";
import { GetStartedSection } from "view/getstarted/getstarted.styled";
import SignUpSection from "view/signup";

const index = () => {
  return (
    <GetStartedSection>
      <GetStartSection />
      <SignUpSection />
    </GetStartedSection>
  );
};

export default index;
