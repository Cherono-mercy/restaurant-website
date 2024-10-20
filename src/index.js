import React from 'react';
import ReactDOM from 'react-dom/client'; // Make sure to import from 'react-dom/client'

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root for the application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


