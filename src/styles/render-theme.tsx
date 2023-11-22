import isPropValid from '@emotion/is-prop-valid';
import { theme } from './theme';
import { RenderResult, render } from '@testing-library/react';
import { StyleSheetManager, ThemeProvider } from 'styled-components';

export const renderTheme = (children: React.ReactNode): RenderResult => {
  return render(
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
