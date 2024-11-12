import * as S from "./style";

import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

import MouseFollower from "../../components/mouse";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

import Image1 from "./assets/images-mobi-header.png";
import Image2 from "./assets/mobi-caixa-no-celular.png";
import Image3 from "./assets/mobi-pedidos-e-orcamentos.svg";
import Image4 from "./assets/mobi-emissao-de-notas.svg";
import Image5 from "./assets/mobi-multilojas.png";
import Image6 from "./assets/mobi-acompanhamentos-de-metas.svg";
import Image7 from "./assets/mobi-expedicao.png";

import { IoShieldCheckmarkOutline,  IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdCloudOutline } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { RiWifiOffLine } from "react-icons/ri";

export function AppVenda(){
    const navigate = useNavigate();

    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
    const section5Ref = useRef(null);
    const section6Ref = useRef(null);

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
       <div className="GeralHeader">
         <div className="ecosystem" onClick={()=> navigate('/ecossistema')}>
          <div className="cloud circle" onClick={() => handleScrollToSection(section4Ref)}> 
           <IoMdCloudOutline />
          </div>

          <div className="truck circle">
           <TbTruckDelivery />
          </div>

          <div className="check circle">
           <IoShieldCheckmarkOutline />
          </div>

          <div className="phone circle" onClick={() => handleScrollToSection(section2Ref)}>
           <IoPhonePortraitOutline />
          </div>

          <div className="nowifi circle" onClick={() => handleScrollToSection(section3Ref)}>
           <RiWifiOffLine />
          </div>

          <div className="message circle">
           <MdOutlineMessage />
          </div>
         </div>

         <div className="others">
          <span onClick={()=> navigate('/loja-virtual')}>Loja Virtual</span>
          <span>APP de Vendas</span>
          <span onClick={()=> navigate('/loja-offline')}>ERP Offline</span>
         </div>
       </div>

       <div className="Center">
       <div className="left">
        <span>BLUE Mobi</span>
        <h2>
         <strong>APP de Vendas</strong> <br />
         Simplifique suas <br /> vendas externas ou <br /> no ponto de venda.<br />
        </h2>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
        <img src={Image1} alt="Image" className="especial"/>
       </div>
       </div>

       <div className="Bottom">
        <div className="card" onClick={() => handleScrollToSection(section1Ref)}>
            <span>Frente de caixa no celular</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section2Ref)}>
            <span>Pedidos e orçamentos</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section3Ref)}>
            <span>Emissão de cupom fiscal</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section4Ref)}>
            <span>Estoque em multilojas</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section5Ref)}>
            <span>Acompanhamento de vendedores</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section6Ref)}>
            <span>Controle de expedição</span>
        </div>
       </div>
      </S.Main>

      <S.Main3 ref={section1Ref}>
        <div className="left">
         <span>
          <strong>Sistema de Frente de Caixa </strong>  no Celular
         </span>
         
         <p>
          A Blue Mobi oferece um <strong>Sistema de Caixa PDV completo,</strong>
          permitindo que você realize vendas rápidas diretamente do seu celular,
          sem precisar estar em um ponto fixo da loja.
          Isso possibilita realizar vendas à domicílio ou permitir que sua equipe de
          vendas se mova livremente pela loja, fechando negócios e aumentando o faturamento!
          Para facilitar ainda mais, a <strong>leitura de código de barras </strong> torna as operações muito mais ágeis!
         </p>

         <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
        </div>

        <div className="right">
         <img src={Image2} alt="imagem" />
        </div>
      </S.Main3>

      <S.Main3 ref={section2Ref}>
        <div className="left">
        <img src={Image3} alt="imagem" />
         
        </div>

        <div className="right">
         <span>
         Lançamento de <strong>Pedidos e Orçamentos</strong> de Forma Eficiente
         </span>
         
         <p>
          Nada é mais frustrante do que deixar um cliente esperando ou prometer
          enviar um orçamento depois, certo? Para atender à rotina cada vez mais dinâmica de
          quem tem uma loja ou presta serviços,
          a Blue ERP oferece controle financeiro e consulta rápida de produtos,
          garantindo um atendimento mais ágil.
         </p>

         <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
        </div>
      </S.Main3>

      <S.Main3 ref={section3Ref}>
        <div className="left">
         <span>
          Emissão de <strong>Cupom Fiscal</strong>
         </span>
         
         <p>
          Uma das maiores preocupações de quem trabalha com vendas é a 
          emissão de cupons fiscais. Mas quem já conhece as funcionalidades
          da Blue ERP sabe que isso não é mais um problema!
          Agora, com a conexão online, você pode gerar automaticamente os cupons fiscais das suas vendas, 
          eliminando a necessidade de digitar os dados de clientes e produtos novamente.
         </p>

         <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
        </div>

        <div className="right">
         <img src={Image4} alt="imagem" />
        </div>
      </S.Main3>

      <S.Main3 ref={section4Ref}>
        <div className="left">
        <img src={Image5} alt="imagem" />
        </div>

        <div className="right">
        
         <span>
          Controle de <strong>Estoque em Multilojas</strong>
         </span>
         
         <p>
          Um recurso poderoso do nosso Software ERP Mobile é o controle de estoque para multilojas.
          Com ele, você pode gerenciar as movimentações
          {'(entradas e saídas)'} de diferentes depósitos diretamente do seu celular,
          com toda a comodidade.
         </p>

         <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
        </div>
      </S.Main3>

      <S.Main3 ref={section5Ref}>
        <div className="left">
         <span>
         Painel de <strong>Acompanhamento de Metas</strong> dos Vendedores
         </span>
         
         <p>
         Já imaginou acompanhar em tempo real as vendas da sua empresa sem precisar estar presente?
         Com a Blue Mobi, você tem acesso a um recurso poderoso para a gestão empresarial,
         que permite monitorar as metas de vendas de cada membro da sua equipe com facilidade e,
         é claro, ficar por dentro do percentual total de vendas realizadas!
         </p>

         <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
        </div>

        <div className="right">
         <img src={Image6} alt="imagem" />
        </div>
      </S.Main3>

      <S.Main3 ref={section6Ref}>
        <div className="left">
        <img src={Image7} alt="imagem" />
        </div>

        <div className="right">
        
         <span>
         <strong>Controle</strong> de Expedição
         </span>
         
         <p>
         Imagine poder verificar todos os seus pedidos pelo celular!
         Com uma interface moderna e prática,
         a Blue Mobi torna o controle de expedição mais ágil,
         garantindo que as entregas sejam feitas pontualmente e mantendo 
         a organização dos seus estoques. 
         Não perca tempo, venha descobrir uma nova forma de gerenciar sua operação!
         </p>

         <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
        </div>
      </S.Main3>

      <Footer/>
     </S.Container>
    )
}