import React from "react";
import { ImLocation2, ImFacebook, ImTwitter } from "react-icons/im";
import { MdPhoneInTalk } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaCopyright } from "react-icons/fa";
import FooterPart from "./FooterPart";

import { FooterContainer } from "./Footer.style";
import { LayoutContainer, PageContainer } from "layouts/layout.style";

const Footer = () => {
  return (
    <LayoutContainer className="bg-layout">
      <PageContainer>
        <FooterContainer>
          <FooterPart
            partIcon={<ImLocation2 />}
            title={"Visit"}
            links={[
              {
                name: "500 Terry Francois Street San Francisco, CA 94158",
                to: "",
              },
            ]}
          />
          <FooterPart
            partIcon={<MdPhoneInTalk />}
            title={"Call"}
            links={[
              {
                name: "T: 123-456-7890",
                to: "",
              },
              {
                name: "F: 123-456-7890",
                to: "",
              },
            ]}
          />
          <FooterPart
            partIcon={<IoMdMail />}
            title={"Contact"}
            links={[
              {
                name: "info@mysite.com",
                to: "",
              },
            ]}
            subicon={
              <>
                <ImFacebook /> <ImTwitter />
              </>
            }
          />
          <FooterPart
            partIcon={<FaCopyright />}
            title={"© 2023"}
            links={[
              {
                name: "© 2023 by Business Solutions. Proudly created with Wix.com",
                to: "",
              },
            ]}
          />
        </FooterContainer>
      </PageContainer>
    </LayoutContainer>
  );
};

export default Footer;
