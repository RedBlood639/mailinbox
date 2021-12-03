import React, { useEffect, useState } from "react";
import router from "next/router";
import Image from "next/image";
// component
import { ScrollTop } from "components/Button";
// layout
import { AppHeader, AppFooter } from "layouts/app-layout/index";
import { HomeSidebar, HomeHeader, HomeFooter } from "layouts/home-layout";
// styled component
import {
  AppContent,
  AppLayoutWrapper,
  HomeContent,
  HomeContentSection,
  HomeMainContent,
  OverLayout,
  WhitePageSection,
} from "./layout.style";
import bg from "assets/images/bg/bg.png";

// -----------------------------------------------------------

const Layout = ({ children }: any) => {
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(router.route);
  }, [router]);
  return (
    // <Scrollbars style={{ width: "100vw", height: "100vh" }}>
    <AppLayoutWrapper>
      {path === "/" ? (
        <>
          <AppHeader />
          <AppContent>{children}</AppContent>
          <AppFooter />
        </>
      ) : (
        <WhitePageSection>
          <Image src={bg} layout="fill" objectFit="cover" />
          <OverLayout bgColor="rgba(71, 71, 71, 0.603)">
            <HomeSidebar />
            <HomeContentSection>
              <HomeHeader />
              <HomeContent>
                <HomeMainContent>{children}</HomeMainContent>
                <HomeFooter />
              </HomeContent>
            </HomeContentSection>
          </OverLayout>
        </WhitePageSection>
      )}

      <ScrollTop />
    </AppLayoutWrapper>
    // </Scrollbars>
  );
};

export default Layout;
