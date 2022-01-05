import React, { useEffect, useState } from "react";
import { AvatarDiv, MyInfoCardDiv } from "./myinfocard.styled";
import { FiUser } from "react-icons/fi";
import { Div, Text } from "styles/globals.styled";
import { getMyInfo } from "utils/getMyInfo";

const MyInfoCard = () => {
  const [state, setState] = useState<any>({ name: "", email: "" });

  useEffect(() => {
    const user = getMyInfo();
    if (user.error) {
      setState({ ...state, name: user.email, email: user.email });
    } else {
      setState({ ...state, name: user.email, email: user.email });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MyInfoCardDiv>
      <AvatarDiv>
        <FiUser />
      </AvatarDiv>
      <Div mode="column">
        <Text fColor="#191D21" fSize={24} fWeight={500}>
          {state.name}
        </Text>
        <Text fColor="#191D21" fSize={18} mt={10}>
          {state.email}
        </Text>
      </Div>
    </MyInfoCardDiv>
  );
};

export default MyInfoCard;
