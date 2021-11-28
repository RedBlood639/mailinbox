import styled from "styled-components";

export const AuthPage = styled.div`
  height: inherit;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const AuthDiv = styled.div`
  max-width: 500px;
  height: fit-content;
  width: calc(90% - 80px);
  margin: 50px auto;
  background-color: rgba(166, 0, 0, 0.5);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  backdrop-filter: blur(20px);
  transition: all 0.2s;
  @media screen and (max-width: 320px) {
    padding: 30px 20px;
    width: calc(95% - 40px);
  }
  .Toastify {
    position: absolute;
  }
`;

export const AuthTitle = styled.div`
  text-align: center;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-size: 30px;
  color: white;
`;

export const AuthFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const FormGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  transition: all 0.2s;
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const AuthActionGroup = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  color: white;
  @media screen and (max-width: 425px) {
    flex-direction: column;
    & > *:not(:first-child) {
      margin-top: 20px;
    }
  }
`;

export const AuthAction = styled.a`
  color: white;
  cursor: pointer;
  font-weight: 700;
  position: relative;
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
  }
  :hover {
    color: #c0c0c0;
    ::after {
      transform: scaleX(1);
    }
  }
`;
