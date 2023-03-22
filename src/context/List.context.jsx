import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ListContext = createContext({
  list: [],
  setList: () => {},
});

export const useListContext = () => useContext(ListContext);

export const ListProvider = ({ children }) => {
  const [list, setList] = useState([
    {
      name: "Lista de Compras",
      id: uuidv4(),
      itens: [],
    },
    {
      name: "Lista de Compras 2",
      id: uuidv4(),
      itens: [],
    },
    {
      name: "Lista de Compras 3",
      id: uuidv4(),
      itens: [],
    },
  ]);

  return (
    <ListContext.Provider value={{ list, setList }}>
      {children}
    </ListContext.Provider>
  );
};
