import { ListItem } from "./styled";
import {FaEye, FaTrash} from "react-icons/fa"
import { useMemo } from "react";

const RenderList = ({ list, term }) => {

  const listFiltered = useMemo(() => {
    return list.filter(item => {
      return item.name.toLowerCase().includes(term.toLowerCase())
    })
  }, [term, list])

  return (
    <div>
      {
        listFiltered.map((item, index) => (
            <ListItem key={item.id} className={ `${index % 2 !== 0 ? "divider" : ""}` }>
                <div>
                    {item.name}
                </div>
                <div>
                    <FaEye/>
                    <FaTrash/>
                </div>
            </ListItem>
        ))
      }
      <div></div>
    </div>
  );
};

export default RenderList;
