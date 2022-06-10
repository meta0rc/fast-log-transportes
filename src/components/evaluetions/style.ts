import styled from "styled-components";

export const EvaluetionContainer = styled.div``

export const EvaluetionList = styled.ul``

export const EvaluetionItem = styled.li`
    img {
        object-fit: cover;
        border-radius: 50%
    }
    @media (max-width: 800px) {
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

    }

    align-items: center;
    box-shadow: 0 0 3px #c5c5c5;
    border-radius: 5px;
    padding: 15px 20px;
    margin: 3%;
`
