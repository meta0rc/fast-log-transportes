import styled from "styled-components"
import Rindo from '../../assets/images/rindo.png'
import Ideia from '../../assets/images/idea.png'
import Feliz from '../../assets/images/feliz.png'

export const WhoWeAre = () => {
    
    const Section = styled.section`
        
        @media(max-width: 800px){
            flex-wrap: wrap;

            .desktop-hidden{ 
                display: none;
            }
            .mobile-show {
                display: block !important;
            }
            img {
                width: 100%;
            }
        }
        .mobile-show {
            display: none;
        }
        align-items: center;
        justify-content: space-evenly;
        padding: 0 5%;
    `
    const Container = styled.div``

    const Title = styled.h2`
        font-size: 3em;
        font-weight: bold;
        color: orange;
        text-shadow: 0 0 1px brown;
    `
    const Paragraph = styled.p`
        @media(max-width: 800px){
            margin: 10px 0;
        }
        line-height: 1.5;
        margin: 5px 100px 5px 5px;
        text-align: justify;
    `

    return (
        <>
        <Section className="flex" id="who">
            <Container className="flex column">
                <Title>O que é a Fast Log?</Title>
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptas velit tempora nisi cum dicta sint minima explicabo, quidem possimus nulla. Ratione harum accusantium illum inventore esse consequuntur porro tempora.
                </Paragraph>
                <Paragraph>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque sit porro repellat libero id eum hic facere perferendis nulla vitae nihil at, temporibus quaerat ut recusandae asperiores voluptates explicabo laborum.
                </Paragraph>
            </Container>
            <Container>
                <img src={Rindo} alt="" />
            </Container>
        </Section>
        <Section className="flex">
            <Container className="desktop-hidden">
                <img src={Feliz} alt="" />
            </Container>
            <Container className="flex column">
                <Title >Por que é tão rápida?</Title>
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptas velit tempora nisi cum dicta sint minima explicabo, quidem possimus nulla. Ratione harum accusantium illum inventore esse consequuntur porro tempora.
                </Paragraph>
                <Paragraph>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque sit porro repellat libero id eum hic facere perferendis nulla vitae nihil at, temporibus quaerat ut recusandae asperiores voluptates explicabo laborum.
                </Paragraph>
                <Container className="mobile-show">
                <img src={Feliz} alt="" />
                </Container>
            </Container>

        </Section>
        <Section className="flex">
            <Container className="flex column">
                <Title>Quais serão os Beneficios de contratar a Fast Log?</Title>
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptas velit tempora nisi cum dicta sint minima explicabo, quidem possimus nulla. Ratione harum accusantium illum inventore esse consequuntur porro tempora.
                </Paragraph>
                <Paragraph>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque sit porro repellat libero id eum hic facere perferendis nulla vitae nihil at, temporibus quaerat ut recusandae asperiores voluptates explicabo laborum.
                </Paragraph>
            </Container>
            <Container>
                <img src={Ideia} alt="" />
            </Container>
        </Section>
        </>

        
    )
}