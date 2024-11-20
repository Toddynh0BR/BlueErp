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
import Image1 from "../assets/top-image-controle-de-vendas.svg";
import Image2 from "../assets/sistema-de-pdv-offline.svg";
import Image3 from "../assets/sistema-crm.svg";
import Image4 from "../assets/faturamento-em-lote.svg";
import Image5 from "../assets/gestao-de-vendedores.svg";

export function GestaoContratos(){
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
        Facilite a <strong> Geração de Contratos </strong> <br />
        com Seus Clientes
        </h2>

        <p>
        Utilize ferramentas que tornam a Gestão de Contratos mais organizada e eficiente. <br />
        Com isso, você pode simplificar todo o processo, garantindo que todos <br />
        os documentos sejam gerados de maneira rápida e precisa.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
        <img src={Image1} alt="Image" />
       </div>
       </div>

       <div className="Bottom">
        <div className="card" onClick={() => handleScrollToSection(section1Ref)}>
          <svg fill="#7300cc"  id="Layer_5" enable-background="new 0 0 64 64" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m56.526 30.376-.172-.316 5.318-5.318c.856-.856 1.328-1.995 1.328-3.206 0-2.501-2.035-4.536-4.536-4.536-.508 0-.997.101-1.464.26v-13.26c0-1.654-1.346-3-3-3h-31.171c-.801 0-1.555.312-2.122.879l-8.828 8.828c-.567.566-.879 1.32-.879 2.122v2.222c-5.598.507-10 5.221-10 10.949v32c0 2.757 2.243 5 5 5h12c2.757 0 5-2.243 5-5v-1h24 1 14.181l-2.184-13.104c-.018-4.711-1.215-9.384-3.471-13.52zm1.45 12.867-9.749 2.659-2.351-1.881c-1.192-.955-1.876-2.378-1.876-3.905v-8.116-1c1.103 0 2 .897 2 2v7h2v-1.586l6.874-6.874c1.923 3.6 2.984 7.624 3.102 11.703zm-13.976-14.243c-1.103 0-2 .897-2 2v1c0 .551-.449 1-1 1s-1-.449-1-1v-1c0-2.206 1.794-4 4-4h2.586l-2.054 2.054c-.176-.024-.35-.054-.532-.054zm-10.951 17.072 1.316-3.292 2.855 2.855-3.293 1.317c-.423.172-.927-.169-.927-.629 0-.087.016-.171.049-.251zm5.951-1.486-3.586-3.586 6.047-6.047c.187-.029.366-.076.539-.138v5.3c0 .454.052.898.136 1.334zm-.816-11.586h-11.184v-4h11.35c-.222.627-.35 1.298-.35 2v1c0 .352.072.686.184 1zm-11.184 2h11.586l-4 4h-7.586zm0 6h5.923l-1.6 4h-4.323zm0 6h4.098c.302 1.147 1.339 2 2.58 2 .343 0 .678-.064.994-.191l2.328-.932v3.123h-10zm12 .077.562-.225 3.33-3.33c.036.065.069.131.108.195v7.283h-4zm6-1.197 2 1.6v3.52h-2zm16-24.344c0 .677-.264 1.314-.743 1.793l-12.257 12.257v-2.586c0-1.252-.59-2.358-1.494-3.092l10.165-10.165c.479-.479 1.116-.743 1.793-.743 1.398 0 2.536 1.138 2.536 2.536zm-40-17.122v5.586c0 .551-.449 1-1 1h-5.586zm-9 12.586c4.962 0 9 4.038 9 9s-4.038 9-9 9-9-4.038-9-9 4.038-9 9-9zm-5 18.786c1.502.77 3.199 1.214 5 1.214s3.498-.444 5-1.214v5.214h-10zm11 25.214h-12c-1.654 0-3-1.346-3-3v-25.695c.569.81 1.239 1.544 2 2.174v6.521c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-6.521c.761-.63 1.431-1.364 2-2.174v25.695c0 1.654-1.346 3-3 3zm5-6v-29c0-5.728-4.402-10.442-10-10.949v-2.051h7c1.654 0 3-1.346 3-3v-7h31c.551 0 1 .449 1 1v14.586l-6.414 6.414h-4.586c-1.771 0-3.36.776-4.46 2h-14.54v26h22v2zm26 0v-7.236l9.195-2.508 1.624 9.744z"></path><path d="m11 30.855v2.145h2v-2.145c1.155-.366 2-1.435 2-2.709 0-1.087-.604-2.066-1.578-2.553l-1.95-.974c-.291-.146-.472-.439-.472-.765 0-.471.383-.854.854-.854h.292c.471 0 .854.383.854.854v1.146h2v-1.146c0-1.274-.845-2.343-2-2.709v-2.145h-2v2.145c-1.155.366-2 1.435-2 2.709 0 1.087.604 2.066 1.578 2.553l1.95.974c.291.146.472.439.472.765 0 .471-.383.854-.854.854h-.292c-.471 0-.854-.383-.854-.854v-1.146h-2v1.146c0 1.274.845 2.343 2 2.709z"></path><path d="m17 45h-10c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-10c0-1.103-.897-2-2-2zm0 4h-2v-2h2zm-4 8h-2v-2h2zm0-4h-2v-2h2zm-4 0h-2v-2h2zm2-4v-2h2v2zm-2-2v2h-2v-2zm-2 8h2v2h-2zm8 2v-6h2.001l.001 6z"></path><path d="m53 5h-28v6h28zm-2 4h-24v-2h24z"></path><path d="m25 13h28v2h-28z"></path><path d="m25 17h28v2h-28z"></path><path d="m25 21h16v2h-16z"></path></g></svg>
            <span> Personalização e impressão de contratos</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section2Ref)}>
          <svg fill="#7300cc"  height="480pt" viewBox="0 0 480.08177 480" width="480pt" xmlns="http://www.w3.org/2000/svg"><path d="m479.199219 113.800781c-1.652344-6.144531-5.683594-11.382812-11.199219-14.558593-5.519531-3.191407-12.082031-4.054688-18.238281-2.402344-6.148438 1.65625-11.386719 5.683594-14.5625 11.199218l-4 6.960938c-3.800781-2.183594-8.65625-.898438-10.878907 2.882812l-20.320312 34.636719-6.960938-4c-1.84375-1.066406-4.039062-1.355469-6.09375-.800781-2.058593.558594-3.808593 1.910156-4.867187 3.761719-2.167969 3.824219-.847656 8.683593 2.960937 10.878906l6.960938 4-68 117.839844-16.800781 44.882812-8 14.957031c-4.683594 8.148438-4.183594 18.277344 1.28125 25.921876l-18 22.078124-5.039063-12.636718c-2.273437-5.632813-7.535156-9.492188-13.585937-9.964844-6.054688-.476562-11.855469 2.515625-14.976563 7.722656l-2.878906 4.878906-2.71875-32c-.625-7.570312-6.488281-13.65625-14.027344-14.570312-7.542968-.910156-14.683594 3.609375-17.09375 10.8125l-19.679687 59.039062c-1.375 4.175782.875 8.675782 5.039062 10.082032.78125.363281 1.621094.582031 2.480469.636718 3.4375.011719 6.5-2.179687 7.601562-5.4375l19.597657-59.039062 2.800781 32.476562c.578125 6.929688 5.558594 12.691407 12.332031 14.261719 6.773438 1.570313 13.78125-1.414062 17.347657-7.378906l2.960937-4.882813 4.960937 12.5625c2.105469 5.292969 6.867188 9.070313 12.503907 9.910157 5.636719.839843 11.292969-1.382813 14.855469-5.832031l18.640624-23.597657c2.0625.539063 4.1875.808594 6.320313.800781 8.574219.066407 16.535156-4.449218 20.878906-11.84375l8-13.359374 30.480469-37.039063 68.71875-119.28125 6.960938 4c1.855468 1.0625 3.207031 2.816406 3.757812 4.882813.554688 2.050781.265625 4.238281-.796875 6.078124l-32 55.441407c-1.207031 1.820312-1.617187 4.054687-1.132813 6.1875.484376 2.128906 1.816407 3.96875 3.691407 5.089843 1.84375 1.070313 4.039062 1.359376 6.09375.804688 2.058593-.558594 3.808593-1.910156 4.867187-3.761719l32-55.441406c3.191406-5.519531 4.054688-12.082031 2.398438-18.238281-1.65625-6.148438-5.683594-11.386719-11.199219-14.5625l-6.960937-4 20-34.640625c2.183593-3.800781.898437-8.652344-2.878907-10.878907l4-6.960937c3.277344-5.605469 4.144531-12.300781 2.398438-18.558594zm-30.160157 2.238281c1.058594-1.851562 2.816407-3.207031 4.882813-3.757812 2.054687-.507812 4.226563-.222656 6.078125.800781 1.855469 1.058594 3.207031 2.816407 3.761719 4.878907.507812 2.054687.222656 4.226562-.800781 6.078124l-4 6.960938-13.921876-8zm-109.039062 223.363282-4-2.320313-11.839844-6.882812 11.359375-30.398438 25.199219 14.558594zm-24 23.117187c-3.378906-2.355469-4.417969-6.886719-2.398438-10.480469l4-6.957031 13.917969 8-4 6.878907c-1.121093 1.945312-3.003906 3.328124-5.195312 3.816406-2.191407.484375-4.484375.03125-6.324219-1.257813zm53.839844-61.277343-27.679688-16 64-110.882813 27.679688 16zm72-124.722657-27.679688-16 16-27.679687 27.679688 16zm0 0"></path><path d="m126.238281 358.519531-28.316406 28.242188-16.960937-16.960938c-3.121094-3.101562-8.160157-3.101562-11.28125 0-1.515626 1.503907-2.367188 3.546875-2.367188 5.679688 0 2.132812.851562 4.179687 2.367188 5.679687l16.960937 16.960938c3 2.976562 7.054687 4.644531 11.28125 4.640625 4.25.023437 8.339844-1.644531 11.359375-4.640625l28.238281-28.320313c2.71875-3.175781 2.535157-7.90625-.417969-10.859375-2.957031-2.957031-7.6875-3.140625-10.863281-.421875zm0 0"></path><path d="m32 380.039062c0 37.558594 30.445312 68 68 68s68-30.441406 68-68c0-4.417968-3.582031-8-8-8s-8 3.582032-8 8c0 28.71875-23.28125 52-52 52s-52-23.28125-52-52 23.28125-52 52-52c11.257812-.03125 22.214844 3.621094 31.199219 10.402344 3.535156 2.652344 8.550781 1.933594 11.199219-1.601562 2.652343-3.535156 1.9375-8.546875-1.597657-11.199219-20.605469-15.453125-48.175781-17.9375-71.210937-6.421875-23.039063 11.519531-37.589844 35.066406-37.589844 60.820312zm0 0"></path><path d="m288 64.039062c4.417969 0 8-3.578124 8-8 0-4.417968-3.582031-8-8-8h-208c-4.417969 0-8 3.582032-8 8v32c0 4.421876 3.582031 8 8 8h208c4.417969 0 8-3.578124 8-8 0-4.417968-3.582031-8-8-8h-200v-16zm0 0"></path><path d="m104 112.039062c-4.417969 0-8 3.582032-8 8 0 4.421876 3.582031 8 8 8h160c4.417969 0 8-3.578124 8-8 0-4.417968-3.582031-8-8-8zm0 0"></path><path d="m312 168.039062h-176c-4.417969 0-8 3.582032-8 8 0 4.421876 3.582031 8 8 8h176c4.417969 0 8-3.578124 8-8 0-4.417968-3.582031-8-8-8zm0 0"></path><path d="m232 224.039062c0-4.417968-3.582031-8-8-8h-160c-4.417969 0-8 3.582032-8 8 0 4.421876 3.582031 8 8 8h160c4.417969 0 8-3.578124 8-8zm0 0"></path><path d="m312 216.039062h-56c-4.417969 0-8 3.582032-8 8 0 4.421876 3.582031 8 8 8h56c4.417969 0 8-3.578124 8-8 0-4.417968-3.582031-8-8-8zm0 0"></path><path d="m144 272.039062c4.417969 0 8-3.578124 8-8 0-4.417968-3.582031-8-8-8h-80c-4.417969 0-8 3.582032-8 8 0 4.421876 3.582031 8 8 8zm0 0"></path><path d="m176 272.039062h56c4.417969 0 8-3.578124 8-8 0-4.417968-3.582031-8-8-8h-56c-4.417969 0-8 3.582032-8 8 0 4.421876 3.582031 8 8 8zm0 0"></path><path d="m360 368.039062c-4.417969 0-8 3.582032-8 8v80c0 4.421876-3.582031 8-8 8h-320c-4.417969 0-8-3.578124-8-8v-432c0-4.417968 3.582031-8 8-8h320c4.417969 0 8 3.582032 8 8v150.242188c0 4.417969 3.582031 8 8 8s8-3.582031 8-8v-150.242188c0-13.253906-10.746094-23.9999995-24-23.9999995h-320c-13.253906 0-24 10.7460935-24 23.9999995v432c0 13.257813 10.746094 24 24 24h320c13.253906 0 24-10.742187 24-24v-80c0-4.417968-3.582031-8-8-8zm0 0"></path></svg>
            <span>Criação de contratos</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section3Ref)}>
        <svg fill="#7300cc"  id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g id="email-marketing-business-dollar-currency"><path d="m492.896 201.832-92.896-73.832v-40h-.072c.019-2.111-.798-4.144-2.272-5.656l-64-64c-1.51-1.477-3.544-2.297-5.656-2.28v-.064h-208c-4.418 0-8 3.582-8 8v104l-92.896 73.832c-1.933 1.465-3.079 3.743-3.104 6.168v272c0 4.418 3.582 8 8 8h464c4.418 0 8-3.582 8-8v-272c-.025-2.425-1.171-4.703-3.104-6.168zm-92.896 14.168h63.32l-63.32 45.88zm65.048-16h-65.048v-51.6zm-129.048-156.688 36.688 36.688h-36.688zm-16-11.312v56c0 4.418 3.582 8 8 8h56v177.472l-12 8.712c-29.577-64.052-105.479-91.999-169.531-62.421-27.564 12.728-49.693 34.858-62.421 62.421l-12.048-8.712v-241.472zm-64 192c61.856 0 112 50.144 112 112s-50.144 112-112 112-112-50.144-112-112c.066-61.828 50.172-111.934 112-112zm-144 37.88-63.32-45.88h63.32zm0-61.88h-65.048l65.048-51.6zm-80 272v-248.328l101.928 73.856c-21.264 67.419 16.151 139.31 83.57 160.574s139.31-16.151 160.574-83.57c7.904-25.06 7.904-51.945 0-77.005l101.928-73.855v248.328z"></path><path d="m160 112h192v16h-192z"></path><path d="m160 144h192v16h-192z"></path><path d="m160 176h192v16h-192z"></path><path d="m272 384h-32c-8.837 0-16-7.163-16-16h-16c0 17.673 14.327 32 32 32h8v16h16v-16h8c17.673 0 32-14.327 32-32v-8c0-17.673-14.327-32-32-32h-32c-8.837 0-16-7.163-16-16v-8c0-8.837 7.163-16 16-16h32c8.837 0 16 7.163 16 16h16c0-17.673-14.327-32-32-32h-8v-16h-16v16h-8c-17.673 0-32 14.327-32 32v8c0 17.673 14.327 32 32 32h32c8.837 0 16 7.163 16 16v8c0 8.837-7.163 16-16 16z"></path><path d="m160 96h64c4.418 0 8-3.582 8-8v-32c0-4.418-3.582-8-8-8h-64c-4.418 0-8 3.582-8 8v32c0 4.418 3.582 8 8 8zm8-32h48v16h-48z"></path><path d="m248 48h56v16h-56z"></path><path d="m248 80h56v16h-56z"></path></g></svg>
            <span>Envio por e-mail</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section4Ref)}>
        <svg fill="#7300cc"  id="Layer_35" enable-background="new 0 0 64 64" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m35 47h2v2h-2z"></path><path d="m31 47h2v2h-2z"></path><path d="m27 47h2v2h-2z"></path><path d="m52 1c-5.728 0-10.442 4.402-10.949 10h-35.051c-2.757 0-5 2.243-5 5v32c0 2.757 2.243 5 5 5h16.613l-1.333 4h-.28c-2.206 0-4 1.794-4 4 0 1.103.897 2 2 2h26c1.103 0 2-.897 2-2 0-2.206-1.794-4-4-4h-.28l-1.333-4h16.613c2.757 0 5-2.243 5-5v-36c0-6.065-4.935-11-11-11zm0 2c4.963 0 9 4.038 9 9s-4.037 9-9 9-9-4.038-9-9 4.037-9 9-9zm-6.999 58h-26.001c0-1.103.897-2 2-2h22c1.103 0 2 .897 2.001 2zm-4.388-4h-17.226l1.333-4h14.56zm17.387-6h-52c-1.654 0-3-1.346-3-3v-1h21.414l2-2h11.172l2 2h21.414v1c0 1.654-1.346 3-3 3zm3-6h-20.586l-2-2h-12.828l-2 2h-20.586v-29c0-1.654 1.346-3 3-3h35.051c.507 5.598 5.221 10 10.949 10 3.72 0 7.008-1.861 9-4.695z"></path><path d="m47.707 13.293-1.414 1.414 3.707 3.707 8.707-8.707-1.414-1.414-7.293 7.293z"></path><path d="m52 7v-2c-3.859 0-7 3.14-7 7h2c0-2.757 2.243-5 5-5z"></path><path d="m27.604 20.605c-.472-2.123-2.321-3.605-4.496-3.605h-8.217c-2.175 0-4.023 1.482-4.495 3.605l-3.286 14.79c-.073.326-.11.663-.11 1 0 2.54 2.065 4.605 4.604 4.605h14.791c2.54 0 4.605-2.065 4.605-4.604 0-.338-.037-.675-.109-.999zm-11.604-1.605h6v5c0 1.654-1.346 3-3 3s-3-1.346-3-3zm10.396 20h-14.792c-1.436 0-2.604-1.168-2.604-2.604 0-.191.021-.38.062-.565l3.287-14.792c.199-.896.831-1.589 1.65-1.883v4.844c0 2.757 2.243 5 5 5s5-2.243 5-5v-4.844c.819.295 1.452.988 1.65 1.883l3.288 14.793c.042.183.063.373.063.564 0 1.436-1.168 2.604-2.604 2.604z"></path><path d="m35 25h2v2h-2z"></path><path d="m39 25h18v2h-18z"></path><path d="m35 29h22v2h-22z"></path><path d="m35 33h16v2h-16z"></path><path d="m53 33h4v2h-4z"></path><path d="m35 37h22v2h-22z"></path><path d="m47 41h2v2h-2z"></path><path d="m51 41h2v2h-2z"></path><path d="m55 41h2v2h-2z"></path></svg>
            <span>Registros financeiros</span>
        </div>
        <div className="card" onClick={() => handleScrollToSection(section5Ref)}>
          <svg fill="#7300cc"  id="Capa_1" enable-background="new 0 0 511.684 511.684" height="512" viewBox="0 0 511.684 511.684" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m12.458 149.776h76.455v19.137c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-84.606c0-14.443-5.925-27.53-15.471-36.956h104.863c20.378 0 36.957 16.579 36.957 36.956v252.856h-.479c-4.105 0-8.1.479-11.933 1.383 1.483-1.37 2.412-3.331 2.412-5.509 0-4.142-3.358-7.5-7.5-7.5h-22.061c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h20.658c-7.6 2.892-14.352 7.518-19.77 13.394h-.889c-4.142 0-7.5 3.358-7.5 7.5 0 1.165.266 2.268.739 3.251-3.901 7.288-6.114 15.609-6.114 24.438v38.257c0 20.378-16.579 36.957-36.956 36.957-20.378 0-36.957-16.579-36.957-36.957v-223.464c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v223.463c0 28.649 23.308 51.957 51.957 51.957h141.348c6.306 0 12.431-1.108 18.254-3.298 5.673 2.132 11.815 3.298 18.224 3.298h86.03c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-49.409c7.783-7.709 13.14-17.912 14.799-29.457h126.125c-3.494 16.978-18.583 29.457-36.197 29.457h-20.318c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h20.318c26.098 0 48.256-19.498 51.54-45.352.456-3.586-.647-7.191-3.027-9.893-2.358-2.677-5.757-4.212-9.325-4.212h-76.144v-30.757c0-28.648-23.308-51.956-51.956-51.956h-49.665c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h49.665c20.377 0 36.956 16.579 36.956 36.956v30.757h-40.232c-6.424 0-11.75 4.822-12.387 11.217-1.888 18.95-17.696 33.24-36.772 33.24-20.378 0-36.957-16.579-36.957-36.957v-38.257c0-14.443-5.925-27.53-15.471-36.956h20.198c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-41.205v-252.856c0-28.648-23.308-51.956-51.957-51.956h-141.347c-28.649 0-51.957 23.308-51.957 51.956v53.011c0 6.869 5.589 12.458 12.458 12.458zm254.281 239.343v38.257c0 14.444 5.925 27.53 15.471 36.957h-104.856c9.547-9.426 15.471-22.512 15.471-36.957v-38.257c0-20.377 16.579-36.956 36.957-36.956s36.957 16.579 36.957 36.956zm-251.739-304.812c0-20.377 16.579-36.956 36.957-36.956s36.956 16.579 36.956 36.956v50.469h-73.913z"></path><path d="m167.087 77.66c-4.142 0-7.5 3.358-7.5 7.5v2.171c-8.809 2.149-15.366 10.108-15.366 19.569 0 11.105 9.035 20.14 20.14 20.14h5.453c2.834 0 5.14 2.306 5.14 5.14s-2.306 5.141-5.14 5.141h-5.453c-2.137 0-4.018-1.286-4.794-3.275-1.504-3.859-5.852-5.768-9.712-4.264-3.859 1.504-5.768 5.853-4.264 9.712 2.443 6.266 7.686 10.749 13.996 12.264v2.163c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-2.171c8.809-2.149 15.367-10.108 15.367-19.569 0-11.105-9.035-20.14-20.14-20.14h-5.453c-2.834 0-5.14-2.306-5.14-5.14s2.306-5.141 5.14-5.141h5.453c2.136 0 4.018 1.286 4.793 3.275 1.504 3.859 5.852 5.771 9.712 4.264 3.859-1.504 5.768-5.853 4.264-9.712-2.443-6.266-7.686-10.749-13.996-12.264v-2.163c0-4.142-3.358-7.5-7.5-7.5z"></path><path d="m212.761 183.567h-22.061c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h22.061c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"></path><path d="m113.913 191.067c0 4.142 3.358 7.5 7.5 7.5h44.288c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-44.288c-4.142 0-7.5 3.358-7.5 7.5z"></path><path d="m212.761 211.961h-22.061c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h22.061c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"></path><path d="m121.413 226.961h44.288c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-44.288c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"></path><path d="m212.761 240.355h-22.061c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h22.061c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"></path><path d="m121.413 255.355h44.288c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-44.288c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"></path><path d="m212.761 268.749h-22.061c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h22.061c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"></path><path d="m121.413 283.749h44.288c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-44.288c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"></path><path d="m212.761 297.143h-22.061c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h22.061c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"></path><path d="m121.413 312.143h44.288c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-44.288c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"></path><path d="m371.131 362.163h-5.377c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h5.377c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"></path><path d="m340.753 362.163h-44.288c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h44.288c4.142 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5z"></path><path d="m362.244 398.057c0 4.142 3.358 7.5 7.5 7.5h20.843c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-20.843c-4.142 0-7.5 3.358-7.5 7.5z"></path><path d="m352.244 398.057c0-4.142-3.358-7.5-7.5-7.5h-44.288c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h44.288c4.142 0 7.5-3.358 7.5-7.5z"></path><path d="m338.485 418.951h-38.028c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h38.028c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"></path><path d="m121.413 340.537h44.288c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-44.288c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"></path><path d="m121.413 368.93h44.288c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-44.288c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"></path><path d="m121.413 397.324h44.288c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-44.288c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"></path><path d="m121.413 425.718h44.288c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-44.288c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"></path></g></svg>
            <span>Emissão de NFS-e</span>
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
    <span>
      <strong>Personalização</strong> e Impressão de Contratos
    </span>

    <p>
      Está cansado de redigir manualmente todas as <strong>cláusulas</strong> e informações dos contratos? Com a BLUE ERP, você pode definir suas <strong>informações padrão</strong> uma única vez!
      <br /><br />
      Assim, sempre que precisar imprimir esse modelo de contrato, o sistema automaticamente preencherá os <strong>dados necessários</strong>, facilitando e agilizando o processo.
    </p>

    <button onClick={() => abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
  </div>

  <img src={Set} alt="descer" className="bottom" onClick={() => handleScrollToSection(section2Ref)} />
</S.Main2>

<S.Main2 ref={section2Ref}>
  <div className="left">
    <span>
      <strong>Criação</strong> de Contratos
    </span>

    <p>
      Defina de forma clara e objetiva os <strong>dados do credor</strong>, a duração do contrato, as <strong>datas de pagamento</strong> ou vencimento, os valores e a quantidade de parcelas, além da <strong>comissão do vendedor</strong>, se aplicável. Isso tudo visa promover a eficiência na negociação.
      <br /><br />
      Além disso, você pode <strong>controlar</strong> o status do contrato, podendo verificar se ele está ativo, em processo judicial, em acordo contratual ou rescindido.
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
    <span>
      <strong>Envio</strong> do Contrato por E-mail
    </span>

    <p>
      Com a criação do catálogo no BLUE ERP, você pode facilmente <strong>enviar contratos</strong> aos seus clientes por e-mail. O consumidor poderá visualizar a <strong>descrição</strong> do contrato no computador ou em dispositivos móveis, como tablets e smartphones, acessando imagens, <strong>características</strong>, preços e finalizando a compra.
      <br /><br />
      Personalize o <strong>servidor de e-mails</strong> da sua empresa e, assim, caso o cliente tenha alguma dúvida, ele poderá responder diretamente ao seu e-mail!
    </p>

    <button onClick={() => abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
  </div>

  <img src={Set} alt="descer" className="bottom" onClick={() => handleScrollToSection(section4Ref)} />
</S.Main2>

<S.Main2 ref={section4Ref}>
  <div className="left">
    <span>
      <strong>Registros</strong> Financeiros
    </span>

    <p>
      Tenha total controle dos <strong>registros financeiros</strong> gerados pela realização de um contrato.
      <br /><br />
      Com o módulo Financeiro, você pode visualizar amplamente as <strong>parcelas</strong> abertas, pagas ou em atraso, facilitando o processo de <strong>cobranças</strong> e renegociações.
      <br /><br />
      Além disso, é possível gerar <strong>boletos</strong> para cada parcela do contrato em vigor, que também são enviados diretamente para o e-mail do contratante.
    </p>

    <button onClick={() => abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
  </div>

  <div className="right">
    <div className="Especial">
      <img src={Image5} alt="" />
    </div>
  </div>
</S.Main2>

<S.Main2 ref={section5Ref}>
  <div className="left">
    <img src={Image4} alt="" />
  </div>

  <div className="right">
    <span>
      <strong>Emissão</strong> de NFS-e
    </span>

    <p>
      Além de todos os recursos para <strong>otimizar</strong> a criação do contrato, com nosso sistema para emissão de Nota Fiscal de Serviço Eletrônica (NFS-e), você pode <strong>emitir</strong> seus documentos fiscais rapidamente após o faturamento do contrato, com apenas alguns cliques.
      <br /><br />
      E não se preocupe, a BLUE ERP possui <strong>integração</strong> com mais de 1.000 municípios e está continuamente expandindo!
    </p>

    <button onClick={() => abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
  </div>
</S.Main2>



      <Footer/>
     </S.Container>
    )
}