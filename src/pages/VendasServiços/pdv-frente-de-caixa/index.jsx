import * as S from "./style";

import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";

import Set from "../assets/bottom-set.svg";
import Image1 from "../assets/top-image-pdv.png";
import Image2 from "../assets/cfe-sat.svg";
import Image3 from "../assets/sistema-de-pdv-offline.svg";
import Image4 from "../assets/contas-a-pagar-e-a-receber.svg";
import Image5 from "../assets/suporte-ao-tef.svg";
import Image6 from "../assets/impressao-documento-fiscal.svg";

export function PDV(){
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


       <div className="Center">
       <div className="left">
        <h2>
        <strong>Frente de Caixa (PDV) </strong> <br /> com Cupom Fiscal Eletrônico
        </h2>

        <p>
        Com ele você emite notas e cupons fiscais, tem suporte ao TEF, <br />
        pode usar leitores de códigos de barra, gerar a baixa <br /> 
        no estoque e o lançamento financeiro, automaticamente.
        </p>

        <button  onClick={()=> abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
       </div>

       <div className="right">
        <img src={Image1} alt="Image" />
       </div>
       </div>

       <div className="Bottom">
        <div className="card" onClick={() => handleScrollToSection(section1Ref)}>
          <svg fill="#7300cc" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><g id="POS"><path d="m61 34h-9v-26a6 6 0 0 0 -6-6h-21a5 5 0 0 0 -5 5v7.1a5.017 5.017 0 0 0 -4 4.9v7h-13a1 1 0 0 0 -1 1v28a1 1 0 0 0 1 1h13v1a5 5 0 0 0 5 5h20a5 5 0 0 0 5-5v-13h10a6 6 0 0 0 6-6v-3a1 1 0 0 0 -1-1zm-53 20h-4v-26h4zm4 0h-2v-26h2zm4 0h-2v-26h2zm6-47a3.009 3.009 0 0 1 3-3h16.53a5.971 5.971 0 0 0 -1.53 4v14h-18zm22 50a3.009 3.009 0 0 1 -3 3h-20a3.009 3.009 0 0 1 -3-3v-38a3.01 3.01 0 0 1 2-2.82v6.82a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1v-6.82a3.01 3.01 0 0 1 2 2.82zm2-15v-23a5.017 5.017 0 0 0 -4-4.9v-6.1a4 4 0 0 1 8 0v30a5.979 5.979 0 0 0 1.54 4zm14-4a4 4 0 0 1 -8 0v-2h8z"></path><path d="m25 36h-4a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0 -1-1zm-1 4h-2v-2h2z"></path><path d="m33 36h-4a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0 -1-1zm-1 4h-2v-2h2z"></path><path d="m41 36h-4a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0 -1-1zm-1 4h-2v-2h2z"></path><path d="m25 44h-4a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0 -1-1zm-1 4h-2v-2h2z"></path><path d="m33 44h-4a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0 -1-1zm-1 4h-2v-2h2z"></path><path d="m41 44h-4a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0 -1-1zm-1 4h-2v-2h2z"></path><path d="m25 52h-4a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0 -1-1zm-1 4h-2v-2h2z"></path><path d="m33 52h-4a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0 -1-1zm-1 4h-2v-2h2z"></path><path d="m41 52h-4a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0 -1-1zm-1 4h-2v-2h2z"></path><path d="m41 28h-20a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1v-4a1 1 0 0 0 -1-1zm-1 4h-18v-2h18z"></path><path d="m34 15a3.01 3.01 0 0 1 -2 2.82v1.18h-2v-1.18a3.01 3.01 0 0 1 -2-2.82h2a1 1 0 1 0 1-1 3 3 0 0 1 -1-5.82v-1.18h2v1.18a3.01 3.01 0 0 1 2 2.82h-2a1 1 0 1 0 -1 1 3.009 3.009 0 0 1 3 3z"></path><path d="m2 2h2v2h-2z"></path><path d="m6 2h8v2h-8z"></path><path d="m2 8h2v2h-2z"></path><path d="m6 8h8v2h-8z"></path><path d="m2 14h2v2h-2z"></path><path d="m6 14h8v2h-8z"></path><path d="m60 48h2v2h-2z"></path><path d="m50 48h8v2h-8z"></path><path d="m60 54h2v2h-2z"></path><path d="m50 54h8v2h-8z"></path><path d="m60 60h2v2h-2z"></path><path d="m50 60h8v2h-8z"></path></g></svg>
            <span>Emissão de NFC-e e CF-e SAT</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section2Ref)}>
          <svg fill="#7300cc" height="1063pt" viewBox="-33 -33 1063 1063.7489" width="1063pt" xmlns="http://www.w3.org/2000/svg"><path d="m448.15625 64.125h405.109375c48.304687 0 87.644531 39.339844 87.644531 87.644531v586.242188h25.320313c16.125 0 29.207031 13.074219 29.207031 29.207031v198.8125c0 16.136719-13.082031 29.214844-29.207031 29.214844h-938.757813c-16.140625 0-29.222656-13.078125-29.222656-29.214844v-198.8125c0-16.132812 13.082031-29.207031 29.222656-29.207031h25.3125v-586.242188c0-48.304687 39.335938-87.644531 87.636719-87.644531h35.0625l.078125-37.003906c0-19.8125 19.988281-34.3125 39.070312-27.386719l43.625 15.863281 43.636719-15.863281c6.199219-2.25 13.179688-2.425781 19.851563 0l43.636718 15.863281 41.464844-15.078125c21.785156-8.902343 41.308594 6.953125 41.308594 26.601563zm-276.566406 401.214844c-16.128906 0-29.214844-13.085938-29.214844-29.214844 0-16.136719 13.085938-29.21875 29.214844-29.21875h3.894531v-284.355469h-35.0625c-16.050781 0-29.203125 13.167969-29.203125 29.21875v586.242188h771.261719v-586.242188c0-16.050781-13.164063-29.21875-29.214844-29.21875h-405.109375v284.355469h3.894531c16.136719 0 29.214844 13.082031 29.214844 29.21875 0 16.128906-13.078125 29.210938-29.214844 29.210938h-280.460937zm615.449218 175.285156c-16.132812 0-29.210937 13.082031-29.210937 29.207031 0 16.148438 13.078125 29.21875 29.210937 29.21875 16.132813 0 29.214844-13.070312 29.214844-29.21875 0-16.125-13.082031-29.207031-29.214844-29.207031zm-116.855468 0c-16.136719 0-29.210938 13.082031-29.210938 29.207031 0 16.148438 13.074219 29.21875 29.210938 29.21875 16.132812 0 29.214844-13.070312 29.214844-29.21875 0-16.125-13.082032-29.207031-29.214844-29.207031zm-116.855469 0c-16.132813 0-29.21875 13.082031-29.21875 29.207031 0 16.148438 13.085937 29.21875 29.21875 29.21875 16.140625 0 29.222656-13.070312 29.222656-29.21875 0-16.125-13.082031-29.207031-29.222656-29.207031zm233.710937-116.855469c-16.132812 0-29.210937 13.074219-29.210937 29.210938 0 16.132812 13.078125 29.214843 29.210937 29.214843 16.132813 0 29.214844-13.082031 29.214844-29.214843 0-16.136719-13.082031-29.210938-29.214844-29.210938zm-116.855468 0c-16.136719 0-29.210938 13.074219-29.210938 29.210938 0 16.132812 13.074219 29.214843 29.210938 29.214843 16.132812 0 29.214844-13.082031 29.214844-29.214843 0-16.136719-13.082032-29.210938-29.214844-29.210938zm-116.855469 0c-16.132813 0-29.21875 13.074219-29.21875 29.210938 0 16.132812 13.085937 29.214843 29.21875 29.214843 16.140625 0 29.222656-13.082031 29.222656-29.214843 0-16.136719-13.082031-29.210938-29.222656-29.210938zm233.710937-116.863281c-16.132812 0-29.210937 13.082031-29.210937 29.21875 0 16.128906 13.078125 29.214844 29.210937 29.214844 16.132813 0 29.214844-13.085938 29.214844-29.214844 0-16.136719-13.082031-29.21875-29.214844-29.21875zm-116.855468 0c-16.136719 0-29.210938 13.082031-29.210938 29.21875 0 16.128906 13.074219 29.214844 29.210938 29.214844 16.132812 0 29.214844-13.085938 29.214844-29.214844 0-16.136719-13.082032-29.21875-29.214844-29.21875zm-116.855469 0c-16.132813 0-29.21875 13.082031-29.21875 29.21875 0 16.128906 13.085937 29.214844 29.21875 29.214844 16.140625 0 29.222656-13.085938 29.222656-29.214844 0-16.136719-13.082031-29.21875-29.222656-29.21875zm-11.683594-225.914062c-16.140625 0-29.222656 13.070312-29.222656 29.203124v109.070313c0 16.136719 13.082031 29.214844 29.222656 29.214844h264.871094c16.140625 0 29.222656-13.078125 29.222656-29.214844v-109.070313c0-16.132812-13.082031-29.203124-29.222656-29.203124zm235.652344 58.421874h-206.445313v50.632813h206.445313zm-543.386719 167.492188h155.820313v-338.160156l-14.421875 5.238281c-6.679688 2.421875-13.667969 2.246094-19.855469 0l-43.636719-15.859375-43.628906 15.859375c-6.675781 2.421875-13.664062 2.246094-19.855469 0l-14.421875-5.238281zm229.558594 488.933594h66.75c16.140625 0 29.222656-13.082032 29.222656-29.21875 0-16.125-13.082031-29.207032-29.222656-29.207032h-66.75c-16.140625 0-29.210938 13.082032-29.210938 29.207032 0 16.136718 13.070313 29.21875 29.210938 29.21875zm-406.792969-99.398438v140.375h880.335938v-140.375zm0 0" fill-rule="evenodd"></path></svg>
            <span>NFC-e em Contingência</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section3Ref)}>
          <svg fill="#7300cc" xmlns="http://www.w3.org/2000/svg" width="35.425" height="39.572" viewBox="0 0 35.425 39.572">   <g id="money_1_" data-name="money (1)" transform="translate(-26.832)">     <path id="Caminho_114" data-name="Caminho 114" d="M210.385,223.485h.006a.766.766,0,0,1,.76.773l1.159.01a1.929,1.929,0,0,0-1.335-1.849v-1.252h-1.159v1.245a1.926,1.926,0,0,0,.553,3.766.766.766,0,0,1-.006,1.533h-.007a.766.766,0,0,1-.76-.773l-1.159-.01a1.927,1.927,0,0,0,1.379,1.863v1.238h1.159V228.77a1.926,1.926,0,0,0-.6-3.752.767.767,0,0,1,.006-1.533Z" transform="translate(-167.569 -204.072)"></path>     <path id="Caminho_115" data-name="Caminho 115" d="M177.062,271h1.159v1.159h-1.159Z" transform="translate(-138.619 -250.054)"></path>     <path id="Caminho_116" data-name="Caminho 116" d="M274.937,271H276.1v1.159h-1.159Z" transform="translate(-228.929 -250.054)"></path>     <path id="Caminho_117" data-name="Caminho 117" d="M62.257,108.5H34.947v1.159H61.1v17H58.779V111.978H31.469v-2.319h2.319V108.5H30.31v3.478H26.832V131.3H54.141v-1.159H27.991v-17H57.619v17H55.3V131.3h3.478v-3.478h3.478Z" transform="translate(0 -100.114)"></path>     <path id="Caminho_118" data-name="Caminho 118" d="M84.141,186.158,81.483,183.5H59.49l-2.658,2.658v9.369l2.658,2.658H81.483l2.658-2.658ZM59.97,197.026l-1.979-1.979v-8.408l1.979-1.979H81l1.979,1.979v8.408L81,197.026Z" transform="translate(-27.681 -169.317)"></path>     <path id="Caminho_119" data-name="Caminho 119" d="M290.083,36.376l.423-1.079a10.853,10.853,0,0,0-1.112-.368l-.3,1.119A9.709,9.709,0,0,1,290.083,36.376Z" transform="translate(-241.988 -32.229)"></path>     <path id="Caminho_120" data-name="Caminho 120" d="M165.5,30.91a10.842,10.842,0,0,0-2.851,1.825l.769.867a9.689,9.689,0,0,1,6.445-2.443,9.813,9.813,0,0,1,1.488.113l.176-1.146A10.974,10.974,0,0,0,169.868,30,10.818,10.818,0,0,0,165.5,30.91Z" transform="translate(-125.323 -27.681)"></path>     <path id="Caminho_121" data-name="Caminho 121" d="M151.241,1.159a11.952,11.952,0,0,1,8.73,3.749h-2.218V6.067h4.058V2.01h-1.159V3.942a13.2,13.2,0,0,0-18.185-.6l.771.866A12.02,12.02,0,0,1,151.241,1.159Z" transform="translate(-106.697)"></path>     <path id="Caminho_122" data-name="Caminho 122" d="M122.472,54.956l-.847-.792c-.283.3-.554.62-.806.947l.917.709C121.967,55.522,122.215,55.232,122.472,54.956Z" transform="translate(-86.724 -49.978)"></path>     <path id="Caminho_123" data-name="Caminho 123" d="M240.5,438.082a10.843,10.843,0,0,0,2.851-1.825l-.769-.867a9.69,9.69,0,0,1-6.445,2.443,9.807,9.807,0,0,1-1.488-.113l-.176,1.146a10.985,10.985,0,0,0,1.664.127A10.817,10.817,0,0,0,240.5,438.082Z" transform="translate(-191.593 -401.739)"></path>     <path id="Caminho_124" data-name="Caminho 124" d="M205.009,458.346l-.423,1.079a10.852,10.852,0,0,0,1.112.368l.3-1.119A9.739,9.739,0,0,1,205.009,458.346Z" transform="translate(-164.015 -422.921)"></path>     <path id="Caminho_125" data-name="Caminho 125" d="M129.822,438.408a11.952,11.952,0,0,1-8.73-3.749h2.218V433.5h-4.058v4.058h1.159v-1.932a13.2,13.2,0,0,0,18.185.6l-.771-.866A12.02,12.02,0,0,1,129.822,438.408Z" transform="translate(-85.278 -399.995)"></path>     <path id="Caminho_126" data-name="Caminho 126" d="M369.8,437.276l.847.792c.283-.3.554-.62.806-.947l-.917-.709C370.306,436.71,370.059,437,369.8,437.276Z" transform="translate(-316.461 -402.682)"></path>   </g> </svg>
            <span>Controle de Fluxo de Caixa</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section4Ref)}>
          <svg fill="#7300cc" id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m61.644 267.062h207.103c5.522 0 10-4.478 10-10v-60.943c0-5.522-4.478-10-10-10h-207.103c-5.522 0-10 4.478-10 10v60.943c0 5.523 4.477 10 10 10zm10-60.943h187.103v40.943h-187.103z"></path><path d="m51.644 457.043c0 5.522 4.478 10 10 10h207.103c5.522 0 10-4.478 10-10v-155.023c0-5.522-4.478-10-10-10h-207.103c-5.522 0-10 4.478-10 10zm158.058-145.023h49.044v31.675h-49.044zm0 51.674h49.044v31.675h-49.044zm0 51.675h49.044v31.674h-49.044zm-69.015-103.349h49.016v31.675h-49.016zm0 51.674h49.016v31.675h-49.016zm0 51.675h49.016v31.674h-49.016zm-69.043-103.349h49.043v31.675h-49.043zm0 51.674h49.043v31.675h-49.043zm0 51.675h49.043v31.674h-49.043z"></path><path d="m387.286 361.398c8.133 0 15.543-3.126 21.09-8.229 5.547 5.103 12.957 8.229 21.091 8.229 17.159 0 31.119-13.871 31.119-30.92s-13.96-30.919-31.119-30.919c-8.134 0-15.544 3.126-21.091 8.229-5.546-5.103-12.957-8.229-21.09-8.229-17.144 0-31.091 13.87-31.091 30.919s13.948 30.92 31.091 30.92zm42.181-41.838c6.131 0 11.119 4.898 11.119 10.919s-4.988 10.92-11.119 10.92c-6.115 0-11.091-4.898-11.091-10.92 0-6.021 4.976-10.919 11.091-10.919zm-42.181 0c6.115 0 11.09 4.898 11.09 10.919s-4.975 10.92-11.09 10.92-11.091-4.898-11.091-10.92c0-6.021 4.976-10.919 11.091-10.919z"></path><path d="m138.831 69.038h52.755c5.522 0 10-4.478 10-10s-4.478-10-10-10h-52.755c-5.522 0-10 4.478-10 10s4.478 10 10 10z"></path><path d="m138.831 109.034h52.755c5.522 0 10-4.478 10-10s-4.478-10-10-10h-52.755c-5.522 0-10 4.478-10 10s4.478 10 10 10z"></path><path d="m480.792 199.3h-156.751v-69.312c0-17.424-14.241-31.6-31.747-31.6h-51.186v-30.03h42.812c5.522 0 10-4.478 10-10v-22.167c0-19.956-16.331-36.191-36.405-36.191-1.839 0-145.461 0-145.461 0-12.558 0-22.774 10.17-22.774 22.671v75.718h-51.156c-17.521 0-31.776 14.176-31.776 31.6v125.997c0 5.522 4.478 10 10 10s10-4.478 10-10v-125.998c0-6.396 5.283-11.6 11.776-11.6h51.156v22.803h-21.15c-5.522 0-10 4.478-10 10s4.478 10 10 10h31.15 131.828 28.492c5.522 0 10-4.478 10-10s-4.478-10-10-10h-18.492v-22.803h51.186c6.478 0 11.747 5.203 11.747 11.6v350.412c0 6.396-5.27 11.6-11.747 11.6h-254.17c-6.493 0-11.776-5.203-11.776-11.6v-130.305c0-5.522-4.478-10-10-10s-10 4.478-10 10v130.305c0 17.424 14.255 31.6 31.776 31.6h254.17c17.506 0 31.747-14.176 31.747-31.6v-77.702h156.751c13.708 0 24.86-11.086 24.86-24.712v-153.974c0-13.626-11.152-24.712-24.86-24.712zm-239.684-159.651v-3.458c0-8.928 7.359-16.191 16.406-16.191 9.046 0 16.405 7.264 16.405 16.191v12.167h-32.812v-8.709zm-20-3.458v105h-111.828v-118.52c0-1.448 1.271-2.671 2.773-2.671h112.917c-2.465 4.876-3.862 10.373-3.862 16.191zm264.544 341.795c0 2.554-2.226 4.712-4.86 4.712h-156.751v-119.632h161.611zm0-134.92h-161.611v-23.766h156.751c2.635 0 4.86 2.158 4.86 4.712z"></path><path d="m16.348 315.194c5.522 0 10-4.478 10-10v-.057c0-5.522-4.478-9.972-10-9.972s-10 4.506-10 10.028 4.477 10.001 10 10.001z"></path></g></g></svg>
            <span>Suporte ao TEF</span>
        </div>
        <div className="card" onClick={() => handleScrollToSection(section5Ref)}>
        <svg fill="#7300cc" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 480 480" xml:space="preserve"> <g> 	<g> 		<path d="M472,160h-40v-56c0-4.418-3.582-8-8-8h-24V8c0-4.418-3.582-8-8-8H88c-4.418,0-8,3.582-8,8v88H56c-4.418,0-8,3.582-8,8v56 			H8c-4.418,0-8,3.582-8,8v224c0,4.418,3.582,8,8,8h72v72c0,4.418,3.582,8,8,8h304c4.418,0,8-3.582,8-8v-72h72c4.418,0,8-3.582,8-8 			V168C480,163.582,476.418,160,472,160z M400,112h16v48h-16V112z M96,16h288v144H96V16z M64,112h16v48H64V112z M80,352h-8v-24h8 			V352z M384,464H96V328h288V464z M464,384h-64v-16h16c4.418,0,8-3.582,8-8v-40c0-4.418-3.582-8-8-8H64c-4.418,0-8,3.582-8,8v40 			c0,4.418,3.582,8,8,8h16v16H16V176h448V384z M400,352v-24h8v24H400z"></path> 	</g> </g> <g> 	<g> 		<rect x="176" y="352" width="176" height="16"></rect> 	</g> </g> <g> 	<g> 		<rect x="128" y="384" width="224" height="16"></rect> 	</g> </g> <g> 	<g> 		<rect x="128" y="416" width="176" height="16"></rect> 	</g> </g> <g> 	<g> 		<rect x="128" y="352" width="32" height="16"></rect> 	</g> </g> <g> 	<g> 		<path d="M104,192H40c-4.418,0-8,3.582-8,8v32c0,4.418,3.582,8,8,8h64c4.418,0,8-3.582,8-8v-32C112,195.582,108.418,192,104,192z 			 M96,224H48v-16h48V224z"></path> 	</g> </g> <g> 	<g> 		<rect x="128" y="224" width="80" height="16"></rect> 	</g> </g> <g> 	<g> 		<rect x="224" y="224" width="16" height="16"></rect> 	</g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
            <span>Impressoras Térmicas</span>
        </div>
        <div className="card" onClick={() => handleScrollToSection(section6Ref)}>
          <svg fill="#7300cc" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 480.016 480.016" xml:space="preserve"> <g> 	<g> 		<path d="M472.424,313.976l-22.232-9.36l-8.248-19.896l9.12-22.4c1.213-2.98,0.523-6.397-1.752-8.672l-26.072-26.064 			c-2.275-2.275-5.692-2.965-8.672-1.752l-22.4,9.12l-19.904-8.248l-9.344-22.232c-1.249-2.968-4.156-4.897-7.376-4.896h-36.872 			c-3.222,0-6.129,1.933-7.376,4.904l-9.36,22.224l-19.896,8.248l-22.4-9.12c-2.98-1.213-6.397-0.523-8.672,1.752l-26.072,26.072 			c-2.275,2.275-2.965,5.692-1.752,8.672l9.12,22.4l-8.248,19.896l-22.224,9.36c-2.971,1.247-4.904,4.154-4.904,7.376v36.864 			c-0.001,3.22,1.928,6.127,4.896,7.376l22.232,9.36l8.248,19.904l-9.12,22.4c-1.213,2.98-0.523,6.397,1.752,8.672L250.976,452 			c2.275,2.275,5.692,2.965,8.672,1.752l22.4-9.112l19.896,8.24l9.36,22.24c1.249,2.968,4.156,4.897,7.376,4.896h36.864 			c3.218,0.002,6.124-1.923,7.376-4.888l9.36-22.24l19.904-8.248l22.4,9.12c2.977,1.204,6.385,0.511,8.656-1.76l26.08-26.08 			c2.275-2.275,2.965-5.692,1.752-8.672l-9.112-22.4l8.24-19.904l22.24-9.36c2.959-1.253,4.881-4.155,4.88-7.368v-36.864 			C477.321,318.132,475.392,315.225,472.424,313.976z M461.32,352.904l-20.368,8.584c-1.941,0.817-3.482,2.366-4.288,4.312 			l-10.76,25.984c-0.796,1.943-0.796,4.121,0,6.064l8.328,20.552l-18.512,18.52l-20.52-8.352c-1.947-0.792-4.125-0.792-6.072,0 			l-25.976,10.768c-1.944,0.804-3.493,2.342-4.312,4.28L350.224,464h-26.24l-8.568-20.368c-0.817-1.941-2.366-3.482-4.312-4.288 			l-25.984-10.76c-1.945-0.798-4.127-0.798-6.072,0l-20.52,8.344L239.976,418.4l8.352-20.52c0.804-1.944,0.804-4.128,0-6.072 			l-10.768-25.976c-0.804-1.944-2.342-3.493-4.28-4.312l-20.368-8.584v-26.24l20.36-8.568c1.941-0.817,3.482-2.366,4.288-4.312 			l10.768-25.976c0.8-1.948,0.8-4.132,0-6.08l-8.352-20.52l18.552-18.552l20.52,8.352c1.945,0.812,4.135,0.812,6.08,0l25.976-10.768 			c1.946-0.806,3.495-2.347,4.312-4.288l8.568-20.36h26.24l8.584,20.368c0.819,1.938,2.368,3.476,4.312,4.28l25.976,10.768 			c1.943,0.808,4.129,0.808,6.072,0l20.552-8.384l18.552,18.552l-8.352,20.52c-0.8,1.948-0.8,4.132,0,6.08l10.768,25.976 			c0.806,1.946,2.347,3.495,4.288,4.312l20.344,8.568V352.904z"></path> 	</g> </g> <g> 	<g> 		<path d="M337.112,259.792c-44.183,0-80,35.817-80,80c0,44.183,35.817,80,80,80c44.183,0,80-35.817,80-80 			C417.064,295.629,381.275,259.84,337.112,259.792z M337.112,403.792c-35.346,0-64-28.654-64-64c0-35.346,28.654-64,64-64 			c35.346,0,64,28.654,64,64C401.072,375.122,372.442,403.752,337.112,403.792z"></path> 	</g> </g> <g> 	<g> 		<rect x="329.112" y="331.792" width="16" height="16"></rect> 	</g> </g> <g> 	<g> 		<rect x="297.112" y="331.792" width="16" height="16"></rect> 	</g> </g> <g> 	<g> 		<rect x="361.08" y="331.792" width="16" height="16"></rect> 	</g> </g> <g> 	<g> 		<path d="M336.984,89.528L315.848,78.64l-3.696-8.912l7.248-22.68c0.911-2.85,0.155-5.971-1.96-8.088l-15.08-15.08 			c-2.117-2.115-5.238-2.871-8.088-1.96l-22.68,7.248l-8.912-3.696L251.792,4.336C250.42,1.673,247.675,0,244.68,0h-21.336 			c-2.995,0-5.74,1.673-7.112,4.336L205.32,25.472l-8.904,3.696l-22.648-7.248c-2.853-0.914-5.977-0.158-8.096,1.96l-15.088,15.08 			c-2.115,2.117-2.871,5.238-1.96,8.088l7.24,22.68l-3.696,8.912L131.04,89.528c-2.663,1.372-4.336,4.117-4.336,7.112v21.336 			c0,2.995,1.673,5.74,4.336,7.112L152.168,136l3.696,8.904l-7.24,22.672c-0.914,2.853-0.158,5.977,1.96,8.096l15.08,15.088 			c2.117,2.115,5.238,2.871,8.088,1.96l22.68-7.24l8.888,3.672l10.888,21.128c1.372,2.663,4.117,4.336,7.112,4.336h21.36 			c2.995,0,5.74-1.673,7.112-4.336l10.888-21.128l8.912-3.696l22.68,7.24c2.85,0.911,5.971,0.155,8.088-1.96l15.08-15.08 			c2.115-2.117,2.871-5.238,1.96-8.088l-7.248-22.68l3.696-8.888l21.136-10.888c2.671-1.376,4.345-4.132,4.336-7.136V96.64 			C341.32,93.645,339.647,90.9,336.984,89.528z M325.32,113.104l-19.408,10c-1.682,0.866-3.003,2.3-3.728,4.048l-5.928,14.32 			c-0.724,1.745-0.804,3.69-0.224,5.488l6.648,20.8l-8.192,8.24l-20.8-6.648c-1.801-0.577-3.748-0.498-5.496,0.224l-14.32,5.936 			c-1.743,0.724-3.174,2.042-4.04,3.72l-10,19.408h-11.616l-10-19.44c-0.864-1.682-2.299-3.001-4.048-3.72l-14.32-5.936 			c-1.745-0.724-3.69-0.804-5.488-0.224l-20.8,6.648l-8.24-8.184l6.648-20.8c0.577-1.801,0.498-3.748-0.224-5.496l-5.936-14.32 			c-0.719-1.749-2.038-3.184-3.72-4.048l-19.408-10v-11.608l19.408-10c1.678-0.866,2.996-2.297,3.72-4.04l5.936-14.32 			c0.722-1.748,0.801-3.695,0.224-5.496l-6.648-20.824l8.216-8.192l20.8,6.648c1.8,0.584,3.749,0.504,5.496-0.224l14.32-5.928 			c1.748-0.725,3.182-2.046,4.048-3.728L228.216,16h11.592l10,19.408c0.864,1.681,2.295,3.002,4.04,3.728l14.32,5.928 			c1.747,0.728,3.696,0.808,5.496,0.224l20.8-6.648l8.216,8.192l-6.648,20.8c-0.577,1.801-0.498,3.748,0.224,5.496l5.928,14.32 			c0.726,1.745,2.047,3.176,3.728,4.04l19.408,10.024V113.104z"></path> 	</g> </g> <g> 	<g> 		<path d="M192.984,271.088l-20.856-10.752l-2.488-5.984l7.152-22.4c0.912-2.854,0.152-5.979-1.968-8.096l-12-12 			c-2.119-2.118-5.243-2.874-8.096-1.96l-22.4,7.152l-5.992-2.48l-10.752-20.864c-1.372-2.663-4.117-4.336-7.112-4.336h-16.96 			c-2.993,0.003-5.733,1.676-7.104,4.336l-10.76,20.864l-5.984,2.48l-22.344-7.144c-2.855-0.917-5.984-0.161-8.104,1.96l-12,12 			c-2.144,2.12-2.914,5.265-1.992,8.136l7.152,22.4l-2.48,5.984L7.032,271.088c-2.66,1.371-4.333,4.111-4.336,7.104V295.2 			c0,2.995,1.673,5.74,4.336,7.112l20.864,10.728l2.48,5.992l-7.152,22.4c-0.914,2.853-0.158,5.977,1.96,8.096l12,12 			c2.13,2.127,5.274,2.878,8.136,1.944l22.4-7.152l5.984,2.488l10.752,20.856c1.371,2.66,4.111,4.333,7.104,4.336h16.96 			c2.995,0,5.74-1.673,7.112-4.336l10.752-20.856l5.992-2.488l22.4,7.152c2.853,0.914,5.977,0.158,8.096-1.96l12-12 			c2.12-2.117,2.88-5.242,1.968-8.096l-7.152-22.4l2.488-5.992l20.856-10.752c2.631-1.378,4.283-4.101,4.288-7.072v-17.008 			C197.317,275.199,195.644,272.459,192.984,271.088z M181.32,290.304l-19.136,9.864c-1.684,0.861-3.004,2.297-3.72,4.048 			l-4.72,11.392c-0.727,1.749-0.809,3.7-0.232,5.504l6.56,20.52l-5.12,5.12l-20.52-6.56c-1.803-0.585-3.757-0.503-5.504,0.232 			l-11.392,4.72c-1.751,0.716-3.187,2.036-4.048,3.72L103.624,368h-7.2l-9.864-19.136c-0.861-1.684-2.297-3.004-4.048-3.72 			l-11.4-4.72c-1.745-0.735-3.696-0.817-5.496-0.232l-20.52,6.56l-5.12-5.12l6.56-20.52c0.581-1.806,0.502-3.759-0.224-5.512 			l-4.728-11.392c-0.726-1.745-2.047-3.176-3.728-4.04l-19.16-9.864v-7.2l19.128-9.864c1.681-0.864,3.002-2.295,3.728-4.04 			l4.728-11.4c0.729-1.749,0.808-3.701,0.224-5.504l-6.56-20.52l5.12-5.12l20.52,6.56c1.803,0.583,3.755,0.504,5.504-0.224 			l11.4-4.728c1.73-0.734,3.146-2.054,4-3.728l9.864-19.128h7.2l9.864,19.128c0.854,1.674,2.27,2.994,4,3.728l11.392,4.728 			c1.753,0.726,3.706,0.805,5.512,0.224l20.52-6.56l5.12,5.12l-6.56,20.52c-0.575,1.802-0.493,3.749,0.232,5.496l4.72,11.4 			c0.716,1.751,2.036,3.187,3.72,4.048l19.248,9.832V290.304z"></path> 	</g> </g> <g> 	<g> 		<path d="M234.016,51.304c-30.928,0-56,25.072-56,56c0,30.928,25.072,56,56,56c30.928,0,56-25.072,56-56 			C289.976,76.393,264.927,51.344,234.016,51.304z M234.016,147.304c-22.091,0-40-17.909-40-40s17.909-40,40-40s40,17.909,40,40 			c0,0,0,0,0,0C273.99,129.384,256.096,147.278,234.016,147.304z"></path> 	</g> </g> <g> 	<g> 		<rect x="210.016" y="99.304" width="16" height="16"></rect> 	</g> </g> <g> 	<g> 		<rect x="242.016" y="99.304" width="16" height="16"></rect> 	</g> </g> <g> 	<g> 		<path d="M100.008,246.688c-22.091,0-40,17.909-40,40c0,22.091,17.909,40,40,40c22.091,0,40-17.909,40-40 			C139.982,264.608,122.088,246.714,100.008,246.688z M100.008,310.688c-13.255,0-24-10.745-24-24s10.745-24,24-24 			c13.255,0,24,10.745,24,24S113.263,310.688,100.008,310.688z"></path> 	</g> </g> <g> 	<g> 		<rect x="92.008" y="278.688" width="16" height="16"></rect> 	</g> </g> <g> 	<g> 		<path d="M370.656,90.928l-10.672,11.92c31.072,27.822,51.797,65.355,58.792,106.472l15.776-2.64 			C426.958,161.98,404.433,121.175,370.656,90.928z"></path> 	</g> </g> <g> 	<g> 		<path d="M105.024,90c-28.078,24.731-48.648,56.848-59.368,92.696l15.328,4.576c9.865-32.98,28.794-62.526,54.632-85.272 			L105.024,90z"></path> 	</g> </g> <g> 	<g> 		<path d="M135.584,393.336l-8.856,13.328c20.931,13.951,44.326,23.79,68.936,28.992L198.976,420 			C176.345,415.213,154.832,406.164,135.584,393.336z"></path> 	</g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
            <span>PDV Completo</span>
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
    <img src={Image2} alt="" />
  </div>

  <div className="right">
    <span>
      <strong>Emissão de NFC-e e CF-e SAT</strong>
    </span>

    <p>
      Esse recurso elimina a necessidade de <strong>investimentos em impressoras fiscais</strong> e mensalidades de manutenção de equipamentos, pois o <strong>documento fiscal é digital</strong>. Você pode enviá-lo diretamente por e-mail ao cliente ou acessá-lo no site da Secretaria da Fazenda utilizando a leitura de um QR-Code. 
      <br /><br />
      Se precisar imprimir o documento, <strong>qualquer impressora não fiscal</strong> servirá.
      <br /><br />
      Com isso, uma das grandes vantagens do nosso PDV é que você começa a economizar <strong>tanto tempo quanto dinheiro</strong> desde o início!
    </p>

    <button onClick={() => abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
  </div>

  <img src={Set} alt="descer" className="bottom" onClick={() => handleScrollToSection(section2Ref)} />
</S.Main2>

<S.Main2 ref={section2Ref}>
  <div className="left">
    <span>
      <strong>Ponto de Venda Offline com Emissão de NFC-e em Contingência</strong>
    </span>

    <p>
      Quem nunca enfrentou problemas com a <strong>conexão de internet</strong> no negócio? Seja por localização, clima ou outras inconsistências, <strong>com a BLUE ERP você não precisa se preocupar</strong> com a falta de internet.
      <br /><br />
      Os clientes da BLUE ERP têm à disposição um moderno e <strong>exclusivo Sistema de Retaguarda</strong>, que permite operar offline e continuar realizando vendas.
      <br /><br />
      Além disso, a <strong>emissão de notas e cupons fiscais</strong> também é garantida, podendo ser feita em contingência. Quando a conexão for restabelecida, o sistema envia automaticamente as notas emitidas em contingência para a <strong>SEFAZ</strong> do seu estado. Assim, você pode esquecer as <strong>dores de cabeça</strong> na hora de vender!
    </p>

    <button onClick={() => abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
  </div>

  <div className="right">
    <img src={Image3} alt="" className="especial" />
  </div>

  <img src={Set} alt="descer" className="bottom" onClick={() => handleScrollToSection(section3Ref)} />
</S.Main2>

<S.Main2 ref={section3Ref}>
  <div className="left">
    <img src={Image4} alt="" />
  </div>

  <div className="right">
    <span>
      Controle de Fluxo de Caixa
    </span>

    <p>
      Gerenciar o fluxo de caixa é essencial para manter a <strong>saúde financeira</strong> do seu negócio. Para facilitar esse processo, a BLUE ERP oferece uma solução <strong>simplificada</strong>, que não apenas torna o lançamento das vendas no PDV mais eficiente, mas também inclui dois movimentos adicionais: <strong>retirada e reforço de caixa</strong>.
      <br /><br />
      Com o Sistema ERP BLUE ERP, você poderá realizar essas movimentações com facilidade, além de abrir e fechar o caixa, registrar vendas e emitir notas fiscais simultaneamente.
      <br /><br />
      Você também terá acesso a uma variedade de <strong>funcionalidades financeiras</strong>, incluindo o cadastro de credenciadoras para vendas com cartão de crédito ou débito, além de diversos relatórios financeiros, fiscais e de vendas para uma <strong>gestão mais completa</strong> e informada.
    </p>

    <button onClick={() => abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
  </div>

  <img src={Set} alt="descer" className="bottom" onClick={() => handleScrollToSection(section4Ref)} />
</S.Main2>

<S.Main2 ref={section4Ref}>
  <div className="left">
    <span>
      Suporte ao TEF
    </span>

    <p>
      A <strong>Transferência Eletrônica de Fundos (TEF)</strong> é uma solução que facilita as transações financeiras eletrônicas. Com o recurso de PDV da BLUE ERP, você pode <strong>integrar as informações</strong> das transações TEF diretamente nas suas vendas.
      <br /><br />
      Ao realizar uma transação na máquina disponível em seu estabelecimento, um comprovante é impresso com <strong>todos os detalhes</strong> da operação. Esse comprovante contém informações essenciais, como a empresa responsável pela máquina utilizada e o código da transação, que você pode registrar no sistema.
      <br /><br />
      Assim, a BLUE ERP proporciona um controle eficiente das <strong>vendas realizadas por meio de cartões</strong>, garantindo praticidade e segurança na gestão financeira do seu negócio.
    </p>

    <button onClick={() => abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
  </div>

  <div className="right">
    <img src={Image5} alt="" className="especial" />
  </div>

  <img src={Set} alt="descer" className="bottom" onClick={() => handleScrollToSection(section5Ref)} />
</S.Main2>

<S.Main2 ref={section5Ref}>
  <div className="left">
    <img src={Image6} alt="" />
  </div>

  <div className="right">
    <span>
      Integração com Impressoras Térmicas
    </span>

    <p>
      A BLUE ERP proporciona uma <strong>integração eficaz</strong> com impressoras térmicas, tornando o controle do fluxo de caixa uma tarefa mais simples e eficiente. Além de facilitar o lançamento das vendas no seu PDV, o sistema permite realizar movimentações adicionais, como <strong>retirada e reforço de caixa</strong>.
      <br /><br />
      Com o uso do Sistema ERP BLUE ERP, você pode abrir o caixa, registrar vendas juntamente com a emissão da nota fiscal e efetuar o fechamento de caixa de forma prática. Essa integração garante que todos os <strong>comprovantes e recibos</strong> sejam impressos de maneira rápida e eficiente.
      <br /><br />
      Além disso, você terá acesso a diversos recursos financeiros, como o cadastro de <strong>credenciadoras</strong> para vendas via cartão de crédito ou débito, além de uma variedade de relatórios financeiros, fiscais e de vendas para uma <strong>gestão mais completa</strong> e organizada do seu negócio.
    </p>

    <button onClick={() => abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
  </div>
</S.Main2>


<S.Main3 ref={section6Ref}>
  <span><strong>Frente de Caixa</strong> totalmente integrado à Plataforma de Gestão do seu negócio!</span>

  <div className="cards">
    <div className="card">
      <span><strong>Leitor de Código de Barras</strong></span>
      <p>
        Com uma interface <strong>moderna</strong> e <strong>intuitiva</strong>, o PDV da BLUE ERP permite o uso de leitores de código de barras, facilitando a localização e adição de produtos às <strong>vendas</strong>. Após a leitura de todos os itens, basta finalizar a venda, e o documento fiscal será emitido com todos os produtos registrados automaticamente.
      </p>
    </div>

    <div className="card">
      <span><strong>Vendas Consignadas</strong></span>
      <p>
        As vendas consignadas são ideais para representantes <strong>externos</strong> que retiram mercadorias para revenda. Com o PDV da BLUE ERP, você pode <strong>controlar</strong> as mercadorias consignadas, assim como monitorar a devolução dessas mercadorias, garantindo uma <strong>gestão eficiente</strong> e organizada.
      </p>
    </div>

    <div className="card">
      <span><strong>Aviso de Meta no PDV</strong></span>
      <p>
        Para facilitar o acompanhamento de <strong>metas de vendas</strong>, a BLUE ERP oferece uma funcionalidade que permite ao administrador definir uma <strong>Meta de Venda Mensal</strong> para cada vendedor. Quando o usuário acessa o sistema, uma <strong>mensagem informativa</strong> exibe o valor da meta, o quanto foi atingido até o momento e o que falta para alcançá-la.
      </p>
    </div>

    <div className="card">
      <span><strong>Edição de Preços no PDV</strong></span>
      <p>
        Com a opção de editar <strong>preços</strong> diretamente no PDV, você pode alterar rapidamente o valor de qualquer <strong>produto</strong> sem precisar acessar o cadastro. Essa funcionalidade torna o processo de <strong>vendas</strong> mais prático e ágil, permitindo que você faça ajustes de preço de forma imediata.
      </p>
    </div>

    <div className="card">
      <span><strong>Emissão de NFS-e</strong></span>
      <p>
        A BLUE ERP agora possibilita a emissão de <strong>Notas Fiscais</strong> de Serviço Eletrônicas (NFS-e) diretamente pelo PDV. Durante a venda, você pode buscar <strong>serviços</strong> da mesma forma que faz com os produtos, e ao final, a <strong>NFS-e</strong> é emitida automaticamente, simplificando o processo fiscal.
      </p>
    </div>

    <div className="card">
      <span><strong>Configurações de PDV</strong></span>
      <p>
        Os clientes da BLUE ERP têm acesso a um recurso <strong>exclusivo</strong> que permite configurar seu PDV conforme as <strong>necessidades específicas</strong> de seu negócio. Essa flexibilidade assegura que o sistema se adapte perfeitamente ao seu <strong>modelo de operação</strong>, maximizando a eficiência e a satisfação do cliente.
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