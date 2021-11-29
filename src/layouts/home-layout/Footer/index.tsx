import React from "react";
import { HomeFooterSection } from "./footer.style";

const index = () => {
  return (
    <HomeFooterSection>
      Copyright &copy; {new Date().getFullYear()} Madreply
    </HomeFooterSection>
  );
};

export default index;
