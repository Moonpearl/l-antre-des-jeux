import React, { createContext, FC, useState } from 'react';

export interface Palette {
  backgroundColor: { css: string };
  frameBackgroundColor: { css: string };
  frameTextColor: { css: string };
  headerBackgroundColor: { css: string };
  headerHighlightColor: { css: string };
  headerTextColor: { css: string };
  titleColor: { css: string };
  titleHighlightColor: { css: string };
  textColor: { css: string };
}

export interface ThemeContextValue {
  palette: Palette;
  setPalette: (palette: Palette) => void;
}

export const defaultPalette: Palette = {
  backgroundColor: { css: 'rgb(255,255,255)' },
  frameBackgroundColor: { css: 'rgb(255,242,223)' },
  frameTextColor: { css: 'rgb(51,51,51)' },
  headerBackgroundColor: { css: 'rgb(14,77,99)' },
  headerHighlightColor: { css: 'rgb(20,104,133)' },
  headerTextColor: { css: 'rgb(189,220,239)' },
  textColor: { css: 'rgb(51,51,51)' },
  titleColor: { css: 'rgb(198,28,65)' },
  titleHighlightColor: { css: 'rgb(224,50,88)' },
};

export const ThemeContext = createContext<ThemeContextValue>({
  palette: defaultPalette,
  setPalette: () => undefined,
});

const ThemeProvider: FC = ({ children }) => {
  const [palette, setPalette] = useState<Palette>(defaultPalette);

  const contextValue: ThemeContextValue = {
    palette,
    setPalette,
  };

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
