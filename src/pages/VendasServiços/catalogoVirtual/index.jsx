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

export function CatalogoVirtual(){
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
        Otimize Suas Vendas com a Criação de <br />
        um <strong> Catálogo Virtual</strong>
        </h2>

        <p>
        Permita que seus clientes acessem seus produtos e escolham o que desejam, onde e quando quiserem, proporcionando comodidade ao seu público, mesmo à distância.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
        <img src={Image1} alt="Image" />
       </div>
       </div>

       <div className="Bottom">
        <div className="card" onClick={() => handleScrollToSection(section1Ref)}>
        <svg fill="#7300cc" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><g id="plan"><path d="m45 27.586-1.293-1.293-1.414 1.414 2 2a1 1 0 0 0 1.414 0l4-4-1.414-1.414z"></path><path d="m45 35.586-1.293-1.293-1.414 1.414 2 2a1 1 0 0 0 1.414 0l4-4-1.414-1.414z"></path><path d="m45 44.586-1.293-1.293-1.414 1.414 2 2a1 1 0 0 0 1.414 0l4-4-1.414-1.414z"></path><path d="m57 21h-7v-10a3.009 3.009 0 0 0 -3-3h-10v-1a3.009 3.009 0 0 0 -3-3h-2v-1a1 1 0 0 0 -1-1h-8a1 1 0 0 0 -1 1v1h-2a3.009 3.009 0 0 0 -3 3v1h-10a3.009 3.009 0 0 0 -3 3v48a3.009 3.009 0 0 0 3 3h40a3.009 3.009 0 0 0 3-3v-8h7a3.009 3.009 0 0 0 3-3v-24a3.009 3.009 0 0 0 -3-3zm-25-15h2a1 1 0 0 1 1 1v1h-3zm0 4h15a1 1 0 0 1 1 1v10h-1v-9a1 1 0 0 0 -1-1h-14zm-8-6h6v8a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1-1zm-1.82 9a3.01 3.01 0 0 0 2.82 2h4a3.01 3.01 0 0 0 2.82-2h13.18v8h-4a3.009 3.009 0 0 0 -3 3v24a3.009 3.009 0 0 0 3 3h4v6h-36v-44zm-3.18-6a1 1 0 0 1 1-1h2v2h-3zm29 52a1 1 0 0 1 -1 1h-40a1 1 0 0 1 -1-1v-48a1 1 0 0 1 1-1h15v1h-14a1 1 0 0 0 -1 1v46a1 1 0 0 0 1 1h38a1 1 0 0 0 1-1v-7h1zm10-11a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1-1v-24a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1z"></path><path d="m50 27h6v2h-6z"></path><path d="m50 35h6v2h-6z"></path><path d="m50 44h6v2h-6z"></path><path d="m26 23h6a1 1 0 0 0 1-1v-1h3v-2h-3v-1a1 1 0 0 0 -1-1h-6a1 1 0 0 0 -1 1v1h-6v-1a1 1 0 0 0 -1-1h-6a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h2v4h-2a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h2v4h-2a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h2v4h-2a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1h6v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1h3v-2h-3v-1a1 1 0 0 0 -1-1h-6a1 1 0 0 0 -1 1v1h-6v-1a1 1 0 0 0 -1-1h-2v-4h2a1 1 0 0 0 1-1v-4a1 1 0 0 0 -1-1h-2v-4h2a1 1 0 0 0 1-1v-1h6v1a1 1 0 0 0 1 1h2v4h-2a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1h3v-2h-3v-1a1 1 0 0 0 -1-1h-2v-4h2a1 1 0 0 0 1-1v-1h3v-2h-3v-1a1 1 0 0 0 -1-1h-6a1 1 0 0 0 -1 1v1h-6v-1a1 1 0 0 0 -1-1h-2v-4h2a1 1 0 0 0 1-1v-1h6v1a1 1 0 0 0 1 1zm1-4h4v2h-4zm0 30h4v2h-4zm4-10v2h-4v-2zm-4-10h4v2h-4zm-10 20v2h-4v-2zm0-10v2h-4v-2zm0-10v2h-4v-2zm0-8h-4v-2h4z"></path></g></svg>
            <span>Tabela de preço</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section2Ref)}>
          <svg fill="#7300cc" id="Outline" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m56 432v-336h400v208h16v-256a32.036 32.036 0 0 0 -32-32h-368a32.036 32.036 0 0 0 -32 32v384a32.036 32.036 0 0 0 32 32h264v-16h-264a16.019 16.019 0 0 1 -16-16zm0-384a16.019 16.019 0 0 1 16-16h368a16.019 16.019 0 0 1 16 16v32h-400z"></path><path d="m72 48h16v16h-16z"></path><path d="m104 48h16v16h-16z"></path><path d="m136 48h16v16h-16z"></path><path d="m80 360h136v16h-136z"></path><path d="m80 392h136v16h-136z"></path><path d="m80 328h136v16h-136z"></path><path d="m128 296h88v16h-88z"></path><path d="m96 296h16v16h-16z"></path><path d="m335.761 185.94 8-32a8 8 0 0 0 -4.61-9.294l-56-24a8 8 0 0 0 -8.808 1.7l-18.343 18.341-18.343-18.344a8 8 0 0 0 -8.808-1.7l-56 24a8 8 0 0 0 -4.61 9.294l8 32a8 8 0 0 0 9.7 5.821l22.061-5.512v69.754a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-69.754l22.06 5.515a8 8 0 0 0 9.701-5.821zm-37.821-17.7a8 8 0 0 0 -9.94 7.76v72h-64v-72a8 8 0 0 0 -9.94-7.761l-24.239 6.06-4.408-17.63 44.76-19.183 20.17 20.171a8 8 0 0 0 11.314 0l20.17-20.171 44.76 19.183-4.408 17.63z"></path><path d="m106.343 194.343-24 24a8 8 0 0 0 0 11.314l24 24 11.314-11.314-18.344-18.343 18.344-18.343z"></path><path d="m365.657 253.657 24-24a8 8 0 0 0 0-11.314l-24-24-11.314 11.314 18.344 18.343-18.344 18.343z"></path><path d="m405.657 253.657 24-24a8 8 0 0 0 0-11.314l-24-24-11.314 11.314 18.344 18.343-18.344 18.343z"></path><path d="m146.343 194.343-24 24a8 8 0 0 0 0 11.314l24 24 11.314-11.314-18.344-18.343 18.344-18.343z"></path><path d="m482.06 401.255a47.6 47.6 0 0 0 -33.66-81.255h-32.4v-32a24 24 0 0 0 -48 0v60.826a24.972 24.972 0 0 0 -33.656 36.833l33.656 33.654v12.687h-8a8 8 0 0 0 -8 8v72h16v-64h96v64h16v-72a8 8 0 0 0 -8-8h-8v-12.687zm-31.717 9.088a8 8 0 0 0 -2.343 5.657v16h-64v-16a8 8 0 0 0 -2.344-5.657l-36-36a8.971 8.971 0 1 1 12.687-12.688l12 12a8 8 0 0 0 13.657-5.655v-80a8 8 0 0 1 16 0v40a8 8 0 0 0 8 8h40.4a31.6 31.6 0 0 1 22.343 53.94z"></path><path d="m432 464h16v16h-16z"></path><path d="m424 112h16v16h-16z"></path><path d="m392 112h16v16h-16z"></path><path d="m80 480h184v16h-184z"></path><path d="m280 480h16v16h-16z"></path><path d="m240 296a8 8 0 0 0 -8 8v96a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-96a8 8 0 0 0 -8-8zm56 96h-48v-80h48z"></path></svg>
            <span>Imagem e descrição de produtos</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section3Ref)}>
        <svg fill="#7300cc" id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g id="email-marketing-business-dollar-currency"><path d="m492.896 201.832-92.896-73.832v-40h-.072c.019-2.111-.798-4.144-2.272-5.656l-64-64c-1.51-1.477-3.544-2.297-5.656-2.28v-.064h-208c-4.418 0-8 3.582-8 8v104l-92.896 73.832c-1.933 1.465-3.079 3.743-3.104 6.168v272c0 4.418 3.582 8 8 8h464c4.418 0 8-3.582 8-8v-272c-.025-2.425-1.171-4.703-3.104-6.168zm-92.896 14.168h63.32l-63.32 45.88zm65.048-16h-65.048v-51.6zm-129.048-156.688 36.688 36.688h-36.688zm-16-11.312v56c0 4.418 3.582 8 8 8h56v177.472l-12 8.712c-29.577-64.052-105.479-91.999-169.531-62.421-27.564 12.728-49.693 34.858-62.421 62.421l-12.048-8.712v-241.472zm-64 192c61.856 0 112 50.144 112 112s-50.144 112-112 112-112-50.144-112-112c.066-61.828 50.172-111.934 112-112zm-144 37.88-63.32-45.88h63.32zm0-61.88h-65.048l65.048-51.6zm-80 272v-248.328l101.928 73.856c-21.264 67.419 16.151 139.31 83.57 160.574s139.31-16.151 160.574-83.57c7.904-25.06 7.904-51.945 0-77.005l101.928-73.855v248.328z"></path><path d="m160 112h192v16h-192z"></path><path d="m160 144h192v16h-192z"></path><path d="m160 176h192v16h-192z"></path><path d="m272 384h-32c-8.837 0-16-7.163-16-16h-16c0 17.673 14.327 32 32 32h8v16h16v-16h8c17.673 0 32-14.327 32-32v-8c0-17.673-14.327-32-32-32h-32c-8.837 0-16-7.163-16-16v-8c0-8.837 7.163-16 16-16h32c8.837 0 16 7.163 16 16h16c0-17.673-14.327-32-32-32h-8v-16h-16v16h-8c-17.673 0-32 14.327-32 32v8c0 17.673 14.327 32 32 32h32c8.837 0 16 7.163 16 16v8c0 8.837-7.163 16-16 16z"></path><path d="m160 96h64c4.418 0 8-3.582 8-8v-32c0-4.418-3.582-8-8-8h-64c-4.418 0-8 3.582-8 8v32c0 4.418 3.582 8 8 8zm8-32h48v16h-48z"></path><path d="m248 48h56v16h-56z"></path><path d="m248 80h56v16h-56z"></path></g></svg>            <span>Envio do catálogo por e-mail</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section4Ref)}>
        <svg fill="#7300cc" id="Layer_35" enable-background="new 0 0 64 64" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m35 47h2v2h-2z"></path><path d="m31 47h2v2h-2z"></path><path d="m27 47h2v2h-2z"></path><path d="m52 1c-5.728 0-10.442 4.402-10.949 10h-35.051c-2.757 0-5 2.243-5 5v32c0 2.757 2.243 5 5 5h16.613l-1.333 4h-.28c-2.206 0-4 1.794-4 4 0 1.103.897 2 2 2h26c1.103 0 2-.897 2-2 0-2.206-1.794-4-4-4h-.28l-1.333-4h16.613c2.757 0 5-2.243 5-5v-36c0-6.065-4.935-11-11-11zm0 2c4.963 0 9 4.038 9 9s-4.037 9-9 9-9-4.038-9-9 4.037-9 9-9zm-6.999 58h-26.001c0-1.103.897-2 2-2h22c1.103 0 2 .897 2.001 2zm-4.388-4h-17.226l1.333-4h14.56zm17.387-6h-52c-1.654 0-3-1.346-3-3v-1h21.414l2-2h11.172l2 2h21.414v1c0 1.654-1.346 3-3 3zm3-6h-20.586l-2-2h-12.828l-2 2h-20.586v-29c0-1.654 1.346-3 3-3h35.051c.507 5.598 5.221 10 10.949 10 3.72 0 7.008-1.861 9-4.695z"></path><path d="m47.707 13.293-1.414 1.414 3.707 3.707 8.707-8.707-1.414-1.414-7.293 7.293z"></path><path d="m52 7v-2c-3.859 0-7 3.14-7 7h2c0-2.757 2.243-5 5-5z"></path><path d="m27.604 20.605c-.472-2.123-2.321-3.605-4.496-3.605h-8.217c-2.175 0-4.023 1.482-4.495 3.605l-3.286 14.79c-.073.326-.11.663-.11 1 0 2.54 2.065 4.605 4.604 4.605h14.791c2.54 0 4.605-2.065 4.605-4.604 0-.338-.037-.675-.109-.999zm-11.604-1.605h6v5c0 1.654-1.346 3-3 3s-3-1.346-3-3zm10.396 20h-14.792c-1.436 0-2.604-1.168-2.604-2.604 0-.191.021-.38.062-.565l3.287-14.792c.199-.896.831-1.589 1.65-1.883v4.844c0 2.757 2.243 5 5 5s5-2.243 5-5v-4.844c.819.295 1.452.988 1.65 1.883l3.288 14.793c.042.183.063.373.063.564 0 1.436-1.168 2.604-2.604 2.604z"></path><path d="m35 25h2v2h-2z"></path><path d="m39 25h18v2h-18z"></path><path d="m35 29h22v2h-22z"></path><path d="m35 33h16v2h-16z"></path><path d="m53 33h4v2h-4z"></path><path d="m35 37h22v2h-22z"></path><path d="m47 41h2v2h-2z"></path><path d="m51 41h2v2h-2z"></path><path d="m55 41h2v2h-2z"></path></svg>
            <span>Compra online</span>
        </div>
        <div className="card" onClick={() => handleScrollToSection(section5Ref)}>
          <svg fill="#7300cc" id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m484.5 65.074h-134.913c-.142 0-.28.013-.42.021-4.944-4.641-10.256-8.95-15.921-12.87-3.408-2.355-8.078-1.504-10.436 1.9-2.356 3.406-1.506 8.079 1.9 10.436 33.127 22.918 52.903 60.615 52.903 100.838 0 67.563-54.967 122.53-122.53 122.53-67.562 0-122.529-54.967-122.529-122.53 0-67.562 54.967-122.529 122.529-122.529 13.412 0 26.593 2.151 39.176 6.394 3.926 1.327 8.181-.785 9.503-4.71 1.324-3.925-.785-8.18-4.71-9.503-14.131-4.765-28.924-7.181-43.969-7.181-75.834 0-137.529 61.695-137.529 137.529s61.695 137.53 137.529 137.53 137.53-61.696 137.53-137.53c0-31.346-10.708-61.318-29.692-85.325h121.579c6.893 0 12.5 5.607 12.5 12.5v236.054h-59.322c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h59.322v39.388c0 6.893-5.607 12.5-12.5 12.5h-457c-6.893 0-12.5-5.607-12.5-12.5v-39.388h384.906c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-384.906v-236.054c0-6.893 5.607-12.5 12.5-12.5h89.438c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-89.438c-15.164 0-27.5 12.337-27.5 27.5v290.441c0 15.163 12.336 27.5 27.5 27.5h164.396v58.614h-22.642c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h171.658c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-22.642v-58.614h166.23c15.164 0 27.5-12.337 27.5-27.5v-290.441c0-15.163-12.336-27.5-27.5-27.5zm-181.229 404.056h-96.375v-58.614h96.375z"></path><path d="m201.644 105.49c-1.6-8.479-9.024-14.635-17.654-14.635h-8.02c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h8.02c1.425 0 2.65 1.016 2.914 2.417l22.196 117.564c.669 3.543 3.765 6.108 7.37 6.108h5.06c-2.215 2.476-3.574 5.735-3.574 9.319 0 7.73 6.267 13.997 13.997 13.997s13.997-6.267 13.997-13.997c0-3.584-1.358-6.843-3.574-9.319h30.854c-2.215 2.476-3.574 5.735-3.574 9.319 0 7.73 6.267 13.997 13.997 13.997s13.997-6.267 13.997-13.997c0-3.584-1.358-6.843-3.574-9.319h6.749c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-78.141l-3.06-16.207h83.818c3.604 0 6.697-2.562 7.369-6.104l13.312-70.227c.008-.045.017-.09.024-.135.447-2.625-.28-5.297-1.997-7.332s-4.229-3.202-6.892-3.202h-112.057zm11.186 59.247h20.462l1.535 21h-18.031zm53.558 0-1.535 21h-14.986l-1.535-21zm-19.152-15-1.535-20.999h23.318l-1.535 20.999zm32.658 36 1.535-21h19.784l-3.981 21zm24.163-36h-21.531l1.535-20.999h23.977zm-73.397-20.999 1.535 20.999h-22.197l-3.965-20.999z"></path><path d="m48.851 275.101h44.361c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-44.361c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5z"></path><path d="m48.851 308.93h82.774c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-82.774c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5z"></path><path d="m444.927 108.37c-4.143 0-7.5 3.357-7.5 7.5v18.771h-18.771c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h18.771v18.771c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-18.771h18.77c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-18.77v-18.771c0-4.142-3.358-7.5-7.5-7.5z"></path></g></svg>
            <span>Finalização da venda</span>
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
      Tabela de Preço
    </span>

    <p>
      Se seu estabelecimento possui diferentes preços para os produtos, como <strong>atacado ou varejo</strong>, ou até mesmo <strong>variações de preço entre loja física e online</strong>, utilize a ferramenta de tabela de preços.
      <br /><br />
      Com ela, você pode informar o preço dos produtos para cada situação de venda de forma <strong>prática</strong>.
      <br /><br />
      Além disso, não é necessário alterar manualmente os preços de cada item, pois qualquer atualização será <strong>automática</strong>.
      <br /><br />
      Isso proporciona mais agilidade e eficiência, permitindo que você venda mais!
    </p>

    <button onClick={() => abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
  </div>

  <img src={Set} alt="descer" className="bottom" onClick={() => handleScrollToSection(section2Ref)} />
</S.Main2>

<S.Main2 ref={section2Ref}>
  <div className="left">
    <span>
      Imagens e Descrição de Produtos
    </span>

    <p>
      Invista em boas imagens para seus produtos! Como o catálogo virtual será enviado ao cliente, onde ele realizará a compra, as imagens devem <strong>atrair a atenção</strong> e incentivar a aquisição do item.
      <br /><br />
      Além disso, forneça <strong>descrições detalhadas</strong> sobre o produto.
      <br /><br />
      Dessa forma, seu cliente terá <strong>total clareza e confiança</strong> de que está escolhendo o produto correto.
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
      Envio do Catálogo por E-mail
    </span>

    <p>
      Com a criação do catálogo em seu sistema BLUE ERP, você pode enviá-lo aos seus clientes por <strong>e-mail</strong>.
      <br /><br />
      O consumidor poderá visualizar seus produtos no computador ou em dispositivos móveis, como tablets e smartphones, acessando imagens, características, preços e finalizando a compra.
      <br /><br />
      Personalize o servidor de e-mails da sua empresa e, assim, se o cliente tiver alguma dúvida, ele poderá responder <strong>diretamente ao e-mail</strong>!
    </p>

    <button onClick={() => abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
  </div>

  <img src={Set} alt="descer" className="bottom" onClick={() => handleScrollToSection(section4Ref)} />
</S.Main2>

<S.Main2 ref={section4Ref}>
  <div className="left">
    <span>
      Cliente Compra Diretamente pelo Catálogo
    </span>

    <p>
      A experiência de compra se torna muito mais fácil para o cliente!
      <br /><br />
      No catálogo virtual, o consumidor pode conferir detalhes sobre os produtos, como <strong>imagem</strong>, <strong>descrição</strong> e <strong>preço</strong>, e adicionar os itens ao carrinho de compras.
      <br /><br />
      Quando desejar, basta finalizar o pedido informando seu nome, CPF/CNPJ, e-mail, telefone e a forma de pagamento desejada.
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
      Finalização da venda
    </span>

    <p>
      Quando o cliente finaliza o pedido através do catálogo virtual, essa venda entra na BLUE ERP, onde é possível que você <strong>finalize da forma que desejar</strong>.
      <br /><br />
      Com a venda finalizada, é gerado o <strong>lançamento financeiro</strong>, e também, ocorre a baixa dos produtos vendidos do depósito configurado no catálogo virtual.
      <br /><br />
      Ainda, é possível que você emita <strong>nota fiscal</strong> e boletos bancários, caso necessário.
    </p>

    <button onClick={() => abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
  </div>
</S.Main2>

      <Footer/>
     </S.Container>
    )
}