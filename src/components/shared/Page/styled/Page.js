import styled, { createGlobalStyle } from 'styled-components';
import theme from '../../../../lib/theme';

export const StyledPage = styled.div`
  background: white;
  color: ${theme.charcoal};
`;

export const Inner = styled.div`
  max-width: ${theme.maxWidth};
  margin: 0 auto 0 40px;
`;

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'montserrat';
    src: url('https://fonts.googleapis.com/css2?family=Montserrat:ital@1');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'AmalfiCoast';
    src: url('fonts/amalfi-coast.woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'BookmanOldStyle';
    src: url('fonts/booman-old-style.ttf');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    line-height: 2;
    font-family: 'Dosis';
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
`;
