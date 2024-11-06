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
        ERP para sua Indústria



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

        <p>
       
Implementar um software para a prestação de serviços é essencial para empresas que buscam crescer, oferecendo suporte e estrutura adequados para controlar tanto a venda de produtos quanto a prestação de serviços. Com os recursos do módulo de vendas do Blue ERP, você pode aumentar a visibilidade da sua empresa de equipamentos para a indústria, otimizar a gestão das vendas e melhorar a interação com seus clientes, garantindo maior eficiência e controle sobre todo o processo comercial.
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
            
            Crie orçamentos e envie por e-mail para seus clientes de forma rápida e prática. Após a aprovação, os orçamentos são convertidos automaticamente em pedidos, gerando o lançamento financeiro e a atualização do estoque. Com o Blue ERP, todos os setores da sua empresa de venda e manutenção de equipamentos estão interligados, tornando o processo de venda mais ágil e eficiente.
            </p>
          </div>

          <div className="text">
            <span>Controle de Ordens de Serviço</span>
            <p>
            
            Ganhe agilidade e eficiência ao cadastrar ordens de serviço no Blue ERP. O sistema preenche automaticamente os documentos com os dados do cliente cadastrado e permite incluir todas as informações necessárias, agendar serviços e até imprimir ou enviar a ordem de serviço por e-mail para o cliente, otimizando a gestão de serviços prestados.
            </p>
          </div>

          <div className="text">
            <span> Criação do Contrato</span>
            <p>
            
Uma das várias vantagens do Blue ERP é a possibilidade de criar contratos diretamente no sistema. É possível definir o contratante, as datas de início e término do contrato, o valor total e das parcelas, e até a comissão do técnico ou vendedor. Ao imprimir o contrato, os dados inseridos são automaticamente incluídos, agilizando o processo e tornando tudo mais eficiente.

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
       
       
       Gestão de estoque
        </span>

        <p>
        O Blue ERP possui um módulo moderno e completo de gestão de estoque que permite gerenciar todas as etapas do processo, desde a compra de mercadorias, a localização em diferentes depósitos, o giro de produtos em estoque, até as entregas. Com essa solução, você ganha maior controle sobre o estoque, garantindo eficiência e organização em todas as fases do processo.

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
            Entrada de Estoque
            </span>
            <p>
            

Com o Blue ERP, você facilita o controle de estoque ao realizar a entrada de mercadorias diretamente no sistema, com base na importação da nota fiscal emitida pelo seu fornecedor. Isso otimiza os recursos e contribui para o crescimento eficiente do seu negócio, tornando o processo de recebimento mais ágil e organizado.
            </p>
          </div>

          <div className="text">
            <span> Relatórios para Controle de Estoque</span>
            <p>
           
Acompanhe o saldo de estoque do seu negócio com segurança e precisão! O Blue ERP oferece um relatório detalhado sobre as movimentações de entrada e saída dos produtos, fornecendo dados reais e valiosos para sua tomada de decisão e planejamento financeiro, garantindo maior controle e previsibilidade.


            </p>
          </div>

          <div className="text">
            <span> Endereçamento de Estoque</span>
            <p>
           
            Com o Blue ERP, você informa a localização exata de armazenamento de cada mercadoria, como corredor ou prateleira. Ao buscar um produto no sistema, a localização é imediatamente fornecida, garantindo que sua equipe localize rapidamente os itens solicitados. Isso proporciona uma experiência mais eficiente e satisfatória para seus clientes, com agilidade na entrega do produto.
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

        <p>
        Com o módulo de Gestão Fiscal do Blue ERP, a emissão de notas fiscais se torna um processo simples e ágil, permitindo que você e sua equipe tenham mais tempo para focar no atendimento ao cliente e impulsionar o crescimento do seu negócio. Esse sistema automatizado garante que todos os documentos fiscais sejam emitidos de forma eficiente e em conformidade com a legislação vigente, facilitando o seu dia a dia e aprimorando a experiência do cliente.
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
            

Com o Blue ERP, a emissão de NF-e se torna um processo rápido e descomplicado. Além de emitir as notas fiscais, o sistema envia automaticamente a NF-e por e-mail ao destinatário, garantindo praticidade e eficiência. Configure os impostos necessários e emita seus documentos fiscais com a tranquilidade de que sua empresa está em conformidade com a legislação vigente.
            </p>
          </div>

          <div className="text">
            <span> Nota Fiscal de Serviço de múltiplas ordens de serviços</span>
            <p>
           
O Blue ERP facilita o faturamento de diversos clientes em um único clique, emitindo NFS-e de várias ordens de serviços simultaneamente. Este recurso de faturamento em lote otimiza tanto o processo financeiro quanto o processo fiscal, tornando a gestão de suas notas fiscais muito mais eficiente, minimizando a burocracia e agilizando o dia a dia da sua empresa.
            </p>
          </div>

          <div className="text">
            <span>Nota fiscal emitida contra o CNPJ da sua empresa</span>
            <p>
            
            O módulo de notas contra CNPJ do Blue ERP permite identificar notas emitidas incorretamente ou cancelamentos não comunicados, evitando problemas durante a declaração de movimentações fiscais para a Receita Federal. Com isso, sua contabilidade fica protegida e você tem maior controle sobre as notas fiscais, garantindo uma gestão fiscal mais segura e organizada.
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

        <p>
       
        Com o Blue ERP, você tem acesso a módulos completos para o controle do fluxo de caixa, projeções de receitas e despesas, centros de custos e planos de contas, permitindo uma gestão financeira precisa e eficiente. Essas ferramentas ajudam a organizar sua administração financeira, garantindo que você aloque o capital da empresa de forma estratégica. O sistema contribui para a redução de custos e otimização de recursos, apoiando o crescimento sustentável e a tomada de decisões mais assertivas.</p>

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