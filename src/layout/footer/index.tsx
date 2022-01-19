import LogoSection from "components/logo";
import React, { useEffect, useState } from "react";
import { ImLocation2 } from "react-icons/im";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { MdPhoneInTalk } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";

import { Container, Div } from "styles/globals.styled";
import {
  FooterDescContent,
  FooterDescPart,
  FooterDescSection,
  FooterDescTitle,
  FooterSocialIcons,
} from "./footer.style";
import { isMobile } from "utils/isMobile";

const FooterSection = () => {
  const [state, setstate] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setstate(isMobile(850));
    });
    setstate(isMobile(850));
  }, []);

  return (
    <Container>
      <Div pt={50} justifyContent={state ? "center" : "space-between"}>
        {!state && <LogoSection />}
        <FooterDescSection>
          <FooterDescPart>
            <FooterDescTitle>Visit Us</FooterDescTitle>
            <FooterDescContent>
              <div>
                <ImLocation2 />
              </div>
              500 Terry Francois Street San Francisco, CA 94158
            </FooterDescContent>
          </FooterDescPart>
          <FooterDescPart>
            <FooterDescTitle>Contact Us</FooterDescTitle>
            <FooterDescContent>
              <div>
                <MdPhoneInTalk />
              </div>
              T: 123-456-7890
            </FooterDescContent>
            <FooterDescContent>
              <div>
                <FaMobileAlt />
              </div>
              F: 123-456-7890
            </FooterDescContent>
          </FooterDescPart>
          <FooterDescPart>
            <FooterDescTitle>Follow On</FooterDescTitle>
            <FooterSocialIcons>
              <FiFacebook />
              <FiTwitter />
              <FiInstagram />
            </FooterSocialIcons>
          </FooterDescPart>
        </FooterDescSection>
      </Div>
      <Div pt={30} pb={20} justifyContent="center">
        @Copyright {new Date().getFullYear()} - MadReply
      </Div>
    </Container>
  );
};

export default FooterSection;
