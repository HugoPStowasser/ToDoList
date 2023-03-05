import styled from "styled-components";

export const ListItem = styled.div`
    color: 000;
    background: #EEEE;
    height: 50px;
    font-size: 14px;
    font-weight: 700;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;

    &.divider{
        background-color: white;
    }
`