import styled from "styled-components";

export const UnsentCard = styled.div`
  width: 100%;
  padding: 30px 0;
  background-color: white;
  border-radius: 12px;
`;

export const List = styled.div`
  & > *:not(:first-child) {
    margin-top: 15px;
  }
  padding: 0 20px;
`;

export const Item = styled.div`
  background-color: #ededed;
  padding: 10px;
`;

export const EmptyDiv = styled.div`
  max-width: 240px;
  width: 100%;
  margin: auto;
`;
