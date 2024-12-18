import * as S from "./style";

import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

import MouseFollower from "../../components/mouse";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

import Image1 from "./assets/images-mobi-header.png";
import Image2 from "./assets/mobi-caixa-no-celular.png";
import Image3 from "./assets/mobi-pedidos-e-orcamentos.svg";
import Image4 from "./assets/mobi-emissao-de-notas.svg";
import Image5 from "./assets/mobi-multilojas.png";
import Image6 from "./assets/mobi-acompanhamentos-de-metas.svg";
import Image7 from "./assets/mobi-expedicao.png";

import { IoShieldCheckmarkOutline,  IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdCloudOutline } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { RiWifiOffLine } from "react-icons/ri";

export function AppVenda(){
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
          <span onClick={()=> navigate('/loja-virtual')}>Loja Virtual</span>
          <span>APP de Vendas</span>
          <span onClick={()=> navigate('/loja-offline')}>ERP Offline</span>
         </div>
       </div>

       <div className="Center">
       <div className="left">
        <span>BLUE Mobi</span>
        <h2>
         <strong>APP de Vendas</strong> <br />
         Simplifique suas <br /> vendas externas ou <br /> no ponto de venda.<br />
        </h2>

        <button  onClick={()=> abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
       </div>

       <div className="right">
        <img src={Image1} alt="Image" className="especial"/>
       </div>
       </div>

       <div className="Bottom">
        <div className="card" onClick={() => handleScrollToSection(section1Ref)}>
         <svg fill="#7300cc" height="50px" viewBox="0 0 499.312 499.312" width="499.312pt" xmlns="http://www.w3.org/2000/svg"><path d="m485.65625 220.28125c8.808594-8.800781 13.65625-20.511719 13.65625-32.96875s-4.847656-24.167969-13.65625-32.96875l-137.375-137.375c-8.800781-8.808594-20.511719-13.65625-32.96875-13.65625s-24.167969 4.847656-32.96875 13.65625l-71.03125 71.03125-88-88-123.3125 123.3125 88 88-71.03125 71.03125c-8.808594 8.800781-13.65625 20.511719-13.65625 32.96875s4.847656 24.167969 13.65625 32.96875l137.375 137.375c8.800781 8.808594 20.511719 13.65625 32.96875 13.65625s24.167969-4.847656 32.96875-13.65625l127.03125-127.03125 24 24 51.3125-51.3125-24-24 12.6875-12.6875 24 24 51.3125-51.3125-24-24zm-148.6875-192 137.375 137.375c5.785156 5.785156 8.96875 13.480469 8.96875 21.65625s-3.183594 15.871094-8.96875 21.65625l-7.03125 7.03125-44.6875-44.6875h-16l-75.3125-75.3125v-16l-44.6875-44.6875 7.03125-7.03125c11.566406-11.570312 31.742188-11.570312 43.3125 0zm-229.65625 151.03125c0-39.695312 32.304688-72 72-72 15.6875 0 30.625 5.039062 43.238281 14.550781l14.210938 14.207031c9.511719 12.617188 14.550781 27.554688 14.550781 43.242188 0 39.695312-32.304688 72-72 72-15.6875 0-30.625-5.039062-43.242188-14.550781l-14.207031-14.210938c-9.511719-12.613281-14.550781-27.550781-14.550781-43.238281zm158.902344-13.785156 69.785156 69.785156-100.6875 100.6875-69.785156-69.785156c4.527344.714844 9.128906 1.097656 13.785156 1.097656 48.519531 0 88-39.480469 88-88 0-4.65625-.382812-9.265625-1.097656-13.785156zm-30.902344 193.097656 123.3125-123.3125-112-112 20.6875-20.6875 132.6875 132.6875-164.6875 164.6875-132.6875-132.6875 20.6875-20.6875zm-112-336 69.785156 69.78125c-4.53125-.710938-9.128906-1.09375-13.785156-1.09375-48.519531 0-88 39.480469-88 88 0 4.65625.382812 9.253906 1.09375 13.785156l-69.78125-69.785156zm-11.3125 212.6875-32 32 155.3125 155.3125 187.3125-187.3125-155.3125-155.3125-32 32-12.6875-12.6875 52.6875-52.6875 40 40v16l84.6875 84.6875h16l40 40-220.6875 220.6875-180.6875-180.6875 44.6875-44.6875zm96.96875 239.03125c-11.570312 11.566406-31.746094 11.566406-43.3125 0l-137.375-137.375c-5.785156-5.785156-8.96875-13.480469-8.96875-21.65625s3.183594-15.871094 8.96875-21.65625l15.03125-15.03125 180.6875 180.6875zm191.03125-143.03125-28.6875 28.6875-12.6875-12.6875 28.6875-28.6875zm64-64-28.6875 28.6875-12.6875-12.6875 28.6875-28.6875zm0 0"></path><path d="m77.648438 360.964844 11.316406-11.3125 47.996094 47.996094-11.3125 11.316406zm0 0"></path><path d="m123.3125 67.878906 13.085938 13.089844 11.3125-11.3125-24.398438-24.398438-24.402344 24.398438 11.3125 11.3125zm0 0"></path><path d="m69.65625 98.910156-24.398438 24.402344 24.398438 24.398438 11.3125-11.3125-13.089844-13.085938 13.089844-13.089844zm0 0"></path><path d="m222.222656 277.65625-11.3125 11.3125 24.402344 24.398438 24.398438-24.398438-11.3125-11.3125-13.085938 13.085938zm0 0"></path><path d="m288.96875 259.710938 24.398438-24.398438-24.398438-24.402344-11.3125 11.3125 13.085938 13.089844-13.085938 13.085938zm0 0"></path><path d="m365.65625 104.972656 11.3125-11.3125 32 32-11.3125 11.3125zm0 0"></path><path d="m427.3125 147.3125c0 4.417969-3.582031 8-8 8s-8-3.582031-8-8 3.582031-8 8-8 8 3.582031 8 8zm0 0"></path><path d="m363.3125 83.3125c0 4.417969-3.582031 8-8 8s-8-3.582031-8-8 3.582031-8 8-8 8 3.582031 8 8zm0 0"></path><path d="m144.96875 224.96875 10.34375-10.34375 16 16 16-16c5.160156-5.160156 8-12.015625 8-19.3125s-2.839844-14.160156-8-19.3125l-4.6875-4.6875c-2.105469-2.105469-3.3125-5.023438-3.3125-8s1.207031-5.898438 3.3125-8l4.6875-4.6875 12.6875 12.6875c2.105469 2.101562 3.3125 5.023438 3.3125 8s-1.207031 5.894531-3.3125 8l-2.34375 2.34375 11.3125 11.3125 2.34375-2.34375c5.160156-5.160156 8-12.015625 8-19.3125 0-5.703125-1.785156-11.113281-5.007812-15.679688l10.664062-10.664062-11.3125-11.3125-10.34375 10.34375-16-16-16 16c-5.160156 5.160156-8 12.015625-8 19.3125s2.839844 14.160156 8 19.3125l4.6875 4.6875c2.105469 2.101562 3.3125 5.023438 3.3125 8s-1.207031 5.894531-3.3125 8l-4.6875 4.6875-12.6875-12.6875c-2.105469-2.105469-3.3125-5.023438-3.3125-8s1.207031-5.898438 3.3125-8l2.34375-2.34375-11.3125-11.3125-2.34375 2.34375c-5.160156 5.160156-8 12.015625-8 19.3125 0 5.703125 1.785156 11.113281 5.007812 15.679688l-10.664062 10.664062zm0 0"></path></svg>
            <span>Frente de caixa no celular</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section2Ref)}>
         <svg  fill="#7300cc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512"><g id="_22-mobile" data-name="22-mobile"><g id="linear_color" data-name="linear color"><path d="M290.043,446.021H239.087a10,10,0,1,0,0,20h50.956a10,10,0,0,0,0-20Z"></path><path d="M464,166c-20.163,0-37.592,5.643-50.4,16.317-1.181.985-2.387,2.076-3.6,3.267V32A26.076,26.076,0,0,0,384,6H144a26.076,26.076,0,0,0-26,26V58.6l-1.239-1.239a42,42,0,0,0-59.4,59.4l43.274,43.274a42.017,42.017,0,0,0-17.959,70.035l24.616,24.616a41.993,41.993,0,0,0-24.616,71.384L99.29,342.687a41.993,41.993,0,0,0-24.616,71.384L118,457.4V480a26.029,26.029,0,0,0,26,26H336a10,10,0,0,0,10-10V400a54.26,54.26,0,0,1,21.6-43.2L406,328a10.105,10.105,0,0,0,4-8V240c0-39.827,24.31-50.935,44-53.4V496a10,10,0,0,0,20,0V176A10,10,0,0,0,464,166ZM144,26H384a6.006,6.006,0,0,1,6,6V61.956H138V32A6.006,6.006,0,0,1,144,26ZM65.055,87.06c-.2-19.372,24.011-29.385,37.564-15.559L118,86.883v62.235l-46.5-46.5A21.857,21.857,0,0,1,65.055,87.06Zm31.761,97.756c8.19-8.535,22.924-8.535,31.113,0l45.255,45.255c19.873,21.343-9.852,50.993-31.113,31.113L96.816,215.929A22.027,22.027,0,0,1,96.816,184.816Zm90.51,31.113-10.869-10.87A86.034,86.034,0,1,1,194,266.629,42.072,42.072,0,0,0,187.326,215.929Zm-90.51,64.887c8.19-8.535,22.924-8.535,31.113,0l45.255,45.255c19.873,21.343-9.852,50.993-31.113,31.113L96.816,311.929A22.027,22.027,0,0,1,96.816,280.816Zm-8,88c8.19-8.535,22.924-8.535,31.113,0l45.255,45.255c19.873,21.343-9.852,50.993-31.113,31.113L88.816,399.929A22.027,22.027,0,0,1,88.816,368.816ZM138,480V470a42.155,42.155,0,0,0,11.627,1.633,41.961,41.961,0,0,0,41.82-45.588H326V486H144A6.006,6.006,0,0,1,138,480ZM355.6,340.8A74.353,74.353,0,0,0,326,400v6.04H184.371a41.973,41.973,0,0,0-5.045-6.111L162.71,383.313a41.993,41.993,0,0,0,24.616-71.384L162.71,287.313a41.541,41.541,0,0,0,17.3-6.143,105.966,105.966,0,1,0-20.767-93.326S139.418,168.2,138,167.1V81.956H390V315Z"></path><path d="M253,224h17a14.509,14.509,0,0,1,0,29H244.791c-3.493.08-6-3.312-5.488-6.647a10,10,0,0,0-20-.358l-.019,1.036A25.509,25.509,0,0,0,244.791,273H252v6a10,10,0,0,0,20,0v-6.063A34.516,34.516,0,0,0,270,204H253a14,14,0,0,1,0-28h24.811q5.283.441,5.5,5.744a10,10,0,0,0,19.982.86A25.508,25.508,0,0,0,277.811,156H272v-6a10,10,0,0,0-20,0v6.025A33.995,33.995,0,0,0,253,224Z"></path></g></g></svg>            <span>Pedidos e orçamentos</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section3Ref)}>
          <svg fill="#7300cc" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 499.312 499.312"  xml:space="preserve"> <g> 	<g> 		<g> 			<path d="M409.656,176c48.52,0,88-39.48,88-88s-39.48-88-88-88c-48.52,0-88,39.48-88,88S361.136,176,409.656,176z M409.656,16 				c39.696,0,72,32.296,72,72s-32.304,72-72,72s-72-32.296-72-72S369.96,16,409.656,16z"></path> 			<path d="M417.656,112h-16c-4.408,0-8-3.584-8-8h-16c0,13.232,10.768,24,24,24v16h16v-16c13.232,0,24-10.768,24-24 				s-10.768-24-24-24h-16c-4.408,0-8-3.584-8-8s3.592-8,8-8h16c4.408,0,8,3.584,8,8h16c0-13.232-10.768-24-24-24V32h-16v16 				c-13.232,0-24,10.768-24,24s10.768,24,24,24h16c4.408,0,8,3.584,8,8S422.064,112,417.656,112z"></path> 			<path d="M1.656,360c0,22.056,17.944,40,40,40h168v-16h-168c-13.232,0-24-10.768-24-24v-24h192v-16h-208V360z"></path> 			<path d="M17.656,64h224v112h16V40c0-22.056-17.944-40-40-40h-176c-22.056,0-40,17.944-40,40v264h16V64z M17.656,40 				c0-13.232,10.768-24,24-24h176c13.232,0,24,10.768,24,24v8h-224V40z"></path> 			<rect x="97.656" y="352" width="64" height="16"></rect> 			<path d="M225.656,496h19.312l20.688-20.688l24,24l24-24l24,24l24-24l24,24l24-24l24,24l24-24L478.344,496h19.312V192h-272V496z 				 M241.656,208h240v268.688l-24-24l-24,24l-24-24l-24,24l-24-24l-24,24l-24-24l-24,24l-24-24l-24,24V208z"></path> 			<path d="M465.656,368h-208v64h208V368z M289.656,416h-16v-32h16V416z M321.656,416h-16v-32h16V416z M353.656,416h-16v-32h16V416z 				 M385.656,416h-16v-32h16V416z M417.656,416h-16v-32h16V416z M449.656,416h-16v-32h16V416z"></path> 			<rect x="257.656" y="224" width="16" height="16"></rect> 			<rect x="289.656" y="224" width="176" height="16"></rect> 			<rect x="449.656" y="320" width="16" height="16"></rect> 			<rect x="257.656" y="320" width="176" height="16"></rect> 			<rect x="257.656" y="288" width="208" height="16"></rect> 			<rect x="257.656" y="256" width="208" height="16"></rect> 		</g> 	</g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
            <span>Emissão de cupom fiscal</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section4Ref)}>
        <svg fill="#7300cc" id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m498.942 353.018h-69.752v-114.744c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v114.744c-15.36 0-113.903 0-130.323 0v-32.5c0-4.143-3.357-7.5-7.5-7.5h-75.311c0-9.222 0-163.488 0-178.789h85.179v30.854c0 6.604 5.372 11.976 11.976 11.976h18.824c6.604 0 11.977-5.372 11.977-11.976v-30.854h85.179v74.059c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-76c0-7.2-5.858-13.059-13.059-13.059-36.814 0-123.594 0-157.855 0v-105.978c0-7.2-5.858-13.059-13.059-13.059h-137.75c-7.201 0-13.059 5.858-13.059 13.059v47.416c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-45.475h45.545v30.854c0 6.604 5.372 11.976 11.976 11.976h18.825c6.604 0 11.976-5.372 11.976-11.976v-30.854h45.545v104.037h-49.719c-4.142 0-7.5 3.357-7.5 7.5v62.5h-76.647v-98.576c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v98.577h-44.162c-7.201 0-13.059 5.857-13.059 13.058v110.73h-24.131c-7.2 0-13.058 5.858-13.058 13.059v178.23c0 4.143 3.358 7.5 7.5 7.5h79.416c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-71.916v-168.789h105.545v30.853c0 6.604 5.373 11.977 11.976 11.977h18.824c6.604 0 11.976-5.373 11.976-11.977v-30.853h105.545v168.789h-151.964c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h387.597c4.143 0 7.5-3.357 7.5-7.5v-138.23c.001-7.2-5.857-13.059-13.057-13.059zm-316.212-309.997h-12.776v-27.828h12.776zm131.281 91.208v27.829h-12.776v-27.829zm-201.277 70.001h12.777v27.828h-12.777zm-60.545 0h45.545v30.853c0 6.604 5.373 11.976 11.976 11.976h18.825c6.604 0 11.976-5.372 11.976-11.976v-30.853h45.545v108.788c-28.991 0-109.636 0-133.867 0zm96.132 151.617h-12.776v-27.829h12.776zm248.501 12.171v27.829h-12.777v-27.829zm100.178 128.789h-213.133v-128.789h85.178v30.853c0 6.604 5.373 11.977 11.977 11.977h18.824c6.604 0 11.977-5.373 11.977-11.977v-30.853h85.178v128.789z"></path></g></svg>
            <span>Estoque em multilojas</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section5Ref)}>
          <svg fill="#7300cc" height="496pt" viewBox="0 0 496 496" width="496pt" xmlns="http://www.w3.org/2000/svg"><path d="m56 448h16v16h-16zm0 0"></path><path d="m88 448h16v16h-16zm0 0"></path><path d="m120 448h16v16h-16zm0 0"></path><path d="m496 414.550781v-45.109375l-20.191406-4.050781c-1.519532-4.78125-3.441406-9.414063-5.738282-13.847656l11.425782-17.144531-31.894532-31.894532-17.136718 11.433594c-4.441406-2.304688-9.074219-4.226562-13.855469-5.746094l-4.050781-20.191406h-38.558594v-97.136719c13.761719-3.574219 24-15.992187 24-30.863281v-25.601562l-40-96v-38.398438h-320v38.398438l-40 96v25.601562c0 14.871094 10.238281 27.289062 24 30.863281v305.136719h390.558594l4.042968-20.191406c4.78125-1.511719 9.414063-3.441406 13.855469-5.746094l17.136719 11.433594 31.894531-31.894532-11.425781-17.144531c2.304688-4.441406 4.21875-9.074219 5.738281-13.847656zm-182.0625-63.007812c-1.738281 3.34375-3.175781 6.824219-4.464844 10.367187-4.242187-11.535156-13.601562-20.703125-25.976562-24.421875l-51.496094-15.441406v-14.367187c9.792969-8.792969 16-21.503907 16-35.679688v-24c0-26.472656-21.527344-48-48-48s-48 21.527344-48 48v24c0 14.167969 6.207031 26.878906 16 35.679688v14.367187l-51.496094 15.449219c-17.046875 5.113281-28.503906 20.511718-28.503906 38.320312v40.183594h-16v-225.136719c2.574219.671875 5.222656 1.136719 8 1.136719 9.601562 0 18.128906-4.335938 24-11.054688 5.871094 6.71875 14.398438 11.054688 24 11.054688s18.128906-4.335938 24-11.054688c5.871094 6.71875 14.398438 11.054688 24 11.054688s18.128906-4.335938 24-11.054688c5.871094 6.71875 14.398438 11.054688 24 11.054688s18.128906-4.335938 24-11.054688c5.871094 6.71875 14.398438 11.054688 24 11.054688s18.128906-4.335938 24-11.054688c5.871094 6.71875 14.398438 11.054688 24 11.054688 2.777344 0 5.425781-.464844 8-1.136719v118.058594l-25.488281 25.484375zm-65.9375 24.457031v40h-96v-40h-16v40h-32v-40.183594c0-10.679687 6.871094-19.921875 17.105469-22.992187l52.621093-15.785157 26.273438 26.273438 26.28125-26.28125 52.613281 15.785156c7.65625 2.296875 13.425781 8.046875 15.847657 15.273438l-6.742188 1.359375v45.109375l7.214844 1.441406h-31.214844v-40zm-48-72c-17.648438 0-32-14.351562-32-32v-24c0-17.648438 14.351562-32 32-32s32 14.351562 32 32v24c0 17.648438-14.351562 32-32 32zm0 16c5.617188 0 10.984375-1.023438 16-2.800781v7.488281l-16 16-16-16v-7.488281c5.015625 1.777343 10.382812 2.800781 16 2.800781zm-123.097656-272-26.671875 80h-30.230469l33.335938-80zm269.761718 0 33.335938 80h-30.230469l-26.671875-80zm-10.664062 112c0 8.824219-7.175781 16-16 16s-16-7.175781-16-16v-16h32zm-224-16h32v16c0 8.824219-7.175781 16-16 16s-16-7.175781-16-16zm48 0h32v16c0 8.824219-7.175781 16-16 16s-16-7.175781-16-16zm48 0h32v16c0 8.824219-7.175781 16-16 16s-16-7.175781-16-16zm48 0h32v16c0 8.824219-7.175781 16-16 16s-16-7.175781-16-16zm76.902344-16h-30.878906l-19.800782-80h24.015625zm-67.148438-80 20 80h-30.394531l-6.664063-80zm-33.113281 0 6.6875 80h-31.328125v-80zm-40.640625 80h-31.304688l6.664063-80h24.640625zm-47.335938 0h-30.417968l20-80h17.066406zm-46.910156 0h-30.65625l26.664063-80h23.992187zm-1.753906 16v16c0 8.824219-7.175781 16-16 16s-16-7.175781-16-16v-16zm248 36.945312c4.167969 4.773438 9.679688 8.277344 16 9.917969v119.304688c-2.878906 1.128906-5.710938 2.351562-8.457031 3.769531l-7.542969-5.035156zm24-4.945312c-8.824219 0-16-7.175781-16-16v-16h32v16c0 8.824219-7.175781 16-16 16zm-24-160v16h-288v-16zm-328 144v-16h32v16c0 8.824219-7.175781 16-16 16s-16-7.175781-16-16zm24 30.863281c6.320312-1.640625 11.832031-5.144531 16-9.917969v251.054688h257.71875c.074219.152344.136719.304688.210938.457031l-11.425782 17.144531 30.417969 30.398438h-292.921875zm296.648438 289.136719 14.894531-9.9375c4.441406 2.304688 9.074219 4.226562 13.855469 5.746094l.839843 4.191406zm126.296874-75.152344-1.242187 4.886719c-1.703125 6.707031-4.351563 13.097656-7.863281 18.992187l-2.582032 4.328126 9.652344 14.488281-13.351562 13.351562-14.480469-9.648437-4.335937 2.578125c-5.902344 3.519531-12.292969 6.167969-19 7.871093l-4.878907 1.242188-3.421875 17.0625h-18.882812l-3.414063-17.054688-4.878906-1.242187c-6.707031-1.710937-13.097656-4.351563-19-7.871094l-4.335937-2.574219-14.480469 9.644532-13.351563-13.351563 9.65625-14.488281-2.585937-4.328125c-3.511719-5.894531-6.160157-12.285156-7.863281-18.992187l-1.242188-4.886719-17.0625-3.40625v-18.890625l17.054688-3.40625 1.242187-4.886719c1.703125-6.707031 4.351563-13.097656 7.863281-18.992187l2.582032-4.328126-9.652344-14.488281 13.351562-13.351562 14.480469 9.648437 4.335937-2.578125c5.902344-3.519531 12.292969-6.167969 19-7.871093l4.878907-1.242188 3.421875-17.0625h18.882812l3.414063 17.054688 4.878906 1.242187c6.707031 1.710937 13.097656 4.351563 19 7.871094l4.335937 2.574219 14.480469-9.644532 13.351563 13.351563-9.65625 14.488281 2.585937 4.328125c3.511719 5.894531 6.160157 12.285156 7.863281 18.992187l1.242188 4.886719 17.0625 3.40625v18.890625zm0 0"></path><path d="m392 336c-11.664062 0-22.878906 3.59375-32.425781 10.390625l9.28125 13.035156c6.824219-4.859375 14.824219-7.425781 23.144531-7.425781 22.054688 0 40 17.945312 40 40 0 8.320312-2.566406 16.320312-7.425781 23.144531l13.035156 9.28125c6.796875-9.554687 10.390625-20.761719 10.390625-32.425781 0-30.871094-25.121094-56-56-56zm0 0"></path><path d="m392 432c-22.054688 0-40-17.945312-40-40 0-8.320312 2.566406-16.320312 7.425781-23.144531l-13.035156-9.28125c-6.796875 9.554687-10.390625 20.761719-10.390625 32.425781 0 30.871094 25.121094 56 56 56 11.664062 0 22.878906-3.59375 32.425781-10.390625l-9.28125-13.035156c-6.824219 4.859375-14.824219 7.425781-23.144531 7.425781zm0 0"></path></svg>
            <span>Acompanhamento de vendedores</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section6Ref)}>
          <svg fill="#7300cc" id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m469.791 286.202c-1.293-2.477-3.854-4.029-6.648-4.029h-28.668c-4.143 0-7.5 3.357-7.5 7.5v52.033c0 4.143 3.357 7.5 7.5 7.5h43.005c4.143 0 7.5-3.357 7.5-7.5v-24.567c0-1.209-.292-2.399-.852-3.471zm.188 48.004h-28.005v-37.033h16.623l11.382 21.806z"></path><path d="m509.201 303.31-18.223-34.912c-4.265-8.171-12.639-13.246-21.854-13.246h-54.171v-51.077c0-6.027-4.903-10.931-10.93-10.931h-181.499v-61.305c0-10.096-8.213-18.309-18.309-18.309h-25.5c3.585-16.091 1.276-33.066-6.977-48.067-1.997-3.628-6.556-4.953-10.187-2.956-3.629 1.997-4.952 6.558-2.956 10.187 9.184 16.693 8.977 36.514-.554 53.021l-46.78 81.025-46.78-81.025c-9.765-16.912-9.765-37.104-.001-54.017 9.765-16.912 27.253-27.009 46.781-27.009 9.13 0 17.723 2.127 25.539 6.32 3.65 1.96 8.197.587 10.154-3.063 1.959-3.649.588-8.196-3.063-10.154-10.021-5.377-20.999-8.104-32.631-8.104-24.951 0-47.296 12.9-59.771 34.509-8.852 15.332-11.415 32.774-7.705 49.332h-25.475c-10.096.001-18.309 8.214-18.309 18.31v332.163c0 10.096 8.213 18.309 18.309 18.309h185.907c10.096 0 18.309-8.213 18.309-18.309v-16.67c3.685 1.387 7.664 2.168 11.829 2.168 17.796 0 32.409-13.845 33.659-31.328h4.387c1.25 17.483 15.863 31.328 33.659 31.328 17.795 0 32.408-13.845 33.658-31.328h70.304c1.25 17.483 15.863 31.328 33.659 31.328s32.409-13.845 33.659-31.328h20.3c7.919 0 14.361-6.442 14.361-14.361v-89.093c0-3.957-.968-7.902-2.799-11.408zm-301.677 160.692c0 1.824-1.484 3.309-3.309 3.309h-185.906c-1.824 0-3.309-1.484-3.309-3.309v-44.011h59.055c3.058 17.775 18.573 31.346 37.208 31.346s34.149-13.571 37.207-31.346h59.055v44.011zm-118.084-44.011h43.645c-2.781 9.433-11.501 16.346-21.822 16.346-10.322 0-19.043-6.913-21.823-16.346zm118.084-15h-192.524v-273.152c0-1.824 1.484-3.309 3.309-3.309h30.713c.763 1.58 1.581 3.144 2.471 4.685l35.382 61.285h-18.351c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h27.011l5.139 8.9c2.177 3.771 6.235 6.114 10.59 6.113 4.354 0 8.412-2.344 10.587-6.113l5.139-8.9h27.01c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-18.35l35.384-61.285c.889-1.539 1.706-3.103 2.468-4.685h30.715c1.824 0 3.309 1.484 3.309 3.309v273.152zm15-136.32h137.828v32.029h-137.828zm11.83 165.829c-4.482 0-8.599-1.585-11.829-4.218v-29.076c3.23-2.633 7.347-4.218 11.829-4.218 10.342 0 18.756 8.414 18.756 18.756s-8.415 18.756-18.756 18.756zm71.705 0c-10.342 0-18.756-8.414-18.756-18.756s8.414-18.756 18.756-18.756 18.755 8.414 18.755 18.756-8.414 18.756-18.755 18.756zm137.621 0c-10.342 0-18.756-8.414-18.756-18.756s8.414-18.756 18.756-18.756 18.756 8.414 18.756 18.756-8.415 18.756-18.756 18.756zm53.32-31.328h-22.002c-4.997-12.403-17.148-21.184-31.318-21.184s-26.321 8.781-31.318 21.184h-74.986c-4.997-12.403-17.147-21.184-31.317-21.184s-26.321 8.781-31.318 21.184h-9.069c-4.997-12.403-17.148-21.184-31.318-21.184-4.165 0-8.144.781-11.829 2.168v-7.928h127.475c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-127.476v-45.528h140.328c6.893 0 12.5-5.607 12.5-12.5v-37.029c0-6.893-5.607-12.5-12.5-12.5h-140.328v-45.527h177.429v153.085h-14.953c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h112zm0-41.943h-82.046v-91.077h54.17c3.608 0 6.887 1.987 8.557 5.187l18.224 34.914c.717 1.372 1.096 2.917 1.096 4.466v46.51z"></path><path d="m111.263 71.618c-16.286 0-29.536 13.25-29.536 29.537 0 16.286 13.25 29.536 29.536 29.536s29.536-13.25 29.536-29.536c0-16.287-13.25-29.537-29.536-29.537zm0 44.073c-8.016 0-14.536-6.521-14.536-14.536s6.521-14.537 14.536-14.537 14.536 6.521 14.536 14.537-6.521 14.536-14.536 14.536z"></path><path d="m169 238.214h-115.475c-6.893 0-12.5 5.607-12.5 12.5v115.476c0 6.893 5.607 12.5 12.5 12.5h115.475c6.893 0 12.5-5.607 12.5-12.5v-30.19c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v27.689h-110.475v-110.475h31.182v17.191c0 5.79 4.71 10.5 10.5 10.5h27.111c5.79 0 10.5-4.71 10.5-10.5v-17.191h31.182v47.786c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-50.286c0-6.893-5.607-12.5-12.5-12.5zm-48.682 27.691h-18.111v-12.691h18.111z"></path><path d="m111.263 335.006c4.143 0 7.5-3.357 7.5-7.5v-15.367l.808.936c1.483 1.719 3.576 2.601 5.682 2.601 1.735 0 3.479-.599 4.896-1.821 3.136-2.705 3.485-7.441.779-10.578l-13.986-16.213c-1.425-1.651-3.497-2.601-5.679-2.601-2.181 0-4.254.949-5.679 2.601l-13.987 16.213c-2.706 3.137-2.356 7.872.779 10.578 3.135 2.705 7.871 2.356 10.578-.779l.809-.937v15.368c0 4.141 3.357 7.499 7.5 7.499z"></path><path d="m96.096 352.994h30.334c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-30.334c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5z"></path><circle cx="186.5" cy="146.5" r="7.5"></circle></g></g></svg>
            <span>Controle de expedição</span>
        </div>
       </div>
      </S.Main>

      <S.Main3 ref={section1Ref}>
        <div className="left">
         <span>
          <strong>Sistema de Frente de Caixa </strong>  no Celular
         </span>
         
         <p>
          A Blue Mobi oferece um <strong>Sistema de Caixa PDV completo,</strong>
          permitindo que você realize vendas rápidas diretamente do seu celular,
          sem precisar estar em um ponto fixo da loja.
          Isso possibilita realizar vendas à domicílio ou permitir que sua equipe de
          vendas se mova livremente pela loja, fechando negócios e aumentando o faturamento!
          Para facilitar ainda mais, a <strong>leitura de código de barras </strong> torna as operações muito mais ágeis!
         </p>

         <button  onClick={()=> abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
        </div>

        <div className="right">
         <img src={Image2} alt="imagem" />
        </div>
      </S.Main3>

      <S.Main3 ref={section2Ref}>
        <div className="left">
        <img src={Image3} alt="imagem" />
         
        </div>

        <div className="right">
         <span>
         Lançamento de <strong>Pedidos e Orçamentos</strong> de Forma Eficiente
         </span>
         
         <p>
          Nada é mais frustrante do que deixar um cliente esperando ou prometer
          enviar um orçamento depois, certo? Para atender à rotina cada vez mais dinâmica de
          quem tem uma loja ou presta serviços,
          a Blue ERP oferece controle financeiro e consulta rápida de produtos,
          garantindo um atendimento mais ágil.
         </p>

         <button  onClick={()=> abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
        </div>
      </S.Main3>

      <S.Main3 ref={section3Ref}>
        <div className="left">
         <span>
          Emissão de <strong>Cupom Fiscal</strong>
         </span>
         
         <p>
          Uma das maiores preocupações de quem trabalha com vendas é a 
          emissão de cupons fiscais. Mas quem já conhece as funcionalidades
          da Blue ERP sabe que isso não é mais um problema!
          Agora, com a conexão online, você pode gerar automaticamente os cupons fiscais das suas vendas, 
          eliminando a necessidade de digitar os dados de clientes e produtos novamente.
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
          Controle de <strong>Estoque em Multilojas</strong>
         </span>
         
         <p>
          Um recurso poderoso do nosso Software ERP Mobile é o controle de estoque para multilojas.
          Com ele, você pode gerenciar as movimentações
          {'(entradas e saídas)'} de diferentes depósitos diretamente do seu celular,
          com toda a comodidade.
         </p>

         <button  onClick={()=> abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
        </div>
      </S.Main3>

      <S.Main3 ref={section5Ref}>
        <div className="left">
         <span>
         Painel de <strong>Acompanhamento de Metas</strong> dos Vendedores
         </span>
         
         <p>
         Já imaginou acompanhar em tempo real as vendas da sua empresa sem precisar estar presente?
         Com a Blue Mobi, você tem acesso a um recurso poderoso para a gestão empresarial,
         que permite monitorar as metas de vendas de cada membro da sua equipe com facilidade e,
         é claro, ficar por dentro do percentual total de vendas realizadas!
         </p>

         <button  onClick={()=> abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
        </div>

        <div className="right">
         <img src={Image6} alt="imagem" />
        </div>
      </S.Main3>

      <S.Main3 ref={section6Ref}>
        <div className="left">
        <img src={Image7} alt="imagem" />
        </div>

        <div className="right">
        
         <span>
         <strong>Controle</strong> de Expedição
         </span>
         
         <p>
         Imagine poder verificar todos os seus pedidos pelo celular!
         Com uma interface moderna e prática,
         a Blue Mobi torna o controle de expedição mais ágil,
         garantindo que as entregas sejam feitas pontualmente e mantendo 
         a organização dos seus estoques. 
         Não perca tempo, venha descobrir uma nova forma de gerenciar sua operação!
         </p>

         <button  onClick={()=> abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
        </div>
      </S.Main3>

      <Footer/>
     </S.Container>
    )
}