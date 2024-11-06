import * as S from "./style";
import React, { useRef, useEffect } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";

import { GoShieldCheck } from "react-icons/go";

import Back from "../assets/back1.svg";

import Image1 from "../assets/perfumes-e-cosmeticos-gestao-completa.png";
import Image2 from "../assets/cp.svg";
import Image3 from "../assets/cp2.svg";
import Image4 from "../assets/v3.svg";
import Image5 from "../assets/v4.svg";

import Image6 from "../assets/perfumes-e-cosmeticos-gestao-de-estoque.svg";
import Image7 from "../assets/cp2.svg";
import Image8 from "../assets/gestao-financeira-sige-cloud.svg";
import Image9 from "../assets/gestao-fiscal-sige-cloud-servicos.svg";


export function A13(){
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
        Sistema de Gestão para Cosméticos e Perfumes



        </h2>
          
        <ul>
<li>
   <GoShieldCheck/>PDV frente de Caixa emissor de Notas Fiscais;
</li>
<li>
  <GoShieldCheck/>Loja virtual para pedidos e entregas;
</li>
<li>
  <GoShieldCheck/>Gerenciamento de estoque.
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
            <p>Entrada de estoque


</p>
          </li>

          <li onClick={() => handleScrollToSection(section1Ref)}>
            <p>Código de barras</p>
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
           
            <p>BLUE Loja</p>
          </li>

          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>
            Controle por cashback</p>
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
           
            <p>
            Cobrança de cliente inadimplente
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
           
            <p>Emissão de NF-e com envio automático por e-mail


            </p>
          </li>

          <li onClick={() => handleScrollToSection(section4Ref)}>
           
            <p>Emissão de CT-e</p>
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
        Gestão de estoque
        </span>

        <p>
       
O Blue ERP conta com um módulo de gestão de estoque moderno e completo, que possibilita o gerenciamento de todas as etapas, desde a compra de mercadorias, a organização em diferentes depósitos, o controle do giro de estoque até as entregas. Com isso, você tem total controle sobre o inventário da sua empresa, garantindo eficiência e precisão em cada processo.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

      
      </S.Main3>

      <S.Main4 data-color={false}>
        <h2>
       <strong> Para você não perder mais vendas </strong> por falta de mercadorias!
</h2>

        <div className="texts">
          <div className="text">
            <span> Entrada de Estoque</span>
            <p>
           
            Para facilitar o controle de estoque das compras realizadas pela sua empresa de cosméticos e perfumaria, o Blue ERP oferece a funcionalidade de realizar entradas de mercadorias com base na importação da nota fiscal emitida pelo seu fornecedor. Essa integração otimiza o processo e auxilia no crescimento do seu negócio ao garantir um controle mais preciso e eficiente do estoque.
            </p>
          </div>

          <div className="text">
            <span> Código de Barras</span>
            <p>
           
            O controle de produtos por código de barras é uma excelente maneira de otimizar a gestão de estoque em sua loja de cosméticos e perfumaria. Com o Blue ERP, você pode utilizar um leitor de código de barras para realizar movimentações internas de entrada e saída de produtos, além de transferências entre depósitos e processos de venda, garantindo agilidade e precisão nas operações.
            </p>
          </div>

          <div className="text">
            <span> Impressão de Etiquetas</span>
            <p>
           
Ao vender produtos de beleza em larga escala, a necessidade de etiquetas precisas e em grande quantidade é essencial. O Blue ERP oferece a opção de imprimir quantas etiquetas forem necessárias, com as proporções e informações exigidas, de maneira automática, diretamente do sistema, garantindo praticidade e conformidade com os requisitos do seu negócio.


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
       
       Quero vender mais
        </span>

        <p>
        Com os recursos do módulo de vendas do Blue ERP, você pode aumentar a visibilidade da sua loja de cosméticos e perfumaria, tornando o processo de vendas mais ágil na loja física através de um frente de caixa moderno. Além disso, o Blue ERP permite que seus clientes acessem seus produtos de forma fácil, seja por meio de uma loja virtual ou catálogo online, com a possibilidade de aplicar preços diferenciados. O sistema também oferece ferramentas para gerir eficientemente sua equipe de vendedores, otimizando toda a operação de vendas da sua loja.
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
          

Com o Blue ERP, você pode realizar vendas diretas para o consumidor final de forma rápida e eficiente utilizando o PDV Frente de Caixa. Além de importar orçamentos e realizar vendas diretas, o sistema permite a emissão de NFC-e ou CF-e SAT. Se sua loja também trabalha com vendas consignadas, o PDV do Blue ERP também está preparado para atender essa necessidade.
            </p>
          </div>

          <div className="text">
            <span>Blue Loja</span>
            <p>
            
Crie uma loja virtual totalmente personalizada no Blue Loja e comece a vender perfumes, maquiagem e todos os itens de beleza que seus clientes estão em busca. Seu cliente poderá acessar seu site, realizar compras diretamente por ele, e você poderá separar e enviar os produtos de forma prática e rápida.
            </p>
          </div>

          <div className="text">
            <span>Controle por Cashback</span>
            <p>
            
O Blue ERP também oferece controle completo sobre o sistema de cashback, uma tendência crescente no mercado de vendas. Ao comprar um item em sua loja, o cliente paga o valor total e recebe um crédito para usar em futuras compras. Esse recurso está disponível tanto para sua loja física quanto para sua loja virtual, tornando a experiência de compra ainda mais vantajosa para seus clientes.

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
        Com o Blue ERP, você conta com módulos completos para controlar seu fluxo de caixa, realizar projeções de receitas e despesas, gerenciar centros de custos e planos de contas. Esses recursos ajudam a organizar sua gestão financeira de forma eficiente, garantindo que o capital da sua empresa seja investido de maneira estratégica, reduzindo custos e otimizando recursos para impulsionar o crescimento do seu negócio.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

      
      </S.Main3>

      <S.Main4 data-color={false}>
        <h2>
        <strong>Descomplique! </strong> Gerencie seu
        financeiro de forma simples!
</h2>

        <div className="texts">
          <div className="text">
            <span> Faturamento Parcial de Pedidos</span>
            <p>
           Tenha total controle sobre o faturamento das suas vendas. Com a possibilidade de faturar pedidos parcialmente, você acessa o pedido, seleciona o valor pago e o sistema atualiza automaticamente o status no financeiro.
            </p>
          </div>

          <div className="text">
            <span>Gestão de Vendedores e Metas</span>
            <p>
             Acompanhe de perto a performance da sua equipe de vendas, controle as comissões, verifique o percentual de metas atingidas e configure permissões para controlar o acesso de cada vendedor às informações do sistema.
            </p>
          </div>

          <div className="text">
            <span>Cobrança de Clientes Inadimplentes</span>
            <p>
             O BLUE ERP facilita a gestão de inadimplência ao permitir o envio de e-mails automáticos para os clientes devedores, garantindo que o acompanhamento do comportamento de pagamento seja eficiente e a inadimplência seja reduzida.
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
        Com o módulo de Gestão Fiscal do BLUE ERP, a emissão de notas se tornou um processo simples e ágil, deixando você e sua equipe com mais tempo para prestar um bom atendimento e conquistar ainda mais clientes.
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
      <strong> Descomplique! </strong>  Faça a gestão fiscal mais simples e organizada com BLUE ERP.</h2>

        <div className="texts">
          <div className="text">
            <span>Emissão de NF-e com envio automático por e-mail</span>
            <p>
           
            O emissor de NF-e é fundamental para qualquer empresa. Além de possuir as ferramentas para emitir a NF-e, o BLUE ERP também a envia por e-mail ao destinatário da NF-e de forma automática! Configure os impostos necessários e emita seus documentos fiscais com a certeza de estar sempre em dia com a legislação.
            </p>
          </div>

          <div className="text">
            <span>Emissão de CT-e</span>
            <p>
            Quer emitir CT-e com facilidade, através de um sistema compatível com Certificado A1 e A3? No BLUE ERP você encontra isso e muito mais! Elimine erros de digitação ou no cálculo dos impostos e poupe o tempo da sua equipe nas operações de transporte.
            </p>
          </div>

          <div className="text">
            <span>Emissão de MDF-e</span>
            <p>
            Se você transporta os produtos da sua empresa para outras cidades ou estados, saiba que no BLUE ERP você consegue emitir o manifesto a partir da NF-e, podendo entregar suas mercadorias sem correr nenhum risco de ter problemas por trafegar com mercadoria sem nota!
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