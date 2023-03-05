import Header from "../../components/header";
import Footer from "../../components/footer";
import SearchBar from "../../components/searchBar";
import Container from "../../components/container"
import RenderList from "../../components/renderList";
import { useState } from "react";

const list = [
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
]

const Home = () => {
    const [term, setTerm] = useState("")

    return(
        <div>
            <Header/>
            <Container>
                <div>
                    <SearchBar term={term} setTerm={setTerm}/>
                    <RenderList list={list} term={term}/>
                </div>
            </Container>
            <Footer/>
        </div>
    )
}

export default Home