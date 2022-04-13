import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './scss/index.scss'
import { BrowserRouter } from 'react-router-dom';
import { DataProvider } from './context/DataContext'

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

