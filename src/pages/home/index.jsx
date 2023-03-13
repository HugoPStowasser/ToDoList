import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchBar from "../../components/SearchBar";
import Container from "../../components/Container"
import RenderList from "../../components/RenderList";
import { useState } from "react";
import BarInput from "../../components/BarInput";

const Home = () => {
    const [term, setTerm] = useState("")
    const [list, setList] = useState([
        {
            name: "Lista de Compras",
            id: new Date().getTime() * 2,
            itens: []
        },
        {
            name: "Lista de Compras 2",
            id: new Date().getTime() * 3,
            itens: []
        },
        {
            name: "Lista de Compras 3",
            id: new Date().getTime() * 4,
            itens: []
        }
    ])

    const [add, setAdd] = useState(false)

    const addOne = () => {
        const newItem = {
            name: "Lista de Compras 4",
            id: new Date().getTime() * 5,
            itens: [] 
        }

        const newList = [...list, newItem]
        setList(newList)
        console.log(list)
    }

    return(
        <div>
            <Header/>
            <Container title="teste" description="teste 1">
                <div>
                    <SearchBar term={term} setTerm={setTerm} add={add} setAdd={setAdd}/>
                    {
                        add && <BarInput /> 
                    }
                    <RenderList list={list} term={term}/>
                </div>
            </Container>
            <Footer/>
        </div>
    )
}

export default Home