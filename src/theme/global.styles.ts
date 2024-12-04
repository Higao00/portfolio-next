import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    html, body{
        padding: 0;
        margin: 0;
        background-color: ${({ theme }) => theme.colors.body_transparent};

        @media (min-width: 1280px) {
            overflow: hidden;
        }
    }
`
