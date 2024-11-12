import * as S from "./style";
import React, { useRef, useEffect } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";

import { GoShieldCheck } from "react-icons/go";

import Back from "../assets/back1.svg";

import Image1 from "../assets/sistema-para-distribuidoras-sige-cloud.png";
import Image2 from "../assets/a2.svg";
import Image3 from "../assets/c2.svg";
import Image4 from "../assets/v3.svg";
import Image5 from "../assets/v4.svg";

import Image6 from "../assets/gestao-de-estoque-sige-cloud.svg";
import Image7 from "../assets/gerenciar-vendas-sige-cloud-assistencia.svg";
import Image8 from "../assets/gestao-financeira-sige-cloud.svg";
import Image9 from "../assets/gestao-fiscal-sige-cloud-servicos.svg";


export function A20(){
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
        Sistema de Gestão para <strong> Atacadistas e Distribuidoras </strong>



        </h2>
          
        <ul>
<li>
   <GoShieldCheck/>Gestão de múltiplos depósitos;
</li>
<li>
  <GoShieldCheck/>Rastreamento de itens na prateleira;
</li>
<li>
  <GoShieldCheck/>Gestão financeira totalmente integrada.
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
         <strong>Gestão de Estoque
</strong>
         <img src={Image2} alt="" className="especial"/>
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section1Ref)}>
            <p>Múltiplos Depósitos


</p>
          </li>

          <li onClick={() => handleScrollToSection(section1Ref)}>
            <p>Endereçamento de estoque</p>
          </li>

          <li onClick={() => handleScrollToSection(section1Ref)}>
           
            <p>Notas de entrada e saída</p>
          </li>
         </ul>
        </div>

        <div className="box b2">
         <div className="left">
         <strong>Gestão de Vendas


</strong>
         <img src={Image3} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>APP de Vendas

</p>
          </li>

          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>Catálogo Virtual</p>
          </li>

          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>
            Módulo CRM</p>
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
           
            <p>Gestão de Vendedores
            </p>
          </li>

          <li onClick={() => handleScrollToSection(section3Ref)}>
           
            <p>
            Contas a receber
            </p>
          </li>
         </ul>
        </div>

        <div className="box b4">
         <div className="left">
         <strong>Emissão de notas fiscais
         </strong>
         <img src={Image5} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section4Ref)}>
           
            <p>Emissão de MDFe


            </p>
          </li>

          <li onClick={() => handleScrollToSection(section4Ref)}>
           
            <p>Configurações de ICMS e ST</p>
          </li>

          <li onClick={() => handleScrollToSection(section4Ref)}>
           
            <p>Facilitador do SPED</p>
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
        Quero gerenciar estoques

        </span>

        <h4> 
        Tenha um ERP  
       <strong>  multiempresa, multiusuário </strong>
       e com vários depósitos!
       </h4>

        <p>
        Geralmente, distribuidoras e atacadistas possuem grandes depósitos com um volume e variedade expressivos de produtos. Com o Blue ERP, não é necessário adquirir uma licença para cada depósito. Em uma única plataforma, você pode cadastrar todos os produtos e gerenciar diferentes locais de armazenamento de forma eficiente, independente e flexível. Isso permite um controle centralizado, sem a necessidade de complicações, facilitando a gestão de estoque de grandes volumes e diferentes tipos de mercadorias de maneira otimizada para o seu negócio.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

      
      </S.Main3>

      <S.Main4 data-color={false}>
        <h2>
        
<strong>Gerenciamento centralizado </strong> e as mercadorias no lugar certo!
</h2>

        <div className="texts">
          <div className="text">
            <span> Lote e Validade</span>
            <p>
           
O cadastro de produtos no Blue ERP oferece seções específicas para controle de lote e validade. Dessa forma, ao gerar um pedido, o sistema mostra as opções de lotes e validades dos produtos, facilitando a escolha correta para cada venda!

            </p>
          </div>

          <div className="text">
            <span> Localização no Depósito</span>
            <p>
           
Nada melhor do que, ao buscar um produto, o sistema já informar a sua localização exata. Com o Blue ERP, você pode registrar o local específico de armazenamento de cada item, como corredor ou prateleira, para facilitar a localização imediata.
            </p>
          </div>

          <div className="text">
            <span> Cadastro de Produtos Similares</span>
            <p>
           
            No Blue ERP, você pode cadastrar cada nota fiscal de entrada recebida, seja através de uma ordem de compra ou importando o arquivo XML do fornecedor. Assim, o lançamento da nota é automaticamente vinculado ao financeiro e ao estoque.
            </p>
          </div>
        </div>

        <div className="texts">
          <div className="text">
            <span>Geração de Etiquetas</span>
            <p>
            
            Com o Blue ERP, você nunca mais enfrentará problemas com volumes faltantes, mercadorias entregues incorretamente ou desorganização. O módulo de expedição gera etiquetas personalizadas para identificar as embalagens conforme a venda e o cliente.
            </p>
          </div>

          <div className="text">
            <span>Gestão de Frota</span>
            <p>
            
            Controlar todos os veículos da sua distribuidora é essencial para reduzir custos e melhorar a eficiência. Com o Blue ERP, você pode acompanhar o abastecimento, trocas de óleo, manutenções, multas e seguros, tudo automatizado com lançamentos financeiros.
            </p>
          </div>

          <div className="text">
            <span>  Relatórios de Logística</span>
            <p>
           
            O Blue ERP oferece uma variedade de relatórios que ajudam a otimizar a compra de insumos, monitorar os valores movimentados em seus estoques e acompanhar o desempenho dos veículos da empresa. Além disso, você pode personalizar esses relatórios conforme as necessidades do seu negócio.
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
       Quero vender mais
        </span>

        <h4> 
        Garanta mais flexibilidade para fazer
       <strong>  vendas diretas ou em consignação!</strong>
       
       </h4>

        <p>
        Sua equipe de representantes comerciais pode gerar pedidos em consignação e ter total controle sobre as saídas consignadas, acompanhando as entregas e os prazos de devolução. Com o Blue ERP, você também pode definir comissões, aplicar descontos e gerenciar o controle de trocas, proporcionando uma gestão eficiente e transparente.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
       <img src={Image7} alt="" />
       
       </div>

       <img src={Back} alt="" className="bottom"/>
      </S.Main3>

      <S.Main4 data-color={true}>
        <h2>
Soluções para comprar pelo melhor preço, <strong> vender mais e conquistar clientes!</strong>
        </h2>

        <div className="texts">
          <div className="text">
            <span>           
                   
Leilão de Fornecedores
            </span>
            <p>

Crie cotações e envie por e-mail para seus fornecedores, que podem preencher os custos da sua solicitação por meio de um formulário online. Com isso, você poderá escolher a melhor opção diretamente no Blue ERP e converter essa cotação em uma ordem de compra, simplificando o processo de aquisição de mercadorias.


            </p>
          </div>

          <div className="text">
            <span> Catálogo Virtual</span>
            <p>
           
            Expanda suas oportunidades de venda criando um Catálogo Virtual exclusivo, que pode ser enviado por e-mail para sua carteira de clientes. Para facilitar ainda mais, o cliente pode aprovar a compra com um simples clique dentro do e-mail, aprovando o pedido automaticamente no sistema.
            </p>
          </div>

          <div className="text">
            <span>Módulo de CRM</span>
            <p>
            
            Com gráficos sempre atualizados, o Blue ERP permite que você crie um funil de vendas, acompanhe a evolução das negociações e tenha um pipeline de oportunidades. Isso proporciona uma visão completa do relacionamento com seus clientes e das ações de marketing, melhorando a gestão e a eficácia da sua equipe comercial.
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
        Seu planejamento é baseado em achismo?  
       <strong>  Potencialize suas receitas </strong>
       com a BLUE ERP.
       </h4>

        <p>
        Com a ferramenta de Faturamento em Lote do Blue ERP, em apenas 3 passos simples, você pode faturar diversos pedidos simultaneamente, emitir as respectivas notas fiscais, gerar boletos e enviá-los por e-mail para seus clientes. Tudo isso de uma vez, sem burocracia e sem a necessidade de abrir e faturar cada pedido individualmente, otimizando o seu processo financeiro e economizando tempo.
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
            <span> Gestão de Vendedores e Metas</span>
            <p>
           
            Com o Blue ERP, você pode gerenciar de forma eficiente a performance da sua equipe comercial, acompanhar as vendas realizadas, registrar lançamentos de comissões e verificar o percentual de meta atingido. Além disso, é possível controlar os dados acessíveis aos seus vendedores, por meio do gerenciamento de permissões, garantindo a segurança e a organização das informações.
            </p>
          </div>

          <div className="text">
            <span> Relatório de Lucratividade</span>
            <p>
           
            Acompanhe a lucratividade do seu negócio com precisão e segurança. O Blue ERP disponibiliza um relatório detalhado, considerando custos e faturamento de cada venda, garantindo dados reais para tomadas de decisão estratégicas e para o seu planejamento financeiro.
            </p>
          </div>

          <div className="text">
            <span> Lançamentos Recorrentes</span>
            <p>
           
            Facilite o gerenciamento de pagamentos recorrentes! No Blue ERP, você pode registrar cobranças recorrentes e gerar boletos automaticamente, enviando-os aos seus clientes sem preocupações. Além disso, o sistema conta com um calendário financeiro que avisa quando o vencimento está próximo, ajudando a manter o fluxo de caixa sempre em dia.
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
       
       <strong>   Chega de passar trabalho </strong>
       com caminhão parado por burocracias na emissão!
       </h4>

        <p>
  
Simplificamos os processos administrativos e proporcionamos maior agilidade na emissão do seu MDF-e. Com o Blue ERP, seus manifestos são gerados automaticamente a partir dos CTes ou NFes emitidos, sem a necessidade de redigitação manual dos dados. Você pode acompanhar o status dos seus MDF-es em tempo real, onde e quando desejar, e ainda exportá-los em formatos XML ou PDF de maneira prática e eficiente.
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
            <span>Emissão de CT-e</span>
            <p>
            

Com o Blue ERP, a emissão de CT-e fica mais fácil e eficiente, compatível com Certificados A1 e A3. Elimine erros de digitação ou de cálculo de impostos, otimizando o tempo da sua equipe nas operações de transporte.
            </p>
          </div>

          <div className="text">
            <span> Facilitador de SPED Fiscal</span>
            <p>
           
            Com a funcionalidade de SPED Fiscal do Blue ERP, você pode gerar arquivos a partir dos XMLs dos fornecedores e das saídas de produtos com base nas notas fiscais emitidas. Além disso, o sistema já integra as informações dos Blocos K e H para garantir conformidade fiscal.
</p>
          </div>

          <div className="text">
            <span> Configurações de ICMS</span>
            <p>
            
           
            O Blue ERP facilita o controle fiscal da sua empresa, oferecendo campos para configurar ICMS Efetivo, ICMS Desonerado e Substituição Tributária (ST), assegurando que sua empresa esteja sempre em conformidade com a legislação tributária.
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