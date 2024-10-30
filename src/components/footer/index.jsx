import * as S from './style';

import { useNavigate } from "react-router-dom";

import { IoShieldCheckmarkOutline,  IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdCloudOutline } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { RiWifiOffLine } from "react-icons/ri";

import { FaInstagram, FaYoutube, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { GoShieldCheck } from "react-icons/go";

import playstore from "../../assets/playstore.png";
import appstore from "../../assets/appstore.png";
import app from "../../assets/blueapp.svg";

export function Footer(){
  const navigate = useNavigate();

  function abriNovaRota(route) {
    navigate(route)
  };

  function abrirNovaAba(url) {
    window.open(url, '_blank');
  }
    return(
     <S.Container>
      <S.Help>
        <div className="left">
          <h2><strong>Experimente a  Blue ERP </strong> agora e <br /> surpreenda-se com os resultados:</h2>

          <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente agora</button>
        </div>

        <div className="right">
          <ul>
            <li><GoShieldCheck/>  <strong>Se preferir, receba uma apresentação comercial  </strong>  durante o período de teste.</li>
            <li><GoShieldCheck/>  <strong> Sem necessidade </strong> de cartão de crédito.</li>
          </ul>

          <div className="call">
            <p>
             Ainda com dúvidas?<br />
             <strong>Entre em contato com a gente:</strong>
            </p>

            <a href='https://wa.me/551121106090?text=Olá%2C%20gostaria%20de%20mais%20informações!'>
             +55 11 2110-6090
            </a>
          </div>
        </div>
      </S.Help>

      <S.RealFooter>
       <div className="title">
        <div className="call">
         <FaPhoneVolume/>

         <span>
          Fale conosco <br /> 
          <a href='https://wa.me/551121106090?text=Olá%2C%20gostaria%20de%20falar%20com%20vocês!'>
             +55 11 2110-6090
          </a>
         </span>
        </div>

        <div className="follow">
          <span>Siga-nos:</span>

          <a href="https://www.instagram.com/blueinnovationbr/profilecard/?igsh=MWVscWxxN2tnYjVoZA%3D%3D">
          <FaInstagram/>
          </a>

          <a href="#">
          <FaFacebook/>
          </a>

          <a href="#">
          <FaYoutube/>
          </a>

          <a href="#">
          <FaLinkedin/>
          </a>
        </div>

        <div className="eco" onClick={()=> abriNovaRota('/ecossistema')}>
         <div className="ecosystem">
          <div className="cloud circle">
           <IoMdCloudOutline />
          </div>

          <div className="truck circle">
           <TbTruckDelivery />
          </div>

          <div className="check circle">
           <IoShieldCheckmarkOutline />
          </div>

          <div className="phone circle">
           <IoPhonePortraitOutline />
          </div>

          <div className="nowifi circle">
           <RiWifiOffLine />
          </div>

          <div className="message circle">
           <MdOutlineMessage />
          </div>
         </div>
         <h5>Ecossistema de gestão e vendas</h5>
        </div>
       </div>

       <h4>Funcionalidades</h4>

       <div className="links">
        <div className="topic">
          <h5>Vendas e Serviços</h5>
          <ul>
            <li>PDV com Cupom Fiscal Eletrônico</li>
            <li>Relatórios de Vendas e Serviços</li>
            <li>Loja Virtual - Blue Loja</li>
            <li>Central de Integrações</li>
            <li>Gestão de Contratos</li>
            <li>Gestão de Serviços</li>
            <li>Gestão de Vendas</li>
            <li>Catálogo Virtual</li>
            <li>Gestão de CRM</li>
          </ul>
        </div>

        <div className="topic">
          <h5>Financeiro e Fiscal</h5>
          <ul>
            <li>Relatórios Financeiros e Fiscais</li>
            <li>Gestão de Compras</li>
            <li>Gestão Financeira</li>
            <li>Gestão Fiscal</li>
          </ul>
        </div>

        <div className="topic">
          <h5>Administrativo</h5>
          <ul>
          <li>Integração com o Google Apps</li>
          <li>Relatórios Administrativos</li>
          <li>Documentos Personalizados</li>
          <li>Gestão de Arquivos</li>
          <li>Gestão de Tarefas</li>
          <li>Sistema Online</li>
          <li>Gestão de RH</li>
          </ul>
        </div>

        <div className="topic">
          <h5>Logística</h5>
          <ul>
           <li>Gestão de Expedição e SIGEP Web</li>
           <li>Relatórios de Logística</li>
           <li>Gestão de Produção</li>
           <li>Gestão de Estoque</li>
           <li>Gestão de Frota</li>
          </ul>
        </div>
       </div>

       <h4>Sobre nós</h4>

       <div className="links">
        <div className="topic">
         <h5>Conheça</h5>
         <ul>
         <li>Parceiros e Integrações</li>
         <li>Política de Cookies</li>
         <li>Sobre a SIGE Cloud</li>
         <li>Termos e Condições</li>
         <li>Trabalhe conosco</li>
         <li>Para contadores</li>
         <li>Planos e Preços</li>
         <li>Como funciona?</li>
         <li>Contato</li>
         <li>Cases</li>
         </ul>
        </div>

        <div className="topic">
         <h5>Suporte</h5>
         <ul>
          <li onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Primeiros passos</li>
          <li onClick={()=> abrirNovaAba('https://blueinnovation.com.br/blue-innovation/')}>Desenvolvedores</li>
         </ul>
        </div>

        <div className="topic">
         <h5>Áreas de Atuação</h5>
         <ul>
          <li>Ferramentas e Ferragens</li>
          <li>Consultoria Empresarial</li>
          <li>Produtos Hospitalares</li>
          <li>Lojas de Informática</li>
          <li>Agências de turismo</li>
          <li>Eletro-domésticos</li>
          <li>Serviços de TI</li>
          <li>Loja Virtual</li>
          <li>Construção</li>
          <li>Vestuário</li>
          <li>Autopeças</li>
         </ul>
        </div>

        <div className="topic">
         <h5 className='none'>Áreas de Atuação</h5>
         <ul>
          <li>Telefonia e Comunicação</li>
          <li>Serviços de Engenharia</li>
          <li>Produtos Alimentícios</li>
          <li>Cosméticos e Perfumes</li>         
          <li>Lanchonetes e Bares</li>
          <li>Confecção de Roupas</li>
          <li>Assistência Técnica</li>
          <li>Serviços Elétricos</li>
          <li>Venda de Móveis</li>
          <li>Indústrias</li>
         </ul>
        </div>


       </div>

       <div className="bottom">
        <div className="direct">
          <span>Todos os direitos reservados | <strong> Blue ERP 2024 </strong></span>
        </div>

        <div className="app">
         <img src={app} alt="App" className='appImg'/>

         <div className="apps">
          <img src={playstore} alt="playstore" onClick={()=> abrirNovaAba('https://play.google.com/store/apps/details?id=app.erp.com&hl=pt&pli=1')}/>

          <img src={appstore} alt="appstore" onClick={()=> abrirNovaAba('https://apps.apple.com/br/app/mobi-erp/id6670794703')}/>
         </div>
        </div>
       </div>
      </S.RealFooter>
     </S.Container>   
    )
}