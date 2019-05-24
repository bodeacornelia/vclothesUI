import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app';
import { Provider } from 'react-redux'
import configureStore from './store';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import themeDefault from './context/ThemeContext';

const theme = createMuiTheme(themeDefault);
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
