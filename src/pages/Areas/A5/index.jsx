import * as S from "./style";
import React, { useRef, useEffect } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";

import { GoShieldCheck } from "react-icons/go";

import Back from "../assets/back1.svg";

import Image1 from "../assets/sistema-produtos-alimenticios-sige-cloud.png";
import Image2 from "../assets/li.svg";
import Image3 from "../assets/li2.svg";
import Image4 from "../assets/li3.svg";
import Image5 from "../assets/li4.svg";

import Image6 from "../assets/gerenciar-vendas-sige-cloud-autopecas.svg";
import Image7 from "../assets/eletrodomesticos-gestao-de-engajamento.svg";
import Image8 from "../assets/gestao-de-estoque-sige-cloud.svg";
import Image9 from "../assets/gestao-financeira-sige-cloud.svg";


export function A5(){
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
        Sistema para Loja e Assistência de Eletrodomésticos



        </h2>
          
        <ul>
<li>
   <GoShieldCheck/>Gestão de pedidos e ordens de serviços;
</li>
<li>
  <GoShieldCheck/>Emissor de NF-e e NFS-e;
</li>
<li>
  <GoShieldCheck/> Gerenciamento de estoque.
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
         <img src={Image2} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section1Ref)}>
            <p>PDV Frente de Caixa



</p>
          </li>

          <li onClick={() => handleScrollToSection(section1Ref)}>
            <p>Controle de Pedidos e Orçamentos</p>
          </li>

          <li onClick={() => handleScrollToSection(section1Ref)}>
           
            <p>Controle de Ordens de Serviços</p>
          </li>
         </ul>
        </div>

        <div className="box b2">
         <div className="left">
         <strong>Engajamento com o cliente


</strong>
         <img src={Image3} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>Blue Loja



</p>
          </li>

          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>Controle por cashback</p>
          </li>

          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>Tabelas de preço</p>
          </li>
         </ul>
        </div>

        <div className="box b3">
         <div className="left">
         <strong>Gestão de Estoque


</strong>
         <img src={Image4} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section3Ref)}>
           
            <p>Entrada de estoque



</p>
          </li>

          <li onClick={() => handleScrollToSection(section3Ref)}>
           
            <p>Código de barras
            </p>
          </li>

          <li onClick={() => handleScrollToSection(section3Ref)}>
           
            <p>Relatórios para controle de estoque</p>
          </li>
         </ul>
        </div>

        <div className="box b4">
         <div className="left">
         <strong>Gestão Fiscal e Financeira</strong>
         <img src={Image5} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section4Ref)}>
           
            <p>Emissão de NF-e com envio automático por e-mail



            </p>
          </li>

          <li onClick={() => handleScrollToSection(section4Ref)}>
           
            <p>Nota Fiscal de Serviço de múltiplas ordens de serviços</p>
          </li>

          <li onClick={() => handleScrollToSection(section4Ref)}>
           
            <p>Geração de boletos e de credenciadora</p>
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
        Implementar um software para a prestação de serviços é essencial para empresas que desejam crescer, com uma estrutura robusta para controlar tanto a venda de produtos quanto a prestação de serviços. Com os recursos do módulo de vendas do **BLUE ERP**, você pode expandir a visibilidade da sua empresa de assistência técnica de eletrodomésticos, tornando o gerenciamento mais eficiente e integrado, facilitando o controle de todas as operações.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

      
      </S.Main3>

      <S.Main4 data-color={false}>
        <h2><strong>
        Gerencie suas vendas</strong> de um jeito simples!
</h2>

        <div className="texts">
          <div className="text">
            <span>PDV Frente de Caixa</span>
            <p>
            
            Para realizar vendas diretas ao consumidor final, você pode utilizar o PDV Frente de Caixa do BLUE ERP. Com ele, é possível importar orçamentos e realizar vendas diretas, emitindo NFC-e ou CF-e SAT de forma rápida e eficiente.
            </p>
          </div>

          <div className="text">
            <span>Controle de Pedidos e Orçamentos</span>
            <p>
            
Crie orçamentos e envie-os por e-mail para seus clientes. Após a aprovação, os orçamentos são convertidos em pedidos, gerando lançamentos financeiros e a baixa dos itens no estoque. Com o BLUE ERP, todos os setores da sua empresa de vendas e manutenção de equipamentos estão interligados, tornando o processo de vendas muito mais simples e ágil.
            </p>
          </div>

          <div className="text">
            <span> Controle de Ordens de Serviço</span>
            <p>
           
            Aumente a agilidade e eficiência ao cadastrar ordens de serviço no BLUE ERP. O sistema preenche automaticamente os documentos com os dados do cliente cadastrado, permitindo incluir todas as informações necessárias, agendar serviços, e até mesmo imprimir ou enviar a ordem de serviço por e-mail ao cliente.
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
       Engajamento com o cliente
        </span>

        <p>
        O engajamento de clientes é crucial para consolidar a reputação e melhorar a imagem da sua empresa de eletrodomésticos no mercado. Para ajudar nesse processo, o BLUE ERP oferece diversos recursos que você pode aplicar em sua loja, com o objetivo de atrair novos clientes e fidelizar os existentes, garantindo um relacionamento duradouro e de confiança.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
       <img src={Image7} alt="" />
       
       </div>

       <img src={Back} alt="" className="bottom"/>
      </S.Main3>

      <S.Main4 data-color={true}>
        <h2>Mais opções para <strong> impulsionar o seu negócio!</strong>
        </h2>

        <div className="texts">
          <div className="text">
            <span>           
            BLUE Loja</span>
            <p>
           
Crie uma loja virtual personalizada com o BLUE Loja para sua empresa! Com essa solução, seus clientes podem acessar seu site e fazer pedidos diretamente, facilitando a separação dos itens comprados e o envio para eles. Além de tornar o processo de venda mais ágil, você tem controle completo sobre o estoque, financeiro e fiscal de forma prática e integrada.
            </p>
          </div>

          <div className="text">
            <span> Controle por Cashback</span>
            <p>
            
            
           
            A prática de Cashback está se tornando cada vez mais comum em diversos segmentos de venda. Ao adquirir um item na sua loja, o cliente paga o valor total e recebe um crédito para utilizar em compras futuras. O BLUE ERP oferece esse recurso, permitindo que você o implemente facilmente em sua loja de eletrodomésticos!
            </p>
          </div>

          <div className="text">
            <span> Tabelas de Preço</span>
            <p>
            
           
            Que tal aplicar tabelas de preços promocionais para mercadorias que estão encalhadas no estoque? Com o BLUE ERP, você pode aplicar preços diferenciados para clientes ou criar promoções, tornando o relacionamento com seus clientes mais próximo e incentivando a fidelidade.
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
        Gestão de estoque
        </span>

        <p>
        Com o BLUE ERP, você conta com módulos para gerenciar seu fluxo de caixa, realizar projeções de receitas e despesas, definir centros de custos e estruturar planos de contas, proporcionando uma organização eficaz da sua gestão financeira. Isso assegura que o capital da sua empresa seja utilizado da maneira mais eficiente, ajudando a reduzir custos e otimizar recursos para impulsionar o crescimento do seu negócio.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

      
      </S.Main3>

      <S.Main4 data-color={false}>
        <h2><strong>Para você não perder mais vendas </strong> por falta de mercadorias!</h2>

        <div className="texts">
          <div className="text">
            <span>Entrada de Estoque</span>
            <p>
            
            Com o BLUE ERP, o controle de estoque para as compras realizadas pela sua assistência técnica se torna mais simples. A funcionalidade de entrada de mercadorias permite importar automaticamente as notas fiscais emitidas pelos fornecedores, otimizando recursos e ajudando no crescimento do seu negócio.
            </p>
          </div>

          <div className="text">
            <span> Código de Barras</span>
            <p>
           
            O controle de produtos por código de barras facilita significativamente a gestão de estoque, especialmente em lojas de cosméticos e perfumarias. Com o uso de leitores de código de barras, você pode realizar movimentações internas de entrada e saída entre depósitos e durante as vendas de forma rápida e precisa.
            </p>
          </div>

          <div className="text">
            <span> Relatórios para Controle de Estoque</span>
            <p>
           
Acompanhe o saldo do estoque do seu negócio com informações seguras e precisas. O BLUE ERP disponibiliza um relatório completo que descreve todas as movimentações de entrada e saída dos produtos, garantindo dados confiáveis para sua tomada de decisão e planejamento financeiro.
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
       Gestão Fiscal e Financeira
        </span>

        <p>

        Com o módulo de Gestão Fiscal do BLUE ERP, a emissão de notas fiscais se tornou um processo simples e ágil. Além disso, você tem à disposição módulos para controlar seu fluxo de caixa, fazer projeções de receitas e despesas, gerenciar centros de custos e elaborar planos de contas, tudo para otimizar a organização da sua gestão financeira.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
       <img src={Image9} alt="" />
       
       </div>

       <img src={Back} alt="" className="bottom"/>
      </S.Main3>

      <S.Main4 data-color={true}>
        <h2><strong>Descomplique! </strong> Gerencie seu
        financeiro e fiscal de forma simples!</h2>

        <div className="texts">
          <div className="text">
            <span>Emissão de NF-e com Envio Automático por E-mail</span>
            <p>
          

O emissor de NF-e é uma ferramenta essencial para qualquer empresa. Com o BLUE ERP, além de emitir a NF-e, você também pode configurá-la para ser enviada automaticamente por e-mail ao destinatário, garantindo agilidade e praticidade. Configure os impostos necessários e emita seus documentos fiscais com a confiança de estar sempre em conformidade com a legislação vigente.
            </p>
          </div>

          <div className="text">
            <span>Nota Fiscal de Serviço para Múltiplas Ordens de Serviço</span>
            <p>
            
            O recurso de faturamento em lote não só facilita o processo financeiro da sua empresa, mas também agiliza o processo fiscal! Agora, emitir NFS-e para vários clientes ao mesmo tempo ficou muito mais fácil, permitindo que você emita notas de diferentes ordens de serviço em apenas um clique. Isso torna a parte fiscal da sua empresa muito menos burocrática, simplificando a gestão.
            </p>
          </div>

          <div className="text">
            <span> Geração de Boletos e Credenciadora</span>
            <p>
           
Com o BLUE ERP, além de emitir boletos diretamente pela sua conta bancária, você pode contar com o SIGE Bank, que automatiza processos como a geração de boletos, recebimentos por cartão de crédito e débito, e envio de links de pagamento, oferecendo mais eficiência e segurança nas transações financeiras da sua empresa.
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