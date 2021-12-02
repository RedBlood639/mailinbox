import styled from "styled-components";

interface ViewPartProps {
  active?: boolean;
}

export const EmailViewPart = styled.div<ViewPartProps>`
  max-width: 500px;
  transform-origin: right center;
  transform: ${({ active }) => (active ? "scaleX(1)" : "scaleX(0)")};
  width: ${({ active }) => (active ? "100%" : "0%")};
  transition: all 0.2s;
`;
