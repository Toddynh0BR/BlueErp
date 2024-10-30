import { Routes, Route } from 'react-router-dom';

import { LojaVirtual } from '../pages/lojaVirtual';
import { LojaOffline } from '../pages/lojaLite';
import { Ecosystem } from '../pages/ecosystem';
import { AppVenda } from '../pages/appVenda';
import { Home } from '../pages/home';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/ecossistema" element={<Ecosystem />}/>
      
      <Route path="/app-de-vendas" element={<AppVenda />}/>
      <Route path="/loja-virtual" element={<LojaVirtual />}/>
      <Route path="/loja-offline" element={<LojaOffline />}/>
    </Routes>
  )
}