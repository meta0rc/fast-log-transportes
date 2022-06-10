import styled from "styled-components"
import Human from '../../assets/images/image2.png'
import HumanTwo from '../../assets/images/image.png'
import HumanThre from '../../assets/images/image3.png'

export const Services = () => {
    type section = { 
        background?: string
    }
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
                width: 200px;
            }
        }
        .mobile-show {
            display: none;
        }
        align-items: center;
        justify-content: space-around;
        padding: 3% 5%;
        ${(props: section) => props.background === 'orange' ? 'background: linear-gradient(to bottom, #edb524, orange);' : 'background: none' }
     
    `
    const Container = styled.div``

    const Title = styled.h2`
        font-size: 3em;
        font-weight: bold;
        color: #000;
        text-shadow: 0 0 1px brown;
        @media(max-width: 800px){
            font-size: 2em;
        }
    `
    const Paragraph = styled.p`
        @media(max-width: 800px){
            margin: 10px 0;
            text-align: left;
        }
        line-height: 1.5;
        margin: 5px 100px 5px 5px;
        text-align: justify;
        color: #000;
    `

    return (
        <>
        <Section className="flex" background="orange">
            <Container className="flex column">
                <Title>A Fast Log Faz a sua entrega de olhos fechados</Title>
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptas velit tempora nisi cum dicta sint minima explicabo, quidem possimus nulla. Ratione harum accusantium illum inventore esse consequuntur porro tempora.
                </Paragraph>
                <Paragraph>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque sit porro repellat libero id eum hic facere perferendis nulla vitae nihil at, temporibus quaerat ut recusandae asperiores voluptates explicabo laborum.
                </Paragraph>
            </Container>
            <Container>
                <img src={Human} alt="" width={400} />
            </Container>
        </Section>

        <Section className="flex" >
            <Container className="desktop-hidden">
                <img src={HumanTwo} alt="" width={400} />
            </Container>
            <Container className="flex column">
                <Title>Cuidamos para que tudo seja entregue dentro prazo</Title>
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptas velit tempora nisi cum dicta sint minima explicabo, quidem possimus nulla. Ratione harum accusantium illum inventore esse consequuntur porro tempora.
                </Paragraph>
                <Paragraph>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque sit porro repellat libero id eum hic facere perferendis nulla vitae nihil at, temporibus quaerat ut recusandae asperiores voluptates explicabo laborum.
                </Paragraph>
            </Container>
            <Container className="mobile-show">
                <img src={HumanTwo} alt="" width={400} />
            </Container>

        </Section>

        <Section className="flex" background="orange">
            <Container className="flex column">
                <Title>Somos agéis pois queremos sempre ser os melhores se tratando de logistica</Title>
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptas velit tempora nisi cum dicta sint minima explicabo, quidem possimus nulla. Ratione harum accusantium illum inventore esse consequuntur porro tempora.
                </Paragraph>
                <Paragraph>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque sit porro repellat libero id eum hic facere perferendis nulla vitae nihil at, temporibus quaerat ut recusandae asperiores voluptates explicabo laborum.
                </Paragraph>
            </Container>
            <Container>
                <img src={HumanThre} alt="" width={400} />
            </Container>
        </Section>
        </>
        
    )
}