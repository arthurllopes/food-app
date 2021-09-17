import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0%;
        padding: 0%;
        box-sizing: border-box;
        text-decoration: none;
        border: none;
    }
    ol, ul {
        list-style: none;
    }
    body{
        background-color: #eee;
        font-family: 'Cinzel', sans-serif;
    }
`