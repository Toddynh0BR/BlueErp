import * as S from "./style";
import React, { useRef, useEffect } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";

import { GoShieldCheck } from "react-icons/go";

import Back from "../assets/back1.svg";

import Image1 from "../assets/sistema-para-loja-de-moveis-sige-cloud.png";
import Image2 from "../assets/fl.svg";
import Image3 from "../assets/c2.svg";
import Image4 from "../assets/v3.svg";
import Image5 from "../assets/v4.svg";

import Image6 from "../assets/fl.svg";
import Image7 from "../assets/gerenciar-vendas-sige-cloud-assistencia.svg";
import Image8 from "../assets/gestao-financeira-sige-cloud.svg";
import Image9 from "../assets/gestao-fiscal-sige-cloud-servicos.svg";


export function A17(){
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
        Sistema para Fábricas e Lojas de Móveis!




        </h2>
          
        <ul>
<li>
   <GoShieldCheck/>PDV para vendas diretas e consignadas;
</li>
<li>
  <GoShieldCheck/>Gestão de Produção PCP;
</li>
<li>
  <GoShieldCheck/>Catálogo de Produtos e Loja Virtual.
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
         <strong>Estoque e produção


</strong>
         <img src={Image3} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>Cadastro de produtos com variação


</p>
          </li>

          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>Gestão de Múltiplos depósitos</p>
          </li>

          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>Gestão de Produção (PCP)</p>
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
           
            <p>Lançamentos recorrentes
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
         <strong>Emissão de notas fiscais</strong>
         <img src={Image5} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section4Ref)}>
           
            <p>Nota de Entrada


            </p>
          </li>

          <li onClick={() => handleScrollToSection(section4Ref)}>
           
            <p>Emissão de NFC-e e CF-e SAT</p>
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

        <p>
       
Com os recursos do módulo de vendas do Blue ERP, você pode ampliar a visibilidade da sua fábrica e loja de móveis, proporcionando um atendimento no caixa mais ágil e facilitando o acesso dos clientes aos produtos que você oferece, seja por meio de uma loja virtual ou catálogo online. Além disso, é possível aplicar preços diferenciados e gerenciar toda a sua equipe de vendas de forma eficiente.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

      
      </S.Main3>

      <S.Main4 data-color={false}>
        <h2>
        <strong>Módulo de vendas </strong> completo para você conquistar mais clientes!

</h2>

        <div className="texts">
          <div className="text">
            <span> PDV para Vendas Diretas e Consignadas</span>
            <p>
           
            Seja para realizar vendas diretas para o consumidor final ou para quem trabalha com vendas em consignação para outras lojas, você pode utilizar o PDV Frente de Caixa do Blue ERP. Com ele, é possível importar orçamentos, realizar saídas consignadas e, claro, efetuar vendas diretas com emissão de NFC-e ou CF-e SAT.
            </p>
          </div>

          <div className="text">
            <span>Pedidos e Orçamentos</span>
            <p>
            
Crie orçamentos e envie-os por e-mail aos seus clientes. Quando aprovados, esses orçamentos se tornam pedidos, gerando lançamentos financeiros e a baixa dos itens no estoque. Com o Blue ERP, todos os processos da sua loja são interligados, tornando a venda muito mais simples.
            </p>
          </div>

          <div className="text">
            <span> Catálogo Virtual</span>
            <p>
           
            Aumente as oportunidades de venda da sua loja de móveis e acessórios criando um Catálogo Virtual exclusivo, que pode ser enviado por e-mail e impactar toda a sua carteira de clientes. Para facilitar, o cliente pode aprovar a compra diretamente pelo e-mail, confirmando o pedido automaticamente no seu sistema.
            </p>
          </div>
        </div>

        <div className="texts">
          <div className="text">
            <span>Módulo de CRM</span>
            <p>
            
            Além de cadastrar toda a sua base de clientes, o Blue ERP oferece um módulo completo de CRM. Com ele, você terá gráficos atualizados sobre vendas e negociações, podendo criar um funil de vendas e monitorar oportunidades. Esse módulo funciona como uma ferramenta de força de vendas, permitindo o planejamento de ações de marketing, criação de fluxos de prospecção de clientes e muito mais.
            </p>
          </div>

          <div className="text">
            <span>Taxa de Montagem</span>
            <p>
            
            Cobrar taxas de montagem à parte ou ter retrabalho ao registrar esses lançamentos no seu financeiro é coisa do passado. O Blue ERP oferece uma funcionalidade especial para o setor moveleiro, que permite cadastrar taxas de montagem por produto, registrando-as automaticamente no fluxo de caixa e facilitando o fechamento das vendas.
            </p>
          </div>

          <div className="text">
            <span> Tabelas de Preços</span>
            <p>
           
            Que tal aplicar tabelas de preços promocionais para mercadorias encalhadas no seu estoque? Você também pode oferecer preços diferenciados para compras em grande volume ou para clientes fiéis!
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
       
       
       Quero gerenciar a produção e estoque
        </span>

        <p>
        O Blue ERP conta com um moderno e completo módulo de gestão de estoque que permite gerenciar todas as etapas, desde a compra de mercadorias, a localização em diferentes depósitos, o giro de mercadorias no estoque e até as entregas.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
       <img src={Image7} alt="" />
       
       </div>

       <img src={Back} alt="" className="bottom"/>
      </S.Main3>

      <S.Main4 data-color={true}>
        <h2><strong>Para você não perder mais vendas </strong> por falta de mercadorias!
        </h2>

        <div className="texts">
          <div className="text">
            <span>           
            Cadastro de Produtos com Variação
            </span>
            <p>
            

Com o Blue ERP, você pode registrar tanto produtos simples quanto produtos com variação, como móveis que variam em tamanho, material e estampa. Cada produto é controlado com códigos específicos e suas variações são ajustadas para atender às necessidades do seu tipo de negócio.
            </p>
          </div>

          <div className="text">
            <span> Endereçamento de Estoque</span>
            <p>
           
Ao buscar um produto, o sistema já retorna a localização exata do item no estoque. Com isso, você pode informar o local específico de armazenamento de cada mercadoria, como corredor ou prateleira. Imagine a praticidade de uma vendedora localizar rapidamente uma peça de roupa no estoque após um pedido de cliente. Isso certamente garante a satisfação do cliente!
            </p>
          </div>

          <div className="text">
            <span>Múltiplos Depósitos</span>
            <p>
            
Com o Blue ERP, você pode gerenciar múltiplos depósitos de forma simples e eficiente, sem precisar contratar uma licença separada para cada loja ou para a fábrica e loja. O sistema permite o cadastro centralizado de mercadorias e o gerenciamento ágil e flexível de diferentes locais de armazenamento.
            </p>
          </div>
        </div>

        
        <div className="texts">
          <div className="text">
            <span>           
            Gerar Ordem de Compras
            </span>
            <p>
            
            De maneira prática e automatizada, o Blue ERP permite criar ordens de compra a partir dos pedidos realizados, facilitando o processo para fabricantes e lojas de móveis. Com apenas alguns cliques, você otimiza a gestão do seu estoque e a reposição de produtos.
            </p>
          </div>

          <div className="text">
            <span>Gestão de Produção (PCP)</span>
            <p>
            
            Com o Blue ERP, você pode cadastrar insumos, criar ordens de produção, estabelecer requisitos para o controle de qualidade, realizar simulações de produção e gerenciar todo o processo produtivo. Este módulo é ideal para indústrias de pequeno, médio ou grande porte, oferecendo recursos específicos para atender às demandas de sua produção.
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

        <p>
       
Com o Blue ERP, você conta com módulos completos para controlar o fluxo de caixa, realizar projeções de receitas e despesas, gerenciar centros de custos e estruturar planos de contas, facilitando a organização da sua gestão financeira. Isso contribui para a redução de custos e a otimização de recursos, impulsionando o crescimento do seu negócio.
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
            
            Com o Blue ERP, você pode gerenciar a performance da sua equipe comercial, controlando as vendas realizadas e o acesso aos dados pelos vendedores. Além disso, é possível acompanhar o lançamento de comissões e o percentual de metas atingidas, facilitando o controle e a motivação da sua equipe.
            </p>
          </div>

          <div className="text">
            <span>Relatório de Lucratividade</span>
            <p>
            
            Monitore a lucratividade do seu negócio com informações precisas e seguras! O Blue ERP oferece um poderoso relatório que considera os custos e o faturamento de cada venda, fornecendo dados reais para a tomada de decisões e o planejamento financeiro de sua empresa.
            </p>
          </div>

          <div className="text">
            <span>Leilão de Fornecedores</span>
            <p>
            
            Crie cotações e envie-as por e-mail para seus fornecedores, que podem preencher os custos solicitados através de um formulário online. Com isso, você pode escolher a melhor opção diretamente no Blue ERP e converter a cotação em uma ordem de compra, garantindo o melhor preço para suas mercadorias.
            </p>
          </div>
        </div>

        <div className="texts">
          <div className="text">
            <span>Faturamento em Lote</span>
            <p>
            
            
            Com esta ferramenta, você pode faturar vários pedidos de forma rápida e eficiente, emitindo notas fiscais, gerando boletos e enviando-os por e-mail para seus clientes em apenas três simples passos.
            </p>
          </div>

          <div className="text">
            <span> Faturamento Parcial de Pedidos</span>
            <p>
            
           
            O Blue ERP oferece flexibilidade para a gestão financeira ao permitir o faturamento parcial de pedidos. Você pode acessar o pedido, selecionar o valor pago e o status é automaticamente atualizado no seu financeiro, facilitando o controle de pagamentos parciais.
            </p>
          </div>

          <div className="text">
            <span> Carnês de Pagamento</span>
            <p>
           
Para oferecer ainda mais comodidade aos seus clientes, o Blue ERP permite gerar carnês de pagamento a partir de um pedido ou venda. Você pode imprimir documentos referentes a cada parcela da compra e vincular automaticamente esse lançamento ao cadastro do cliente, tornando o processo de pagamento mais simples e organizado.
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

        <p>
       
        Com o módulo de Gestão Fiscal do Blue ERP, a emissão de notas se torna um processo simples e ágil, permitindo que você e sua equipe tenham mais tempo para oferecer um excelente atendimento e conquistar novos clientes. Configure os impostos necessários e emita NF-e, NFC-e, CF-e SAT e outros documentos fiscais com a garantia de estar sempre em conformidade com a legislação vigente.  </p>

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
            
            
            Se você realiza vendas para o consumidor final, o Blue ERP oferece uma solução prática e eficiente para a emissão de NFC-e e CF-e SAT. Com um PDV Frente de Caixa moderno e fácil de usar, você pode emitir esses e outros documentos fiscais em questão de minutos, garantindo agilidade e conformidade em suas transações.</p>
          </div>

          <div className="text">
            <span>Emissão de NFS-e através de Contratos</span>
            <p>
            
            Para quem utiliza contratos em sua empresa, o Blue ERP permite a emissão de NFS-e diretamente pelo faturamento do contrato, garantindo agilidade e conformidade com a legislação fiscal.            </p>
          </div>

          <div className="text">
            <span>Emissão de NFS-e avulsa</span>
            <p>
            
            Caso precise de uma nota fiscal de serviço sem vínculos com ordens de serviço ou contratos, o Blue ERP permite emitir a NFS-e de forma avulsa, rápida e sem complicação.
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