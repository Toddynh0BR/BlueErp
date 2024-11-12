import * as S from "./style";
import React, { useRef, useEffect } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";

import { GoShieldCheck } from "react-icons/go";

import Back from "../assets/back1.svg";

import Image1 from "../assets/ferramentas-e-ferragens-gestao-completa.png";
import Image2 from "../assets/ff.svg";
import Image3 from "../assets/ff2.svg";
import Image4 from "../assets/ff3.svg";
import Image5 from "../assets/ff4.svg";

import Image6 from "../assets/gerenciar-vendas-sige-cloud-assistencia.svg";
import Image7 from "../assets/gestao-de-estoque-sige-cloud.svg";
import Image8 from "../assets/gestao-financeira-sige-cloud.svg";
import Image9 from "../assets/gestao-fiscal-sige-cloud-servicos.svg";


export function A1(){
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

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
        <strong>Frente de Caixa (PDV)</strong> <br /> com Cupom Fiscal Eletrônico
        </h2>
          
        <ul>
<li>
   <GoShieldCheck/> Frente de Caixa e Gestão de pedidos;
</li>
<li>
  <GoShieldCheck/>  Emissão de NFC-e ou CF-e SAT e NF-e;
</li>
<li>
  <GoShieldCheck/>  Gerenciamento de estoque.         
</li>        
        </ul>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
        <img src={Image1} alt="Image" />
       </div>
       </div>


      </S.Main>

      <S.Main2>
        <div className="box b1">
         <div className="left">
         <strong>Gestão de vendas</strong>
         <img src={Image2} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section1Ref)}>
            <p>PDV Frente de Caixa</p>
          </li>

          <li onClick={() => handleScrollToSection(section1Ref)}>
            <p>Controle de Pedidos e Orçamentos</p>
          </li>

          <li onClick={() => handleScrollToSection(section1Ref)}>
           
            <p>Controle por cashback</p>
          </li>
         </ul>
        </div>

        <div className="box b2">
         <div className="left">
         <strong>Gestão de estoque</strong>
         <img src={Image3} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>Entrada de estoque</p>
          </li>

          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>Código de barras</p>
          </li>

          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>Relatórios para controle de estoque</p>
          </li>
         </ul>
        </div>

        <div className="box b3">
         <div className="left">
         <strong>Gestão financeira</strong>
         <img src={Image4} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section3Ref)}>
           
            <p>Geração de boletos e de credenciadora</p>
          </li>

          <li onClick={() => handleScrollToSection(section3Ref)}>
           
            <p>Faturamento em lote</p>
          </li>

          <li onClick={() => handleScrollToSection(section3Ref)}>
           
            <p>Gestão de vendedores e metas</p>
          </li>
         </ul>
        </div>

        <div className="box b4">
         <div className="left">
         <strong>Gestão fiscal</strong>
         <img src={Image5} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section4Ref)}>
           
            <p>Emissão de NFC-e ou CF-e SAT</p>
          </li>

          <li onClick={() => handleScrollToSection(section4Ref)}>
           
            <p>Emissão de NF-e com envio automático por e-mail</p>
          </li>

          <li onClick={() => handleScrollToSection(section4Ref)}>
           
            <p>Emissão de MDF-e</p>
          </li>
         </ul>
        </div>
      </S.Main2>

      <S.Ecossistem>
      <span>
       <strong>Integre todos os setores </strong> do  <br /> seu negócio com nossas ferramentas!
      </span>

      <strong className="hover">
        {'>> Conhecer Ecossistema <<'}
      </strong>
      </S.Ecossistem>

      <S.Main3 ref={section1Ref}>
       <div className="left">
       <img src={Image6} alt="" />
       </div>

       <div className="right">
        <span>
        Gestão de vendas
        </span>

        <h4>
        Quero <strong> vender mais</strong>
        </h4>
        <p>
    Com as funcionalidades do módulo de vendas do Blue ERP, você pode melhorar a visibilidade da sua loja de ferramentas e ferragens, tornando o processo de checkout mais eficiente no ambiente físico. Além disso, garante que seus clientes tenham fácil acesso aos produtos que você oferece, aplicando preços especiais e gerenciando de forma eficiente sua equipe de vendedores.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

      
      </S.Main3>

      <S.Main4 data-color={false}>
        <h2><strong>Gerencie seus pedidos</strong> de um jeito simples!</h2>

        <div className="texts">
          <div className="text">
            <span>PDV Frente de Caixa</span>
            <p>
            Para realizar vendas diretas ao consumidor final, você pode utilizar o PDV Frente de Caixa do Blue ERP. Com essa ferramenta, é possível importar orçamentos e realizar vendas diretas com emissão de NFC-e ou CF-e SAT.
            </p>
          </div>

          <div className="text">
            <span>Controle de Pedidos e Orçamentos</span>
            <p>
            
            Elabore orçamentos e envie-os por e-mail aos seus clientes. Uma vez aprovados, esses orçamentos se transformam em pedidos, gerando lançamentos financeiros e atualizando o estoque. Com o Blue ERP, todas as áreas da sua empresa de ferramentas e ferragens estão interconectadas, tornando as vendas muito mais simples.
            </p>
          </div>

          <div className="text">
            <span>Controle por Cashback</span>
            <p>
           
            A prática de Cashback tem se tornado cada vez mais comum na venda de produtos em diversos setores. Ao adquirir um item na sua loja, o cliente paga o valor total e recebe um crédito para utilizar em compras futuras. Naturalmente, o Blue ERP oferece esse recurso para que você possa implementá-lo em sua loja de ferramentas e ferragens!
            </p>
          </div>
        </div>

        <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>
          Experimente
        </button>
      </S.Main4>

      <S.Main3 ref={section2Ref}>
       <div className="left">
       <span>
        Gestão de estoque
        </span>

        <h4>
          Quero  <strong> gerenciar estoque</strong>
        </h4>

        <p>
        O Blue ERP conta com um módulo de gestão de estoque moderno e abrangente, que permite gerenciar todas as etapas, desde a compra de mercadorias até a sua localização em diferentes depósitos. Além disso, possibilita o acompanhamento do giro de produtos em estoque e a organização das entregas.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
       <img src={Image7} alt="" />
       
       </div>

       <img src={Back} alt="" className="bottom"/>
      </S.Main3>

      <S.Main4 data-color={true}>
        <h2><strong>Para você não perder  mais vendas </strong> por falta de mercadorias!</h2>

        <div className="texts">
          <div className="text">
            <span>Entrada de Estoque</span>
            <p>
           

Para facilitar o controle de estoque das compras realizadas pela sua loja de ferramentas e ferragens, o Blue ERP oferece a funcionalidade de registrar entradas de mercadorias com base na importação da nota fiscal emitida pelo fornecedor, otimizando recursos para o crescimento do seu negócio.
            </p>
          </div>

          <div className="text">
            <span>Código de Barras</span>
            <p>
            
            
            Já pensou em como o controle de produtos por meio de códigos de barras pode simplificar a gestão de estoque em sua loja de ferramentas e ferragens? Com essa funcionalidade, você pode utilizar um leitor de código de barras para realizar movimentações internas de entrada e saída, tanto entre depósitos quanto nas vendas!
            </p>
          </div>

          <div className="text">
            <span>Relatórios para Controle de Estoque</span>
            <p>
            
            Monitore o saldo de estoque do seu negócio com informações seguras! Oferecemos um relatório robusto que detalha as movimentações de entrada e saída dos produtos, garantindo dados precisos para suas tomadas de decisão e planejamento financeiro!
            </p>
          </div>
        </div>

        <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>
          Experimente
        </button>
      </S.Main4>

      <S.Main3 ref={section3Ref}>
       <div className="left">
       <img src={Image8} alt="" />
       </div>

       <div className="right">
        <span>
        Gestão financeira
        </span>

        <h4>
          Quero 
        <strong> gerenciar o financeiro</strong>
        </h4>

        <p>
        Com o Blue ERP, você conta com módulos que permitem controlar seu fluxo de caixa, realizar projeções de receitas e despesas, além de gerenciar centros de custos e planos de contas para organizar sua gestão financeira. Isso garante que você invista o capital da sua empresa de maneira eficiente, reduzindo custos e otimizando recursos para o crescimento do seu negócio.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

      
      </S.Main3>

      <S.Main4 data-color={false}>
        <h2><strong>
Descomplique! </strong>  Gerencie seu <br />
financeiro de forma simples!</h2>

        <div className="texts">
          <div className="text">
            <span>Geração de Boletos e Credenciadora</span>
            <p>
            
            Além de permitir a emissão de boletos pela sua conta bancária, o Blue ERP oferece o recurso Blue Bank, que automatiza processos como a geração de boletos e recebimentos via cartão de crédito, além de facilitar o envio de links de pagamento.
            </p>
          </div>

          <div className="text">
            <span>Faturamento em Lote</span>
            <p>
            
            
Com essa funcionalidade, você pode faturar várias ordens de serviços em apenas três passos simples. É possível emitir as respectivas notas fiscais de serviços, gerar boletos e enviá-los por e-mail a seus clientes tudo de uma só vez! Basta configurar os dados no sistema Blue ERP e esse processo tornará suas operações muito mais eficientes.


            </p>
          </div>

          <div className="text">
            <span>Gestão de Vendedores e Metas</span>
            <p>
            
            Gerencie o desempenho da sua equipe de vendas, os lançamentos de vendas, as comissões e o percentual de metas alcançadas. Além disso, você pode controlar os dados que seus vendedores terão acesso por meio da gestão de permissões de usuários ativos no seu sistema.
            </p>
          </div>
        </div>

        <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>
          Experimente
        </button>
      </S.Main4>

      <S.Main3 ref={section4Ref}>
       <div className="left">
       <span>
        Gestão fiscal
        </span>

        <h4>
        Quero uma 
        <strong> gestão fiscal completa</strong>
        </h4>


        <p>
        Com o módulo de Gestão Fiscal do Blue ERP, a emissão de notas fiscais se tornou um processo simples e eficiente, permitindo que você e sua equipe tenham mais tempo para oferecer um excelente atendimento e conquistar ainda mais clientes.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
       <img src={Image9} alt="" />
       
       </div>

       <img src={Back} alt="" className="bottom"/>
      </S.Main3>

      <S.Main4 data-color={true}>
        <h2><strong>Descomplique! </strong> Faça a gestão fiscal mais simples e organizada com BLUE ERP</h2>

        <div className="texts">
          <div className="text">
            <span>Emissão de NFC-e ou CF-e SAT</span>
            <p>
            
            Para quem vende equipamentos e outros produtos, como muitas lojas de ferramentas e ferragens, a emissão de NFC-e ou CF-e SAT é um requisito essencial. Com o PDV e o módulo fiscal do Blue ERP, você pode emitir esses e outros documentos fiscais em instantes, facilitando suas operações desde o início!
            </p>
          </div>

          <div className="text">
            <span>Emissão de NF-e com Envio Automático por E-mail</span>
            <p>
            
            
            O emissor de NF-e é uma ferramenta fundamental para qualquer empresa. Além de possibilitar a emissão de NF-e, o Blue ERP também a envia automaticamente por e-mail ao destinatário! Basta configurar os impostos necessários e emitir seus documentos fiscais, garantindo que você esteja sempre em conformidade com a legislação.
            </p>
          </div>

          <div className="text">
            <span> Emissão de MDF-e</span>
            <p>
           
Se você realiza o transporte de produtos para outras cidades ou estados, saiba que com o Blue ERP é possível emitir o Manifesto de Documentos Fiscais Eletrônicos (MDF-e) a partir da NF-e. Assim, você pode entregar suas mercadorias com a tranquilidade de não enfrentar problemas por transportar produtos sem a documentação adequada!
            </p>
          </div>
        </div>

        <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>
          Experimente
        </button>
      </S.Main4>

      <Footer/>
     </S.Container>
    )
}