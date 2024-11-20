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

export function GestaoExpediçao(){
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
        Gerencie o processo de <strong>expedição dos produtos</strong> destinados aos clientes.
        </h2>

        <p>
         Administre a armazenagem, seleção, despacho e a entrega efetiva dos itens a partir de qualquer local e a qualquer momento.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
        <img src={Image1} alt="Image" />
       </div>
       </div>

       <div className="Bottom">
        <div className="card" onClick={() => handleScrollToSection(section2Ref)}>
          <svg fill="#7300cc" id="Layer_5" enable-background="new 0 0 64 64" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m56.526 30.376-.172-.316 5.318-5.318c.856-.856 1.328-1.995 1.328-3.206 0-2.501-2.035-4.536-4.536-4.536-.508 0-.997.101-1.464.26v-13.26c0-1.654-1.346-3-3-3h-31.171c-.801 0-1.555.312-2.122.879l-8.828 8.828c-.567.566-.879 1.32-.879 2.122v2.222c-5.598.507-10 5.221-10 10.949v32c0 2.757 2.243 5 5 5h12c2.757 0 5-2.243 5-5v-1h24 1 14.181l-2.184-13.104c-.018-4.711-1.215-9.384-3.471-13.52zm1.45 12.867-9.749 2.659-2.351-1.881c-1.192-.955-1.876-2.378-1.876-3.905v-8.116-1c1.103 0 2 .897 2 2v7h2v-1.586l6.874-6.874c1.923 3.6 2.984 7.624 3.102 11.703zm-13.976-14.243c-1.103 0-2 .897-2 2v1c0 .551-.449 1-1 1s-1-.449-1-1v-1c0-2.206 1.794-4 4-4h2.586l-2.054 2.054c-.176-.024-.35-.054-.532-.054zm-10.951 17.072 1.316-3.292 2.855 2.855-3.293 1.317c-.423.172-.927-.169-.927-.629 0-.087.016-.171.049-.251zm5.951-1.486-3.586-3.586 6.047-6.047c.187-.029.366-.076.539-.138v5.3c0 .454.052.898.136 1.334zm-.816-11.586h-11.184v-4h11.35c-.222.627-.35 1.298-.35 2v1c0 .352.072.686.184 1zm-11.184 2h11.586l-4 4h-7.586zm0 6h5.923l-1.6 4h-4.323zm0 6h4.098c.302 1.147 1.339 2 2.58 2 .343 0 .678-.064.994-.191l2.328-.932v3.123h-10zm12 .077.562-.225 3.33-3.33c.036.065.069.131.108.195v7.283h-4zm6-1.197 2 1.6v3.52h-2zm16-24.344c0 .677-.264 1.314-.743 1.793l-12.257 12.257v-2.586c0-1.252-.59-2.358-1.494-3.092l10.165-10.165c.479-.479 1.116-.743 1.793-.743 1.398 0 2.536 1.138 2.536 2.536zm-40-17.122v5.586c0 .551-.449 1-1 1h-5.586zm-9 12.586c4.962 0 9 4.038 9 9s-4.038 9-9 9-9-4.038-9-9 4.038-9 9-9zm-5 18.786c1.502.77 3.199 1.214 5 1.214s3.498-.444 5-1.214v5.214h-10zm11 25.214h-12c-1.654 0-3-1.346-3-3v-25.695c.569.81 1.239 1.544 2 2.174v6.521c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-6.521c.761-.63 1.431-1.364 2-2.174v25.695c0 1.654-1.346 3-3 3zm5-6v-29c0-5.728-4.402-10.442-10-10.949v-2.051h7c1.654 0 3-1.346 3-3v-7h31c.551 0 1 .449 1 1v14.586l-6.414 6.414h-4.586c-1.771 0-3.36.776-4.46 2h-14.54v26h22v2zm26 0v-7.236l9.195-2.508 1.624 9.744z"></path><path d="m11 30.855v2.145h2v-2.145c1.155-.366 2-1.435 2-2.709 0-1.087-.604-2.066-1.578-2.553l-1.95-.974c-.291-.146-.472-.439-.472-.765 0-.471.383-.854.854-.854h.292c.471 0 .854.383.854.854v1.146h2v-1.146c0-1.274-.845-2.343-2-2.709v-2.145h-2v2.145c-1.155.366-2 1.435-2 2.709 0 1.087.604 2.066 1.578 2.553l1.95.974c.291.146.472.439.472.765 0 .471-.383.854-.854.854h-.292c-.471 0-.854-.383-.854-.854v-1.146h-2v1.146c0 1.274.845 2.343 2 2.709z"></path><path d="m17 45h-10c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-10c0-1.103-.897-2-2-2zm0 4h-2v-2h2zm-4 8h-2v-2h2zm0-4h-2v-2h2zm-4 0h-2v-2h2zm2-4v-2h2v2zm-2-2v2h-2v-2zm-2 8h2v2h-2zm8 2v-6h2.001l.001 6z"></path><path d="m53 5h-28v6h28zm-2 4h-24v-2h24z"></path><path d="m25 13h28v2h-28z"></path><path d="m25 17h28v2h-28z"></path><path d="m25 21h16v2h-16z"></path></g></svg>
            <span>Ordens de Expedição</span>
        </div>
        <div className="card" onClick={() => handleScrollToSection(section3Ref)}>
                    <svg fill="#7300cc" id="Capa_1" enable-background="new 0 0 511.684 511.684" height="512" viewBox="0 0 511.684 511.684" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m12.458 149.776h76.455v19.137c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-84.606c0-14.443-5.925-27.53-15.471-36.956h104.863c20.378 0 36.957 16.579 36.957 36.956v252.856h-.479c-4.105 0-8.1.479-11.933 1.383 1.483-1.37 2.412-3.331 2.412-5.509 0-4.142-3.358-7.5-7.5-7.5h-22.061c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h20.658c-7.6 2.892-14.352 7.518-19.77 13.394h-.889c-4.142 0-7.5 3.358-7.5 7.5 0 1.165.266 2.268.739 3.251-3.901 7.288-6.114 15.609-6.114 24.438v38.257c0 20.378-16.579 36.957-36.956 36.957-20.378 0-36.957-16.579-36.957-36.957v-223.464c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v223.463c0 28.649 23.308 51.957 51.957 51.957h141.348c6.306 0 12.431-1.108 18.254-3.298 5.673 2.132 11.815 3.298 18.224 3.298h86.03c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-49.409c7.783-7.709 13.14-17.912 14.799-29.457h126.125c-3.494 16.978-18.583 29.457-36.197 29.457h-20.318c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h20.318c26.098 0 48.256-19.498 51.54-45.352.456-3.586-.647-7.191-3.027-9.893-2.358-2.677-5.757-4.212-9.325-4.212h-76.144v-30.757c0-28.648-23.308-51.956-51.956-51.956h-49.665c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h49.665c20.377 0 36.956 16.579 36.956 36.956v30.757h-40.232c-6.424 0-11.75 4.822-12.387 11.217-1.888 18.95-17.696 33.24-36.772 33.24-20.378 0-36.957-16.579-36.957-36.957v-38.257c0-14.443-5.925-27.53-15.471-36.956h20.198c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-41.205v-252.856c0-28.648-23.308-51.956-51.957-51.956h-141.347c-28.649 0-51.957 23.308-51.957 51.956v53.011c0 6.869 5.589 12.458 12.458 12.458zm254.281 239.343v38.257c0 14.444 5.925 27.53 15.471 36.957h-104.856c9.547-9.426 15.471-22.512 15.471-36.957v-38.257c0-20.377 16.579-36.956 36.957-36.956s36.957 16.579 36.957 36.956zm-251.739-304.812c0-20.377 16.579-36.956 36.957-36.956s36.956 16.579 36.956 36.956v50.469h-73.913z"></path><path d="m167.087 77.66c-4.142 0-7.5 3.358-7.5 7.5v2.171c-8.809 2.149-15.366 10.108-15.366 19.569 0 11.105 9.035 20.14 20.14 20.14h5.453c2.834 0 5.14 2.306 5.14 5.14s-2.306 5.141-5.14 5.141h-5.453c-2.137 0-4.018-1.286-4.794-3.275-1.504-3.859-5.852-5.768-9.712-4.264-3.859 1.504-5.768 5.853-4.264 9.712 2.443 6.266 7.686 10.749 13.996 12.264v2.163c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-2.171c8.809-2.149 15.367-10.108 15.367-19.569 0-11.105-9.035-20.14-20.14-20.14h-5.453c-2.834 0-5.14-2.306-5.14-5.14s2.306-5.141 5.14-5.141h5.453c2.136 0 4.018 1.286 4.793 3.275 1.504 3.859 5.852 5.771 9.712 4.264 3.859-1.504 5.768-5.853 4.264-9.712-2.443-6.266-7.686-10.749-13.996-12.264v-2.163c0-4.142-3.358-7.5-7.5-7.5z"></path><path d="m212.761 183.567h-22.061c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h22.061c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"></path><path d="m113.913 191.067c0 4.142 3.358 7.5 7.5 7.5h44.288c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-44.288c-4.142 0-7.5 3.358-7.5 7.5z"></path><path d="m212.761 211.961h-22.061c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h22.061c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"></path><path d="m121.413 226.961h44.288c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-44.288c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"></path><path d="m212.761 240.355h-22.061c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h22.061c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"></path><path d="m121.413 255.355h44.288c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-44.288c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"></path><path d="m212.761 268.749h-22.061c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h22.061c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"></path><path d="m121.413 283.749h44.288c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-44.288c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"></path><path d="m212.761 297.143h-22.061c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h22.061c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"></path><path d="m121.413 312.143h44.288c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-44.288c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"></path><path d="m371.131 362.163h-5.377c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h5.377c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"></path><path d="m340.753 362.163h-44.288c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h44.288c4.142 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5z"></path><path d="m362.244 398.057c0 4.142 3.358 7.5 7.5 7.5h20.843c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-20.843c-4.142 0-7.5 3.358-7.5 7.5z"></path><path d="m352.244 398.057c0-4.142-3.358-7.5-7.5-7.5h-44.288c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h44.288c4.142 0 7.5-3.358 7.5-7.5z"></path><path d="m338.485 418.951h-38.028c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h38.028c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"></path><path d="m121.413 340.537h44.288c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-44.288c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"></path><path d="m121.413 368.93h44.288c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-44.288c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"></path><path d="m121.413 397.324h44.288c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-44.288c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"></path><path d="m121.413 425.718h44.288c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-44.288c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"></path></g></svg>

            <span>Etiqueta de Despacho</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section4Ref)}>
        <svg fill="#7300cc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512"><g id="Outline"><rect x="120" y="448" width="16" height="16"></rect><path d="M304,352H168V232a8,8,0,0,0-8-8H16a8,8,0,0,0-8,8V488a8,8,0,0,0,8,8H304a8,8,0,0,0,8-8V360A8,8,0,0,0,304,352Zm-88,16h32v32H216ZM72,240h32v32H72Zm-48,0H56v40a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V240h32V352H24ZM72,368h32v32H72Zm-48,0H56v40a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V368h32V480H24ZM296,480H168V368h32v40a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V368h32Z"></path><rect x="264" y="448" width="16" height="16"></rect><rect x="120" y="320" width="16" height="16"></rect><path d="M478.123,111.776A7.941,7.941,0,0,0,480,112a8.023,8.023,0,0,0,6.926-3.984,8.237,8.237,0,0,0,1.074-4.2V72a8,8,0,0,0-6.123-7.776l-232-56a7.967,7.967,0,0,0-3.754,0l-232,56A8,8,0,0,0,8,72v31.773a8.322,8.322,0,0,0,1.374,4.718,8.013,8.013,0,0,0,8.5,3.285L32,108.367V208H48V104.505L248,56.229l200,48.276V480H400V168a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v32a8,8,0,0,0,8,8H384v16H184v16H384v16H184v16H384v16H184v16H384V480H328v16H488V480H464V108.367ZM112,192V176H384v16ZM248,40a7.943,7.943,0,0,0-1.877.224L24,93.839V78.3l224-54.07L472,78.3v15.54L249.877,40.224A7.943,7.943,0,0,0,248,40Z"></path><path d="M264,136a24,24,0,0,0,0-48H232a24,24,0,0,0,0,48Zm-40-24a8.009,8.009,0,0,1,8-8h32a8,8,0,0,1,0,16H232A8.009,8.009,0,0,1,224,112Z"></path></g></svg>

            <span>Endereçamento de Estoque</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section5Ref)}>
        <svg fill="#7300cc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512"><g id="E_learning-3" data-name="E learning"><path d="M425.735,152.19A340.873,340.873,0,0,0,368,144.427V48A40.045,40.045,0,0,0,328,8H120A40.045,40.045,0,0,0,80,48V464a40.045,40.045,0,0,0,40,40H328a40.045,40.045,0,0,0,40-40V368.447a324.81,324.81,0,0,1,54.265,7.363A8,8,0,0,0,432,368V160A8,8,0,0,0,425.735,152.19ZM267.056,24l-8,16H188.944l-8-16ZM352,464a24.027,24.027,0,0,1-24,24H120a24.027,24.027,0,0,1-24-24V48a24.027,24.027,0,0,1,24-24h43.056l13.789,27.578A8,8,0,0,0,184,56h80a8,8,0,0,0,7.155-4.422L284.944,24H328a24.027,24.027,0,0,1,24,24v96.036a339.149,339.149,0,0,0-72,7.781,337.406,337.406,0,0,0-145.735.373A8,8,0,0,0,128,160V368a8,8,0,0,0,9.735,7.81,321.532,321.532,0,0,1,140.53,0c.113.025.227.036.34.056.166.029.331.063.5.082.133.015.265.017.4.025.16.01.32.026.481.026H280c.256,0,.512-.016.766-.04.079-.008.158-.02.238-.03q.3-.038.589-.1c.048-.01.095-.013.142-.023A323.326,323.326,0,0,1,352,368.039ZM208,352.036a338.3,338.3,0,0,0-64,6.136V166.48a321.147,321.147,0,0,1,128,0V358.172A338.3,338.3,0,0,0,208,352.036Zm208,6.136a336.836,336.836,0,0,0-128,0V166.48a321.147,321.147,0,0,1,128,0Z"></path><path d="M256,184H160a8,8,0,0,0-8,8v56a8,8,0,0,0,8,8h96a8,8,0,0,0,8-8V192A8,8,0,0,0,256,184Zm-8,56H168V200h80Z"></path><path d="M256,264H160a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Z"></path><path d="M152,304h24a8,8,0,0,0,0-16H152a8,8,0,0,0,0,16Z"></path><path d="M216,288h-8a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Z"></path><path d="M400,272H304a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Z"></path><path d="M400,248H304a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Z"></path><path d="M328,296H304a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"></path><path d="M360,296h-8a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Z"></path><path d="M296,192v40a8,8,0,0,0,8,8h96a8,8,0,0,0,8-8V192a8,8,0,0,0-8-8H304A8,8,0,0,0,296,192Zm16,8h80v24H312Z"></path><path d="M176,456H120a8,8,0,0,0,0,16h56a8,8,0,0,0,0-16Z"></path><path d="M208,456h-8a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Z"></path></g></svg>

            <span>Integração com SIGEP WEB</span>
        </div>
        <div className="card" onClick={() => handleScrollToSection(section6Ref)}>
          <svg fill="#7300cc" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"  xml:space="preserve"> <g> 	<g> 		<path d="M119.467,337.067c-28.237,0-51.2,22.963-51.2,51.2c0,28.237,22.963,51.2,51.2,51.2s51.2-22.963,51.2-51.2 			C170.667,360.03,147.703,337.067,119.467,337.067z M119.467,422.4c-18.825,0-34.133-15.309-34.133-34.133 			c0-18.825,15.309-34.133,34.133-34.133s34.133,15.309,34.133,34.133C153.6,407.091,138.291,422.4,119.467,422.4z"></path> 	</g> </g> <g> 	<g> 		<path d="M409.6,337.067c-28.237,0-51.2,22.963-51.2,51.2c0,28.237,22.963,51.2,51.2,51.2c28.237,0,51.2-22.963,51.2-51.2 			C460.8,360.03,437.837,337.067,409.6,337.067z M409.6,422.4c-18.825,0-34.133-15.309-34.133-34.133 			c0-18.825,15.309-34.133,34.133-34.133c18.825,0,34.133,15.309,34.133,34.133C443.733,407.091,428.425,422.4,409.6,422.4z"></path> 	</g> </g> <g> 	<g> 		<path d="M510.643,289.784l-76.8-119.467c-1.57-2.441-4.275-3.917-7.177-3.917H332.8c-4.719,0-8.533,3.823-8.533,8.533v213.333 			c0,4.719,3.814,8.533,8.533,8.533h34.133v-17.067h-25.6V183.467h80.674l72.926,113.442v82.825h-42.667V396.8h51.2 			c4.719,0,8.533-3.814,8.533-8.533V294.4C512,292.77,511.531,291.157,510.643,289.784z"></path> 	</g> </g> <g> 	<g> 		<path d="M375.467,277.333V217.6h68.267v-17.067h-76.8c-4.719,0-8.533,3.823-8.533,8.533v76.8c0,4.719,3.814,8.533,8.533,8.533h128 			v-17.067H375.467z"></path> 	</g> </g> <g> 	<g> 		<path d="M332.8,106.667H8.533C3.823,106.667,0,110.49,0,115.2v273.067c0,4.719,3.823,8.533,8.533,8.533H76.8v-17.067H17.067v-256 			h307.2v256H162.133V396.8H332.8c4.719,0,8.533-3.814,8.533-8.533V115.2C341.333,110.49,337.519,106.667,332.8,106.667z"></path> 	</g> </g> <g> 	<g> 		<rect x="8.533" y="345.6" width="51.2" height="17.067"></rect> 	</g> </g> <g> 	<g> 		<rect x="179.2" y="345.6" width="145.067" height="17.067"></rect> 	</g> </g> <g> 	<g> 		<rect x="469.333" y="345.6" width="34.133" height="17.067"></rect> 	</g> </g> <g> 	<g> 		<rect x="34.133" y="140.8" width="298.667" height="17.067"></rect> 	</g> </g> <g> 	<g> 		<rect x="110.933" y="379.733" width="17.067" height="17.067"></rect> 	</g> </g> <g> 	<g> 		<rect x="401.067" y="379.733" width="17.067" height="17.067"></rect> 	</g> </g> <g> 	<g> 		<rect x="34.133" y="72.533" width="119.467" height="17.067"></rect> 	</g> </g> <g> 	<g> 		<rect y="72.533" width="17.067" height="17.067"></rect> 	</g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
            <span>Integração com JadLog</span>
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
      Ganhe tempo no cadastro de produtos e minimize erros de lançamento. Com a <strong>BLUE ERP</strong>, você pode automatizar a entrada de mercadorias no seu estoque utilizando o <strong>XML das notas fiscais</strong> dos seus fornecedores. Ao realizar suas vendas, o sistema <strong>atualiza o estoque em tempo real</strong>, sem a necessidade de alternar entre diferentes telas.
      <br /><br />
      Dedique seu tempo e energia ao crescimento e aumento das vendas da sua empresa, enquanto cuidamos do resto para você!
    </p>

    <button onClick={() => abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
  </div>

  <img src={Set} alt="descer" className="bottom" onClick={() => handleScrollToSection(section2Ref)} />
</S.Main2>

<S.Main2 ref={section2Ref}>
  <div className="left">
    <span>
      Ordens de Expedição
    </span>

    <p>
      Uma das grandes vantagens de utilizar <strong>Ordens de Expedição</strong> é a possibilidade de gerar documentos que reúnem informações essenciais, como o <strong>depósito onde o produto está armazenado</strong>, o cliente, a transportadora encarregada da entrega e o profissional responsável pela separação e despacho dos itens. Essa organização aprimora a eficiência e a produtividade dos processos internos da sua empresa.
    </p>

    <button onClick={() => abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
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
      Etiqueta de Despacho
    </span>

    <p>
      Visando agilizar o processo de despacho, a <strong>BLUE ERP</strong> permite que seus clientes <strong>imprimam etiquetas de despacho</strong> para serem afixadas nas embalagens dos produtos. Essa prática facilita a identificação rápida dos itens e fornece informações essenciais sobre o destinatário e o endereço de entrega.
    </p>

    <button onClick={() => abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
  </div>

  <img src={Set} alt="descer" className="bottom" onClick={() => handleScrollToSection(section4Ref)} />
</S.Main2>

<S.Main2 ref={section4Ref}>
  <div className="left">
    <span>
      Endereçamento de Estoque
    </span>

    <p>
      Ao realizar a busca por um produto, nada é mais prático do que receber instantaneamente a <strong>localização do item</strong>. Com o sistema, você pode registrar o local exato onde cada mercadoria está armazenada, como o <strong>corredor ou a prateleira específica</strong>. Esse processo assegura uma maneira ágil, independente e flexível de localizar rapidamente um produto, otimizando a eficiência na gestão do estoque.
    </p>

    <button onClick={() => abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
  </div>

  <div className="right">
    <img src={Image5} alt="" />
  </div>

  <img src={Set} alt="descer" className="bottom" onClick={() => handleScrollToSection(section5Ref)} />
</S.Main2>

<S.Main2 ref={section5Ref}>
  <div className="left">
    <img src={Image6} alt="" />
  </div>

  <div className="right">
    <span>
      Integração com SIGEP WEB
    </span>

    <p>
      Com o <strong>SIGEP WEB</strong>, você tem a capacidade de gerenciar e monitorar todas as suas <strong>postagens diretamente do seu computador</strong>. Essa funcionalidade proporciona maior comodidade ao programar os envios dos seus produtos aos clientes. Antes mesmo de a encomenda ser entregue aos Correios, o sistema gera um <strong>código de rastreamento exclusivo</strong> para cada volume a ser enviado.
    </p>

    <button onClick={() => abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
  </div>
  <img src={Set} alt="descer" className="bottom" onClick={() => handleScrollToSection(section6Ref)} />
</S.Main2>

<S.Main2 ref={section6Ref}>
  <div className="left">
    <span>
      Integração com JadLog
    </span>

    <p>
      Envie suas mercadorias para os clientes por meio da integração com a transportadora <strong>JadLog</strong>. Com esta parceria, sua empresa pode despachar produtos sem limitações em relação a <strong>embalagens ou peso</strong>, oferecendo maior controle e segurança no processo de entrega. Além disso, essa integração proporciona <strong>economia significativa em logística</strong>!
    </p>

    <button onClick={() => abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
  </div>

  <div className="right">
    <img src={Image7} alt="" />
  </div>

</S.Main2>


      <Footer/>
     </S.Container>
    )
}