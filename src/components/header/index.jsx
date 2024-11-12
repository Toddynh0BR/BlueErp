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
    const [pop, setPop] = useState(false);
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

       <div className="Topic" onClick={()=> navigate('/planos')}>
        <span>Planos</span>
       </div>

       <button className="exp" onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>
        Experimente
       </button>

       <div className="Topic" onClick={()=> setPop(true)}>
        <p>Entrar</p>
       </div>
      </div>

      <div className="MOBAL">
        <span>Planos</span>
        <span onClick={()=> abrirNovaAba('https://blueinnovation.com.br/contato/')}>Contato</span>
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
         <li onClick={()=> navigate("/lojas-de-informatica")}>Assistência Técnica</li>
         <li onClick={()=> navigate("/loja-de-roupas")}>Vestuário</li>
         <li onClick={()=> navigate("/agencias-de-turismo")}>Agências de turismo</li>
         <li onClick={()=> navigate("/loja-de-produtos-alimenticios")}>Produtos Alimentícios</li>
         <li onClick={()=> navigate("/sistema-para-autopecas")}>Autopeças</li>
         <li onClick={()=> navigate("/lanchonetes-e-bares")}>Lanchonetes e Bares</li>
         <li  onClick={()=> navigate("/servicos-de-engenharia")}>Serviços de Engenharia</li>
         </ul>

         <ul className="other">
         <li onClick={()=> navigate("/loja-de-materiais-de-construcao")}>Construção</li>
         <li onClick={()=> navigate("/consultoria-empresarial")}>Consultoria Empresarial</li>
         <li onClick={()=> navigate("/erp-para-loja-virtual")}>Loja Virtual</li>
         <li onClick={()=> navigate("/cosmeticos-e-perfumes")}>Cosméticos e Perfumes</li>
         <li onClick={()=> navigate("/instalacao-e-manutencao-eletrica")}>Serviços Elétricos</li>
         <li onClick={()=> navigate("/confeccao-de-roupas")}>Confecção de Roupas</li>
         <li onClick={()=> navigate("/ferramentas-e-ferragens")}>Ferramentas e Ferragens</li>
         </ul>

         <ul>
          <li onClick={()=> navigate("/produtos-medicos-e-hospitalares")}>Produtos Hospitalares</li>
          <li onClick={()=> navigate("/telefonia-e-comunicacao")}>Telefonia e Comunicação</li>
          <li onClick={()=> navigate("/loja-de-eletrodomesticos")}>Eletro-domésticos</li>
          <li onClick={()=> navigate("/fabricantes-e-loja-de-moveis")}>Venda de Móveis</li>
          <li onClick={()=> navigate("/erp-para-industria")}>Indústrias</li>
          <li onClick={()=> navigate("/distribuidoras")}>Distribuidoras</li>
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

          <li onClick={()=> navigate('/controle-financeiro')}><FaAngleDoubleRight/> Relatórios Financeiros e Fiscais</li>
          <li onClick={()=> navigate('/gestao-de-compras')}><FaAngleDoubleRight/> Gestão de Compras</li>
          <li onClick={()=> navigate('/controle-financeiro')}><FaAngleDoubleRight/> Gestão Financeira</li>
          <li onClick={()=> navigate('/gestao-fiscal')}><FaAngleDoubleRight/> Gestão Fiscal</li>
         </ul>

         <ul className="other">
          <h3>Vendas e Serviços</h3>

          <li onClick={()=> navigate('/pdv-com-cupom-fiscal-eletronico')}><FaAngleDoubleRight/> PDV com Cupom Fiscal Eletrônico</li>
          <li onClick={()=> navigate('/controle-de-vendas')}><FaAngleDoubleRight/> Relatórios de Vendas e Serviços</li>
          <li onClick={()=> navigate('/central-de-integraçoes')}><FaAngleDoubleRight/> Central de Integrações</li>
          <li onClick={()=> navigate('/gestao-de-contratos')}><FaAngleDoubleRight/> Gestão de Contratos</li>
          <li onClick={()=> navigate('/gestao-de-serviços')}><FaAngleDoubleRight/> Gestão de Serviços</li>
          <li onClick={()=> navigate('/controle-de-vendas')}><FaAngleDoubleRight/> Gestão de Vendas</li>
          <li onClick={()=> navigate('/catalogo-virtual')}><FaAngleDoubleRight/> Catálogo Virtual</li>
          <li onClick={()=> navigate('/gestao-de-crm')}><FaAngleDoubleRight/> Gestão de CRM</li>
         </ul>

         <ul>
          <h3>Logística</h3>

          <li onClick={()=> navigate('/gestao-de-expediçao')}><FaAngleDoubleRight/> Gestão de Expedição e SIGEP Web</li>
          <li onClick={()=> navigate('/controle-de-estoque')}><FaAngleDoubleRight/> Relatórios de Logística</li>
          <li onClick={()=> navigate('/controle-de-produçao')}><FaAngleDoubleRight/> Gestão de Produção</li>
          <li onClick={()=> navigate('/controle-de-produçao')}><FaAngleDoubleRight/> Gestão de Estoque</li>
          <li onClick={()=> navigate('/controle-de-estoque')}><FaAngleDoubleRight/> Gestão de Frota</li>
         </ul>

         <ul className="other">
          <h3>Administrativo</h3>
          <li onClick={()=> navigate('/ferramentas-administrativas')}><FaAngleDoubleRight/> Ferramentas Administrativas</li>
          <li onClick={()=> navigate('/ferramentas-administrativas')}><FaAngleDoubleRight/> Relatórios Administrativos</li>
          <li onClick={()=> navigate('/ferramentas-administrativas')}><FaAngleDoubleRight/> Documentos Personalizados</li>
          <li onClick={()=> navigate('/sistema-online')}><FaAngleDoubleRight/> Sistema Online</li>
         </ul>

        </div>
      </S.Functions>
     :
      null
     }

      <S.PopUp data-visible={pop} >
       <div className="background" onClick={()=> setPop(false)}></div>
       <main>
        <h2>Entrar</h2>
        <button onClick={()=> abrirNovaAba('https://cpanel.blueerp.com.br/Login.aspx?ReturnUrl=%2f')}>Blue ERP</button>

        <button onClick={()=> abrirNovaAba('https://cpanel.lite.blueerp.com.br/Login.aspx?ReturnUrl=%2f')}>Blue Lite</button>

        <button onClick={()=> abrirNovaAba('https://blueinnovation.freshdesk.com/support/login')}>Suporte</button>
       </main>
      </S.PopUp>

     </>
    )
};