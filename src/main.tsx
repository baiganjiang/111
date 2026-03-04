import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './mockBackend'; // Import the mock backend to intercept fetch requests
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
