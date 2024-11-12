import * as S from "./style";

import { useNavigate } from "react-router-dom";

import Logo from "../../../../assets/site.svg";

import apple from "../../../../assets/appstore.png";
import play from "../../../../assets/playstore.png";

export function FooterEspecial() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <div className="RealFooter">
        <div className="help">
         <div className="gradiant">

         </div>

         <div className="top">
            <img src={Logo} alt="" />
         </div>

         <div className="bottom">
            <span>
O Sistema de Gestão <br />
mais Completo do Brasil
            </span>

            <div className="topic">
             <strong>Horário de Atendimento</strong>
             <p>2ª a 6ª feira, das 8h30 <br /> às 11h30 - 13h15 às 18h</p>
            </div>

            <div className="topic">
             <strong>E-mail</strong>
             <p>comercial@blueinnovation.com.br</p>
            </div>

            <div className="downloads">
             <img src={play} alt="" />
             <img src={apple} alt="" />
            </div>
         </div>
        </div>

        <div className="functions">
         <h3>Funcionalidades</h3>

         <ul className="c1">
          <span>Financeiro e Fiscal</span>
            <li onClick={()=> navigate('/controle-financeiro')}>Relatórios Financeiros e Fiscais</li>
            <li onClick={()=> navigate('/gestao-de-compras')}>Gestão de Compras</li>
            <li onClick={()=> navigate('/controle-financeiro')}>Gestão Financeira</li>
            <li onClick={()=> navigate('/gestao-fiscal')}>Gestão Fiscal</li>
         </ul>

         <ul className="c2">
          <span>Controle de Vendas <br /> e Serviços</span>
           <li onClick={()=> navigate('/pdv-com-cupom-fiscal-eletronico')}>PDV com Cupom Fiscal Eletrônico</li>
            <li onClick={()=> navigate('/controle-de-vendas')}>Relatórios de Vendas e Serviços</li>
            <li onClick={()=> navigate('/loja-virtual')}>Loja Virtual - Blue Loja</li>
            <li onClick={()=> navigate('/central-de-integraçoes')}>Central de Integrações</li>
            <li onClick={()=> navigate('/gestao-de-contratos')}>Gestão de Contratos</li>
            <li onClick={()=> navigate('/gestao-de-serviços')}>Gestão de Serviços</li>
            <li onClick={()=> navigate('/controle-de-vendas')}>Gestão de Vendas</li>
            <li onClick={()=> navigate('/catalogo-virtual')}>Catálogo Virtual</li>
            <li onClick={()=> navigate('/gestao-de-crm')}>Gestão de CRM</li>     
         </ul>
         
         <ul className="c3">
          <span>Logística</span>
           <li onClick={()=> navigate('/gestao-de-expediçao')}>Gestão de Expedição e BLUE Web</li>
           <li onClick={()=> navigate('/controle-de-estoque')}>Relatórios de Logística</li>
           <li onClick={()=> navigate('/controle-de-produçao')}>Gestão de Produção</li>
           <li onClick={()=> navigate('/controle-de-produçao')}>Gestão de Estoque</li>
           <li onClick={()=> navigate('/controle-de-estoque')}>Gestão de Frota</li>        
         </ul>  

         <ul className="c4">
          <span>Administrativo</span>    
          <li onClick={()=> navigate('/central-de-integraçoes')}>Integração com o Google Apps</li>
          <li onClick={()=> navigate('/ferramentas-administrativas')}>Relatórios Administrativos</li>
          <li onClick={()=> navigate('/ferramentas-administrativas')}>Documentos Personalizados</li>
          <li onClick={()=> navigate('/ferramentas-administrativas')}>Gestão de Arquivos</li>
          <li onClick={()=> navigate('/ferramentas-administrativas')}>Gestão de Tarefas</li>
          <li onClick={()=> navigate('/sistema-online')}>Sistema Online</li>
          <li onClick={()=> navigate('/ferramentas-administrativas')}>Gestão de RH</li>
         </ul>                       
        </div>
      </div>
    </S.Container>
  );
}