import styled from "styled-components";

export const EmailListDiv = styled.div`
  margin-top: 20px;
  & > *:not(:first-child) {
    margin-top: 5px;
  }
`;

export const EmailItemDiv = styled.label`
  background-color: #eee;
  border-radius: 5px;
  display: flex;
  align-items: center;
  transition: 0.2s all;
  height: 40px;
  padding: 0 10px;
  & > *:not(:last-child) {
    margin-right: 10px;
  }

  input {
    color: transparent;
    width: 15px;
    height: 15px;
  }
  :hover {
    background-color: #dfdfdf;
  }
`;

export const EmailSubject = styled.span`
  max-width: 20%;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  word-break: break-all;
  -webkit-box-orient: vertical;
  font-weight: 700;
  color: #555;
`;

export const EmailContent = styled.span`
  max-width: 60%;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  word-break: break-all;
  -webkit-box-orient: vertical;
`;

export const FavouriteIcon = styled.div`
  cursor: pointer;
  padding: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: transparent;
  transition: all 0.2s;
  svg {
    font-size: 20px;
  }

  :hover {
    background-color: #ccc;
  }
`;

export const EmailDate = styled.span`
  text-align: right;
  min-width: 180px;
  font-size: 14px;
  color: #888;
`;
