import * as S from "./style";

import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

import MouseFollower from "../../components/mouse";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

import Image1 from "./assets/images-loja-header.png";
import Image2 from "./assets/loja-section-intro.png";
import Image3 from "./assets/loja-historico-de-compra.svg";
import Image4 from "./assets/loja-link-de-orcamento.png";
import Image5 from "./assets/loja-tabelas-de-precos.svg";
import Image6 from "./assets/loja-para-restaurantes.png";

import { IoShieldCheckmarkOutline,  IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdCloudOutline } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { RiWifiOffLine } from "react-icons/ri";

export function LojaVirtual(){
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
          <span>Loja Virtual</span>
          <span onClick={()=> navigate("/app-de-vendas")}>APP de Vendas</span>
          <span onClick={()=> navigate('/loja-offline')}>ERP Offline</span>
         </div>
       </div>

       <div className="Center">
       <div className="left">
        <span>BLUE ERP</span>
        <h2>
         <strong>Loja Virtual</strong> <br /> totalmente conectada <br />
         ao seu sistema <br /> de gestão!
        </h2>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
        <img src={Image1} alt="Image" className="especial"/>
       </div>
       </div>

       <div className="Bottom">
        <div className="card" onClick={() => handleScrollToSection(section1Ref)}>
            <span>Sua Loja online <br />e sem taxas</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section2Ref)}>
            <span>Histórico de compras</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section3Ref)}>
            <span>Botão de orçamento</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section4Ref)}>
            <span>Tabelas de preço integradas</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section5Ref)}>
            <span>Loja Virtual para Restaurantes</span>
        </div>
       </div>
      </S.Main>

      <S.Main2 ref={section1Ref}>
        <div className="left">
         <span>
          Anunciar em grandes marketplaces requer preços altamente competitivos e
          adaptações em estratégias de negócio, além do percentual que a plataforma 
          retém em cada venda.<strong> Na Blue ERP, sua loja é exclusivamente sua,
          e todo o faturamento permanece no seu negócio.</strong> 
         </span>
         
         <p>
          <strong> Com recursos variados e funcionalidades versáteis para todos os segmentos, </strong>
          a Blue ERP permite que pequenas empresas vendam diariamente,
          oferecendo conveniência aos clientes e fortalecendo o caixa.
          É a solução para superar qualquer cenário de crise.
         </p>

         <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
        </div>

        <div className="right">
         <img src={Image2} alt="imagem" />
        </div>
      </S.Main2>

      <S.Main3 ref={section2Ref}>
        <div className="left">
        <img src={Image3} alt="imagem" />
         
        </div>

        <div className="right">
         <strong className="title">Histórico de compra</strong>
         <span>
          Sabe quando o cliente coloca produtos no carrinho, mas acaba não finalizando a compra?
         </span>
         
         <p>
          Na Blue ERP, o histórico de compras do cliente fica salvo em seu cadastro.
          Assim, ao retornar à loja, <strong>  ele pode retomar o carrinho e concluir a compra ou
          adicionar novos itens à vontade</strong>. Além disso,
          o cliente acompanha <strong> todo o processo de entrega: </strong>
          desde a confirmação do pagamento e o código de
          rastreamento até o recebimento da mercadoria!
         </p>

         <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
        </div>
      </S.Main3>

      <S.Main3 ref={section3Ref}>
        <div className="left">
         <span>
          Oculte preços e envie orçamentos diretamente por e-mail.
         </span>
         
         <p>

         A Blue ERP é altamente flexível para se adaptar às suas estratégias de venda.
         <br /><strong>Você tem a opção </strong> de ocultar os preços dos produtos,
         permitindo que seus clientes selecionem itens e solicitem um  <strong>orçamento personalizado.</strong>
         Envie orçamentos de forma automática ou faça ajustes manuais. Além disso,
         é possível incluir um botão de aprovação de orçamento diretamente no e-mail enviado ao cliente,
         facilitando o processo de decisão.
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
          Utilize tabelas de Preços Especiais! Assim,
          você pode oferecer valores diferenciados para grupos específicos de clientes,
          ajustando as ofertas conforme o perfil de cada público.
         </span>
         
         <p>
         Crie tabelas de preços exclusivas para clientes cadastrados que realizam login na sua loja.
         Esse recurso é ideal para empresas que desejam oferecer
         valores diferenciados para vendas no atacado {'(B2B) e no varejo (B2C)'}, 
         ajustando automaticamente os preços conforme o perfil de cada cliente.
         </p>

         <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
        </div>
      </S.Main3>

      <S.Main4 ref={section5Ref}>
       <div className="left">
        <img src={Image6} alt="image" />
       </div>

       <div className="right">
        <h2>
         <strong>Venda online e aumente a receita </strong> do delivery com o seu restaurante!
        </h2>

        <h4>Cadastro de Produtos Alimentícios e Tipo Pizza</h4>
        <p>
         Cadastre alimentos e pizzas no sistema, gerenciando validade,
         insumos e personalizações como tamanhos, fatias, bordas,
         tipos de massa e muito mais.
        </p>

        <h4>Controle de Entregadores</h4>
        <p>
         Cadastre entregadores e selecione-os ao finalizar pedidos,
         monitorando entregas pendentes e concluídas para cada um.
        </p>

        <h4>Integração com Impressoras Térmicas</h4>
        <p>
         Com integração para impressoras térmicas,
         a cozinha pode imprimir pedidos e atualizar 
         o status dos itens prontos para entrega,
         facilitando o fluxo de preparo e envio.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>
      </S.Main4>

      <Footer/>
     </S.Container>
    )
}