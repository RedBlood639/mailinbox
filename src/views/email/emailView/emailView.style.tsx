import styled from "styled-components";

interface ViewPartProps {
  active?: boolean;
}

export const EmailViewPart = styled.div<ViewPartProps>`
  max-width: 500px;
  transform-origin: right center;
  transform: ${({ active }) => (active ? "scale(1)" : "scale(0)")};
  width: ${({ active }) => (active ? "100%" : "0%")};
  transition: all 0.2s;
`;
