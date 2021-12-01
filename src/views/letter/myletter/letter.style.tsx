import styled from "styled-components";

export const LetterSection = styled.div`
  display: grid;
  grid-template-columns: 48% 48%;
  grid-gap: 4%;
`;

export const MyLettersSection = styled.div``;

export const LetterItem = styled.div`
  margin-top: 20px;
  border: 2px solid transparent;
  border-radius: 5px;
  padding: 15px;
  transition: all 0.2s;
  color: rgb(0, 30, 60);
  box-shadow: 0 0 5px #666666 inset;
  :hover {
    border: 2px solid #666666;
  }
`;

export const LetterTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface ContentProps {
  full?: boolean;
}

export const LetterContent = styled.div<ContentProps>`
  margin-top: 10px;

  min-height: 32px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  ${({ full }) => !full && "-webkit-line-clamp: 2;"}

  -webkit-box-orient: vertical;
  line-height: 25px;
`;

export const LetterInfo = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 15px;
  color: #666;
  justify-content: space-between;
`;

export const LetterEvents = styled.div`
  & > *:not(:last-child) {
    border-right: 2px solid #666;
  }
  svg {
    padding: 0 10px;
    transition: all 0.2s;
    cursor: pointer;
    :hover {
      color: black;
    }
  }
`;

export const LetterFormSection = styled.div`
  margin-top: 20px;
  border: 2px solid #666666;
  border-radius: 5px;
  contain: content;
  .rdw-editor-main {
    min-height: 400px;
    max-height: 500px;
  }
`;

export const TitleForm = styled.input`
  margin-bottom: 10px;
  border: none;
  border-bottom: 2px solid transparent;
  outline: none;
  padding: 10px;
  font-size: 20px;
  font-weight: 900;
  color: rgb(0, 30, 60);
  :focus {
    border: none;
    border-radius: 0;
    border-bottom: 2px solid rgb(0, 30, 60);
  }
  width: -webkit-fill-available;
`;

export const NewActions = styled.div`
  font-size: 25px;
  color: rgb(0, 30, 60);
  display: flex;
  align-items: flex-end;
  svg {
    margin-left: 10px;
    cursor: pointer;
  }
`;

export const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 50px;
`;

export const Title = styled.div`
  display: inline;
  cursor: pointer;
  color: darkblue;
  position: relative;
  transition: all 0.1s;
  ::after {
    transition: all 0.2s ease-in-out;
    position: absolute;
    content: "";
    height: 2px;
    background-color: darkblue;
    width: 100%;
    left: 0;
    bottom: -5px;
    transform: scaleX(0);
    transform-origin: left center;
  }
  :hover {
    ::after {
      transform: scaleX(1);
    }
  }
`;
