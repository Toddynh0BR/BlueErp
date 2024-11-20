import * as S from "./style";
import React, { useRef, useEffect } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";

import { GoShieldCheck } from "react-icons/go";

import Back from "../assets/back1.svg";

import Image1 from "../assets/sistema-produtos-alimenticios-sige-cloud.png";
import Image2 from "../assets/pa.svg";
import Image3 from "../assets/pa2.svg";
import Image4 from "../assets/v4.svg";
import Image5 from "../assets/a.svg";

import Image6 from "../assets/gerenciar-produtos-sige-cloud.svg";
import Image7 from "../assets/pa2.svg";
import Image8 from "../assets/gestao-financeira-sige-cloud.svg";
import Image9 from "../assets/recursos-flexiveis-armazenamento.svg";


export function A12(){
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
        Sistema de Gestão para <strong> Loja de Produtos Alimentícios!</strong>



        </h2>
          
        <ul>
<li>
   <GoShieldCheck/>Busca de produtos por Número de Série;
</li>
<li>
  <GoShieldCheck/>Controle de Ordens de Serviço;
</li>
<li>
  <GoShieldCheck/>Emissão de Nota Fiscal de Serviço.
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
         <strong>Gerencie sua produção
</strong>
         <img src={Image2} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section1Ref)}>
            <p> Controle de lote e validade


</p>
          </li>

          <li onClick={() => handleScrollToSection(section1Ref)}>
            <p>Produtos compostos</p>
          </li>

          <li onClick={() => handleScrollToSection(section1Ref)}>
           
            <p>KIT de produto</p>
          </li>
         </ul>
        </div>

        <div className="box b2">
         <div className="left">
         <strong>Aumente suas vendas digitais


</strong>
         <img src={Image3} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>PDV Frente de Caixa


</p>
          </li>

          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>Controle de pedidos</p>
          </li>

          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>E-commerce e Delivery</p>
          </li>
         </ul>
        </div>

        <div className="box b3">
         <div className="left">
         <strong>Gestão Financeira e fiscal conectados


</strong>
         <img src={Image4} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section3Ref)}>
           
            <p>Emissão de NF-e, NFC-e, CF-e SAT

</p>
          </li>

          <li onClick={() => handleScrollToSection(section3Ref)}>
           
            <p>Faturar pedidos em Lote
            </p>
          </li>

          <li onClick={() => handleScrollToSection(section3Ref)}>
           
            <p>
            Faturamento parcial de pedidos
            </p>
          </li>
         </ul>
        </div>

        <div className="box b4">
         <div className="left">
         <strong>Gestão de estoque integradas</strong>
         <img src={Image5} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section4Ref)}>
           
            <p>Gestão de vendedores e metas


            </p>
          </li>

          <li onClick={() => handleScrollToSection(section4Ref)}>
           
            <p>Cadastro de produtos com variação</p>
          </li>

          <li onClick={() => handleScrollToSection(section4Ref)}>
           
            <p>Código de barras</p>
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
    <span>Quero gerir a produção</span>
    <h4>Os recursos certos <strong>para a sua empresa de produção de alimentos decolar!</strong></h4>
    <p>
      Independentemente do <strong>porte da sua empresa de confecção</strong>, o Blue ERP oferece módulos completos que permitem gerenciar todas as etapas do processo, desde a <strong>compra de insumos até a produção</strong>, venda e entrega dos produtos finalizados.
    </p>
    <button onClick={() => abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
  </div>

  <div className="right">
    <img src={Image9} alt="" />
  </div>

  <img src={Back} alt="" className="bottom" />
</S.Main3>

<S.Main4 data-color={false}>
  <h2>Gerencie a produção dos alimentos e seus insumos de um jeito simples!</h2>

  <div className="texts">
    <div className="text">
      <span>Controle de Lote e Validade</span>
      <p>
        Para vender produtos alimentícios <strong>controlados por lotes</strong> e <strong>validades</strong>, é essencial contar com um ERP que armazene essas informações e facilite os processos de venda e produção. Com o Blue ERP, você tem a <strong>segurança de que essas informações estão sempre atualizadas</strong> e acessíveis, com relatórios detalhados que auxiliam no gerenciamento e no controle.
      </p>
    </div>

    <div className="text">
      <span>Produtos Compostos</span>
      <p>
        Um grande benefício de usar um ERP especializado no seu segmento é a possibilidade de cadastrar até mesmo os <strong>insumos utilizados na produção de alimentos</strong>. Com o Blue ERP, você pode registrar a quantidade exata de <strong>insumos</strong> que compõem os produtos alimentícios fabricados pela sua empresa, garantindo um controle detalhado e eficiente de sua produção.
      </p>
    </div>

    <div className="text">
      <span>KIT de Produto</span>
      <p>
        Com o Blue ERP, é possível cadastrar produtos como <strong>KITs</strong>, onde os insumos necessários para a produção desses KITs são automaticamente informados nas <strong>vendas e Ordens de Produção</strong>. Isso otimiza significativamente o processo de faturamento e fabricação, tornando a gestão de <strong>estoque e produção</strong> mais ágil e precisa.
      </p>
    </div>
  </div>

  <button onClick={() => abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
</S.Main4>

<S.Main3 ref={section2Ref}>
  <div className="left">
    <span>Quero vender mais</span>
    <h4>Para isso, nada melhor que contar com <strong>ferramentas que impulsionam a sua loja de produtos alimentícios!</strong></h4>
    <p>
      Com os recursos do módulo de vendas do Blue ERP, você pode aumentar a <strong>visibilidade da sua loja de produtos alimentícios</strong>, oferecendo um frente de caixa mais ágil e facilitando o acesso dos clientes aos produtos que você comercializa, seja por <strong>loja virtual</strong> ou catálogo online. O sistema permite aplicar preços diferenciados e realizar toda a <strong>gestão da sua equipe de vendas</strong>, garantindo maior controle e eficiência no processo.
    </p>
    <button onClick={() => abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
  </div>

  <div className="right">
    <img src={Image7} alt="" />
  </div>

  <img src={Back} alt="" className="bottom" />
</S.Main3>

<S.Main4 data-color={true}>
  <h2><strong>Gerenciamento centralizado</strong> e as mercadorias no lugar certo!</h2>

  <div className="texts">
    <div className="text">
      <span>PDV Frente de Caixa</span>
      <p>
        Para realizar vendas diretas ao consumidor final, o Blue ERP oferece o <strong>PDV Frente de Caixa</strong>, uma solução eficiente que permite importar orçamentos e realizar vendas diretas com emissão de <strong>NFC-e</strong> ou <strong>CF-e SAT</strong>, garantindo praticidade e agilidade no processo de vendas.
      </p>
    </div>

    <div className="text">
      <span>Controle de Pedidos e Orçamentos</span>
      <p>
        Com o Blue ERP, você pode criar <strong>orçamentos</strong> e enviá-los por e-mail aos seus clientes. Quando aprovados, os orçamentos se tornam <strong>pedidos</strong>, gerando automaticamente lançamentos financeiros e a baixa dos itens no estoque. Assim, todas as áreas da sua empresa alimentícia ficam <strong>interligadas</strong>, garantindo um fluxo de trabalho integrado e eficiente.
      </p>
    </div>

    <div className="text">
      <span>E-commerce de Alimentação e Delivery</span>
      <p>
        Crie sua loja virtual para receber pedidos do seu <strong>restaurante</strong>, lanchonete ou delivery de alimentos e bebidas! Com o Blue ERP, seus clientes podem acessar o site e fazer <strong>encomendas</strong> diretamente online. Isso facilita a produção ou separação dos itens comprados, além de permitir o envio rápido e eficiente para os clientes.
      </p>
    </div>
  </div>

  <button onClick={() => abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
</S.Main4>

<S.Main3 ref={section3Ref}>
  <div className="left">
    <img src={Image8} alt="" />
  </div>

  <div className="right">
    <span>Gestão Financeira e Fiscal</span>
    <h4>Gerencie de maneira conectada o <strong>Fiscal e Financeiro</strong> da sua empresa de alimentos!</h4>
    <p>
      Com o Blue ERP, você conta com módulos completos para controlar seu <strong>fluxo de caixa</strong>, realizar projeções de receitas e despesas, gerenciar centros de custos e criar planos de contas, permitindo uma gestão financeira eficiente. Isso garante que você faça o melhor uso do capital da sua empresa, <strong>reduzindo custos</strong> e otimizando recursos para o crescimento sustentável.
      <br /><br />
      Com o módulo de Gestão Fiscal do Blue ERP, a emissão de <strong>notas fiscais</strong> se tornou um processo simples e ágil. Isso libera mais tempo para você e sua equipe focarem no atendimento ao cliente e na expansão dos negócios. Configure os impostos necessários e emita seus documentos fiscais com a certeza de que sua empresa está sempre em conformidade com a <strong>legislação vigente</strong>.
    </p>
    <button onClick={() => abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
  </div>

  <img src={Back} alt="" className="bottom" />
</S.Main3>


      <S.Main4 data-color={false}>
        <h2>
        <strong>Descomplique! </strong> Gerencie seu
        financeiro conectado ao fiscal
</h2>

        <div className="texts">
          <div className="text">
            <span>Emissão de NF-e, NFC-e, CF-e SAT</span>
            <p>
           

Para quem realiza vendas para o consumidor final, o Blue ERP oferece todos os recursos necessários para uma gestão eficiente, incluindo a emissão de NF-e, NFC-e ou CF-e SAT. Com o PDV Frente de Caixa, moderno e fácil de usar, você pode emitir esses e outros documentos fiscais rapidamente, tornando o processo mais ágil e sem complicação.
            </p>
          </div>

          <div className="text">
            <span>Faturamento de Pedidos em Lote</span>
            <p>
            
Com o Blue ERP, você pode faturar múltiplos pedidos em apenas 3 passos simples. Emita suas notas fiscais, gere boletos e envie-os por e-mail aos seus clientes de forma rápida e eficiente, tudo de uma só vez!
            </p>
          </div>

          <div className="text">
            <span>Faturamento Parcial de Pedidos</span>
            <p>
            
            Flexibilidade é essencial para a gestão financeira, e com o Blue ERP, você pode faturar pedidos de acordo com suas necessidades, inclusive de forma parcial. Basta acessar o pedido, selecionar o valor pago e o status será automaticamente atualizado no seu sistema financeiro. Isso garante mais controle e agilidade no seu processo de faturamento.
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
       Quero gerenciar estoque
        </span>


        <h4>
      
       <strong>    Recursos flexíveis de armazenamento </strong>
       de mercadorias para quem tem uma ou várias lojas!
       </h4>

        <p>
        O Blue ERP possui um módulo de gestão de estoque moderno e completo, permitindo gerenciar todas as etapas do processo. Desde a compra de mercadorias até a organização em diferentes depósitos, controle do giro de estoque e até a entrega dos produtos, tudo é facilitado para garantir uma gestão eficiente e precisa do seu inventário.
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
<strong>Para você não perder mais
vendas </strong> <br />por falta de mercadorias!</h2>

        <div className="texts">
          <div className="text">
            <span>Gestão de Vendedores e Metas</span>
            <p>
           

Com o Blue ERP, você pode informar o local exato de armazenamento de cada mercadoria, como corredor ou prateleira. Imagine a praticidade de uma vendedora localizar rapidamente um produto no estoque quando solicitado por um cliente. Com nosso sistema, isso é possível, tornando o processo de vendas muito mais eficiente e ágil.
            </p>
          </div>

          <div className="text">
            <span>  Cadastro de Produtos com Variação</span>
            <p>
           
            O Blue ERP permite o cadastro de produtos simples e com variações, como tamanho, cor, sabor, entre outros. Cada variação é controlada por um código específico, atendendo às necessidades do seu tipo de negócio e garantindo uma organização completa do seu inventário.
            </p>
          </div>

          <div className="text">
            <span> Código de Barras</span>
            <p>
           
A utilização de códigos de barras facilita imensamente o controle de estoque em sua empresa. Com o Blue ERP, você pode utilizar leitores de código de barras para realizar movimentações internas de entrada e saída de produtos, transferências entre depósitos e até mesmo no processo de vendas, garantindo maior precisão e agilidade nas operações.
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