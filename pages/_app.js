import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import Layout from '../components/layout';
import themes from '../themes';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={themes.default}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
