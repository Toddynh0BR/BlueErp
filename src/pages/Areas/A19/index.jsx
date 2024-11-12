import * as S from "./style";
import React, { useRef, useEffect } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";

import { GoShieldCheck } from "react-icons/go";

import Back from "../assets/back1.svg";

import Image1 from "../assets/sistema-para-hospital-sige-cloud.png";
import Image2 from "../assets/vendas-produtos-hospitalares.svg";
import Image3 from "../assets/a2.svg";
import Image4 from "../assets/v3.svg";
import Image5 from "../assets/v4.svg";

import Image6 from "../assets/vendas-produtos-hospitalares.svg";
import Image7 from "../assets/gestao-de-estoque-sige-cloud.svg";
import Image8 from "../assets/gestao-financeira-sige-cloud.svg";
import Image9 from "../assets/gestao-fiscal-sige-cloud-servicos.svg";


export function A19(){
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
        Mais eficiência para vender <br /> <strong> produtos de médicos e hospitalares </strong>  <br /> em loja física ou virtual!
        </h2>
          
        <ul>
<li>
   <GoShieldCheck/>PDV para vendas diretas e consignadas;
</li>
<li>
  <GoShieldCheck/>Catálogo de Produtos e Loja Virtual;
</li>
<li>
  <GoShieldCheck/>Faturamento de pedidos em lote.
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
         <strong>Gestão de vendas
</strong>
         <img src={Image2} alt="" className="especial"/>
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section1Ref)}>
            <p>PDV para vendas diretas e consignadas


</p>
          </li>

          <li onClick={() => handleScrollToSection(section1Ref)}>
            <p>Catálogo Virtual de Produtos</p>
          </li>

          <li onClick={() => handleScrollToSection(section1Ref)}>
           
            <p>Gestão de Pedidos e Orçamentos</p>
          </li>
         </ul>
        </div>

        <div className="box b2">
         <div className="left">
         <strong>Gestão de Estoque


</strong>
         <img src={Image3} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>Produtos controlados por número de série


</p>
          </li>

          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>Gestão de Múltiplos depósitos</p>
          </li>

          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>Sistema de Expedição</p>
          </li>
         </ul>
        </div>

        <div className="box b3">
         <div className="left">
         <strong>Gestão Financeira


</strong>
         <img src={Image4} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section3Ref)}>
           
            <p>Faturamento em Lote


</p>
          </li>

          <li onClick={() => handleScrollToSection(section3Ref)}>
           
            <p>Faturamento parcial de Pedidos
            </p>
          </li>

          <li onClick={() => handleScrollToSection(section3Ref)}>
           
            <p>
            Fluxo de Caixa profissional
            </p>
          </li>
         </ul>
        </div>

        <div className="box b4">
         <div className="left">
         <strong>Emissão de notas fiscais
         </strong>
         <img src={Image5} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section4Ref)}>
           
            <p>Emissão de NFCe


            </p>
          </li>

          <li onClick={() => handleScrollToSection(section4Ref)}>
           
            <p>Configurações de ICMS</p>
          </li>

          <li onClick={() => handleScrollToSection(section4Ref)}>
           
            <p>Facilitador do SPED</p>
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
        Quero vender mais

        </span>

        <h4>
        <strong> Módulo de vendas </strong>
         completo para você conquistar mais clientes!
        </h4>


        <p>
        Seja para realizar vendas diretas para o consumidor final ou até mesmo para quem trabalha com vendas em consignação para outras lojas, o PDV Frente de Caixa do Blue ERP oferece todas as funcionalidades necessárias. Com ele, é possível importar orçamentos, realizar saídas consignadas e, claro, realizar vendas diretas com emissão de NFC-e ou CF-e SAT.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

      
      </S.Main3>

      <S.Main4 data-color={false}>
        <h2>
        Soluções para comprar pelo melhor preço, <strong> vender mais e conquistar clientes!</strong>
</h2>

        <div className="texts">
          <div className="text">
            <span>Tabelas de Preços</span>
            <p>
            

Que tal aplicar tabelas de preços promocionais para mercadorias encalhadas no estoque? Com o Blue ERP, você pode ainda oferecer preços diferenciados para compras em grande volume ou para clientes fiéis, otimizando suas vendas e gerenciando o estoque de forma eficiente.


            </p>
          </div>

          <div className="text">
            <span>Módulo de CRM</span>
            <p>
            
            O Blue ERP possui um módulo completo de CRM, que permite cadastrar toda a sua carteira de clientes e analisar gráficos atualizados das vendas e negociações. Com essa ferramenta, é possível criar um funil de vendas, um pipeline de oportunidades, e projetar ações de marketing. O módulo é uma poderosa ferramenta de força de vendas, ajudando na prospecção de novos clientes e na gestão de leads.
            </p>
          </div>

          <div className="text">
            <span>  Catálogo Virtual</span>
            <p>
           
Ampliar as oportunidades de venda para sua marca de Produtos Médicos e Hospitalares ficou mais fácil com o Catálogo Virtual. Você pode criar um catálogo exclusivo, enviá-lo por e-mail para sua carteira de clientes e permitir que eles aprovem a compra diretamente no e-mail, integrando a aprovação diretamente ao seu sistema de pedidos.
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
       Quero gerenciar estoques
        </span>

        <h4>
        Recursos flexíveis de 

        <strong> armazenamento de mercadorias </strong>
        para quem tem uma ou várias lojas!
        </h4>


        <p>
        O Blue ERP possui um moderno e completo módulo de gestão de estoque, que permite gerenciar todas as etapas, desde a compra de mercadorias, a localização em diferentes depósitos, o giro de mercadorias em estoque, até as entregas. Com esse módulo, sua empresa pode otimizar o controle de estoque, garantir a precisão no inventário e melhorar a eficiência nas operações de distribuição, aumentando a agilidade e reduzindo custos.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
       <img src={Image7} alt="" />
       
       </div>

       <img src={Back} alt="" className="bottom"/>
      </S.Main3>

      <S.Main4 data-color={true}>
        <h2>Para você <strong> não perder mais vendas </strong> por falta de mercadorias!
        </h2>

        <div className="texts">
          <div className="text">
            <span>           
            Múltiplos Depósitos
            </span>
            <p>
            O sistema permite gerenciar diferentes locais de armazenamento de forma centralizada e sem a necessidade de licenças separadas para cada depósito ou filial. Isso facilita a organização e controle, tornando a operação mais eficiente e flexível.

            </p>
          </div>

          <div className="text">
            <span> Cadastro de Produtos Controlados por Número de Série</span>
            <p>
            O Blue ERP permite o registro de produtos simples e variáveis, incluindo itens controlados por número de série ou lote. Com isso, é possível gerenciar detalhadamente os produtos, atendendo a demandas específicas de controle e rastreabilidade.

            </p>
          </div>

          <div className="text">
            <span> Endereçamento de Estoque</span>
            <p>
            O sistema facilita a localização dos produtos no estoque, permitindo que você informe o local exato de armazenamento, como corredor ou prateleira. Isso agiliza a busca e localização dos itens, melhorando o atendimento ao cliente e a eficiência operacional.
            </p>
          </div>
        </div>

        <div className="texts">
          <div className="text">
            <span>           
            Gerar Ordem de Compras
            </span>
            <p>
           Com recursos automatizados, você pode criar ordens de compra a partir de pedidos realizados de maneira prática, garantindo o reabastecimento do estoque de forma eficiente e sem falhas.
            </p>
          </div>

          <div className="text">
            <span> Gestão de Produção (PCP)</span>
            <p>
            O Blue ERP oferece ferramentas para gerenciar todo o processo produtivo de fábricas, desde o cadastro de insumos até a criação de ordens de produção. O sistema permite controlar requisitos de qualidade, fazer simulações de produção e otimizar os processos de fabricação, ideal para indústrias de qualquer porte.
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
        Quero gerenciar meu financeiro
        </span>

        <h4>
        Funcionalidades para ter uma 
        <strong> gestão financeira eficiente!</strong>
        </h4>


        <p>
        Com o módulo de Gestão Fiscal do Blue ERP, a emissão de notas fiscais se torna um processo simples e ágil, permitindo que você e sua equipe tenham mais tempo para focar no atendimento ao cliente e impulsionar o crescimento do seu negócio. Esse sistema automatizado garante que todos os documentos fiscais sejam emitidos de forma eficiente e em conformidade com a legislação vigente, facilitando o seu dia a dia e aprimorando a experiência do cliente.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

      
      </S.Main3>

      <S.Main4 data-color={false}>
        <h2>       
        Funcionalidades para ter uma <strong> gestão financeira eficiente!</strong>
</h2>

        <div className="texts">
          <div className="text">
            <span>Gestão de Vendedores e Metas</span>
            <p>
            
            
            Com o Blue ERP, você tem o controle total sobre a performance da sua equipe comercial. Acompanhe as vendas realizadas, os lançamentos de comissões e o percentual de metas atingidas. Além disso, é possível definir o nível de acesso dos vendedores através do controle de permissões, garantindo que cada um tenha acesso apenas às informações necessárias.
            </p>
          </div>

          <div className="text">
            <span> Relatório de Lucratividade</span>
            <p>
           
            Obtenha dados precisos sobre a lucratividade do seu negócio. O Blue ERP oferece relatórios detalhados que consideram tanto os custos quanto o faturamento de cada venda. Isso garante que você tome decisões financeiras mais assertivas, com base em informações reais e atualizadas.
            </p>
          </div>

          <div className="text">
            <span> Faturamento em Lote</span>
            <p>
           
Com a ferramenta de faturamento em lote, você pode emitir notas fiscais, gerar boletos e enviá-los por e-mail aos seus clientes de forma automatizada, tudo em apenas 3 passos simples. Economize tempo e minimize erros com esse processo rápido e eficiente.
            </p>
          </div>
        </div>

        <div className="texts">
          <div className="text">
            <span> Faturamento Parcial de Pedidos</span>
            <p>
           
            No Blue ERP, você tem a flexibilidade de faturar pedidos parcialmente. O sistema permite que você selecione o valor pago, atualizando automaticamente o status do pedido no seu financeiro, o que facilita o controle das vendas e a gestão financeira da sua empresa.
            </p>
          </div>

          <div className="text">
            <span>Leilão de Fornecedores</span>
            <p>
            
            O Blue ERP permite que você crie cotações e envie para seus fornecedores por e-mail. Eles podem preencher os custos diretamente em um formulário online, e você escolhe a melhor oferta para a sua empresa. O melhor? A cotação selecionada pode ser convertida diretamente em uma ordem de compra, garantindo o melhor preço para suas mercadorias.
            </p>
          </div>

          <div className="text">
            <span>Carnês de Pagamento</span>
            <p>
            
Ofereça mais comodidade aos seus clientes com a opção de parcelamento. No Blue ERP, é possível gerar carnês de pagamento diretamente a partir de um pedido ou venda, com documentos impressos para cada parcela. Esse lançamento fica vinculado ao cadastro do cliente, facilitando o controle financeiro e a gestão de pagamentos.

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
       Quero gestão fiscal completa
        </span>

        <h4>
      
        <strong> Pare de perder vendas </strong>
         com o caixa trancado ou com a demora para emitir notas fiscais!
        </h4>


        <p>
       
Com o módulo de Gestão Fiscal do Blue ERP, a emissão de notas fiscais se torna um processo simples e ágil. Ao configurar os impostos necessários, você pode emitir NF-e, NFC-e, CF-e SAT e outros documentos fiscais de forma eficiente, garantindo que sua empresa esteja sempre em dia com a legislação. Dessa forma, você e sua equipe terão mais tempo para se concentrar no que realmente importa: oferecer um excelente atendimento e conquistar ainda mais clientes.
</p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
       <img src={Image9} alt="" />
       
       </div>

       <img src={Back} alt="" className="bottom"/>
      </S.Main3>

      <S.Main4 data-color={true}>
        <h2>
        <strong>Descomplique! </strong> Faça a gestão fiscal mais simples e organizada com BLUE ERP.</h2>

        <div className="texts">
          <div className="text">
            <span>Emissão de NFC-e e CF-e SAT</span>
            <p>
            
Com o Blue ERP, você conta com recursos completos para a emissão de NFC-e e CF-e SAT, facilitando a venda para o consumidor final. Através do PDV Frente de Caixa, moderno e fácil de usar, você pode emitir esses e outros documentos fiscais de maneira rápida e eficiente, sem complicação.
            </p>
          </div>

          <div className="text">
            <span>Configurações de ICMS</span>
            <p>
            A plataforma também oferece configurações avançadas de ICMS, permitindo que você ajuste valores de ICMS Efetivo, ICMS Desonerado e todas as informações de Substituição Tributária (ST), garantindo que sua empresa esteja sempre em conformidade com o Fisco.

</p>
          </div>

          <div className="text">
            <span>Facilitador de Sped Fiscal</span>
            <p>
            
            Além disso, o facilitador de SPED Fiscal elimina dores de cabeça ao gerar o arquivo para envio à contabilidade. Com essa funcionalidade, você gera os arquivos diretamente a partir dos XMLs de entradas de fornecedores e das saídas de produtos a partir das notas fiscais emitidas, incluindo as informações dos Bloco K e Bloco H para facilitar a entrega dos documentos fiscais.
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