import { theme } from './theme';
import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager, ThemeProvider } from 'styled-components';

export const rerenderTheme = (
  rerender: (ui: React.ReactElement) => void,
  children: React.ReactNode,
): void => {
  return rerender(
    <StyleSheetManager
      enableVendorPrefixes
      shouldForwardProp={(propName, elementToBeRendered) => {
        return typeof elementToBeRendered === 'string'
          ? isPropValid(propName)
          : true;
      }}
    >
      <ThemeProvider theme={theme}>{children} </ThemeProvider>
    </StyleSheetManager>,
  );
};
