import { Routes, Route } from 'react-router-dom';

import { Ecosystem } from '../pages/ecosystem';
import { Home } from '../pages/home';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/ecossistema" element={<Ecosystem />}/>
    </Routes>
  )
}