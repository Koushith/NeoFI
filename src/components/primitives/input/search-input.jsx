import {
  Input,
  InputContainer,
  SearchIcon,
} from "../../../pages/trade/components/search-coins/search-coins.styles";
import Search from "../../../assets/icons/search-icon.svg";

export const SearchInput = ({ value, onChange }) => {
  return (
    <InputContainer>
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search"
      />
      <SearchIcon src={Search} width={18} />
    </InputContainer>
  );
};
