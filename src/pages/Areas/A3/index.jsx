import * as S from "./style";
import React, { useRef, useEffect } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";

import { GoShieldCheck } from "react-icons/go";

import Back from "../assets/back1.svg";

import Image1 from "../assets/sistema-para-assistencia-sige-cloud.png";
import Image2 from "../assets/li.svg";
import Image3 from "../assets/li2.svg";
import Image4 from "../assets/li3.svg";
import Image5 from "../assets/li4.svg";

import Image6 from "../assets/gerenciar-servicos-sige-cloud.svg";
import Image7 from "../assets/gerenciar-vendas-sige-cloud-assistencia.svg";
import Image8 from "../assets/gestao-financeira-sige-cloud.svg";
import Image9 from "../assets/gestao-fiscal-sige-cloud-servicos.svg";


export function A3(){
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
        Sistema de Gestão para Assistência Técnica e Loja de Informática!




        </h2>
          
        <ul>
<li>
   <GoShieldCheck/> Busca de produtos por Número de Série;
</li>
<li>
  <GoShieldCheck/> Controle de Ordens de Serviço;
</li>
<li>
  <GoShieldCheck/> Emissão de Nota Fiscal de Serviço.
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
         <strong>Gestão de serviços


</strong>
         <img src={Image2} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section1Ref)}>
            <p>Controle interno de OS

</p>
          </li>

          <li onClick={() => handleScrollToSection(section1Ref)}>
            <p>Cadastro ilimitado de Serviços</p>
          </li>

          <li onClick={() => handleScrollToSection(section1Ref)}>
           
            <p>Gestão de técnicos</p>
          </li>
         </ul>
        </div>

        <div className="box b2">
         <div className="left">
         <strong>Gestão de Vendas e Estoque


</strong>
         <img src={Image3} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>Alterar OS em massa

</p>
          </li>

          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>Sistema CRM</p>
          </li>

          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>Estoque de produtos com nº de série</p>
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
           
            <p>Lançamentos recorrentes
            </p>
          </li>

          <li onClick={() => handleScrollToSection(section3Ref)}>
           
            <p>Fluxo de Caixa profissional</p>
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
           
            <p>Emissão de NFe</p>
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
        <span>
        Quero organizar minha gestão de Serviços
        </span>

        <p>
        Implementar um software para assistência técnica é essencial para empresas que desejam crescer com suporte e estrutura para gerenciar serviços, vendas, contratos e diversos tipos de negociações. No Blue ERP, você encontra ferramentas que aumentam a produtividade e ajudam a impulsionar o faturamento, oferecendo a estrutura necessária para expandir seus negócios de forma eficiente e organizada.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

      
      </S.Main3>

      <S.Main4 data-color={false}>
        <h2><strong>
        Processos automatizados</strong> para gerenciar a sua assistência técnica!
</h2>

        <div className="texts">
          <div className="text">
            <span>   Cadastro Ilimitado de Serviços</span>
            <p>
         
Tenha a liberdade de cadastrar todos os serviços prestados por sua empresa conforme as normas vigentes, incluindo informações detalhadas sobre impostos, classificação de serviço e código específico.


            </p>
          </div>

          <div className="text">
            <span> Controle de Ordens de Serviços</span>
            <p>
            
            
            Agilize e organize o atendimento ao cliente com o controle de ordens de serviço no Blue ERP. O sistema preenche automaticamente os documentos com os dados cadastrados do cliente, permitindo que você adicione informações detalhadas, agende serviços, imprima ou envie a OS por e-mail para o cliente.
            </p>
          </div>

          <div className="text">
            <span> Acompanhamento dos Técnicos</span>
            <p>
           
            Cadastre seus técnicos e ofereça a cada um autonomia para criar laudos personalizados para cada OS, com a opção de impressão. Além disso, acompanhe o desempenho e o progresso dos serviços realizados por cada membro da equipe técnica, garantindo eficiência e controle nas operações.
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
       Quero vender mais e gerenciar estoques
        </span>

        <p>
        Para impulsionar suas vendas, é essencial contar com ferramentas que aumentem a visibilidade da sua empresa de serviços. Com a automação de processos, fica mais fácil para os clientes acessarem os produtos que você oferece, ao mesmo tempo em que o controle de mercadorias no estoque se torna mais prático e eficiente.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
       <img src={Image7} alt="" />
       
       </div>

       <img src={Back} alt="" className="bottom"/>
      </S.Main3>

      <S.Main4 data-color={true}>
        <h2><strong>Processos automatizados </strong> para gerenciar a sua assistência técnica!
        </h2>

        <div className="texts">
          <div className="text">
            <span>           
            Tabelas de Preços:</span>
            <p>
            Aplique preços diferenciados, como promoções para mercadorias encalhadas ou descontos para compras em grande volume ou para clientes fidelizados, facilitando a gestão do seu estoque.
            </p>
          </div>

          <div className="text">
            <span>Catálogo Virtual:</span>
            <p>
            
            
             Crie um catálogo virtual exclusivo para sua loja, que pode ser enviado por e-mail para seus clientes. Eles podem aprovar compras diretamente no e-mail, com o pedido sendo automaticamente atualizado no sistema.
            </p>
          </div>

          <div className="text">
            <span> Módulo de CRM:</span>
            <p>
            
            Organize e gerencie sua carteira de clientes com um módulo de CRM completo. Visualize gráficos atualizados de vendas e negociações, crie funis de vendas e tenha uma visão clara das oportunidades de negócios e ações de marketing.
            </p>
          </div>
        </div>

        <div className="texts">
          <div className="text">
            <span>           
            Cadastro ilimitado de serviços:</span>
            <p>
             Registre todos os serviços que sua empresa oferece, conforme a legislação, já com impostos, classificação e código de cada serviço.
            </p>
          </div>

          <div className="text">
            <span>Controle de Ordens de Serviço:</span>
            <p>
            
            
            
             Ganhe agilidade no cadastro de ordens de serviço, com preenchimento automático dos dados do cliente. Agende, imprima ou envie a ordem por e-mail para o cliente, tudo de forma simplificada.
            </p>
          </div>

          <div className="text">
            <span> Acompanhamento dos Técnicos:</span>
            <p>
            
            Cadastre técnicos e permita que cada um crie e imprima laudos personalizados para suas ordens de serviço. Além disso, você pode monitorar a performance e o andamento dos serviços de cada membro da sua equipe.
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
        Quero gerenciar meu financeiro
        </span>

        <p>
        Com o BLUE ERP, você conta com módulos para gerenciar seu fluxo de caixa, realizar projeções de receitas e despesas, definir centros de custos e estruturar planos de contas, proporcionando uma organização eficaz da sua gestão financeira. Isso assegura que o capital da sua empresa seja utilizado da maneira mais eficiente, ajudando a reduzir custos e otimizar recursos para impulsionar o crescimento do seu negócio.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

      
      </S.Main3>

      <S.Main4 data-color={false}>
        <h2>Funcionalidades para ter uma <strong> gestão financeira eficiente! </strong></h2>

        <div className="texts">
          <div className="text">
            <span>Gestão de Vendedores e Metas</span>
            <p>
            

Gerencie o desempenho da sua equipe de vendas, controlando as vendas realizadas, os lançamentos de comissões e o percentual de metas atingidas. Você também pode administrar as permissões de acesso dos vendedores aos dados, garantindo maior controle sobre as informações.
            </p>
          </div>

          <div className="text">
            <span>  Relatório de Lucratividade</span>
            <p>
          
Acompanhe a lucratividade do seu negócio com dados seguros e precisos! Oferecemos um relatório robusto que leva em conta os custos e faturamento de cada venda, proporcionando informações reais para facilitar suas decisões e o planejamento financeiro.
            </p>
          </div>

          <div className="text">
            <span>Lançamentos Recorrentes</span>
            <p>
            
            Registre pagamentos recorrentes no momento da cobrança e elimine a preocupação com o controle manual. Com os dados cadastrados, é possível gerar boletos e enviá-los diretamente aos seus clientes. Nosso calendário financeiro também avisa quando o vencimento se aproxima.
            </p>
          </div>
        </div>

        <div className="texts">
          <div className="text">
            <span>Faturamento em Lote</span>
            <p>
            
Com esta ferramenta, você pode faturar múltiplos pedidos em apenas três etapas simples: emitir as respectivas notas fiscais, gerar os boletos e enviá-los por e-mail aos seus clientes – tudo de uma vez!
            </p>
          </div>

          <div className="text">
            <span>Faturamento Parcial de Pedidos</span>
            <p>
            
A flexibilidade é uma das grandes vantagens do BLUE ERP! Nosso módulo financeiro permite que você fature os pedidos da forma que preferir, inclusive de forma parcial. Basta acessar o pedido, selecionar o valor pago e o status será automaticamente atualizado no seu financeiro.
            </p>
          </div>

          <div className="text">
            <span>Gestão de Contratos</span>
            <p>
            
            Para quem presta serviços, como assistências técnicas que atendem outras empresas, o gerenciamento de contratos é essencial. Com o BLUE ERP, você pode criar contratos personalizados, com lançamentos financeiros automáticos e emissão de NFS-e, facilitando sua gestão de forma eficiente.

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
       Quero gestão fiscal completa
        </span>

        <p>

        Com o módulo de Gestão Fiscal do BLUE ERP, a emissão de notas fiscais se torna um processo rápido e descomplicado, permitindo que você e sua equipe tenham mais tempo para oferecer um atendimento de qualidade e conquistar novos clientes. Configure os impostos necessários e emita seus documentos fiscais com a garantia de estar sempre em conformidade com a legislação vigente.
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
            <span>  Emissão de NFS-e</span>
            <p>
          
Com nosso sistema para emissão de Nota Fiscal de Serviço Eletrônica (NFS-e), é possível integrar ordens de serviço e emitir documentos fiscais rapidamente com apenas alguns cliques. E não se preocupe, o BLUE ERP possui integração com mais de 1.200 municípios e está sempre evoluindo para oferecer as melhores ferramentas para sua empresa.
            </p>
          </div>

          <div className="text">
            <span>Emissão de NFC-e e CF-e SAT</span>
            <p>
            
Para empresas que, além de prestar serviços, também comercializam produtos, como muitas assistências técnicas, a emissão de NFC-e ou CF-e SAT é fundamental. Com o PDV e o módulo fiscal do BLUE ERP, você pode emitir esses e outros documentos fiscais de forma ágil, basta começar!
            </p>
          </div>

          <div className="text">
            <span>Configurações de ICMS</span>
            <p>
            
            O BLUE ERP oferece facilidades para manter sua empresa em conformidade com o Fisco. Entre suas funcionalidades, estão campos que permitem configurar valores complexos de ICMS Efetivo, ICMS Desonerado e todas as informações sobre Substituição Tributária (ST).
            </p>
          </div>

          <div className="text">
            <span>Facilitador de SPED Fiscal</span>
            <p>
            
            Com o recurso de SPED Fiscal do BLUE ERP, você gera os arquivos com base nas entradas de XML dos fornecedores e nas saídas de produtos a partir das notas fiscais emitidas, incluindo informações dos Blocos K e H.
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