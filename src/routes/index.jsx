import { useState, useEffect, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Preload } from '../components/preload'; 
import { AppRoutes } from './app.routes';

export function Routes() {
  const [showFallback, setShowFallback] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowFallback(false); 
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={showFallback ? <Preload /> : null}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  );
}