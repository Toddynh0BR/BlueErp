import { createRoot } from 'react-dom/client';
import GlobalStyle from './style/global';
import { StrictMode } from 'react';
import { Routes } from './routes';

function App() {

  return (
    <StrictMode>
      <GlobalStyle />
        <Routes />
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<App />);