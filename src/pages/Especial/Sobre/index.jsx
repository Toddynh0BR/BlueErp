import * as S from "./style";

import { EspecialHeader } from "../components/headerEspecial/header";
import { FooterEspecial } from "../components/footerEspecial";

import { Navigation, Pagination } from 'swiper/modules';
import MouseFollower from "../../../components/mouse";
import { Footer } from "../../../components/footer";
import { Swiper, SwiperSlide } from "swiper/react";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import M1 from "../assets/logoContabeis.jpg";
import M2 from "../assets/logoAdministradores.jpg";
import M3 from "../assets/logoProfissionaisTi.jpg";
import M4 from "../assets/logoR7.jpg";

import About from "../assets/imgMarketplacesEcommercesSigeCloud.png";
import Applogo from "../assets/IMG-20241026-WA0019.jpg";
import BottomCloud from "../assets/cloudUp.png";
import TopCloud from "../assets/cloudDown.png";
import Litelogo from "../assets/liteLogo.svg";
import Mylogo from "../assets/myBlue.svg";

import slide1 from "../assets/fotoSigeCloudEmpresa01.jpg"
import slide2 from "../assets/fotoSigeCloudEmpresa02.jpg"
import slide3 from "../assets/fotoSigeCloudEmpresa03.jpg"
import slide4 from "../assets/fotoSigeCloudEmpresa04.jpg"
import slide5 from "../assets/fotoSigeCloudEmpresa05.jpg"


export function Sobre(){
   const [slidesPerView, setSlidesPerView] = useState(3.5);

   const navigate = useNavigate();

   useEffect(() => {
      function handleResize() {
        if (window.innerWidth < 720) {
          setSlidesPerView(2);
        } else {
          setSlidesPerView(4);
        }
      }
  
      handleResize();
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    useEffect(() => {
 
      window.scrollTo({
        top: 0,
        behavior: "smooth", 
      });
    }, []);

    return(
     <S.Container>
      <MouseFollower/>
      <EspecialHeader />

      <S.Main>
       <div className="title">
        <p>Conheça  <strong>{'>'}</strong>  Sobre a BLUE ERP</p>
        <h1>Sobre a BLUE ERP</h1>
        <span>A BLUE ERP é destaque no mercado de TI Nacional.</span>
       </div>

       <div className="balls">
        <div className="ball">
         <p>
            Mais de
            <strong>16mil</strong>
            Clientes fiéis
         </p>
        </div>

        <div className="ball">
         <p>
            Empresa com média 
            <strong>112%</strong>
            de crescimento anual
         </p>
        </div>

        <div className="ball">
         <p>
            Por mês, mais de
            <strong>900</strong>
            novos usuários
         </p>
        </div>
       </div>


       <div className="slider">
       <Swiper
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={0}
        navigation={true}
        loop={true}
      >
          <SwiperSlide >
          <div className="ball">
         <p>
            Mais de
            <strong>16mil</strong>
            Clientes fiéis
         </p>
        </div>
          </SwiperSlide>

          <SwiperSlide >
          <div className="ball">
         <p>
            Empresa com média 
            <strong>112%</strong>
            de crescimento anual
         </p>
        </div>
          </SwiperSlide>

          <SwiperSlide >
          
        <div className="ball">
         <p>
            Por mês, mais de
            <strong>900</strong>
            novos usuários
         </p>
        </div>
          </SwiperSlide>
       </Swiper>
       </div>
       <img src={BottomCloud} alt="" className="CloudBottom"/>
      </S.Main>

      <S.About>
        <p>
        Conheça o Blue ERP, o software completo de gestão empresarial e financeira da Blue Innovation Group, projetado para transformar a maneira como pequenas e médias empresas gerenciam seus negócios. Mais do que um simples ERP, o Blue ERP oferece uma plataforma integrada que centraliza todos os processos financeiros, operacionais e de controle, permitindo uma gestão eficiente e precisa.
        <br /><br />
        Com o Blue ERP, sua empresa tem acesso a um sistema robusto e intuitivo que automatiza rotinas financeiras, desde o controle de contas e fluxo de caixa até a geração de relatórios detalhados. Isso proporciona não apenas um panorama claro das operações, mas também agilidade na tomada de decisões estratégicas.
        <br /><br />
        Adaptável a diferentes modelos de negócio, o Blue ERP se destaca pela sua capacidade de personalização, garantindo que cada empresa encontre nele a solução ideal para suas necessidades. Ao integrar diversos setores em um único ambiente, o Blue ERP otimiza recursos, reduz erros e aumenta a produtividade, tudo com a confiabilidade e o suporte técnico de ponta oferecido pela Blue Innovation Group.
        <br /><br />
        Escolher o Blue ERP é investir em uma gestão financeira moderna, ágil e que prepara sua empresa para o futuro.
        </p>

        <div className="cards">
         <div className="card">
           <div className="image">
            <img src={Mylogo} alt="" />
           </div>

            <p>
             Desenvolvemos e oferecemos suporte para projetos personalizados de ERP em nuvem,
             atendendo clientes renomados como Unilever e Keune Cosméticos.
            </p>
           <button>Conheça Mais</button>
         </div>

         <div className="card">
           <div className="image">
             <img src={Litelogo} alt="" className="especial"/>
            </div>
            <p>
             Uma versão simplificada da BLUE ERP que funciona offline. Assim, o cliente pode continuar vendendo mesmo sem acesso a internet, e sem nenhum custo adicional.
            </p>
            <button onClick={()=> navigate('/loja-offline')}>Conheça Mais</button>
         </div>

         <div className="card">
            <div className="image">
             <img src={Applogo} alt="" className="especial"/>
            </div>
            <p>
            A Blue Mobi oferece um Sistema de Caixa PDV completo,permitindo que você realize vendas rápidas diretamente do seu celular.
            </p>
            <button onClick={()=> navigate('/app-de-vendas')}>Conheça Mais</button>
         </div>
        </div>

        <div className="midia">
         <span>BLUE ERP na Mídia</span>

         <div className="midias">
            <img src={M1} alt="" />
            <img src={M2} alt="" />
            <img src={M3} alt="" />
            <img src={M4} alt="" />
         </div>
        </div>
      </S.About>

      <S.About2>
       <img src={TopCloud} alt="" className="cloud"/>

       <div className="left">
         <h2>Sobre a BLUE ERP</h2>
         <span>Missão</span>
         <p>
         Desenvolver e entregar soluções tecnológicas inovadoras que centralizam e automatizam processos empresariais, proporcionando agilidade, controle e integração. Nossa missão é transformar a gestão de pequenas e médias empresas ao redor do mundo, ajudando-as a otimizar seus recursos e alcançar o máximo potencial por meio de tecnologias adaptáveis e personalizadas, focando sempre na excelência, segurança e inovação como pilares de nossa atuação diária.
         </p>

         <span>Visão</span>
         <p>
         Ser referência global em soluções tecnológicas para gestão empresarial, reconhecida pela nossa capacidade de integrar setores e simplificar operações. Buscamos liderar a inovação no mercado de CRM e automação de processos, atendendo clientes em diferentes regiões do mundo e promovendo a eficiência e o crescimento sustentável de empresas de diversos setores, sempre atentos às tendências tecnológicas e às necessidades de cada cliente.
         </p>

         <span>Valores</span>
         <p>
         Inovação: Estamos sempre em busca de novas formas de melhorar e evoluir nossas soluções, colocando a tecnologia a serviço da transformação empresarial. Agilidade: Valorizamos rapidez e eficiência nos processos, tanto internamente quanto na entrega de soluções. Transparência: Mantemos uma comunicação clara e aberta. Personalização: Soluções sob medida para modelos de negócios variados. Com credibilidade e Responsabilidade: Garantimos práticas sustentáveis.
         </p>
       </div>

       <div className="right">
         <img src={About} alt="" />
       </div>
      </S.About2>

      <S.Rest>
       <div className="slider">
       <Swiper
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={slidesPerView}
        spaceBetween={0}
        navigation={true}
        loop={true}
      >
          <SwiperSlide >
           <img src={slide1} alt="" className="SlideImg"/>
          </SwiperSlide>

          <SwiperSlide >
           <img src={slide2} alt="" className="SlideImg"/>
          </SwiperSlide>

          <SwiperSlide >
           <img src={slide3} alt="" className="SlideImg"/>
          </SwiperSlide>

          <SwiperSlide >
           <img src={slide4} alt="" className="SlideImg"/>
          </SwiperSlide>

          <SwiperSlide >
           <img src={slide5} alt="" className="SlideImg"/>
          </SwiperSlide>
       </Swiper>
       </div>

       <div className="contrate">
         <span>
Adquira o sistema de gestão empresarial líder no Brasil e <br />
simplifique a administração do seu negócio ainda hoje!
         </span>

         <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>
            Experimentar
         </button>
       </div>
      </S.Rest>

      <Footer/>
     </S.Container>
    )
}