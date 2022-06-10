import styled from "styled-components";

export const BannerContainer = styled.div`
    img {
        height: 100%;
        object-fit: cover;
    }
    @media(max-width: 908px){
        img{ 
            width: 100%;
        }
        
            flex-wrap: wrap;
        }
        
    }
    .content {
        display: teste;
    }
    width: 100%;
    background: #ca4221;
`
export const InfoContainer = styled.div`
    width: 100%;    
    padding: 5%;
`

export const BannerContainerChild = styled.div`
    .btn-search {
        position: relative;
        left: -30px;
    }
`
export const Title = styled.h1`
    strong {
        color: #ffe285;
        font-size: 1.2em;
    }
    font-size: 4vw;
    color: #fff;
    font-weight: bold;
`
export const Paragraph = styled.p`
    .destach{
        font-size: 1.2em;
    }
    color: #fff;
    margin-top: 5px;
`
export const Found = styled.input`

    width: 80%;
    padding: 15px;
    margin: 25px 0;
    border-radius: 3px;
    border: none;
`
export const ButtonFind = styled.div`

`
