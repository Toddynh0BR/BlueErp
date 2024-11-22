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
import Image1 from "../assets//top-image-controle-de-producao.png";
import Image2 from "../assets/producao-op.svg";
import Image3 from "../assets/producao-composicao.svg";
import Image4 from "../assets/producao-qualidade.svg";
import Image5 from "../assets/producao-simulador.svg";
import Image6 from "../assets/bloco-k.svg"


export function ControleProdução(){
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
        <strong>Gestão de Produção </strong> com <br />
         Eficiência e Qualidade!
        </h2>

        <p>
        
Aprimore sua performance em todas as fases dos processos produtivos, aumentando sua produtividade e otimizando seus resultados.
        </p>

        <button  onClick={()=> abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
       </div>

       <div className="right">
        <img src={Image1} alt="Image" />
       </div>
       </div>

       <div className="Bottom">
       <div className="card" onClick={() => handleScrollToSection(section1Ref)}>
        <svg fill="#7300cc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512"><g id="Outline"><rect x="48" y="104" width="16" height="16"></rect><rect x="80" y="104" width="16" height="16"></rect><rect x="112" y="104" width="16" height="16"></rect><path d="M168,168a32,32,0,1,0,32,32A32.036,32.036,0,0,0,168,168Zm0,48a16,16,0,1,1,16-16A16.019,16.019,0,0,1,168,216Z"></path><path d="M447.928,298.16l-48.466-6.9L384,283.159V250.438c.8-.576,1.578-1.162,2.325-1.764A72.119,72.119,0,0,0,411.831,209.5a134.2,134.2,0,0,0,3.931-25.5H416a32,32,0,0,0,8.712-62.785A31.86,31.86,0,0,0,424,102.607V72a56,56,0,0,0-56-56H304a56,56,0,0,0-56,56H48a32.036,32.036,0,0,0-32,32V320a32.036,32.036,0,0,0,32,32h84.9l-10.667,32H112a24.114,24.114,0,0,0-24,24,24.027,24.027,0,0,0,24,24h64v56h16V416h48v72h16V376H240v24H192V353.6A40.284,40.284,0,0,1,226.319,314l42.242-5.967,11.577,61.447A8,8,0,0,0,288,376c2.833,0,7.178-2.645,7.178-2.645L328,356.944V424h16V356.944l36.422,18.211a8,8,0,0,0,11.44-5.674l11.586-61.494,42.2,6.009A40.293,40.293,0,0,1,480,353.6V400H432V376H416V488h16V416h48v72h16V353.6A56.385,56.385,0,0,0,447.928,298.16ZM336,330.236l-32-44.8V259.113c1.888.724,3.8,1.373,5.747,1.924A69.545,69.545,0,0,0,330,264h12a71.563,71.563,0,0,0,26-4.869v26.305Zm60.324-124.677a56.054,56.054,0,0,1-19.86,30.514l-.137.109a41.957,41.957,0,0,1-4.487,3.145c-.047.028-.093.057-.139.086A55.154,55.154,0,0,1,342,248H330a53.554,53.554,0,0,1-15.663-2.291l-.167-.049a52.7,52.7,0,0,1-13.926-6.281,55.441,55.441,0,0,1-24.574-33.842A119.266,119.266,0,0,1,272,176V144.615a32.557,32.557,0,0,0,11.811.195l4.89-.816a12,12,0,1,0,20.714-3.414,183.523,183.523,0,0,1,53.17,0A12.006,12.006,0,1,0,383.3,144c.669,1.881,14.186,1.112,16.764.644C399.676,155.045,400,165.567,400,176A119.292,119.292,0,0,1,396.324,205.559ZM244.7,163.3A15.983,15.983,0,0,1,255.92,136l.08.082V168A16.105,16.105,0,0,1,244.7,163.3ZM211.61,232.3l7.3,7.3L207.6,250.911l-7.3-7.3a8,8,0,0,0-9.468-1.377,47.668,47.668,0,0,1-9.112,3.75A8,8,0,0,0,176,253.65V264H160V253.65a8,8,0,0,0-5.716-7.667,47.668,47.668,0,0,1-9.112-3.75,8.005,8.005,0,0,0-9.468,1.377l-7.3,7.3L117.088,239.6l7.3-7.3a8,8,0,0,0,1.377-9.468,47.7,47.7,0,0,1-3.75-9.111A8,8,0,0,0,114.35,208H104V192h10.35a8,8,0,0,0,7.667-5.716,47.722,47.722,0,0,1,3.75-9.112,8,8,0,0,0-1.377-9.469l-7.3-7.3L128.4,149.088l7.3,7.3a8,8,0,0,0,9.468,1.376,47.7,47.7,0,0,1,9.11-3.748A8,8,0,0,0,160,146.35V136h16v10.35a8,8,0,0,0,5.718,7.668,47.7,47.7,0,0,1,9.11,3.748,8,8,0,0,0,9.468-1.376l7.3-7.3L218.912,160.4l-7.3,7.3a8,8,0,0,0-1.377,9.469,47.722,47.722,0,0,1,3.75,9.112A8,8,0,0,0,221.65,192H232v16H221.65a8,8,0,0,0-7.667,5.716,47.7,47.7,0,0,1-3.75,9.111A8,8,0,0,0,211.61,232.3ZM227.326,176q-.2-.492-.4-.981l3.644-3.644a31.719,31.719,0,0,0,2.817,3.241c.48.48.979.937,1.488,1.384Zm178.819-52.812a16.051,16.051,0,0,1-15.325,5.838l-21.94-3.657a199.53,199.53,0,0,0-65.76,0l-21.94,3.656A16.277,16.277,0,0,1,262.275,112h147.45A16.063,16.063,0,0,1,406.145,123.188ZM432,152a16.035,16.035,0,0,1-16,16V136.1c.032-.032.066-.06.1-.092A16.015,16.015,0,0,1,432,152ZM264,72a40,40,0,0,1,40-40h64a40,40,0,0,1,40,40V96H264ZM149.766,352h26.271c-.015.533-.037,1.064-.037,1.6V384H139.1ZM112,416a8.009,8.009,0,0,1-8-8,7.656,7.656,0,0,1,2.3-5.546c.053-.051.105-.1.156-.155A7.655,7.655,0,0,1,112,400h64v16Zm66.887-80H48a16.019,16.019,0,0,1-16-16v-8H194.69A56.7,56.7,0,0,0,178.887,336Zm93.5-44.665L239.367,296H32V104A16.019,16.019,0,0,1,48,88H248v14.607a31.86,31.86,0,0,0-.712,18.608A32.117,32.117,0,0,0,225.04,143.9l-11.785-11.786a8,8,0,0,0-11.314,0l-8.96,8.96q-.487-.206-.981-.4V128a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8v12.674q-.494.2-.981.4l-8.96-8.96a8,8,0,0,0-11.314,0l-22.627,22.628a8,8,0,0,0,0,11.315l8.96,8.959q-.206.489-.4.981H96a8,8,0,0,0-8,8v32a8,8,0,0,0,8,8h12.675q.2.492.4.98l-8.96,8.96a8,8,0,0,0,0,11.315l22.627,22.627a8,8,0,0,0,11.314,0l8.96-8.959c.325.137.652.27.981.4V272a8,8,0,0,0,8,8h32a8,8,0,0,0,8-8V259.325c.329-.132.656-.265.981-.4l8.96,8.959a8,8,0,0,0,11.314,0l22.627-22.627a8,8,0,0,0,0-11.314l-8.96-8.961q.206-.487.4-.98H240a8,8,0,0,0,8-8V184a8.065,8.065,0,0,0-.078-1.061A31.688,31.688,0,0,0,256,184h.238a133.907,133.907,0,0,0,3.916,25.442A71.2,71.2,0,0,0,288,250.411v32.748Zm21.509,64.77-9.942-52.766,9.582-5.02,30.508,42.712Zm84.2,0-30.148-15.074,30.508-42.712,9.582,5.02Z"></path><path d="M323.247,190.534H312v16h11.247a112.566,112.566,0,0,0,39.6-6.857l-5.69-14.953A96.487,96.487,0,0,1,323.247,190.534Z"></path><rect x="312" y="64" width="48" height="16"></rect><rect x="304" y="384" width="16" height="16"></rect></g></svg>
            <span>Ordens de produção</span>
        </div>
        <div className="card" onClick={() => handleScrollToSection(section2Ref)}>
          <svg fill="#7300cc" id="Layer_5" enable-background="new 0 0 64 64" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m61 17v-9h-2v9h-2v-4h-2v4h-2v-6h-2v6h-1.618l-3.149 6.298-2.233-.957v-8l-8-3.429-2 .857v-4.769h1c1.654 0 3-1.346 3-3s-1.346-3-3-3h-22c-1.654 0-3 1.346-3 3s1.346 3 3 3h1v12.289c-7.919 3.829-13 11.888-13 20.711 0 12.683 10.318 23 23 23s23-10.317 23-23c0-1.176-.113-2.347-.289-3.502l4.289-1.839v-9.318l-2.925-1.254 2.543-5.087h12.382v-2zm-19-1.341v6.682l-3 1.286-3 1.286-3-1.286-3-1.286v-6.682l6-2.571zm-13 20.253-6-2.571v-6.682l6-2.571 3 1.286 3 1.286v6.682zm-17-31.912c0-.552.449-1 1-1h22c.551 0 1 .448 1 1s-.449 1-1 1h-22c-.551 0-1-.448-1-1zm12 57c-10.634 0-19.426-7.953-20.794-18.219 1.799-.509 3.416-.781 4.794-.781 4.183 0 8.186 2.825 12.423 5.817 4.306 3.039 8.76 6.183 13.577 6.183 2.37 0 4.688-.469 6.66-1.267-3.841 5.014-9.87 8.267-16.66 8.267zm18.944-11.997c-1.53 1.514-4.818 2.997-8.944 2.997-3.844 0-7.537-2.387-11.399-5.096 2.964-2.4 7.087-4.904 11.399-4.904 5.165 0 9.409 2.374 9.935 4.563-.277.84-.615 1.65-.991 2.44zm2.056-9.003c0 1.316-.137 2.598-.369 3.848-2.047-2.263-6.148-3.848-10.631-3.848-5.106 0-9.847 2.993-13.097 5.708-4.097-2.883-8.336-5.708-12.903-5.708-1.462 0-3.133.261-4.962.752-.009-.252-.038-.498-.038-.752 0-8.254 4.871-15.775 12.41-19.162l.59-.265v-13.573h16v5.626l-4 1.714v8l-7 3v9.318l8 3.429 7-3 7 3 1.808-.775c.114.891.192 1.787.192 2.688zm4-6.659-6 2.571-6-2.571v-6.682l3-1.286 3-1.286 6 2.571z"></path><path d="m53 21h10v2h-10z"></path><path d="m53 25h10v2h-10z"></path><path d="m53 29h2v2h-2z"></path><path d="m57 29h2v2h-2z"></path><path d="m61 29h2v2h-2z"></path><path d="m49 48h14v-6h-14zm12-2h-2v-2h2zm-10-2h6v2h-6z"></path><path d="m49 56h14v-6h-14zm2-4h10v2h-10z"></path><path d="m11 45c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4c-.551 0-1-.448-1-1s.449-1 1-1 1 .448 1 1-.449 1-1 1z"></path><path d="m34 44c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4c-.551 0-1-.448-1-1s.449-1 1-1 1 .448 1 1-.449 1-1 1z"></path><path d="m22 53c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4c-.551 0-1-.448-1-1s.449-1 1-1 1 .448 1 1-.449 1-1 1z"></path><path d="m11 32c-1.654 0-3 1.346-3 3s1.346 3 3 3v-2c-.551 0-1-.448-1-1s.449-1 1-1 1 .448 1 1h2c0-1.654-1.346-3-3-3z"></path></g></svg>
            <span>Produtos compostos</span>
        </div>
        <div className="card" onClick={() => handleScrollToSection(section3Ref)}>
          <svg fill="#7300cc" id="Layer_5" enable-background="new 0 0 64 64" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m43.303 25.925-.701-1.873c-.627.235-1.263.45-1.891.64l.578 1.914c.669-.202 1.347-.431 2.014-.681z"></path><path d="m37 30.28v-2.688c.742-.119 1.487-.265 2.226-.435l-.451-1.949c-.964.224-1.941.4-2.904.527l-.871.115v4.431c0 .268.006.535.02.801l1.998-.102c-.012-.233-.018-.465-.018-.7z"></path><path d="m19 13c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"></path><path d="m45.478 18.788-.477-.259-.477.259c-3.828 2.074-8.161 3.185-12.53 3.211l-.994.006v8.275c0 8.677 5.489 16.495 13.659 19.453l.341.123.341-.123c8.17-2.958 13.659-10.776 13.659-19.453v-8.275l-.994-.006c-4.366-.026-8.698-1.137-12.528-3.211zm11.522 11.492c0 7.717-4.807 14.682-12 17.445-7.193-2.764-12-9.729-12-17.445v-6.305c4.178-.171 8.297-1.261 12.001-3.177 3.705 1.916 7.823 3.006 11.999 3.177z"></path><path d="m41 31.586-4.414 4.414 6.414 6.414 12.414-12.414-4.414-4.414-8 8zm11.586-1.586-9.586 9.586-3.586-3.586 1.586-1.586 2 2 8-8z"></path><path d="m63 18h-4.829c-4.494 0-8.845-1.317-12.622-3.836l-.587-.341-.551.367c-2.277 1.519-4.784 2.595-7.411 3.209v-2.191l-2.635-.62c-.332-1.159-.795-2.275-1.381-3.332l1.426-2.303-5.363-5.363-2.303 1.426c-1.057-.586-2.173-1.049-3.332-1.381l-.62-2.635h-7.584l-.62 2.635c-1.159.332-2.275.795-3.332 1.381l-2.303-1.426-5.363 5.363 1.426 2.303c-.586 1.057-1.049 2.173-1.381 3.332l-2.635.62v7.584l2.635.62c.332 1.159.795 2.275 1.381 3.332l-1.426 2.303 5.363 5.363 2.303-1.426c1.057.586 2.173 1.049 3.332 1.381l.62 2.635h7.584l.62-2.635c1.159-.332 2.275-.795 3.332-1.381l.461.285c.536 4.323 2.198 8.378 4.745 11.78l-3.364 12.335 4.938-1.235 3.737 6.229 3.353-10.059c1.304.659 2.671 1.217 4.104 1.639l.282.084.282-.083c1.433-.422 2.8-.98 4.104-1.639l3.353 10.059 3.737-6.229 4.938 1.235-3.364-12.335c3.127-4.178 4.95-9.332 4.95-14.77zm-36.234 12.646-.523.318c-1.215.736-2.527 1.281-3.903 1.617l-.596.146-.536 2.273h-4.416l-.535-2.273-.596-.146c-1.376-.336-2.688-.881-3.903-1.617l-.523-.318-1.986 1.229-3.123-3.123 1.229-1.986-.318-.523c-.736-1.215-1.281-2.527-1.617-3.903l-.146-.596-2.274-.536v-4.416l2.273-.535.146-.596c.336-1.376.881-2.688 1.617-3.903l.318-.523-1.229-1.987 3.123-3.123 1.986 1.229.523-.318c1.215-.736 2.527-1.281 3.903-1.617l.596-.146.536-2.273h4.416l.535 2.273.596.146c1.376.336 2.688.881 3.903 1.617l.523.318 1.986-1.229 3.123 3.123-1.229 1.986.318.523c.736 1.215 1.281 2.527 1.617 3.903l.146.596 2.274.536v.982c-1.045.146-2.103.226-3.171.226h-.88c-.511-6.15-5.669-11-11.949-11-6.617 0-12 5.383-12 12s5.383 12 12 12c2.98 0 5.82-1.119 8-3.068v2.349c0 .176.018.349.022.524zm.234-12.646v6.979c-1.887 2.518-4.849 4.021-8 4.021-5.514 0-10-4.486-10-10s4.486-10 10-10c5.176 0 9.446 3.954 9.949 9zm9.739 39.621-2.263-3.771-3.062.765 2.099-7.698c1.552 1.701 3.34 3.189 5.324 4.409zm21.847-3.006-3.062-.765-2.263 3.771-2.098-6.295c1.984-1.22 3.772-2.708 5.324-4.409zm2.414-24.335c0 9.894-6.564 18.765-16 21.676-9.436-2.911-16-11.782-16-21.676v-10.28h2.829c4.673 0 9.203-1.309 13.17-3.808 3.948 2.494 8.489 3.808 13.172 3.808h2.829z"></path></svg>
            <span>Controle de qualidade</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section4Ref)}>
          <svg fill="#7300cc" id="Layer_5" enable-background="new 0 0 64 64" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m58 53h-17v-12h-2v-19.303l-4.465-6.697h-4.535v-5h16v1c0 1.103.897 2 2 2h3v12.142c-1.469.382-2.617 1.566-2.92 3.065-4.088.888-7.08 4.534-7.08 8.793 0 2.414 1.721 4.434 4 4.899v9.101h14v-9.101c2.279-.465 4-2.484 4-4.899 0-4.259-2.992-7.905-7.08-8.793-.303-1.499-1.451-2.683-2.92-3.065v-12.142h3c1.103 0 2-.897 2-2v-1h1c1.654 0 3-1.346 3-3s-1.346-3-3-3h-1v-1c0-1.103-.897-2-2-2h-8c-1.103 0-2 .897-2 2v1h-16c0-1.654-1.346-3-3-3h-12c-1.654 0-3 1.346-3 3v11h-4.535l-4.465 6.697v32.328c-1.207.914-2 2.348-2 3.975 0 2.757 2.243 5 5 5h52c2.757 0 5-2.243 5-5s-2.243-5-5-5zm-15-16c0-3.211 2.188-5.967 5.216-6.763.422 1.285 1.466 2.279 2.784 2.621v4.142h-6v2.816c-1.161-.414-2-1.514-2-2.816zm8 2h2v2h-2zm6 10h-10v-10h2v4h6v-4h2zm-1.216-18.763c3.028.795 5.216 3.552 5.216 6.763 0 1.302-.839 2.402-2 2.816v-2.816h-6v-4.142c1.318-.343 2.363-1.336 2.784-2.621zm-1.784-1.237c0 1.103-.897 2-2 2s-2-.897-2-2 .897-2 2-2 2 .897 2 2zm5-23c.551 0 1 .449 1 1s-.449 1-1 1h-1v-2zm-11-3h8l.001 8h-8.001zm5 55c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm-42 0c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zm4-15h2v2h-2zm4 4v-4h2v10h-10v-10h2v4zm-1.026 8h4.051c-.634.838-1.025 1.87-1.025 3s.391 2.162 1.026 3h-4.051c.634-.838 1.025-1.87 1.025-3s-.391-2.162-1.026-3zm5.026 3c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zm6.974-3h4.051c-.634.838-1.025 1.87-1.025 3s.391 2.162 1.026 3h-4.051c.634-.838 1.025-1.87 1.025-3s-.391-2.162-1.026-3zm5.026 3c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zm6.974-3h4.051c-.634.838-1.025 1.87-1.025 3s.391 2.162 1.026 3h-4.051c.634-.838 1.025-1.87 1.025-3s-.391-2.162-1.026-3zm-12.974-2v-10h2v4h6v-4h2v10zm4-10h2v2h-2zm-5-34h-14v-2h14zm18-3v2h-16v-2zm-31-3h12c.551 0 1 .449 1 1v1h-14v-1c0-.551.449-1 1-1zm-1 8h14v4h-14zm-5.465 6h24.93l2.667 4h-30.264zm-3.535 6h32v18h-10v12h-4v-12h-14v12h-3c-.342 0-.677.035-1 .101zm-2 35c0-1.654 1.346-3 3-3h4.026c-.635.838-1.026 1.87-1.026 3s.391 2.162 1.026 3h-4.026c-1.654 0-3-1.346-3-3zm55 3h-4.026c.635-.838 1.026-1.87 1.026-3s-.391-2.162-1.026-3h4.026c1.654 0 3 1.346 3 3s-1.346 3-3 3z"></path><path d="m52 4c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1z"></path><path d="m19 25h-12v14h12zm-2 12h-8v-10h8z"></path><path d="m24 31c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3 1.346 3 3 3zm0-4c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1z"></path><path d="m32 31c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3 1.346 3 3 3zm0-4c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1z"></path><path d="m21 33h14v2h-14z"></path><path d="m21 37h2v2h-2z"></path><path d="m25 37h6v2h-6z"></path><path d="m33 37h2v2h-2z"></path></g></svg>
            <span>Simulador de Produção</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section5Ref)}>
          <svg fill="#7300cc" height="480pt" viewBox="0 0 480.08177 480" width="480pt" xmlns="http://www.w3.org/2000/svg"><path d="m479.199219 113.800781c-1.652344-6.144531-5.683594-11.382812-11.199219-14.558593-5.519531-3.191407-12.082031-4.054688-18.238281-2.402344-6.148438 1.65625-11.386719 5.683594-14.5625 11.199218l-4 6.960938c-3.800781-2.183594-8.65625-.898438-10.878907 2.882812l-20.320312 34.636719-6.960938-4c-1.84375-1.066406-4.039062-1.355469-6.09375-.800781-2.058593.558594-3.808593 1.910156-4.867187 3.761719-2.167969 3.824219-.847656 8.683593 2.960937 10.878906l6.960938 4-68 117.839844-16.800781 44.882812-8 14.957031c-4.683594 8.148438-4.183594 18.277344 1.28125 25.921876l-18 22.078124-5.039063-12.636718c-2.273437-5.632813-7.535156-9.492188-13.585937-9.964844-6.054688-.476562-11.855469 2.515625-14.976563 7.722656l-2.878906 4.878906-2.71875-32c-.625-7.570312-6.488281-13.65625-14.027344-14.570312-7.542968-.910156-14.683594 3.609375-17.09375 10.8125l-19.679687 59.039062c-1.375 4.175782.875 8.675782 5.039062 10.082032.78125.363281 1.621094.582031 2.480469.636718 3.4375.011719 6.5-2.179687 7.601562-5.4375l19.597657-59.039062 2.800781 32.476562c.578125 6.929688 5.558594 12.691407 12.332031 14.261719 6.773438 1.570313 13.78125-1.414062 17.347657-7.378906l2.960937-4.882813 4.960937 12.5625c2.105469 5.292969 6.867188 9.070313 12.503907 9.910157 5.636719.839843 11.292969-1.382813 14.855469-5.832031l18.640624-23.597657c2.0625.539063 4.1875.808594 6.320313.800781 8.574219.066407 16.535156-4.449218 20.878906-11.84375l8-13.359374 30.480469-37.039063 68.71875-119.28125 6.960938 4c1.855468 1.0625 3.207031 2.816406 3.757812 4.882813.554688 2.050781.265625 4.238281-.796875 6.078124l-32 55.441407c-1.207031 1.820312-1.617187 4.054687-1.132813 6.1875.484376 2.128906 1.816407 3.96875 3.691407 5.089843 1.84375 1.070313 4.039062 1.359376 6.09375.804688 2.058593-.558594 3.808593-1.910156 4.867187-3.761719l32-55.441406c3.191406-5.519531 4.054688-12.082031 2.398438-18.238281-1.65625-6.148438-5.683594-11.386719-11.199219-14.5625l-6.960937-4 20-34.640625c2.183593-3.800781.898437-8.652344-2.878907-10.878907l4-6.960937c3.277344-5.605469 4.144531-12.300781 2.398438-18.558594zm-30.160157 2.238281c1.058594-1.851562 2.816407-3.207031 4.882813-3.757812 2.054687-.507812 4.226563-.222656 6.078125.800781 1.855469 1.058594 3.207031 2.816407 3.761719 4.878907.507812 2.054687.222656 4.226562-.800781 6.078124l-4 6.960938-13.921876-8zm-109.039062 223.363282-4-2.320313-11.839844-6.882812 11.359375-30.398438 25.199219 14.558594zm-24 23.117187c-3.378906-2.355469-4.417969-6.886719-2.398438-10.480469l4-6.957031 13.917969 8-4 6.878907c-1.121093 1.945312-3.003906 3.328124-5.195312 3.816406-2.191407.484375-4.484375.03125-6.324219-1.257813zm53.839844-61.277343-27.679688-16 64-110.882813 27.679688 16zm72-124.722657-27.679688-16 16-27.679687 27.679688 16zm0 0"></path><path d="m126.238281 358.519531-28.316406 28.242188-16.960937-16.960938c-3.121094-3.101562-8.160157-3.101562-11.28125 0-1.515626 1.503907-2.367188 3.546875-2.367188 5.679688 0 2.132812.851562 4.179687 2.367188 5.679687l16.960937 16.960938c3 2.976562 7.054687 4.644531 11.28125 4.640625 4.25.023437 8.339844-1.644531 11.359375-4.640625l28.238281-28.320313c2.71875-3.175781 2.535157-7.90625-.417969-10.859375-2.957031-2.957031-7.6875-3.140625-10.863281-.421875zm0 0"></path><path d="m32 380.039062c0 37.558594 30.445312 68 68 68s68-30.441406 68-68c0-4.417968-3.582031-8-8-8s-8 3.582032-8 8c0 28.71875-23.28125 52-52 52s-52-23.28125-52-52 23.28125-52 52-52c11.257812-.03125 22.214844 3.621094 31.199219 10.402344 3.535156 2.652344 8.550781 1.933594 11.199219-1.601562 2.652343-3.535156 1.9375-8.546875-1.597657-11.199219-20.605469-15.453125-48.175781-17.9375-71.210937-6.421875-23.039063 11.519531-37.589844 35.066406-37.589844 60.820312zm0 0"></path><path d="m288 64.039062c4.417969 0 8-3.578124 8-8 0-4.417968-3.582031-8-8-8h-208c-4.417969 0-8 3.582032-8 8v32c0 4.421876 3.582031 8 8 8h208c4.417969 0 8-3.578124 8-8 0-4.417968-3.582031-8-8-8h-200v-16zm0 0"></path><path d="m104 112.039062c-4.417969 0-8 3.582032-8 8 0 4.421876 3.582031 8 8 8h160c4.417969 0 8-3.578124 8-8 0-4.417968-3.582031-8-8-8zm0 0"></path><path d="m312 168.039062h-176c-4.417969 0-8 3.582032-8 8 0 4.421876 3.582031 8 8 8h176c4.417969 0 8-3.578124 8-8 0-4.417968-3.582031-8-8-8zm0 0"></path><path d="m232 224.039062c0-4.417968-3.582031-8-8-8h-160c-4.417969 0-8 3.582032-8 8 0 4.421876 3.582031 8 8 8h160c4.417969 0 8-3.578124 8-8zm0 0"></path><path d="m312 216.039062h-56c-4.417969 0-8 3.582032-8 8 0 4.421876 3.582031 8 8 8h56c4.417969 0 8-3.578124 8-8 0-4.417968-3.582031-8-8-8zm0 0"></path><path d="m144 272.039062c4.417969 0 8-3.578124 8-8 0-4.417968-3.582031-8-8-8h-80c-4.417969 0-8 3.582032-8 8 0 4.421876 3.582031 8 8 8zm0 0"></path><path d="m176 272.039062h56c4.417969 0 8-3.578124 8-8 0-4.417968-3.582031-8-8-8h-56c-4.417969 0-8 3.582032-8 8 0 4.421876 3.582031 8 8 8zm0 0"></path><path d="m360 368.039062c-4.417969 0-8 3.582032-8 8v80c0 4.421876-3.582031 8-8 8h-320c-4.417969 0-8-3.578124-8-8v-432c0-4.417968 3.582031-8 8-8h320c4.417969 0 8 3.582032 8 8v150.242188c0 4.417969 3.582031 8 8 8s8-3.582031 8-8v-150.242188c0-13.253906-10.746094-23.9999995-24-23.9999995h-320c-13.253906 0-24 10.7460935-24 23.9999995v432c0 13.257813 10.746094 24 24 24h320c13.253906 0 24-10.742187 24-24v-80c0-4.417968-3.582031-8-8-8zm0 0"></path></svg>
            <span>Bloco K SPED</span>
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
            Ordens de Produção
        </span>

        <p>
            Para cada produto a ser fabricado, é fundamental criar uma <strong>ordem de produção (OP)</strong>. Esse processo permite acompanhar todas as etapas, facilitando o controle de estoque e a avaliação de qualidade dos itens produzidos.
            <br /><br />
            Com nosso <strong>ERP em Nuvem</strong>, você também pode gerar <strong>subordens de produção</strong> com base na OP original, ideal para quando um produto utilizado como matéria-prima também precisa ser fabricado internamente. 
            <br /><br />
            Outro recurso importante é o <strong>descarte de itens produzidos</strong>. Esse descarte é realizado quando a mercadoria não atende aos padrões de qualidade definidos pela empresa para comercialização, garantindo a excelência dos produtos finais.
        </p>

        <button  onClick={()=> abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
    </div>

    <img src={Set} alt="descer" className="bottom" onClick={()=> handleScrollToSection(section2Ref)}/>
</S.Main2>

<S.Main2 ref={section2Ref}>
    <div className="left">
        <span>
            Produtos Compostos
        </span>

        <p>
            Mantenha o <strong>estoque</strong> e os demais módulos da sua empresa totalmente sincronizados com o controle de produção.
            <br /><br />
            Com o <strong>Sistema de Controle de Produção da BLUE ERP</strong>, é possível cadastrar produtos compostos ou acabados, especificando todos os itens necessários, como matérias-primas e subprodutos. Ao concluir uma <strong>Ordem de Produção</strong>, o sistema realiza automaticamente a baixa das matérias-primas no estoque e registra a entrada dos produtos finalizados, garantindo uma gestão precisa e eficiente.
        </p>

        <button  onClick={()=> abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
    </div>

    <div className="right">
        <img src={Image3} alt="" className="especial"/>
    </div>

    <img src={Set} alt="descer" className="bottom" onClick={()=> handleScrollToSection(section3Ref)}/>
</S.Main2>

<S.Main2 ref={section3Ref}>
    <div className="left">
        <img src={Image4} alt="" />
    </div>

    <div className="right">
        <span>
            Controle de Qualidade
        </span>

        <p>
            Quer que seus clientes vejam sua empresa como referência em <strong>qualidade</strong>? Controlar o padrão de excelência dos produtos é essencial.
            <br /><br />
            Com o módulo de <strong>PCP da BLUE ERP</strong>, você conta com ferramentas intuitivas para avaliar a qualidade de cada item produzido. Através de um checklist criado por sua equipe, incluindo todos os critérios que precisam ser verificados em cada produto, é possível registrar no sistema se o item atingiu o nível de qualidade necessário para comercialização. Garanta a excelência e conquiste a confiança dos seus clientes com mais esse recurso oferecido pela BLUE ERP.
        </p>

        <button  onClick={()=> abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
    </div>

    <img src={Set} alt="descer" className="bottom" onClick={()=> handleScrollToSection(section4Ref)}/>
</S.Main2>

<S.Main2 ref={section4Ref}>
    <div className="left">
        <span>
            Simulador de Produção
        </span>

        <p>
            Se você precisa acompanhar a previsão de produção e o consumo de <strong>matérias-primas</strong>, o Simulador de Produção da BLUE ERP é a solução ideal! Nosso sistema ERP online oferece uma série de recursos, sempre atualizados, para aprimorar sua gestão empresarial.
            <br /><br />
            Entre os principais métodos de controle está o módulo de relatórios, que inclui o <strong>Relatório de PCP: o Simulador de Produção</strong>. Esse recurso gráfico permite visualizar o progresso do processo produtivo, facilitando o monitoramento das demandas de insumos e outros recursos necessários para atender às ordens de produção.
        </p>

        <button  onClick={()=> abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
    </div>

    <div className="right">
        <img src={Image5} alt=""/>
    </div>

    <img src={Set} alt="descer" className="bottom" onClick={()=> handleScrollToSection(section5Ref)}/>
</S.Main2>

<S.Main2 ref={section5Ref}>
    <div className="left">
        <img src={Image6} alt="" />
    </div>

    <div className="right">
        <span>
            Bloco K - SPED Fiscal
        </span>

        <p>
            Se sua empresa atua no setor de produção, você já sabe da obrigatoriedade de enviar os relatórios de <strong>Estoque</strong> e Produção no SPED Fiscal. Com a BLUE ERP, gerar o <strong>Bloco K</strong> é simples e rápido, atendendo a todas as normas e requisitos legais.
            <br /><br />
            Essa atualização fiscal exige que os gestores intensifiquem o controle de estoque e estejam em conformidade com as regulamentações. Adaptar-se a essa mudança é mais fácil com um <strong>Sistema Integrado de Gestão Empresarial</strong>, como a BLUE ERP, que facilita o cumprimento das obrigações fiscais e organiza seu estoque com eficiência.
        </p>

        <button  onClick={()=> abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
    </div>

</S.Main2>


      <Footer/>
     </S.Container>
    )
}