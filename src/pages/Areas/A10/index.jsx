import * as S from "./style";
import React, { useRef, useEffect } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";

import { GoShieldCheck } from "react-icons/go";

import Back from "../assets/back1.svg";

import Image1 from "../assets/telefonia-e-comunicacao-gestao-completa.png";
import Image2 from "../assets/t.svg";
import Image3 from "../assets/t2.svg";
import Image4 from "../assets/v3.svg";
import Image5 from "../assets/v4.svg";

import Image6 from "../assets/servicos-de-engenharia-ordens-de-servicos.svg";
import Image7 from "../assets/gerencie-a-agenda-das-consultorias.svg";
import Image8 from "../assets/gestao-financeira-sige-cloud.svg";
import Image9 from "../assets/gestao-fiscal-sige-cloud-servicos.svg";


export function A10(){
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
        ERP para <strong> Telefonia, Comunicação e Provedores</strong>



        </h2>
          
        <ul>
<li>
   <GoShieldCheck/>Controle de interações de oportunidades de negócio CRM;
</li>
<li>
  <GoShieldCheck/>Criação e personalização de contratos;
</li>
<li>
  <GoShieldCheck/>Emissão de boletos e controle de credenciadora.
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
         <strong>Gestão de Serviços e Contatos
</strong>
         <img src={Image2} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section1Ref)}>
            <p> Controle de Ordens de Serviços


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
         <strong>Agenda de Tarefas e controle de oportunidades


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
           
            <p>Pipe CRM</p>
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
           
            <p>Performance dos Técnicos


</p>
          </li>

          <li onClick={() => handleScrollToSection(section3Ref)}>
           
            <p>Faturamento parcial de pedidos
            </p>
          </li>

          <li onClick={() => handleScrollToSection(section3Ref)}>
           
            <p>Relatório de Lucratividade
            </p>
          </li>
         </ul>
        </div>

        <div className="box b4">
         <div className="left">
         <strong>Emissão de Notas Fiscais</strong>
         <img src={Image5} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section4Ref)}>
           
            <p>Emissão de NFSe
            </p>
          </li>

          <li onClick={() => handleScrollToSection(section4Ref)}>
           
            <p>Configurações de ICMS</p>
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
    <span>Gestão de serviços e contrato</span>

    <h4>
      Quero organizar minha <strong>gestão de Serviços</strong>
    </h4>

    <p>
      Implementar um <strong>software para a prestação de serviço</strong> é fundamental para empresas que buscam formas de crescer com suporte e estrutura para controlar <strong>serviços, vendas, contratos</strong> e todo tipo de negociação. No BLUE ERP você encontra ferramentas para aumentar sua produtividade e alavancar seu faturamento.
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
        Ganhe <strong>agilidade e eficiência</strong> cadastrando ordens de serviço no BLUE ERP. O sistema preenche os documentos automaticamente com os dados do cliente cadastrado e você pode incluir todas as <strong>informações desejadas</strong>, podendo agendar serviços, imprimir ou enviar a OS por <strong>e-mail</strong> para o cliente.
      </p>
    </div>

    <div className="text">
      <span>Tipos de Contratos</span>
      <p>
        Um dos diversos benefícios do BLUE ERP é poder criar <strong>tipos de contratos personalizados</strong>! Na empresa de instalação e manutenção elétrica, sabemos que há diversos serviços prestados, como <strong>manutenção</strong> e instalação de painéis, máquinas e equipamentos industriais. Pensando nisso, nosso ERP permite que você crie os tipos de contratos específicos para cada execução.
      </p>
    </div>

    <div className="text">
      <span>Criação do Contrato</span>
      <p>
        Com os tipos de contratos já configurados no sistema, ficou muito mais fácil realizar a <strong>geração do seu contrato</strong>. É possível definir o contratante, as <strong>datas de duração do contrato</strong>, valor total e das parcelas e até a comissão do técnico ou vendedor. Dessa forma, ao imprimir o contrato cadastrado, automaticamente os dados inseridos serão informados na impressão, tornando o processo muito mais <strong>rápido</strong>!
      </p>
    </div>
  </div>

  <button onClick={() => abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
</S.Main4>

<S.Main3 ref={section2Ref}>
  <div className="left">
    <span>Agenda de tarefas e controle de oportunidades</span>

    <h4>
      Quero controlar minha <strong>agenda de tarefas</strong> e ter <strong>o controle de oportunidades</strong>
    </h4>

    <p>
      O BLUE ERP conta com a <strong>integração das ferramentas do Google</strong>. Essa integração traz mais facilidade ao seu dia a dia empresarial, gerindo as <strong>tarefas dos colaboradores</strong>, como compromissos com clientes, de forma organizada. Através do Pipe do BLUE ERP você tem a facilidade de manter sua equipe informada para que aproveitem os <strong>contatos</strong> e você ainda acompanha as negociações em um só lugar.
    </p>

    <button onClick={() => abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
  </div>

  <div className="right">
    <img src={Image7} alt="" />
  </div>

  <img src={Back} alt="" className="bottom" />
</S.Main3>

<S.Main4 data-color={true}>
  <h2>Para você ter mais <strong>controle sobre seus negócios!</strong></h2>

  <div className="texts">
    <div className="text">
      <span>Calendário de Tarefa</span>
      <p>
        O BLUE ERP oferece o recurso de <strong>agenda de tarefas</strong> que pode ser sincronizada com a <strong>Agenda Google</strong>, caso essa tenha sido configurada no sistema. Nesse processo de agendamento, é possível definir <strong>tarefas e lembretes</strong> dos colaboradores da sua organização, com o intuito de manter um melhor controle das atividades a serem realizadas.
      </p>
    </div>

    <div className="text">
      <span>CRM</span>
      <p>
        A ferramenta de <strong>oportunidades</strong> registra os contatos realizados com os clientes e seu objetivo principal é auxiliar na <strong>fidelização de clientes</strong>, através do entendimento de suas necessidades e expectativas. Com isso, sua empresa ficará mais organizada e irá identificar e aproveitar as melhores <strong>oportunidades de venda</strong>!
      </p>
    </div>

    <div className="text">
      <span>Pipe CRM</span>
      <p>
        Com o <strong>Pipe do BLUE ERP</strong>, é fácil manter sua equipe focada nas oportunidades de maior valor. Você pode gerenciar seu Pipe alinhado aos seus negócios para que as equipes de vendas priorizem os <strong>prospects existentes</strong> e potenciais clientes mais importantes.
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
    <span>Quero gerenciar meu financeiro</span>

    <h4>
      Quero <strong>gerenciar o financeiro</strong> da minha empresa
    </h4>

    <p>
      Com essa ferramenta, em 3 passos simples você pode <strong>faturar diversos pedidos</strong>, emitir suas respectivas <strong>notas fiscais</strong>, gerar boletos e enviá-los por <strong>e-mail</strong> a seus clientes. Tudo isso, de uma só vez!
    </p>

    <button onClick={() => abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
  </div>
</S.Main3>

<S.Main4 data-color={false}>
  <h2>
    <strong>Descomplique!</strong> Gerencie seu financeiro de forma simples!
  </h2>

  <div className="texts">
    <div className="text">
      <span>Geração de Boletos e de Credenciadora</span>
      <p>
        Além de ser possível emitir boletos no BLUE ERP pela sua conta bancária, temos o recurso <strong>BLUE Bank</strong> que conta com a automação de processos como a <strong>geração de boletos</strong> e recebimentos no cartão de crédito e débito, além do envio de <strong>links de pagamento</strong>.
      </p>
    </div>

    <div className="text">
      <span>Cobrança de Cliente Inadimplente</span>
      <p>
        Conhecer bem o cliente e ter informações atualizadas sobre o seu <strong>comportamento de pagamento</strong> são medidas fundamentais para reduzir a inadimplência. Com o BLUE ERP, será possível gerenciar os <strong>clientes devedores</strong> e manter o contato com cada um deles diretamente por envio de <strong>e-mails automáticos</strong>!
      </p>
    </div>

    <div className="text">
      <span>Faturar Pedidos em Lote</span>
      <p>
        Com essa ferramenta, em 3 passos simples você pode <strong>faturar diversos pedidos</strong>, emitir suas respectivas <strong>notas fiscais</strong>, gerar boletos e enviá-los por <strong>e-mail</strong> a seus diferentes clientes. Tudo isso, de uma só vez! Basta realizar a configuração dos dados no sistema BLUE ERP e esse processo facilitará os processos em sua empresa.
      </p>
    </div>
  </div>

  <button onClick={() => abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
</S.Main4>

<S.Main3 ref={section4Ref}>
  <div className="left">
    <span>Quero gestão fiscal completa</span>

    <h4>
      Quero uma <strong>gestão fiscal completa</strong>
    </h4>

    <p>
      Com o nosso sistema para emissão de <strong>nota fiscal de serviço eletrônica</strong> (NFS-e), é possível integrar ordens de serviço e emitir seus documentos fiscais em instantes com apenas alguns <strong>cliques</strong>. E não precisa se preocupar, o BLUE ERP possui integração com mais de 1.200 municípios e está sempre avançando para levar as melhores <strong>ferramentas</strong> à sua empresa.
    </p>

    <button onClick={() => abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
  </div>

  <div className="right">
    <img src={Image9} alt="" />
  </div>
</S.Main3>

      <S.Main4 data-color={true}>
        <h2><strong>Descomplique! </strong> Faça a gestão fiscal mais simples e organizada com a BLUE ERP.</h2>

        <div className="texts">
          <div className="text">
            <span>Nota Fiscal de Serviço de Múltiplas Ordens de Serviço</span>
            <p>
            
            O recurso de faturamento em lote, além de auxiliar no processo financeiro da sua empresa, também auxilia no processo fiscal! Ficou muito mais fácil emitir NFS-e de vários clientes diferentes em apenas um clique. A parte fiscal de uma empresa é considerada muito burocrática, então porque não facilitar, não é mesmo?!
            </p>
          </div>

          <div className="text">
            <span> Nota Fiscal de Serviço Através de Contratos</span>
            <p>
           
            Para você que realiza a geração de contratos, além de todos os recursos para otimizar a criação do tipo de contrato personalizado, conte com a nossa emissão de NFS-e diretamente através do faturamento do contrato! Você pode emitir esse e outros documentos fiscais em instantes, é só começar!
            </p>
          </div>

          <div className="text">
            <span>Nota Fiscal de Serviço de Forma Avulsa</span>
            <p>
            
            Além de poder emitir NFS-e através de ações já realizadas no sistema, como ordens de serviço e contratos, há a possibilidade de emitir notas fiscais de serviços sem vínculos, somente o documento fiscal, de forma avulsa. Esse processo é ágil e fácil e, em minutos, a NFS-e já estará emitida!
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