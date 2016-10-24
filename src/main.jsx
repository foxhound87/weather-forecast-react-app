import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

import './styles/_.react.select.less';
import './styles/_.global.css';

render(
  <App />,
  document.querySelector('#app') // eslint-disable-line
);
