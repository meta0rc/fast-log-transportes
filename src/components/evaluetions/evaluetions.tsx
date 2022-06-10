import { EvaluetionItem, EvaluetionContainer, EvaluetionList } from "./style"
import styled from "styled-components"
import {FaStar} from 'react-icons/fa'
import { Avaliators } from "../../data/avaliators"

export const Evaluetions = () => {

    const Title = styled.h2`

        strong { 
            font-weight: bold;
            font-size: 1.2em;
            color: orange;
        }
        
        text-align: center;
        
        margin: 25px 0 0;
    `
    const TitleAvaliator = styled.h3`
    `
    const ContainerInfoAvaliator = styled.div`
        margin-left: 20px;
        @media (max-width: 800px) {
            margin: 0;
            align-items: center;
        }
    `
    const CommentAvaliator = styled.p`
        margin: 5px 0;
    `
    const CommentDestaque = styled.strong`
        font-size: 0.7em;
        font-style: italic;
    `

    return (

        <EvaluetionContainer id="rates">
            <Title>
                Quem já utilizou o serviços da <strong>Fast Log </strong>Disse: 
            </Title>
            <EvaluetionList>
                {Avaliators.map((ava, i) => {
                    return(
                        <EvaluetionItem className="flex">
                        <img key={`image${i.toString()}`} src={ava.image} alt="" width={'150px'} height={'150px'} />
                        <ContainerInfoAvaliator key={`info${i.toString()}`} className="flex column info-container">
                            <TitleAvaliator key={ava.nome}>
                                {ava.nome}
                            </TitleAvaliator>
                            <CommentDestaque key={ava.nome+'destaque'}>
                               "{ ava.destaque }"
                            </CommentDestaque>
                            <EvaluetionList key={`rate${i.toString()}`}>
                                {[...Array(5)].map((stars, i) => <FaStar color={'gold'} key={'start' + ava.nome + i.toString()} />)}
                            </EvaluetionList>
                  
                            <CommentAvaliator key={`comment${ava.nome}`}>
                                {ava.comment}
                            </CommentAvaliator>
                        </ContainerInfoAvaliator>
                    </EvaluetionItem>
                    )
                })}

            </EvaluetionList>
        </EvaluetionContainer>

    )
}