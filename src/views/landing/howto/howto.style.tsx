import styled from "styled-components";
import bg from "assets/images/bg/bg-2.jpg";

export const HowToPartDiv = styled.div`
  background-attachment: fixed;
  background-image: url(${bg.src});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const QuestionPart = styled.div`
  height: 300px;

  position: relative;
  backdrop-filter: blur(50px);
  background-color: rgb(255, 255, 255, 0.2);
  width: auto;
  border-radius: 20px;
  color: white;
  padding: 40px 30px 30px;

  transition: all 0.2s;
  :hover {
    box-shadow: 0 0 10px rgb(60, 0, 0);
    background-color: rgb(255, 255, 255, 0.1);
  }
`;

export const Questions = styled.div`
  & > *:not(:last-child) {
    padding-bottom: 20px;
  }
  height: inherit;
  overflow-y: auto;
  overflow-x: hidden;
  .selected_question {
    svg {
      color: #570000;
    }
  }
`;

export const QandAPart = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 50px;
`;

export const Question = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin-right: 10px;
  }
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  transition: 0.2s all;
  :hover {
    transform: scale(1.02);
  }
`;

export const QuestionMark = styled.div`
  position: absolute;
  font-size: 20px;
  font-weight: 900;
  text-transform: uppercase;
  top: -5%;
  right: 10%;
  background-color: rgba(166, 0, 0, 0.5);
  box-shadow: 0 0 10px rgba(60, 0, 0, 0.8);
  padding: 10px;
`;

export const AnswerPart = styled.div`
  position: relative;
  backdrop-filter: blur(50px);
  background-color: rgb(255, 255, 255, 0.2);
  width: auto;
  border-radius: 20px;
  color: white;
  padding: 40px 30px 30px;
  transition: all 0.2s;
  height: 300px;
  :hover {
    box-shadow: 0 0 10px rgb(60, 0, 0);
    background-color: rgb(255, 255, 255, 0.1);
  }
`;

export const AnswerTitle = styled.div`
  display: flex;
  align-items: center;
  img {
    object-fit: cover;
    border-radius: 50%;
  }
  span {
    margin-left: 20px;
    width: calc(100% - 70px);
  }
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const Answer = styled.div`
  line-height: 30px;
  letter-spacing: 0.5px;
  font-size: 18px;
  font-weight: 700;
  height: 220px;
  overflow: auto;
`;
