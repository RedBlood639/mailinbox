import React, { useEffect, useState } from "react";

// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
// icons
import { IoIosArrowUp } from "react-icons/io";

// type
interface ScrollButtonProps {
  showButton: boolean;
  [key: string]: unknown;
}
// styeld component
const ScrollButtonWrapper = styled.div<ScrollButtonProps>`
  position: fixed;
  width: 74px;
  height: 74px;
  background: ${themeGet("colors.primary.regular")};
  color: ${themeGet("colors.white")};
  text-transform: uppercase;
  text-align: center;
  bottom: 25px;
  right: 25px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: ${({ showButton }) => (showButton ? 100 : 0)};
  transform: scale(${({ showButton }) => (showButton ? 1 : 0)});
  transition: all 0.4s ease-in;
  z-index: 100;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #f7b40350;
  box-shadow: 0 0 10px #f7b403;
  border-radius: 50%;
  font-size: 16px;
  color: white;
`;

// --------------------------------------------------------

const ScrollTop = () => {
  const [enable, setEnable] = useState(false);
  let timeout: any;
  const handleOnScroll = (isMounted: any) => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      isMounted && setEnable(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        isMounted && setEnable(false);
      }, 2000);
    } else {
      isMounted && setEnable(false);
    }
  };
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  useEffect(() => {
    let isMounted = true;
    if (isMounted)
      window.addEventListener("scroll", () => handleOnScroll(isMounted));
    return () => {
      isMounted = false;
      window.removeEventListener("scroll", () => {
        return;
      });
    };
  }, []);
  return (
    <>
      <ScrollButtonWrapper onClick={scrollToTop} showButton={enable}>
        <ButtonDiv>
          <IoIosArrowUp />
          <span>Top</span>
        </ButtonDiv>
      </ScrollButtonWrapper>
    </>
  );
};
export default ScrollTop;
