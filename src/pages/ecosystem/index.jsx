import * as S from "./style";

import React, { useRef } from "react";

import MouseFollower from "../../components/mouse";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

import { IoShieldCheckmarkOutline,  IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdCloudOutline } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { RiWifiOffLine } from "react-icons/ri";

import ImageLite from "../../assets/images-lite.png";
import ImageMobi from '../../assets/images-mobi.png';
import ImageLoja from "../../assets/images-loja.png";
import siteDesk from "../../assets/siteDesk.png";
import liteDesk from "../../assets/liteDesk.png";
import mobiDesk from "../../assets/mobiDesk.png";

export function Ecosystem(){
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  const handleScrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

    return(
     <S.Container>
      <MouseFollower/>
      <Header/>

      <S.Main ref={section4Ref}>
        <div className="left">
         <div className="ecosystem">
          <div className="cloud circle">
           <IoMdCloudOutline />
          </div>

          <div className="truck circle" onClick={() => handleScrollToSection(section1Ref)}>
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

         <h2>
          <strong>Ecossistema</strong> de
          gestão e vendas
         </h2>

         <h4>
          <strong>Loja Virtual</strong>,
          <strong>aplicativo mobile</strong>,
          <strong>PDV offline </strong>e
          <strong> chat empresarial</strong> totalmente integrados para simplificar a gestão do seu negócio.
         </h4>

          <button>Experimente</button>
        </div>

        <div className="right">
         <div className="box">
          <div className="card c1">
           <h4>BLUE ERP</h4>
           <span><strong>Loja</strong> Virtual</span>
           <img src={siteDesk} alt="desk" className="Image"/>
          </div>

          <div className="card c2">
           <h4>BLUE Mobi</h4>
           <span><strong>APP</strong> de Vendas</span>
           <img src={mobiDesk} alt="desk" className="Image"/>
          </div>

          <div className="card c3">
          <h4>BLUE Mobi</h4>
          <span><strong>APP</strong> de Vendas</span>
           <img src={mobiDesk} alt="desk" className="Image"/>
          </div>

          <div className="card c4">
          <h4>BLUE ERP Lite</h4>
          <span><strong>ERP</strong> Offline</span>
           <img src={liteDesk} alt="desk" className="Image"/>
          </div>
         </div>
        </div>
      </S.Main>

      <S.Site  ref={section1Ref}>
        <div className="title">
         <div className="ecosystem">
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

         <div className="text">
          <h3>
           <strong>Loja virtual</strong> totalmente conectada <br /> ao seu sistema de gestão!
          </h3>

          <span>Ver mais <strong>{'>'}</strong></span>
         </div>
        </div>

        <img src={ImageLoja} alt="loja" />

        <div className="bottom">
          <p>
           Anunciar em grandes marketplaces é diferente: <br /> exige preços muito competitivos e
           envolve outras dinâmicas de negócio. <br /> Além disso, uma porcentagem de cada venda vai para a plataforma.
           <br /> Aqui, sua loja é totalmente sua, e o valor de cada venda fica apenas com você e seu negócio.
          </p>

          <button>Experimente</button>
        </div>
      </S.Site>

      <S.Mobi ref={section2Ref}>
        <div className="title">
         <div className="ecosystem">
          <div className="cloud circle" onClick={() => handleScrollToSection(section4Ref)}>
           <IoMdCloudOutline />
          </div>

          <div className="truck circle" onClick={() => handleScrollToSection(section1Ref)}>
           <TbTruckDelivery />
          </div>

          <div className="check circle">
           <IoShieldCheckmarkOutline />
          </div>

          <div className="phone circle">
           <IoPhonePortraitOutline />
          </div>

          <div className="nowifi circle" onClick={() => handleScrollToSection(section3Ref)}>
           <RiWifiOffLine />
          </div>

          <div className="message circle">
           <MdOutlineMessage />
          </div>
         </div>

         <div className="text">
          <h3>
           <strong>APP de Vendas</strong>  desenvolvido para simplificar suas vendas <br />  externas ou no ponto de venda.
          </h3>
          
          <span>Ver mais <strong>{'>'}</strong></span>
         </div>
        </div>

        <img src={ImageMobi} alt="loja" />

        <div className="bottom">
          <p>
          Precisa vender, consultar preços, verificar estoques e criar pedidos de qualquer lugar? <br />
          Com o nosso App de Vendas para Celular, a Blue Mobi, <br />
          você pode fazer tudo isso! E o melhor: <br />
          ele é totalmente integrado ao sistema BLUE ERP no seu computador.
          </p>

          <button>Experimente</button>
        </div>
      </S.Mobi>

      <S.Lite  ref={section3Ref}>
        <div className="title">
         <div className="ecosystem">
          <div className="cloud circle" onClick={() => handleScrollToSection(section4Ref)}>
           <IoMdCloudOutline />
          </div>

          <div className="truck circle" onClick={() => handleScrollToSection(section1Ref)}>
           <TbTruckDelivery />
          </div>

          <div className="check circle">
           <IoShieldCheckmarkOutline />
          </div>

          <div className="phone circle" onClick={() => handleScrollToSection(section2Ref)}>
           <IoPhonePortraitOutline />
          </div>

          <div className="nowifi circle">
           <RiWifiOffLine />
          </div>

          <div className="message circle">
           <MdOutlineMessage />
          </div>
         </div>

         <div className="text">
          <h3>
           <strong>ERP Offline,</strong> para que você continue vendendo <br /> mesmo sem conexão com a internet. 
          </h3>
          
          <span>Ver mais <strong>{'>'}</strong></span>
         </div>
        </div>

        <img src={ImageLite} alt="loja" />

        <div className="bottom">
          <p>

          Apesar do avanço no acesso à internet, instabilidades na conexão podem surgir a qualquer momento. <br />
          Mas isso não pode interromper o funcionamento da sua empresa, certo? <br />
          Por isso, criamos o BlueErp Lite: <br />
          uma versão prática e eficiente, que pode ser instalada e funciona perfeitamente no modo offline.
          </p>

          <button>Experimente</button>
        </div>
      </S.Lite>

      <Footer/>
     </S.Container>
    )
}