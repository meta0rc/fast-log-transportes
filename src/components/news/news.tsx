import { FaPaperPlane, FaPlane, FaSearch } from "react-icons/fa"
import { GiAirplane } from "react-icons/gi"
import styled from "styled-components"

export const News = () => {
    const Container = styled.div`
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        width: 100%;
        flex: 1;
        margin: 25px auto;

        .search {
            position: relative;
            left: -50px;
            top: 15px;
        }
        .flex {
            width: 50%;
        }
        @media (max-width: 800px){
            .flex {
                width: 80%;
            }
        }
    `
    const Email = styled.input`
        width: 100%;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 3px;

    `
    const Title = styled.h2`
        margin: 15px 0;
        @media (max-width: 800px){
            text-align: center;
        }
    `
    
    return (
        <Container>
            <Title>
                Envie já o seu email e entraremos e contato com você
            </Title>
            <div className="flex">
                <Email type={'text'} placeholder={'example@example.com.br'}/>
                <FaPaperPlane className="search" size={25} color={'orange'}/>
            </div>

        </Container>
    )
}