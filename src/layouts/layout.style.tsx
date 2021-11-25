import styled from "styled-components";

interface Props {
  fixed?: boolean;
  top?: number;
  right?: number;
  left?: number;
  bottom?: number;
  mg?: string;
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

export const VeDivider = styled.div<Props>`
  margin: ${({ mg }) => (mg ? mg : 0)};
  height: 2px;
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
  z-index: 1;
`;

export const AppLayoutWrapper = styled.div`
  position: relative;
`;

export const AppContent = styled.div`
  min-height: calc(100vh - 122px - 149px);
  margin: 122px 0 0 0;
  display: flex;
`;

export const OverLayout = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(58, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
