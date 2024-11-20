import * as S from "./style";

import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";

import { IoShieldCheckmarkOutline,  IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdCloudOutline } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { RiWifiOffLine } from "react-icons/ri";

import Set from "../assets/bottom-set.svg";
import Image1 from "../assets/top-image-controle-financeiro.svg";
import Image2 from "../assets/contas-a-pagar-e-a-receber.svg";
import Image3 from "../assets/lancamentos-recorrentes.svg";
import Image4 from "../assets/relatorios-financeiros.svg";
import Image5 from "../assets/grupos-de-dre.svg";

export function ControleFinanceiro(){
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
         <strong> Controle Financeiro Avançado </strong>
         para Acompanhar o Fluxo de Caixa e Lucrar Mais!
        </h2>

        <p>
         Uma solução inteligente e eficiente que conecta todos os setores da sua empresa,
         garantindo que suas finanças estejam sempre organizadas – tudo isso por um preço acessível.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
        <img src={Image1} alt="Image" />
       </div>
       </div>

       <div className="Bottom">
        <div className="card" onClick={() => handleScrollToSection(section1Ref)}>
          <svg fill="#7300cc" xmlns="http://www.w3.org/2000/svg" width="41.322" height="40" viewBox="0 0 41.322 40">   <g id="_16-recieve" data-name="16-recieve" transform="translate(-6 -6)">     <g id="linear_color" data-name="linear color" transform="translate(6 6)">       <path id="Caminho_105" data-name="Caminho 105" d="M42.231,293.283c-.214.111-.419.221-.617.329a3.975,3.975,0,0,0-4.424-.494A21.386,21.386,0,0,0,32.66,296.1l-1.708-.159-3.137-2.509c.875.24,1.771.472,2.552.645a5.123,5.123,0,0,0,1.111.128,3.778,3.778,0,0,0,2.174-.655,5.751,5.751,0,0,0,2.091-3.54.827.827,0,0,0-.593-.924L24.24,286.031a.827.827,0,0,0-.223-.031H6.826a.826.826,0,1,0,0,1.653H23.9l10.014,2.807a3.476,3.476,0,0,1-1.2,1.731,2.444,2.444,0,0,1-1.989.275c-2.516-.559-6.421-1.787-6.46-1.8A.828.828,0,0,0,23.5,292.1l6.612,5.289a.826.826,0,0,0,.44.178l2.323.216,4.784.445a.815.815,0,0,0,.719-.3,15.9,15.9,0,0,1,4.614-3.174,2.236,2.236,0,0,1,2.278.067l-5.751,5.751-9.412.627-12.382-5.213a.828.828,0,0,0-.321-.065H6.826a.826.826,0,1,0,0,1.653H17.238l12.408,5.225a.827.827,0,0,0,.321.065l.055,0,9.917-.661a.826.826,0,0,0,.529-.24l6.612-6.612a.826.826,0,0,0,.039-1.127A4.045,4.045,0,0,0,42.231,293.283Zm-4.821,3.262-2.367-.22a25.288,25.288,0,0,1,2.908-1.74,2.216,2.216,0,0,1,2.076-.043A15.629,15.629,0,0,0,37.41,296.545Z" transform="translate(-6 -262.86)"></path>       <path id="Caminho_106" data-name="Caminho 106" d="M238.76,39.521A8.76,8.76,0,1,0,230,30.76,8.76,8.76,0,0,0,238.76,39.521Zm0-15.868a7.107,7.107,0,1,1-7.107,7.107,7.107,7.107,0,0,1,7.107-7.107Z" transform="translate(-211.488 -20.678)"></path>       <path id="Caminho_107" data-name="Caminho 107" d="M295.356,60.942h1.4a1.158,1.158,0,0,1,1.157,1.157v.083a1.158,1.158,0,0,1-1.157,1.157h-2.083a.455.455,0,0,1-.455-.464l0-.086a.827.827,0,1,0-1.653-.03l0,.086a2.108,2.108,0,0,0,2.108,2.146h.6v.5a.826.826,0,0,0,1.653,0v-.5a2.813,2.813,0,0,0,2.645-2.8V62.1a2.813,2.813,0,0,0-2.81-2.81h-1.4a1.157,1.157,0,1,1,0-2.314h2.05a.455.455,0,0,1,.455.475.826.826,0,1,0,1.651.071,2.108,2.108,0,0,0-2.106-2.2h-.48v-.5a.826.826,0,0,0-1.653,0v.5a2.809,2.809,0,1,0,.083,5.618Z" transform="translate(-268.827 -50.033)"></path>       <path id="Caminho_108" data-name="Caminho 108" d="M423.411,234.209a.826.826,0,1,0-1.169,1.169l2.645,2.645a.826.826,0,0,0,1.169,0l2.645-2.645a.826.826,0,0,0-1.169-1.169l-1.234,1.234v-4.616a.826.826,0,1,0-1.653,0v4.616Z" transform="translate(-387.62 -211.488)"></path>       <path id="Caminho_109" data-name="Caminho 109" d="M454.826,184.314a.826.826,0,0,0,.826-.826v-.661a.826.826,0,1,0-1.653,0v.661A.826.826,0,0,0,454.826,184.314Z" transform="translate(-416.975 -167.455)"></path>       <path id="Caminho_110" data-name="Caminho 110" d="M120.887,62.022a.826.826,0,0,0,1.169,0l2.645-2.645a.826.826,0,0,0-1.169-1.169L122.3,59.443V54.826a.826.826,0,0,0-1.653,0v4.616l-1.234-1.234a.826.826,0,1,0-1.169,1.169Z" transform="translate(-108.744 -50.033)"></path>       <path id="Caminho_111" data-name="Caminho 111" d="M150.826,8.314a.826.826,0,0,0,.826-.826V6.826a.826.826,0,0,0-1.653,0v.661A.826.826,0,0,0,150.826,8.314Z" transform="translate(-138.099 -6)"></path>       <path id="Caminho_112" data-name="Caminho 112" d="M24.887,158.022a.826.826,0,0,0,1.169,0l2.645-2.645a.826.826,0,1,0-1.169-1.169L26.3,155.443v-4.616a.826.826,0,1,0-1.653,0v4.616l-1.234-1.234a.826.826,0,1,0-1.169,1.169Z" transform="translate(-20.678 -138.099)"></path>       <path id="Caminho_113" data-name="Caminho 113" d="M54.826,104.314a.826.826,0,0,0,.826-.826v-.661a.826.826,0,0,0-1.653,0v.661A.826.826,0,0,0,54.826,104.314Z" transform="translate(-50.033 -94.066)"></path>     </g>   </g> </svg>
            <span>Contas a Pagar e a receber</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section2Ref)}>
          <svg fill="#7300cc" id="appointment_1_" data-name="appointment (1)" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">   <g id="Grupo_86" data-name="Grupo 86">     <g id="Grupo_85" data-name="Grupo 85">       <path id="Caminho_127" data-name="Caminho 127" d="M36.094,3.438H32.37V2.344a2.344,2.344,0,0,0-4.688,0V3.438H14.557V2.344a2.344,2.344,0,0,0-4.687,0V3.466a.78.78,0,0,0-.208-.029H6.549A3.911,3.911,0,0,0,2.642,7.344V20.651a.781.781,0,0,0,1.563,0V11.484H32.37a.781.781,0,1,0,0-1.562H4.2V7.344A2.346,2.346,0,0,1,6.549,5H9.661a.783.783,0,0,0,.208-.029V5.977a2.344,2.344,0,1,0,4.688,0V5H27.682v.977a2.344,2.344,0,1,0,4.688,0V5h3.724a2.346,2.346,0,0,1,2.344,2.344V37.031a1.407,1.407,0,0,1-2.813,0V35.01a.781.781,0,0,0-.781-.781H25.755a.781.781,0,1,0,0,1.563h8.306v1.24a2.951,2.951,0,0,0,.355,1.407H2.969a1.408,1.408,0,0,1-1.406-1.406v-1.24H19.049a.781.781,0,1,0,0-1.562H11.243a6.406,6.406,0,1,0-8.348,0H.781A.781.781,0,0,0,0,35.01v2.021A2.972,2.972,0,0,0,2.969,40H37.031A2.973,2.973,0,0,0,40,37.031V7.344A3.911,3.911,0,0,0,36.094,3.438Zm-23.1,2.539a.781.781,0,0,1-1.562,0V2.344a.781.781,0,0,1,1.563,0Zm17.813,0a.781.781,0,1,1-1.562,0V2.344a.781.781,0,0,1,1.563,0ZM2.225,29.375a4.844,4.844,0,1,1,4.844,4.844A4.849,4.849,0,0,1,2.225,29.375Z"></path>     </g>   </g>   <g id="Grupo_88" data-name="Grupo 88" transform="translate(35.304 9.926)">     <g id="Grupo_87" data-name="Grupo 87">       <path id="Caminho_128" data-name="Caminho 128" d="M452.559,127.226a.772.772,0,1,0,.227.546A.778.778,0,0,0,452.559,127.226Z" transform="translate(-451.24 -127)"></path>     </g>   </g>   <g id="Grupo_90" data-name="Grupo 90" transform="translate(22.008 34.291)">     <g id="Grupo_89" data-name="Grupo 89">       <path id="Caminho_129" data-name="Caminho 129" d="M282.9,438.356a.773.773,0,1,0,.227.546A.778.778,0,0,0,282.9,438.356Z" transform="translate(-281.58 -438.13)"></path>     </g>   </g>   <g id="Grupo_92" data-name="Grupo 92" transform="translate(14.734 23.794)">     <g id="Grupo_91" data-name="Grupo 91">       <path id="Caminho_130" data-name="Caminho 130" d="M191.182,304a2.937,2.937,0,1,0,2.937,2.937A2.94,2.94,0,0,0,191.182,304Zm0,4.328a1.391,1.391,0,1,1,1.391-1.391A1.393,1.393,0,0,1,191.182,308.328Z" transform="translate(-188.245 -304)"></path>     </g>   </g>   <g id="Grupo_94" data-name="Grupo 94" transform="translate(22.039 23.794)">     <g id="Grupo_93" data-name="Grupo 93">       <path id="Caminho_131" data-name="Caminho 131" d="M284.515,304a2.937,2.937,0,1,0,2.937,2.937A2.94,2.94,0,0,0,284.515,304Zm0,4.328a1.391,1.391,0,1,1,1.391-1.391A1.393,1.393,0,0,1,284.515,308.328Z" transform="translate(-281.578 -304)"></path>     </g>   </g>   <g id="Grupo_96" data-name="Grupo 96" transform="translate(29.404 23.794)">     <g id="Grupo_95" data-name="Grupo 95">       <path id="Caminho_132" data-name="Caminho 132" d="M377.849,304a2.937,2.937,0,1,0,2.937,2.937A2.94,2.94,0,0,0,377.849,304Zm0,4.328a1.391,1.391,0,1,1,1.391-1.391A1.393,1.393,0,0,1,377.849,308.328Z" transform="translate(-374.912 -304)"></path>     </g>   </g>   <g id="Grupo_98" data-name="Grupo 98" transform="translate(7.429 15.654)">     <g id="Grupo_97" data-name="Grupo 97">       <path id="Caminho_133" data-name="Caminho 133" d="M97.849,200a2.937,2.937,0,1,0,2.937,2.937A2.94,2.94,0,0,0,97.849,200Zm0,4.328a1.391,1.391,0,1,1,1.391-1.391A1.393,1.393,0,0,1,97.849,204.328Z" transform="translate(-94.912 -200)"></path>     </g>   </g>   <g id="Grupo_100" data-name="Grupo 100" transform="translate(22.039 15.654)">     <g id="Grupo_99" data-name="Grupo 99">       <path id="Caminho_134" data-name="Caminho 134" d="M284.515,200a2.937,2.937,0,1,0,2.937,2.937A2.94,2.94,0,0,0,284.515,200Zm0,4.328a1.391,1.391,0,1,1,1.391-1.391A1.393,1.393,0,0,1,284.515,204.328Z" transform="translate(-281.578 -200)"></path>     </g>   </g>   <g id="Grupo_102" data-name="Grupo 102" transform="translate(29.404 15.654)">     <g id="Grupo_101" data-name="Grupo 101">       <path id="Caminho_135" data-name="Caminho 135" d="M377.849,200a2.937,2.937,0,1,0,2.937,2.937A2.94,2.94,0,0,0,377.849,200Zm0,4.328a1.391,1.391,0,1,1,1.391-1.391A1.393,1.393,0,0,1,377.849,204.328Z" transform="translate(-374.912 -200)"></path>     </g>   </g>   <g id="Grupo_104" data-name="Grupo 104" transform="translate(14.734 15.654)">     <g id="Grupo_103" data-name="Grupo 103">       <path id="Caminho_136" data-name="Caminho 136" d="M191.182,200a2.937,2.937,0,1,0,2.937,2.937A2.94,2.94,0,0,0,191.182,200Zm0,4.328a1.391,1.391,0,1,1,1.391-1.391A1.393,1.393,0,0,1,191.182,204.328Z" transform="translate(-188.245 -200)"></path>     </g>   </g>   <g id="Grupo_106" data-name="Grupo 106" transform="translate(3.957 27.281)">     <g id="Grupo_105" data-name="Grupo 105">       <path id="Caminho_137" data-name="Caminho 137" d="M56.984,348.927a.773.773,0,0,0-1.093,0l-2.517,2.517-.86-.86a.773.773,0,1,0-1.093,1.093l1.407,1.407a.773.773,0,0,0,1.093,0l3.064-3.064A.773.773,0,0,0,56.984,348.927Z" transform="translate(-51.194 -348.7)"></path>     </g>   </g> </svg>
            <span>Lançamentos Recorrentes</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section3Ref)}>
          <svg fill="#7300cc" xmlns="http://www.w3.org/2000/svg" width="39.999" height="39.999" viewBox="0 0 39.999 39.999">   <g id="budget_3_" data-name="budget (3)" transform="translate(-1 -1)">     <path id="Caminho_94" data-name="Caminho 94" d="M36.823,19.952l-.111-.2,3.431-3.431a2.914,2.914,0,0,0-3.014-4.827V2.935A1.938,1.938,0,0,0,35.193,1H15.083a1.924,1.924,0,0,0-1.369.567l-5.7,5.7a1.922,1.922,0,0,0-.567,1.369v1.434A7.1,7.1,0,0,0,1,17.129V37.774A3.229,3.229,0,0,0,4.226,41h7.742a3.229,3.229,0,0,0,3.226-3.226v-.645H40.471l-1.409-8.454A18.413,18.413,0,0,0,36.823,19.952Zm.935,8.3-6.29,1.715-1.517-1.214a3.213,3.213,0,0,1-1.21-2.519V20.354a1.292,1.292,0,0,1,1.29,1.29v4.516h1.29V25.138L35.757,20.7A17.106,17.106,0,0,1,37.758,28.253Zm-9.017-9.189a1.292,1.292,0,0,0-1.29,1.29V21a.645.645,0,0,1-1.29,0v-.645a2.583,2.583,0,0,1,2.581-2.581H30.41L29.085,19.1a2.514,2.514,0,0,0-.343-.035ZM21.676,30.078l.849-2.124L24.367,29.8l-2.124.85a.447.447,0,0,1-.6-.406A.421.421,0,0,1,21.676,30.078Zm3.839-.959L23.2,26.806l3.9-3.9a1.883,1.883,0,0,0,.348-.089v3.419a4.538,4.538,0,0,0,.088.861Zm-.526-7.475H17.774V19.064H25.1a3.855,3.855,0,0,0-.226,1.29V21A1.914,1.914,0,0,0,24.989,21.645Zm-7.215,1.29h7.475l-2.581,2.581H17.774Zm0,3.871H21.6l-1.032,2.581H17.774Zm0,3.871h2.644a1.721,1.721,0,0,0,2.306,1.167l1.5-.6v2.015H17.774Zm7.742.05.363-.145,2.148-2.148c.023.042.045.085.07.126v4.7H25.516Zm3.871-.772,1.29,1.032v2.271h-1.29ZM39.709,14.249a1.626,1.626,0,0,1-.479,1.157l-7.908,7.908V21.645a2.565,2.565,0,0,0-.964-1.995l6.558-6.558a1.636,1.636,0,0,1,2.793,1.157ZM13.9,3.2v3.6a.646.646,0,0,1-.645.645h-3.6ZM8.1,11.322A5.806,5.806,0,1,1,2.29,17.129,5.813,5.813,0,0,1,8.1,11.322ZM4.871,23.442a7.034,7.034,0,0,0,6.451,0v3.364H4.871Zm7.1,16.267H4.226A1.938,1.938,0,0,1,2.29,37.774V21.2a7.163,7.163,0,0,0,1.29,1.4v4.207a1.292,1.292,0,0,0,1.29,1.29h6.451a1.292,1.292,0,0,0,1.29-1.29V22.6a7.163,7.163,0,0,0,1.29-1.4V37.774A1.938,1.938,0,0,1,11.968,39.709Zm3.226-3.871V17.129a7.1,7.1,0,0,0-6.451-7.064V8.742h4.516a1.938,1.938,0,0,0,1.935-1.935V2.29h20a.646.646,0,0,1,.645.645v9.41L31.7,16.484H28.741a3.86,3.86,0,0,0-2.877,1.29h-9.38V34.548H30.677v1.29Zm16.774,0V31.17L37.9,29.552l1.048,6.286Z"></path>     <path id="Caminho_95" data-name="Caminho 95" d="M10.29,26.648v1.384h1.29V26.648a1.835,1.835,0,0,0,.272-3.395l-1.258-.628a.551.551,0,0,1,.246-1.044h.188a.551.551,0,0,1,.551.551v.739h1.29v-.739a1.838,1.838,0,0,0-1.29-1.748V19H10.29v1.384a1.835,1.835,0,0,0-.272,3.395l1.258.628a.551.551,0,0,1-.246,1.044h-.188a.551.551,0,0,1-.551-.551v-.739H9V24.9A1.838,1.838,0,0,0,10.29,26.648Z" transform="translate(-2.839 -6.387)"></path>     <path id="Caminho_96" data-name="Caminho 96" d="M12.742,45H6.29A1.292,1.292,0,0,0,5,46.29v6.451a1.292,1.292,0,0,0,1.29,1.29h6.451a1.292,1.292,0,0,0,1.29-1.29V46.29A1.292,1.292,0,0,0,12.742,45Zm0,2.581h-1.29V46.29h1.29Zm-2.581,5.161H8.871v-1.29h1.29Zm0-2.581H8.871v-1.29h1.29Zm-2.581,0H6.29v-1.29h1.29Zm1.29-2.581V46.29h1.29v1.29Zm-1.29-1.29v1.29H6.29V46.29ZM6.29,51.451h1.29v1.29H6.29Zm5.161,1.29V48.871h1.291v3.871Z" transform="translate(-1.419 -15.613)"></path>     <path id="Caminho_97" data-name="Caminho 97" d="M43.064,5H25V8.871H43.064Zm-1.29,2.581H26.29V6.29H41.774Z" transform="translate(-8.516 -1.419)"></path>     <path id="Caminho_98" data-name="Caminho 98" d="M25,13H43.064v1.29H25Z" transform="translate(-8.516 -4.258)"></path>     <path id="Caminho_99" data-name="Caminho 99" d="M25,17H43.064v1.29H25Z" transform="translate(-8.516 -5.678)"></path>     <path id="Caminho_100" data-name="Caminho 100" d="M25,21H35.322v1.29H25Z" transform="translate(-8.516 -7.097)"></path>   </g> </svg>
            <span>Relatórios Financeiros</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section4Ref)}>
          <svg fill="#7300cc" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">   <g id="Grupo_129" data-name="Grupo 129" transform="translate(-1104.001 -808)">     <g id="Grupo_110" data-name="Grupo 110" transform="translate(1104.001 808)">       <g id="Grupo_109" data-name="Grupo 109">         <path id="Caminho_155" data-name="Caminho 155" d="M37.272,34.414A2.731,2.731,0,0,0,40,31.686V3.906A3.911,3.911,0,0,0,36.094,0H3.906A3.911,3.911,0,0,0,0,3.906v27.78a2.731,2.731,0,0,0,2.728,2.728h.866v4.023H.781A.781.781,0,0,0,.781,40H39.219a.781.781,0,0,0,0-1.562H36.406V34.414ZM1.563,3.906A2.346,2.346,0,0,1,3.906,1.563H36.094a2.346,2.346,0,0,1,2.344,2.344V5.625H1.641c-.026,0-.053,0-.078,0ZM8.594,38.438H5.156V31.406H8.594Zm8.75,0H13.906V22.768h3.438Zm8.75,0H22.656V29.375h3.438Zm9.531-18.4h-5a.781.781,0,0,0-.781.781v3.945a.781.781,0,1,0,1.562,0V21.6h3.438V38.438H31.406V30.02a.781.781,0,1,0-1.562,0v8.418H27.656V28.594a.781.781,0,0,0-.781-.781h-5a.781.781,0,0,0-.781.781v9.844H18.906V21.987a.781.781,0,0,0-.781-.781h-5a.781.781,0,0,0-.781.781V38.438H10.156V30.625a.781.781,0,0,0-.781-.781h-5a.781.781,0,0,0-.781.781v2.227H2.728a1.167,1.167,0,0,1-1.165-1.165V7.184c.026,0,.052,0,.078,0h36.8v24.5a1.167,1.167,0,0,1-1.165,1.165h-.866V20.82A.781.781,0,0,0,35.625,20.039Z"></path>       </g>     </g>     <g id="Grupo_112" data-name="Grupo 112" transform="translate(1120.518 810.819)">       <g id="Grupo_111" data-name="Grupo 111">         <path id="Caminho_156" data-name="Caminho 156" d="M230.537,36H212.848a.783.783,0,1,0,0,1.566h17.689a.783.783,0,0,0,0-1.566Z" transform="translate(-212.065 -36)"></path>       </g>     </g>     <g id="Grupo_114" data-name="Grupo 114" transform="translate(1111.344 810.819)">       <g id="Grupo_113" data-name="Grupo 113">         <path id="Caminho_157" data-name="Caminho 157" d="M95.336,36.229a.782.782,0,1,0,.229.554A.789.789,0,0,0,95.336,36.229Z" transform="translate(-94 -36)"></path>       </g>     </g>     <g id="Grupo_116" data-name="Grupo 116" transform="translate(1108.229 810.819)">       <g id="Grupo_115" data-name="Grupo 115">         <path id="Caminho_158" data-name="Caminho 158" d="M55.336,36.229a.782.782,0,1,0,.229.554A.789.789,0,0,0,55.336,36.229Z" transform="translate(-54 -36)"></path>       </g>     </g>     <g id="Grupo_118" data-name="Grupo 118" transform="translate(1114.469 810.819)">       <g id="Grupo_117" data-name="Grupo 117">         <path id="Caminho_159" data-name="Caminho 159" d="M135.336,36.229a.782.782,0,1,0,.229.554A.787.787,0,0,0,135.336,36.229Z" transform="translate(-134 -36)"></path>       </g>     </g>     <g id="Grupo_120" data-name="Grupo 120" transform="translate(1133.842 834.766)">       <g id="Grupo_119" data-name="Grupo 119">         <path id="Caminho_160" data-name="Caminho 160" d="M383.336,342.869a.783.783,0,1,0,.229.554A.785.785,0,0,0,383.336,342.869Z" transform="translate(-382 -342.64)"></path>       </g>     </g>     <g id="Grupo_122" data-name="Grupo 122" transform="translate(1108.02 818.607)">       <g id="Grupo_121" data-name="Grupo 121">         <path id="Caminho_161" data-name="Caminho 161" d="M80.435,135.939a2.818,2.818,0,0,0-2.274,4.472l-5.187,5.2a2.8,2.8,0,0,0-2.592-.063l-5.416-5.43a2.811,2.811,0,1,0-4.851.121L55.5,144.862a2.787,2.787,0,0,0-1.357-.351,2.819,2.819,0,1,0,2.461,1.458l4.666-4.679a2.8,2.8,0,0,0,2.587-.066l5.363,5.377a2.811,2.811,0,1,0,4.854.117l5.326-5.34a2.786,2.786,0,0,0,1.031.2,2.819,2.819,0,0,0,0-5.637ZM54.147,148.583A1.253,1.253,0,1,1,55.4,147.33,1.252,1.252,0,0,1,54.147,148.583ZM62.5,140.01a1.253,1.253,0,1,1,1.249-1.253A1.252,1.252,0,0,1,62.5,140.01Zm9.112,9.321a1.253,1.253,0,1,1,1.249-1.253A1.252,1.252,0,0,1,71.617,149.332Zm8.818-9.321a1.253,1.253,0,1,1,1.249-1.253A1.252,1.252,0,0,1,80.435,140.01Z" transform="translate(-51.336 -135.939)"></path>       </g>     </g>     <g id="Grupo_124" data-name="Grupo 124" transform="translate(1114.255 817.844)">       <g id="Grupo_123" data-name="Grupo 123">         <path id="Caminho_162" data-name="Caminho 162" d="M132.6,126.249a.782.782,0,1,0,.229.553A.79.79,0,0,0,132.6,126.249Z" transform="translate(-131.26 -126.02)"></path>       </g>     </g>     <g id="Grupo_126" data-name="Grupo 126" transform="translate(1107.602 817.845)">       <g id="Grupo_125" data-name="Grupo 125">         <path id="Caminho_163" data-name="Caminho 163" d="M50.541,126.021H46.783a.783.783,0,0,0,0,1.566h3.758a.783.783,0,0,0,0-1.566Z" transform="translate(-46 -126.021)"></path>       </g>     </g>     <g id="Grupo_128" data-name="Grupo 128" transform="translate(1107.602 821.594)">       <g id="Grupo_127" data-name="Grupo 127">         <path id="Caminho_164" data-name="Caminho 164" d="M50.541,174.021H46.783a.783.783,0,1,0,0,1.566h3.758a.783.783,0,1,0,0-1.566Z" transform="translate(-46 -174.021)"></path>       </g>     </g>   </g> </svg>
            <span>Grupos de DRE</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section5Ref)}>
          <svg fill="#7300cc" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.001 512.001" xml:space="preserve"> <g> 	<g> 		<path d="M341.954,328.358c-12.131,0-22-8.542-22-19.041c0-10.5,9.869-19.042,22-19.042c12.131,0,22,8.542,22,19.042 			c0,5.522,4.478,10,10,10c5.522,0,10-4.478,10-10c0-18.325-13.654-33.733-32-37.915v-5.201c0-5.522-4.478-10-10-10 			c-5.522,0-10,4.478-10,10v5.201c-18.346,4.182-32,19.59-32,37.915c0,21.527,18.841,39.041,42,39.041c12.131,0,22,8.542,22,19.042 			s-9.869,19.042-22,19.042c-12.131,0-22-8.542-22-19.042c0-5.522-4.478-10-10-10c-5.522,0-10,4.478-10,10 			c0,18.325,13.654,33.733,32,37.915v4.32c0,5.522,4.478,10,10,10c5.522,0,10-4.478,10-10v-4.32c18.346-4.182,32-19.59,32-37.915 			C383.954,345.872,365.113,328.358,341.954,328.358z"></path> 	</g> </g> <g> 	<g> 		<path d="M451.482,268.876c-13.063-20.355-31.467-36.643-53.222-47.101c-4.979-2.394-10.954-0.298-13.346,4.68 			c-2.393,4.978-0.298,10.952,4.68,13.345C427.505,258.024,452,296.963,452,339.001c0,17.988-4.434,35.827-12.821,51.591 			c-2.594,4.875-0.745,10.931,4.131,13.525c1.496,0.796,3.104,1.174,4.688,1.174c3.578,0,7.039-1.926,8.837-5.305 			C466.756,381.342,472,360.253,472,339.001C472,314.041,464.905,289.792,451.482,268.876z"></path> 	</g> </g> <g> 	<g> 		<path d="M357.673,209.002L357,209.001c-5.522,0-10,4.477-10,10c0,5.523,4.478,10,10,10l0.579,0.001c0.016,0,0.031,0,0.048,0 			c5.501,0,9.973-4.446,9.999-9.953C367.651,213.526,363.195,209.028,357.673,209.002z"></path> 	</g> </g> <g> 	<g> 		<path d="M294.407,438.202c-37.91-18.225-62.405-57.164-62.405-99.201c0-17.988,4.434-35.827,12.821-51.591 			c2.594-4.875,0.745-10.931-4.131-13.525c-4.874-2.594-10.932-0.745-13.525,4.131c-9.921,18.645-15.165,39.733-15.165,60.985 			c0,24.96,7.095,49.208,20.518,70.125c13.063,20.355,31.467,36.643,53.222,47.102c1.397,0.672,2.873,0.989,4.326,0.989 			c3.724,0,7.298-2.089,9.02-5.669C301.479,446.57,299.385,440.595,294.407,438.202z"></path> 	</g> </g> <g> 	<g> 		<path d="M327.002,449.001l-0.579-0.002c-5.548-0.01-10.02,4.429-10.045,9.953c-0.026,5.523,4.432,10.021,9.954,10.047l0.67,0.002 			c5.522,0,10-4.478,10-10C337.002,453.479,332.524,449.001,327.002,449.001z"></path> 	</g> </g> <g> 	<g> 		<path d="M387.409,175.168c-1.217-2.9-2.708-5.633-4.443-8.168H409c25.364,0,46-20.636,46-46s-20.636-46-46-46h-80.08 			c5.091-7.402,8.08-16.357,8.08-26c0-25.364-20.636-46-46-46H46C20.636,3,0,23.636,0,49s20.636,46,46,46h80.08 			c-5.091,7.402-8.08,16.357-8.08,26s2.988,18.598,8.08,26H100c-25.364,0-46,20.636-46,46c0,14.567,6.814,27.566,17.415,36 			C60.814,237.434,54,250.433,54,265s6.814,27.566,17.415,36C60.814,309.434,54,322.433,54,337c0,14.567,6.814,27.566,17.415,36 			C60.814,381.434,54,394.433,54,409c0,25.364,20.636,46,46,46h117.85c31.046,33.207,75.212,54.001,124.151,54.001 			c93.738,0,170-76.262,170-170C512.001,260.984,459.171,195.083,387.409,175.168z M409,95c14.337,0,26,11.664,26,26 			s-11.663,26-26,26h-64H164c-14.337,0-26-11.664-26-26s11.663-26,26-26H409z M46,75c-14.337,0-26-11.664-26-26s11.663-26,26-26h245 			c14.337,0,26,11.664,26,26s-11.663,26-26,26H46z M100,167h245c4.028,0,7.885,0.936,11.345,2.612 			c-4.73-0.397-9.512-0.611-14.344-0.611c-46.945,0-89.505,19.129-120.299,49.999H100c-14.336,0-26-11.664-26-26S85.664,167,100,167 			z M100,239h104.615c-11.352,15.553-20.129,33.095-25.703,52H100c-14.337,0-26-11.663-26-26C74,250.664,85.663,239,100,239z 			 M100,311h74.32c-1.517,9.113-2.319,18.464-2.319,28.001c0,8.146,0.589,16.156,1.702,23.999H100c-14.337,0-26-11.663-26-26 			C74,322.663,85.663,311,100,311z M100,435c-14.337,0-26-11.663-26-26c0-14.337,11.663-26,26-26h77.786 			c5.046,18.813,13.243,36.346,23.993,52H100z M342.001,489.001c-82.71,0-150-67.29-150-150s67.29-150,150-150s150,67.29,150,150 			S424.711,489.001,342.001,489.001z"></path> 	</g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
            <span>Financeiro Completo</span>
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
      Contas a Pagar e a Receber
    </span>

    <p>
      Precisa de um sistema para <strong>gerenciar suas contas a receber</strong>? 
      Conheça a BLUE ERP! Nosso <strong>ERP Online</strong> é o parceiro ideal para o planejamento financeiro do seu negócio. 
      Com ele, você <strong>controla, organiza e monitora suas receitas</strong>, reduzindo a inadimplência de forma prática e eficaz.
    </p>

    <button onClick={() => abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
  </div>

  <img src={Set} alt="descer" className="bottom" onClick={() => handleScrollToSection(section2Ref)} />
</S.Main2>

<S.Main2 ref={section2Ref}>
  <div className="left">
    <span>
      Lançamentos Recorrentes
    </span>

    <p>
      Ter <strong>controle total</strong> dos lançamentos financeiros é fundamental. Imagine registrar <strong>pagamentos recorrentes</strong> 
      – aqueles que acontecem mensalmente – no momento da cobrança e nunca mais precisar se preocupar! 
      Com a BLUE ERP, você conta com essa praticidade: feche suas vendas rapidamente, 
      registrando cobranças com apenas <strong>alguns cliques</strong>.
    </p>

    <button onClick={() => abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
  </div>

  <div className="right">
    <div className="especial">
      <img src={Image3} alt="" />
    </div>
  </div>

  <img src={Set} alt="descer" className="bottom" onClick={() => handleScrollToSection(section3Ref)} />
</S.Main2>

<S.Main2 ref={section3Ref}>
  <div className="left">
    <img src={Image4} alt="" />
  </div>

  <div className="right">
    <span>
      Relatórios Financeiros
    </span>

    <p>
      A BLUE ERP oferece uma <strong>série completa de relatórios</strong>, uma exclusividade do melhor sistema ERP Online do Brasil! 
      Tenha acesso a <strong>relatórios financeiros, de vendas, CRM, PCP, compras, estoque, serviços, RH</strong>, contratos e fiscal. 
      Facilite a administração e o crescimento da sua empresa com <strong>dados precisos e atualizados</strong>.
    </p>

    <button onClick={() => abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
  </div>

  <img src={Set} alt="descer" className="bottom" onClick={() => handleScrollToSection(section4Ref)} />
</S.Main2>

<S.Main2 ref={section4Ref}>
  <div className="left">
    <span>
      Grupos de DRE
    </span>

    <p>
      Com a BLUE ERP, você pode personalizar o <strong>DRE</strong> de acordo com as necessidades da sua empresa. 
      Com base nos cadastros e nos lançamentos do fluxo de caixa, o sistema gera <strong>relatórios comparativos</strong> para diferentes períodos, 
      oferecendo uma <strong>visão detalhada</strong>.
    </p>

    <button onClick={() => abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
  </div>

  <div className="right">
    <img src={Image5} alt="" />
  </div>
</S.Main2>

<S.Main3 ref={section5Ref}>
  <span>Ferramentas desenvolvidas para <strong>organizar e descomplicar o seu dia a dia!</strong></span>

  <div className="cards">
    <div className="card">
      <span>Gestão de Custos</span>
      <p>
        Precisa de um ERP que ofereça uma <strong>visão completa de suas despesas</strong>? 
        Com a BLUE ERP, você organiza seus centros de custo e os integra diretamente ao setor financeiro, 
        facilitando o controle dos gastos por setor de forma <strong>prática e eficiente</strong>.
      </p>
    </div>

    <div className="card">
      <span>Controle de Contas Bancárias</span>
      <p>
        Registre <strong>transferências, movimentações</strong> e administre suas contas bancárias de forma organizada e simples. 
        Nosso sistema financeiro é constantemente atualizado, garantindo <strong>segurança, eficiência</strong> e mais rentabilidade para o seu negócio.
      </p>
    </div>

    <div className="card">
      <span>Conciliação Bancária (OFX)</span>
      <p>
        A BLUE ERP oferece a <strong>importação de arquivos OFX</strong> para facilitar a conciliação bancária. 
        Cada valor presente no arquivo pode ser registrado como um novo lançamento ou vinculado a um já existente, tanto para entradas quanto para saídas.
      </p>
    </div>

    <div className="card">
      <span>Fluxo de Caixa</span>
      <p>
        Monitorar receitas e despesas, analisar o <strong>fluxo diário</strong>, projetar investimentos e acessar <strong>relatórios detalhados</strong> de suas operações financeiras nunca foi tão fácil. 
        Com a BLUE ERP, suas finanças ficam organizadas em um sistema que opera tanto online quanto offline, trazendo <strong>praticidade e controle</strong>.
      </p>
    </div>
  </div>
</S.Main3>


      <Footer/>
     </S.Container>
    )
}