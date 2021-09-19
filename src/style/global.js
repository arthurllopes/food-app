import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0%;
        padding: 0%;
        box-sizing: border-box;
        text-decoration: none;
        border: none;
        outline: none;
    }
    ol, ul {
        list-style: none;
    }
    button{
        cursor: pointer;
    }
    body{
        background-color: #eee;
        font-family: 'Cinzel', sans-serif;
    }

`