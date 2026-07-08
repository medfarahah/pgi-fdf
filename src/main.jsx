import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ensureDemoSeed } from './demoData.js';
import App from './App.jsx';
import './index.css';

ensureDemoSeed();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
