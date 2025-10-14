import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Reset CSS moderno */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.typography.fontFamily.sans};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    color: ${({ theme }) => theme.colors.text.primary};
    background: ${({ theme }) => theme.colors.background.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  /* Headings com tipografia moderna */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.typography.fontFamily.display};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};
    color: ${({ theme }) => theme.colors.text.primary};
    margin: 0;
  }

  h1 {
    font-size: ${({ theme }) => theme.typography.fontSize["5xl"]};
    font-weight: ${({ theme }) => theme.typography.fontWeight.extrabold};
    letter-spacing: ${({ theme }) => theme.typography.letterSpacing.tight};
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.fontSize["4xl"]};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize["3xl"]};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  }

  h4 {
    font-size: ${({ theme }) => theme.typography.fontSize["2xl"]};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  }

  h5 {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  }

  h6 {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  }

  /* Texto e parágrafos */
  p {
    font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
    line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
    color: ${({ theme }) => theme.colors.text.secondary};
    margin: 0;
  }

  /* Links modernos */
  a {
    color: ${({ theme }) => theme.colors.text.accent};
    text-decoration: none;
    transition: all ${({ theme }) => theme.duration.fast} ${({ theme }) => theme.easing.out};
    
    &:hover {
      color: ${({ theme }) => theme.colors.primary[600]};
      text-decoration: underline;
    }

    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.primary[500]};
      outline-offset: 2px;
      border-radius: ${({ theme }) => theme.borderRadius.sm};
    }
  }

  /* Listas */
  ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  /* Botões */
  button {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
    
    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.primary[500]};
      outline-offset: 2px;
      border-radius: ${({ theme }) => theme.borderRadius.sm};
    }
  }

  /* Formulários */
  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
    
    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.primary[500]};
      outline-offset: 2px;
      border-radius: ${({ theme }) => theme.borderRadius.sm};
    }
  }

  /* Imagens responsivas */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
    height: auto;
  }

  /* Classes utilitárias de tipografia */
  .text-xs { font-size: ${({ theme }) => theme.typography.fontSize.xs}; }
  .text-sm { font-size: ${({ theme }) => theme.typography.fontSize.sm}; }
  .text-base { font-size: ${({ theme }) => theme.typography.fontSize.base}; }
  .text-lg { font-size: ${({ theme }) => theme.typography.fontSize.lg}; }
  .text-xl { font-size: ${({ theme }) => theme.typography.fontSize.xl}; }
  .text-2xl { font-size: ${({ theme }) => theme.typography.fontSize["2xl"]}; }
  .text-3xl { font-size: ${({ theme }) => theme.typography.fontSize["3xl"]}; }
  .text-4xl { font-size: ${({ theme }) => theme.typography.fontSize["4xl"]}; }
  .text-5xl { font-size: ${({ theme }) => theme.typography.fontSize["5xl"]}; }

  .font-thin { font-weight: ${({ theme }) => theme.typography.fontWeight.thin}; }
  .font-light { font-weight: ${({ theme }) => theme.typography.fontWeight.light}; }
  .font-normal { font-weight: ${({ theme }) => theme.typography.fontWeight.normal}; }
  .font-medium { font-weight: ${({ theme }) => theme.typography.fontWeight.medium}; }
  .font-semibold { font-weight: ${({ theme }) => theme.typography.fontWeight.semibold}; }
  .font-bold { font-weight: ${({ theme }) => theme.typography.fontWeight.bold}; }
  .font-extrabold { font-weight: ${({ theme }) => theme.typography.fontWeight.extrabold}; }

  .text-primary { color: ${({ theme }) => theme.colors.text.primary}; }
  .text-secondary { color: ${({ theme }) => theme.colors.text.secondary}; }
  .text-tertiary { color: ${({ theme }) => theme.colors.text.tertiary}; }
  .text-accent { color: ${({ theme }) => theme.colors.text.accent}; }
  .text-muted { color: ${({ theme }) => theme.colors.text.muted}; }

  /* Classes utilitárias de display */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* Scroll suave */
  @media (prefers-reduced-motion: no-preference) {
    html {
      scroll-behavior: smooth;
    }
  }

  /* Responsividade para telas pequenas */
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    h1 { font-size: ${({ theme }) => theme.typography.fontSize["4xl"]}; }
    h2 { font-size: ${({ theme }) => theme.typography.fontSize["3xl"]}; }
    h3 { font-size: ${({ theme }) => theme.typography.fontSize["2xl"]}; }
    h4 { font-size: ${({ theme }) => theme.typography.fontSize.xl}; }
  }
`;

export default GlobalStyle;
