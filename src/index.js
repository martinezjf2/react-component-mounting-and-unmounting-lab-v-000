import React from 'react';
import ReactDOM from 'react-dom';
import 'raf/polyfill';
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'core-js/modules/es.object.values'

import Game from './components/Game';
import './style.css';

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);