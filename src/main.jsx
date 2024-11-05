import { createRoot } from 'react-dom/client';
import GlobalStyle from './style/global';
import { StrictMode } from 'react';
import { Routes } from './routes';

import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {

  return (
    <StrictMode>
      <GlobalStyle />
        <Routes />
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<App />);