import { BarInputContent } from "./styled";
import { TbPlaylistAdd } from "react-icons/tb";

const BarInput = ({ listName, setListName, addOne }) => {
  return (
    <BarInputContent>
      <input
        type="text"
        placeholder="Qual será o nome da sua lista?"
        value={listName}
        onChange={(e) => setListName(e.target.value)}
      />
      <TbPlaylistAdd onClick={addOne} />
    </BarInputContent>
  );
};

export default BarInput;
