import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/App';

const getSometi = () => {
 console.log('Hamsterreee ');
};

ReactDOM.render(
  <App
    compiler="Typescript"
    framework="React" />,
  document.getElementById('root')
);
