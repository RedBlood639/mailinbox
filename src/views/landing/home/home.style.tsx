import styled from "styled-components";
import bg from "assets/images/bg/bg.png";

export const HomePartDiv = styled.div`
  background: url(${bg.src}) no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: calc(100vh - 91px - 149px);
`;
