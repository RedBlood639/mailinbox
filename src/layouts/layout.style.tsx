import styled from "styled-components";

export interface Props {
  fixed?: boolean;
  top?: number;
  right?: number;
  left?: number;
  bottom?: number;
  mg?: string;
  pd?: string;
  fColor?: string;
  fSize?: number;
  height?: number;
  textTransform?: string;
  bgColor?: string;
}

export const PageContainer = styled.div`
  max-width: 1240px;
  width: 90%;
  margin: auto;
`;

export const HoDivider = styled.div<Props>`
  width: 2px;
  margin: ${({ mg }) => (mg ? mg : "0")};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "white")};
  border-radius: 2px;
  height: ${({ height }) => (height ? height + "px" : "auto")};
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
  z-index: 2;
`;

export const AppLayoutWrapper = styled.div`
  position: relative;
`;

export const AppContent = styled.div`
  min-height: calc(100vh - 91px - 149px);
  margin: 91px 0 0 0;
`;

export const OverLayout = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(58, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageDiv = styled.div`
  width: 100%;
  height: 100%;
`;

export const PageTitle = styled.div<Props>`
  font-size: ${({ fSize }) => (fSize ? fSize : 40)}px;
  font-weight: 900;
  text-transform: ${({ textTransform }) =>
    textTransform ? textTransform : "uppercase"};
  color: ${({ fColor }) => (fColor ? fColor : "#fff")};
  padding: ${({ pd }) => (pd ? pd : "0")};
`;

export const WhitePageSection = styled.div`
  background: #fff;
  height: 100vh;
  width: 100%;
  display: flex;
`;

export const HomeContentSection = styled.div`
  position: relative;
  width: 100%;
  max-width: calc(100vw - 170px);
`;

export const HomeContent = styled.div`
  padding-top: 72px;
  height: calc(100vh - 72px);
  overflow: auto;
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background-color: rgb(0, 30, 60) !important;
    border-radius: 10px;
  }
`;

export const HomeMainContent = styled.div`
  width: calc(100% - 100px);
  padding: 50px;
  min-height: calc(100vh - 72px - 58px - 100px);
`;

interface BadgeProps {
  type?: string;
}

export const Badge = styled.span<BadgeProps>`
  font-size: 14px;
  padding: 3px;
  color: white;
  border-radius: 5px;
  background-color: ${({ type }) => {
    switch (type) {
      case "primary":
        return "#28a745";
      case "secondary":
        return "#ffc107";
      case "error":
        return "#6c757d";
      default:
        break;
    }
  }};
`;
