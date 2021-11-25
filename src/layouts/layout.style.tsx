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
  width: 80%;
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

export const AppLayoutWrapper = styled.div`
  position: relative;
`;

export const AppContent = styled.div`
  min-height: calc(100vh - 122px - 149px);
  margin: 122px 0 0 0;
`;
