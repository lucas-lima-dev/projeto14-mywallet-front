

// import env from 'react-dotenv';
// axios.post(`${env.REACT_APP_API_URL}/users`, body)
//"axios.post(`${process.env.REACT_APP_API_URL}"

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import GlobalStyle from "./styles/GlobalStyle"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);
