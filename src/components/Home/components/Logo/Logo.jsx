import { GlobalStyle, LogoStyled } from './styled';

const Logo = ({ height, width }) => (
  <>
    <div>
      <LogoStyled
        height={height}
        width={width}
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 141.73 141.73"
        style={{ enableBackground: 'new 0 0 141.73 141.73' }}
        xmlSpace="preserve"
      >
        <title>Christina Stamos Designs Logo</title>
        <circle className="st0" cx="73.22" cy="70.87" r="50.29" />
        <text transform="matrix(1 0 0 1 31.3027 84.1797)" className="st1 st2 st3">CS</text>
        <text transform="matrix(1 0 0 1 31.3028 86.8612)" className="st4 st5">Designs</text>
      </LogoStyled>
    </div>
    <GlobalStyle />
  </>
);

export default Logo;
