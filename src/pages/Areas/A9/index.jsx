import * as S from "./style";
import React, { useRef, useEffect } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";

import { GoShieldCheck } from "react-icons/go";

import Back from "../assets/back1.svg";

import Image1 from "../assets/sistema-para-autopecas-sige-cloud.png";
import Image2 from "../assets/a.svg";
import Image3 from "../assets/a2.svg";
import Image4 from "../assets/v3.svg";
import Image5 from "../assets/v4.svg";

import Image6 from "../assets/gerenciar-vendas-sige-cloud-autopecas.svg";
import Image7 from "../assets/gestao-de-estoque-sige-cloud.svg";
import Image8 from "../assets/gestao-financeira-sige-cloud.svg";
import Image9 from "../assets/gestao-fiscal-sige-cloud-servicos.svg";


export function A9(){
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
        Sistema de Gestão para <strong> Mecânicas e Autopeças</strong>




        </h2>
          
        <ul>
<li>
   <GoShieldCheck/>Controle de Ordens de Serviço;
</li>
<li>
  <GoShieldCheck/>Gestão de compras integrada;
</li>
<li>
  <GoShieldCheck/>Controle de equipamentos.
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
         <strong>Gestão de Vendas
</strong>
         <img src={Image2} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section1Ref)}>
            <p> Ordens de Serviços


</p>
          </li>

          <li onClick={() => handleScrollToSection(section1Ref)}>
            <p>Catálogo Virtual</p>
          </li>

          <li onClick={() => handleScrollToSection(section1Ref)}>
           
            <p>Controle de Equipamentos</p>
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
           
            <p>Localização no Depósito


</p>
          </li>

          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>Cadastro de Produtos Similares</p>
          </li>

          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>Gestão de Expedição</p>
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
        <span>
        Quero vender mais
        </span>

        <h4>
        Tenha mais flexibilidade para 
        <strong> comercializar produtos e serviços!</strong>
        </h4>


        <p>
        Ganhe agilidade e eficiência cadastrando ordens de serviço no BLUE ERP. O sistema preenche os documentos automaticamente com os dados do cliente cadastrado, e você pode incluir todas as informações que desejar, além de agendar serviços, imprimir ou enviar a OS por e-mail para o cliente.


        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

      
      </S.Main3>

      <S.Main4 data-color={false}>
        <h2>
        Soluções para comprar pelo melhor preço, <strong> vender mais e conquistar clientes!</strong>
</h2>

        <div className="texts">
          <div className="text">
            <span>Tabelas de Preços</span>
            <p>
            
            Que tal aplicar tabelas de preços promocionais para mercadorias encalhadas no seu estoque? Você pode, ainda, definir preços diferenciados para compras em grande volume ou para clientes fiéis!
            </p>
          </div>

          <div className="text">
            <span>Módulo de CRM</span>
            <p>
            
            Crie um funil de vendas, acompanhe a evolução das negociações e dos serviços prestados, e tenha um pipeline de oportunidades, conquistando uma visão panorâmica do relacionamento com seus clientes.
            </p>
          </div>

          <div className="text">
            <span>Alterar OS em Massa</span>
            <p>
            
            Realize alterações em massa na listagem de Ordens de Serviço. Você pode: cancelar ordens selecionadas, finalizar ordens selecionadas e modificar o status de várias OS de uma só vez, garantindo mais eficiência na gestão da sua empresa.
            </p>
          </div>
        </div>

        <div className="texts">
          <div className="text">
            <span>Controle de Equipamentos</span>
            <p>
            
Controle os equipamentos presentes em cada ordem de serviço. Para serviços externos, é possível informar todos os equipamentos retirados da empresa para execução do serviço. Em oficinas mecânicas, pode-se registrar em qual veículo de cliente o serviço foi prestado.
            </p>
          </div>

          <div className="text">
            <span>Catálogo Virtual</span>
            <p>
            
            Amplie as oportunidades de venda da sua loja de autopeças, criando um catálogo virtual exclusivo, que pode ser enviado por e-mail e impactar toda a sua carteira de clientes. O cliente pode aprovar a compra com um botão diretamente no e-mail, gerando o pedido no sistema.
            </p>
          </div>

          <div className="text">
            <span> Relatórios de Vendas</span>
            <p>
           
Monitorar as vendas da sua empresa nunca foi tão simples! Com o BLUE ERP, você conta com gráficos de vendas e fluxo de caixa em tempo real, além de rankings de produtos mais vendidos e principais clientes.


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
       Quero gerenciar estoques
        </span>

                <h4>
                Tenha um ERP  
        <strong> multiempresa, multiusuário </strong>
        e com vários depósitos!
        </h4>


        <p>
        Nada melhor que, ao fazer a busca de um produto, o sistema já lhe retorne a localização do item. No BLUE ERP, você pode informar o local exato de armazenamento de cada mercadoria, como corredor ou prateleira.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
       <img src={Image7} alt="" />
       
       </div>

       <img src={Back} alt="" className="bottom"/>
      </S.Main3>

      <S.Main4 data-color={true}>
        <h2><strong>Gestão de estoque e expedição </strong> alinhadas para as suas vendas decolarem!
        </h2>

        <div className="texts">
          <div className="text">
            <span>           
            Cadastro de Produtos Similares</span>
            <p>
           
            Ao incluir os dados de uma venda, os produtos similares também serão carregados, facilitando a oferta de produtos adicionais a seus clientes ou, simplesmente, possibilitando a oferta de uma maior variedade de mercadorias, sem perder tempo buscando uma a uma no sistema.
            </p>
          </div>

          <div className="text">
            <span> Notas de Entrada</span>
            <p>
           
Com o BLUE ERP, você pode cadastrar cada NF de Entrada recebida, a partir de uma ordem de compra ou importando o arquivo XML recebido do seu fornecedor. E assim, o lançamento da nota de entrada é vinculado diretamente ao financeiro e ao estoque.


            </p>
          </div>

          <div className="text">
            <span> Gestão de Expedição</span>
            <p>
           
            Controle a saída de suas mercadorias com o módulo de Gestão de Expedição do BLUE ERP. Com ele, você gerencia a armazenagem, separação, despacho e a efetiva entrega dos itens de qualquer lugar e a qualquer momento.
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

        <h4>
        O seu  
        <strong> planejamento orçamentário </strong>
        ainda é baseado em achismo?
        </h4>


        <p>
        Com essa ferramenta, em 3 passos simples você pode faturar diversos pedidos, emitir suas respectivas notas fiscais, gerar boletos e enviá-los por e-mail a seus clientes. Tudo isso, de uma só vez!
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

      
      </S.Main3>

      <S.Main4 data-color={false}>
        <h2>
        Funcionalidades para ter uma <strong> gestão financeira eficiente!</strong>
</h2>

        <div className="texts">
          <div className="text">
            <span> Relatório de Lucratividade</span>
            <p>
           
            Acompanhe a lucratividade do seu negócio por meio de informações seguras! Disponibilizamos um poderoso relatório que considera custos e faturamento de cada venda, garantindo dados reais para a sua tomada de decisão e o seu planejamento financeiro!
            </p>
          </div>

          <div className="text">
            <span> Gestão de vendedores e metas</span>
            <p>
           
            Gerencie a performance da sua equipe comercial, as vendas realizadas, os lançamentos de comissões, bem como o percentual de meta atingido. Você também pode controlar os dados a que seus vendedores terão acesso, através do controle de permissões.
            </p>
          </div>

          <div className="text">
            <span>  Leilão de Fornecedores</span>
            <p>
          
Crie cotações e envie por e-mail a seus fornecedores, que podem preencher os custos da sua solicitação através de um formulário online. Com isso, é só escolher a melhor opção dentro do próprio BLUE ERP e converter essa cotação em uma ordem de compra. Assim, você compra mercadorias sempre pelo melhor preço!


            </p>
          </div>
        </div>

        <div className="texts">
          <div className="text">
            <span> Faturamento em Lote</span>
            <p>
           
            Com essa ferramenta, em 3 passos simples você pode faturar diversos pedidos, emitir suas respectivas notas fiscais, gerar boletos e enviá-los por e-mail a seus clientes. Tudo isso, de uma só vez!
            </p>
          </div>

          <div className="text">
            <span>  Carnês de pagamento</span>
            <p>
           
Se na sua loja você quer oferecer ainda mais comodidade para sua clientela, que tal trabalhar com carnês de pagamento? No BLUE ERP você pode gerar carnês a partir de um pedido/venda, imprimindo documentos referentes a cada uma das parcelas dessa compra. E claro, esse lançamento já fica vinculado ao cadastro do seu cliente.


            </p>
          </div>

          <div className="text">
            <span>Faturamento parcial de pedidos</span>
            <p>
            
            Falou em flexibilidade para a gestão financeira, falou BLUE ERP! Outro benefício do nosso módulo financeiro é que você pode faturar os pedidos como desejar, inclusive, parcialmente. Você acessa o pedido, seleciona o valor pago e automaticamente o status já é atualizado no seu financeiro.
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

        <h4>
       
        <strong>  Chega de passar trabalho </strong>
        com cliente esperando a nota fiscal por burocracias na emissão de uma NF-e ou NFS-e!
        </h4>


        <p>
        Com o nosso sistema para emissão de nota fiscal de serviço eletrônica (NFS-e), é possível integrar ordens de serviço e emitir seus documentos fiscais em instantes com apenas alguns cliques. E não precisa se preocupar, o BLUE ERP possui integração com mais de 1.200 municípios e está sempre avançando para levar as melhores ferramentas à sua empresa.
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
            <span>  Emissão de NFC-e e CF-e SAT</span>
            <p>
           
          
            Para você que realiza vendas para consumidor final, além de todos os recursos financeiros, conte com a emissão de NFC-e ou CF-e SAT. Com o PDV Frente de Caixa moderno e fácil de usar, você pode emitir esses e outros documentos fiscais em instantes, é só começar!
            </p>
          </div>

          <div className="text">
            <span>  Configurações de ICMS</span>
            <p>
           
            No BLUE ERP, damos uma mãozinha para manter sua empresa sempre em dia com o Fisco. Entre as nossas funcionalidades, você conta com campos que permitem configurar valores complexos de ICMS Efetivo, ICMS Desonerado e todas as informações de Substituição Tributária (ST).
            </p>
          </div>

          <div className="text">
            <span> Facilitador de Sped Fiscal</span>
            <p>
           
            Com o recurso de SPED Fiscal do BLUE ERP, você gera o arquivo através das entradas de XML dos fornecedores e saídas de produtos a partir das notas fiscais emitidas, podendo contar com as informações do Bloco K e do Bloco H, para facilitar o departamento fiscal da sua empresa de materiais de construção.
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