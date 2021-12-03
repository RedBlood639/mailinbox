import styled from "styled-components";

export const LetterSection = styled.div`
  display: grid;
  grid-template-columns: 48% 48%;
  grid-gap: 4%;
`;

export const MyLettersSection = styled.div``;

export const LetterItem = styled.div`
  margin-top: 20px;
  border: 2px solid #ffffff10;
  border-radius: 5px;
  padding: 15px;
  transition: all 0.2s;
  color: white;
  background-color: #ffffff10;
  box-shadow: 0 0 5px #2400004b;
  /* backdrop-filter: blur(50px); */
  :hover {
    border: 2px solid white;
    box-shadow: 2px 2px 0px white;
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
  color: #aaa;
  justify-content: space-between;
`;

export const LetterEvents = styled.div`
  & > *:not(:last-child) {
    border-right: 2px solid #aaa;
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
    color: white;
    pre {
      background: #88888820;
    }
  }
  .rdw-editor-toolbar {
    background-color: transparent;
    border-left: none !important;
    border-right: none !important;
    border-top: 1px solid #666;
    border-bottom: 1px solid #666;
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
  color: white;
  background-color: transparent;
  :focus {
    border: none;
    border-radius: 0;
    border-bottom: 2px solid #666666;
  }
  width: -webkit-fill-available;
`;

export const NewActions = styled.div`
  font-size: 25px;
  color: white;
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
  padding: 10px 0;
  border-bottom: 2px solid white;
`;

export const Title = styled.div`
  display: inline;
  cursor: pointer;
  color: white;
  position: relative;
  transition: all 0.1s;
  ::after {
    transition: all 0.2s ease-in-out;
    position: absolute;
    content: "";
    height: 2px;
    background-color: white;
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
