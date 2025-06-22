import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LayoutProvider } from './components/LayoutContext'; // Make sure the path is correct

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LayoutProvider>
      <App />
    </LayoutProvider>
  </React.StrictMode>
);

reportWebVitals();