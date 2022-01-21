import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../components/GlobalStyle';

import theme from '../utils/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
