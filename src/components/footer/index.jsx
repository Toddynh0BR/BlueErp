import * as S from './style';

import { useNavigate, useLocation, Link } from "react-router-dom";


import { IoShieldCheckmarkOutline,  IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdCloudOutline } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { RiWifiOffLine } from "react-icons/ri";

import { FaInstagram, FaYoutube, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { GoShieldCheck } from "react-icons/go";

import playstore from "../../assets/playstore.png";
import appstore from "../../assets/appstore.png";
import app from "../../assets/blueapp.svg";

export function Footer(){
  const path = location.pathname.split('/').filter(Boolean).pop();
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
          <h2><strong>Experimente a  Blue ERP </strong> agora e <br /> surpreenda-se com os resultados!</h2>

          <button onClick={()=> abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente agora</button>
        </div>

        <div className="right">
          <ul>
            <li><GoShieldCheck/>  <p><strong>Se preferir, receba uma apresentação comercial  </strong>  durante o período de teste.</p></li>
            <li><GoShieldCheck/>  <p><strong> Sem necessidade </strong> de cartão de crédito.</p></li>
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
          <a href='https://wa.me/551121106090?text=Olá%2C%20gostaria%20de%20falar%20com%20vocês!' target='blank'>
             +55 11 2110-6090
          </a>
         </span>
        </div>

        <div className="follow">
          <span>Siga-nos:</span>

          <a href="https://www.instagram.com/blueinnovationbr/profilecard/?igsh=MWVscWxxN2tnYjVoZA%3D%3D" target='blank'>
          <FaInstagram/>
          </a>

          <a href="https://www.facebook.com/people/Blue-Innovation/61568409581809/" target='blank'>
          <FaFacebook/>
          </a>

          <a href="https://www.youtube.com/@blueinnovation-m3g?si=0dFTX812cgdyNQ9W" target='blank'>
          <FaYoutube/>
          </a>

          <a href="https://www.linkedin.com/company/105473549/" target='blank'>
          <FaLinkedin/>
          </a>

          <a href="https://wa.me/message/KL5UXTDEMTXIK1" target='blank'>
          <FaWhatsapp/>
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
            <li onClick={()=> path == 'pdv-com-cupom-fiscal-eletronico' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}
                className={ path == 'pdv-com-cupom-fiscal-eletronico' ? 'this' : ''} 
                ><Link to="/pdv-com-cupom-fiscal-eletronico"> PDV com Cupom Fiscal Eletrônico </Link></li>

            <li onClick={()=> path == 'controle-de-vendas' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}
                className={ path == 'controle-de-vendas' ? 'this' : ''}
                ><Link to='/controle-de-vendas'> Relatórios de Vendas e Serviços </Link></li>

            <li onClick={()=> path == 'loja-virtual' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}
                className={ path ==  'loja-virtual' ? 'this' : ''}
                ><Link to='/loja-virtual'> Loja Virtual - Blue Loja </Link></li>

            <li onClick={()=> path == 'app-de-vendas' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}
                className={ path == 'app-de-vendas' ? 'this' : ''}
                ><Link to='/app-de-vendas'> App de Vendas - Blue Mobi</Link></li>

            <li onClick={()=> path == 'loja-offline' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}
                className={ path == 'loja-offline' ? 'this' : ''}
                ><Link to='/loja-offline'> Loja Offline - Blue Lite</Link></li>

            <li onClick={()=> path == 'central-de-integra%C3%A7oes' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}
                className={ path == 'central-de-integra%C3%A7oes' ? 'this' : ''}
                ><Link to='/central-de-integraçoes'> Central de Integrações </Link></li>

            <li onClick={()=> path == 'gestao-de-contratos' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}
                className={ path == 'gestao-de-contratos' ? 'this' : ''}
                ><Link to='/gestao-de-contratos'> Gestão de Contratos </Link></li>

            <li onClick={()=> path == 'gestao-de-servi%C3%A7os' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}
                className={ path == 'gestao-de-servi%C3%A7os' ? 'this' : ''}
                ><Link to='/gestao-de-serviços'> Gestão de Serviços </Link></li>

            <li onClick={()=> path == 'controle-de-vendas' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}
                className={ path == 'controle-de-vendas' ? 'this' : ''}
                ><Link to='/controle-de-vendas'> Gestão de Vendas </Link></li>

            <li onClick={()=> path == 'catalogo-virtual' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}
                className={ path == 'catalogo-virtual' ? 'this' : ''}
                ><Link to='/catalogo-virtual'> Catálogo Virtual </Link></li>

            <li onClick={()=> path == 'gestao-de-crm' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}
                className={ path == 'gestao-de-crm' ? 'this' : ''}
                ><Link to='/gestao-de-crm'> Gestão de CRM </Link></li>

          </ul>
        </div>

        <div className="topic">
          <h5>Financeiro e Fiscal</h5>
          <ul>
            <li onClick={()=> path == 'controle-financeiro' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}
                className={ path == 'controle-financeiro' ? 'this' : ''}
                ><Link to="/controle-financeiro"> Relatórios Financeiros e Fiscais</Link></li>

            <li onClick={()=> path == 'gestao-de-compras' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}
                className={ path == 'gestao-de-compras' ? 'this' : ''}
                ><Link to="/gestao-de-compras"> Gestão de Compras</Link></li>

            <li onClick={()=> path == 'controle-financeiro' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}
                className={ path == 'controle-financeiro' ? 'this' : ''}
                ><Link to="/controle-financeiro"> Gestão Financeira</Link></li>

            <li onClick={()=> path == 'gestao-fiscal' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}
                className={ path == 'gestao-fiscal' ? 'this' : ''}
                ><Link to="/gestao-fiscal"> Gestão Fiscal</Link></li>

          </ul>
        </div>

        <div className="topic">
          <h5>Administrativo</h5>
          <ul>
          <li onClick={()=> path == 'central-de-integra%C3%A7oes' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}
              className={ path == 'central-de-integra%C3%A7oes' ? 'this' : ''}
              ><Link to="/central-de-integraçoes"> Integração com o Google Apps</Link></li>

          <li onClick={()=> path == 'ferramentas-administrativas' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}
              className={ path == 'ferramentas-administrativas' ? 'this' : ''}
              ><Link to="/ferramentas-administrativas"> Relatórios Administrativos</Link></li>

          <li onClick={()=> path == 'ferramentas-administrativas' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}
              className={ path == 'ferramentas-administrativas' ? 'this' : ''}
              ><Link to="/ferramentas-administrativas"> Documentos Personalizados</Link></li>

          <li onClick={()=> path == 'ferramentas-administrativas' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}
              className={ path == 'ferramentas-administrativas' ? 'this' : ''}
              ><Link to="/ferramentas-administrativas"> Gestão de Arquivos</Link></li>

          <li onClick={()=> path == 'ferramentas-administrativas' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}
              className={ path == 'ferramentas-administrativas' ? 'this' : ''}
              ><Link to="/ferramentas-administrativas"> Gestão de Tarefas</Link></li>

          <li onClick={()=> path == 'sistema-online' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}
              className={ path == 'sistema-online' ? 'this' : ''}
              ><Link to="/sistema-online"> Sistema Online</Link></li>

          <li onClick={()=> path == 'ferramentas-administrativas' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}
              className={ path == 'ferramentas-administrativas' ? 'this' : ''}
              ><Link to="/ferramentas-administrativas"> Gestão de RH</Link></li>

          </ul>
        </div>

        <div className="topic">
          <h5>Logística</h5>
          <ul>
           <li onClick={()=> path == 'gestao-de-expedi%C3%A7ao' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}
               className={ path == 'gestao-de-expedi%C3%A7ao' ? 'this' : ''}
               ><Link to='/gestao-de-expediçao'> Gestão de Expedição e BLUE Web</Link></li>

           <li onClick={()=> path == 'controle-de-produ%C3%A7ao' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}
               className={ path == 'controle-de-produ%C3%A7ao' ? 'this' : ''}
               ><Link to='/controle-de-estoque'> Relatórios de Logística</Link></li>

           <li onClick={()=> path == 'controle-de-produ%C3%A7ao' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}
               className={ path == 'controle-de-produ%C3%A7ao' ? 'this' : ''}
               ><Link to='/controle-de-produçao'> Gestão de Produção</Link></li>

           <li onClick={()=> path == 'controle-de-produ%C3%A7ao' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}
               className={ path == 'controle-de-produ%C3%A7ao' ? 'this' : ''}
               ><Link to='/controle-de-produçao'> Gestão de Estoque</Link></li>

           <li onClick={()=> path == 'controle-de-estoque' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}
               className={ path == 'controle-de-estoque' ? 'this' : ''}
               ><Link to='/controle-de-estoque'> Gestão de Frota</Link></li>

          </ul>
        </div>
       </div>

       <h4>Sobre nós</h4>

       <div className="links">
        <div className="topic">
         <h5>Conheça</h5>
         <ul>
         <li onClick={()=> path == 'parceiros' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}
             className={ path == 'parceiros' ? 'this' : ''}
             ><Link to='/parceiros'> Parceiros e Integrações </Link></li>

         <li onClick={()=> path == 'blue-innovation' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}
             className={ path == 'blue-innovation' ? 'this' : ''}
             ><Link to='/blue-innovation'> Sobre a BLUE ERP </Link></li>

         <li onClick={()=> abrirNovaAba('https://blueinnovation.com.br/politica-privacidade/')}>Termos e Condições</li>
         <li onClick={()=> path == 'planos' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}
             className={ path == 'planos' ? 'this' : ''}
             ><Link to='/planos'> Planos e Preços </Link></li>

         <li onClick={()=> path == 'conheça-a-blue-erp' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}
             className={ path == 'conheça-a-blue-erp' ? 'this' : ''}
             ><Link to='/conheça-a-blue-erp'> Como funciona? </Link></li>

         <li onClick={()=> abrirNovaAba('https://blueinnovation.com.br/contato/')}>Contato</li>
         </ul>
        </div>

        <div className="topic">
         <h5>Suporte</h5>
         <ul>
          <li onClick={()=> abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Primeiros passos</li>
          <li onClick={()=> abrirNovaAba('https://blueinnovation.freshdesk.com/support/login')}>Abertura de Ticket</li>
         </ul>
        </div>

        <div className="topic">
         <h5>Áreas de Atuação</h5>
         <ul>
          <li onClick={()=> path == 'parceiros' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}
              className={ path == 'ferramentas-e-ferragens' ? 'this' : ''}
              > <Link to="/ferramentas-e-ferragens" >Ferramentas e Ferragens</Link></li>

          <li onClick={()=> path == 'parceiros' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}
              className={ path == 'consultoria-empresarial' ? 'this' : ''}
              ><Link to='/consultoria-empresarial'> Consultoria Empresarial</Link></li>

          <li onClick={()=> path == 'parceiros' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}
              className={ path == 'lojas-de-informatica' ? 'this' : ''}
              ><Link to='/lojas-de-informatica'> Lojas de Informática</Link></li>

          <li onClick={()=> path == 'parceiros' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}
              className={ path == 'agencias-de-turismo' ? 'this' : ''}
              ><Link to='/agencias-de-turismo'> Agências de turismo</Link></li>

          <li onClick={()=> path == 'parceiros' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}
              className={ path == 'loja-de-eletrodomesticos' ? 'this' : ''}
              ><Link to='/loja-de-eletrodomesticos'> Eletro-domésticos</Link></li>

          <li onClick={()=> path == 'parceiros' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}
              className={ path == 'lojas-de-informatica' ? 'this' : ''}
              ><Link to='/lojas-de-informatica'> Serviços de TI</Link></li>

          <li onClick={()=> path == 'parceiros' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}
              className={ path == 'erp-para-loja-virtual' ? 'this' : ''}
              ><Link to='/erp-para-loja-virtual'> Loja Virtual</Link></li>

          <li onClick={()=> path == 'parceiros' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}
              className={ path == 'loja-de-materiais-de-construcao' ? 'this' : ''}
              ><Link to='/loja-de-materiais-de-construcao'> Construção</Link></li>

          <li onClick={()=> path == 'parceiros' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}
              className={ path == 'loja-de-roupas' ? 'this' : ''}
              ><Link to='/loja-de-roupas'> Vestuário</Link></li>

          <li onClick={()=> path == 'parceiros' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}
              className={ path == 'produtos-medicos-e-hospitalares' ? 'this' : ''}
              ><Link to='/produtos-medicos-e-hospitalares'> Produtos Hospitalares</Link></li>

          <li onClick={()=> path == 'parceiros' ? window.scrollTo({ top: 0, behavior: "smooth",  }) : null}
              className={ path == 'sistema-para-autopecas' ? 'this' : ''}
              ><Link to='/sistema-para-autopecas'> Autopeças</Link></li>

         </ul>
        </div>

        <div className="topic">
         <h5 className='none'>Áreas de Atuação</h5>
         <ul>
          <li className={ path == 'telefonia-e-comunicacao' ? 'this' : ''}
              > <Link to="/telefonia-e-comunicacao"> Telefonia e Comunicação </Link></li>

          <li className={ path == 'servicos-de-engenharia' ? 'this' : ''}
              > <Link to="/servicos-de-engenharia"> Serviços de Engenharia </Link></li>

          <li className={ path == 'loja-de-produtos-alimenticios' ? 'this' : ''}
              > <Link to="/loja-de-produtos-alimenticios"> Produtos Alimentícios </Link></li>

          <li className={ path == 'cosmeticos-e-perfumes' ? 'this' : ''}
              > <Link to="/cosmeticos-e-perfumes"> Cosméticos e Perfumes </Link></li>

          <li className={ path == 'lanchonetes-e-bares' ? 'this' : ''}
              > <Link to="/lanchonetes-e-bares"> Lanchonetes e Bares </Link></li>

          <li className={ path == 'confeccao-de-roupas' ? 'this' : ''}
              > <Link to="/confeccao-de-roupas"> Confecção de Roupas </Link></li>

          <li className={ path == 'lojas-de-informatica' ? 'this' : ''}
              > <Link to="/lojas-de-informatica"> Assistência Técnica </Link></li>

          <li className={ path == 'instalacao-e-manutencao-eletrica' ? 'this' : ''}
              > <Link to="/instalacao-e-manutencao-eletrica"> Serviços Elétricos </Link></li>

          <li className={ path == 'fabricantes-e-loja-de-moveis' ? 'this' : ''}
              > <Link to="/fabricantes-e-loja-de-moveis"> Venda de Móveis </Link></li>

          <li className={ path == 'erp-para-industria' ? 'this' : ''}
              > <Link to="/erp-para-industria"> Indústrias </Link></li>

          <li className={ path == 'distribuidoras' ? 'this' : ''}
              > <Link to="/distribuidoras"> Distribuidoras </Link></li>

         </ul>
        </div>


       </div>

       <div className="bottom">
        <div className="direct">
          <span>Todos os direitos reservados | <strong> Blue Innovation Group </strong></span>
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