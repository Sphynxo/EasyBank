import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style-type: none;

}

html {
    font-size: 62.5%;
    overflow-x: hidden;
}

body {
    font-family: "Public Sans", sans-serif;
    background-color: #fafafa;
}
`;

export const Description = styled.div`
font-size: 1.5rem;
color: #9597A5;
line-height: 2.5rem;
margin-top: 1.6rem;

@media only screen and (min-width: 64rem) {
    font-size: 1.8rem;
}
`;

export const Title2 = styled.h2`
font-size: 3.2rem;
font-weight: 300;
color: #2d314d;
line-height: normal;
`;

export default GlobalStyle;
