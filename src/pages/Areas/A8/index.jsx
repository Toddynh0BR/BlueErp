import * as S from "./style";
import React, { useRef, useEffect } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";

import { GoShieldCheck } from "react-icons/go";

import Back from "../assets/back1.svg";

import Image1 from "../assets/sistema-para-vestuario-sige-cloud.png";
import Image2 from "../assets/v.svg";
import Image3 from "../assets/v2.svg";
import Image4 from "../assets/v3.svg";
import Image5 from "../assets/v4.svg";

import Image6 from "../assets/gerenciar-vendas-sige-cloud-vestuario.svg";
import Image7 from "../assets/gerenciar-vendas-sige-cloud-assistencia.svg";
import Image8 from "../assets/gestao-financeira-sige-cloud.svg";
import Image9 from "../assets/gestao-fiscal-sige-cloud-servicos.svg";


export function A8(){
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
        Sistema de Gestão para <strong> Loja de Roupas e Acessórios! </strong>




        </h2>
          
        <ul>
<li>
   <GoShieldCheck/>Loja Online própria;
</li>
<li>
  <GoShieldCheck/>PDV para vendas diretas e consignadas;
</li>
<li>
  <GoShieldCheck/>Emissão de NF-e e NFC-e.
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
         <strong>Gestão de Vendas
</strong>
         <img src={Image2} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section1Ref)}>
            <p> PDV


</p>
          </li>

          <li onClick={() => handleScrollToSection(section1Ref)}>
            <p>Gestão de Pedidos e Orçamentos</p>
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
           
            <p>Cadastro de produtos com variação









</p>
          </li>

          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>Endereçamento de Estoque</p>
          </li>

          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>Gestão de Múltiplos depósitos</p>
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
           
            <p>Gestão de vendedores e metas
            </p>
          </li>

          <li onClick={() => handleScrollToSection(section3Ref)}>
           
            <p>Carnês de pagamento
            </p>
          </li>
         </ul>
        </div>

        <div className="box b4">
         <div className="left">
         <strong>Emissão de Notas Fiscais</strong>
         <img src={Image5} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section4Ref)}>
           
            <p>Nota de Entrada


            </p>
          </li>

          <li onClick={() => handleScrollToSection(section4Ref)}>
           
            <p>Emissão de NFCe</p>
          </li>

          <li onClick={() => handleScrollToSection(section4Ref)}>
           
            <p>Facilitador do SPED Fiscal</p>
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
        Para isso, nada melhor que contar com 

        <strong> ferramentas que impulsionam a sua loja de roupas!</strong>
        </h4>

        <p>
        Com os recursos do módulo de vendas do BLUE ERP, você pode aumentar a visibilidade da sua loja de artigos de vestuário, com um frente de caixa mais ágil, facilitando o acesso dos clientes aos produtos que você comercializa, seja por loja virtual ou catálogo online. Além disso, você pode aplicar preços diferenciados e gerenciar toda a sua equipe de vendas.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

      
      </S.Main3>

      <S.Main4 data-color={false}>
        <h2><strong>
        Gerenciamento centralizado </strong> e as mercadorias no lugar certo!
</h2>

        <div className="texts">
          <div className="text">
            <span>  PDV para vendas diretas e consignadas</span>
            <p>
          
Seja para realizar vendas diretas para o consumidor final ou para quem trabalha com vendas em consignação para outras lojas, você pode utilizar o PDV Frente de Caixa do BLUE ERP. Com ele, é possível importar orçamentos, realizar saídas consignadas e, claro, fazer vendas diretas com emissão de NFC-e ou CF-e SAT.
            </p>
          </div>

          <div className="text">
            <span> Pedidos e Orçamentos</span>
            <p>
           
            Crie orçamentos e envie por e-mail a seus clientes. Ao serem aprovados, seus orçamentos se tornam pedidos, gerando lançamento financeiro e a baixa dos itens no estoque. Com o BLUE ERP, todas as engrenagens de cada setor da sua loja de roupas são interligadas, tornando o processo de venda muito mais simples.
            </p>
          </div>

          <div className="text">
            <span>Catálogo Virtual</span>
            <p>
            
Amplie as oportunidades de venda da sua loja de roupas e acessórios, criando um exclusivo Catálogo Virtual que pode ser enviado por e-mail para impactar toda a sua carteira de clientes. O cliente pode aprovar a compra com um botão dentro do e-mail, já confirmando o pedido no seu sistema.


            </p>
          </div>
        </div>

        <div className="texts">
          <div className="text">
            <span> Módulo de CRM</span>
            <p>
            
            Além de cadastrar toda a sua carteira de clientes, o BLUE ERP possui um módulo completo de CRM, com gráficos sempre atualizados das vendas e negociações. Você pode criar um funil de vendas e um pipeline de oportunidades, projetar ações de marketing, criar fluxos de prospecção de clientes e muito mais.
            </p>
          </div>

          <div className="text">
            <span>  Central de Integrações</span>
            <p>
          
            Integre a sua loja de roupas com diversos marketplaces e lojas virtuais, plataformas de pagamento e de entrega, através da mais completa central de integrações que só o BLUE ERP oferece. Conquiste visibilidade para seus produtos, controle para vender mais e a tranquilidade de ter todas as informações de que precisar a alguns cliques de distância.
            </p>
          </div>

          <div className="text">
            <span>Tabelas de Preços</span>
            <p>
            
Que tal aplicar tabelas de preços promocionais para mercadorias que estão encalhadas no seu estoque? Você pode também definir preços diferenciados para compras em grande volume ou para clientes fiéis!
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
        Recursos flexíveis de armazenamento de mercadorias 
        <strong> para quem tem uma ou várias lojas!</strong>
        </h4>

        <p>
        O BLUE ERP possui um moderno e completo módulo de gestão de estoque que lhe permite gerenciar todas as etapas, desde a compra de mercadorias, a localização em diferentes depósitos, o giro de mercadorias em estoque e até as entregas.


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
            Cadastro de produtos com variação</span>
            <p>
           
            Você poderá registrar produtos simples e variáveis, como peças de roupa que variam em tamanho, material e estampa. Tudo isso controlado com códigos específicos e variações que atendem às demandas do seu tipo de negócio.
            </p>
          </div>

          <div className="text">
            <span>Endereçamento de estoque</span>
            <p>
Nada melhor do que, ao buscar um produto, o sistema já lhe retornar a localização exata do item. No BLUE ERP, você informa o local exato de armazenamento de cada mercadoria, como corredor ou prateleira. Imagine a praticidade de um cliente pedir uma peça de roupa a uma de suas vendedoras e, em instantes, ela já localizar a mercadoria no estoque. É garantia de cliente satisfeito!


            </p>
          </div>

          <div className="text">
            <span>  Impressão de Etiquetas personalizadas</span>
            <p>
          
            Para vender artigos de vestuário, você precisa de etiquetas. E nada melhor do que ter a segurança de poder imprimir quantas etiquetas desejar, com as proporções e informações necessárias. Tudo isso de modo automático, diretamente do seu Sistema ERP.
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
        Saiba como os recursos financeiros da BLUE ERP podem  
        <strong> potencializar sua lucratividade </strong>
        e ajudar sua empresa a crescer!
        </h4>

        <p>
        Com o BLUE ERP, você tem módulos para controlar seu fluxo de caixa, fazer projeções de receitas e despesas, gerenciar centros de custos e planos de contas, organizando sua gestão financeira, reduzindo custos e otimizando recursos para o crescimento do negócio.
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
            <span> Relatório de Lucratividade</span>
            <p>
           
            Acompanhe a lucratividade do seu negócio por meio de informações seguras! Disponibilizamos um poderoso relatório que considera custos e faturamento de cada venda, garantindo dados reais para a sua tomada de decisão e o seu planejamento financeiro!
            </p>
          </div>

          <div className="text">
            <span> Gestão de vendedores e metas</span>
            <p>
           
            Gerencie a performance da sua equipe comercial, as vendas realizadas, os lançamentos de comissões, bem como o percentual de meta atingido. Você também pode controlar os dados a que seus vendedores terão acesso, através do controle de permissões.
            </p>
          </div>

          <div className="text">
            <span>  Leilão de Fornecedores</span>
            <p>
          
Crie cotações e envie por e-mail a seus fornecedores, que podem preencher os custos da sua solicitação através de um formulário online. Com isso, é só escolher a melhor opção dentro do próprio BLUE ERP e converter essa cotação em uma ordem de compra. Assim, você compra mercadorias sempre pelo melhor preço!


            </p>
          </div>
        </div>

        <div className="texts">
          <div className="text">
            <span> Faturamento em Lote</span>
            <p>
           
            Com essa ferramenta, em 3 passos simples você pode faturar diversos pedidos, emitir suas respectivas notas fiscais, gerar boletos e enviá-los por e-mail a seus clientes. Tudo isso, de uma só vez!
            </p>
          </div>

          <div className="text">
            <span>  Carnês de pagamento</span>
            <p>
           
Se na sua loja você quer oferecer ainda mais comodidade para sua clientela, que tal trabalhar com carnês de pagamento? No BLUE ERP você pode gerar carnês a partir de um pedido/venda, imprimindo documentos referentes a cada uma das parcelas dessa compra. E claro, esse lançamento já fica vinculado ao cadastro do seu cliente.


            </p>
          </div>

          <div className="text">
            <span>Faturamento parcial de pedidos</span>
            <p>
            
            Falou em flexibilidade para a gestão financeira, falou BLUE ERP! Outro benefício do nosso módulo financeiro é que você pode faturar os pedidos como desejar, inclusive, parcialmente. Você acessa o pedido, seleciona o valor pago e automaticamente o status já é atualizado no seu financeiro.
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
        <strong>Pare de perder vendas </strong>
         com o caixa trancado ou com a demora para emitir notas fiscais!

        </h4>


        <p>
        Com o módulo de Gestão Fiscal do BLUE ERP, a emissão de notas se tornou um processo simples e ágil, deixando você e sua equipe com tempo para prestar um bom atendimento e conquistar ainda mais clientes. Configure os impostos necessários e emita NF-e, NFC-e, CF-e SAT e outros documentos fiscais com a certeza de estar sempre em dia com a legislação.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
       <img src={Image9} alt="" />
       
       </div>

       <img src={Back} alt="" className="bottom"/>
      </S.Main3>

      <S.Main4 data-color={true}>
        <h2><strong>Descomplique! </strong> Faça a gestão fiscal mais simples e organizada com a BLUE ERP.</h2>

        <div className="texts">
          <div className="text">
            <span>  Emissão de NFC-e e CF-e SAT</span>
            <p>
           
          
            Para você que realiza vendas para consumidor final, além de todos os recursos financeiros, conte com a emissão de NFC-e ou CF-e SAT. Com o PDV Frente de Caixa moderno e fácil de usar, você pode emitir esses e outros documentos fiscais em instantes, é só começar!
            </p>
          </div>

          <div className="text">
            <span>  Configurações de ICMS</span>
            <p>
           
            No BLUE ERP, damos uma mãozinha para manter sua empresa sempre em dia com o Fisco. Entre as nossas funcionalidades, você conta com campos que permitem configurar valores complexos de ICMS Efetivo, ICMS Desonerado e todas as informações de Substituição Tributária (ST).
            </p>
          </div>

          <div className="text">
            <span> Facilitador de Sped Fiscal</span>
            <p>
           
            Com o recurso de SPED Fiscal do BLUE ERP, você gera o arquivo através das entradas de XML dos fornecedores e saídas de produtos a partir das notas fiscais emitidas, podendo contar com as informações do Bloco K e do Bloco H, para facilitar o departamento fiscal da sua empresa de materiais de construção.
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