import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Scrolltotop from './scrolltotop';

ReactDOM.render(
  <BrowserRouter>
    <Scrolltotop />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
