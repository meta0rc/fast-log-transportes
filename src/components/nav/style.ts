import styled from "styled-components";

export const NavBar = styled.nav`
    
    max-width: 90%;
    padding: 0 3%;

    @media (max-width: 800px){
        z-index: 7;
        position: fixed;
        background: #fff;
        width: 75%;
        right: 0;
        top: 0;
        bottom: 0;
        padding: 50px 0;
        box-shadow: 0 0 3px #333;
        transition: 0.5s;

    }

`

export const List = styled.ul`
    @media (min-width: 800px){
        display: flex;
    }
`

export const ListItem = styled.li`
    .contato{ 
        background: gold;
        border-radius: 3px;
        padding: 10px 15px;
    }
    @media (max-width: 800px){
        margin: 30px;

    }
`

export const Anchor = styled.a`
    margin: 0 10px;
    cursor: pointer;
    font-weight: 300;
    color: #000;
    text-decoration: none;
`
