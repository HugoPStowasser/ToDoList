import Header from "../../components/header";
import Footer from "../../components/footer";
import SearchBar from "../../components/searchBar";
import Container from "../../components/container"

const Home = () => {
    return(
        <div>
            <Header/>
            <Container>
                <div>
                    <SearchBar/>
                </div>
            </Container>
            <Footer/>
        </div>
    )
}

export default Home