import { useListContext } from "../../context/List.context";

const View = () => {
    const {list, setList} = useListContext()
    return(
        <div>
            Nova tela
        </div>
    )
};

export default View;
