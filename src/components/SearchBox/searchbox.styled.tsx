import styled from "styled-components";
import Select from "react-select";

export const SearchBoxDiv = styled.div`
  background-color: white;
  padding: 15px 25px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const CustomSelect = styled(Select)`
  width: 30%;
`;

export const SearchInput = styled.div`
  width: 100%;
  input {
    width: 100%;
    padding: 5px 10px;
    border: 1px solid hsl(0, 0%, 70%);
    outline: none;
    border-radius: 5px;
  }
`;
