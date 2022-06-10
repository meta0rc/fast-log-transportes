import styled from "styled-components"
import { GiBrazil } from 'react-icons/gi'
import { FaCrown, FaShippingFast } from "react-icons/fa"
import { MdVerified } from "react-icons/md"
export const Selos = () => {
    
    const ContainerSelos = styled.div`
        background: linear-gradient(to bottom, #edb524, orange);
    `
    const List = styled.ul`
        justify-content: space-around;
        @media(max-width: 800px){
            flex-wrap: wrap;
        }
        padding: 25px 0;
    `
    const ListItem = styled.li`
        width: 15%;
        text-align: center;
        align-items: center;
        box-shadow: 0 0 3px #ccc;
        padding: 1%;
        margin: 2%;
        background: #fff;
        justify-content: center;
        @media(max-width: 800px){
            width: 80%;
        }
    `
    const Title = styled.h3`
        font-size: 14px;
        margin: 5px 0;
    `
    const Description = styled.p`
        font-size: 13px;

    `
    return (

        <ContainerSelos>
            <List className="flex">
                <ListItem className="flex column">
                    <GiBrazil size={70} color={'green'}/>
                    <Title> "Entregamos em todo Brasil" </Title>
                    <Description>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, numquam sunt. Fugit accusamus necessitatibus non, id quae illo aspe
                    </Description>
                </ListItem>
                <ListItem className="flex column">
                    <FaShippingFast size={70} color={'greey'}/>
                    <Title> "Velocidade é nossa Cultura" </Title>
                    <Description>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, numquam sunt. Fugit accusamus necessitatibus non, id quae illo aspe
                    </Description>
                </ListItem>
                <ListItem className="flex column">
                    <FaCrown size={70} color={'#edb524'}/>
                    <Title> "Lideres em Logistica" </Title>
                    <Description>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, numquam sunt. Fugit accusamus necessitatibus non, id quae illo aspe
                    </Description>
                </ListItem>
                <ListItem className="flex column">
                    <MdVerified size={70} color={'blue'}/>
                    <Title> "Segurança e Qualidade" </Title>
                    <Description>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, numquam sunt. Fugit accusamus necessitatibus non, id quae illo aspe
                    </Description>
                </ListItem>
            </List>
        </ContainerSelos>
    )
}