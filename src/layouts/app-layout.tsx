import React, { useEffect, useState } from "react";
import router from "next/router";
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
  WhitePageSection,
} from "./layout.style";
import Scrollbar from "react-custom-scrollbars";

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
          <HomeSidebar />
          <HomeContentSection>
            <HomeHeader />
            <HomeContent>
              <HomeMainContent>{children}</HomeMainContent>
              <HomeFooter />
            </HomeContent>
          </HomeContentSection>
        </WhitePageSection>
      )}

      <ScrollTop />
    </AppLayoutWrapper>
    // </Scrollbars>
  );
};

export default Layout;
