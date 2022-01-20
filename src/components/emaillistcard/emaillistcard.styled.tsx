import styled from "styled-components";

export const EmailListCardDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: white;
  transition: all 0.2s;
  padding: 15px 25px;
  :hover {
    box-shadow: 0 0 5px #55000080;
  }
  cursor: pointer;
`;

export const EmailListContent = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;

  -webkit-box-orient: vertical;
  line-height: 25px;
`;
