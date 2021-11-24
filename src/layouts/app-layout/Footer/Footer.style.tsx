import styled from "styled-components";

export const FooterContainer = styled.div`
  padding: 40px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 5%;
  justify-content: space-between;
`;

export const FooterPartDiv = styled.div`
  svg {
    font-size: 50px;
    margin-right: 10px;
  }
  display: flex;
`;

export const FooterPartContent = styled.div`
  * {
    display: block;
  }
  svg {
    margin-top: 10px;
    display: inline;
    font-size: 20px;
    margin-right: 5px;
  }
`;

export const FooterTitle = styled.div`
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600px;
  margin-bottom: 10px;
`;

export const FooterLink = styled.a`
  margin-bottom: 5px;
  cursor: pointer;
  transition: 0.2s all;
  :hover {
    color: #a1a1a1;
  }
`;
