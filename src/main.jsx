import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 🆕 import
import './index.scss';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/MD">  {/* 🆕 basename = nom du repo */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
