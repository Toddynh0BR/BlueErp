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
             <li onClick={()=> navigate("/lojas-de-informatica")}>Assistência Técnica</li>
             <li onClick={()=> navigate("/loja-de-roupas")}>Vestuário</li>
             <li onClick={()=> navigate("/lojas-de-informatica")}>Lojas de Informática</li>
             <li onClick={()=> navigate("/loja-de-produtos-alimenticios")}>Produtos Alimentícios</li>
             <li onClick={()=> navigate("/sistema-para-autopecas")}>Autopeças</li>
             <li onClick={()=> navigate("/lanchonetes-e-bares")}>Lanchonetes e Bares</li>
            </ul>
            
            <ul>
             <li  onClick={()=> navigate("/servicos-de-engenharia")}>Serviços de Engenharia</li>
             <li onClick={()=> navigate("/loja-de-materiais-de-construcao")}>Construção</li>
             <li onClick={()=> navigate("/consultoria-empresarial")}>Consultoria Empresarial</li>
             <li onClick={()=> navigate("/erp-para-loja-virtual")}>Loja Virtual</li>
             <li onClick={()=> navigate("/cosmeticos-e-perfumes")}>Cosméticos e Perfumes</li>
             <li onClick={()=> navigate("/instalacao-e-manutencao-eletrica")}>Serviços Elétricos</li>
            </ul>

            <ul>
             <li onClick={()=> navigate("/confeccao-de-roupas")}>Confecção de Roupas</li>
             <li onClick={()=> navigate("/ferramentas-e-ferragens")}>Ferramentas e Ferragens</li>
             <li onClick={()=> navigate("/telefonia-e-comunicacao")}>Telefonia e Comunicação</li>
             <li onClick={()=> navigate("/lojas-de-informatica")}>Serviços de TI</li>
             <li onClick={()=> navigate("/loja-de-eletrodomesticos")}>Eletro-domésticos</li>
            </ul>

            <ul>
             <li onClick={()=> navigate("/produtos-medicos-e-hospitalares")}>Produtos Hospitalares</li>
             <li onClick={()=> navigate("/fabricantes-e-loja-de-moveis")}>Venda de Móveis</li>
             <li onClick={()=> navigate("/erp-para-industria")}>Indústrias</li>    
             <li onClick={()=> navigate("/distribuidoras")}>Distribuidoras</li>          
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