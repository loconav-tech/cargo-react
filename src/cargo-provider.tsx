import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme as defaultTheme } from './theme';

type CargoProviderProps = {
  // TODO: implement Type theme
	children?: React.ReactChild;
  theme?: any;
};

export const CargoProvider: FC<CargoProviderProps> = ({ theme = defaultTheme , children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        {children}
      </>
    </ThemeProvider>
  );
}
