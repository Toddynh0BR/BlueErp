import * as S from "./style";
import React, { useRef, useEffect } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";

import { GoShieldCheck } from "react-icons/go";

import Back from "../assets/back1.svg";

import Image1 from "../assets/sistema-produtos-alimenticios-sige-cloud.png";
import Image2 from "../assets/pa2.svg";
import Image3 from "../assets/a.svg";
import Image4 from "../assets/v4.svg";
import Image5 from "../assets/pa.svg";

import Image6 from "../assets/pa2.svg";
import Image7 from "../assets/recursos-flexiveis-armazenamento.svg";
import Image8 from "../assets/gestao-financeira-sige-cloud.svg";
import Image9 from "../assets/lanchonetes-e-bares-potencialize-as-vendas.svg";


export function A14(){
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
        Sistema de Gestão e Vendas para <strong> Lanchonetes e Bares!</strong>


        </h2>
          
        <ul>
<li>
   <GoShieldCheck/>Busca de produtos por Número de Série;
</li>
<li>
  <GoShieldCheck/>Acompanhamento de pedidos;
</li>
<li>
  <GoShieldCheck/>
  PDV, pedidos e e-commerce de lanches e bebidas
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
         <strong>Aumente suas vendas digitais
</strong>
         <img src={Image2} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section1Ref)}>
            <p> PDV Frente de Caixa


</p>
          </li>

          <li onClick={() => handleScrollToSection(section1Ref)}>
            <p>Gestão de Comandas, Mesas e Entregas</p>
          </li>

          <li onClick={() => handleScrollToSection(section1Ref)}>
           
            <p>Controle de comissão de vendedores</p>
          </li>
         </ul>
        </div>

        <div className="box b2">
         <div className="left">
         <strong>Gestão de estoque integrada


</strong>
         <img src={Image3} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>Cadastro de produtos com variação


</p>
          </li>

          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>Produtos do tipo Pizza</p>
          </li>

          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>Complementos de produtos</p>
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
           
            <p>Faturamento parcial de pedidos

</p>
          </li>

          <li onClick={() => handleScrollToSection(section3Ref)}>
           
            <p>Faturar pedidos em Lote
            </p>
          </li>

          <li onClick={() => handleScrollToSection(section3Ref)}>
           
            <p>
            
Emissão de NF-e, NFC-e, CF-e SAT
            </p>
          </li>
         </ul>
        </div>

        <div className="box b4">
         <div className="left">
         <strong>Acompanhamento de pedidos</strong>
         <img src={Image5} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section4Ref)}>
           
            <p>BLUE Loja


            </p>
          </li>

          <li onClick={() => handleScrollToSection(section4Ref)}>
           
            <p>iFood</p>
          </li>

          <li onClick={() => handleScrollToSection(section4Ref)}>
           
            <p>Catálogo virtual</p>
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
      <strong> ferramentas que impulsionam a sua Lanchonete ou Bar!</strong>

      </h4>


        <p>
        Com os recursos do módulo de vendas do BLUE ERP você pode aumentar a visibilidade da sua Lanchonete, com um frente de caixa mais ágil, Módulos Foods com recursos especializados para acrescentar sabores e acompanhamentos ao pedidos, integração direta com iFood, diferentes tabelas de preços e a criação de combos.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

      
      </S.Main3>

      <S.Main4 data-color={false}>
        <h2>
        <strong>Gerencie seus pedidos </strong> de um jeito simples!
</h2>

        <div className="texts">
          <div className="text">
            <span>PDV Frente de Caixa</span>
            <p>
            
            Para realizar vendas diretas para o consumidor final, você pode utilizar o PDV Frente de Caixa do BLUE ERP. Com ele é possível fazer vendas diretas com emissão de NFC-e ou CF-e SAT, dividir pedidos e aceitar as mais diversas formas de pagamento.
            </p>
          </div>

          <div className="text">
            <span>   Gestão de Comandas, Mesas e Entregas</span>
            <p>
         
Ganhe agilidade e eficiência utilizando a ferramenta Foods, que conta com as funções de vendas por mesa, encomenda e tele-entrega! O sistema registra a venda, encaminha para a cozinha para realizar o preparo e, por fim, gera o faturamento financeiro dessa venda de forma rápida e prática. Conte também com nossa integração com iFood para potencializar suas vendas!


            </p>
          </div>

          <div className="text">
            <span> Controle de comissão de vendedores</span>
            <p>
           
            Gerencie a performance da sua equipe comercial, as vendas realizadas, os lançamentos de comissões, bem como o percentual de metas atingido. Você também pode controlar os dados a que seus vendedores terão acesso, através do controle de permissões.
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
       
       Quero gerenciar estoque
        </span>

        <h4>
        Recursos flexíveis de 
      <strong>  armazenamento de mercadorias </strong>
      para quem tem uma ou várias lanchonetes, bares e pizzarias!
      </h4>


        <p>
        O BLUE ERP possui um completo módulo de gestão de estoque que lhe permite gerenciar todas as etapas desde a compra de mercadorias, a localização em diferentes depósitos, o giro de mercadorias em estoque e até entregas.
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
            Cadastro de produtos com variação
            </span>
            <p>
            
            Você poderá registrar produtos simples e variáveis como, por exemplo, produtos com variação de tamanho e sabores. Tudo isso, controlado com códigos específicos e com variações que atendam as demandas do seu tipo de negócio.
            </p>
          </div>

          <div className="text">
            <span> Produtos do tipo Pizza</span>
            <p>
           
Você que possui uma pizzaria e deseja ter o controle de pizzas por dimensões, sabores, bordas e tipo de massa, o BLUE ERP é perfeito para sua empresa! É possível cadastrar seus produtos com esses recursos para facilitar as vendas do Foods.
            </p>
          </div>

          <div className="text">
            <span>Complementos de produtos</span>
            <p>
            
Sabemos que seu produto pode ter complementos, como por exemplo, um adicional de molhos, saladas e demais ingredientes. Por conta disso, é fundamental que você tenha em seu restaurante um sistema ERP que permita esse controle, otimizando as suas chances de venda!
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
        Gestão Financeira e Fiscal
        </span>

        <h4>
        Quero gerenciar o  
      <strong>  financeiro e fiscal </strong>
      da minha empresa
      </h4>


        <p>
        Com o BLUE ERP você tem módulos para controlar seu fluxo de caixa, fazer projeções de receitas e despesas, centros de custos e planos de contas para organizar sua gestão financeira, garantindo que você invista o capital da sua empresa da melhor forma, reduzindo custos e otimizando recursos para o crescimento do negócio.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

      
      </S.Main3>

      <S.Main4 data-color={false}>
        <h2>
        <strong>Descomplique! </strong> Gerencie seu
        financeiro conectado ao fiscal
</h2>

        <div className="texts">
          <div className="text">
            <span> Faturamento parcial de pedidos</span>
            <p>
           
            Falou em flexibilidade para a gestão financeira, falou BLUE ERP! Um grande benefício do nosso módulo financeiro é que você pode faturar os pedidos como desejar, inclusive, parcialmente. Você acessa o pedido, seleciona o valor pago e automaticamente o status já é atualizado no seu financeiro.
            </p>
          </div>

          <div className="text">
            <span> Faturar pedidos em Lote</span>
            <p>
           
            Com essa ferramenta, em 3 passos simples você pode faturar diversos pedidos, emitir suas respectivas notas fiscais, gerar boletos e enviá-los por e-mail a seus clientes. Tudo isso, de uma só vez!
            </p>
          </div>

          <div className="text">
            <span>Emissão de NF-e, NFC-e, CF-e SAT</span>
            <p>
            
Para você que realiza vendas para consumidor final, além de todos os recursos de produção e financeiro, conte com a emissão de NFC-e ou CF-e SAT. Com o PDV Frente de Caixa moderno e fácil de usar, você pode emitir esses e outros documentos fiscais em instantes. É só começar!


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
       Acompanhamento de pedidos
        </span>

        <h4>
          
      <strong> Quero potencializar minhas vendas</strong>

      </h4>


        <p>
        No BLUE ERP você pode aumentar a visibilidade da sua loja ou restaurante com métodos de venda online, facilitando o acesso dos clientes aos produtos que você comercializa, seja por loja virtual ou catálogo online, aplicando preços diferenciados e fazendo toda a gestão da sua equipe de vendas. E o cliente, ao finalizar o pedido, já pode acompanhar no computador ou no celular, o preparo, envio e entrega da compra.


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
        <strong>Gerenciamento centralizado  </strong> e as mercadorias no lugar certo!</h2>

        <div className="texts">
          <div className="text">
            <span>BLUE Loja</span>
            <p>
            
            No BLUE ERP é possível que você crie um site próprio para seu restaurante. A loja virtual poderá ser acessada por seus clientes, onde eles podem realizar a encomenda e acompanhar seu pedido de forma rápida e prática. Esse seria um grande diferencial estratégico para sua empresa!
            </p>
          </div>

          <div className="text">
            <span> iFood</span>
            <p>
           
            Com a parceria com o iFood fica muito mais eficiente suas vendas por delivery! Realize sua ativação junto ao iFood e integre junto ao BLUE ERP para gerenciar suas vendas. É visibilidade para seus produtos, controle para vender mais e a tranquilidade de saber que tem todas as informações que precisar há alguns cliques de distância.
            </p>
          </div>

          <div className="text">
            <span>Catálogo virtual</span>
            <p>
            
Amplie as oportunidades de venda do seu restaurante, criando um exclusivo Catálogo Virtual que pode ser enviado por e-mail e impactar toda a sua carteira de clientes. E para finalizar o cliente pode aprovar a compra com um botão dentro do e-mail, já aprovando o pedido no seu sistema.


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