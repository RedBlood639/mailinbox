import React from "react";
import Image from "next/image";

import { HowToPartDiv } from "./howto.style";
import { OverLayout, PageContainer, PageTitle } from "layouts/layout.style";

import bg from "assets/images/bg/bg-2.jpg";

const HowToPart = () => {
  return (
    <HowToPartDiv id="howto">
      <Image src={bg} alt="bg" objectFit="cover" layout="fill" />
      <OverLayout>
        <PageContainer>
          <PageTitle pd="50px 0">How To</PageTitle>
        </PageContainer>
      </OverLayout>
    </HowToPartDiv>
  );
};

export default HowToPart;
