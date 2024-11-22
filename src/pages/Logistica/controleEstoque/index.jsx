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
import Image1 from "../assets/top-image-controle-de-estoque.svg";
import Image2 from "../assets/lancamentos-automaticos.svg";
import Image3 from "../assets/top-image-controle-de-estoque.svg";
import Image4 from "../assets/relatorios-de-estoque.svg";
import Image5 from "../assets/sincronizacao-loja-fisica-virtual.svg";
import Image6 from "../assets/relatorios-de-estoque.svg";
import Image7 from "../assets/sincronizacao-loja-fisica-virtual.svg";

export function ControleEstoque(){
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
        Soluções de <strong>Logística e Armazenagem </strong> <br />
        para Empresas de Todos os Tamanhos!
        </h2>

        <p>
         

Oferecemos uma gestão de estoque que se integra perfeitamente ao setor financeiro, incluindo módulos de vendas e emissão de notas fiscais, tudo em um único sistema.
<br />
Essa abordagem integrada simplifica os processos e otimiza a operação do seu negócio, independentemente do seu porte!
        </p>

        <button  onClick={()=> abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
       </div>

       <div className="right">
        <img src={Image1} alt="Image" />
       </div>
       </div>

       <div className="Bottom">
       <div className="card" onClick={() => handleScrollToSection(section1Ref)}>
        <svg fill="#7300cc" xmlns="http://www.w3.org/2000/svg" width="35.425" height="39.572" viewBox="0 0 35.425 39.572">   <g id="money_1_" data-name="money (1)" transform="translate(-26.832)">     <path id="Caminho_114" data-name="Caminho 114" d="M210.385,223.485h.006a.766.766,0,0,1,.76.773l1.159.01a1.929,1.929,0,0,0-1.335-1.849v-1.252h-1.159v1.245a1.926,1.926,0,0,0,.553,3.766.766.766,0,0,1-.006,1.533h-.007a.766.766,0,0,1-.76-.773l-1.159-.01a1.927,1.927,0,0,0,1.379,1.863v1.238h1.159V228.77a1.926,1.926,0,0,0-.6-3.752.767.767,0,0,1,.006-1.533Z" transform="translate(-167.569 -204.072)"></path>     <path id="Caminho_115" data-name="Caminho 115" d="M177.062,271h1.159v1.159h-1.159Z" transform="translate(-138.619 -250.054)"></path>     <path id="Caminho_116" data-name="Caminho 116" d="M274.937,271H276.1v1.159h-1.159Z" transform="translate(-228.929 -250.054)"></path>     <path id="Caminho_117" data-name="Caminho 117" d="M62.257,108.5H34.947v1.159H61.1v17H58.779V111.978H31.469v-2.319h2.319V108.5H30.31v3.478H26.832V131.3H54.141v-1.159H27.991v-17H57.619v17H55.3V131.3h3.478v-3.478h3.478Z" transform="translate(0 -100.114)"></path>     <path id="Caminho_118" data-name="Caminho 118" d="M84.141,186.158,81.483,183.5H59.49l-2.658,2.658v9.369l2.658,2.658H81.483l2.658-2.658ZM59.97,197.026l-1.979-1.979v-8.408l1.979-1.979H81l1.979,1.979v8.408L81,197.026Z" transform="translate(-27.681 -169.317)"></path>     <path id="Caminho_119" data-name="Caminho 119" d="M290.083,36.376l.423-1.079a10.853,10.853,0,0,0-1.112-.368l-.3,1.119A9.709,9.709,0,0,1,290.083,36.376Z" transform="translate(-241.988 -32.229)"></path>     <path id="Caminho_120" data-name="Caminho 120" d="M165.5,30.91a10.842,10.842,0,0,0-2.851,1.825l.769.867a9.689,9.689,0,0,1,6.445-2.443,9.813,9.813,0,0,1,1.488.113l.176-1.146A10.974,10.974,0,0,0,169.868,30,10.818,10.818,0,0,0,165.5,30.91Z" transform="translate(-125.323 -27.681)"></path>     <path id="Caminho_121" data-name="Caminho 121" d="M151.241,1.159a11.952,11.952,0,0,1,8.73,3.749h-2.218V6.067h4.058V2.01h-1.159V3.942a13.2,13.2,0,0,0-18.185-.6l.771.866A12.02,12.02,0,0,1,151.241,1.159Z" transform="translate(-106.697)"></path>     <path id="Caminho_122" data-name="Caminho 122" d="M122.472,54.956l-.847-.792c-.283.3-.554.62-.806.947l.917.709C121.967,55.522,122.215,55.232,122.472,54.956Z" transform="translate(-86.724 -49.978)"></path>     <path id="Caminho_123" data-name="Caminho 123" d="M240.5,438.082a10.843,10.843,0,0,0,2.851-1.825l-.769-.867a9.69,9.69,0,0,1-6.445,2.443,9.807,9.807,0,0,1-1.488-.113l-.176,1.146a10.985,10.985,0,0,0,1.664.127A10.817,10.817,0,0,0,240.5,438.082Z" transform="translate(-191.593 -401.739)"></path>     <path id="Caminho_124" data-name="Caminho 124" d="M205.009,458.346l-.423,1.079a10.852,10.852,0,0,0,1.112.368l.3-1.119A9.739,9.739,0,0,1,205.009,458.346Z" transform="translate(-164.015 -422.921)"></path>     <path id="Caminho_125" data-name="Caminho 125" d="M129.822,438.408a11.952,11.952,0,0,1-8.73-3.749h2.218V433.5h-4.058v4.058h1.159v-1.932a13.2,13.2,0,0,0,18.185.6l-.771-.866A12.02,12.02,0,0,1,129.822,438.408Z" transform="translate(-85.278 -399.995)"></path>     <path id="Caminho_126" data-name="Caminho 126" d="M369.8,437.276l.847.792c.283-.3.554-.62.806-.947l-.917-.709C370.306,436.71,370.059,437,369.8,437.276Z" transform="translate(-316.461 -402.682)"></path>   </g> </svg>
            <span>Lançamentos automáticos</span>
        </div>
        <div className="card" onClick={() => handleScrollToSection(section2Ref)}>
        <svg fill="#7300cc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512"><g id="Outline"><rect x="120" y="448" width="16" height="16"></rect><path d="M304,352H168V232a8,8,0,0,0-8-8H16a8,8,0,0,0-8,8V488a8,8,0,0,0,8,8H304a8,8,0,0,0,8-8V360A8,8,0,0,0,304,352Zm-88,16h32v32H216ZM72,240h32v32H72Zm-48,0H56v40a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V240h32V352H24ZM72,368h32v32H72Zm-48,0H56v40a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V368h32V480H24ZM296,480H168V368h32v40a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V368h32Z"></path><rect x="264" y="448" width="16" height="16"></rect><rect x="120" y="320" width="16" height="16"></rect><path d="M478.123,111.776A7.941,7.941,0,0,0,480,112a8.023,8.023,0,0,0,6.926-3.984,8.237,8.237,0,0,0,1.074-4.2V72a8,8,0,0,0-6.123-7.776l-232-56a7.967,7.967,0,0,0-3.754,0l-232,56A8,8,0,0,0,8,72v31.773a8.322,8.322,0,0,0,1.374,4.718,8.013,8.013,0,0,0,8.5,3.285L32,108.367V208H48V104.505L248,56.229l200,48.276V480H400V168a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v32a8,8,0,0,0,8,8H384v16H184v16H384v16H184v16H384v16H184v16H384V480H328v16H488V480H464V108.367ZM112,192V176H384v16ZM248,40a7.943,7.943,0,0,0-1.877.224L24,93.839V78.3l224-54.07L472,78.3v15.54L249.877,40.224A7.943,7.943,0,0,0,248,40Z"></path><path d="M264,136a24,24,0,0,0,0-48H232a24,24,0,0,0,0,48Zm-40-24a8.009,8.009,0,0,1,8-8h32a8,8,0,0,1,0,16H232A8.009,8.009,0,0,1,224,112Z"></path></g></svg>
            <span>Múltiplos Depósitos</span>
        </div>
        <div className="card" onClick={() => handleScrollToSection(section3Ref)}>
          <svg fill="#7300cc" xmlns="http://www.w3.org/2000/svg" width="39.999" height="39.999" viewBox="0 0 39.999 39.999">   <g id="budget_3_" data-name="budget (3)" transform="translate(-1 -1)">     <path id="Caminho_94" data-name="Caminho 94" d="M36.823,19.952l-.111-.2,3.431-3.431a2.914,2.914,0,0,0-3.014-4.827V2.935A1.938,1.938,0,0,0,35.193,1H15.083a1.924,1.924,0,0,0-1.369.567l-5.7,5.7a1.922,1.922,0,0,0-.567,1.369v1.434A7.1,7.1,0,0,0,1,17.129V37.774A3.229,3.229,0,0,0,4.226,41h7.742a3.229,3.229,0,0,0,3.226-3.226v-.645H40.471l-1.409-8.454A18.413,18.413,0,0,0,36.823,19.952Zm.935,8.3-6.29,1.715-1.517-1.214a3.213,3.213,0,0,1-1.21-2.519V20.354a1.292,1.292,0,0,1,1.29,1.29v4.516h1.29V25.138L35.757,20.7A17.106,17.106,0,0,1,37.758,28.253Zm-9.017-9.189a1.292,1.292,0,0,0-1.29,1.29V21a.645.645,0,0,1-1.29,0v-.645a2.583,2.583,0,0,1,2.581-2.581H30.41L29.085,19.1a2.514,2.514,0,0,0-.343-.035ZM21.676,30.078l.849-2.124L24.367,29.8l-2.124.85a.447.447,0,0,1-.6-.406A.421.421,0,0,1,21.676,30.078Zm3.839-.959L23.2,26.806l3.9-3.9a1.883,1.883,0,0,0,.348-.089v3.419a4.538,4.538,0,0,0,.088.861Zm-.526-7.475H17.774V19.064H25.1a3.855,3.855,0,0,0-.226,1.29V21A1.914,1.914,0,0,0,24.989,21.645Zm-7.215,1.29h7.475l-2.581,2.581H17.774Zm0,3.871H21.6l-1.032,2.581H17.774Zm0,3.871h2.644a1.721,1.721,0,0,0,2.306,1.167l1.5-.6v2.015H17.774Zm7.742.05.363-.145,2.148-2.148c.023.042.045.085.07.126v4.7H25.516Zm3.871-.772,1.29,1.032v2.271h-1.29ZM39.709,14.249a1.626,1.626,0,0,1-.479,1.157l-7.908,7.908V21.645a2.565,2.565,0,0,0-.964-1.995l6.558-6.558a1.636,1.636,0,0,1,2.793,1.157ZM13.9,3.2v3.6a.646.646,0,0,1-.645.645h-3.6ZM8.1,11.322A5.806,5.806,0,1,1,2.29,17.129,5.813,5.813,0,0,1,8.1,11.322ZM4.871,23.442a7.034,7.034,0,0,0,6.451,0v3.364H4.871Zm7.1,16.267H4.226A1.938,1.938,0,0,1,2.29,37.774V21.2a7.163,7.163,0,0,0,1.29,1.4v4.207a1.292,1.292,0,0,0,1.29,1.29h6.451a1.292,1.292,0,0,0,1.29-1.29V22.6a7.163,7.163,0,0,0,1.29-1.4V37.774A1.938,1.938,0,0,1,11.968,39.709Zm3.226-3.871V17.129a7.1,7.1,0,0,0-6.451-7.064V8.742h4.516a1.938,1.938,0,0,0,1.935-1.935V2.29h20a.646.646,0,0,1,.645.645v9.41L31.7,16.484H28.741a3.86,3.86,0,0,0-2.877,1.29h-9.38V34.548H30.677v1.29Zm16.774,0V31.17L37.9,29.552l1.048,6.286Z"></path>     <path id="Caminho_95" data-name="Caminho 95" d="M10.29,26.648v1.384h1.29V26.648a1.835,1.835,0,0,0,.272-3.395l-1.258-.628a.551.551,0,0,1,.246-1.044h.188a.551.551,0,0,1,.551.551v.739h1.29v-.739a1.838,1.838,0,0,0-1.29-1.748V19H10.29v1.384a1.835,1.835,0,0,0-.272,3.395l1.258.628a.551.551,0,0,1-.246,1.044h-.188a.551.551,0,0,1-.551-.551v-.739H9V24.9A1.838,1.838,0,0,0,10.29,26.648Z" transform="translate(-2.839 -6.387)"></path>     <path id="Caminho_96" data-name="Caminho 96" d="M12.742,45H6.29A1.292,1.292,0,0,0,5,46.29v6.451a1.292,1.292,0,0,0,1.29,1.29h6.451a1.292,1.292,0,0,0,1.29-1.29V46.29A1.292,1.292,0,0,0,12.742,45Zm0,2.581h-1.29V46.29h1.29Zm-2.581,5.161H8.871v-1.29h1.29Zm0-2.581H8.871v-1.29h1.29Zm-2.581,0H6.29v-1.29h1.29Zm1.29-2.581V46.29h1.29v1.29Zm-1.29-1.29v1.29H6.29V46.29ZM6.29,51.451h1.29v1.29H6.29Zm5.161,1.29V48.871h1.291v3.871Z" transform="translate(-1.419 -15.613)"></path>     <path id="Caminho_97" data-name="Caminho 97" d="M43.064,5H25V8.871H43.064Zm-1.29,2.581H26.29V6.29H41.774Z" transform="translate(-8.516 -1.419)"></path>     <path id="Caminho_98" data-name="Caminho 98" d="M25,13H43.064v1.29H25Z" transform="translate(-8.516 -4.258)"></path>     <path id="Caminho_99" data-name="Caminho 99" d="M25,17H43.064v1.29H25Z" transform="translate(-8.516 -5.678)"></path>     <path id="Caminho_100" data-name="Caminho 100" d="M25,21H35.322v1.29H25Z" transform="translate(-8.516 -7.097)"></path>   </g> </svg>
            <span>Relatórios de Estoque</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section4Ref)}>
        <svg fill="#7300cc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512"><g id="E_learning-3" data-name="E learning"><path d="M425.735,152.19A340.873,340.873,0,0,0,368,144.427V48A40.045,40.045,0,0,0,328,8H120A40.045,40.045,0,0,0,80,48V464a40.045,40.045,0,0,0,40,40H328a40.045,40.045,0,0,0,40-40V368.447a324.81,324.81,0,0,1,54.265,7.363A8,8,0,0,0,432,368V160A8,8,0,0,0,425.735,152.19ZM267.056,24l-8,16H188.944l-8-16ZM352,464a24.027,24.027,0,0,1-24,24H120a24.027,24.027,0,0,1-24-24V48a24.027,24.027,0,0,1,24-24h43.056l13.789,27.578A8,8,0,0,0,184,56h80a8,8,0,0,0,7.155-4.422L284.944,24H328a24.027,24.027,0,0,1,24,24v96.036a339.149,339.149,0,0,0-72,7.781,337.406,337.406,0,0,0-145.735.373A8,8,0,0,0,128,160V368a8,8,0,0,0,9.735,7.81,321.532,321.532,0,0,1,140.53,0c.113.025.227.036.34.056.166.029.331.063.5.082.133.015.265.017.4.025.16.01.32.026.481.026H280c.256,0,.512-.016.766-.04.079-.008.158-.02.238-.03q.3-.038.589-.1c.048-.01.095-.013.142-.023A323.326,323.326,0,0,1,352,368.039ZM208,352.036a338.3,338.3,0,0,0-64,6.136V166.48a321.147,321.147,0,0,1,128,0V358.172A338.3,338.3,0,0,0,208,352.036Zm208,6.136a336.836,336.836,0,0,0-128,0V166.48a321.147,321.147,0,0,1,128,0Z"></path><path d="M256,184H160a8,8,0,0,0-8,8v56a8,8,0,0,0,8,8h96a8,8,0,0,0,8-8V192A8,8,0,0,0,256,184Zm-8,56H168V200h80Z"></path><path d="M256,264H160a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Z"></path><path d="M152,304h24a8,8,0,0,0,0-16H152a8,8,0,0,0,0,16Z"></path><path d="M216,288h-8a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Z"></path><path d="M400,272H304a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Z"></path><path d="M400,248H304a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Z"></path><path d="M328,296H304a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"></path><path d="M360,296h-8a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Z"></path><path d="M296,192v40a8,8,0,0,0,8,8h96a8,8,0,0,0,8-8V192a8,8,0,0,0-8-8H304A8,8,0,0,0,296,192Zm16,8h80v24H312Z"></path><path d="M176,456H120a8,8,0,0,0,0,16h56a8,8,0,0,0,0-16Z"></path><path d="M208,456h-8a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Z"></path></g></svg>
            <span>Loja Física e Virtual</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section5Ref)}>
          <svg fill="#7300cc" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"  xml:space="preserve"> <g> 	<g> 		<path d="M119.467,337.067c-28.237,0-51.2,22.963-51.2,51.2c0,28.237,22.963,51.2,51.2,51.2s51.2-22.963,51.2-51.2 			C170.667,360.03,147.703,337.067,119.467,337.067z M119.467,422.4c-18.825,0-34.133-15.309-34.133-34.133 			c0-18.825,15.309-34.133,34.133-34.133s34.133,15.309,34.133,34.133C153.6,407.091,138.291,422.4,119.467,422.4z"></path> 	</g> </g> <g> 	<g> 		<path d="M409.6,337.067c-28.237,0-51.2,22.963-51.2,51.2c0,28.237,22.963,51.2,51.2,51.2c28.237,0,51.2-22.963,51.2-51.2 			C460.8,360.03,437.837,337.067,409.6,337.067z M409.6,422.4c-18.825,0-34.133-15.309-34.133-34.133 			c0-18.825,15.309-34.133,34.133-34.133c18.825,0,34.133,15.309,34.133,34.133C443.733,407.091,428.425,422.4,409.6,422.4z"></path> 	</g> </g> <g> 	<g> 		<path d="M510.643,289.784l-76.8-119.467c-1.57-2.441-4.275-3.917-7.177-3.917H332.8c-4.719,0-8.533,3.823-8.533,8.533v213.333 			c0,4.719,3.814,8.533,8.533,8.533h34.133v-17.067h-25.6V183.467h80.674l72.926,113.442v82.825h-42.667V396.8h51.2 			c4.719,0,8.533-3.814,8.533-8.533V294.4C512,292.77,511.531,291.157,510.643,289.784z"></path> 	</g> </g> <g> 	<g> 		<path d="M375.467,277.333V217.6h68.267v-17.067h-76.8c-4.719,0-8.533,3.823-8.533,8.533v76.8c0,4.719,3.814,8.533,8.533,8.533h128 			v-17.067H375.467z"></path> 	</g> </g> <g> 	<g> 		<path d="M332.8,106.667H8.533C3.823,106.667,0,110.49,0,115.2v273.067c0,4.719,3.823,8.533,8.533,8.533H76.8v-17.067H17.067v-256 			h307.2v256H162.133V396.8H332.8c4.719,0,8.533-3.814,8.533-8.533V115.2C341.333,110.49,337.519,106.667,332.8,106.667z"></path> 	</g> </g> <g> 	<g> 		<rect x="8.533" y="345.6" width="51.2" height="17.067"></rect> 	</g> </g> <g> 	<g> 		<rect x="179.2" y="345.6" width="145.067" height="17.067"></rect> 	</g> </g> <g> 	<g> 		<rect x="469.333" y="345.6" width="34.133" height="17.067"></rect> 	</g> </g> <g> 	<g> 		<rect x="34.133" y="140.8" width="298.667" height="17.067"></rect> 	</g> </g> <g> 	<g> 		<rect x="110.933" y="379.733" width="17.067" height="17.067"></rect> 	</g> </g> <g> 	<g> 		<rect x="401.067" y="379.733" width="17.067" height="17.067"></rect> 	</g> </g> <g> 	<g> 		<rect x="34.133" y="72.533" width="119.467" height="17.067"></rect> 	</g> </g> <g> 	<g> 		<rect y="72.533" width="17.067" height="17.067"></rect> 	</g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
            <span>Gestão Logística Completa</span>
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
      Automatização de Lançamentos a partir de Notas Fiscais de Compra e Venda
    </span>

    <p>
      Ganhe tempo no cadastro de produtos e minimize erros de lançamento. Com a <strong>BLUE ERP</strong>, você pode automatizar a entrada de mercadorias no seu estoque utilizando o <strong>XML das notas fiscais</strong> dos seus fornecedores. Ao realizar suas vendas, o sistema atualiza o estoque em tempo real, sem a necessidade de alternar entre diferentes telas.
      <br /><br />
      Dedique seu tempo e energia ao <strong>crescimento e aumento das vendas</strong> da sua empresa, enquanto cuidamos do resto para você!
    </p>

    <button onClick={() => abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
  </div>

  <img src={Set} alt="descer" className="bottom" onClick={() => handleScrollToSection(section2Ref)} />
</S.Main2>

<S.Main2 ref={section2Ref}>
  <div className="left">
    <span>
      Gestão de Múltiplos Depósitos
    </span>

    <p>
      Gerenciar diversos locais de armazenamento de maneira ágil, autônoma e flexível, adaptando-se às necessidades do seu negócio, é fácil com a <strong>BLUE ERP</strong>.
      <br /><br />
      Não perca mais tempo! Inicie agora mesmo a experiência de aproveitar as vantagens do <strong>Sistema de Gestão Empresarial mais completo do Brasil</strong>.
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
      Relatórios de Estoque
    </span>

    <p>
      Imagine ter acesso a uma vasta gama de informações sobre <strong>entradas, saídas, faturamento, validades</strong>, números de série, lotes e preços de todos os produtos da sua empresa. Seria incrível, não é mesmo?
      <br /><br />
      Agora, considere a possibilidade de acessar tudo isso com apenas alguns cliques, a qualquer hora e em qualquer lugar. Com essa facilidade, você poderá fundamentar suas decisões e estratégias de compra, além de <strong>otimizar a gestão de espaço</strong> e o armazenamento de novas mercadorias.
    </p>

    <button onClick={() => abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
  </div>

  <img src={Set} alt="descer" className="bottom" onClick={() => handleScrollToSection(section4Ref)} />
</S.Main2>

<S.Main2 ref={section4Ref}>
  <div className="left">
    <span>
      Sincronização de Estoque entre Loja Física e Virtual
    </span>

    <p>
      Você já sabe que o ERP online <strong>BLUE ERP</strong> oferece integração com E-commerce, certo? Com o nosso sistema, você pode expor seus produtos a milhões de clientes em potencial. Conecte sua loja a grandes plataformas como B2W, Amazon, Mercado Livre, WooCommerce, Loja Integrada, Magento e muitos outros marketplaces.
      <br /><br />
      Tudo isso por meio de uma única integração! Tenha controle total do seu negócio com uma interface extremamente <strong>intuitiva</strong>. E o melhor de tudo: as <strong>atualizações de estoque</strong> são realizadas a cada sincronização, garantindo que você não corra o risco de anunciar produtos que não estão disponíveis no seu depósito.
    </p>

    <button onClick={() => abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
  </div>

  <div className="right">
    <img src={Image5} alt="" />
  </div>
</S.Main2>

<S.Main3 ref={section5Ref}>
  <span>Ferramentas desenvolvidas para <strong>organizar e descomplicar o seu dia a dia!</strong></span>

  <div className="cards">
    <div className="card">
      <span>Estoque Crítico</span>
      <p>
        Com os alertas de estoque da <strong>BLUE ERP</strong>, você e sua equipe podem facilmente identificar produtos em <strong>nível crítico</strong> diretamente no dashboard. Isso permite um planejamento de compras mais assertivo ou a redistribuição de produtos entre depósitos conforme as necessidades da sua empresa.
      </p>
    </div>

    <div className="card">
      <span>Ranking de Faturamento</span>
      <p>
        Esse recurso do nosso dashboard facilita ainda mais o acompanhamento do giro de estoque. Com essas informações ao seu alcance, você pode calcular e planejar suas estratégias de venda, além de monitorar em tempo real a <strong>rotatividade das mercadorias</strong> que mais impactam a receita do seu negócio.
      </p>
    </div>

    <div className="card">
      <span>Controle de Vendas</span>
      <p>
        Se sua meta é vender, vender e vender, a <strong>BLUE ERP</strong> é a ferramenta ideal para você. Gerencie suas vendas de forma inteligente, mantendo total controle sobre <strong>orçamentos e pedidos</strong>, comissões, giro de estoque e dados precisos que tornam seus processos de venda ainda mais eficientes.
      </p>
    </div>
  </div>
</S.Main3>


      <Footer/>
     </S.Container>
    )
}