import styled, { createGlobalStyle } from 'styled-components';
import media from '../../../../../lib/media';

export const GlobalStyle = createGlobalStyle`
  @keyframes hideshow {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  .st0{
    fill: #FFFFFF;
    stroke: #000000;
    stroke-width: 0.5;
    stroke-miterlimit: 10;
  }

  .st1{
    fill: #EBB4BD;
  }

  .st2{
    font-family: 'BookmanOldStyle';
    animation: hideshow 1s ease-in;
  }

  .st3{
    font-size: 60px;
  }

  .st4{
    font-family: 'AmalfiCoast';
    animation: hideshow 1.5s ease-in;
  }

  .st5{
    font-size: 17px;
  }
`;

export const LogoStyled = styled.svg`
  width: 200px;
  height: 200px;

  ${media.lgUp`
    width: 500px;
    height: 500px;
  `}
`;
