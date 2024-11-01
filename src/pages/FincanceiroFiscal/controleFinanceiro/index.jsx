import * as S from "./style";

import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";

import { IoShieldCheckmarkOutline,  IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdCloudOutline } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { RiWifiOffLine } from "react-icons/ri";

import Set from "../assets/bottom-set.svg";
import Image1 from "../assets/top-image-controle-financeiro.svg";
import Image2 from "../assets/contas-a-pagar-e-a-receber.svg";
import Image3 from "../assets/lancamentos-recorrentes.svg";
import Image4 from "../assets/relatorios-financeiros.svg";
import Image5 from "../assets/grupos-de-dre.svg";

export function ControleFinanceiro(){
    const navigate = useNavigate();

    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
    const section5Ref = useRef(null);

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

       <div className="Center">
       <div className="left">
        <h2>
         <strong> Controle Financeiro Avançado </strong>
         para Acompanhar o Fluxo de Caixa e Lucrar Mais!
        </h2>

        <p>
         Uma solução inteligente e eficiente que conecta todos os setores da sua empresa,
         garantindo que suas finanças estejam sempre organizadas – tudo isso por um preço acessível.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
        <img src={Image1} alt="Image" />
       </div>
       </div>

       <div className="Bottom">
        <div className="card" onClick={() => handleScrollToSection(section1Ref)}>
            <span>Contas a Pagar e a receber</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section2Ref)}>
            <span>Lançamentos Recorrentes</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section3Ref)}>
            <span>Relatórios Financeiros</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section4Ref)}>
            <span>Grupos de DRE</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section5Ref)}>
            <span>Financeiro Completo</span>
        </div>
       </div>
      </S.Main>

      <S.Ecossistem>
      <span>
       <strong>Integre todos os setores </strong> do  <br /> seu negócio com nossas ferramentas!
      </span>

      <strong className="hover">
        {'>> Conhecer Ecossistema <<'}
      </strong>
      </S.Ecossistem>

      <S.Main2 ref={section1Ref}>
       <div className="left">
        <img src={Image2} alt="" />
       </div>

       <div className="right">
        <span>
         Contas a Pagar e a Receber
        </span>

        <p>
         Precisa de um sistema para gerenciar suas contas a receber?
         Conheça a BLUE ERP! Nosso ERP Online é o parceiro ideal para o planejamento financeiro do seu negócio. Com ele,
         você controla, organiza e monitora suas receitas, reduzindo a inadimplência de forma prática e eficaz.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <img src={Set} alt="descer" className="bottom" onClick={()=> handleScrollToSection(section2Ref)}/>
      </S.Main2>

      <S.Main2 ref={section2Ref}>
       <div className="left">
        <span>
         Lançamentos Recorrentes
        </span>

        <p>
         Ter controle total dos lançamentos financeiros é fundamental.
         Imagine registrar pagamentos recorrentes – aqueles que acontecem mensalmente 
         – no momento da cobrança e nunca mais precisar se preocupar!
          <br /><br />
         Com a BLUE ERP, você conta com essa praticidade: feche suas vendas rapidamente,
         registrando cobranças com apenas alguns cliques.
         Além disso, com as informações cadastradas, 
         você pode gerar boletos de cobrança e enviá-los diretamente aos seus clientes.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
        <div className="especial">
          <img src={Image3} alt="" />
        </div>
       </div>

       <img src={Set} alt="descer" className="bottom" onClick={()=> handleScrollToSection(section3Ref)}/>
      </S.Main2>

      <S.Main2 ref={section3Ref}>
       <div className="left">
       <img src={Image4} alt="" />
       </div>

       <div className="right">
       
        <span>
         Relatórios Financeiros
        </span>

        <p>
        A BLUE ERP oferece uma série completa de relatórios, uma exclusividade do melhor sistema ERP Online do Brasil!
        <br /><br />
        Tenha acesso a relatórios financeiros, de vendas, CRM, PCP, compras, estoque, serviços, RH, contratos e fiscal. Facilite a administração e o crescimento da sua empresa com dados precisos e atualizados.
        E o melhor: você pode acessá-los a qualquer hora e em qualquer lugar.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <img src={Set} alt="descer" className="bottom" onClick={()=> handleScrollToSection(section4Ref)}/>
      </S.Main2>

      <S.Main2 ref={section4Ref}>
       <div className="left">
       <span>
         Grupos de DRE
        </span>

        <p>
        Com a BLUE ERP, você pode personalizar o DRE de acordo com as necessidades da sua empresa.
        Com base nos cadastros e nos lançamentos do fluxo de caixa, o sistema gera relatórios 
        comparativos para diferentes períodos, oferecendo uma visão detalhada.

         Esse módulo proporciona à sua equipe maior clareza sobre as áreas lucrativas e aquelas que precisam de atenção.
         Outra vantagem do DRE Gerencial é que, além de receitas e despesas, ele permite acompanhar custos operacionais, preços de produtos e serviços,
         impostos e outras despesas essenciais.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       
       </div>

       <div className="right">
       <img src={Image5} alt="" />
       </div>

      </S.Main2>

      <S.Main3 ref={section5Ref}>
        <span>Ferramentas desenvolvidas para <strong> organizar e descomplicar o seu dia a dia!</strong></span>

        <div className="cards">
         <div className="card">
          <span>Gestão de Custos</span>
          <p>
            
Precisa de um ERP que ofereça uma visão completa de suas despesas? Com a BLUE ERP, você organiza seus centros de custo e os integra diretamente ao setor financeiro, facilitando o controle dos gastos por setor de forma prática e eficiente.
          </p>
         </div>

         <div className="card">
          <span>Controle de Contas Bancárias</span>
          <p>

          Registre transferências, movimentações e administre suas contas bancárias de forma organizada e simples. Nosso sistema financeiro é constantemente atualizado, garantindo segurança, eficiência e mais rentabilidade para o seu negócio.
          </p>
         </div>

         <div className="card">
          <span>Conciliação Bancária (OFX)</span>
          <p>
A BLUE ERP oferece a importação de arquivos OFX para facilitar a conciliação bancária. Cada valor presente no arquivo pode ser registrado como um novo lançamento ou vinculado a um já existente, tanto para entradas quanto para saídas.
          </p>
         </div>

         <div className="card">
          <span>Fluxo de Caixa</span>
          <p>
          
          Monitorar receitas e despesas, analisar o fluxo diário, projetar investimentos e acessar relatórios detalhados de suas operações financeiras nunca foi tão fácil. Com a BLUE ERP, suas finanças ficam organizadas em um sistema que opera tanto online quanto offline, trazendo praticidade e controle.
          </p>
         </div>
        </div>
      </S.Main3>

      <Footer/>
     </S.Container>
    )
}