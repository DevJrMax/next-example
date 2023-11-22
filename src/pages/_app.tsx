import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { GlobalStyles } from '../styles/global-styles';

import { AppProps } from 'next/app';

import isPropValid from '@emotion/is-prop-valid';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyleSheetManager
      enableVendorPrefixes
      shouldForwardProp={(propName, elementToBeRendered) => {
        return typeof elementToBeRendered === 'string'
          ? isPropValid(propName)
          : true;
      }}
      {...pageProps}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </StyleSheetManager>
  );
}

export default MyApp;
