import styled from "styled-components";

export const LetterListSection = styled.div``;

export const LetterFilterDiv = styled.div`
  display: flex;
  border-bottom: 1px solid #ebebec;
`;

interface FilterItemProps {
  active?: boolean;
}

export const FilterItem = styled.div<FilterItemProps>`
  border-bottom: 1px solid ${({ active }) => (active ? "#fff" : "transparent")};
  padding: 10px 20px;
  font-size: 20px;
  font-weight: 700;
  transition: all 0.2s;
  color: ${({ active }) => (active ? "white" : "#777")};
  cursor: pointer;
`;

export const LetterListDiv = styled.div``;

export const LikeUnlike = styled.div`
  display: flex;
  align-items: center;
`;

interface LikeProps {
  done?: string;
}

export const LikeDiv = styled.div<LikeProps>`
  display: inline-flex;
  background: ${({ done }) => {
    switch (done) {
      case "eye":
        return "#0062cc";
      case "like":
        return "#28a745";
      case "unlike":
        return "#dc3545";
      default:
        return "gray";
    }
  }};
  border-radius: 5px;
  padding: 3px 5px;
  margin: 0 5px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  font-size: 14px;
  span {
    margin-left: 3px;
  }
  :hover {
    opacity: 0.8;
  }
  :active {
    transition: all 0.2s;
    transform: scale(1.1);
  }
`;

export const LetterViewSection = styled.div`
  background-color: #ffffff10;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #ffffff10;
  color: white;
  position: relative;
`;

export const LetterViewContent = styled.div`
  margin-top: 15px;
`;
