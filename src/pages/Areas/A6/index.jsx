import * as S from "./style";
import React, { useRef, useEffect } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";

import { GoShieldCheck } from "react-icons/go";

import Back from "../assets/back1.svg";

import Image1 from "../assets/header-loja-virtual.png";
import Image2 from "../assets/lv.svg";
import Image3 from "../assets/lv2.svg";
import Image4 from "../assets/lv3.svg";
import Image5 from "../assets/lv4.svg";

import Image6 from "../assets/loja-virtual-central-de-integracao.svg";
import Image7 from "../assets/loja-virtual-engajamento.svg";
import Image8 from "../assets/gerenciar-vendas-sige-cloud-assistencia.svg";
import Image9 from "../assets/gestao-fiscal-sige-cloud-servicos.svg";


export function A6(){
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
        Sistema ERP para <strong> Loja Virtual e E-commerce </strong>

        </h2>
          
        <ul>
<li>
   <GoShieldCheck/>Integração com diversos E-commerces e Marketplaces;
</li>
<li>
  <GoShieldCheck/>Integração com envio de mercadorias por BLUE WEB Correios;
</li>
<li>
  <GoShieldCheck/> Loja virtual para pedidos e entregas.
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
         <strong>Central de integração


</strong>
         <img src={Image2} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section1Ref)}>
            <p>Integração com E-commerce e Marketplace





</p>
          </li>

          <li onClick={() => handleScrollToSection(section1Ref)}>
            <p>Integração com BLUE WEB Correios</p>
          </li>

          <li onClick={() => handleScrollToSection(section1Ref)}>
           
            <p>BLUE Loja</p>
          </li>
         </ul>
        </div>

        <div className="box b2">
         <div className="left">
         <strong>Engajamento de vendas


</strong>
         <img src={Image3} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>Controle por cashback





</p>
          </li>

          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>Tabelas de preço</p>
          </li>

          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>Cupom de desconto</p>
          </li>
         </ul>
        </div>

        <div className="box b3">
         <div className="left">
         <strong>Controle de Estoque e Expedição


</strong>
         <img src={Image4} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section3Ref)}>
           
            <p>Relatórios para controle de estoque




</p>
          </li>

          <li onClick={() => handleScrollToSection(section3Ref)}>
           
            <p>Endereçamento de estoque
            </p>
          </li>

          <li onClick={() => handleScrollToSection(section3Ref)}>
           
            <p>Gestão de expedição
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
        Central de integração
        </span>

        <h4>
        Quero 
        <strong>  impulsionar minhas vendas</strong>
        </h4>

        <p>
        A Central de Integração do BLUE ERP está presente nos módulos de estoque e vendas, facilitando a comunicação entre o sistema e o seu e-commerce. Essa integração proporciona mais agilidade para os setores de vendas e logística, assegurando que os processos sejam rápidos e alinhados com a demanda do seu negócio.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

      
      </S.Main3>

      <S.Main4 data-color={false}>
        <h2><strong>
        Expanda seu negócio </strong> com nossas integrações!
</h2>

        <div className="texts">
          <div className="text">
            <span>Integração com E-commerce e Marketplace</span>
            <p>
          

No BLUE ERP, você encontra soluções para integrar seu e-commerce com os principais marketplaces, como B2W, Mercado Livre, WooCommerce, Loja Integrada, Amazon, Magento e muitos outros. Dessa forma, todas as transações, desde a escolha do produto até a finalização do pedido, podem ser gerenciadas de forma centralizada, garantindo que todo o processo de vendas online ocorra de maneira prática e digital.
            </p>
          </div>

          <div className="text">
            <span>Integração com BLUE WEB Correios</span>
            <p>
            
            Para agilizar e organizar as postagens de encomendas, o BLUE ERP oferece integração com o BLUE WEB Correios. Esse recurso permite gerar e imprimir listas de postagens, etiquetas e códigos de rastreamento, facilitando o envio e acompanhamento de mercadorias e melhorando a experiência de seus clientes.
            </p>
          </div>

          <div className="text">
            <span> BLUE Loja</span>
            <p>
           
            Crie uma loja virtual personalizada com o BLUE Loja para expandir a presença digital da sua empresa! Seus clientes podem acessar o site, fazer pedidos diretamente e receber os produtos de forma prática. Além de acelerar o processo de vendas, o sistema permite o controle integrado de estoque, financeiro e fiscal, trazendo eficiência e agilidade para o seu negócio.
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
       Engajamento de vendas
        </span>

        <h4>
        Quero 
        <strong> vender mais</strong>
        </h4>

        <p>
        Com os recursos do módulo de vendas do BLUE ERP, você pode aumentar a visibilidade da sua empresa, tanto online quanto fisicamente, aplicando estratégias como preços diferenciados, cupons de desconto e cashback. Esses recursos ajudam a atrair e fidelizar clientes, tornando seu negócio mais competitivo e atraente no mercado.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
       <img src={Image7} alt="" />
       
       </div>

       <img src={Back} alt="" className="bottom"/>
      </S.Main3>

      <S.Main4 data-color={true}>
        <h2><strong>Para você ter mais controle </strong> sobre seus negócios!

        </h2>

        <div className="texts">
          <div className="text">
            <span>           
            Controle por cashback</span>
            <p>
       

O cashback tem se tornado uma prática cada vez mais popular na venda de produtos de diversos segmentos. Com ele, o cliente paga o valor total de uma compra e recebe um crédito para futuras aquisições. O BLUE ERP oferece essa funcionalidade para que você possa aplicar essa estratégia no seu E-commerce ou Loja Virtual, incentivando a fidelização dos clientes.
            </p>
          </div>

          <div className="text">
            <span>Tabelas de preço</span>
            <p>
            
Que tal promover tabelas de preços especiais para mercadorias que estão paradas em seu estoque? Com o BLUE ERP, você pode estabelecer preços promocionais para clientes específicos, criando uma relação mais próxima e fortalecida com eles.
            </p>
          </div>

          <div className="text">
            <span>Cupom de desconto</span>
            <p>
            
Oferecer cupons de desconto é uma excelente maneira de impulsionar as vendas de sua empresa. No BLUE ERP Loja, é possível criar cupons de desconto de forma rápida e lançá-los diretamente no seu site, ajudando a divulgar e potencializar a visibilidade do seu negócio.
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
        Controle de estoque e expedição
        </span>

        <h4>
        Quero 
        <strong> gerenciar estoque</strong>
        </h4>

        <p>
        O BLUE ERP conta com um módulo avançado e completo de gestão de estoque, oferecendo controle total desde a aquisição de mercadorias, a organização em diferentes depósitos, o monitoramento do giro de produtos no estoque, até o acompanhamento das entregas. Com essa ferramenta, você obtém uma visão completa e organizada do estoque, permitindo otimizar processos e garantir o fluxo contínuo das operações de sua empresa.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

      
      </S.Main3>

      <S.Main4 data-color={false}>
        <h2><strong>Para você não perder mais vendas </strong> por falta de mercadorias!</h2>

        <div className="texts">
          <div className="text">
            <span>Relatórios para Controle de Estoque</span>
            <p>
            
Mantenha o controle do saldo de seu estoque com informações seguras e detalhadas! O BLUE ERP oferece relatórios completos que registram todas as movimentações de entrada e saída dos produtos, proporcionando dados precisos para embasar decisões estratégicas e planejar o futuro financeiro do seu negócio com confiança.
            </p>
          </div>

          <div className="text">
            <span> Endereçamento de Estoque</span>
            <p>
           
           
            Facilite a busca por produtos com a função de endereçamento de estoque! No BLUE ERP, você pode registrar a localização exata de cada item — como o corredor ou prateleira — para encontrá-los rapidamente e manter o depósito sempre organizado.
            </p>
          </div>

          <div className="text">
            <span>Gestão de Expedição</span>
            <p>
            
            Gerencie a saída de mercadorias de forma eficiente com o módulo de Gestão de Expedição. Este recurso permite administrar a armazenagem, separação, despacho e entrega dos itens de onde você estiver, garantindo que o processo de expedição funcione com agilidade e precisão.
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

        <h4>
        Quero uma 
        <strong> gestão fiscal completa</strong>
        </h4>

        <p>

        Com o módulo de Gestão Fiscal do BLUE ERP, a emissão de notas fiscais se tornou rápida e descomplicada, permitindo que você e sua equipe dediquem mais tempo ao atendimento ao cliente e ao fortalecimento de relacionamentos. Com funcionalidades práticas e intuitivas, você pode configurar os impostos necessários e emitir documentos fiscais com a segurança de estar sempre em conformidade com a legislação, proporcionando agilidade e confiança ao seu processo fiscal.
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
            <span> Emissão de NF-e com envio automático por e-mail</span>
            <p>
           
            O emissor de NF-e é fundamental para qualquer empresa. Além de possuir as ferramentas para emitir a NF-e, o BLUE ERP também a envia por e-mail ao destinatário da NF-e de forma automática! Configure os impostos necessários e emita seus documentos fiscais com a certeza de estar sempre em dia com a legislação.
            </p>
          </div>

          <div className="text">
            <span>  Emissão de CT-e</span>
            <p>
            
          
            Quer emitir CT-e com facilidade, através de um sistema compatível com Certificado A1 e A3? No BLUE ERP você encontra isso e muito mais! Elimine erros de digitação ou no cálculo dos impostos e poupe o tempo da sua equipe nas operações de transporte.
            </p>
          </div>

          <div className="text">
            <span> Emissão de MDF-e</span>
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