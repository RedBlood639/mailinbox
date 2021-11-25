import React from "react";
// component
// import { ScrollTop } from "components/Button";
// layout
import { Header, Footer } from "layouts/app-layout/index";
// styled component
import { AppContent, AppLayoutWrapper } from "./layout.style";

// -----------------------------------------------------------

const Layout = ({ children }: any) => {
  return (
    <AppLayoutWrapper>
      <Header />
      <AppContent>{children}</AppContent>
      <Footer />
      {/* <ScrollTop /> */}
    </AppLayoutWrapper>
  );
};

export default Layout;
