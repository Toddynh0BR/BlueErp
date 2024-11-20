import * as S from "./style";
import React, { useRef, useEffect } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";

import { GoShieldCheck } from "react-icons/go";

import Back from "../assets/back1.svg";

import Image1 from "../assets/equipamentos-idustria-gestao-completa.png";
import Image2 from "../assets/c2.svg";
import Image3 from "../assets/a2.svg";
import Image4 from "../assets/v3.svg";
import Image5 from "../assets/v4.svg";

import Image6 from "../assets/gerenciar-vendas-sige-cloud.svg";
import Image7 from "../assets/gestao-de-estoque-sige-cloud.svg";
import Image8 from "../assets/gestao-financeira-sige-cloud.svg";
import Image9 from "../assets/gestao-fiscal-sige-cloud-servicos.svg";


export function A18(){
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
        ERP para sua <strong> Indústria</strong>



        </h2>
          
        <ul>
<li>
   <GoShieldCheck/>Modulo PCP;
</li>
<li>
  <GoShieldCheck/>Gestão de pedidos, ordens de serviços e contratos;
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
         <strong>Gestão de vendas e ordens de serviços
</strong>
         <img src={Image2} alt="" className="especial"/>
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section1Ref)}>
            <p>Controle de Pedidos e Orçamentos


</p>
          </li>

          <li onClick={() => handleScrollToSection(section1Ref)}>
            <p>Controle de Ordens de Serviços</p>
          </li>

          <li onClick={() => handleScrollToSection(section1Ref)}>
           
            <p>Criação do contrato</p>
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
           
            <p>Entrada de estoque


</p>
          </li>

          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>Relatórios para controle de estoque</p>
          </li>

          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>Endereçamento de estoque</p>
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
           
            <p>Emissão de NF-e com envio automático por e-mail


</p>
          </li>

          <li onClick={() => handleScrollToSection(section3Ref)}>
           
            <p>Nota Fiscal de Serviço de múltiplas ordens de serviços
            </p>
          </li>

          <li onClick={() => handleScrollToSection(section3Ref)}>
           
            <p>
            Nota fiscal emitida contra o CNPJ da sua empresa
            </p>
          </li>
         </ul>
        </div>

        <div className="box b4">
         <div className="left">
         <strong>Gestão financeira</strong>
         <img src={Image5} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section4Ref)}>
           
            <p>Geração de boletos e de credenciadora


            </p>
          </li>

          <li onClick={() => handleScrollToSection(section4Ref)}>
           
            <p>Cobrança de cliente inadimplente</p>
          </li>

          <li onClick={() => handleScrollToSection(section4Ref)}>
           
            <p>Conciliação bancária por OFX</p>
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
      Gestão de vendas e ordens de serviços
    </span>

    <h4> 
      <strong> Quero vender mais </strong>
    </h4>

    <p>
      Implementar um <strong>software para a prestação de serviços</strong> é essencial para empresas que buscam crescer, oferecendo <strong>suporte e estrutura adequados</strong> para controlar tanto a venda de produtos quanto a prestação de serviços. Com os recursos do <strong>módulo de vendas do Blue ERP</strong>, você pode aumentar a visibilidade da sua empresa de equipamentos para a indústria, otimizar a gestão das vendas e melhorar a interação com seus clientes, garantindo maior eficiência e controle sobre todo o processo comercial.
    </p>

    <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
  </div>
</S.Main3>

<S.Main4 data-color={false}>
  <h2>
    <strong> Gerencie suas vendas </strong> de um jeito simples!
  </h2>

  <div className="texts">
    <div className="text">
      <span>Controle de Pedidos e Orçamentos</span>
      <p>
        Crie <strong>orçamentos</strong> e envie por e-mail para seus clientes de forma rápida e prática. Após a <strong>aprovação</strong>, os orçamentos são convertidos automaticamente em pedidos, gerando o lançamento financeiro e a atualização do estoque. Com o Blue ERP, todos os setores da sua empresa de venda e manutenção de equipamentos estão <strong>interligados</strong>, tornando o processo de venda mais ágil e eficiente.
      </p>
    </div>

    <div className="text">
      <span>Controle de Ordens de Serviço</span>
      <p>
        Ganhe <strong>agilidade</strong> e eficiência ao cadastrar ordens de serviço no Blue ERP. O sistema preenche automaticamente os documentos com os dados do <strong>cliente cadastrado</strong> e permite incluir todas as informações necessárias, agendar serviços e até imprimir ou enviar a ordem de serviço por e-mail para o cliente, otimizando a gestão de serviços prestados.
      </p>
    </div>

    <div className="text">
      <span> Criação do Contrato</span>
      <p>
        Uma das várias vantagens do Blue ERP é a possibilidade de criar <strong>contratos diretamente no sistema</strong>. É possível definir o contratante, as datas de início e término do contrato, o valor total e das parcelas, e até a comissão do técnico ou vendedor. Ao imprimir o contrato, os dados inseridos são automaticamente incluídos, agilizando o processo e tornando tudo mais eficiente.
      </p>
    </div>
  </div>

  <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>
    Experimente
  </button>
</S.Main4>

<S.Main3 ref={section2Ref}>
  <div className="left">
    <span> Gestão de estoque </span>

    <h4> 
      Quero <strong> gerenciar estoque</strong>
    </h4>

    <p>
      O Blue ERP possui um módulo <strong>moderno e completo</strong> de gestão de estoque que permite gerenciar todas as etapas do processo, desde a compra de mercadorias, a localização em diferentes depósitos, o giro de produtos em estoque, até as entregas. Com essa solução, você ganha maior controle sobre o estoque, garantindo <strong>eficiência e organização</strong> em todas as fases do processo.
    </p>

    <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
  </div>

  <div className="right">
    <img src={Image7} alt="" />
  </div>

  <img src={Back} alt="" className="bottom"/>
</S.Main3>

<S.Main4 data-color={true}>
  <h2><strong>Para você não perder mais vendas </strong> por falta de mercadorias!</h2>

  <div className="texts">
    <div className="text">
      <span> Entrada de Estoque </span>
      <p>
        Com o Blue ERP, você facilita o <strong>controle de estoque</strong> ao realizar a entrada de mercadorias diretamente no sistema, com base na importação da <strong>nota fiscal</strong> emitida pelo seu fornecedor. Isso otimiza os recursos e contribui para o crescimento eficiente do seu negócio, tornando o processo de recebimento mais ágil e organizado.
      </p>
    </div>

    <div className="text">
      <span> Relatórios para Controle de Estoque</span>
      <p>
        Acompanhe o <strong>saldo de estoque</strong> do seu negócio com segurança e precisão! O Blue ERP oferece um relatório detalhado sobre as movimentações de <strong>entrada e saída</strong> dos produtos, fornecendo dados reais e valiosos para sua tomada de decisão e planejamento financeiro, garantindo maior controle e previsibilidade.
      </p>
    </div>

    <div className="text">
      <span> Endereçamento de Estoque</span>
      <p>
        Com o Blue ERP, você informa a localização exata de armazenamento de cada mercadoria, como <strong>corredor ou prateleira</strong>. Ao buscar um produto no sistema, a localização é imediatamente fornecida, garantindo que sua equipe localize rapidamente os itens solicitados. Isso proporciona uma experiência mais eficiente e satisfatória para seus clientes, com agilidade na entrega do produto.
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
      Gestão Fiscal
    </span>

    <h4> 
      Quero <strong> gestão fiscal </strong> completa
    </h4>

    <p>
      Com o módulo de <strong>Gestão Fiscal do Blue ERP</strong>, a emissão de notas fiscais se torna um processo simples e ágil, permitindo que você e sua equipe tenham mais tempo para focar no atendimento ao cliente e impulsionar o crescimento do seu negócio. Esse sistema automatizado garante que todos os documentos fiscais sejam emitidos de forma eficiente e em conformidade com a <strong>legislação vigente</strong>, facilitando o seu dia a dia e aprimorando a experiência do cliente.
    </p>

    <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
  </div>
</S.Main3>

<S.Main4 data-color={false}>
  <h2>       
    <strong>Descomplique! </strong> Faça a gestão fiscal mais simples e organizada com o BLUE ERP.
  </h2>

  <div className="texts">
    <div className="text">
      <span>Emissão de NF-e com envio automático por e-mail</span>
      <p>
        Com o Blue ERP, a emissão de NF-e se torna um processo rápido e descomplicado. Além de emitir as <strong>notas fiscais</strong>, o sistema envia automaticamente a NF-e por e-mail ao destinatário, garantindo <strong>praticidade e eficiência</strong>. Configure os impostos necessários e emita seus documentos fiscais com a tranquilidade de que sua empresa está em conformidade com a legislação vigente.
      </p>
    </div>

    <div className="text">
      <span> Nota Fiscal de Serviço de múltiplas ordens de serviços</span>
      <p>
        O Blue ERP facilita o <strong>faturamento de diversos clientes</strong> em um único clique, emitindo NFS-e de várias ordens de serviços simultaneamente. Este recurso de faturamento em lote otimiza tanto o processo financeiro quanto o processo fiscal, tornando a gestão de suas notas fiscais muito mais eficiente, minimizando a burocracia e agilizando o dia a dia da sua empresa.
      </p>
    </div>

    <div className="text">
      <span>Nota fiscal emitida contra o CNPJ da sua empresa</span>
      <p>
        O módulo de notas contra CNPJ do Blue ERP permite identificar <strong>notas emitidas incorretamente</strong> ou cancelamentos não comunicados, evitando problemas durante a declaração de movimentações fiscais para a Receita Federal. Com isso, sua contabilidade fica protegida e você tem maior controle sobre as <strong>notas fiscais</strong>, garantindo uma gestão fiscal mais segura e organizada.
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
      Gestão Financeira
    </span>

    <h4> 
      Quero <strong> gerenciar o financeiro </strong>
    </h4>

    <p>
      O Blue ERP oferece uma <strong>gestão financeira integrada</strong> para controlar entradas e saídas de maneira precisa. Ele permite gerenciar o fluxo de caixa, conciliar contas a pagar e receber, e realizar a emissão de boletos e boletos bancários, proporcionando maior controle e organização no <strong>fluxo financeiro da sua empresa</strong>.
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
            <span>Geração de boletos e de credenciadora</span>
            <p>
            
            
          

Além de possibilitar a emissão de boletos pela sua conta bancária, o Blue ERP oferece o recurso Blue Bank. Com ele, é possível automatizar processos como a geração de boletos, recebimentos por cartão de crédito e débito e envio de links de pagamento, proporcionando mais praticidade e eficiência nas transações financeiras.
            </p>
          </div>

          <div className="text">
            <span>Cobrança de cliente inadimplente</span>
            <p>
            
Manter um bom relacionamento com o cliente e acompanhar de perto seu histórico de pagamentos são essenciais para reduzir a inadimplência. Com o Blue ERP, você pode gerenciar clientes devedores e manter contato direto com eles, incluindo o envio automático de e-mails para cobranças, facilitando o processo e promovendo uma comunicação mais eficaz.</p>
          </div>

          <div className="text">
            <span>Conciliação bancária por OFX</span>
            <p>
            
            A conciliação bancária via OFX facilita o controle financeiro ao importar arquivos de transações bancárias, evitando divergências de saldo ou interpretações incorretas de dados. Com o recurso OFX no Blue ERP, você garante maior precisão nas informações financeiras da sua empresa, simplificando a gestão do fluxo de caixa.
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