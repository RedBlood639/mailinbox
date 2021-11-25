import styled from "styled-components";

export const FooterContainer = styled.div`
  padding: 40px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 5%;
  justify-content: space-between;
`;

export const FooterPartDiv = styled.div`
  :hover {
    & > svg {
      transform: rotate(-30deg) scale(1.2);
    }
  }
  svg {
    transition: all 0.2s;
    font-size: 40px;
    margin-right: 10px;
  }
  display: flex;
`;

export const FooterPartContent = styled.div`
  * {
    display: block;
  }
  svg {
    margin-top: 5px;
    display: inline;
    font-size: 16px;
    margin-right: 5px;
    color: #a1a1a1;
    transition: 0.2s all;
    :hover {
      color: white;
    }
    cursor: pointer;
  }
`;

export const FooterTitle = styled.div`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600px;
  margin-bottom: 5px;
`;

export const FooterLink = styled.a`
  font-size: 14px;
  margin-bottom: 5px;
  cursor: pointer;
  transition: 0.2s all;
  color: #a1a1a1;
  :hover {
    color: white;
  }
`;
