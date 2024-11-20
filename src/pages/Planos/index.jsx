import * as S from "./style";

import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

import MouseFollower from "../../components/mouse";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";

import Exp from "../../assets/exp.svg";
import Lite from "../../assets/plano-intermediario-icon.svg";
import Standard from "../../assets/plano-profissional-icon.svg";
import Professional from "../../assets/plano-ultra-icon.svg";

export function Planos(){
    const navigate = useNavigate();

    function abrirNovaAba(url) {
      window.open(url, '_blank');
    };

    const handleScrollToSection = (sectionRef) => {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };
   
    useEffect(() => {
 
        window.scrollTo({
          top: 0,
          behavior: "smooth", 
        });
    }, []);

    return(
     <S.Container>
      <MouseFollower/>
      <Header/>

      <S.Main>
       <p>Conheça nossos <strong> planos e preços</strong></p>
       <h3>Planos com <strong> os melhores preços para a sua empresa</strong></h3>

       <div className="Bottom">
        <div className="exp">
         <img src={Exp} alt="" />

         <button>
          Experimente gratis
         </button>
        </div>

        <div className="plans">
          <div className="lite Plan">
          <div className="top">
            <h4>Lite</h4>
            <p>Ideal para pequenos comércios</p>
           </div>

           <div className="bottom">
            <strong><span>Por</span>R$ 89,90 <p>/mês</p></strong>

            <img src={Lite} alt="" />
           </div>
          </div>

          <div className="standard Plan">
           <div className="top">
            <h4>Standard</h4>
            <p>Ideal para indústrias e comércios de médio porte</p>
           </div>

           <div className="bottom">
            <strong><span>Por</span>R$ 250,00 <p>/mês</p></strong>

            <img src={Standard} alt="" />
           </div>
          </div>

          <div className="professional Plan">
          <div className="top">
            <h4>Profissional</h4>
            <p>Ideal para ecommerces e prestadores de serviços</p>
           </div>

           <div className="bottom">
            <strong><span>Por</span>R$ 659,40 <p>/mês</p></strong>

            <img src={Professional} alt="" />
           </div>
          </div>
        </div>
       </div>
      </S.Main>

      <S.Plans>
        <ul>
          <header>
            <p>Recursos que fazem da Blue ERP única</p>
          </header>


          <li>
           <div className="name">
            Usuários
            <p>(R$ 29,90 por usuário adicional)</p>
           </div>

           <div className="plans">
            <div className="plan">
              2
            </div>

            <div className="plan">
              4
            </div>

            <div className="plan">
              5
            </div>
           </div>
          </li>

          <li>
           <div className="name">
            Multi-Empresa - Filiais
            <p>(R$ 299,00 por filial)</p>
           </div>

           <div className="plans">
            <div className="plan">
            <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>

            <div className="plan">
            <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>

            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>
           </div>
          </li>

          <li>
           <div className="name">
            Cadastros Básicos
           </div>

           <div className="plans">
            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>

            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>

            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>
           </div>
          </li>

          <li>
           <div className="name">
            Compras - Notas de Entrada, Cotações e Ordens de Compras
           </div>

           <div className="plans">
            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>

            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>

            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>
           </div>
          </li>

          <li>
           <div className="name">
           Estoque - Cadastro de Produtos/Serviços, Movimentações
           </div>

           <div className="plans">
            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>

            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>

            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>
           </div>
          </li>

          <li>
           <div className="name">
            Financeiro Básico
           </div>

           <div className="plans">
            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>

            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>

            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>
           </div>
          </li>

          <li>
           <div className="name">
            Financeiro Avançado
           </div>

           <div className="plans">
            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>

            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>

            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>
           </div>
          </li>

          <li>
           <div className="name">
           Nota Fiscal Eletrônica - Todas as notas menos NFS-e
           </div>

           <div className="plans">
            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>

            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>

            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>
           </div>
          </li>

          <li>
           <div className="name">
           PDV - Frente de Caixa
           </div>

           <div className="plans">
            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>

            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>

            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>
           </div>
          </li>

          <li>
           <div className="name">
           Vendas - Pedidos/Orçamentos e Ordens de Serviço
           </div>

           <div className="plans">
            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>

            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>

            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>
           </div>
          </li>

          <li>
           <div className="name">
           Contratos - Gestão de contratos
           </div>

           <div className="plans">
            <div className="plan">
             <RxCrossCircled size={20} color="#c00000"/>
            </div>

            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>

            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>
           </div>
          </li>

          <li>
           <div className="name">
            Arquivos - Carregamento de anexos aos cadastros do sistema
           </div>

           <div className="plans">
            <div className="plan">
             <RxCrossCircled size={20} color="#c00000"/>
            </div>

            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>

            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>
           </div>
          </li>

          <li>
           <div className="name">
            RH - Gestão de colaboradores	
           </div>

           <div className="plans">
            <div className="plan">
             <RxCrossCircled size={20} color="#c00000"/>
            </div>

            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>

            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>
           </div>
          </li>
          
          <li>
           <div className="name">
            CRM - Oportunidades de Negócios, Funil de Vendas, etc.
           </div>

           <div className="plans">
            <div className="plan">
             <RxCrossCircled size={20} color="#c00000"/>
            </div>

            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>

            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>
           </div>
          </li>

          <li>
           <div className="name">
            Loja Online - Nativa do Sistema
           </div>

           <div className="plans">
            <div className="plan">
             <RxCrossCircled size={20} color="#c00000"/>
            </div>

            <div className="plan">
            <RxCrossCircled size={20} color="#c00000"/>
            </div>

            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>
           </div>
          </li>

          <li>
           <div className="name">
           Nota de Serviços
           </div>

           <div className="plans">
            <div className="plan">
             <RxCrossCircled size={20} color="#c00000"/>
            </div>

            <div className="plan">
            <RxCrossCircled size={20} color="#c00000"/>
            </div>

            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>
           </div>
          </li>

          <li>
           <div className="name">
            PDV Off-line
           </div>

           <div className="plans">
            <div className="plan">
             <RxCrossCircled size={20} color="#c00000"/>
            </div>

            <div className="plan">
            <RxCrossCircled size={20} color="#c00000"/>
            </div>

            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>
           </div>
          </li>

          <li>
           <div className="name">
            MOBI - Aplicativo Mobile
           </div>

           <div className="plans">
            <div className="plan">
             <RxCrossCircled size={20} color="#c00000"/>
            </div>

            <div className="plan">
            <RxCrossCircled size={20} color="#c00000"/>
            </div>

            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>
           </div>
          </li>

          <li>
           <div className="name">
            Aplicativo Foods - Mesa/Comanda
           </div>

           <div className="plans">
            <div className="plan">
             <RxCrossCircled size={20} color="#c00000"/>
            </div>

            <div className="plan">
            <RxCrossCircled size={20} color="#c00000"/>
            </div>

            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>
           </div>
          </li>

          <li>
           <div className="name">
            Cardápio Digital - 	Loja On-line
           </div>

           <div className="plans">
            <div className="plan">
             <RxCrossCircled size={20} color="#c00000"/>
            </div>

            <div className="plan">
            <RxCrossCircled size={20} color="#c00000"/>
            </div>

            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>
           </div>
          </li>

          <li>
           <div className="name">
            PDV Foods Off-line
           </div>

           <div className="plans">
            <div className="plan">
             <RxCrossCircled size={20} color="#c00000"/>
            </div>

            <div className="plan">
            <RxCrossCircled size={20} color="#c00000"/>
            </div>

            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>
           </div>
          </li>

          <li>
           <div className="name">
            Lojas Virtuais (1 Integração) 	
            <p>(R$ 49,90 por integração Adicionais)</p>
           </div>

           <div className="plans">
            <div className="plan">
             <RxCrossCircled size={20} color="#c00000"/>
            </div>

            <div className="plan">
            <RxCrossCircled size={20} color="#c00000"/>
            </div>

            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>
           </div>
          </li>

          <li>
           <div className="name">
           Relatórios Personalizados
           </div>

           <div className="plans">
            <div className="plan">
             <RxCrossCircled size={20} color="#c00000"/>
            </div>

            <div className="plan">
            <RxCrossCircled size={20} color="#c00000"/>
            </div>

            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>
           </div>
          </li>

          <li>
           <div className="name">
           Frota - Gestão da frota de veículos
           </div>

           <div className="plans">
            <div className="plan">
             <RxCrossCircled size={20} color="#c00000"/>
            </div>

            <div className="plan">
            <RxCrossCircled size={20} color="#c00000"/>
            </div>

            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>
           </div>
          </li>

          <li>
           <div className="name">
           SIGEP Web - Integração
           </div>

           <div className="plans">
            <div className="plan">
             <RxCrossCircled size={20} color="#c00000"/>
            </div>

            <div className="plan">
            <RxCrossCircled size={20} color="#c00000"/>
            </div>

            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>
           </div>
          </li>

          <li>
           <div className="name">
           PCP - Controle de Produção
           </div>

           <div className="plans">
            <div className="plan">
             <RxCrossCircled size={20} color="#c00000"/>
            </div>

            <div className="plan">
            <RxCrossCircled size={20} color="#c00000"/>
            </div>

            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>
           </div>
          </li>

          <li>
           <div className="name">
           Facilitador de SPED
           </div>

           <div className="plans">
            <div className="plan">
             <RxCrossCircled size={20} color="#c00000"/>
            </div>

            <div className="plan">
            <RxCrossCircled size={20} color="#c00000"/>
            </div>

            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>
           </div>
          </li>

          <li>
           <div className="name">
           Facilitador de SPED
           </div>

           <div className="plans">
            <div className="plan">
             <RxCrossCircled size={20} color="#c00000"/>
            </div>

            <div className="plan">
            <RxCrossCircled size={20} color="#c00000"/>
            </div>

            <div className="plan">
             <IoShieldCheckmarkOutline size={20} color="rgb(9, 194, 9)"/>
            </div>
           </div>
          </li>

          <footer>
            Essas são as funcionalidades do sistema mais completo do Brasil!
          </footer>
        </ul>
      </S.Plans>
      <Footer/>
     </S.Container>
    )
}