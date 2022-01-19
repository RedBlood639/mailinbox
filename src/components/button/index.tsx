import React from "react";
import { ButtonDiv } from "./button.styled";

const Button = ({ style, onClick, label, loading }: any) => {
  return (
    <ButtonDiv {...style} onClick={onClick}>
      {loading ? (
        <React.Fragment>
          <i className="fa fa-spinner fa-spin"></i>
          &nbsp;Loading
        </React.Fragment>
      ) : (
        label
      )}
    </ButtonDiv>
  );
};

export default Button;
