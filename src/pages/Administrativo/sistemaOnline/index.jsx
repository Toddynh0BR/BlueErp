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

export function SistemaOnline(){
    const navigate = useNavigate();

    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
    const section5Ref = useRef(null);
    const section6Ref = useRef(null);
    const section7Ref = useRef(null);

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
        Com o nosso <strong> Sistema Online, </strong> as informações da <br />
        sua empresa estão <strong> sempre ao seu alcance.</strong>
        </h2>

        <p>
        Adote uma plataforma tecnológica que oferece agilidade, controle e segurança,  <br />
        impulsionando resultados de alta performance em todos os setores do seu negócio.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
        <img src={Image1} alt="Image" />
       </div>
       </div>

       <div className="Bottom">
        <div className="card" onClick={() => handleScrollToSection(section1Ref)}>
          <svg fill="#7300cc" id="Layer_5" enable-background="new 0 0 64 64" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m9 49.184v-13.184h-2v13.184c-1.161.414-2 1.514-2 2.816 0 1.654 1.346 3 3 3s3-1.346 3-3c0-1.302-.839-2.402-2-2.816zm-1 3.816c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z"></path><path d="m14 36c-1.654 0-3 1.346-3 3 0 1.302.839 2.402 2 2.816v13.184h2v-13.184c1.161-.414 2-1.514 2-2.816 0-1.654-1.346-3-3-3zm0 4c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z"></path><path d="m53 49.184v-13.184h-2v13.184c-1.161.414-2 1.514-2 2.816 0 1.654 1.346 3 3 3s3-1.346 3-3c0-1.302-.839-2.402-2-2.816zm-1 3.816c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z"></path><path d="m58 36c-1.654 0-3 1.346-3 3 0 1.302.839 2.402 2 2.816v13.184h2v-13.184c1.161-.414 2-1.514 2-2.816 0-1.654-1.346-3-3-3zm0 4c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z"></path><path d="m44 33c-.395 0-.77.081-1.116.22-.345-1.275-1.501-2.22-2.884-2.22-.771 0-1.468.301-2 .78-.532-.48-1.229-.78-2-.78-.352 0-.686.072-1 .184v-8.605c4.158-1.178 7.235-4.724 7.87-8.959l4.228 2.326c-2.479 1.821-4.098 4.749-4.098 8.054 0 5.514 4.486 10 10 10s10-4.486 10-10-4.486-10-10-10c-1.371 0-2.679.278-3.87.78l-6.161-3.389c-.318-5.781-5.109-10.391-10.969-10.391s-10.651 4.61-10.969 10.392l-6.161 3.388c-1.191-.502-2.498-.78-3.87-.78-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10c0-3.306-1.619-6.233-4.099-8.055l4.229-2.326c.635 4.239 3.71 7.783 7.871 8.961v18.433c0 .455-.105.911-.306 1.319l-.839-4.194c-.601-3.002-3.259-5.181-6.32-5.181-1.397 0-2.535 1.138-2.535 2.535 0 .502.147.988.426 1.406l1.029 1.544c.381.571.627 1.233.712 1.914l.692 5.533c.114.923.406 1.8.837 2.547l3.303 6.794v1.77h-2v6h22v-6h-2v-1.667l1.6-2.133c.903-1.203 1.4-2.694 1.4-4.2v-13c0-1.654-1.346-3-3-3zm9-1c-1.799 0-3.455-.604-4.792-1.609 1.125-1.492 2.895-2.391 4.792-2.391s3.667.899 4.792 2.391c-1.337 1.005-2.993 1.609-4.792 1.609zm-3-9c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zm3-7c4.411 0 8 3.589 8 8 0 1.893-.664 3.633-1.768 5.004-.792-.986-1.796-1.763-2.931-2.278 1.034-.917 1.699-2.239 1.699-3.726 0-2.757-2.243-5-5-5s-5 2.243-5 5c0 1.487.665 2.809 1.699 3.726-1.135.516-2.139 1.292-2.931 2.278-1.104-1.371-1.768-3.111-1.768-5.004 0-4.411 3.589-8 8-8zm-42 16c-1.799 0-3.455-.604-4.792-1.609 1.125-1.492 2.895-2.391 4.792-2.391s3.667.899 4.792 2.391c-1.337 1.005-2.993 1.609-4.792 1.609zm-3-9c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zm11 1c0 1.893-.664 3.633-1.768 5.004-.792-.986-1.796-1.763-2.931-2.278 1.034-.917 1.699-2.239 1.699-3.726 0-2.757-2.243-5-5-5s-5 2.243-5 5c0 1.487.665 2.809 1.699 3.726-1.135.516-2.139 1.292-2.931 2.278-1.104-1.371-1.768-3.111-1.768-5.004 0-4.411 3.589-8 8-8s8 3.589 8 8zm4-12c0-4.963 4.037-9 9-9s9 4.037 9 9c0 2.017-.685 3.907-1.842 5.432-.823-1.659-2.186-2.965-3.844-3.717 1.026-.916 1.686-2.234 1.686-3.715 0-2.757-2.243-5-5-5s-5 2.243-5 5c0 1.481.66 2.799 1.686 3.715-1.659.752-3.022 2.059-3.845 3.718-1.157-1.524-1.841-3.414-1.841-5.433zm12-2c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm-8.638 9.003c.838-2.379 3.066-4.003 5.638-4.003 2.57 0 4.798 1.624 5.638 4.001-.876.709-1.886 1.262-2.998 1.603-.505-.949-1.492-1.604-2.64-1.604s-2.135.655-2.639 1.604c-1.113-.341-2.123-.893-2.999-1.601zm17.638 41.997h-18v-2h18zm1-12c0 1.075-.355 2.141-1 3l-2 2.667v2.333h-14v-2.23l-3.536-7.267c-.33-.575-.538-1.2-.62-1.859l-.692-5.534c-.123-.987-.479-1.947-1.032-2.775l-1.03-1.545c-.059-.088-.09-.191-.09-.298 0-.295.24-.534.535-.534 2.111 0 3.944 1.503 4.359 3.573l1.286 6.427h2.438l.854-1.709c.345-.69.528-1.464.528-2.235v-19.014c0-.552.448-1 1-1s1 .448 1 1v12 4h2v-4c0-.552.448-1 1-1s1 .448 1 1v4h2v-4c0-.552.448-1 1-1s1 .448 1 1v2 2h2v-2c0-.552.448-1 1-1s1 .448 1 1z"></path></svg>
            <span>Usuários e Permissões</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section2Ref)}>
        <svg fill="#7300cc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512"><g id="E_learning-3" data-name="E learning"><path d="M425.735,152.19A340.873,340.873,0,0,0,368,144.427V48A40.045,40.045,0,0,0,328,8H120A40.045,40.045,0,0,0,80,48V464a40.045,40.045,0,0,0,40,40H328a40.045,40.045,0,0,0,40-40V368.447a324.81,324.81,0,0,1,54.265,7.363A8,8,0,0,0,432,368V160A8,8,0,0,0,425.735,152.19ZM267.056,24l-8,16H188.944l-8-16ZM352,464a24.027,24.027,0,0,1-24,24H120a24.027,24.027,0,0,1-24-24V48a24.027,24.027,0,0,1,24-24h43.056l13.789,27.578A8,8,0,0,0,184,56h80a8,8,0,0,0,7.155-4.422L284.944,24H328a24.027,24.027,0,0,1,24,24v96.036a339.149,339.149,0,0,0-72,7.781,337.406,337.406,0,0,0-145.735.373A8,8,0,0,0,128,160V368a8,8,0,0,0,9.735,7.81,321.532,321.532,0,0,1,140.53,0c.113.025.227.036.34.056.166.029.331.063.5.082.133.015.265.017.4.025.16.01.32.026.481.026H280c.256,0,.512-.016.766-.04.079-.008.158-.02.238-.03q.3-.038.589-.1c.048-.01.095-.013.142-.023A323.326,323.326,0,0,1,352,368.039ZM208,352.036a338.3,338.3,0,0,0-64,6.136V166.48a321.147,321.147,0,0,1,128,0V358.172A338.3,338.3,0,0,0,208,352.036Zm208,6.136a336.836,336.836,0,0,0-128,0V166.48a321.147,321.147,0,0,1,128,0Z"></path><path d="M256,184H160a8,8,0,0,0-8,8v56a8,8,0,0,0,8,8h96a8,8,0,0,0,8-8V192A8,8,0,0,0,256,184Zm-8,56H168V200h80Z"></path><path d="M256,264H160a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Z"></path><path d="M152,304h24a8,8,0,0,0,0-16H152a8,8,0,0,0,0,16Z"></path><path d="M216,288h-8a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Z"></path><path d="M400,272H304a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Z"></path><path d="M400,248H304a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Z"></path><path d="M328,296H304a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"></path><path d="M360,296h-8a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Z"></path><path d="M296,192v40a8,8,0,0,0,8,8h96a8,8,0,0,0,8-8V192a8,8,0,0,0-8-8H304A8,8,0,0,0,296,192Zm16,8h80v24H312Z"></path><path d="M176,456H120a8,8,0,0,0,0,16h56a8,8,0,0,0,0-16Z"></path><path d="M208,456h-8a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Z"></path></g></svg>
            <span>App de Vendas no Celular</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section3Ref)}>
        <svg fill="#7300cc" id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g id="email-marketing-business-dollar-currency"><path d="m492.896 201.832-92.896-73.832v-40h-.072c.019-2.111-.798-4.144-2.272-5.656l-64-64c-1.51-1.477-3.544-2.297-5.656-2.28v-.064h-208c-4.418 0-8 3.582-8 8v104l-92.896 73.832c-1.933 1.465-3.079 3.743-3.104 6.168v272c0 4.418 3.582 8 8 8h464c4.418 0 8-3.582 8-8v-272c-.025-2.425-1.171-4.703-3.104-6.168zm-92.896 14.168h63.32l-63.32 45.88zm65.048-16h-65.048v-51.6zm-129.048-156.688 36.688 36.688h-36.688zm-16-11.312v56c0 4.418 3.582 8 8 8h56v177.472l-12 8.712c-29.577-64.052-105.479-91.999-169.531-62.421-27.564 12.728-49.693 34.858-62.421 62.421l-12.048-8.712v-241.472zm-64 192c61.856 0 112 50.144 112 112s-50.144 112-112 112-112-50.144-112-112c.066-61.828 50.172-111.934 112-112zm-144 37.88-63.32-45.88h63.32zm0-61.88h-65.048l65.048-51.6zm-80 272v-248.328l101.928 73.856c-21.264 67.419 16.151 139.31 83.57 160.574s139.31-16.151 160.574-83.57c7.904-25.06 7.904-51.945 0-77.005l101.928-73.855v248.328z"></path><path d="m160 112h192v16h-192z"></path><path d="m160 144h192v16h-192z"></path><path d="m160 176h192v16h-192z"></path><path d="m272 384h-32c-8.837 0-16-7.163-16-16h-16c0 17.673 14.327 32 32 32h8v16h16v-16h8c17.673 0 32-14.327 32-32v-8c0-17.673-14.327-32-32-32h-32c-8.837 0-16-7.163-16-16v-8c0-8.837 7.163-16 16-16h32c8.837 0 16 7.163 16 16h16c0-17.673-14.327-32-32-32h-8v-16h-16v16h-8c-17.673 0-32 14.327-32 32v8c0 17.673 14.327 32 32 32h32c8.837 0 16 7.163 16 16v8c0 8.837-7.163 16-16 16z"></path><path d="m160 96h64c4.418 0 8-3.582 8-8v-32c0-4.418-3.582-8-8-8h-64c-4.418 0-8 3.582-8 8v32c0 4.418 3.582 8 8 8zm8-32h48v16h-48z"></path><path d="m248 48h56v16h-56z"></path><path d="m248 80h56v16h-56z"></path></g></svg>
            <span>Envio de Orçamentos por e-mail</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section4Ref)}>
          <svg fill="#7300cc" id="Capa_1" enable-background="new 0 0 512.013 512.013" height="512" viewBox="0 0 512.013 512.013" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m469.481 127.589h-5.19c-3.068-10.775-7.354-21.113-12.802-30.887l3.689-3.69c4.221-4.219 6.544-9.846 6.544-15.845s-2.323-11.625-6.547-15.849l-24.58-24.551c-4.221-4.247-9.855-6.585-15.865-6.585-6.009 0-11.644 2.338-15.844 6.564l-3.685 3.685c-9.781-5.465-20.123-9.759-30.891-12.826v-5.189c.001-12.36-10.054-22.416-22.415-22.416h-34.752c-12.36 0-22.416 10.056-22.416 22.416v5.189c-10.766 3.066-21.114 7.361-30.915 12.83l-3.668-3.668c-4.223-4.247-9.857-6.585-15.866-6.584-6.009 0-11.643 2.339-15.843 6.564l-24.575 24.576c-4.221 4.219-6.544 9.846-6.544 15.845s2.323 11.625 6.543 15.844l3.688 3.689c-5.471 9.804-9.759 20.144-12.81 30.888h-5.209c-12.36 0-22.416 10.056-22.416 22.416v34.782c0 12.36 10.056 22.416 22.416 22.416h5.209c3.051 10.743 7.339 21.083 12.81 30.888l-3.688 3.689c-4.221 4.219-6.544 9.846-6.544 15.845 0 5.998 2.323 11.625 6.543 15.844l24.556 24.556c4.221 4.247 9.854 6.585 15.863 6.585h.001c6.009 0 11.644-2.338 15.845-6.564l3.688-3.689c9.811 5.474 20.159 9.763 30.915 12.813v5.207c0 12.36 10.056 22.416 22.416 22.416h34.752c12.36 0 22.416-10.056 22.416-22.416v-5.207c10.759-3.051 21.099-7.338 30.891-12.809l3.664 3.664c4.221 4.247 9.855 6.585 15.864 6.585 6.01 0 11.645-2.339 15.841-6.56l24.608-24.581c4.22-4.22 6.543-9.847 6.543-15.845 0-5.999-2.323-11.625-6.543-15.844l-3.69-3.69c5.448-9.774 9.733-20.112 12.802-30.887h5.19c12.36 0 22.416-10.056 22.416-22.416v-34.782c.001-12.36-10.054-22.416-22.415-22.416zm-125.17 184.787c0 1.31-1.106 2.416-2.416 2.416h-34.752c-1.31 0-2.416-1.106-2.416-2.416v-12.983-63.043c0-4.182-2.602-7.922-6.522-9.376-26.872-9.966-44.926-35.828-44.926-64.354 0-22.607 11.257-43.799 30.107-56.684.846-.578 1.594-1.05 2.248-1.437-.036 1.3-.128 2.536-.177 3.181-.075 1.015-.135 1.816-.135 2.611v47.197c0 21.663 16.927 39.755 38.534 41.188.441.029.883.029 1.324 0 21.592-1.432 38.506-19.524 38.506-41.188v-47.197c0-.791-.059-1.587-.133-2.596-.048-.648-.14-1.891-.175-3.197.652.386 1.396.857 2.239 1.434 18.855 12.888 30.112 34.08 30.112 56.687 0 28.523-18.044 54.386-44.9 64.355-3.919 1.455-6.52 5.194-6.52 9.375v63.043 12.984zm127.586-127.589c0 1.287-1.129 2.416-2.416 2.416h-12.954c-4.672 0-8.722 3.235-9.753 7.792-3.167 13.993-8.652 27.225-16.303 39.328-2.498 3.952-1.924 9.108 1.382 12.414l9.185 9.185c.596.596.685 1.322.685 1.702 0 .379-.089 1.106-.682 1.698l-24.629 24.602c-.563.566-1.226.685-1.682.685-.455 0-1.117-.119-1.701-.707l-9.185-9.185c-3.311-3.31-8.472-3.88-12.424-1.376-8.536 5.409-17.622 9.701-27.109 12.873v-43.213c31.024-14.438 51.42-45.901 51.42-80.383 0-29.217-14.515-56.581-38.825-73.198-3.724-2.545-15.049-10.288-24.954-4.587-9.726 5.6-8.757 18.727-8.344 24.333.036.487.071.896.079 1.125v47.197c0 10.946-8.366 20.123-19.168 21.178-10.817-1.056-19.196-10.233-19.196-21.178l-.001-47.125c.009-.301.045-.71.081-1.199.417-5.603 1.394-18.723-8.324-24.326-9.901-5.711-21.243 2.035-24.974 4.582-24.312 16.618-38.826 43.982-38.826 73.199 0 34.487 20.407 65.952 51.448 80.386v43.21c-9.489-3.172-18.586-7.466-27.147-12.878-1.646-1.04-3.498-1.547-5.341-1.547-2.583 0-5.145.999-7.074 2.929l-9.204 9.205c-.563.567-1.226.686-1.682.686s-1.117-.119-1.701-.706l-24.576-24.577c-.597-.596-.686-1.323-.686-1.702 0-.38.089-1.106.686-1.703l9.184-9.185c3.306-3.306 3.88-8.462 1.382-12.414-7.69-12.167-13.174-25.393-16.299-39.311-1.024-4.565-5.078-7.81-9.757-7.81h-12.982c-1.287 0-2.416-1.129-2.416-2.416v-34.782c0-1.31 1.106-2.416 2.416-2.416h12.982c4.679 0 8.732-3.245 9.757-7.81 3.125-13.918 8.608-27.145 16.299-39.311 2.498-3.952 1.924-9.108-1.382-12.414l-9.185-9.185c-.596-.596-.685-1.322-.685-1.702s.089-1.106.686-1.703l24.597-24.598c.563-.566 1.225-.685 1.681-.685s1.118.119 1.702.706l9.184 9.185c3.308 3.307 8.464 3.88 12.415 1.382 12.151-7.682 25.392-13.177 39.351-16.33 4.56-1.03 7.797-5.081 7.797-9.754v-12.953c0-1.31 1.106-2.416 2.416-2.416h34.752c1.31 0 2.416 1.106 2.416 2.416v12.955c0 4.674 3.237 8.724 7.796 9.754 13.972 3.156 27.198 8.648 39.313 16.325 3.953 2.504 9.113 1.934 12.424-1.376l9.205-9.206c.563-.566 1.226-.685 1.681-.685.456 0 1.118.119 1.706.71l24.602 24.573c.596.596.685 1.322.685 1.702s-.089 1.106-.686 1.703l-9.184 9.185c-3.306 3.306-3.88 8.462-1.382 12.414 7.65 12.103 13.136 25.334 16.303 39.328 1.031 4.557 5.081 7.792 9.753 7.792h12.954c1.31 0 2.416 1.106 2.416 2.416v34.781z"></path><path d="m382.786 440.321c-3.905 3.905-3.905 10.237 0 14.143 1.953 1.952 4.512 2.929 7.071 2.929s5.118-.977 7.071-2.929l.028-.028c3.905-3.905 3.891-10.223-.015-14.128s-10.25-3.89-14.155.013z"></path><path d="m429.112 343.45-79.391 40.771c-6.73-6.97-16.16-11.318-26.591-11.318h-54.396c-3.046 0-3.79-.242-3.84-.259-.441-.232-1.835-1.542-2.954-2.594l-.496-.466c-44.008-41.427-81.183-38.802-123.458-22.118-6.84 2.7-6.972 2.706-13.841 2.999l-12.3.009c-3.504-10.571-13.476-18.221-25.207-18.221h-39.996c-14.627 0-26.526 11.913-26.526 26.555v104.969c0 14.626 11.899 26.526 26.526 26.526h39.996c11.73 0 21.701-7.641 25.206-18.199h22.5c1.987 0 1.987 0 4.298.651.84.237 1.862.525 3.182.88l103.494 27.688c4.562 1.232 8.746 2.445 12.793 3.617 13.26 3.842 24.406 7.072 36.023 7.072 13.13 0 26.859-4.126 44.916-16.16.087-.058.174-.118.26-.179l19.758-14.089c4.497-3.207 5.543-9.451 2.336-13.948-3.207-4.498-9.453-5.543-13.947-2.336l-19.627 13.995c-26.204 17.429-37.331 14.207-64.153 6.435-4.132-1.197-8.404-2.435-13.165-3.721l-103.502-27.689c-1.212-.326-2.163-.594-2.943-.814-3.776-1.064-5.188-1.4-9.722-1.4h-21.152v-81.624h10.807c.144 0 .286-.003.43-.009l.57-.024c8.383-.358 10.728-.587 20.33-4.378 37.129-14.652 65.789-16.393 102.419 18.09l.495.465c6.26 5.883 9.865 8.279 20.491 8.279h54.396c6.384 0 11.951 3.544 14.853 8.765.031.058.067.113.099.171 1.296 2.397 2.034 5.139 2.034 8.051 0 9.351-7.619 16.958-16.985 16.958h-88.157c-5.522 0-10 4.477-10 10s4.478 10 10 10h88.157c20.394 0 36.985-16.579 36.985-36.958 0-2.77-.316-5.466-.896-8.063l79.028-40.585c7.48-3.84 17.708-3.428 22.786 4.812 4.492 7.263 2.021 16.917-5.744 22.453l-34.667 24.69c-4.499 3.204-5.549 9.448-2.345 13.947 1.951 2.739 5.029 4.2 8.154 4.2 2.007 0 4.033-.603 5.792-1.855l34.671-24.693c16.466-11.739 21.258-32.917 11.156-49.248-9.934-16.122-30.972-21.324-48.94-12.1zm-335.92 120.327c0 3.538-3.001 6.526-6.554 6.526h-39.996c-3.538 0-6.526-2.989-6.526-6.526v-104.968c0-3.614 2.928-6.555 6.526-6.555h39.996c3.553 0 6.554 3.001 6.554 6.555z"></path></g></svg>
            <span>Atributos Personalizados</span>
        </div>
        <div className="card" onClick={() => handleScrollToSection(section5Ref)}>
          <svg fill="#7300cc" id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m255.107 65.06c5.562 0 10.071-4.509 10.071-10.071v-44.918c0-5.562-4.509-10.071-10.071-10.071s-10.071 4.509-10.071 10.071v44.918c.001 5.562 4.51 10.071 10.071 10.071z"></path><path d="m501.28 345.985-17.791-17.741c-6.329-6.321-14.764-9.803-23.752-9.803-5.747 0-11.264 1.43-16.153 4.109l-33.526-33.486 1.633-1.631c13.601-13.628 13.596-35.773-.001-49.355-4.859-4.868-10.922-8.114-17.531-9.48.91-3.141 1.389-6.431 1.389-9.798 0-9.355-3.634-18.127-10.212-24.678-4.86-4.868-10.922-8.114-17.531-9.48.91-3.141 1.389-6.43 1.389-9.798 0-9.356-3.634-18.127-10.223-24.688-4.976-4.97-11.093-8.116-17.516-9.455 3.436-11.847.5-25.176-8.82-34.512-7.758-7.725-18.285-11.045-28.43-9.969l-66.435-12.575c-10.132-1.922-22.785-3.193-30.772 4.092-.504.46-1.018.989-1.524 1.578-12.384-4.514-26.828-1.826-36.745 8.08-6.579 6.571-10.203 15.339-10.203 24.689 0 3.368.477 6.657 1.386 9.799-6.602 1.365-12.657 4.607-17.5 9.459-6.592 6.565-10.227 15.323-10.234 24.662-.003 3.376.476 6.676 1.39 9.826-6.605 1.362-12.664 4.598-17.522 9.45-6.592 6.585-10.222 15.358-10.222 24.703 0 7.158 2.137 13.977 6.097 19.737-5 1.695-9.58 4.516-13.415 8.347-13.61 13.593-13.615 35.739.009 49.387l1.627 1.62-33.53 33.469c-12.461-5.867-27.814-3.669-38.097 6.601l-17.802 17.752c-6.332 6.324-9.818 14.76-9.819 23.753 0 8.994 3.487 17.431 9.819 23.756l22.217 22.19c3.935 3.931 10.312 3.927 14.242-.008 3.931-3.935 3.927-10.312-.008-14.242l-22.217-22.19c-2.522-2.519-3.911-5.895-3.911-9.505 0-3.609 1.389-6.984 3.905-9.497l17.803-17.753c4.448-4.443 11.256-5.105 16.426-2.014.364.547.785 1.067 1.267 1.55.863.865 1.848 1.528 2.894 2.013l102.093 101.943c.485 1.057 1.151 2.052 2.02 2.922.846.847 1.811 1.502 2.835 1.984 2.159 2.441 3.352 5.559 3.352 8.885 0 3.61-1.389 6.985-3.911 9.504l-17.785 17.764c-5.255 5.232-13.803 5.231-19.042.016l-22.217-22.219c-3.933-3.933-10.309-3.933-14.242 0s-3.933 10.309 0 14.242l22.233 22.235c6.544 6.517 15.138 9.774 23.736 9.774 8.6 0 17.204-3.262 23.756-9.785l17.796-17.775c6.332-6.325 9.819-14.761 9.819-23.756 0-6.419-1.785-12.549-5.104-17.835l37.736-37.69c.04-.041.08-.082.121-.123 4.321-4.467 16.354-3.631 27.991-2.823 8.268.575 17.486 1.214 26.492.176l41.324 41.275c-2.677 4.881-4.106 10.391-4.106 16.129 0 8.985 3.487 17.416 9.819 23.741l17.797 17.775c6.328 6.321 14.763 9.803 23.751 9.803 8.987 0 17.422-3.481 23.751-9.803l107.941-107.81c6.332-6.324 9.819-14.76 9.819-23.754-.001-8.993-3.488-17.429-9.826-23.759zm-267.26-242.55 43.687 8.269-26.149 26.139c-4.045-1.944-9.589-5.57-15.671-11.388-8.325-7.964-14.28-17.159-14.822-22.894-.001-.003-.001-.006-.001-.009 0-.001-.001-.002-.001-.003-.039-.412-.049-.741-.044-.992 1.317-.32 4.815-.675 13.001.878zm-51.058 8.211c5.102-5.097 13.028-5.685 18.793-1.781 3.267 13.698 14.952 26.113 20.209 31.143 3.896 3.728 16.397 14.905 29.015 17.977 1.707 2.447 2.636 5.364 2.636 8.442 0 3.965-1.525 7.672-4.304 10.448-2.771 2.776-6.484 4.304-10.456 4.304-3.973 0-7.686-1.528-10.47-4.317l-.001-.001-.005-.005-45.418-45.336c-2.769-2.765-4.294-6.472-4.294-10.436.001-3.965 1.526-7.672 4.295-10.438zm-26.316 43.947c2.771-2.775 6.48-4.304 10.446-4.304 3.971 0 7.692 1.532 10.481 4.318l36.572 36.499c5.759 5.768 5.759 15.154.02 20.902-2.786 2.775-6.512 4.303-10.491 4.303s-7.705-1.528-10.479-4.291l-.001-.001-27.745-27.739c-.043-.043-.09-.083-.134-.127l-8.68-8.676c-2.785-2.782-4.318-6.496-4.315-10.458.004-3.949 1.532-7.644 4.326-10.426zm-26.366 43.938c2.773-2.769 6.49-4.294 10.468-4.294 3.945 0 7.63 1.503 10.391 4.224l27.83 27.817c2.775 2.764 4.304 6.467 4.304 10.427 0 3.959-1.529 7.662-4.315 10.437-2.772 2.768-6.485 4.293-10.456 4.293-3.977 0-7.702-1.529-10.478-4.293l-10.089-10.077c-.002-.003-.005-.005-.007-.007l-17.647-17.626c-2.782-2.779-4.314-6.491-4.314-10.451 0-3.959 1.532-7.672 4.313-10.45zm-17.54 52.786c2.785-2.782 6.507-4.314 10.48-4.314 3.972 0 7.693 1.531 10.477 4.311l10.103 10.091c2.776 2.764 4.304 6.467 4.304 10.427s-1.529 7.662-4.325 10.448c-2.771 2.775-6.484 4.304-10.456 4.304-3.973 0-7.686-1.528-10.477-4.324l-1.265-1.26c-.017-.017-.03-.035-.046-.051-.019-.018-.039-.034-.058-.052l-8.727-8.693c-5.759-5.771-5.764-15.14-.01-20.887zm205.234 114.458c-3.931-3.936-10.308-3.939-14.242-.009l-8.96 8.949c-8.514 8.514-23.941 7.442-38.86 6.407-16.201-1.126-32.954-2.288-43.795 8.842l-37.095 37.05-92.763-92.627 32.828-32.769c5.426 3.326 11.687 5.109 18.238 5.109 9.359 0 18.135-3.628 24.69-10.195 6.599-6.572 10.234-15.343 10.234-24.699 0-.087-.006-.173-.006-.26.087.001.174.006.261.006 9.346 0 18.115-3.617 24.679-10.173 6.599-6.572 10.234-15.344 10.234-24.699 0-.087-.006-.173-.006-.26.088 0 .176.006.265.006 9.343 0 18.117-3.613 24.725-10.194 6.86-6.871 10.253-15.917 10.188-24.944.09.001.18.006.27.006 9.359-.001 18.134-3.628 24.699-10.205 6.579-6.571 10.203-15.339 10.203-24.689 0-6.539-1.778-12.79-5.093-18.205l28.773-28.761c2.144-2.135 4.788-3.475 7.559-4.028.3-.032.596-.08.889-.138 4.446-.613 9.115.759 12.515 4.145 5.759 5.769 5.759 15.155.021 20.903l-8.763 8.727c-.029.029-.06.055-.089.084l-10.093 10.076c-3.936 3.93-3.94 10.307-.009 14.242 3.932 3.936 10.308 3.939 14.242.009l8.798-8.786c.002-.002.004-.004.006-.006l1.33-1.325c5.775-5.722 15.131-5.71 20.9.051 2.776 2.764 4.305 6.467 4.305 10.427 0 3.959-1.529 7.662-4.327 10.448l-8.813 8.831c-.001.001-.002.002-.003.004l-10.092 10.051c-3.941 3.925-3.954 10.302-.029 14.242 3.925 3.941 10.301 3.953 14.242.029l10.138-10.097c2.771-2.776 6.484-4.304 10.456-4.304 3.973 0 7.687 1.528 10.478 4.324 2.776 2.765 4.304 6.468 4.304 10.428 0 3.959-1.528 7.662-4.32 10.442l-17.57 17.577c-3.932 3.934-3.931 10.31.002 14.242 1.967 1.966 4.543 2.948 7.12 2.948 2.578 0 5.156-.984 7.122-2.951l8.611-8.614c.049-.047.102-.088.151-.137 2.771-2.776 6.484-4.304 10.456-4.304 3.973 0 7.686 1.528 10.467 4.314 5.753 5.747 5.748 15.117 0 20.875l-8.755 8.745c-.003.003-.007.006-.01.009s-.006.007-.009.01l-13.896 13.879c-3.935 3.931-3.939 10.308-.009 14.243 1.967 1.969 4.547 2.954 7.126 2.954 2.575 0 5.151-.982 7.117-2.945l6.797-6.789 32.577 32.539-92.755 92.642-33.234-33.194c2.317-1.49 4.534-3.242 6.615-5.323l8.955-8.944c3.937-3.929 3.941-10.306.01-14.241zm169.078 12.472-107.941 107.81c-2.525 2.522-5.905 3.911-9.517 3.911s-6.992-1.389-9.518-3.912l-17.797-17.775c-2.522-2.518-3.911-5.888-3.911-9.489 0-3.6 1.389-6.97 3.911-9.489l107.941-107.81c2.526-2.523 5.905-3.912 9.518-3.912 3.612 0 6.992 1.389 9.524 3.918l17.791 17.741c2.522 2.519 3.911 5.893 3.911 9.503-.001 3.611-1.39 6.986-3.912 9.504z"></path><path d="m121.378 56.57c1.966 1.962 4.54 2.942 7.114 2.942 2.58 0 5.161-.986 7.128-2.957 3.929-3.937 3.923-10.313-.014-14.242l-36.698-36.625c-3.936-3.929-10.313-3.924-14.242.014-3.929 3.937-3.923 10.313.014 14.242z"></path><path d="m381.722 59.512c2.575 0 5.151-.982 7.117-2.945l36.67-36.626c3.935-3.93 3.939-10.307.008-14.242-3.93-3.935-10.306-3.939-14.242-.008l-36.67 36.626c-3.935 3.93-3.939 10.307-.008 14.242 1.967 1.969 4.546 2.953 7.125 2.953z"></path><path d="m62.819 433.204c-3.899 3.966-3.845 10.343.122 14.242l.029.028c1.957 1.924 4.498 2.882 7.038 2.882 2.607 0 5.214-1.009 7.189-3.018 3.899-3.966 3.83-10.357-.136-14.256-3.965-3.899-10.341-3.844-14.242.122z"></path><path d="m342.606 352.267c1.532 0 3.086-.349 4.545-1.084 4.966-2.505 6.961-8.561 4.457-13.527-2.505-4.966-8.562-6.962-13.527-4.457l-.056.028c-4.966 2.505-6.933 8.547-4.429 13.513 1.768 3.508 5.324 5.527 9.01 5.527z"></path></svg>
            <span>Segurança</span>
        </div>
        <div className="card" onClick={() => handleScrollToSection(section6Ref)}>
          <svg fill="#7300cc" id="Layer_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m98.101 346.335h-11.301c-18.518 0-36.231-7.476-49.879-21.051-13.614-13.541-21.389-31.31-21.894-50.034-.004-.148-.012-.295-.024-.441.304-35.996 26.116-66.886 61.6-73.584 2.04-.386 3.829-1.599 4.941-3.352s1.448-3.889.928-5.898c-2.916-11.263-4.225-22.938-3.888-34.703.568-19.858 6.035-39.497 15.809-56.793 2.038-3.605.767-8.182-2.84-10.219-3.607-2.039-8.182-.768-10.219 2.84-10.97 19.412-17.105 41.454-17.744 63.742-.303 10.594.586 21.128 2.646 31.413-38.812 10.827-66.236 46.335-66.236 87.198 0 .308.019.61.055.908.783 22.331 10.102 43.459 26.288 59.559 16.478 16.39 37.948 25.416 60.457 25.416h11.301c4.143 0 7.5-3.357 7.5-7.5s-3.358-7.501-7.5-7.501z"></path><path d="m447.254 188.677c.806-5.089 1.213-10.223 1.213-15.333 0-54.151-44.055-98.206-98.206-98.206-11.919 0-23.517 2.11-34.563 6.28-25.79-36.85-67.445-58.832-112.657-59.121-.292-.002-.577-.003-.869-.003-37.979 0-74.741 15.948-100.974 43.835-2.838 3.017-2.693 7.764.324 10.602s7.764 2.694 10.602-.324c23.409-24.885 56.187-39.112 90.046-39.112.257 0 .519.001.775.003 42.204.27 80.934 21.738 103.603 57.429 2.004 3.153 6.022 4.35 9.426 2.811 10.835-4.909 22.371-7.398 34.287-7.398 45.88 0 83.206 37.326 83.206 83.206 0 6.388-.752 12.823-2.235 19.127-.462 1.965-.113 4.034.97 5.738 1.082 1.704 2.806 2.9 4.78 3.317 34.739 7.341 59.963 38.374 60.019 73.812-.597 18.65-8.408 36.367-22.004 49.902-13.665 13.604-31.349 21.095-49.793 21.095h-10.637c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h10.637c22.438 0 43.88-9.043 60.375-25.464 16.351-16.277 25.733-37.653 26.418-60.191.003-.075.004-.151.004-.228-.001-40.053-26.823-75.432-64.747-86.777z"></path><path d="m256 217.965c-28.361 0-55.534 8.65-78.582 25.018-22.539 16.004-39.475 38.121-48.976 63.957-1.43 3.888.563 8.198 4.45 9.628 3.893 1.435 8.199-.563 9.628-4.45 17.41-47.344 63.014-79.152 113.479-79.152 66.648 0 120.87 54.222 120.87 120.87 0 22.52-6.232 44.49-18.024 63.535-2.181 3.521-1.093 8.145 2.429 10.325 1.229.761 2.594 1.124 3.941 1.124 2.511 0 4.965-1.261 6.384-3.553 13.261-21.419 20.271-46.12 20.271-71.432 0-74.918-60.951-135.87-135.87-135.87z"></path><path d="m339.894 440.851c-22.639 21.831-52.433 33.854-83.894 33.854-66.648 0-120.87-54.222-120.87-120.87 0-3.919.188-7.867.562-11.735.396-4.123-2.624-7.787-6.747-8.185-4.129-.405-7.787 2.623-8.185 6.747-.418 4.345-.63 8.776-.63 13.173 0 74.919 60.951 135.87 135.87 135.87 35.365 0 68.856-13.516 94.306-38.058 2.981-2.875 3.068-7.623.192-10.604-2.876-2.983-7.624-3.067-10.604-.192z"></path><path d="m210.531 301.027c-4.143 0-7.5 3.357-7.5 7.5v72.511l-19.995-19.994c-2.928-2.928-7.677-2.929-10.606.001-2.929 2.929-2.929 7.677 0 10.606l32.799 32.797c1.464 1.464 3.384 2.196 5.303 2.196s3.839-.732 5.304-2.196l32.797-32.797c2.929-2.93 2.929-7.678 0-10.607-2.93-2.928-7.678-2.928-10.607 0l-19.993 19.994v-72.51c-.002-4.144-3.359-7.501-7.502-7.501z"></path><path d="m301.469 406.644c4.143 0 7.5-3.357 7.5-7.5v-72.51l19.994 19.995c1.465 1.464 3.385 2.196 5.304 2.196s3.839-.732 5.304-2.196c2.929-2.93 2.929-7.678 0-10.607l-32.798-32.798c-1.407-1.406-3.314-2.196-5.304-2.196s-3.896.79-5.304 2.197l-32.797 32.797c-2.929 2.93-2.929 7.678 0 10.607 2.93 2.928 7.678 2.929 10.607-.001l19.993-19.994v72.51c.001 4.143 3.358 7.5 7.501 7.5z"></path></g></svg>
            <span>Importação de Dados</span>
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
       <img src={Image2} alt="" className="especial"/>
       </div>

       <div className="right">
        <span>
        Usuários e Permissões
        </span>

        <p>
    Com o módulo <strong>Usuários e Permissões</strong> da BLUE ERP, você cadastra usuários para acessar a base de dados da empresa de maneira segura e <strong>rastreável</strong>.
    <br />
    Cada colaborador possui credenciais próprias, e você pode personalizar as <strong>permissões</strong> individualmente, definindo quais ferramentas podem ser consultadas e editadas.
</p>


        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

      </S.Main2>

      <S.Main2 ref={section2Ref}>
       <div className="left">
        <span>
         Aplicativo para Vendas no Celular
        </span>

        <p>
    Com o <strong>BLUE Mobi</strong>, você e sua equipe de vendas têm em mãos uma solução completa e intuitiva para realizar vendas diretamente pelo smartphone. O aplicativo possibilita buscas de produtos por <strong>código de barras</strong>, cadastros rápidos, geração de pedidos e orçamentos, e acompanhamento de múltiplos estoques. Além disso, você pode emitir e enviar cupons fiscais por e-mail e contar com um PDV móvel, ideal para vendas em qualquer local. 
    <br /><br />
    Totalmente sincronizado com o BLUE ERP, o BLUE Mobi atualiza suas transações instantaneamente, garantindo que todos os registros estejam sempre em dia, mesmo longe do computador.
</p>


        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
          <img src={Image3} alt="" />
       </div>

      </S.Main2>

      <S.Main2 ref={section3Ref}>
       <div className="left">
       <img src={Image4} alt="" />
       </div>

       <div className="right">
       
        <span>
        Aprovação de Orçamentos por E-mail
        </span>

        <p>
    Com o <strong>BLUE ERP</strong>, a aprovação de orçamentos fica prática e ágil. Envie orçamentos diretamente por e-mail para seus clientes, permitindo que eles analisem e aprovem os detalhes de qualquer lugar, de forma <strong>rápida e segura</strong>. Esse recurso elimina a burocracia e facilita a comunicação, tornando o processo mais dinâmico e eficaz. 
    <br /><br />
    Seu cliente pode aprovar o orçamento com apenas alguns cliques, mantendo o foco na eficiência e garantindo que a distância não seja um obstáculo para fechar negócios.
</p>


        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

      </S.Main2>

      <S.Main2 ref={section7Ref}>
       <div className="left">
        <span>
        Envio de Documentos por e-mail
        </span>

        <p>
    Com a <strong>BLUE ERP</strong>, o envio de documentos por e-mail é prático e flexível. Você pode enviar contratos, notas fiscais para seus clientes, e também compartilhar documentos com fornecedores. Personalize o assunto e o corpo do e-mail para garantir uma comunicação alinhada ao <strong>tom da sua empresa</strong>.
    Após cadastrar um orçamento ou uma ordem de compra, basta um clique para que o documento chegue ao destinatário.
    <br /><br />
    Além disso, você tem a liberdade de personalizar o próprio documento anexado, tornando o processo ainda mais eficiente e adaptado às necessidades da sua empresa.
</p>


        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
          <div className="Especial">
           <img src={Image5} alt="" />
          </div>
       </div>

  
      </S.Main2>

      <S.Main2 ref={section4Ref}>
       <div className="left">
       <img src={Image4} alt="" />
       </div>

       <div className="right">
       
        <span>
        Atributos Personalizados
        </span>

        <p>
    Com a <strong>BLUE ERP</strong>, você pode criar atributos personalizados para atender às especificidades do seu negócio.
    Amplie as possibilidades de cadastro de produtos e vendas com campos próprios e exclusivos, sem ficar limitado aos campos padrão. Tenha total autonomia para adicionar novos campos conforme a necessidade e utilize <strong>filtros</strong> para encontrar informações rapidamente, facilitando a gestão e organização dos dados.
    Essa personalização garante que o sistema se ajuste às suas operações, trazendo mais eficiência ao seu dia a dia.
</p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

      </S.Main2>

      <S.Main2 ref={section5Ref}>
       <div className="left">
        <span>
        Segurança
        </span>

        <p>
    A proteção das informações da sua empresa é nossa prioridade! A <strong>BLUE ERP</strong> utiliza <strong>criptografia de nível bancário</strong> para assegurar que todas as transações no seu ERP sejam realizadas com total segurança. Com servidores hospedados na <strong>Amazon</strong> — líder global em serviços de nuvem — você conta com uma infraestrutura robusta e confiável. Além disso, temos um plano de contingência, garantindo que o sistema esteja sempre disponível, mesmo em situações inesperadas, para que você nunca perca uma venda ou enfrente interrupções indesejadas.
</p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
          <div className="Especial">
           <img src={Image5} alt="" />
          </div>
       </div>

  
      </S.Main2>

      <S.Main2 ref={section6Ref}>
       <div className="left">
       <img src={Image4} alt="" />
       </div>

       <div className="right">
       
        <span>
        Importação de Dados
        </span>

        <p>
    Ao migrar para um novo sistema de gestão, a transferência dos cadastros existentes é uma preocupação comum. Para facilitar esse processo, a <strong>BLUE ERP</strong> oferece <strong>planilhas em Excel</strong> que permitem a importação de todos os seus dados anteriores de forma rápida e eficiente. Dependendo do plano contratado, você também pode solicitar a ajuda da nossa equipe de <strong>Implantação</strong> para realizar a importação dos dados do seu antigo ERP, garantindo que todos os seus cadastros sejam corretamente configurados na nova plataforma sem complicações.
</p>


        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

      </S.Main2>

      <S.Main3 >
        <span><strong>Funcionalidades exclusivas </strong> para clientes da BLUE ERP</span>

        <div className="cards">
         <div className="card">
          <span>Backup</span>
          <p>
    Uma das grandes vantagens da <strong>BLUE ERP</strong> é a realização de <strong>backups diários</strong>, garantindo a segurança dos dados da sua empresa com cópias de segurança a cada 24 horas. Se necessário, o usuário pode solicitar a <strong>restauração</strong> desses dados, assegurando que as informações estejam sempre protegidas e disponíveis.
</p>

         </div>

         <div className="card">
          <span>BLUE no Excel</span>
          <p>
    Se você precisa analisar informações em planilhas, a <strong>BLUE ERP</strong> facilita esse processo ao permitir que você verifique todos os dados da sua empresa diretamente no <strong>Microsoft Excel</strong>. Essa funcionalidade é ativada com a instalação de um suplemento que sincroniza a <strong>BLUE ERP</strong> com o Excel. Com isso, você pode criar novos relatórios, gerar gráficos e tabelas dinâmicas, tornando o acompanhamento de todos os setores do seu negócio mais fácil e eficiente.
</p>

         </div>

         <div className="card">
          <span>Integração com Google</span>
          <p>
    A <strong>BLUE ERP</strong> também permite a integração com o <strong>Google</strong>, possibilitando o compartilhamento de calendários de tarefas e arquivos diretamente com o <strong>Google Drive</strong>. Ao fazer login na BLUE ERP usando uma conta Google, os dados armazenados serão automaticamente compartilhados no Drive, permitindo um aproveitamento multifuncional das informações e facilitando a colaboração entre sua equipe.
</p>

         </div>
        </div>
      </S.Main3>

      <Footer/>
     </S.Container>
    )
}