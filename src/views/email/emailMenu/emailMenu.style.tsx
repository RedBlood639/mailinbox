import styled from "styled-components";

export const EmailMenuBar = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EmailMenu = styled.div`
  display: flex;
`;

interface ItemProps {
  active?: boolean;
}

export const EmailMenuItem = styled.div<ItemProps>`
  color: ${({ active }) => (active ? "black" : "#555")};
  border-bottom: 2px solid ${({ active }) => (active ? "black" : "transparent")};
  padding: 15px 25px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
`;

export const ListActions = styled.div`
  display: flex;
  align-items: center;
  & > * :not(:last-child) {
    margin-right: 5px;
  }
`;

export const FilterInput = styled.div`
  margin-right: 2% !important;
  display: flex;
  align-items: center;
  border: 1px solid #aaa;
  border-radius: 5px;
  padding: 2px;
  /* min-width: 300px; */
  width: 100%;
  transition: 0.2s all;

  svg {
    font-size: 25px;
    color: #aaa;
    transition: 0.2s all;
  }
  :focus-within {
    svg {
      color: #000;
    }
    input {
      color: #000;
    }
    color: #000;
    border: 1px solid #000;
  }
  input {
    transition: 0.2s all;
    color: #aaa;
    outline: none;
    padding: 5px;
    border: none;
    width: 100%;
  }
`;

export const ListAction = styled.div`
  font-size: 20px;
  padding: 10px;
  /* width: 50px;
  height: 40px; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: 0.2s all;
  svg {
    cursor: pointer;
    transition: 0.2s all;
    color: #777;
  }
  :hover {
    svg {
      color: #333;
    }
    background: #ddd;
  }
  :active {
    svg {
      color: black;
    }
    background: #aaa;
  }
`;
