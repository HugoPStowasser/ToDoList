import { InputSearch } from "./styled";
import { FaPlus, FaSearch } from "react-icons/fa";
import { Flex } from "../../styles";

const SearchBar = ({term, setTerm}) => {
  return (
    <Flex>
      <FaSearch />
      <InputSearch 
        type="text" 
        placeholder="Buscar lista"
        value={term} 
        onChange={(e) => setTerm(e.target.value)}
      />
      <FaPlus />
    </Flex>
  );
};

export default SearchBar;