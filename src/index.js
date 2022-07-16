import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TestBtn from './TestBtn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <App />
    <TestBtn />
  </React.Fragment>
);