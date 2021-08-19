import {createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
    a,
    a:hover {
        text-decoration: none;
        color: black;
    }
`

export default GlobalStyle;