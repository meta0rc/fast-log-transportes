import styled from "styled-components"

export const Footer = () => { 
    const Container = styled.footer`
        background: #333;
        text-align: center;
        padding: 25px;
    `
    const Paragraph = styled.p`
        color: #fff;
        font-size: 11px;
        
    `

    return (
        <Container>
            <Paragraph>
                Fast Log .inc - Todos os Direitos Reservados - 2022
            </Paragraph>
        </Container>
    )
}