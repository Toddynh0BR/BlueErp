import * as S from "./style";
import React, { useRef, useEffect } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";

import { GoShieldCheck } from "react-icons/go";

import Back from "../assets/back1.svg";

import Image1 from "../assets/sistema-para-confeccoes-sige-cloud.png";
import Image2 from "../assets/v.svg";
import Image3 from "../assets/a.svg";
import Image4 from "../assets/v3.svg";
import Image5 from "../assets/v4.svg";

import Image6 from "../assets/gerenciar-vendas-sige-cloud-vestuario.svg";
import Image7 from "../assets/gestao-de-producao-sige-cloud-confeccoes.svg";
import Image8 from "../assets/gestao-financeira-sige-cloud.svg";
import Image9 from "../assets/gestao-fiscal-sige-cloud-servicos.svg";


export function A15(){
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
        Sistema de Gestão para <strong> Confecção de Roupas ou artigos de Vestuário!</strong>


        </h2>
          
        <ul>
<li>
   <GoShieldCheck/>Controle de insumos para confecção;
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
         <strong>Produção e estoque


</strong>
         <img src={Image3} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>Controle de Ordens de Produção


</p>
          </li>

          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>Cadastro de composição de produtos</p>
          </li>

          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>Gestão de Estoque</p>
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
           
            <p>Emissão de NFCe


            </p>
          </li>

          <li onClick={() => handleScrollToSection(section4Ref)}>
           
            <p>Notas de Entrada</p>
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
    <span>Quero vender mais</span>

    <h4>
      Para isso, nada melhor que contar com 
      <strong> ferramentas que alavancam as suas vendas!</strong>
    </h4>

    <p>
      Com os recursos do módulo de vendas do BLUE ERP você pode aumentar a visibilidade da sua confecção, <strong>automatizando processos</strong>, facilitando o acesso dos clientes aos produtos que você comercializa, aplicando <strong>preços diferenciados</strong> e fazendo toda a gestão da sua equipe comercial.
    </p>

    <button onClick={() => abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
  </div>
</S.Main3>

<S.Main4 data-color={false}>
  <h2>
    <strong>Gerenciamento centralizado</strong> e as mercadorias no lugar certo!
  </h2>

  <div className="texts">
    <div className="text">
      <span>  Tabelas de Preços</span>
      <p>
        Aproveite a possibilidade de criar <strong>tabelas de preços promocionais</strong> para produtos com baixa saída no estoque. Você também pode definir <strong>preços diferenciados</strong> para compras em grandes quantidades ou para clientes fiéis, garantindo mais flexibilidade nas suas vendas.
      </p>
    </div>

    <div className="text">
      <span> Catálogo Virtual</span>
      <p>
        Expanda as oportunidades de vendas da sua confecção ao criar um <strong>Catálogo Virtual</strong> exclusivo, que pode ser enviado por e-mail para sua base de clientes. O melhor de tudo é que o cliente pode <strong>aprovar o pedido diretamente no e-mail</strong>, agilizando o processo de compra e integrando tudo ao seu sistema.
      </p>
    </div>

    <div className="text">
      <span> Módulo de CRM</span>
      <p>
        Além de cadastrar toda a sua carteira de clientes, o Blue ERP oferece um módulo de <strong>CRM completo</strong>, com gráficos atualizados sobre vendas e negociações. Você pode criar <strong>funis de vendas</strong> e acompanhar as oportunidades, obtendo uma visão estratégica do relacionamento com seus clientes e das suas ações de marketing.
      </p>
    </div>
  </div>

  <div className="texts">
    <div className="text">
      <span> Central de Integrações</span>
      <p>
        Conecte seu sistema de gestão aos principais <strong>marketplaces</strong>, plataformas de pagamento e de entrega, utilizando a robusta central de integrações. Assim, você ganha visibilidade para seus produtos, maior controle nas vendas e a tranquilidade de acessar as informações de forma rápida e eficiente.
      </p>
    </div>

    <div className="text">
      <span> Pedidos e Orçamentos</span>
      <p>
        Crie <strong>orçamentos</strong> e envie para seus clientes por e-mail. Quando aprovados, os orçamentos se transformam em pedidos, permitindo que você inicie a produção das peças, com <strong>lançamento financeiro</strong> e atualização do estoque. O Blue ERP interliga todos os processos da sua empresa de maneira eficiente.
      </p>
    </div>

    <div className="text">
      <span> PDV para Vendas Diretas e Consignadas</span>
      <p>
        O Blue ERP oferece uma solução de <strong>PDV Frente de Caixa</strong> para realizar vendas diretas para o consumidor final ou vendas em consignação para outras empresas. Com ele, você pode importar orçamentos, gerenciar saídas consignadas e realizar vendas diretas, emitindo NFC-e ou CF-e SAT de forma prática e rápida.
      </p>
    </div>
  </div>

  <button onClick={() => abrirNovaAba('https://blueinnovation.com.br/account/')}>
    Experimente
  </button>
</S.Main4>

<S.Main3 ref={section2Ref}>
  <div className="left">
    <span>
      Quero gerir Produção e Estoque
    </span>

    <h4>
      Tenha  
      <strong> os recursos certos </strong>
      para a sua confecção de roupas decolar!
    </h4>

    <p>
      Independente do porte da sua empresa de confecção, o Blue ERP oferece módulos completos que possibilitam <strong>gerenciar todas as etapas</strong> do processo, desde a compra de insumos, passando pela produção das peças, até a venda e entrega das roupas finalizadas.
    </p>

    <button onClick={() => abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
  </div>

  <div className="right">
    <img src={Image7} alt="" />
  </div>

  <img src={Back} alt="" className="bottom"/>
</S.Main3>

<S.Main4 data-color={true}>
  <h2><strong>Para você não perder mais vendas</strong> por falta de mercadorias!</h2>

  <div className="texts">
    <div className="text">
      <span> Cadastro de Produtos com Variação</span>
      <p>
        Com o cadastro de produtos do Blue ERP, você pode registrar tanto produtos simples quanto variáveis, como peças de roupa que apresentam diferentes <strong>tamanhos, materiais e estampas</strong>. Cada variação é controlada por códigos específicos, atendendo às necessidades do seu negócio de forma prática e eficiente.
      </p>
    </div>

    <div className="text">
      <span>Controle de Ordens de Produção</span>
      <p>
        Quem trabalha com facções ou pequenas fábricas de confecção de roupas sabe da importância de um bom controle de <strong>PCP</strong> para otimizar a produção, reduzir custos e evitar retrabalho. No Blue ERP, você pode criar Ordens de Produção, realizar simulações e acompanhar todas as etapas do processo produtivo, garantindo maior organização e eficiência.
      </p>
    </div>

    <div className="text">
      <span> Cadastro de Composição de Produtos</span>
      <p>
        Uma das vantagens de contar com um Sistema ERP focado no seu segmento é a possibilidade de cadastrar todos os insumos utilizados na confecção das roupas, como a quantidade de <strong>tecido, zíperes, botões, velcro</strong> e outros materiais. O Blue ERP facilita esse controle, ajudando você a gerenciar as matérias-primas de maneira eficaz.
      </p>
    </div>
  </div>

  <div className="texts">
    <div className="text">
      <span> Gestão de Estoque</span>
      <p>
        Com o módulo de controle de estoque do Blue ERP, você pode gerenciar múltiplos <strong>depósitos, controlar a compra de insumos</strong>, cadastrar produtos automaticamente através do XML das notas de entrada, registrar fornecedores e acompanhar todo o processo de expedição e logística, garantindo maior organização e agilidade nas operações.
      </p>
    </div>

    <div className="text">
      <span> Impressão de Etiquetas Personalizadas</span>
      <p>
        Ao vender artigos de vestuário, é essencial contar com <strong>etiquetas personalizadas</strong>. O Blue ERP permite a impressão ilimitada de etiquetas, com as proporções e informações necessárias, de forma automatizada diretamente no seu sistema, oferecendo praticidade e controle total.
      </p>
    </div>
  </div>

  <button onClick={() => abrirNovaAba('https://blueinnovation.com.br/account/')}>
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
      <strong>potencializar sua lucratividade</strong>
      e ajudar sua empresa a crescer!
    </h4>

    <p>
      Com o Blue ERP, você conta com módulos para gerenciar o fluxo de caixa, realizar projeções de receitas e despesas, controlar centros de custos e organizar planos de contas. Isso permite uma <strong>gestão financeira eficiente</strong>, garantindo que você invista o capital da sua empresa de maneira estratégica, <strong>reduzindo custos</strong> e otimizando recursos para impulsionar o crescimento do negócio.
    </p>

    <button onClick={() => abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
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
            
            Gerencie o desempenho da sua equipe comercial, controlando as vendas realizadas, comissões lançadas e o percentual de metas atingidas. O Blue ERP também permite que você defina permissões específicas para controlar o acesso a dados, garantindo que cada vendedor tenha acesso apenas às informações necessárias.
            </p>
          </div>

          <div className="text">
            <span> Relatório de Lucratividade</span>
            <p>
           
            Acompanhe a lucratividade do seu negócio de maneira precisa com um relatório robusto que considera os custos e o faturamento de cada venda. Com dados reais e confiáveis, você toma decisões mais informadas e pode planejar suas finanças de forma estratégica.
            </p>
          </div>

          <div className="text">
            <span> Lançamentos Recorrentes</span>
            <p>
           
Registre pagamentos recorrentes no momento da cobrança e automatize todo o processo! Com os dados cadastrados, o Blue ERP gera boletos automaticamente e os envia aos seus clientes. Além disso, o calendário financeiro do sistema avisa quando a data de vencimento se aproxima.
            </p>
          </div>
        </div>

        <div className="texts">
          <div className="text">
            <span>Faturamento em Lote</span>
            <p>
            
Com a funcionalidade de faturamento em lote, você pode faturar diversos pedidos em apenas três etapas simples: emitir notas fiscais, gerar boletos e enviá-los por e-mail para seus clientes, tudo de forma rápida e eficiente.
            </p>
          </div>

          <div className="text">
            <span>Faturamento Parcial de Pedidos</span>
            <p>
            
            O Blue ERP oferece flexibilidade total na gestão financeira, permitindo que você fature pedidos de forma parcial, conforme necessário. Ao selecionar o valor pago, o status do pedido é automaticamente atualizado no seu financeiro, facilitando o acompanhamento de pagamentos e a gestão de recebíveis.
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
       
Com o módulo de Gestão Fiscal do Blue ERP, a emissão de notas fiscais se tornou um processo rápido e eficiente, permitindo que você e sua equipe dediquem mais tempo ao atendimento de qualidade e à conquista de novos clientes. Configure os impostos exigidos e emita NF-e, NFC-e, CF-e SAT e outros documentos fiscais com a certeza de estar sempre em conformidade com a legislação vigente.
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
            <span> MDF-e e CT-e</span>
            <p>
            
           
            Se você precisa transportar os produtos da sua confecção para outras cidades ou estados, o Blue ERP facilita a emissão do Manifesto de Carga (MDF-e) ou do Conhecimento de Transporte (CT-e) diretamente a partir da NF-e. Isso garante que suas mercadorias estejam sempre acompanhadas da documentação necessária, evitando problemas legais ao trafegar pelo Brasil e oferecendo segurança para suas operações de venda.
            </p>
          </div>

          <div className="text">
            <span>Emissão de NFC-e e CF-e SAT</span>
            <p>
            
            Para empresas que, além de prestar serviços, também comercializam produtos, como muitas assistências técnicas, a emissão de NFC-e ou CF-e SAT é essencial. Com o módulo PDV e fiscal do Blue ERP, você pode emitir esses documentos fiscais de forma rápida e prática, garantindo que suas transações comerciais estejam sempre em conformidade.
            </p>
          </div>

          <div className="text">
            <span>Configurações de ICMS</span>
            <p>
            
            No Blue ERP, você tem à disposição recursos para manter sua empresa em conformidade com as obrigações fiscais. Com campos específicos para configurar valores de ICMS Efetivo, ICMS Desonerado e Substituição Tributária (ST), o sistema facilita a gestão fiscal e assegura que os cálculos sejam feitos corretamente.

            </p>
          </div>

          <div className="text">
            <span> Facilitador de Sped Fiscal</span>
            <p>
           
O Blue ERP simplifica a geração do arquivo SPED Fiscal, criando o arquivo automaticamente a partir das entradas de XML dos fornecedores e das saídas de produtos com base nas notas fiscais emitidas. Você também pode contar com informações detalhadas dos Blocos K e H, proporcionando uma visão completa e precisa das obrigações fiscais da sua empresa.
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