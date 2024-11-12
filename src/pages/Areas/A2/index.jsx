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
        <span>
        Agenda de tarefas
        </span>

        <h4>
        Quero controlar minha 
        <strong> agenda de tarefas
        </strong>
        </h4>

        <p>
        O Blue ERP oferece integração com as ferramentas do Google, proporcionando mais facilidade no seu dia a dia. Essa integração permite gerenciar as tarefas dos colaboradores, como reuniões e visitas aos clientes, de maneira organizada e eficiente.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

      
      </S.Main3>

      <S.Main4 data-color={false}>
        <h2><strong>
Organize suas tarefas </strong> de um jeito simples!
</h2>

        <div className="texts">
          <div className="text">
            <span>Integração com o Google Apps</span>
            <p>
           
            Para realizar a integração, é necessário que você possua uma conta Google registrada com o mesmo e-mail do seu usuário no Blue ERP. Após isso, os arquivos registrados no Blue ERP serão facilmente compartilhados com o Google Drive, trazendo mais praticidade ao seu dia a dia.
            </p>
          </div>

          <div className="text">
            <span> Calendário de Tarefas</span>
            <p>
            
           
            O Blue ERP oferece uma agenda de tarefas que pode ser sincronizada com o Google Agenda, caso esteja configurada no sistema. No processo de agendamento, é possível definir tarefas e lembretes para os colaboradores da sua organização, ajudando a manter um controle eficiente das atividades.
            </p>
          </div>

          <div className="text">
            <span> Lembretes e Compromissos do Módulo CRM</span>
            <p>
           
            Para empresas de consultoria que utilizam o módulo CRM para gerenciar oportunidades de negócio, os compromissos de interação com os clientes também podem ser convertidos em tarefas no calendário. Esse recurso proporciona uma visão panorâmica do relacionamento com seus clientes, facilitando a gestão e o acompanhamento de cada etapa.
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
       Gestão financeira
        </span>

        <h4>
        Quero 
        <strong> gerenciar o financeiro
        </strong>
        </h4>

        <p>
        Com o Blue ERP, você dispõe de módulos para controlar o fluxo de caixa, realizar projeções de receitas e despesas, gerenciar centros de custos e planos de contas, proporcionando uma gestão financeira organizada. Isso garante que o capital da sua empresa seja investido de forma eficiente, reduzindo custos e otimizando recursos para o crescimento sustentável do negócio.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
       <img src={Image7} alt="" />
       
       </div>

       <img src={Back} alt="" className="bottom"/>
      </S.Main3>

      <S.Main4 data-color={true}>
        <h2><strong>Descomplique!</strong> Gerencie seu
        financeiro de forma simples!</h2>

        <div className="texts">
          <div className="text">
            <span>           
            Geração de Boletos e Credenciadora</span>
            <p>

Além de emitir boletos bancários, o Blue ERP oferece o recurso Blue Bank, que automatiza a geração de boletos, além de permitir recebimentos via cartão de crédito e débito, com a facilidade do envio de links de pagamento.
            </p>
          </div>

          <div className="text">
            <span>Conciliação Bancária por OFX</span>
            <p>
            
            
            
            A conciliação bancária via arquivo OFX é essencial para importar transações financeiras com precisão, evitando divergências de saldo ou erros de interpretação de dados. O Blue ERP permite essa importação, garantindo a precisão dos dados financeiros da sua empresa.
            </p>
          </div>

          <div className="text">
            <span>  Cobrança de Clientes Inadimplentes</span>
            <p>
            
          
            Manter informações atualizadas sobre o comportamento de pagamento dos clientes é essencial para reduzir a inadimplência. Com o Blue ERP, você pode gerenciar clientes devedores e manter contato direto com eles por meio de e-mails automáticos, facilitando a comunicação e o acompanhamento das cobranças.
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
        Gestão de contratos e prestação de serviços
        </span>

        <h4>
        Quero uma
        <strong> gestão de contratos 
        </strong>
        automatizada
        </h4>

        <p>
        Para empresas de consultoria que atendem outras empresas ou clientes finais, é comum formalizar cada projeto com um contrato específico. Além da criação de contratos, o Blue ERP oferece uma funcionalidade completa para o gerenciamento de prestação de serviços por meio da criação de ordens de serviço, facilitando o acompanhamento de cada etapa do processo de consultoria.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

      
      </S.Main3>

      <S.Main4 data-color={false}>
        <h2><strong>Para você ter mais controle </strong> sobre seus negócios!</h2>

        <div className="texts">
          <div className="text">
            <span>  Tipos de Contratos</span>
            <p>
            
          
            Um dos grandes benefícios do Blue ERP é a possibilidade de criar tipos de contratos personalizados. Em uma empresa de consultoria empresarial, os serviços prestados são variados, como consultoria, supervisão de obras, construção e desenvolvimento de projetos. Pensando nisso, o ERP permite que você crie contratos específicos para cada tipo de serviço.
            </p>
          </div>

          <div className="text">
            <span> Criação do Contrato</span>
            <p>
            
           
            Com os tipos de contratos previamente configurados no sistema, a geração de contratos ficou mais ágil. É possível definir o contratante, as datas de vigência, o valor total e das parcelas, além da comissão do técnico ou vendedor. Ao imprimir o contrato, todos os dados configurados são inseridos automaticamente, otimizando o processo.


            </p>
          </div>

          <div className="text">
            <span> Controle de Ordens de Serviço</span>
            <p>
           
Ganhe agilidade e eficiência ao cadastrar ordens de serviço no Blue ERP. O sistema preenche automaticamente os documentos com os dados do cliente, permitindo incluir informações detalhadas, agendar serviços, e até imprimir ou enviar a OS por e-mail para o cliente, facilitando o acompanhamento e organização do serviço prestado.



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
        <strong> gestão fiscal completa
        </strong>

        </h4>

        <p>
       
Com o sistema de emissão de Nota Fiscal de Serviço Eletrônica (NFS-e) do Blue ERP, é possível integrar ordens de serviço e contratos, permitindo a emissão de documentos fiscais de forma rápida, com apenas alguns cliques. E você não precisa se preocupar: o Blue ERP oferece integração com mais de 1.200 municípios, sempre evoluindo para proporcionar as melhores ferramentas para sua empresa.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
       <img src={Image9} alt="" />
       
       </div>

       <img src={Back} alt="" className="bottom"/>
      </S.Main3>

      <S.Main4 data-color={true}>
        <h2><strong>Descomplique! </strong> Faça a gestão fiscal mais simples e organizada com BLUE ERP.</h2>

        <div className="texts">
          <div className="text">
            <span> Nota Fiscal de Serviço para Múltiplas Ordens de Serviço</span>
            <p>
            
           
            O recurso de faturamento em lote no Blue ERP facilita não só o processo financeiro, mas também o fiscal! Agora, emitir NFS-e para vários clientes diferentes com um único clique é muito mais prático. A burocracia fiscal pode ser um desafio, então por que não simplificar?
            </p>
          </div>

          <div className="text">
            <span> Nota Fiscal de Serviço através de Contratos</span>
            <p>
            
           
Se você utiliza contratos personalizados, o Blue ERP permite a emissão de NFS-e diretamente pelo faturamento do contrato. Com essa funcionalidade, você pode emitir documentos fiscais de forma rápida e segura, facilitando ainda mais a gestão dos serviços prestados.
            </p>
          </div>

          <div className="text">
            <span>Nota Fiscal de Serviço de Forma Avulsa</span>
            <p>
           
            
            Além das emissões vinculadas a ordens de serviço e contratos, o Blue ERP também possibilita a emissão de NFS-e de forma avulsa, sem vínculos específicos. Esse processo é simples e rápido, e em minutos sua NFS-e estará emitida.
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