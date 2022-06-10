import { List, ListItem, NavBar, Anchor } from "./style"
import { BsHandbag, BsHeart } from 'react-icons/bs'
import { FaClosedCaptioning } from "react-icons/fa"
import { CgMenuRightAlt } from "react-icons/cg"
import styled from "styled-components"
export const Nav = () => {

    const handleOpen = () => {
        const bar = document.querySelector('#bar')
        if(bar){
            bar.toggleAttribute('data-open')
        }
    }
    const Burg = styled.div`
        position: absolute;
        right: 15px;
        z-index: 9;

        @media(min-width: 800px){
            display: none;
        }
    `
    return (
        <>
        <Burg onClick={handleOpen}>
            <CgMenuRightAlt className="burg" size={30} color='#333'/>
        </Burg>
        <NavBar data-open id={'bar'} >
            <List>
                <ListItem >           
                    <Anchor href="#header" onClick={handleOpen}> Inicio </Anchor>
                </ListItem>
                <ListItem>
                    <Anchor href="#who" onClick={handleOpen}> Quem Somos  </Anchor>
                </ListItem>
                <ListItem>
                    <Anchor onClick={handleOpen} href="#customers"> Nossos Parceiros </Anchor>
                </ListItem>
                <ListItem>
                    <Anchor onClick={handleOpen} href="#rates"> Avaliações </Anchor>
                </ListItem>
                <ListItem>
                    <Anchor onClick={handleOpen} href="#jobs"> Serviços </Anchor>
                </ListItem>
                <ListItem>
                    <Anchor onClick={handleOpen} href="#form" className="contato"> Contato </Anchor>
                </ListItem>
            </List>
        </NavBar>
        </>
    )

}