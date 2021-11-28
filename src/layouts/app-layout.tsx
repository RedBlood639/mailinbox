import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
// component
// import { ScrollTop } from "components/Button";
// layout
import { ScrollTop } from "components/Button";
import { Header, Footer } from "layouts/app-layout/index";
// styled component
import { AppContent, AppLayoutWrapper } from "./layout.style";

// -----------------------------------------------------------

const Layout = ({ children }: any) => {
  return (
    // <Scrollbars style={{ width: "100vw", height: "100vh" }}>
    <AppLayoutWrapper>
      <Header />
      <AppContent>{children}</AppContent>
      <Footer />
      <ScrollTop />
    </AppLayoutWrapper>
    // </Scrollbars>
  );
};

export default Layout;
