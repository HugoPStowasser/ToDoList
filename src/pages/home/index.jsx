import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchBar from "../../components/SearchBar";
import Container from "../../components/Container";
import RenderList from "../../components/RenderList";
import { useState } from "react";
import BarInput from "../../components/BarInput";
import { v4 as uuidv4 } from "uuid";
import { useListContext } from "../../context/List.context";

const Home = () => {
  const [term, setTerm] = useState("");
  const [listName, setListName] = useState("");

  const [add, setAdd] = useState(false);

  const {list, setList} = useListContext()

  const addOne = () => {
    if (listName.length > 0) {
      const newItem = {
        name: listName,
        id: uuidv4(),
        itens: [],
      };

      const newList = [...list, newItem];
      setList(newList);
      setListName("");
    }
  };

  const removeOne = (id) => {
    const newList = list.filter(item => item.id !== id)
    setList(newList)
  };

  return (
    <div>
      <Header />
      <Container title="teste" description="teste 1">
        <div>
          <SearchBar term={term} setTerm={setTerm} add={add} setAdd={setAdd} />
          {add && (
            <BarInput
              setListName={setListName}
              listName={listName}
              addOne={addOne}
            />
          )}
          <RenderList list={list} term={term} removeOne={removeOne} />
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
