import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import themeContext from './context/ThemeContext';

const theme = createMuiTheme(themeContext);

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
