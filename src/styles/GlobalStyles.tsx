import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 400; /* Regular como padrão */
    background-color: ${({ theme }) => theme.colors.body_transparent};

  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: ${({ theme }) => theme.fonts.bold};
  }

  p {
    font-weight: ${({ theme }) => theme.fonts.regular};
  }

  .light {
    font-weight: ${({ theme }) => theme.fonts.light};
  }

  .medium {
    font-weight: ${({ theme }) => theme.fonts.medium};
  }

  .bold {
    font-weight: ${({ theme }) => theme.fonts.bold};
  }
`;

export default GlobalStyle;
