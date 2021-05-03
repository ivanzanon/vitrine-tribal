/**
 *
 * @author Ivan Zanon
 *
 */

import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './assets/styles/global';
import standard from './assets/styles/themes/standard';
import Routes from './router';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={standard}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
