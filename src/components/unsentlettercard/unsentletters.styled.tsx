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
  padding: 1px 20px;
  max-height: 300px;
  overflow: auto;
`;

export const Item = styled.div`
  background-color: #ededed;
  padding: 0 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;

  -webkit-box-orient: vertical;
  line-height: 40px;
  border-radius: 5px;
  border: 1px solid #dddddd;
  cursor: pointer;
  transition: all 0.2s;
  :hover {
    background-color: #ffdddd;
  }
`;

export const EmptyDiv = styled.div`
  max-width: 240px;
  width: 100%;
  margin: auto;
`;
