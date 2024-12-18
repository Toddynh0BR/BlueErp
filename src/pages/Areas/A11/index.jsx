import * as S from "./style";
import React, { useRef, useEffect } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";

import { GoShieldCheck } from "react-icons/go";

import Back from "../assets/back1.svg";

import Image1 from "../assets/servicos-de-engenharia-gestao-completa.png";
import Image2 from "../assets/t.svg";
import Image3 from "../assets/ce3.svg";
import Image4 from "../assets/v3.svg";
import Image5 from "../assets/v4.svg";

import Image6 from "../assets/servicos-de-engenharia-ordens-de-servicos.svg";
import Image7 from "../assets/consultoria-empresarial-sige-cloud-contrato.svg";
import Image8 from "../assets/gestao-financeira-sige-cloud.svg";
import Image9 from "../assets/gestao-fiscal-sige-cloud-servicos.svg";


export function A11(){
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
        Sistema de Gestão para <strong> Serviços de Engenharia </strong>

        </h2>
          
        <ul>
<li>
   <GoShieldCheck/>Cadastro ilimitado de serviços;
</li>
<li>
  <GoShieldCheck/>Criação e personalização de contratos;
</li>
<li>
  <GoShieldCheck/>Emissão de notas fiscais de serviço;
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
         <strong>Gestão de Serviços
</strong>
         <img src={Image2} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section1Ref)}>
            <p> Cadastro ilimitado de Serviços


</p>
          </li>

          <li onClick={() => handleScrollToSection(section1Ref)}>
            <p>Cadastro ilimitado de Ordens de Serviços</p>
          </li>

          <li onClick={() => handleScrollToSection(section1Ref)}>
           
            <p>Acompanhamento dos Técnicos</p>
          </li>
         </ul>
        </div>

        <div className="box b2">
         <div className="left">
         <strong>Gestão de contratos


</strong>
         <img src={Image3} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>Tipos de contratos


</p>
          </li>

          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>Criação do contrato</p>
          </li>

          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>Campos personalizados</p>
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
    <span>Gestão de serviços</span>

    <h4>
      Quero organizar minha <strong>gestão de Serviços</strong>
    </h4>

    <p>
      Implementar um software para a <strong>prestação de serviço</strong> é fundamental para empresas que buscam formas de crescer com suporte e estrutura para <strong>controlar serviços</strong>, vendas, contratos e todo tipo de negociação. No BLUE ERP você encontra ferramentas para aumentar sua <strong>produtividade</strong> e alavancar seu faturamento.
    </p>

    <button onClick={() => abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
  </div>
</S.Main3>

<S.Main4 data-color={false}>
  <h2>
    <strong>Gerencie seus serviços</strong> de um jeito simples!
  </h2>

  <div className="texts">
    <div className="text">
      <span>Cadastro ilimitado de Serviços</span>
      <p>
        Tenha total liberdade para cadastrar todos os <strong>serviços prestados</strong> por sua empresa de Engenharia de acordo com a <strong>legislação vigente</strong>, já discriminando impostos, a classificação do serviço e o código. Esse cadastro completo do seu serviço fará com que o processo de <strong>emissão de notas</strong> seja mais automatizado, aumentando a eficiência da sua empresa.
      </p>
    </div>

    <div className="text">
      <span>Cadastro ilimitado de Ordens de Serviços</span>
      <p>
        Ganhe agilidade e eficiência cadastrando <strong>ordens de serviço</strong> no BLUE ERP. O sistema preenche os documentos automaticamente com os dados do <strong>cliente cadastrado</strong> e você pode incluir todas as informações desejadas, podendo <strong>agendar serviços</strong>, imprimir ou enviar a OS por e-mail para o cliente.
      </p>
    </div>

    <div className="text">
      <span>Acompanhamento dos Técnicos</span>
      <p>
        Cadastre todos os seus técnicos e cada um deles terá autonomia para criar o seu próprio <strong>laudo</strong> para cada OS, podendo imprimir essas informações de forma <strong>personalizada</strong>. Além disso, você pode acompanhar a <strong>performance</strong> e o andamento dos serviços realizados por cada membro da sua equipe técnica.
      </p>
    </div>
  </div>

  <button onClick={() => abrirNovaAba('https://site.blueerp.com.br/ativacao')}>
    Experimente
  </button>
</S.Main4>

<S.Main3 ref={section2Ref}>
  <div className="left">
    <span>Gestão de contratos</span>

    <h4>
      Quero uma <strong>gestão de contratos automatizada</strong>
    </h4>

    <p>
      Para quem trabalha com a <strong>prestação de serviços</strong>, como por exemplo, as empresas prestadoras de serviços de engenharia que atendem outras empresas ou até mesmo clientes finais, é comum trabalhar com <strong>contratos</strong> para cada projeto.
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
      <span>Tipos de Contratos</span>
      <p>
        Uma das grandes vantagens do Blue ERP é a possibilidade de criar <strong>tipos de contratos personalizados</strong>. Em uma empresa que oferece serviços de engenharia, sabemos que existem diversas modalidades de <strong>serviços prestados</strong>, como consultoria, supervisão de obras, construção e desenvolvimento de projetos. Pensando nisso, nosso ERP permite que você configure <strong>tipos de contratos específicos</strong> para cada tipo de serviço.
      </p>
    </div>

    <div className="text">
      <span>Criação do Contrato</span>
      <p>
        Com os tipos de contratos já configurados no sistema, fica muito mais simples <strong>gerar seus contratos</strong>. É possível definir o contratante, as datas de início e término do contrato, o <strong>valor total</strong> e das parcelas, além da comissão do técnico ou vendedor. Assim, ao gerar o contrato para impressão, todos os dados inseridos serão automaticamente preenchidos, acelerando consideravelmente o processo.
      </p>
    </div>

    <div className="text">
      <span>Campos Personalizados</span>
      <p>
        O Blue ERP oferece uma variedade de campos padrão para preencher no contrato. No entanto, se você precisar adicionar informações extras que devem ser armazenadas no sistema e também aparecer na impressão do contrato, nós pensamos em tudo para você! Com o módulo de <strong>atributos</strong>, você pode criar campos <strong>personalizados</strong> e específicos para registrar as informações que desejar.
      </p>
    </div>
  </div>

  <button onClick={() => abrirNovaAba('https://site.blueerp.com.br/ativacao')}>
    Experimente
  </button>
</S.Main4>

<S.Main3 ref={section3Ref}>
  <div className="left">
    <img src={Image8} alt="" />
  </div>

  <div className="right">
    <span>Gestão Financeira</span>

    <h4>
      Quero <strong>gerenciar o financeiro</strong> da minha empresa
    </h4>

    <p>
      Com o Blue ERP, você conta com módulos completos para gerenciar o <strong>fluxo de caixa</strong>, realizar projeções de receitas e despesas, controlar centros de custos e organizar <strong>planos de contas</strong>, permitindo uma gestão financeira eficiente. Dessa forma, você pode otimizar o uso do capital da sua empresa, reduzir custos e maximizar os recursos para impulsionar o crescimento do negócio.
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
      <span>Faturamento em Lote</span>
      <p>
        Com essa funcionalidade, em apenas três passos simples, você pode faturar várias ordens de serviço, emitir as respectivas <strong>notas fiscais</strong> de serviço, gerar boletos e enviá-los diretamente por e-mail aos seus clientes. Tudo isso em um único processo! Basta configurar os dados no sistema Blue ERP e esse procedimento tornará o dia a dia da sua empresa muito mais ágil e eficiente.
      </p>
    </div>

    <div className="text">
      <span>Faturamento Parcial de Ordens de Serviço</span>
      <p>
        Quando se trata de flexibilidade na gestão financeira, o Blue ERP é a solução! Outro recurso valioso do nosso módulo financeiro é a possibilidade de <strong>faturar ordens de serviço</strong> de maneira parcial. Basta acessar a ordem de serviço, selecionar o valor pago, e o status será automaticamente atualizado no seu sistema financeiro, facilitando ainda mais o controle.
      </p>
    </div>

    <div className="text">
      <span>Gestão de Vendedores e Metas</span>
      <p>
        Gerencie o desempenho da sua equipe técnica, acompanhe as ordens de serviço realizadas, o lançamento de <strong>comissões</strong> e o cumprimento das metas estabelecidas. Você também pode controlar os dados a que seus técnicos terão acesso, por meio do sistema de <strong>permissões de usuários ativos</strong>, garantindo total controle sobre as informações no seu sistema.
      </p>
    </div>
  </div>

  <button onClick={() => abrirNovaAba('https://site.blueerp.com.br/ativacao')}>
    Experimente
  </button>
</S.Main4>

<S.Main3 ref={section4Ref}>
  <div className="left">
    <span>Gestão Fiscal</span>

    <h4>
      Quero uma <strong>gestão fiscal completa</strong>
    </h4>

    <p>
      Com o nosso sistema para emissão de <strong>Nota Fiscal de Serviço</strong> Eletrônica (NFS-e), você pode integrar ordens de serviço e contratos e gerar seus documentos fiscais rapidamente, com apenas alguns cliques. E o melhor, o Blue ERP já conta com integração com mais de 1.200 municípios e está em constante evolução para oferecer as melhores ferramentas para a sua empresa.
    </p>

    <button onClick={() => abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
  </div>

  <div className="right">
    <img src={Image9} alt="" />
  </div>

  <img src={Back} alt="" className="bottom" />
</S.Main3>


      <S.Main4 data-color={true}>
        <h2><strong>Gerenciamento centralizado </strong> e as mercadorias no lugar certo!</h2>

        <div className="texts">
          <div className="text">
            <span> Nota Fiscal de Serviço para Múltiplas Ordens de Serviço</span>
            <p>
           
Com o recurso de faturamento em lote, além de facilitar o processo financeiro da sua empresa, ele também otimiza o processo fiscal! Agora, você pode emitir NFS-e para diversos clientes diferentes com apenas um clique. Sabemos que a parte fiscal pode ser burocrática, então por que não simplificar? O Blue ERP torna tudo mais fácil e rápido!
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