import * as S from "./style";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Play from "../../../../assets/playstore.png";
import Apple from "../../../../assets/appstore.png";
import Logo from "../../../../assets/site.svg";

import { FaUserLarge } from "react-icons/fa6";


import ads1 from "../../assets/bannerMenuSigeBank.png";
import ads2 from "../../assets/bannerMenuSigeLoja.jpg";

export function EspecialHeader(){
    const [functionOpen, setFunction] = useState(false);
    const [workOpen, setWorkOpen] = useState(false);
    const [onTop, setOnTop] = useState(true);

    const navigate = useNavigate();

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

    return(
     <S.Container data-top={onTop}>
      <S.Top data-top={onTop}>
       <div className="download">
        <img src={Play} alt="playstore" />
        <img src={Apple} alt="applestore" />
       </div>
       <button>
        <FaUserLarge/>
        <p>Entrar</p>
       </button>
      </S.Top>

      <S.Buttom data-top={onTop}>
        <img src={Logo} alt="" className="Logo" onClick={()=> navigate('/')}/>

        <div className="right">
         <span 
          onMouseEnter={()=> { setFunction(true); setWorkOpen(false)}}
         >Funcionalidades
         </span>

         <span
          onMouseEnter={()=> { setWorkOpen(true); setFunction(false)}}
         >Áreas de Atuação
         </span>

         <span>Conheça</span>
         <span>Planos</span>
         <span>Suporte</span>

         <button>
            Experimente
         </button>

        </div>

      

        { functionOpen ? 
        <div className="hover"  
         onMouseLeave={()=> { setFunction(false)}}>
         <div className="Functions">
          <div className="collum">
            <h4>Financeiro e Fiscal</h4>
            <ul>
             <li onClick={()=> navigate('/controle-financeiro')}> Relatórios Financeiros e Fiscais</li>
             <li onClick={()=> navigate('/gestao-de-compras')}> Gestão de Compras</li>
             <li onClick={()=> navigate('/controle-financeiro')}> Gestão Financeira</li>
             <li onClick={()=> navigate('/gestao-fiscal')}> Gestão Fiscal</li>
            </ul>
          </div>

          <div className="collum">
            <h4>Controle de Vendas e Serviços</h4>
            <ul>
             <li onClick={()=> navigate('/pdv-com-cupom-fiscal-eletronico')}>PDV com Cupom Fiscal Eletrônico</li>
             <li onClick={()=> navigate('/controle-de-vendas')}>Relatórios de Vendas e Serviços</li>
             <li onClick={()=> navigate('/central-de-integraçoes')}>Central de Integrações</li>
             <li onClick={()=> navigate('/gestao-de-contratos')}>Gestão de Contratos</li>
             <li onClick={()=> navigate('/gestao-de-serviços')}>Gestão de Serviços</li>
             <li onClick={()=> navigate('/controle-de-vendas')}>Gestão de Vendas</li>
             <li onClick={()=> navigate('/catalogo-virtual')}>Catálogo Virtual</li>
             <li onClick={()=> navigate('/gestao-de-crm')}>Gestão de CRM</li>
            </ul>
          </div>

          <div className="collum">
            <h4>Logística</h4>
            <ul>
             <li onClick={()=> navigate('/gestao-de-expediçao')}> Gestão de Expedição e SIGEP Web</li>
             <li onClick={()=> navigate('/controle-de-estoque')}> Relatórios de Logística</li>
             <li onClick={()=> navigate('/controle-de-produçao')}> Gestão de Produção</li>
             <li onClick={()=> navigate('/controle-de-produçao')}> Gestão de Estoque</li>
             <li onClick={()=> navigate('/controle-de-estoque')}> Gestão de Frota</li>
            </ul>
          </div>

          <div className="collum">
            <h4>Administrativo</h4>
            <ul>
             <li onClick={()=> navigate('/ferramentas-administrativas')}>Ferramentas Administrativas</li>
             <li onClick={()=> navigate('/ferramentas-administrativas')}>Relatórios Administrativos</li>
             <li onClick={()=> navigate('/ferramentas-administrativas')}>Documentos Personalizados</li>
             <li onClick={()=> navigate('/sistema-online')}>Sistema Online</li>
            </ul>
          </div>

          <div className="bigCollum">
           <img src={ads1} alt="" onClick={()=> navigate('/loja-offline')}/>
           <img src={ads2} alt="" onClick={()=> navigate('/app-de-vendas')}/>
          </div>
         </div>
        </div>
        :
         null
        }

        { workOpen ? 
         <div className="hover"
          onMouseLeave={()=> { setWorkOpen(false)}}
         >
          <div className="Areas">
            <ul>
             <li>Assistência Técnica</li>
             <li>Vestuário</li>
             <li>Lojas de Informática</li>
             <li>Produtos Alimentícios</li>
             <li>Autopeças</li>
             <li>Lanchonetes e Bares</li>
            </ul>
            
            <ul>
             <li>Serviços de Engenharia</li>
             <li>Construção</li>
             <li>Consultoria Empresarial</li>
             <li>Loja Virtual</li>
             <li>Cosméticos e Perfumes</li>
             <li>Serviços Elétricos</li>
            </ul>

            <ul>
             <li>Produtos Hospitalares</li>
             <li>Confecção de Roupas</li>
             <li onClick={()=> navigate("/ferramentas-e-ferragens")}>Ferramentas e Ferragens</li>
             <li>Telefonia e Comunicação</li>
             <li>Serviços de TI</li>
             <li>Eletro-domésticos</li>
            </ul>

            <ul>
             <li>Venda de Móveis</li>
             <li>Indústrias</li>
             <li>Produtos de Limpeza</li>
             <li>Produtos Médicos e Hospitalares</li>
             <li>Distribuidoras</li>                
            </ul>
          </div>
         </div>
        :
         null  
        }
      </S.Buttom>

     </S.Container>
    )
}