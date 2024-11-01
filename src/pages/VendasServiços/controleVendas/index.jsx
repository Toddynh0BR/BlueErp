import * as S from "./style";

import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";

import Set from "../assets/bottom-set.svg";
import Image1 from "../assets/top-image-controle-de-vendas.svg";
import Image2 from "../assets/sistema-de-pdv-offline.svg";
import Image3 from "../assets/sistema-crm.svg";
import Image4 from "../assets/faturamento-em-lote.svg";
import Image5 from "../assets/gestao-de-vendedores.svg";
import Image6 from "../assets/impressao-documento-fiscal.svg";

export function ControleVendas(){
    const navigate = useNavigate();

    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
    const section5Ref = useRef(null);

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
        Chegou a hora de ter um Controle de <br />
        Vendas robusto para sua empresa crescer!
        </h2>

        <p>
        Com a BLUE ERP, você conta com uma solução simples e eficiente que oferece <br />
        inúmeras funcionalidades para monitorar todas as etapas do processo de vendas.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
        <img src={Image1} alt="Image" />
       </div>
       </div>

       <div className="Bottom">
        <div className="card" onClick={() => handleScrollToSection(section1Ref)}>
            <span> Sistema PDV</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section2Ref)}>
            <span>Sistema CRM</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section3Ref)}>
            <span>Faturamento em Lote</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section4Ref)}>
            <span>Gestão de vendedores</span>
        </div>
        <div className="card" onClick={() => handleScrollToSection(section5Ref)}>
            <span>Gestão de vendas completa</span>
        </div>
       </div>
      </S.Main>

      <S.Ecossistem>
      <span>
       <strong>Integre todos os setores </strong> do  <br /> seu negócio com nossas ferramentas!
      </span>

      <strong className="hover">
        {'>> Conhecer Ecossistema <<'}
      </strong>
      </S.Ecossistem>

      <S.Main2 ref={section1Ref}>
       <div className="left">
       <img src={Image2} alt="" className="especial"/>
       </div>

       <div className="right">
        <span>
        Sistema PDV - Frente de Caixa
        </span>

        <p>


Com o Ponto de Venda do BLUE ERP, você pode registrar suas vendas de maneira simples e intuitiva, utilizando botões de acesso rápido. É possível aplicar descontos, adicionar clientes e escolher diferentes formas de pagamento. Além disso, o sistema oferece integração financeira e fiscal.
<br /><br />
Para cada transação, você tem a opção de emitir notas fiscais e gerar lançamentos financeiros. E não esqueça da baixa automática do estoque, que garante que seus registros estejam sempre atualizados.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <img src={Set} alt="descer" className="bottom" onClick={()=> handleScrollToSection(section2Ref)}/>
      </S.Main2>

      <S.Main2 ref={section2Ref}>
       <div className="left">
        <span>
        Sistema CRM
        </span>

        <p>



O módulo de Gestão de CRM do BLUE ERP proporciona os melhores controles empresariais para a sua empresa. Com gráficos sempre atualizados, você pode monitorar a evolução das negociações e identificar novas oportunidades.
<br /><br />
 Isso permite que você tenha uma visão abrangente do relacionamento com seus clientes, além de possibilitar o acompanhamento e o planejamento de suas ações de marketing e muito mais.

        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
          <img src={Image3} alt="" />
       </div>

       <img src={Set} alt="descer" className="bottom" onClick={()=> handleScrollToSection(section3Ref)}/>
      </S.Main2>

      <S.Main2 ref={section3Ref}>
       <div className="left">
       <img src={Image4} alt="" />
       </div>

       <div className="right">
       
        <span>
        Faturamento em Lote
        </span>

        <p>
        

Empresas que lidam com grandes volumes de notas fiscais e operam no e-commerce serão as mais beneficiadas com esta ferramenta. Em apenas três passos simples, você pode faturar múltiplos pedidos, emitir suas respectivas notas fiscais, gerar boletos e enviá-los por e-mail para seus clientes, tudo de uma só vez.
<br /><br />
 Sem burocracia e sem a necessidade de abrir cada pedido individualmente para faturá-los. 
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <img src={Set} alt="descer" className="bottom" onClick={()=> handleScrollToSection(section4Ref)}/>
      </S.Main2>

      <S.Main2 ref={section4Ref}>
       <div className="left">
        <span>
        Gestão de Vendedores
        </span>

        <p>

        

Com essa funcionalidade, você pode gerenciar seus vendedores, vendas, comissões e DRE com apenas alguns cliques.
<br /><br />
Na BLUE ERP, é possível também controlar quais dados seus vendedores terão acesso, utilizando o sistema de permissões do dashboard de vendedores.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
          <div className="Especial">
           <img src={Image5} alt="" />
          </div>
       </div>

  
      </S.Main2>

      <S.Main3 ref={section5Ref}>
        <span>Tenha recursos exclusivos para força de vendas e <strong> gestão de clientes!</strong></span>

        <div className="cards">
         <div className="card">
          <span>Orçamentos de Vendas</span>
          <p>
          

Com essa funcionalidade, você pode selecionar os dados do cliente e dos produtos ou serviços e enviar orçamentos personalizados rapidamente, seja por e-mail ou em formato impresso.
          </p>
         </div>

         <div className="card">
          <span>Emissão de Pedidos</span>
          <p>
          
          Esse recurso permite centralizar todos os pedidos da sua empresa em um único lugar. Você pode gerar ordens de compra, emitir notas fiscais e controlar todos os seus registros de maneira simples, rápida e segura.


          </p>
         </div>

         <div className="card">
          <span> Emissor de Boletos</span>
          <p>
         
Integrado com os principais bancos nacionais e com leitura de arquivos de retorno em questão de segundos, nosso emissor de boletos simplifica o processo de cobranças, integrando as informações diretamente ao fluxo de caixa.
          </p>
         </div>

         <div className="card">
          <span> Relatório de Vendas</span>
          <p>
          
          Monitorar as vendas da sua empresa ficou muito mais fácil. Com o BLUE ERP, você tem acesso a gráficos de vendas e fluxo de caixa em tempo real, além de um ranking dos produtos mais vendidos e dos clientes. Todas essas informações estão disponíveis sempre que você precisar, sem custo adicional.

          </p>
         </div>

         <div className="card">
          <span> Cadastro de Clientes</span>
          <p>
         
Seja através das modais disponíveis em qualquer tela ou diretamente pelo menu de registro de clientes, você pode inserir os dados dos seus clientes de maneira intuitiva. Esses dados podem ser utilizados em todas as suas operações, evitando retrabalho.
          </p>
         </div>

         <div className="card">
          <span>Pipe de Oportunidades e Funil</span>
          <p>
          
Visualize o progresso das suas negociações com nosso Funil de Vendas. Com ele, você acompanha oportunidades, pedidos e faturamentos de cada negociação. Complementando esse módulo, temos o Pipe de Oportunidades, que facilita a visualização dos seus dados, garantindo que você não perca nenhum negócio!
          </p>
         </div>
        </div>

        <div className="bottom">

        </div>
      </S.Main3>

      <Footer/>
     </S.Container>
    )
}