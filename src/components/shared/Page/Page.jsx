import { ThemeProvider } from 'styled-components';
import Meta from '../Meta';
import theme from '../../../lib/theme';
import {
  StyledPage,
  GlobalStyle,
} from './styled/Page';

const Page = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <StyledPage>
        <Meta />
        {children}
      </StyledPage>
    </ThemeProvider>
    <GlobalStyle />
  </>
);

export default Page;
