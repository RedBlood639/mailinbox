import React from "react";
import { FiPaperclip } from "react-icons/fi";
// import { Div, Text } from "styles/globals.styled";
import { LinkEmailDiv } from "./linkemail.styled";

const LinkEmailCard = ({ onClick }: any) => {
  return (
    <LinkEmailDiv onClick={onClick}>
      <div>
        <FiPaperclip />
      </div>
      {/* <Text
        ml={20}
        fSize={15}
        fWeight={700}
        tAlign="center"
        fColor="#5C5C5C"
        style={{ lineHeight: "18px" }}
      >
        LINK YOUR
        <br /> EMAIL
        <br /> WITH US
      </Text> */}
    </LinkEmailDiv>
  );
};

export default LinkEmailCard;
