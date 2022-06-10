import styled from "styled-components";

const HeaderContainer = styled.header`

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 25px;
    box-sizing: border-box;
    box-shadow: 0 0 1px #000;
    
    .logo img { 
        width: 140px
    }

    @media(max-width: 800px){
        background: #fff;
        position: fixed;
        width: 100%;
    }
`

export default HeaderContainer