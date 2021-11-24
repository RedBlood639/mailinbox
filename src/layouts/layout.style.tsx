import styled from "styled-components";

interface Props {
  fixed?: boolean;
  top?: number;
  right?: number;
  left?: number;
  bottom?: number;
}

export const PageContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: auto;
`;

export const HoDivider = styled.div`
  width: 2px;
  background-color: white;
  border-radius: 2px;
`;

export const LayoutContainer = styled.div<Props>`
  width: 100%;
  box-shadow: 0 0px 6px rgb(61, 0, 0);
  ${({ fixed }) => fixed && "position: fixed;"}
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  left: ${({ left }) => left};
  bottom: ${({ bottom }) => bottom};
`;
