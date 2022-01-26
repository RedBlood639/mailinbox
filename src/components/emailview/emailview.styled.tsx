import styled from "styled-components";

export const EmailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ActionDiv = styled.div`
  display: flex;
  & > *:not(:last-child) {
    margin-right: 10px;
  }
`;
