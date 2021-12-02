import styled from "styled-components";

export const NewEmailDiv = styled.div`
  position: fixed;
  bottom: 0px;
  right: 20px;
  width: 40vw;
  border: 1px solid #999;
  background-color: white;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 0 10px #555555a0;
  contain: content;
`;

export const NewEmailHeader = styled.div`
  background-color: rgb(0, 30, 60);
  color: white;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const NewEmailForm = styled.div`
  overflow: auto;
  /* ------ Custom Scroll ------ */
  ::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #ffffff30;
    box-shadow: inset 1px 1px 2px transparent;
    border: 0.1px solid #ffffff30;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background-color: rgb(0, 30, 60) !important;
    border-radius: 10px;
    box-shadow: inset 1px 1px 2px rgb(155 155 155 / 40%);
  }
`;

export const NewEmailInput = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #999;
  margin: 0 10px;
  color: #555;
  font-weight: 700;
  input {
    padding: 10px 10px;
    border: none;
    outline: none;
    width: 100%;
    font-size: 18px;
  }
`;

export const HeaderAction = styled.div`
  svg {
    cursor: pointer;
  }
  .header_action {
    background-color: transparent;
    margin-left: 10px;
    display: inline-flex;
    padding: 3px;
    border-radius: 50%;
    transition: all 0.2s;
    :hover {
      background-color: #99999980;
    }
  }
`;
