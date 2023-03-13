import { BarInputContent } from "./styled"
import {TbPlaylistAdd} from "react-icons/tb"

const BarInput = () => {
    return(
        <BarInputContent>
            <input type="text" placeholder="Qual será o nome da sua lista?"/>
            <TbPlaylistAdd />
        </BarInputContent>
    )
}

export default BarInput