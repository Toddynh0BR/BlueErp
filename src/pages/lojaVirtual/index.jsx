import * as S from "./style";

import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

import MouseFollower from "../../components/mouse";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

import Image1 from "./assets/images-loja-header.png";
import Image2 from "./assets/loja-section-intro.png";
import Image3 from "./assets/loja-historico-de-compra.svg";
import Image4 from "./assets/loja-link-de-orcamento.png";
import Image5 from "./assets/loja-tabelas-de-precos.svg";
import Image6 from "./assets/loja-para-restaurantes.png";

import { IoShieldCheckmarkOutline,  IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdCloudOutline } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { RiWifiOffLine } from "react-icons/ri";

import BackSite from "./assets/backSite.svg";
import BackP from "./assets/backPayment.svg";
import Image7 from "./assets/BackPayment.png";

export function LojaVirtual(){
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
       <div className="GeralHeader">
         <div className="ecosystem" onClick={()=> navigate('/ecossistema')}>
          <div className="cloud circle" onClick={() => handleScrollToSection(section4Ref)}> 
           <IoMdCloudOutline />
          </div>

          <div className="truck circle">
           <TbTruckDelivery />
          </div>

          <div className="check circle">
           <IoShieldCheckmarkOutline />
          </div>

          <div className="phone circle" onClick={() => handleScrollToSection(section2Ref)}>
           <IoPhonePortraitOutline />
          </div>

          <div className="nowifi circle" onClick={() => handleScrollToSection(section3Ref)}>
           <RiWifiOffLine />
          </div>

          <div className="message circle">
           <MdOutlineMessage />
          </div>
         </div>

         <div className="others">
          <span onClick={()=> navigate('/chat-empresarial')}>Chat Empresarial</span>
          <span>Loja Virtual</span>
          <span onClick={()=> navigate("/app-de-vendas")}>APP de Vendas</span>
          <span onClick={()=> navigate('/loja-offline')}>ERP Offline</span>
         </div>
       </div>

       <div className="Center">
       <div className="left">
        <span>BLUE ERP</span>
        <h2>
         <strong>Loja Virtual</strong> <br /> totalmente conectada <br />
         ao seu sistema <br /> de gestão!
        </h2>

        <button  onClick={()=> abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
       </div>

       <div className="right">
        <img src={Image1} alt="Image" className="especial"/>
       </div>
       </div>

       <div className="Bottom">
        <div className="card" onClick={() => handleScrollToSection(section1Ref)}>
          <svg fill="#7300cc" id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m484.5 65.074h-134.913c-.142 0-.28.013-.42.021-4.944-4.641-10.256-8.95-15.921-12.87-3.408-2.355-8.078-1.504-10.436 1.9-2.356 3.406-1.506 8.079 1.9 10.436 33.127 22.918 52.903 60.615 52.903 100.838 0 67.563-54.967 122.53-122.53 122.53-67.562 0-122.529-54.967-122.529-122.53 0-67.562 54.967-122.529 122.529-122.529 13.412 0 26.593 2.151 39.176 6.394 3.926 1.327 8.181-.785 9.503-4.71 1.324-3.925-.785-8.18-4.71-9.503-14.131-4.765-28.924-7.181-43.969-7.181-75.834 0-137.529 61.695-137.529 137.529s61.695 137.53 137.529 137.53 137.53-61.696 137.53-137.53c0-31.346-10.708-61.318-29.692-85.325h121.579c6.893 0 12.5 5.607 12.5 12.5v236.054h-59.322c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h59.322v39.388c0 6.893-5.607 12.5-12.5 12.5h-457c-6.893 0-12.5-5.607-12.5-12.5v-39.388h384.906c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-384.906v-236.054c0-6.893 5.607-12.5 12.5-12.5h89.438c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-89.438c-15.164 0-27.5 12.337-27.5 27.5v290.441c0 15.163 12.336 27.5 27.5 27.5h164.396v58.614h-22.642c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h171.658c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-22.642v-58.614h166.23c15.164 0 27.5-12.337 27.5-27.5v-290.441c0-15.163-12.336-27.5-27.5-27.5zm-181.229 404.056h-96.375v-58.614h96.375z"></path><path d="m201.644 105.49c-1.6-8.479-9.024-14.635-17.654-14.635h-8.02c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h8.02c1.425 0 2.65 1.016 2.914 2.417l22.196 117.564c.669 3.543 3.765 6.108 7.37 6.108h5.06c-2.215 2.476-3.574 5.735-3.574 9.319 0 7.73 6.267 13.997 13.997 13.997s13.997-6.267 13.997-13.997c0-3.584-1.358-6.843-3.574-9.319h30.854c-2.215 2.476-3.574 5.735-3.574 9.319 0 7.73 6.267 13.997 13.997 13.997s13.997-6.267 13.997-13.997c0-3.584-1.358-6.843-3.574-9.319h6.749c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-78.141l-3.06-16.207h83.818c3.604 0 6.697-2.562 7.369-6.104l13.312-70.227c.008-.045.017-.09.024-.135.447-2.625-.28-5.297-1.997-7.332s-4.229-3.202-6.892-3.202h-112.057zm11.186 59.247h20.462l1.535 21h-18.031zm53.558 0-1.535 21h-14.986l-1.535-21zm-19.152-15-1.535-20.999h23.318l-1.535 20.999zm32.658 36 1.535-21h19.784l-3.981 21zm24.163-36h-21.531l1.535-20.999h23.977zm-73.397-20.999 1.535 20.999h-22.197l-3.965-20.999z"></path><path d="m48.851 275.101h44.361c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-44.361c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5z"></path><path d="m48.851 308.93h82.774c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-82.774c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5z"></path><path d="m444.927 108.37c-4.143 0-7.5 3.357-7.5 7.5v18.771h-18.771c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h18.771v18.771c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-18.771h18.77c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-18.77v-18.771c0-4.142-3.358-7.5-7.5-7.5z"></path></g></svg>
            <span>Sua Loja online <br />e sem taxas</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section2Ref)}>
          <svg fill="#7300cc" height="512" viewBox="0 0 60 60" width="512" xmlns="http://www.w3.org/2000/svg"><g id="Page-1"><g id="003---Mobile-Payment"><path id="Shape" d="m55 13h-19v-9c0-2.209139-1.790861-4-4-4h-28c-2.209139 0-4 1.790861-4 4v52c0 2.209139 1.790861 4 4 4h28c2.209139 0 4-1.790861 4-4v-13h19c2.7600532-.0033061 4.9966939-2.2399468 5-5v-20c-.0033061-2.7600532-2.2399468-4.9966939-5-5zm3 5v12h-28c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1h28v4h-40v-4h5c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1h-5v-12c0-1.6568542 1.3431458-3 3-3h34c1.6568542 0 3 1.3431458 3 3zm-32.308-16-1.282 1.368c-.378896.40269492-.907076.63133176-1.46.632h-9.9c-.5527743.00000995-1.0809024-.22876112-1.459-.632l-1.282-1.368zm6.308 56h-28c-1.1045695 0-2-.8954305-2-2v-1.556c.60534654.3599241 1.29574677.5518554 2 .556h28c.7042532-.0041446 1.3946535-.1960759 2-.556v1.556c0 1.1045695-.8954305 2-2 2zm2-7c0 1.1045695-.8954305 2-2 2h-28c-1.1045695 0-2-.8954305-2-2v-47c0-1.1045695.8954305-2 2-2h3.567l2.565 2.735c.7567936.80574999 1.8125738 1.2634477 2.918 1.265h9.9c1.1054015-.00208587 2.1611681-.45925919 2.919-1.264l2.564-2.736h3.567c1.1045695 0 2 .8954305 2 2v9h-13c-2.7600532.0033061-4.9966939 2.2399468-5 5v2h-3c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1h3v5h-5c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1h5v5h-3c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1h3v2c.0033061 2.7600532 2.2399468 4.9966939 5 5h13zm21-10h-34c-1.6568542 0-3-1.3431458-3-3h40c0 1.6568542-1.3431458 3-3 3z"></path><path id="Shape" d="m8 22h1c.55228475 0 1-.4477153 1-1s-.44771525-1-1-1h-1c-.55228475 0-1 .4477153-1 1s.44771525 1 1 1z"></path><path id="Shape" d="m9 34h-1c-.55228475 0-1 .4477153-1 1s.44771525 1 1 1h1c.55228475 0 1-.4477153 1-1s-.44771525-1-1-1z"></path><path id="Shape" d="m8 28c0-.5522847-.44771525-1-1-1h-2c-.55228475 0-1 .4477153-1 1s.44771525 1 1 1h2c.55228475 0 1-.4477153 1-1z"></path><path id="Shape" d="m49 23c.740399-.0026037 1.4533329-.2806479 2-.78 1.1986086 1.0894491 3.0455949 1.0307294 4.172581-.1326554s1.1269861-3.0113044 0-4.1746892-2.9739724-1.2221045-4.172581-.1326554c-.9933291-.9028176-2.4654891-1.0359148-3.6046342-.325893s-1.6680028 2.0903404-1.2949262 3.3797574c.3730765 1.289417 1.557279 2.1740833 2.8995604 2.1661356zm4-4c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1-1-.4477153-1-1 .4477153-1 1-1zm-4 0c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1-1-.4477153-1-1 .4477153-1 1-1z"></path><path id="Shape" d="m22 23h1c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1h-1c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1z"></path><path id="Shape" d="m27 23h3c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1h-3c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1z"></path><path id="Shape" d="m33 25h-11c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1h11c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1z"></path></g></g></svg>
            <span>Histórico de compras</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section3Ref)}>
          <svg fill="#7300cc" height="480pt" viewBox="-20 0 480 480" width="480pt" xmlns="http://www.w3.org/2000/svg"><path d="m336 328v-80c-.042969-39.746094-32.253906-71.957031-72-72h-128c-39.746094.042969-71.957031 32.253906-72 72v104h16v-104c.035156-30.914062 25.085938-55.964844 56-56h12.6875l45.65625 45.65625c3.125 3.121094 8.1875 3.121094 11.3125 0l45.65625-45.65625h12.6875c30.914062.035156 55.964844 25.085938 56 56v80zm-136-107.3125-28.6875-28.6875h57.375zm0 0"></path><path d="m120 264h16v72h-16zm0 0"></path><path d="m264 264h16v56h-16zm0 0"></path><path d="m432 352h-102.023438c-17.632812-9.652344-37.355468-14.84375-57.457031-15.121094-.605469-.054687-1.238281-.078125-1.800781-.078125-20.707031 0-41.085938 5.191407-59.269531 15.101563l-59.449219.097656c-17.671875 0-32 14.328125-32 32-.007812.632812.03125 1.265625.113281 1.894531.117188 2.195313.46875 4.367188 1.039063 6.488281l-45.097656-20.664062-.726563-.359375-26.9375-12.304687c-10.566406-4.863282-22.886719-4.003907-32.679687 2.273437-9.796876 6.28125-15.7187505 17.117187-15.710938 28.75v1.761719c-.0585938 12.949218 7.277344 24.792968 18.894531 30.511718l103.441407 51.800782c7.785156 3.839844 16.34375 5.839844 25.023437 5.847656h284.640625c4.417969 0 8-3.582031 8-8v-112c0-4.417969-3.582031-8-8-8zm-112 112h-172.640625c-6.21875-.011719-12.355469-1.445312-17.933594-4.191406l-103.394531-51.808594c-6.15625-3.027344-10.050781-9.296875-10.03125-16.160156v-1.761719c0-6.179687 3.144531-11.933594 8.351562-15.269531 5.203126-3.335938 11.746094-3.789063 17.359376-1.207032l26.714843 12.199219.71875.351563 63.511719 29.121094c1.050781.480468 2.191406.726562 3.34375.726562h88v-16h-72c-8.546875.011719-15.578125-6.730469-15.925781-15.273438-.011719-.265624-.035157-.535156-.074219-.796874.039062-8.808594 7.191406-15.929688 16-15.929688h61.359375c1.371094 0 2.71875-.351562 3.914063-1.023438l1.917968-1.082031c15.742188-8.550781 33.359375-13.074219 51.273438-13.167969.484375.097657.976562.148438 1.472656.152344 16.730469.160156 33.195312 4.242188 48.0625 11.921875zm104 0h-88v-96h88zm0 0"></path><path d="m352 432h16v16h-16zm0 0"></path><path d="m200 160c35.332031-.039062 63.960938-28.671875 64-64v-32c0-35.347656-28.652344-64-64-64s-64 28.652344-64 64v32c.039062 35.328125 28.671875 63.960938 64 64zm-48-96c0-26.507812 21.492188-48 48-48 26.511719 0 48 21.492188 48 48v32c0 26.507812-21.488281 48-48 48-26.507812 0-48-21.492188-48-48zm0 0"></path><path d="m184 64c.015625-6.777344 4.285156-12.816406 10.671875-15.089844l-5.34375-15.078125c-12.769531 4.539063-21.308594 16.613281-21.328125 30.167969v8h16zm0 0"></path></svg>
            <span>Botão de orçamento</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section4Ref)}>
        <svg fill="#7300cc" id="Layer_1" enable-background="new 0 0 480.013 480.013" height="512" viewBox="0 0 480.013 480.013" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m238.068 322.013c0 57.897 47.103 105 105 105s105-47.103 105-105c0-37.745-20.022-70.896-50-89.406v-131.594c0-2.61-1.256-4.921-3.19-6.382-99.397-99.397-92.966-93.788-96.367-94.462-1.189-.236 11.366-.156-234.566-.156-17.645 0-32 14.355-32 32v416c0 17.645 14.355 32 32 32h302c17.645 0 32-14.355 32-32 0-4.418-3.582-8-8-8s-8 3.582-8 8c0 8.822-7.178 16-16 16h-302c-8.822 0-16-7.178-16-16v-416c0-8.822 7.178-16 16-16h225v61c0 17.645 14.355 32 32 32h61.123v115.515c-13.043-5.236-27.215-7.882-42-7.469v-57.045c0-13.233-10.767-24-24-24h-202c-13.234 0-24 10.767-24 24v102c0 13.233 10.766 24 24 24h105c4.418 0 8-3.582 8-8s-3.582-8-8-8h-36v-51h72c4.418 0 8-3.582 8-8v-59h53c4.411 0 8 3.589 8 8v58.727c-48.858 8.966-86 51.861-86 103.272zm82.877-229c-8.822 0-16-7.178-16-16v-49.686l65.687 65.687h-49.687zm-206.877 59h53v51h-61v-43c0-4.411 3.589-8 8-8zm53 118h-53c-4.411 0-8-3.589-8-8v-43h61zm80-67h-64v-51h64zm185 119c0 49.075-39.925 89-89 89s-89-39.925-89-89 39.925-89 89-89 89 39.925 89 89zm-81 20v-3.237c0-3.518-2.256-6.586-5.614-7.636l-9.544-2.982c-10.074-3.148-16.842-12.354-16.842-22.907v-3.237c0-10.429 6.689-19.321 16-22.624v-3.376c0-4.418 3.582-8 8-8s8 3.582 8 8v3.376c9.311 3.303 16 12.195 16 22.624 0 4.418-3.582 8-8 8s-8-3.582-8-8c0-4.411-3.589-8-8-8s-8 3.589-8 8v3.237c0 3.518 2.256 6.586 5.614 7.636l9.544 2.982c10.074 3.148 16.842 12.354 16.842 22.907v3.237c0 11.519-8.159 21.165-19 23.472v2.528c0 4.418-3.582 8-8 8s-8-3.582-8-8v-4.68c-7.713-3.996-13-12.05-13-21.32 0-4.418 3.582-8 8-8s8 3.582 8 8c0 4.411 3.589 8 8 8s8-3.589 8-8zm-261-12c0-4.418 3.582-8 8-8h78c4.418 0 8 3.582 8 8s-3.582 8-8 8h-78c-4.418 0-8-3.582-8-8zm0 60c0-4.418 3.582-8 8-8h98c4.418 0 8 3.582 8 8s-3.582 8-8 8h-98c-4.418 0-8-3.582-8-8z"></path></svg>
            <span>Tabelas de preço integradas</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section5Ref)}>
          <svg fill="#7300cc" height="429pt" viewBox="0 -1 429.69021 429" width="429pt" xmlns="http://www.w3.org/2000/svg"><path d="m127.273438 185.078125-.015626.273437c-1.058593 18.542969 9.328126 35.914063 26.46875 44.242188l.175782.085938c6.042968 2.890624 10.996094 7.65625 14.121094 13.582031l.070312.128906c8.636719 16.445313 26.5 26.414063 45.542969 25.414063l.289062-.015626c6.90625-.386718 13.761719 1.394532 19.605469 5.097657 16.125 10.085937 36.59375 10.085937 52.71875 0 5.84375-3.703125 12.699219-5.484375 19.605469-5.097657l.289062.015626c19.011719 1.007812 36.898438-8.96875 45.554688-25.441407l.042969-.089843c3.136718-5.941407 8.101562-10.714844 14.164062-13.609376l.140625-.070312c17.140625-8.332031 27.53125-25.699219 26.46875-44.246094l-.015625-.257812c-.351562-6.53125 1.460938-12.996094 5.164062-18.390625 10.660157-15.546875 10.660157-36.046875.003907-51.597657-3.699219-5.390624-5.519531-11.851562-5.167969-18.382812l.015625-.273438c1.0625-18.546874-9.328125-35.914062-26.484375-44.25l-.15625-.078124c-6.03125-2.882813-10.972656-7.625-14.101562-13.535157l-.089844-.175781c-8.640625-16.445312-26.527344-26.410156-45.539063-25.414062l-.292969.015624c-6.902343.386719-13.757812-1.394531-19.597656-5.097656h-.007812c-16.125-10.085937-36.59375-10.085937-52.71875 0-5.84375 3.699219-12.699219 5.480469-19.605469 5.09375l-.289063-.015625c-19.015624-1.007812-36.898437 8.96875-45.535156 25.410157l-.066406.121093c-3.128906 5.9375-8.085938 10.707031-14.136719 13.601563l-.164062.078125c-17.140625 8.328125-27.53125 25.699219-26.46875 44.246093l.015625.257813c.351562 6.53125-1.460938 12.996094-5.164063 18.386719-10.660156 15.550781-10.660156 36.054687 0 51.601562 3.699219 5.390625 5.515625 11.855469 5.160157 18.386719zm8.007812-60.902344c5.714844-8.320312 8.515625-18.296875 7.96875-28.375l-.015625-.273437c-.5625-12.289063 6.335937-23.703125 17.472656-28.925782l.136719-.066406c9.136719-4.375 16.617188-11.578125 21.335938-20.539062l.078124-.148438c5.738282-10.929687 17.757813-17.554687 30.523438-16.875l.28125.011719c10.214844.574219 20.351562-2.058594 28.992188-7.535156 10.910156-6.824219 24.753906-6.824219 35.664062 0 8.640625 5.46875 18.777344 8.105469 28.988281 7.539062l.28125-.015625c12.828125-.671875 24.789063 5.945313 30.511719 16.84375l.105469.199219c4.71875 8.949219 12.191406 16.140625 21.316406 20.511719l.132813.066406c11.3125 5.5 18.179687 16.855469 17.488281 28.9375l-.015625.285156c-.546875 10.078125 2.257812 20.050782 7.972656 28.371094 6.90625 10.074219 6.902344 23.355469-.007812 33.425781-5.710938 8.324219-8.511719 18.300781-7.964844 28.378907l.015625.269531c.691406 12.082031-6.175781 23.441406-17.492188 28.945312l-.117187.054688c-9.144532 4.382812-16.632813 11.59375-21.355469 20.570312l-.058594.117188c-5.742187 10.929687-17.742187 17.558593-30.527343 16.875l-.277344-.015625c-10.214844-.570313-20.355469 2.066406-29 7.539062-10.90625 6.820313-24.75 6.820313-35.65625 0-7.859375-4.980468-16.976563-7.621094-26.28125-7.613281-.902344 0-1.808594.023437-2.714844.074219l-.28125.011718c-12.597656.800782-24.515625-5.792968-30.535156-16.890624l-.082032-.152344c-4.710937-8.945313-12.179687-16.132813-21.300781-20.503906l-.148437-.074219c-11.316406-5.5-18.183594-16.859375-17.488282-28.9375l.015626-.285157c.542968-10.078124-2.261719-20.054687-7.972657-28.371093-6.902343-10.074219-6.898437-23.355469.011719-33.421875zm0 0"></path><path d="m208.269531 223.601562c3.746094 2.339844 8.679688 1.195313 11.019531-2.550781l94.769532-151.820312c1.546875-2.425781 1.675781-5.496094.332031-8.039063-1.34375-2.546875-3.953125-4.171875-6.828125-4.261718-2.875-.089844-5.578125 1.371093-7.078125 3.828124l-94.765625 151.820313c-2.339844 3.75-1.199219 8.683594 2.550781 11.023437zm0 0"></path><path d="m216.761719 141.292969c19.480469 0 35.332031-18.074219 35.332031-40.289063s-15.851562-40.285156-35.332031-40.285156-35.328125 18.070312-35.328125 40.285156 15.847656 40.289063 35.328125 40.289063zm0-64.574219c10.660156 0 19.332031 10.894531 19.332031 24.285156s-8.671875 24.289063-19.332031 24.289063c-10.65625 0-19.328125-10.902344-19.328125-24.289063 0-13.386718 8.671875-24.285156 19.328125-24.285156zm0 0"></path><path d="m267.683594 180.800781c0 22.214844 15.847656 40.285157 35.328125 40.285157s35.332031-18.074219 35.332031-40.285157c0-22.207031-15.847656-40.285156-35.328125-40.285156-19.484375 0-35.332031 18.066406-35.332031 40.285156zm54.660156 0c0 13.390625-8.671875 24.285157-19.332031 24.285157-10.65625 0-19.328125-10.894532-19.328125-24.285157s8.671875-24.285156 19.328125-24.285156c10.660156 0 19.332031 10.886719 19.332031 24.285156zm0 0"></path><path d="m428.652344 313.644531c-10.59375-18.800781-34.085938-25.960937-53.363282-16.265625l-62.667968 29.609375c-8.652344-16.089843-25.25-26.332031-43.515625-26.847656l-57.851563-1.59375c-9.160156-.261719-18.148437-2.585937-26.292968-6.789063l-5.886719-3.050781c-30.140625-15.710937-66.066407-15.671875-96.175781.101563l.367187-13.335938c.121094-4.417968-3.359375-8.097656-7.777344-8.21875l-63.4375-1.746094c-4.417969-.121093-8.09375 3.359376-8.214843 7.777344l-3.83203175 139.214844c-.12109425 4.417969 3.35937475 8.097656 7.77734375 8.21875l63.4375 1.746094h.222656c4.332032-.003906 7.875-3.453125 7.996094-7.78125l.179688-6.660156 16.480468-8.824219c6.46875-3.480469 14.035156-4.308594 21.101563-2.308594l98.410156 27.621094c.171875.050781.34375.089843.519531.128906 7.113282 1.488281 14.363282 2.234375 21.632813 2.230469 15.390625.007812 30.601562-3.308594 44.589843-9.730469.34375-.15625.675782-.335937.992188-.539063l142.6875-92.300781c3.558594-2.296875 4.707031-6.972656 2.621094-10.65625zm-412.433594 91.296875 3.390625-123.214844 47.445313 1.304688-3.394532 123.21875zm258.921875-2.097656c-17.378906 7.84375-36.789063 10.007812-55.46875 6.1875l-98.148437-27.542969c-11.042969-3.125-22.871094-1.828125-32.976563 3.605469l-8.421875 4.507812 2.257812-81.925781c26.683594-17.75 60.910157-19.574219 89.332032-4.765625l5.886718 3.050782c10.289063 5.3125 21.640626 8.246093 33.214844 8.578124l57.851563 1.59375c16.25.464844 30.050781 12.035157 33.347656 27.957032l-86.171875-2.371094c-4.417969-.121094-8.09375 3.359375-8.214844 7.777344-.121094 4.417968 3.359375 8.097656 7.777344 8.21875l95.097656 2.617187h.226563c4.328125-.003906 7.871093-3.453125 7.992187-7.78125.097656-3.476562-.164062-6.957031-.773437-10.378906l64.265625-30.371094.1875-.089843c9.117187-4.617188 20.144531-3.074219 27.640625 3.867187zm0 0"></path></svg>
            <span>Loja Virtual para Restaurantes</span>
        </div>
       </div>
      </S.Main>

      <S.Main2 ref={section1Ref}>
        <div className="left">
         <span>
          Anunciar em grandes marketplaces requer preços altamente competitivos e
          adaptações em estratégias de negócio, além do percentual que a plataforma 
          retém em cada venda.<strong> Na Blue ERP, sua loja é exclusivamente sua,
          e todo o faturamento permanece no seu negócio.</strong> 
         </span>
         
         <p>
          <strong> Com recursos variados e funcionalidades versáteis para todos os segmentos, </strong>
          a Blue ERP permite que pequenas empresas vendam diariamente,
          oferecendo conveniência aos clientes e fortalecendo o caixa.
          É a solução para superar qualquer cenário de crise.
         </p>

         <button  onClick={()=> abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
        </div>

        <div className="right">
         <img src={Image2} alt="imagem" />
        </div>
      </S.Main2>

      <S.Main4>
      <img src={BackP} alt="" className="back"/>

      <div className="left">
        <img src={Image7} alt="image" />
       </div>

       <div className="right">
        <h2>
        
Integração com <br />
<strong> Plataformas de Pagamento </strong>
        </h2>

      
        <p>
        Além de contar com nossa própria plataforma de pagamento integrada,
         que facilita o registro de seus recebimentos,
         a Blue ERP permite a integração da sua loja online com outras soluções como <strong> PagSeguro </strong> ,
        <strong> Cielo </strong>, <strong> Pagar.me </strong> e <strong> PagHiper </strong>. Com isso, os recebimentos da sua Blue Loja serão processados automaticamente, garantindo mais agilidade e eficiência.
         Ganhe tempo com cobranças automáticas!
        </p>

      

        <button  onClick={()=> abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
       </div>
      </S.Main4>

      <S.Main3 ref={section2Ref}>
        <div className="left">
        <img src={Image3} alt="imagem" />
         
        </div>

        <div className="right">
         <strong className="title">Histórico de compra</strong>
         <span>
          Sabe quando o cliente coloca produtos no carrinho, mas acaba não finalizando a compra?
         </span>
         
         <p>
          Na Blue ERP, o histórico de compras do cliente fica salvo em seu cadastro.
          Assim, ao retornar à loja, <strong>  ele pode retomar o carrinho e concluir a compra ou
          adicionar novos itens à vontade</strong>. Além disso,
          o cliente acompanha <strong> todo o processo de entrega: </strong>
          desde a confirmação do pagamento e o código de
          rastreamento até o recebimento da mercadoria!
         </p>

         <button  onClick={()=> abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
        </div>
      </S.Main3>

      <S.Main3 ref={section3Ref}>
        <div className="left">
         <span>
          Oculte preços e envie orçamentos diretamente por e-mail.
         </span>
         
         <p>

         A Blue ERP é altamente flexível para se adaptar às suas estratégias de venda.
         <br /><strong>Você tem a opção </strong> de ocultar os preços dos produtos,
         permitindo que seus clientes selecionem itens e solicitem um  <strong>orçamento personalizado.</strong>
         Envie orçamentos de forma automática ou faça ajustes manuais. Além disso,
         é possível incluir um botão de aprovação de orçamento diretamente no e-mail enviado ao cliente,
         facilitando o processo de decisão.
         </p>

         <button  onClick={()=> abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
        </div>

        <div className="right">
         <img src={Image4} alt="imagem" />
        </div>
      </S.Main3>

      <S.Main3 ref={section4Ref}>
        <div className="left">
        <img src={Image5} alt="imagem" />
        </div>

        <div className="right">
        
         <span>
          <strong>
          Utilize tabelas de Preços Especiais!  </strong> Assim,
          você pode oferecer valores diferenciados para grupos específicos de clientes,
         <strong> ajustando as ofertas conforme o perfil de cada público.</strong>
         
         </span>
         
         <p>
         Crie tabelas de preços exclusivas para clientes cadastrados que realizam login na sua loja.
         Esse recurso é ideal para empresas que desejam oferecer
         valores diferenciados para vendas no atacado {'(B2B) e no varejo (B2C)'}, 
         ajustando automaticamente os preços conforme o perfil de cada cliente.
         </p>

         <button  onClick={()=> abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
        </div>
      </S.Main3>

      <S.Main4 ref={section5Ref}>
        <img src={BackSite} alt="" className="back"/>
       <div className="left">
        <img src={Image6} alt="image" />
       </div>

       <div className="right">
        <h2>
         <strong>Venda online e aumente a receita </strong> do delivery com o seu restaurante!
        </h2>

        <h4>Cadastro de Produtos Alimentícios e Tipo Pizza</h4>
        <p>
         Cadastre alimentos e pizzas no sistema, gerenciando validade,
         insumos e personalizações como tamanhos, fatias, bordas,
         tipos de massa e muito mais.
        </p>

        <h4>Controle de Entregadores</h4>
        <p>
         Cadastre entregadores e selecione-os ao finalizar pedidos,
         monitorando entregas pendentes e concluídas para cada um.
        </p>

        <h4>Integração com Impressoras Térmicas</h4>
        <p>
         Com integração para impressoras térmicas,
         a cozinha pode imprimir pedidos e atualizar 
         o status dos itens prontos para entrega,
         facilitando o fluxo de preparo e envio.
        </p>

        <button  onClick={()=> abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
       </div>
      </S.Main4>

      <Footer/>
     </S.Container>
    )
}