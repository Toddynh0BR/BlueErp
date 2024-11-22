import * as S from "./style";
import React, { useRef, useEffect } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";

import { GoShieldCheck } from "react-icons/go";

import Back from "../assets/back1.svg";

import Image1 from "../assets/consultoria-empresarial-gestao-completa.png";
import Image2 from "../assets/ce.svg";
import Image3 from "../assets/ce2.svg";
import Image4 from "../assets/ce3.svg";
import Image5 from "../assets/ce4.svg";

import Image6 from "../assets/gerencie-a-agenda-das-consultorias.svg";
import Image7 from "../assets/gestao-financeira-para-empresas-de-consultoria-empresarial.svg";
import Image8 from "../assets/consultoria-empresarial-sige-cloud-contrato.svg";
import Image9 from "../assets/consultoria-empresarial-sige-cloud-fiscal.svg";


export function A2(){
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
        Sistema ERP para <strong> Consultoria Empresarial</strong>
        </h2>
          
        <ul>
<li>
   <GoShieldCheck/> Agenda de tarefas sincronizada com o Google;
</li>
<li>
  <GoShieldCheck/>  Controle de serviços, criação e personalização de contratos;
</li>
<li>
  <GoShieldCheck/>  Emissão de notas fiscais de serviço.  
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
         <strong>Agenda de tarefas


</strong>
         <img src={Image2} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section1Ref)}>
            <p>Integração com o Google Apps</p>
          </li>

          <li onClick={() => handleScrollToSection(section1Ref)}>
            <p>Calendário de tarefas</p>
          </li>

          <li onClick={() => handleScrollToSection(section1Ref)}>
           
            <p>Lembretes e Compromissos do módulo CRM</p>
          </li>
         </ul>
        </div>

        <div className="box b2">
         <div className="left">
         <strong>Gestão financeira


</strong>
         <img src={Image3} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>Geração de boletos e de credenciadora</p>
          </li>

          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>Conciliação bancária por OFX</p>
          </li>

          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>Cobrança de cliente inadimplente</p>
          </li>
         </ul>
        </div>

        <div className="box b3">
         <div className="left">
         <strong>Gestão de contratos e prestação de serviços


</strong>
         <img src={Image4} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section3Ref)}>
           
            <p>Criação do contrato</p>
          </li>

          <li onClick={() => handleScrollToSection(section3Ref)}>
           
            <p>Tipos de contratos
            </p>
          </li>

          <li onClick={() => handleScrollToSection(section3Ref)}>
           
            <p>Controle de Ordens de Serviços</p>
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
    <span>Agenda de tarefas</span>

    <h4>
      Quero controlar minha <strong>agenda de tarefas</strong>
    </h4>

    <p>
      O <strong>Blue ERP</strong> oferece integração com as ferramentas do <strong>Google</strong>, proporcionando mais <strong>facilidade</strong> no seu dia a dia. Essa integração permite gerenciar as tarefas dos colaboradores, como reuniões e visitas aos clientes, de maneira organizada e eficiente.
    </p>

    <button onClick={() => abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
  </div>
</S.Main3>

<S.Main4 data-color={false}>
  <h2>
    <strong>Organize suas tarefas</strong> de um jeito simples!
  </h2>

  <div className="texts">
    <div className="text">
      <span>Integração com o Google Apps</span>
      <p>
        Para realizar a integração, é necessário que você possua uma conta <strong>Google</strong> registrada com o mesmo e-mail do seu usuário no <strong>Blue ERP</strong>. Após isso, os arquivos registrados no <strong>Blue ERP</strong> serão facilmente compartilhados com o Google Drive, trazendo mais praticidade ao seu dia a dia.
      </p>
    </div>

    <div className="text">
      <span>Calendário de Tarefas</span>
      <p>
        O <strong>Blue ERP</strong> oferece uma agenda de tarefas que pode ser sincronizada com o <strong>Google Agenda</strong>, caso esteja configurada no sistema. No processo de agendamento, é possível definir <strong>tarefas</strong> e lembretes para os colaboradores da sua organização, ajudando a manter um controle eficiente das atividades.
      </p>
    </div>

    <div className="text">
      <span>Lembretes e Compromissos do Módulo CRM</span>
      <p>
        Para empresas de consultoria que utilizam o módulo <strong>CRM</strong> para gerenciar oportunidades de negócio, os compromissos de interação com os clientes também podem ser convertidos em <strong>tarefas</strong> no calendário. Esse recurso proporciona uma visão panorâmica do <strong>relacionamento</strong> com seus clientes, facilitando a gestão e o acompanhamento de cada etapa.
      </p>
    </div>
  </div>

  <button onClick={() => abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
</S.Main4>

<S.Main3 ref={section2Ref}>
  <div className="left">
    <span>Gestão financeira</span>

    <h4>
      Quero <strong>gerenciar o financeiro</strong>
    </h4>

    <p>
      Com o <strong>Blue ERP</strong>, você dispõe de módulos para controlar o <strong>fluxo de caixa</strong>, realizar projeções de receitas e despesas, gerenciar centros de custos e planos de contas, proporcionando uma <strong>gestão financeira</strong> organizada. Isso garante que o capital da sua empresa seja investido de forma eficiente, reduzindo custos e otimizando recursos para o crescimento sustentável do negócio.
    </p>

    <button onClick={() => abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
  </div>

  <div className="right">
    <img src={Image7} alt="" />
  </div>

  <img src={Back} alt="" className="bottom" />
</S.Main3>

<S.Main4 data-color={true}>
  <h2>
    <strong>Descomplique!</strong> Gerencie seu financeiro de forma simples!
  </h2>

  <div className="texts">
    <div className="text">
      <span>Geração de Boletos e Credenciadora</span>
      <p>
        Além de emitir boletos bancários, o <strong>Blue ERP</strong> oferece o recurso <strong>Blue Bank</strong>, que automatiza a geração de boletos, além de permitir recebimentos via <strong>cartão de crédito</strong> e débito, com a facilidade do envio de links de pagamento.
      </p>
    </div>

    <div className="text">
      <span>Conciliação Bancária por OFX</span>
      <p>
        A <strong>conciliação bancária</strong> via arquivo OFX é essencial para importar <strong>transações financeiras</strong> com precisão, evitando divergências de saldo ou erros de interpretação de dados. O <strong>Blue ERP</strong> permite essa importação, garantindo a precisão dos dados financeiros da sua empresa.
      </p>
    </div>

    <div className="text">
      <span>Cobrança de Clientes Inadimplentes</span>
      <p>
        Manter informações atualizadas sobre o comportamento de pagamento dos <strong>clientes</strong> é essencial para reduzir a inadimplência. Com o <strong>Blue ERP</strong>, você pode gerenciar <strong>clientes devedores</strong> e manter contato direto com eles por meio de e-mails automáticos, facilitando a comunicação e o acompanhamento das cobranças.
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
    <span>Gestão de contratos e prestação de serviços</span>

    <h4>
      Quero uma <strong>gestão de contratos</strong> automatizada
    </h4>

    <p>
      Para empresas de consultoria que atendem outras empresas ou clientes finais, é comum formalizar cada projeto com um <strong>contrato</strong> específico. Além da criação de contratos, o <strong>Blue ERP</strong> oferece uma funcionalidade completa para o <strong>gerenciamento</strong> de prestação de serviços por meio da criação de ordens de serviço, facilitando o acompanhamento de cada etapa do processo de consultoria.
    </p>

    <button onClick={() => abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
  </div>
</S.Main3>

<S.Main4 data-color={false}>
  <h2>
    <strong>Para você ter mais controle</strong> sobre seus negócios!
  </h2>

  <div className="texts">
    <div className="text">
      <span>Tipos de Contratos</span>
      <p>
        Um dos grandes benefícios do <strong>Blue ERP</strong> é a possibilidade de criar tipos de <strong>contratos personalizados</strong>. Em uma empresa de consultoria empresarial, os <strong>serviços</strong> prestados são variados, como consultoria, supervisão de obras, construção e desenvolvimento de projetos.
      </p>
    </div>

    <div className="text">
      <span>Criação do Contrato</span>
      <p>
        Com os tipos de contratos previamente configurados no sistema, a <strong>geração de contratos</strong> ficou mais ágil. É possível definir o contratante, as datas de vigência, o valor total e das parcelas, além da <strong>comissão</strong> do técnico ou vendedor.
      </p>
    </div>

    <div className="text">
      <span>Controle de Ordens de Serviço</span>
      <p>
        Ganhe <strong>agilidade</strong> e eficiência ao cadastrar <strong>ordens de serviço</strong> no Blue ERP. O sistema preenche automaticamente os documentos com os dados do <strong>cliente</strong>, permitindo incluir informações detalhadas.
      </p>
    </div>
  </div>

  <button onClick={() => abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
</S.Main4>

<S.Main3 ref={section4Ref}>
  <div className="left">
    <span>Gestão Fiscal</span>

    <h4>
      Quero uma <strong>gestão fiscal completa</strong>
    </h4>

    <p>
      Com o sistema de emissão de <strong>Nota Fiscal de Serviço Eletrônica</strong> (NFS-e) do <strong>Blue ERP</strong>, é possível integrar <strong>ordens de serviço</strong> e contratos, permitindo a emissão de documentos fiscais de forma rápida.
    </p>

    <button onClick={() => abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
  </div>

  <div className="right">
    <img src={Image9} alt="" />
  </div>

  <img src={Back} alt="" className="bottom" />
</S.Main3>

<S.Main4 data-color={true}>
  <h2>
    <strong>Descomplique!</strong> Faça a gestão fiscal mais simples e organizada!
  </h2>

  <div className="texts">
    <div className="text">
      <span>Integração com contratos</span>
      <p>
        Ao vincular contratos às notas fiscais no <strong>Blue ERP</strong>, sua empresa ganha mais <strong>controle</strong>. Cada contrato gerado permite a criação automática de documentos fiscais, reduzindo <strong>erros</strong> e simplificando processos.
      </p>
    </div>
  </div>
</S.Main4>
      <Footer/>
     </S.Container>
    )
}