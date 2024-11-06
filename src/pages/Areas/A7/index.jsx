import * as S from "./style";
import React, { useRef, useEffect } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";

import { GoShieldCheck } from "react-icons/go";

import Back from "../assets/back1.svg";

import Image1 from "../assets/materias-de-construcao-gestao-completa.png";
import Image2 from "../assets/c.svg";
import Image3 from "../assets/c2.svg";
import Image4 from "../assets/c3.svg";
import Image5 from "../assets/li4.svg";

import Image6 from "../assets/gestao-de-estoque-construcao.svg";
import Image7 from "../assets/gestao-de-vendas-construcao.svg";
import Image8 from "../assets/gestao-financeira-sige-cloud.svg";
import Image9 from "../assets/gestao-fiscal-sige-cloud-servicos.svg";


export function A7(){
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
        Sistema de Gestão para Lojas de Materiais de Construção




        </h2>
          
        <ul>
<li>
   <GoShieldCheck/>Emissão de NFC-e ou CF-e SAT e NF-e;
</li>
<li>
  <GoShieldCheck/>Frente de Caixa e Gestão de pedidos;
</li>
<li>
  <GoShieldCheck/>Faturamento de vendas em lote.
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
         <strong>Gestão de estoque
</strong>
         <img src={Image2} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section1Ref)}>
            <p> Entrada de estoque

           


</p>
          </li>

          <li onClick={() => handleScrollToSection(section1Ref)}>
            <p>Relatórios para controle de estoque</p>
          </li>

          <li onClick={() => handleScrollToSection(section1Ref)}>
           
            <p>Impressão de etiquetas</p>
          </li>
         </ul>
        </div>

        <div className="box b2">
         <div className="left">
         <strong>Gestão de Vendas


</strong>
         <img src={Image3} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>PDV Frente de Caixa







</p>
          </li>

          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>Controle de Pedidos e Orçamentos</p>
          </li>

          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>BLUE Loja</p>
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
           
            <p>Faturamento parcial de pedidos






</p>
          </li>

          <li onClick={() => handleScrollToSection(section3Ref)}>
           
            <p>Gestão de vendedores e metas
            </p>
          </li>

          <li onClick={() => handleScrollToSection(section3Ref)}>
           
            <p>Cobrança de cliente inadimplente
            </p>
          </li>
         </ul>
        </div>

        <div className="box b4">
         <div className="left">
         <strong>Gestão Fiscal</strong>
         <img src={Image5} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section4Ref)}>
           
            <p>Emissão de NFC-e e CF-e SAT







            </p>
          </li>

          <li onClick={() => handleScrollToSection(section4Ref)}>
           
            <p>Faturamento em lote</p>
          </li>

          <li onClick={() => handleScrollToSection(section4Ref)}>
           
            <p>Facilitador de Sped Fiscal</p>
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
       <img src={Image6} alt="" className="especial"/>
       </div>

       <div className="right">
        <span>
        Gestão de estoque
        </span>

        <p>
        O BLUE ERP possui um moderno e completo módulo de gestão de estoque que lhe permite gerenciar todas as etapas desde a compra de mercadorias, a localização em diferentes depósitos, o giro de mercadorias em estoque e até entregas.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

      
      </S.Main3>

      <S.Main4 data-color={false}>
        <h2><strong>
        Para você não perder mais vendas </strong> por falta de mercadorias!

</h2>

        <div className="texts">
          <div className="text">
            <span>Entrada de estoque</span>
            <p>
            
            Pensando em facilitar o controle de estoque de compras feitas por sua empresa, o BLUE ERP possui a funcionalidade de realizar entradas de mercadorias no estoque de acordo com a importação da nota emitida pelo seu fornecedor, otimizando recursos para o crescimento do negócio.
            </p>
          </div>

          <div className="text">
            <span>  Relatórios para controle de estoque</span>
            <p>
          
            Acompanhe o saldo de estoque do seu negócio por meio de informações seguras! Disponibilizamos um poderoso relatório que descreve as movimentações de entrada e de saída dos produtos, garantindo dados reais para a sua tomada de decisão e o seu planejamento financeiro!
            </p>
          </div>

          <div className="text">
            <span> Impressão de etiquetas</span>
            <p>
           
            Para vender materiais de construção em larga escala é claro que você precisa de etiquetas. E nada melhor que ter a segurança de que você poderá imprimir quantas etiquetas desejar, com as proporções e informações necessárias. Tudo isso de modo automático, diretamente do seu Sistema ERP.
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
       Gestão de vendas
        </span>

        <p>

Com os recursos do módulo de vendas do BLUE ERP, você pode aumentar a visibilidade da sua loja de cosméticos e perfumaria, com um frente de caixa mais ágil na loja física. Ou garantindo o acesso dos clientes aos produtos que você comercializa, seja por loja virtual ou catálogo online, aplicando preços diferenciados e fazendo toda a gestão da sua equipe de vendedores.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
       <img src={Image7} alt="" />
       
       </div>

       <img src={Back} alt="" className="bottom"/>
      </S.Main3>

      <S.Main4 data-color={true}>
        <h2><strong>Gerencie seus pedidos </strong> de um jeito simples!

        </h2>

        <div className="texts">
          <div className="text">
            <span>           
            PDV Frente de Caixa</span>
            <p>
       



Para realizar vendas diretas para o consumidor final, você pode utilizar o PDV Frente de Caixa do BLUE ERP. Com ele, é possível importar orçamentos e vendas diretas com emissão de NFC-e ou CF-e SAT.
            </p>
          </div>

          <div className="text">
            <span> Controle de Pedidos e Orçamentos</span>
            <p>
           
            Crie orçamentos e envie por e-mail a seus clientes. Ao serem aprovados, os seus orçamentos se tornam pedidos, gerando lançamento financeiro e a baixa dos itens no estoque. Com o BLUE ERP, todas as engrenagens de cada setor da sua empresa alimentícia são interligadas e, assim, vender se torna muito mais simples.
            </p>
          </div>

          <div className="text">
            <span> Loja Virtual</span>
            <p>
           
Crie uma loja virtual no BLUE ERP personalizada para sua loja de materiais de construção! O seu cliente poderá acessar seu site e realizar o pedido diretamente por ele, dessa forma, é possível separar os itens que seu cliente comprou e encaminhar a ele. Além de tornar o processo de venda mais ágil, há o controle de estoque, financeiro e fiscal de forma prática!
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

        <p>
        Com o BLUE ERP você tem módulos para controlar seu fluxo de caixa, fazer projeções de receitas e despesas, centros de custos e planos de contas para organizar sua gestão financeira, garantindo que você invista o capital da sua empresa da melhor forma, reduzindo custos e otimizando recursos para o crescimento do negócio.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

      
      </S.Main3>

      <S.Main4 data-color={false}>
        <h2><strong>
Descomplique!</strong> Gerencie seu
financeiro de forma simples!
</h2>

        <div className="texts">
          <div className="text">
            <span>Faturamento parcial de pedidos</span>
            <p>
            
Falou em flexibilidade para a gestão financeira, falou BLUE ERP! Outro benefício do nosso módulo financeiro é que você pode faturar as vendas como desejar, inclusive, parcialmente. Você acessa o pedido, seleciona o valor pago e automaticamente o status já é atualizado no seu financeiro.
            </p>
          </div>

          <div className="text">
            <span> Gestão de vendedores e metas</span>
            <p>
           
            Gerencie a performance da sua equipe de vendedores, os lançamentos de vendas, os lançamentos de comissões, bem como o percentual de metas atingido. Você também pode controlar os dados a que seus vendedores terão acesso, através do controle de permissões de usuários ativos em seu sistema.
            </p>
          </div>

          <div className="text">
            <span>  Cobrança de cliente inadimplente</span>
            <p>
          
Conhecer bem o cliente e ter informações atualizadas sobre o seu comportamento de pagamento são medidas fundamentais para reduzir a inadimplência. Com o BLUE ERP, será possível gerenciar os clientes devedores e manter o contato com cada um deles diretamente por envio de e-mails automáticos!


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
       Gestão Fiscal
        </span>

        <p>



Com o módulo de Gestão Fiscal do BLUE ERP, a emissão de notas se tornou um processo simples e ágil, deixando você e sua equipe com tempo para prestar um bom atendimento e conquistar ainda mais clientes.
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
            <span>   Faturamento em lote</span>
            <p>
          
            Com essa ferramenta, em 3 passos simples você pode faturar diversos pedidos, emitir suas respectivas notas fiscais, gerar boletos e enviá-los por e-mail a seus clientes. Tudo isso, de uma só vez! Basta realizar a configuração dos dados no sistema BLUE ERP e esse processo facilitará os processos em sua empresa.
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