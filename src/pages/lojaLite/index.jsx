import * as S from "./style";

import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

import MouseFollower from "../../components/mouse";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

import Image1 from "./assets/images-lite-header.png";
import Image2 from "./assets/erp-offline-sige-lite.png";
import Image3 from "./assets/sige-lite-pdv-offline.png";
import Image4 from "./assets/backup-automatico-sige-lite.png";
import Image5 from "./assets/erp-para-restaurantes-sige-lite-foods.png";

import i1 from "./assets/i1.svg";
import i2 from "./assets/i2.svg";
import i3 from "./assets/i3.svg";
import i4 from "./assets/i4.svg";
import i5 from "./assets/i5.svg";
import i6 from "./assets/i6.svg";

import { IoShieldCheckmarkOutline,  IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdCloudOutline } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { RiWifiOffLine } from "react-icons/ri";

export function LojaOffline(){
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
          <span onClick={()=> navigate('/loja-virtual')}>Loja Virtual</span>
          <span onClick={()=> navigate('/app-de-vendas')}>APP de Vendas</span>
          <span>ERP Offline</span>
         </div>
       </div>

       <div className="Center">
       <div className="left">
        <span>BLUE ERP LITE</span>
        <h2>
         <strong>Sistema de Gestão Offline</strong> <br /> integrado ao seu Blue ERP! <br />
        </h2>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
        <img src={Image1} alt="Image" />
       </div>
       </div>

       <div className="Bottom">
        <div className="card" onClick={() => handleScrollToSection(section1Ref)}>
            <span>Venda mesmo offline</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section2Ref)}>
            <span>PDV Frente de Caixa</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section3Ref)}>
            <span>Backup Automático</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section3Ref)}>
            <span>Sincronização com a Nuvem</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section4Ref)}>
            <span>Gestão completa</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section5Ref)}>
            <span>Perfeito para restaurantes</span>
        </div>
       </div>
      </S.Main>

      <S.Main2 ref={section1Ref}>
        <div className="left">
         <span>      
          Desfrute de funcionalidades essenciais para
         <strong> manter suas vendas e receitas, mesmo sem conexão à internet!</strong>
         </span>
         
         <p>
          Quando a sua conexão estiver instável, não se preocupe.
          Em vez de usar o sistema online Blue ERP,
          você pode optar pela versão offline, a Blue ERP LITE.
          <br /> <br />
          Com uma interface intuitiva e altamente prática,
          você pode continuar realizando vendas,
          gerenciando pedidos e orçamentos,
          organizando suas finanças e até emitindo notas em contingência,
          tudo isso sem custos adicionais!
         </p>

         <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
        </div>

        <div className="right">
         <img src={Image2} alt="imagem" />
        </div>

        <div className="border"></div>
      </S.Main2>

      <S.Main3 ref={section2Ref}>
        <div className="left">
        <img src={Image3} alt="imagem" />
         
        </div>

        <div className="right">
         <strong className="title">Frente de Caixa Offline</strong>
         
         <p>
         Tenha um sistema prático para gerenciar suas vendas! Cadastre seus produtos,
         conecte um leitor de código de barras e comece a vender.
         O seu PDV Frente de Caixa da Blue ERP Lite opera offline,
         permitindo a emissão de notas e cupons fiscais.
         É uma solução ideal para momentos em que a internet está instável e sua loja está cheia.
         </p>

         <span>
          E o melhor de tudo: assim que a conexão com a internet for restabelecida,
          todas as informações da Blue ERP Lite serão sincronizadas automaticamente com sua conta da Blue ERP.
         </span>

         <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
        </div>
      </S.Main3>

      <S.Main4 ref={section3Ref}>
        <div className="left">
         <span>
         Quando a conexão com a rede for <br /> restabelecida, a 
         <strong> sincronização </strong> <br />
         será reativada e um <strong> backup automático </strong><br /> será realizado.
         </span>
         
         <p>
         Assim, todos os seus lançamentos, notas fiscais, vendas e movimentações de estoque estarão sempre atualizados e em perfeita harmonia.
         </p>
        </div>

        <div className="right">
         <img src={Image4} alt="imagem" />
        </div>
      </S.Main4>

      <S.Main5 ref={section4Ref}>
       <span>
        Continue trabalhando com as ferramentas certas!
       </span>


       <div className="cards">
        <div className="card">
          <img src={i1} alt="" />
          <p>
           Integração com
          <strong> Mercado Livre e B2W</strong>
          </p>
        </div>

        <div className="card">
          <img src={i2} alt="" />
          <p>
           Backup
           <strong> automático</strong>
          </p>
        </div>

        <div className="card">
          <img src={i3} alt="" />
          <p>
           Emissão de <strong> notas
           em contingência</strong> 
          </p>
        </div>

        <div className="card">
          <img src={i4} alt="" />
          <p>
           Gestão de
           <strong> Estoque</strong>
          </p>
        </div>

        <div className="card">
          <img src={i5} alt="" className="especial"/>
          <p>
           <strong>Contas </strong> a pagar
           e a receber
          </p>
        </div>

        <div className="card">
          <img src={i6} alt="" />
          <p>
           <strong>Relatórios </strong>
           diversos
          </p>
        </div>
       </div>

       <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
      </S.Main5>

      <S.Main6 ref={section5Ref}>
       <div className="left">
        <img src={Image5} alt="" />
       </div>

       <div className="right">
        <h2>
        <strong>Crie cardápios, administre entregas, integre-se com aplicativos 
         de comandas e até envie pedidos diretamente para a cozinha. </strong>
         Tudo isso está conectado ao seu sistema financeiro e de estoque.
        </h2>

        <span>
         Um dos principais destaques da Blue ERP LITE é o Módulo Foods,
         que oferece uma variedade de 
         projetadas especialmente para negócios
         que operam no setor de alimentos e bebidas.
        </span>
       </div>
      </S.Main6>

      <Footer/>
     </S.Container>
    )
}