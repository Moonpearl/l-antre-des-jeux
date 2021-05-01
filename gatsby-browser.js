/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react';
import { ThemeProvider } from './src/contexts';
import { SnipcartController } from './src/components';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <SnipcartController />
    {element}
  </ThemeProvider>
);
