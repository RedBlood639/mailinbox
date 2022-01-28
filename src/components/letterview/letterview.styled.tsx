import styled from "styled-components";

export const LetterViewDiv = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 30px;
`;

export const CommentPart = styled.div`
  margin-top: 40px;
  border-top: 1px solid #c5c5c5;
`;

export const CommentUserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const AvatarDiv = styled.div`
  margin: 0 10px;
  width: 25px;
  height: 25px;
  color: #5c5c5c;
  margin-right: 20px;
  svg {
    width: 25px;
    height: 25px;
  }
`;

export const Actions = styled.div`
  margin-top: 30px;
  display: flex;
  & > *:not(:first-child) {
    margin-left: 25px;
  }
`;

export const Action = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  svg {
    width: 20px;
    height: 20px;
  }
`;
