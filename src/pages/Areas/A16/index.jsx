import * as S from "./style";
import React, { useRef, useEffect } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";

import { GoShieldCheck } from "react-icons/go";

import Back from "../assets/back1.svg";

import Image1 from "../assets/servicos-eletricos-gestao-completa.png";
import Image2 from "../assets/t.svg";
import Image3 from "../assets/ce.svg";
import Image4 from "../assets/v3.svg";
import Image5 from "../assets/v4.svg";

import Image6 from "../assets/servicos-de-engenharia-ordens-de-servicos.svg";
import Image7 from "../assets/gerencie-a-agenda-das-consultorias.svg";
import Image8 from "../assets/gestao-financeira-sige-cloud.svg";
import Image9 from "../assets/gestao-fiscal-sige-cloud-servicos.svg";


export function A16(){
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
        Sistema de Gestão para <strong> Instalação e Manutenção Elétrica</strong>



        </h2>
          
        <ul>
<li>
   <GoShieldCheck/>Criação e personalização de contratos;
</li>
<li>
  <GoShieldCheck/>Emissão de notas fiscais de serviço;
</li>
<li>
  <GoShieldCheck/>Controle de oportunidades CRM e agenda de compromissos.
</li>        
        </ul>

        <button  onClick={()=> abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
       </div>

       <div className="right">
        <img src={Image1} alt="Image" />
       </div>
       </div>


      </S.Main>

      <S.Main2>
        <div className="box b1">
         <div className="left">
         <strong>Gestão de Serviços e contratos
</strong>
         <img src={Image2} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section1Ref)}>
            <p>Controle de Ordens de Serviços


</p>
          </li>

          <li onClick={() => handleScrollToSection(section1Ref)}>
            <p>Tipos de contratos</p>
          </li>

          <li onClick={() => handleScrollToSection(section1Ref)}>
           
            <p>Criação do contrato</p>
          </li>
         </ul>
        </div>

        <div className="box b2">
         <div className="left">
         <strong>Agenda de tarefas e oportunidades 


</strong>
         <img src={Image3} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>Calendário de tarefa


</p>
          </li>

          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>CRM</p>
          </li>

          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>Lembretes e Compromissos do módulo CRM</p>
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
           
            <p>Cobrança de cliente inadimplente
            </p>
          </li>

          <li onClick={() => handleScrollToSection(section3Ref)}>
           
            <p>
            Conciliação bancária por OFX
            </p>
          </li>
         </ul>
        </div>

        <div className="box b4">
         <div className="left">
         <strong>Gestão fiscal</strong>
         <img src={Image5} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section4Ref)}>
           
            <p>Nota Fiscal de Serviço de múltiplas ordens de serviços


            </p>
          </li>

          <li onClick={() => handleScrollToSection(section4Ref)}>
           
            <p>Nota Fiscal de Serviço através de Contratos</p>
          </li>

          <li onClick={() => handleScrollToSection(section4Ref)}>
           
            <p>Nota Fiscal de Serviço de forma avulsa</p>
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
    <span>Gestão de serviços e contrato</span>

    <h4>
      Quero organizar minha 
      <strong> gestão de Serviços</strong>
    </h4>

    <p>
      Implementar um software de gestão para a prestação de serviços é essencial para empresas que buscam expandir suas operações com o <strong>suporte adequado</strong> e <strong>estrutura para controlar serviços</strong>, vendas, contratos e todas as negociações. No Blue ERP, você encontra <strong>ferramentas robustas</strong> para impulsionar seu faturamento e otimizar seus processos. Afinal, o setor de prestação de serviços é um dos que mais cresce no Brasil, e ter um sistema eficiente é a chave para aproveitar as oportunidades desse mercado em expansão.
    </p>

    <button onClick={() => abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
  </div>
</S.Main3>

<S.Main4 data-color={false}>
  <h2>
    <strong>Gerencie seus serviços </strong> de um jeito simples!
  </h2>

  <div className="texts">
    <div className="text">
      <span>Controle de Ordens de Serviços</span>
      <p>
        Ganhe em agilidade e eficiência ao cadastrar <strong>ordens de serviço</strong> no Blue ERP. O sistema preenche automaticamente os documentos com os dados do cliente já registrado, e você pode incluir todas as informações necessárias, como agendamento de serviços. Além disso, é possível <strong>imprimir ou enviar</strong> a OS por e-mail para o cliente, facilitando a comunicação e o acompanhamento das tarefas.
      </p>
    </div>

    <div className="text">
      <span>Tipos de Contratos</span>
      <p>
        Com o Blue ERP, você pode criar contratos personalizados de acordo com as <strong>necessidades específicas</strong> do seu negócio. Se você atua em instalação e manutenção elétrica, por exemplo, pode configurar diferentes tipos de contratos para serviços como manutenção e instalação de <strong>painéis, máquinas e equipamentos industriais</strong>, garantindo que cada contrato atenda às particularidades de cada serviço.
      </p>
    </div>

    <div className="text">
      <span>Criação do Contrato</span>
      <p>
        Após configurar os tipos de contratos no sistema, a criação de contratos se torna muito mais simples. Você pode definir informações como o contratante, datas de início e término, valores totais e das parcelas, além da <strong>comissão de técnicos</strong> ou vendedores. Com isso, ao imprimir o contrato, os dados previamente cadastrados são automaticamente preenchidos, tornando o processo muito mais rápido e eficiente.
      </p>
    </div>
  </div>

  <button onClick={() => abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
</S.Main4>

<S.Main3 ref={section2Ref}>
  <div className="left">
    <span>Agenda de tarefas e oportunidades</span>

    <h4>
      Quero controlar minha   
      <strong> agenda de tarefas </strong>
      e ter o
      <strong> controle de oportunidades </strong>
    </h4>

    <p>
      O Blue ERP oferece integração com as ferramentas do Google, proporcionando mais facilidade e organização no seu <strong>dia a dia empresarial</strong>. Com essa integração, você pode gerenciar as tarefas dos colaboradores, como reuniões e visitas aos clientes, de forma eficiente e estruturada, garantindo que todas as atividades sejam acompanhadas e realizadas conforme o <strong>planejamento</strong>.
    </p>

    <button onClick={() => abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
  </div>

  <div className="right">
    <img src={Image7} alt="" />
  </div>

  <img src={Back} alt="" className="bottom"/>
</S.Main3>

<S.Main4 data-color={true}>
  <h2><strong>Para você ter mais controle </strong> sobre seus negócios!</h2>

  <div className="texts">
    <div className="text">
      <span>Calendário de Tarefas</span>
      <p>
        O Blue ERP oferece o recurso de <strong>agenda de tarefas integrado ao Google Calendar</strong>, permitindo a sincronização automática caso a Agenda Google tenha sido configurada no sistema. Com esse recurso, você pode definir tarefas e lembretes para os colaboradores da sua organização, garantindo um <strong>controle eficaz</strong> das atividades a serem realizadas e mantendo a produtividade em alta.
      </p>
    </div>

    <div className="text">
      <span>CRM</span>
      <p>
        A ferramenta de oportunidades do Blue ERP registra os contatos realizados com os clientes e tem como objetivo principal auxiliar na <strong>fidelização</strong>, ao entender as necessidades e expectativas de cada cliente. Com isso, sua empresa fica mais organizada e é capaz de identificar e aproveitar as melhores oportunidades de vendas, impulsionando o crescimento e a <strong>satisfação dos clientes</strong>.
      </p>
    </div>

    <div className="text">
      <span>Lembretes e Compromissos do Módulo CRM</span>
      <p>
        Para empresas de instalação e manutenção elétrica que utilizam o módulo de CRM, os compromissos com os clientes podem ser transformados em tarefas no calendário. Esse recurso proporciona uma visão panorâmica do relacionamento com seus clientes, ajudando a gerenciar <strong>interações e garantindo que nenhum compromisso seja perdido</strong>, tornando o processo mais organizado e eficiente.
      </p>
    </div>
  </div>

  <button onClick={() => abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
</S.Main4>

<S.Main3 ref={section3Ref}>
  <div className="left">
    <img src={Image8} alt="" />
  </div>

  <div className="right">
    <span>Gestão Financeira</span>

    <h4>
      Quero  
      <strong> gerenciar o financeiro </strong>
      da minha empresa
    </h4>

    <p>
      Com o Blue ERP, você tem à disposição módulos completos para controlar seu fluxo de caixa, realizar <strong>projeções de receitas e despesas</strong>, e gerenciar centros de custos e planos de contas. Essas ferramentas são essenciais para organizar a gestão financeira da sua empresa, permitindo que você <strong>invista o capital de forma estratégica</strong>, minimize custos e otimize recursos, impulsionando o crescimento do seu negócio.
    </p>

    <button onClick={() => abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
  </div>
</S.Main3>

<S.Main4 data-color={false}>
  <h2>
    <strong>Descomplique! </strong> Gerencie seu
    financeiro de forma simples!
  </h2>

  <div className="texts">
    <div className="text">
      <span>Faturamento em Lote</span>
      <p>
        Com essa funcionalidade, o Blue ERP permite que você faça o faturamento de várias ordens de serviço em apenas três passos simples. É possível emitir as <strong>notas fiscais de serviços</strong>, gerar boletos e enviá-los automaticamente por e-mail aos seus clientes, tudo de uma vez! Após configurar os dados no sistema, o processo se torna mais ágil e simplificado, otimizando o tempo e aumentando a <strong>eficiência na sua empresa</strong>.
      </p>
    </div>

    <div className="text">
      <span> Cobrança de Cliente Inadimplente</span>
      <p>
        Manter um bom relacionamento com os clientes e ter informações atualizadas sobre seus comportamentos de pagamento é crucial para reduzir a inadimplência. O Blue ERP oferece uma ferramenta para gerenciar clientes devedores, permitindo o envio de e-mails automáticos para lembrar ou cobrar os pagamentos, ajudando sua empresa a manter o <strong>controle financeiro em dia</strong>.
      </p>
    </div>

    <div className="text">
      <span> Conciliação Bancária por OFX</span>
      <p>
        A conciliação bancária via OFX é um formato que facilita a importação de dados financeiros, como transações e declarações bancárias. O Blue ERP permite importar arquivos OFX, evitando divergências nos saldos e garantindo que as informações sejam corretamente interpretadas, simplificando o processo de reconciliação e garantindo maior precisão nas finanças da sua empresa.
      </p>
    </div>
  </div>

  <button onClick={() => abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
</S.Main4>

<S.Main3 ref={section4Ref}>
  <div className="left">
    <span>Gestão Fiscal</span>

    <h4>
      Quero uma 
      <strong> gestão fiscal completa </strong>
    </h4>

    <p>
      Com o Blue ERP, você pode emitir notas fiscais de serviço eletrônicas (NFS-e) de forma simples e eficiente. O sistema permite que você emita notas diretamente da plataforma para os seus clientes, automatizando os processos fiscais e garantindo o cumprimento da legislação vigente. Além disso, o Blue ERP é compatível com a <strong>plataforma da prefeitura</strong>, facilitando a gestão fiscal para empresas de prestação de serviços.
    </p>

    <button onClick={() => abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
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
            <span>NFS-e de múltiplas ordens de serviços</span>
            <p>
            
           
            O recurso de faturamento em lote permite emitir NFS-e para vários clientes em um único clique, otimizando o tempo e reduzindo a burocracia do processo fiscal.            </p>
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

        <button onClick={()=> abrirNovaAba('https://site.blueerp.com.br/ativacao')}>
          Experimente
        </button>
      </S.Main4>

      <Footer/>
     </S.Container>
    )
}