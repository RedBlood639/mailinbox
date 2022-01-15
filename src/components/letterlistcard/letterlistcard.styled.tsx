import styled from "styled-components";

export const LetterListCardDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 25px 10px;
  border-radius: 10px;
  background-color: white;
  transition: all 0.2s;
  :hover {
    box-shadow: 0 0 5px #55000080;
  }
  cursor: pointer;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  svg {
    width: 30px;
    height: 30px;
    color: #5c5c5c;
  }
`;

export const AvatarDiv = styled.div`
  display: flex;
  margin: 0 20px;
`;

export const ListContentText = styled.div`
  padding: 0 10px;
  padding-top: 20px;
  font-size: 14px;
  font-weight: 500;

  margin-top: 10px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;

  -webkit-box-orient: vertical;
  line-height: 25px;
`;
