import React from 'react';
import ReactDOM from 'react-dom/client';
import DivNav from '../components/div-nav/DivNav';
import Article from '../components/article/Article';
import './register.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DivNav/>
    <Article/>
  </React.StrictMode>
);