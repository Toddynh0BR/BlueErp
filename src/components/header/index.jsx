import * as S from "./style";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { IoShieldCheckmarkOutline,  IoPhonePortraitOutline } from "react-icons/io5";
import { FaAngleDoubleRight } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { RiWifiOffLine } from "react-icons/ri";
import { FaCaretDown } from "react-icons/fa";

import Hexagon from "../../assets/hexagon.svg";
import Icon from "../../assets/blueerp.svg";
import lite from "../../assets/lite.svg";
import mobi from "../../assets/mobi.svg";
import site from "../../assets/site.svg";

export function Header(){
  const [selected, setSelected] = useState('site');
    const [onTop, setOnTop] = useState(true);
    const [open, setOpen] = useState('');
    const navigate = useNavigate();

    function abriNovaRota(route) {
      navigate(route)
    };

    useEffect(()=> {
        window.addEventListener("scroll", function() {
            checkScrollPosition();
          });
          
          function checkScrollPosition() {
            const isAtTop = window.scrollY === 0;
            
            if (isAtTop) {
              setOnTop(true)
            } else {
              setOnTop(false)
            }
          }
    }, [])

    function abrirNovaAba(url) {
      window.open(url, '_blank');
    }

    return(
     <>
     <S.Container data-top={onTop} data-open={open}> 
      <img src={Icon} className="Icon" onClick={()=> navigate('/')}/>

      <div className="Right"> 
      <div className="Topic Soluction" onClick={()=> open == 'soluction' ? setOpen('') : setOpen('soluction')}>
        <span>Soluções</span> <FaCaretDown/>
       </div>
       
       <div className="Topic Functions"  onClick={()=> open == 'functions' ? setOpen('') : setOpen('functions')}>
        <span>Funcionalidades</span> <FaCaretDown/>
       </div>

       <div className="Topic Segment" onClick={()=> open == 'segment' ? setOpen('') : setOpen('segment')}>
        <span>Segmentos</span> <FaCaretDown/>
       </div>

       <div className="Topic">
        <span>Planos</span>
       </div>

       <button className="exp" onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>
        Experimente
       </button>

       <div className="Topic">
        <p>Entrar</p>
       </div>
      </div>
     </S.Container>

     { open == 'soluction' ?
      <S.Soluction data-top={onTop} data-select={selected} > 
      <div className="background" onClick={()=> setOpen('')}>
      </div>
      <div className="box" >
       <ul className="select">
        <li 
         className="selectSite" 
         onClick={()=> setSelected('site')}>
          <img src={site} alt="site"/> <FaAngleDoubleRight/>
        </li>

        <li 
         className="selectMobi" 
         onClick={()=> setSelected('mobi')}>
          <img src={mobi} alt="mobi"/> <FaAngleDoubleRight/>
        </li>

        <li 
         className="selectLite" 
         onClick={()=> setSelected('lite')}>
          <img src={lite} alt="lite"/> <FaAngleDoubleRight/>
        </li>

       </ul>

       { selected == 'site' ? 
        <div className="selected site">
          <span>
            Uma <strong>Loja Online </strong>
            completamente conectada ao seu sistema de gestão empresarial.
          </span>

          <TbTruckDelivery className="Icon"/>

          <ul>
           <li><IoShieldCheckmarkOutline/> <p>Sistema de <strong> Pagamento;</strong></p></li>
           <li><IoShieldCheckmarkOutline/> <p>Gestão de <strong> Entregas;</strong></p></li>
           <li><IoShieldCheckmarkOutline/> <p>Layout <strong> Responsivo;</strong></p></li>
           <li><IoShieldCheckmarkOutline/> <p>Chat via <strong> WhatsApp.</strong></p></li>
          </ul>

          <button onClick={()=> navigate('/loja-virtual')}>
           Conhecer Blue ERP
          </button>
        </div>
       :
        null
       }

       { selected == 'mobi' ?
        <div className="selected mobi">
          <span>
            <strong>Aplicativo de Vendas </strong>
            integrado para simplificar suas transações financeiras.
          </span>

          <IoPhonePortraitOutline className="Icon"/>

          <ul>
           <li><IoShieldCheckmarkOutline/> <p>Leitor de  <strong> código de barras;</strong></p></li>
           <li><IoShieldCheckmarkOutline/> <p>Vendas  <strong> Externas;</strong></p></li>
           <li><IoShieldCheckmarkOutline/> <p>Painel de  <strong> Caixa;</strong></p></li>
           <li><IoShieldCheckmarkOutline/> <p>PDV  <strong> Mobile.</strong></p></li>
          </ul>


          <button onClick={()=> navigate('/app-de-vendas')}>
           Conhecer Blue Mobi
          </button>
        </div>
       :
        null
       }

       { selected == 'lite' ?
        <div className="selected lite">
          <span>
            <strong>ERP Offline </strong>
             para que suas vendas continuem, mesmo sem conexão com a internet.
          </span>

          <RiWifiOffLine className="Icon"/>

          <ul>
           <li><IoShieldCheckmarkOutline/> <p>Notas em  <strong> Contingência;</strong></p></li>
           <li><IoShieldCheckmarkOutline/> <p>Orçamentos e <strong> Pedidos;</strong></p></li>
           <li><IoShieldCheckmarkOutline/> <p>BackUp <strong> Automático;</strong></p></li>
           <li><IoShieldCheckmarkOutline/> <p>PDV  <strong> Offline.</strong></p></li>
          </ul>
          

          <button onClick={()=> navigate('/loja-offline')}>
           Conhecer Blue ERP Lite
          </button>
        </div>
       :
        null
       }

       <div className="EcoLink">
        <h3>
         O SIGE Cloud vai além de um ERP, é um verdadeiro <strong>Ecossistema para gestão e vendas!</strong>
        </h3>

        <span onClick={()=> abriNovaRota('/ecossistema')}>Descubra mais <strong>{'>'}</strong></span>
        <img src={Hexagon} alt="hexagono" />
       </div>
      </div>
      </S.Soluction>
     :
      null
     }

     { open == 'segment' ?
      <S.Segment data-top={onTop} >
        <div className="background" onClick={()=> setOpen('')}>
        </div>
        <div className="box">
         <ul>
         <li>Assistência Técnica</li>
         <li>Vestuário</li>
         <li>Agências de turismo</li>
         <li>Produtos Alimentícios</li>
         <li>Autopeças</li>
         <li>Lanchonetes e Bares</li>
         <li>Serviços de Engenharia</li>
         </ul>

         <ul className="other">
         <li>Construção</li>
         <li>Consultoria Empresarial</li>
         <li>Loja Virtual</li>
         <li>Cosméticos e Perfumes</li>
         <li>Serviços Elétricos</li>
         <li>Confecção de Roupas</li>
         <li>Ferramentas e Ferragens</li>
         </ul>

         <ul>
          <li>Telefonia e Comunicação</li>
          <li>Produtos Hospitalares</li>
          <li>Eletro-domésticos</li>
          <li>Venda de Móveis</li>
          <li>Indústrias</li>
          <li>Produtos de Limpeza</li>
          <li>Distribuidoras</li>
         </ul>

         <div className="EcoLink">
          <h3><strong>Experimente a  Blue Erp agora</strong>  e descubra se ela é a solução ideal para o seu negócio.</h3>

          <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
          <img src={Hexagon} alt="hexagono" />
         </div>
        </div>
      </S.Segment>
     :
      null
     }

     { open == 'functions' ?
      <S.Functions data-top={onTop} >
        <div className="background" onClick={()=> setOpen('')}>
        </div>
        <div className="box">
         <ul>
          <h3>Financeiro e Fiscal</h3>

          <li><FaAngleDoubleRight/> Relatórios Financeiros e Fiscais</li>
          <li><FaAngleDoubleRight/> Gestão Financeira</li>
          <li><FaAngleDoubleRight/> Gestão de Compras</li>
          <li><FaAngleDoubleRight/> Gestão Fiscal</li>
         </ul>

         <ul className="other">
          <h3>Vendas e Serviços</h3>

          <li><FaAngleDoubleRight/> PDV com Cupom Fiscal Eletrônico</li>
          <li><FaAngleDoubleRight/> Relatórios de Vendas e Serviços</li>
          <li><FaAngleDoubleRight/> Central de Integrações</li>
          <li><FaAngleDoubleRight/> Gestão de Contratos</li>
          <li><FaAngleDoubleRight/> Gestão de Serviços</li>
          <li><FaAngleDoubleRight/> Gestão de Vendas</li>
          <li><FaAngleDoubleRight/> Catálogo Virtual</li>
          <li><FaAngleDoubleRight/> Gestão de CRM</li>
         </ul>

         <ul>
          <h3>Logística</h3>

          <li><FaAngleDoubleRight/> Gestão de Expedição e SIGEP Web</li>
          <li><FaAngleDoubleRight/> Relatórios de Logística</li>
          <li><FaAngleDoubleRight/> Gestão de Produção</li>
          <li><FaAngleDoubleRight/> Gestão de Estoque</li>
          <li><FaAngleDoubleRight/> Gestão de Frota</li>
         </ul>

         <ul className="other">
          <h3>Administrativo</h3>

          <li><FaAngleDoubleRight/> Ferramentas Administrativas</li>
          <li><FaAngleDoubleRight/> Relatórios Administrativos</li>
          <li><FaAngleDoubleRight/> Documentos Personalizados</li>
          <li><FaAngleDoubleRight/> Sistema Online</li>
         </ul>

        </div>
      </S.Functions>
     :
      null
     }
     </>
    )
};