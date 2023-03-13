import { InputSearch } from "./styled";
import { FaPlus, FaSearch } from "react-icons/fa";
import { FiXCircle } from "react-icons/fi";
import { Flex } from "../../styles";

const SearchBar = ({ term, setTerm, add, setAdd }) => {
  return (
    <Flex>
      <FaSearch />
      <InputSearch
        type="text"
        placeholder="Buscar lista"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      {add ? (
        <FiXCircle size={25} onClick={() => setAdd(false)} />
      ) : (
        <FaPlus onClick={() => setAdd(true)} />
      )}
    </Flex>
  );
};

export default SearchBar;
