/**
 * 
 * @author Ivan Zanon
 * 
 */

import React from 'react';
import Routes from './router';
import { ThemeProvider } from 'styled-components';

import standard from './assets/styles/themes/standard';
import altBlueGreen from './assets/styles/themes/altBlueGreen';

import GlobalStyles from './assets/styles/global';

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