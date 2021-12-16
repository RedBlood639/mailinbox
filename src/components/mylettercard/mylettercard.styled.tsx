import styled from "styled-components";

export const MyletterCardDiv = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  & > *:not(:first-child) {
    margin-top: 20px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardContent = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;

  -webkit-box-orient: vertical;
  line-height: 25px;
`;

export const CardFooter = styled.div``;

export const HeaderActions = styled.div`
  display: flex;
  & > *:not(:first-child) {
    margin-left: 15px;
  }
  align-items: center;
  svg {
    cursor: pointer;
  }
`;

export const Badge = styled.div`
  padding: 2px 10px;
  background-color: #e4e4e4;
  border-radius: 20px;
  font-size: 12.5px;
  font-weight: 500px;
`;

export const CommentAction = styled.div`
  svg {
    margin-right: 15px;
  }
  display: flex;
  align-items: center;
`;
