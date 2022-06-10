import styled, { createGlobalStyle } from "styled-components";
import "@fontsource/open-sans";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0; padding: 0;
        font-family: "Open Sans";
    }
    li { 
        list-style: none;
    }
    #root {
        height: 100%
    }
    .flex{
        display: flex;

    }
    .column { 
        flex-direction: column;
    }
    .between{ 
        justify-content: space-between;
    }
    [data-open] {
        right: -100% !important;
        transition: 0.5s;
    }
`
