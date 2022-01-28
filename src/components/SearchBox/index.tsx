import React, { useState } from "react";
import { CustomSelect, SearchBoxDiv, SearchInput } from "./searchbox.styled";

const SearchBox = ({ options, onSelectChange, onInputChange }: any) => {
  const [selectedOption, setSelectedOption] = useState<any>(null);

  const handleChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);
    onSelectChange(selectedOption);
  };
  return (
    <SearchBoxDiv>
      {/* <CustomSelect
        value={selectedOption}
        onChange={handleChange}
        options={options}
      /> */}
      <SearchInput>
        <input type="text" placeholder="Search ..." onChange={onInputChange} />
      </SearchInput>
    </SearchBoxDiv>
  );
};

export default SearchBox;
