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
        Chegou a hora de ter um <strong> Controle de 
        Vendas </strong> <br /> robusto para sua empresa crescer!
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
          <svg fill="#7300cc" height="1063pt" viewBox="-33 -33 1063 1063.7489" width="1063pt" xmlns="http://www.w3.org/2000/svg"><path d="m448.15625 64.125h405.109375c48.304687 0 87.644531 39.339844 87.644531 87.644531v586.242188h25.320313c16.125 0 29.207031 13.074219 29.207031 29.207031v198.8125c0 16.136719-13.082031 29.214844-29.207031 29.214844h-938.757813c-16.140625 0-29.222656-13.078125-29.222656-29.214844v-198.8125c0-16.132812 13.082031-29.207031 29.222656-29.207031h25.3125v-586.242188c0-48.304687 39.335938-87.644531 87.636719-87.644531h35.0625l.078125-37.003906c0-19.8125 19.988281-34.3125 39.070312-27.386719l43.625 15.863281 43.636719-15.863281c6.199219-2.25 13.179688-2.425781 19.851563 0l43.636718 15.863281 41.464844-15.078125c21.785156-8.902343 41.308594 6.953125 41.308594 26.601563zm-276.566406 401.214844c-16.128906 0-29.214844-13.085938-29.214844-29.214844 0-16.136719 13.085938-29.21875 29.214844-29.21875h3.894531v-284.355469h-35.0625c-16.050781 0-29.203125 13.167969-29.203125 29.21875v586.242188h771.261719v-586.242188c0-16.050781-13.164063-29.21875-29.214844-29.21875h-405.109375v284.355469h3.894531c16.136719 0 29.214844 13.082031 29.214844 29.21875 0 16.128906-13.078125 29.210938-29.214844 29.210938h-280.460937zm615.449218 175.285156c-16.132812 0-29.210937 13.082031-29.210937 29.207031 0 16.148438 13.078125 29.21875 29.210937 29.21875 16.132813 0 29.214844-13.070312 29.214844-29.21875 0-16.125-13.082031-29.207031-29.214844-29.207031zm-116.855468 0c-16.136719 0-29.210938 13.082031-29.210938 29.207031 0 16.148438 13.074219 29.21875 29.210938 29.21875 16.132812 0 29.214844-13.070312 29.214844-29.21875 0-16.125-13.082032-29.207031-29.214844-29.207031zm-116.855469 0c-16.132813 0-29.21875 13.082031-29.21875 29.207031 0 16.148438 13.085937 29.21875 29.21875 29.21875 16.140625 0 29.222656-13.070312 29.222656-29.21875 0-16.125-13.082031-29.207031-29.222656-29.207031zm233.710937-116.855469c-16.132812 0-29.210937 13.074219-29.210937 29.210938 0 16.132812 13.078125 29.214843 29.210937 29.214843 16.132813 0 29.214844-13.082031 29.214844-29.214843 0-16.136719-13.082031-29.210938-29.214844-29.210938zm-116.855468 0c-16.136719 0-29.210938 13.074219-29.210938 29.210938 0 16.132812 13.074219 29.214843 29.210938 29.214843 16.132812 0 29.214844-13.082031 29.214844-29.214843 0-16.136719-13.082032-29.210938-29.214844-29.210938zm-116.855469 0c-16.132813 0-29.21875 13.074219-29.21875 29.210938 0 16.132812 13.085937 29.214843 29.21875 29.214843 16.140625 0 29.222656-13.082031 29.222656-29.214843 0-16.136719-13.082031-29.210938-29.222656-29.210938zm233.710937-116.863281c-16.132812 0-29.210937 13.082031-29.210937 29.21875 0 16.128906 13.078125 29.214844 29.210937 29.214844 16.132813 0 29.214844-13.085938 29.214844-29.214844 0-16.136719-13.082031-29.21875-29.214844-29.21875zm-116.855468 0c-16.136719 0-29.210938 13.082031-29.210938 29.21875 0 16.128906 13.074219 29.214844 29.210938 29.214844 16.132812 0 29.214844-13.085938 29.214844-29.214844 0-16.136719-13.082032-29.21875-29.214844-29.21875zm-116.855469 0c-16.132813 0-29.21875 13.082031-29.21875 29.21875 0 16.128906 13.085937 29.214844 29.21875 29.214844 16.140625 0 29.222656-13.085938 29.222656-29.214844 0-16.136719-13.082031-29.21875-29.222656-29.21875zm-11.683594-225.914062c-16.140625 0-29.222656 13.070312-29.222656 29.203124v109.070313c0 16.136719 13.082031 29.214844 29.222656 29.214844h264.871094c16.140625 0 29.222656-13.078125 29.222656-29.214844v-109.070313c0-16.132812-13.082031-29.203124-29.222656-29.203124zm235.652344 58.421874h-206.445313v50.632813h206.445313zm-543.386719 167.492188h155.820313v-338.160156l-14.421875 5.238281c-6.679688 2.421875-13.667969 2.246094-19.855469 0l-43.636719-15.859375-43.628906 15.859375c-6.675781 2.421875-13.664062 2.246094-19.855469 0l-14.421875-5.238281zm229.558594 488.933594h66.75c16.140625 0 29.222656-13.082032 29.222656-29.21875 0-16.125-13.082031-29.207032-29.222656-29.207032h-66.75c-16.140625 0-29.210938 13.082032-29.210938 29.207032 0 16.136718 13.070313 29.21875 29.210938 29.21875zm-406.792969-99.398438v140.375h880.335938v-140.375zm0 0" fill-rule="evenodd"></path></svg>
            <span> Sistema PDV</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section2Ref)}>
          <svg fill="#7300cc" id="Layer_5" enable-background="new 0 0 64 64" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m33 9c1.103 0 2 .897 2 2h2c0-2.206-1.794-4-4-4s-4 1.794-4 4v2c0 2.206 1.794 4 4 4s4-1.794 4-4h-2c0 1.103-.897 2-2 2s-2-.897-2-2v-2c0-1.103.897-2 2-2z"></path><path d="m44 7h-5v10h2v-4h3c.551 0 1 .449 1 1v3h2v-3c0-.771-.301-1.468-.78-2 .48-.532.78-1.229.78-2 0-1.654-1.346-3-3-3zm-3 4v-2h3c.551 0 1 .449 1 1s-.449 1-1 1z"></path><path d="m54.279 13h-.558l-2-6h-2.721v10h2v-5.838l1.279 3.838h3.442l1.279-3.838v5.838h2v-10h-2.721z"></path><path d="m5 21h2v2h-2z"></path><path d="m9 21h2v2h-2z"></path><path d="m13 21h2v2h-2z"></path><path d="m52 31h-16c-1.654 0-3 1.346-3 3v2c0 1.654 1.346 3 3 3v2c-1.654 0-3 1.346-3 3v2c0 1.654 1.346 3 3 3v2c-1.654 0-3 1.346-3 3v2c0 1.654 1.346 3 3 3h16c1.654 0 3-1.346 3-3v-2c0-1.654-1.346-3-3-3v-2c1.654 0 3-1.346 3-3v-2c0-1.654-1.346-3-3-3v-2c1.654 0 3-1.346 3-3v-2c0-1.654-1.346-3-3-3zm1 23v2c0 .552-.449 1-1 1h-16c-.551 0-1-.448-1-1v-2c0-.552.449-1 1-1h16c.551 0 1 .448 1 1zm-3-3h-12v-2h12zm3-7v2c0 .552-.449 1-1 1h-16c-.551 0-1-.448-1-1v-2c0-.552.449-1 1-1h16c.551 0 1 .448 1 1zm-3-3h-12v-2h12zm3-5c0 .552-.449 1-1 1h-16c-.551 0-1-.448-1-1v-2c0-.552.449-1 1-1h16c.551 0 1 .448 1 1z"></path><path d="m58 1h-28c-2.757 0-5 2.243-5 5v11h-21c-1.654 0-3 1.346-3 3v40c0 1.654 1.346 3 3 3h52c1.654 0 3-1.346 3-3v-37.101c2.279-.465 4-2.484 4-4.899v-12c0-2.757-2.243-5-5-5zm-54 18h21.101c.465 2.279 2.484 4 4.899 4h3.532l1.667 2h-32.199v-5c0-.551.449-1 1-1zm52 42h-52c-.551 0-1-.448-1-1v-33h33.865l.754.905c.58.696 1.432 1.095 2.338 1.095 1.31 0 2.419-.837 2.847-2h14.196v33c0 .552-.449 1-1 1zm-13-36v-2h14v2zm18-7c0 1.654-1.346 3-3 3h-17v4.957c0 .575-.468 1.043-1.043 1.043-.311 0-.603-.137-.802-.375l-4.687-5.625h-4.468c-1.654 0-3-1.346-3-3v-12c0-1.654 1.346-3 3-3h28c1.654 0 3 1.346 3 3z"></path><path d="m18 51c6.065 0 11-4.935 11-11s-4.935-11-11-11-11 4.935-11 11 4.935 11 11 11zm0-2c-2.122 0-4.071-.742-5.611-1.975l6.025-6.025h8.527c-.499 4.493-4.317 8-8.941 8zm7.025-14.611c1.036 1.295 1.723 2.878 1.916 4.611h-6.527zm-1.414-1.414-5.611 5.611-5.611-5.611c1.54-1.233 3.489-1.975 5.611-1.975s4.071.742 5.611 1.975zm-12.636 1.414 5.611 5.611-5.611 5.611c-1.233-1.54-1.975-3.489-1.975-5.611s.742-4.071 1.975-5.611z"></path><path d="m5 53h2v2h-2z"></path><path d="m9 53h22v2h-22z"></path><path d="m5 57h6v2h-6z"></path><path d="m13 57h18v2h-18z"></path></g></svg>
            <span>Sistema CRM</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section3Ref)}>
          <svg fill="#7300cc" xmlns="http://www.w3.org/2000/svg" width="41.322" height="40" viewBox="0 0 41.322 40">   <g id="_16-recieve" data-name="16-recieve" transform="translate(-6 -6)">     <g id="linear_color" data-name="linear color" transform="translate(6 6)">       <path id="Caminho_105" data-name="Caminho 105" d="M42.231,293.283c-.214.111-.419.221-.617.329a3.975,3.975,0,0,0-4.424-.494A21.386,21.386,0,0,0,32.66,296.1l-1.708-.159-3.137-2.509c.875.24,1.771.472,2.552.645a5.123,5.123,0,0,0,1.111.128,3.778,3.778,0,0,0,2.174-.655,5.751,5.751,0,0,0,2.091-3.54.827.827,0,0,0-.593-.924L24.24,286.031a.827.827,0,0,0-.223-.031H6.826a.826.826,0,1,0,0,1.653H23.9l10.014,2.807a3.476,3.476,0,0,1-1.2,1.731,2.444,2.444,0,0,1-1.989.275c-2.516-.559-6.421-1.787-6.46-1.8A.828.828,0,0,0,23.5,292.1l6.612,5.289a.826.826,0,0,0,.44.178l2.323.216,4.784.445a.815.815,0,0,0,.719-.3,15.9,15.9,0,0,1,4.614-3.174,2.236,2.236,0,0,1,2.278.067l-5.751,5.751-9.412.627-12.382-5.213a.828.828,0,0,0-.321-.065H6.826a.826.826,0,1,0,0,1.653H17.238l12.408,5.225a.827.827,0,0,0,.321.065l.055,0,9.917-.661a.826.826,0,0,0,.529-.24l6.612-6.612a.826.826,0,0,0,.039-1.127A4.045,4.045,0,0,0,42.231,293.283Zm-4.821,3.262-2.367-.22a25.288,25.288,0,0,1,2.908-1.74,2.216,2.216,0,0,1,2.076-.043A15.629,15.629,0,0,0,37.41,296.545Z" transform="translate(-6 -262.86)"></path>       <path id="Caminho_106" data-name="Caminho 106" d="M238.76,39.521A8.76,8.76,0,1,0,230,30.76,8.76,8.76,0,0,0,238.76,39.521Zm0-15.868a7.107,7.107,0,1,1-7.107,7.107,7.107,7.107,0,0,1,7.107-7.107Z" transform="translate(-211.488 -20.678)"></path>       <path id="Caminho_107" data-name="Caminho 107" d="M295.356,60.942h1.4a1.158,1.158,0,0,1,1.157,1.157v.083a1.158,1.158,0,0,1-1.157,1.157h-2.083a.455.455,0,0,1-.455-.464l0-.086a.827.827,0,1,0-1.653-.03l0,.086a2.108,2.108,0,0,0,2.108,2.146h.6v.5a.826.826,0,0,0,1.653,0v-.5a2.813,2.813,0,0,0,2.645-2.8V62.1a2.813,2.813,0,0,0-2.81-2.81h-1.4a1.157,1.157,0,1,1,0-2.314h2.05a.455.455,0,0,1,.455.475.826.826,0,1,0,1.651.071,2.108,2.108,0,0,0-2.106-2.2h-.48v-.5a.826.826,0,0,0-1.653,0v.5a2.809,2.809,0,1,0,.083,5.618Z" transform="translate(-268.827 -50.033)"></path>       <path id="Caminho_108" data-name="Caminho 108" d="M423.411,234.209a.826.826,0,1,0-1.169,1.169l2.645,2.645a.826.826,0,0,0,1.169,0l2.645-2.645a.826.826,0,0,0-1.169-1.169l-1.234,1.234v-4.616a.826.826,0,1,0-1.653,0v4.616Z" transform="translate(-387.62 -211.488)"></path>       <path id="Caminho_109" data-name="Caminho 109" d="M454.826,184.314a.826.826,0,0,0,.826-.826v-.661a.826.826,0,1,0-1.653,0v.661A.826.826,0,0,0,454.826,184.314Z" transform="translate(-416.975 -167.455)"></path>       <path id="Caminho_110" data-name="Caminho 110" d="M120.887,62.022a.826.826,0,0,0,1.169,0l2.645-2.645a.826.826,0,0,0-1.169-1.169L122.3,59.443V54.826a.826.826,0,0,0-1.653,0v4.616l-1.234-1.234a.826.826,0,1,0-1.169,1.169Z" transform="translate(-108.744 -50.033)"></path>       <path id="Caminho_111" data-name="Caminho 111" d="M150.826,8.314a.826.826,0,0,0,.826-.826V6.826a.826.826,0,0,0-1.653,0v.661A.826.826,0,0,0,150.826,8.314Z" transform="translate(-138.099 -6)"></path>       <path id="Caminho_112" data-name="Caminho 112" d="M24.887,158.022a.826.826,0,0,0,1.169,0l2.645-2.645a.826.826,0,1,0-1.169-1.169L26.3,155.443v-4.616a.826.826,0,1,0-1.653,0v4.616l-1.234-1.234a.826.826,0,1,0-1.169,1.169Z" transform="translate(-20.678 -138.099)"></path>       <path id="Caminho_113" data-name="Caminho 113" d="M54.826,104.314a.826.826,0,0,0,.826-.826v-.661a.826.826,0,0,0-1.653,0v.661A.826.826,0,0,0,54.826,104.314Z" transform="translate(-50.033 -94.066)"></path>     </g>   </g> </svg>
            <span>Faturamento em Lote</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section4Ref)}>
          <svg fill="#7300cc" id="Layer_5" enable-background="new 0 0 64 64" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m29 46c0-6.065-4.935-11-11-11s-11 4.935-11 11 4.935 11 11 11 11-4.935 11-11zm-11 9c-4.962 0-9-4.037-9-9s4.038-9 9-9 9 4.037 9 9-4.038 9-9 9z"></path><path d="m18 43c.551 0 1 .448 1 1h2c0-1.302-.839-2.402-2-2.816v-2.184h-2v2h-2v3c0 1.654 1.346 3 3 3 .551 0 1 .448 1 1v1h-1c-.551 0-1-.448-1-1h-2c0 1.302.839 2.402 2 2.816v2.184h2v-2h2v-3c0-1.654-1.346-3-3-3-.551 0-1-.448-1-1v-1z"></path><path d="m11 45h2v2h-2z"></path><path d="m23 45h2v2h-2z"></path><path d="m61 43c0-6.199-4.053-11.462-9.646-13.298 2.191-1.428 3.646-3.897 3.646-6.702 0-4.411-3.589-8-8-8s-8 3.589-8 8c0 2.804 1.453 5.271 3.642 6.7-2.065.674-3.961 1.82-5.542 3.401-2.32 2.32-3.724 5.311-4.034 8.534l-.809-.27c-.244-.755-.544-1.482-.896-2.174l1.291-2.581-.652-.652v-6.958c0-6.199-4.053-11.462-9.646-13.298 2.191-1.428 3.646-3.897 3.646-6.702 0-4.411-3.589-8-8-8s-8 3.589-8 8c0 2.805 1.455 5.274 3.646 6.702-5.593 1.836-9.646 7.099-9.646 13.298v6.958l-.652.652 1.291 2.581c-.352.691-.652 1.419-.896 2.174l-2.743.914v7.441l2.743.914c.244.755.544 1.482.896 2.174l-1.291 2.582 5.262 5.262 2.581-1.29c.691.352 1.419.651 2.174.896l.914 2.742h3.721 3.721 39.279v-14c1.103 0 2-.897 2-2v-2c0-1.103-.897-2-2-2zm-2 0h-3v-4h-2v4h-5.277l5.474-9.58c2.91 2.192 4.803 5.665 4.803 9.58zm-12-12c.805 0 1.591.083 2.352.234l-2.352 2.352-2.356-2.356c.768-.152 1.556-.23 2.356-.23zm2.862 5.976-1.522-1.902 3.183-3.183c.336.137.663.291.983.458zm-4.202-1.902-1.522 1.902-2.649-4.636c.321-.166.647-.321.981-.457zm1.34 1.527 1.794 2.243-1.794 3.141-1.794-3.141zm-6-13.601c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6zm-2.486 11.515c.403-.403.838-.762 1.286-1.1l5.477 9.585h-5.277v-4h-2v4h-3c0-3.205 1.248-6.219 3.514-8.485zm-8.514-5.515v4.958l-2.61-2.611-.39.196v-6.543h-2v7.543l-.191.096c-.691-.352-1.419-.651-2.174-.896l-.914-2.743h-1.998l5.474-9.58c2.91 2.192 4.803 5.665 4.803 9.58zm-17.506-10.651c.957-.497 1.984-.875 3.069-1.1l-.874 4.942zm5.142-1.331c.122-.003.241-.018.364-.018s.242.015.364.018l1.395 7.887-1.759 3.08-1.759-3.079zm3.674 5.173-.874-4.942c1.085.225 2.112.603 3.069 1.1zm-9.31-13.191c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6zm-6 20c0-3.915 1.893-7.388 4.803-9.58l5.474 9.58h-1.998l-.915 2.743c-.755.244-1.482.544-2.174.896l-.19-.096v-7.543h-2v6.543l-.39-.195-2.61 2.61zm12 32h-2.279l-.789-2.365-.507-.146c-.968-.276-1.888-.655-2.734-1.127l-.461-.257-2.226 1.112-3.223-3.223 1.112-2.226-.257-.461c-.471-.847-.851-1.767-1.127-2.733l-.145-.508-2.364-.787v-4.559l2.365-.788.145-.508c.276-.967.656-1.887 1.127-2.733l.257-.461-1.112-2.226 3.223-3.224 2.225 1.113.461-.257c.846-.472 1.766-.851 2.734-1.127l.507-.146.789-2.363h4.559l.789 2.365.507.146c.968.276 1.888.655 2.734 1.127l.461.257 2.225-1.113 3.223 3.224-1.112 2.226.257.461c.471.847.851 1.767 1.127 2.733l.145.508 2.364.787v.279 4.279l-2.365.788-.145.508c-.276.967-.656 1.887-1.127 2.733l-.257.461 1.112 2.226-3.223 3.223-2.226-1.112-.461.257c-.846.472-1.766.851-2.734 1.127l-.507.146-.788 2.364zm41 0h-36.612l.248-.743c.755-.244 1.483-.544 2.174-.896l2.581 1.29 5.262-5.262-1.291-2.581c.352-.691.652-1.419.896-2.174l2.742-.913v-.721h24zm2-14h-26v-2h26z"></path><path d="m55 57h2v2h-2z"></path><path d="m51 57h2v2h-2z"></path><path d="m47 57h2v2h-2z"></path></svg>
            <span>Gestão de vendedores</span>
        </div>
        <div className="card" onClick={() => handleScrollToSection(section5Ref)}>
          <svg fill="#7300cc" id="Layer_5" enable-background="new 0 0 64 64" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m11 32.855v2.145h2v-2.145c1.155-.366 2-1.435 2-2.709 0-1.087-.604-2.066-1.578-2.553l-1.95-.974c-.291-.146-.472-.439-.472-.765 0-.471.383-.854.854-.854h.292c.471 0 .854.383.854.854v.146h2v-.146c0-1.274-.845-2.343-2-2.709v-2.145h-2v2.145c-1.155.366-2 1.435-2 2.709 0 1.087.604 2.066 1.578 2.553l1.95.974c.291.146.472.439.472.765 0 .471-.383.854-.854.854h-.292c-.471 0-.854-.383-.854-.854v-1.146h-2v1.146c0 1.274.845 2.343 2 2.709z"></path><path d="m12 39c6.065 0 11-4.935 11-11 0-.274-.021-.543-.041-.813l3.392-.566c.624 1.399 2.022 2.379 3.649 2.379 2.206 0 4-1.794 4-4 0-.364-.065-.71-.156-1.045l7.295-4.169c.727.747 1.739 1.214 2.861 1.214 2.206 0 4-1.794 4-4 0-.74-.215-1.424-.567-2.019l10.567-10.567v5.586h2v-9h-9v2h5.586l-10.567 10.567c-.595-.352-1.279-.567-2.019-.567-2.206 0-4 1.794-4 4 0 .364.065.71.156 1.045l-7.295 4.169c-.727-.747-1.739-1.214-2.861-1.214-2.085 0-3.782 1.609-3.964 3.647l-3.407.568c-1.238-4.719-5.527-8.215-10.629-8.215-6.065 0-11 4.935-11 11s4.935 11 11 11zm32-24c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm-14 8c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm-18-4c4.962 0 9 4.038 9 9s-4.038 9-9 9-9-4.038-9-9 4.038-9 9-9z"></path><path d="m3 63h10v-22h-10zm2-20h6v18h-6z"></path><path d="m15 63h10v-20h-10zm2-18h6v16h-6z"></path><path d="m27 63h10v-32h-10zm2-30h6v28h-6z"></path><path d="m54 47.145v-2.145h-2v2.145c-1.155.366-2 1.435-2 2.709 0 1.087.604 2.065 1.578 2.553l1.95.975c.291.145.472.438.472.764 0 .47-.383.854-.854.854h-.292c-.471 0-.854-.384-.854-.854v-1.146h-2v1.146c0 1.275.845 2.344 2 2.709v2.145h2v-2.145c1.155-.366 2-1.435 2-2.709 0-1.087-.604-2.065-1.578-2.553l-1.95-.975c-.291-.145-.472-.438-.472-.764 0-.47.383-.854.854-.854h.292c.471 0 .854.384.854.854v.146h2v-.146c0-1.274-.845-2.343-2-2.709z"></path><path d="m61.48 47.281-3.396-5.434 1.777-6.219c.092-.325.139-.66.139-.996 0-2.003-1.629-3.632-3.631-3.632h-2.737c-1.413 0-2.626.819-3.226 2h-1.406v-10h-10v40h14c5.514 0 10-4.486 10-10v-.419c0-1.877-.526-3.709-1.52-5.3zm-9.48-12.649c0-.9.732-1.632 1.631-1.632h2.737c.9 0 1.632.732 1.632 1.632 0 .151-.021.302-.063.448l-1.691 5.92h-6.832l-2.879-2.879c-.34-.341-.535-.811-.535-1.293 0-1.008.82-1.828 1.829-1.828h2.171v2h2zm-11 26.368v-36h6v8.096c-1.713.38-3 1.907-3 3.732 0 1.023.398 1.984 1.122 2.707l2.609 2.609-3.21 5.137c-.995 1.591-1.521 3.423-1.521 5.3v.419c0 3.273 1.588 6.175 4.026 8zm20-8c0 4.411-3.589 8-8 8s-8-3.589-8-8v-.419c0-1.501.42-2.967 1.216-4.239l3.338-5.342h6.892l3.338 5.342c.796 1.272 1.216 2.738 1.216 4.239z"></path></g></svg>
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
    <img src={Image2} alt="" className="especial" />
  </div>

  <div className="right">
    <span>Sistema PDV - Frente de Caixa</span>
    <p>
      Com o Ponto de Venda do <strong>BLUE ERP</strong>, você pode registrar suas vendas de maneira <strong>simples</strong> e <strong>intuitiva</strong>, utilizando botões de acesso rápido. É possível aplicar descontos, adicionar clientes e escolher diferentes formas de pagamento. 
      <br /><br />
      Além disso, o sistema oferece <strong>integração financeira</strong> e <strong>fiscal</strong>. Para cada transação, você tem a opção de <strong>emitir notas fiscais</strong> e gerar lançamentos financeiros. E não esqueça da <strong>baixa automática do estoque</strong>, que garante que seus registros estejam sempre atualizados.
    </p>
    <button onClick={() => abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
  </div>

  <img src={Set} alt="descer" className="bottom" onClick={() => handleScrollToSection(section2Ref)} />
</S.Main2>

<S.Main2 ref={section2Ref}>
  <div className="left">
    <span>Sistema CRM</span>
    <p>
      O módulo de <strong>Gestão de CRM</strong> do <strong>BLUE ERP</strong> proporciona os melhores <strong>controles empresariais</strong> para a sua empresa. Com gráficos sempre atualizados, você pode monitorar a evolução das negociações e identificar novas oportunidades.
      <br /><br />
      Isso permite que você tenha uma <strong>visão abrangente</strong> do relacionamento com seus clientes, além de possibilitar o <strong>acompanhamento</strong> e o <strong>planejamento</strong> de suas ações de marketing e muito mais.
    </p>
    <button onClick={() => abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
  </div>

  <div className="right">
    <img src={Image3} alt="" />
  </div>

  <img src={Set} alt="descer" className="bottom" onClick={() => handleScrollToSection(section3Ref)} />
</S.Main2>

<S.Main2 ref={section3Ref}>
  <div className="left">
    <img src={Image4} alt="" />
  </div>

  <div className="right">
    <span>Faturamento em Lote</span>
    <p>
      Empresas que lidam com <strong>grandes volumes de notas fiscais</strong> e operam no <strong>e-commerce</strong> serão as mais beneficiadas com esta ferramenta. Em apenas <strong>três passos simples</strong>, você pode faturar múltiplos pedidos, emitir suas respectivas notas fiscais, gerar boletos e enviá-los por e-mail para seus clientes, tudo de uma só vez.
      <br /><br />
      Sem burocracia e sem a necessidade de abrir cada pedido individualmente para faturá-los.
    </p>
    <button onClick={() => abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
  </div>

  <img src={Set} alt="descer" className="bottom" onClick={() => handleScrollToSection(section4Ref)} />
</S.Main2>

<S.Main2 ref={section4Ref}>
  <div className="left">
    <span>Gestão de Vendedores</span>
    <p>
      Com essa funcionalidade, você pode gerenciar seus <strong>vendedores</strong>, <strong>vendas</strong>, <strong>comissões</strong> e DRE com apenas alguns cliques.
      <br /><br />
      Na <strong>BLUE ERP</strong>, é possível também controlar quais <strong>dados</strong> seus vendedores terão acesso, utilizando o <strong>sistema de permissões</strong> do dashboard de vendedores.
    </p>
    <button onClick={() => abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
  </div>

  <div className="right">
    <div className="Especial">
      <img src={Image5} alt="" />
    </div>
  </div>
</S.Main2>

<S.Main3 ref={section5Ref}>
  <span>Tenha recursos exclusivos para força de vendas e <strong>gestão de clientes!</strong></span>

  <div className="cards">
    <div className="card">
      <span>Orçamentos de Vendas</span>
      <p>
        Com essa funcionalidade, você pode selecionar os <strong>dados do cliente</strong> e dos <strong>produtos ou serviços</strong> e enviar orçamentos personalizados rapidamente, seja por <strong>e-mail</strong> ou em formato impresso.
      </p>
    </div>

    <div className="card">
      <span>Emissão de Pedidos</span>
      <p>
        Esse recurso permite <strong>centralizar</strong> todos os <strong>pedidos</strong> da sua empresa em um único lugar. Você pode gerar ordens de compra, emitir notas fiscais e controlar todos os seus registros de maneira <strong>simples</strong>, <strong>rápida</strong> e <strong>segura</strong>.
      </p>
    </div>

    <div className="card">
      <span>Emissor de Boletos</span>
      <p>
        Integrado com os principais <strong>bancos nacionais</strong> e com leitura de arquivos de retorno em questão de segundos, nosso <strong>emissor de boletos</strong> simplifica o processo de cobranças, integrando as informações diretamente ao <strong>fluxo de caixa</strong>.
      </p>
    </div>

    <div className="card">
      <span>Relatório de Vendas</span>
      <p>
        Monitorar as <strong>vendas</strong> da sua empresa ficou muito mais fácil. Com o <strong>BLUE ERP</strong>, você tem acesso a <strong>gráficos</strong> de vendas e fluxo de caixa em <strong>tempo real</strong>, além de um ranking dos <strong>produtos mais vendidos</strong> e dos clientes.
      </p>
    </div>

    <div className="card">
      <span>Cadastro de Clientes</span>
      <p>
        Seja através das <strong>modais disponíveis</strong> em qualquer tela ou diretamente pelo menu de registro de clientes, você pode inserir os <strong>dados dos seus clientes</strong> de maneira intuitiva. Esses dados podem ser utilizados em todas as suas operações, evitando <strong>retrabalho</strong>.
      </p>
    </div>

    <div className="card">
      <span>Pipe de Oportunidades e Funil</span>
      <p>
        Visualize o progresso das suas negociações com nosso <strong>Funil de Vendas</strong>. Com ele, você acompanha <strong>oportunidades</strong>, pedidos e faturamentos de cada negociação. Complementando esse módulo, temos o <strong>Pipe de Oportunidades</strong>, que facilita a visualização dos seus dados, garantindo que você não perca nenhum negócio!
      </p>
    </div>
  </div>
</S.Main3>


      <Footer/>
     </S.Container>
    )
}