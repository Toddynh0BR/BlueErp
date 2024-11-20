import { Routes, Route } from 'react-router-dom';

//Principais
import { CentralIntegraçoes } from '../pages/integraçoes';
import { Ecosystem } from '../pages/ecosystem';
import { Planos } from '../pages/Planos';
import { Home } from '../pages/home';


//tipos
import { ChatEmpresarial } from '../pages/chatEmpresarial';
import { LojaVirtual } from '../pages/lojaVirtual';
import { LojaOffline } from '../pages/lojaLite';
import { AppVenda } from '../pages/appVenda';

//Especiais
import { ComoFunciona } from '../pages/Especial/comoFunciona';
import { Sobre } from '../pages/Especial/Sobre';

//Financeiro e Fiscal
import { ControleFinanceiro } from '../pages/FincanceiroFiscal/controleFinanceiro';
import { GestaoCompras } from '../pages/FincanceiroFiscal/gestaoCompras';
import { GestaoFiscal } from '../pages/FincanceiroFiscal/gestaoFiscal';


//Vendas e serviços
import { PDV } from '../pages/VendasServiços/pdv-frente-de-caixa';
import { ControleVendas } from '../pages/VendasServiços/controleVendas';
import { GestaoContratos } from '../pages/VendasServiços/gestaoContratos';
import { GestaoServiços } from '../pages/VendasServiços/gestaoServiços';
import { CatalogoVirtual } from '../pages/VendasServiços/catalogoVirtual';
import { GestaoCRM } from '../pages/VendasServiços/gestaoCRM';


//Administrativo
import { RelatoriosAdm } from '../pages/Administrativo/relatoriosAdm';
import { SistemaOnline } from '../pages/Administrativo/sistemaOnline';

//Logistica
import { GestaoExpediçao } from '../pages/Logistica/gestaoExpediçao';
import { ControleEstoque } from '../pages/Logistica/controleEstoque';
import { ControleProdução } from '../pages/Logistica/controleProdução';


//Parceiros
import { ParceirosIntegraçoes } from '../pages/parceirosIntegraçoes';
import { P1 } from '../pages/parceiros/p1';
import { P2 } from '../pages/parceiros/p2';
import { P3 } from '../pages/parceiros/p3';
import { P4 } from '../pages/parceiros/p4';
import { P5 } from '../pages/parceiros/p5';
import { P6 } from '../pages/parceiros/p6';
import { P7 } from '../pages/parceiros/p7';
import { P8 } from '../pages/parceiros/p8';
import { P9 } from '../pages/parceiros/p9';
import { P10 } from '../pages/parceiros/p10';
import { P11} from '../pages/parceiros/p11';
import { P12 } from '../pages/parceiros/p12';
import { P13 } from '../pages/parceiros/p13';
import { P14 } from '../pages/parceiros/p14';
import { P15 } from '../pages/parceiros/p15';
import { P16 } from '../pages/parceiros/p16';
import { P17 } from '../pages/parceiros/p17';
import { P18 } from '../pages/parceiros/p18';

//Areas de atuaçao
import { A1 } from '../pages/Areas/A1';
import { A2 } from '../pages/Areas/A2';
import { A3 } from '../pages/Areas/A3';
import { A4 } from '../pages/Areas/A4';
import { A5 } from '../pages/Areas/A5';
import { A6 } from '../pages/Areas/A6';
import { A7 } from '../pages/Areas/A7';
import { A8 } from '../pages/Areas/A8';
import { A9 } from '../pages/Areas/A9';
import { A10 } from '../pages/Areas/A10';
import { A11 } from '../pages/Areas/A11';
import { A12 } from '../pages/Areas/A12';
import { A13 } from '../pages/Areas/A13';
import { A14 } from '../pages/Areas/A14';
import { A15 } from '../pages/Areas/A15';
import { A16 } from '../pages/Areas/A16';
import { A17 } from '../pages/Areas/A17';
import { A18 } from '../pages/Areas/A18';
import { A19 } from '../pages/Areas/A19';
import { A20 } from '../pages/Areas/A20';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/ecossistema" element={<Ecosystem />}/>
      <Route path="/planos" element={<Planos />}/>
      <Route path="/central-de-integraçoes" element={<CentralIntegraçoes />}/>
      
      <Route path="/app-de-vendas" element={<AppVenda />}/>
      <Route path="/loja-virtual" element={<LojaVirtual />}/>
      <Route path="/loja-offline" element={<LojaOffline />}/>
      <Route path="/chat-empresarial" element={<ChatEmpresarial />}/>

      <Route path="/ferramentas-administrativas" element={<RelatoriosAdm />}/>
      <Route path="/sistema-online" element={<SistemaOnline />}/>

      <Route path='/controle-financeiro' element={<ControleFinanceiro />}/>
      <Route path='/gestao-de-compras' element={<GestaoCompras />}/>
      <Route path='/gestao-fiscal' element={<GestaoFiscal />}/>

      <Route path='/blue-innovation' element={<Sobre />}/>
      <Route path='/conheça-a-blue-erp' element={<ComoFunciona />}/>

      <Route path='/gestao-de-expediçao' element={<GestaoExpediçao />}/>
      <Route path='/controle-de-estoque' element={<ControleEstoque />}/>
      <Route path='/controle-de-produçao' element={<ControleProdução />}/>

      <Route path='/pdv-com-cupom-fiscal-eletronico' element={<PDV />}/>
      <Route path='/controle-de-vendas' element={<ControleVendas />}/>
      <Route path='/gestao-de-contratos' element={<GestaoContratos />}/>
      <Route path='/gestao-de-serviços' element={<GestaoServiços />}/>
      <Route path='/catalogo-virtual' element={<CatalogoVirtual />}/>
      <Route path='/gestao-de-crm' element={<GestaoCRM />}/>

      <Route path="/parceiros" element={<ParceirosIntegraçoes />}/>

      <Route path="/amazon" element={<P1 />}/>
      <Route path="/mercado-livre" element={<P2 />}/>
      <Route path="/magalu" element={<P3 />}/>
      <Route path="/google" element={<P4 />}/>
      <Route path="/amazon-marketplace" element={<P5 />}/>
      <Route path="/magento" element={<P6 />}/>
      <Route path="/mastercard" element={<P7 />}/>
      <Route path="/b2w" element={<P8 />}/>
      <Route path="/cnova" element={<P9 />}/>
      <Route path="/feevale" element={<P10 />}/>
      <Route path="/jet" element={<P11 />}/>
      <Route path="/junior" element={<P12 />}/>
      <Route path="/loja-integrada" element={<P13 />}/>
      <Route path="/moovin" element={<P14 />}/>
      <Route path="/paghiper" element={<P15 />}/>
      <Route path="/signashop" element={<P16 />}/>
      <Route path="/stone" element={<P17 />}/>
      <Route path="/woocomerce" element={<P18 />}/>

      <Route path="/ferramentas-e-ferragens" element={<A1 />}/>
      <Route path="/consultoria-empresarial" element={<A2 />}/>
      <Route path="/lojas-de-informatica" element={<A3 />}/>
      <Route path="/agencias-de-turismo" element={<A4 />}/>
      <Route path="/loja-de-eletrodomesticos" element={<A5 />}/>
      <Route path="/erp-para-loja-virtual" element={<A6 />}/>
      <Route path="/loja-de-materiais-de-construcao" element={<A7 />}/>
      <Route path="/loja-de-roupas" element={<A8 />}/>
      <Route path="/sistema-para-autopecas" element={<A9 />}/>
      <Route path="/telefonia-e-comunicacao" element={<A10 />}/>
      <Route path="/servicos-de-engenharia" element={<A11 />}/>
      <Route path="/loja-de-produtos-alimenticios" element={<A12 />}/>
      <Route path="/cosmeticos-e-perfumes" element={<A13 />}/>
      <Route path="/lanchonetes-e-bares" element={<A14 />}/>
      <Route path="/confeccao-de-roupas" element={<A15 />}/>
      <Route path="/instalacao-e-manutencao-eletrica" element={<A16 />}/>
      <Route path="/fabricantes-e-loja-de-moveis" element={<A17 />}/>
      <Route path="/erp-para-industria" element={<A18 />}/>
      <Route path="/produtos-medicos-e-hospitalares" element={<A19/> }/>
      <Route path="/distribuidoras" element={<A20/> }/>

    </Routes>
  )
}