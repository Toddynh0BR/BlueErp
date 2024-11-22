import * as S from "./style";

import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";


import Set from "../assets/bottom-set.svg";
import Image1 from "../assets/top-image-gestao-de-compras.svg";
import Image2 from "../assets/compras-ordem-de-compra.svg";
import Image3 from "../assets/compras-notas-de-entrada.svg";
import Image4 from "../assets/compras-consulta-cnpj.svg";
import Image5 from "../assets/compras-relatorios.svg";

export function GestaoCompras(){
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
         Sistema de <strong> Gestão de Compras </strong> que Evolui com a Sua Empresa!
    
        </h2>

        <p>
         Tenha uma gestão de compras eficiente e organizada, garantindo as melhores negociações e ampliando sua lucratividade. Com a BLUE ERP,
         você adquire pelo melhor preço e impulsiona o crescimento do seu negócio.
        </p>

        <button  onClick={()=> abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
       </div>

       <div className="right">
        <img src={Image1} alt="Image" />
       </div>
       </div>

       <div className="Bottom">
        <div className="card" onClick={() => handleScrollToSection(section1Ref)}>
        <svg fill="#7300cc" id="Layer_3" enable-background="new 0 0 64 64" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m62.707 48.793-11.543-11.543.836-.836.293.293c.195.195.451.293.707.293s.512-.098.707-.293l3-3c.391-.391.391-1.023 0-1.414l-5.707-5.707v-18.586c0-3.86-3.141-7-7-7h-38c-2.757 0-5 2.243-5 5v8c0 .552.447 1 1 1h7v43c0 2.757 2.243 5 5 5h36c2.757 0 5-2.243 5-5v-2c0-.552-.447-1-1-1h-3v-10.086l7.793 7.793c.195.195.451.293.707.293s.512-.098.707-.293l2.5-2.5c.391-.391.391-1.023 0-1.414zm-17.707-8.207-3.586-3.586 5.586-5.586 3.586 3.586zm-.414 2.414-1.586 1.586-5.586-5.586 1.586-1.586zm8.414-8.414-5.586-5.586 1.586-1.586 5.586 5.586zm-44-21.586h-6v-7c0-1.654 1.346-3 3-3s3 1.346 3 3zm44 45c0 1.654-1.346 3-3 3h-32.002c.629-.836 1.002-1.875 1.002-3v-1h34zm-4-3h-31c-.553 0-1 .448-1 1v2c0 1.654-1.346 3-3 3s-3-1.346-3-3v-52c0-1.13-.391-2.162-1.026-3h34.026c2.757 0 5 2.243 5 5v17c-.256 0-.512.098-.707.293l-3 3c-.391.391-.391 1.023 0 1.414l.293.293-5.586 5.586-.293-.293c-.391-.391-1.023-.391-1.414 0l-3 3c-.391.391-.391 1.023 0 1.414l7 7c.195.195.451.293.707.293s.512-.098.707-.293l3-3c.391-.391.391-1.023 0-1.414l-.293-.293.836-.836 1.75 1.75zm10.5-4.414-10.836-10.836 1.086-1.086 10.836 10.836z"></path><path d="m14 19h33v2h-33z"></path><path d="m14 27h29v2h-29z"></path><path d="m14 23h33v2h-33z"></path><path d="m14 11h33v2h-33z"></path><path d="m14 7h33v2h-33z"></path><path d="m14 15h33v2h-33z"></path><path d="m14 31h27v2h-27z"></path><path d="m22 35c-4.963 0-9 4.038-9 9s4.037 9 9 9 9-4.038 9-9-4.037-9-9-9zm0 16c-3.859 0-7-3.14-7-7s3.141-7 7-7 7 3.14 7 7-3.141 7-7 7z"></path><path d="m22 39c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z"></path><path d="m39 49c0-.44-.288-.83-.71-.957-.42-.128-.878.035-1.122.402l-.336.504c-.856 1.284-2.289 2.051-3.832 2.051v2c1.745 0 3.392-.684 4.612-1.875.708 1.125 1.962 1.875 3.388 1.875h4v-2h-4c-1.103 0-2-.897-2-2z"></path></g></svg>
            <span>Cotações Online</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section2Ref)}>
          <svg fill="#7300cc" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"  xml:space="preserve"> <g> 	<g> 		<path d="M480.451,40.081H31.549C14.152,40.081,0,54.233,0,71.629v304.613c0,17.396,14.152,31.548,31.549,31.548h151.826 			l-6.141,49.129H151.79c-4.143,0-7.5,3.358-7.5,7.5c0,4.142,3.357,7.5,7.5,7.5h208.42c4.143,0,7.5-3.358,7.5-7.5 			c0-4.142-3.357-7.5-7.5-7.5h-25.443l-6.142-49.129h151.826c17.396,0,31.549-14.152,31.549-31.548V71.629 			C512,54.233,497.848,40.081,480.451,40.081z M192.351,456.919l6.142-49.129h27.603l2.708,10.83 			c3.126,12.503,14.31,21.234,27.197,21.234c12.887,0,24.071-8.731,27.197-21.234l2.708-10.83h27.603l6.14,49.129H192.351z 			 M241.557,407.79h28.885l-1.798,7.192c-1.453,5.813-6.652,9.872-12.645,9.872s-11.191-4.06-12.645-9.872L241.557,407.79z 			 M497,376.242L497,376.242c0,9.125-7.424,16.548-16.549,16.548H31.549c-9.125,0-16.549-7.423-16.549-16.548V71.629 			c0-9.125,7.424-16.548,16.549-16.548h448.902c9.125,0,16.549,7.423,16.549,16.548V376.242z"></path> 	</g> </g> <g> 	<g> 		<path d="M424.338,72.146H39.564c-4.143,0-7.5,3.357-7.5,7.5v288.58c0,4.143,3.357,7.5,7.5,7.5h16.033c4.143,0,7.5-3.357,7.5-7.5 			c0.001-4.142-3.357-7.5-7.499-7.5h-8.533V87.146h377.273c4.143,0,7.5-3.358,7.5-7.5C431.838,75.503,428.481,72.146,424.338,72.146 			z"></path> 	</g> </g> <g> 	<g> 		<path d="M472.436,72.146h-16.033c-4.143,0-7.5,3.357-7.5,7.5c0,4.142,3.357,7.5,7.5,7.5h8.533v273.58H87.662 			c-4.143,0-7.5,3.358-7.5,7.5c0,4.143,3.357,7.5,7.5,7.5h384.773c4.143,0,7.5-3.357,7.5-7.5V79.646 			C479.936,75.503,476.578,72.146,472.436,72.146z"></path> 	</g> </g> <g> 	<g> 		<path d="M358.1,155.184c-1.348-1.723-3.381-2.771-5.565-2.87l-176.354-8.017c-0.138-0.006-0.273-0.009-0.412-0.007 			c-1.044-3.427-3.25-6.399-6.236-8.391l-21.597-14.398c-3.446-2.297-8.103-1.366-10.4,2.081c-2.297,3.447-1.366,8.103,2.08,10.4 			l21.596,14.396c0.102,0.068,0.177,0.171,0.211,0.289l27.509,96.281c0.858,3.002,2.27,5.7,4.083,8.03l-10.065,20.13 			c-2.423,4.845-2.169,10.488,0.679,15.096c1.033,1.671,2.343,3.094,3.848,4.234c-1.97,3.439-3.103,7.417-3.103,11.657 			c0,12.976,10.557,23.532,23.532,23.532c12.975,0,23.532-10.557,23.532-23.532c0-3.009-0.574-5.885-1.608-8.532h68.377 			c-1.034,2.647-1.608,5.523-1.608,8.532c0,12.976,10.557,23.532,23.532,23.532c12.975,0,23.532-10.557,23.532-23.532 			c0-3.764-0.893-7.321-2.471-10.479c1.514-1.372,2.471-3.348,2.471-5.553c0-4.142-3.357-7.5-7.5-7.5H196.825 			c-0.107,0-0.288,0-0.439-0.245c-0.151-0.244-0.07-0.405-0.022-0.502l9.272-18.543c1.887,0.485,3.853,0.747,5.865,0.747 			c0.927,0,1.863-0.055,2.805-0.165l105.386-12.398c13.611-1.602,24.562-11.706,27.25-25.146l12.606-63.034 			C359.977,159.132,359.448,156.907,358.1,155.184z M320.129,295.565c4.705,0,8.532,3.828,8.532,8.532 			c0,4.705-3.827,8.532-8.532,8.532s-8.532-3.827-8.532-8.532S315.424,295.565,320.129,295.565z M207.904,295.565 			c4.705,0,8.532,3.827,8.532,8.532c0,4.705-3.827,8.532-8.532,8.532c-4.705,0-8.532-3.827-8.532-8.532 			S203.199,295.565,207.904,295.565z M189.512,192.387l-9.399-32.895l29.985,1.363l5.199,31.532H189.512z M212.554,246.958 			c-4.182,0.492-8.047-2.087-9.201-6.13l-9.555-33.441h23.972l6.301,38.216L212.554,246.958z M256.517,241.786l-17.532,2.063 			l-6.011-36.461h23.543V241.786z M256.517,192.387H230.5l-5.084-30.835l31.101,1.414V192.387z M294.499,237.317l-22.982,2.704 			v-32.634h25.691L294.499,237.317z M298.566,192.387h-27.049v-28.74l29.529,1.342L298.566,192.387z M332.232,221.371 			c-1.41,7.048-7.154,12.349-14.293,13.189l-8.217,0.967l2.547-28.139h22.759L332.232,221.371z M338.029,192.387h-24.401 			l2.418-26.716l27.08,1.231L338.029,192.387z"></path> 	</g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
            <span>Ordem de compra</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section3Ref)}>
          <svg fill="#7300cc" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"  xml:space="preserve"> <g> 	<g> 		<path d="M354.338,34.205h-61.71c-3.354-9.93-12.752-17.102-23.8-17.102h-17.547C243.359,6.451,230.813,0,217.521,0 			s-25.839,6.451-33.76,17.102h-17.547c-11.048,0-20.446,7.172-23.8,17.102H80.701c-18.566,0-33.67,15.105-33.67,33.67v359.148 			c0,18.566,15.105,33.67,33.67,33.67h171.023c4.427,0,8.017-3.589,8.017-8.017c0-4.427-3.589-8.017-8.017-8.017H80.701 			c-9.725,0-17.637-7.912-17.637-17.637V67.875c0-9.725,7.912-17.637,17.637-17.637h60.394v26.188c0,4.427,3.589,8.017,8.017,8.017 			H285.93c4.427,0,8.017-3.589,8.017-8.017V50.238h60.391c9.725,0,17.637,7.912,17.637,17.637v230.881 			c0,4.427,3.589,8.017,8.017,8.017c4.427,0,8.017-3.589,8.017-8.017V67.875C388.008,49.309,372.904,34.205,354.338,34.205z 			 M277.914,68.409H157.129V42.252c0-0.011,0.001-0.02,0.001-0.031c0-0.005-0.001-0.011-0.001-0.015 			c0.009-5.004,4.08-9.071,9.085-9.071h21.846c2.854,0,5.493-1.517,6.929-3.985c4.781-8.213,13.204-13.117,22.532-13.117 			s17.751,4.904,22.532,13.117c1.435,2.467,4.075,3.985,6.929,3.985h21.846c4.999,0,9.067,4.059,9.085,9.055 			c0,0.011-0.001,0.02-0.001,0.031c0,0.021,0.003,0.041,0.003,0.062V68.409z"></path> 	</g> </g> <g> 	<g> 		<path d="M251.722,410.455H97.269V84.443h17.64c4.427,0,8.017-3.589,8.017-8.017s-3.589-8.017-8.017-8.017H89.253 			c-4.427,0-8.017,3.589-8.017,8.017v342.046c0,4.427,3.589,8.017,8.017,8.017h162.47c4.427,0,8.017-3.589,8.017-8.017 			C259.739,414.044,256.15,410.455,251.722,410.455z"></path> 	</g> </g> <g> 	<g> 		<path d="M345.787,68.409h-25.653c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h17.637v214.311 			c0,4.427,3.589,8.017,8.017,8.017s8.017-3.589,8.017-8.017V76.426C353.804,71.999,350.214,68.409,345.787,68.409z"></path> 	</g> </g> <g> 	<g> 		<path d="M371.44,324.944c-51.572,0-93.528,41.956-93.528,93.528S319.869,512,371.44,512s93.528-41.956,93.528-93.528 			S423.012,324.944,371.44,324.944z M371.44,495.967c-42.731,0-77.495-34.764-77.495-77.495s34.764-77.495,77.495-77.495 			s77.495,34.764,77.495,77.495S414.172,495.967,371.44,495.967z"></path> 	</g> </g> <g> 	<g> 		<path d="M217.607,34.205h-0.086c-4.427,0-7.974,3.589-7.974,8.017c0,4.427,3.631,8.017,8.059,8.017 			c4.427,0,8.017-3.589,8.017-8.017C225.624,37.794,222.035,34.205,217.607,34.205z"></path> 	</g> </g> <g> 	<g> 		<path d="M419.865,387.15c-3.13-3.131-8.207-3.131-11.337,0l-54.19,54.19l-28.536-28.536c-3.131-3.131-8.207-3.131-11.337,0 			c-3.131,3.131-3.131,8.207,0,11.337l34.205,34.205c1.565,1.565,3.617,2.348,5.668,2.348s4.103-0.782,5.668-2.348l59.858-59.858 			C422.995,395.356,422.995,390.28,419.865,387.15z"></path> 	</g> </g> <g> 	<g> 		<path d="M182.781,177.309v-32.338c11.295,1.934,18.171,7.688,18.171,11.889c0,4.427,3.589,8.017,8.017,8.017 			s8.017-3.589,8.017-8.017c0-14.171-14.492-25.621-34.205-28.092v-1.036c0-4.427-3.589-8.017-8.017-8.017s-8.017,3.589-8.017,8.017 			v1.036c-19.713,2.47-34.205,13.92-34.205,28.092c0,20.074,18.829,27.788,34.205,32.461v32.338 			c-11.295-1.934-18.171-7.688-18.171-11.889c0-4.427-3.589-8.017-8.017-8.017s-8.017,3.589-8.017,8.017 			c0,14.171,14.492,25.621,34.205,28.092v1.036c0,4.427,3.589,8.017,8.017,8.017s8.017-3.589,8.017-8.017v-1.036 			c19.713-2.47,34.205-13.92,34.205-28.092C216.985,189.697,198.157,181.982,182.781,177.309z M166.747,172.411 			c-13.524-4.713-18.171-8.963-18.171-15.551c0-2.535,2.236-5.335,6.134-7.68c3.294-1.982,7.473-3.415,12.037-4.198V172.411z 			 M194.818,217.45c-3.294,1.982-7.473,3.415-12.037,4.198v-27.429c13.524,4.713,18.171,8.963,18.171,15.551 			C200.952,212.306,198.716,215.105,194.818,217.45z"></path> 	</g> </g> <g> 	<g> 		<path d="M294.48,136.818h-42.756c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h42.756 			c4.427,0,8.017-3.589,8.017-8.017S298.908,136.818,294.48,136.818z"></path> 	</g> </g> <g> 	<g> 		<path d="M277.378,171.023h-25.653c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h25.653 			c4.427,0,8.017-3.589,8.017-8.017S281.805,171.023,277.378,171.023z"></path> 	</g> </g> <g> 	<g> 		<path d="M294.48,205.228h-42.756c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h42.756 			c4.427,0,8.017-3.589,8.017-8.017S298.908,205.228,294.48,205.228z"></path> 	</g> </g> <g> 	<g> 		<path d="M157.662,282.188H140.56c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h17.102 			c4.427,0,8.017-3.589,8.017-8.017S162.089,282.188,157.662,282.188z"></path> 	</g> </g> <g> 	<g> 		<path d="M157.662,350.597H140.56c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h17.102 			c4.427,0,8.017-3.589,8.017-8.017S162.089,350.597,157.662,350.597z"></path> 	</g> </g> <g> 	<g> 		<path d="M157.662,316.393H140.56c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h17.102 			c4.427,0,8.017-3.589,8.017-8.017S162.089,316.393,157.662,316.393z"></path> 	</g> </g> <g> 	<g> 		<path d="M294.48,282.188H191.866c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017H294.48 			c4.427,0,8.017-3.589,8.017-8.017S298.908,282.188,294.48,282.188z"></path> 	</g> </g> <g> 	<g> 		<path d="M268.827,350.597h-76.96c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h76.96 			c4.427,0,8.017-3.589,8.017-8.017S273.254,350.597,268.827,350.597z"></path> 	</g> </g> <g> 	<g> 		<path d="M294.48,316.393H191.866c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017H294.48 			c4.427,0,8.017-3.589,8.017-8.017S298.908,316.393,294.48,316.393z"></path> 	</g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
            <span>Notas de entrada</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section4Ref)}>
          <svg fill="#7300cc" id="_x33_0" enable-background="new 0 0 64 64" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m61 27c1.103 0 2-.897 2-2v-10c0-1.103-.897-2-2-2h-23.347c-2.858-7.203-9.854-12-17.653-12-10.477 0-19 8.523-19 19 0 8.843 6.082 16.273 14.276 18.381-.177.517-.276 1.061-.276 1.619v20c0 1.654 1.346 3 3 3h4c1.654 0 3-1.346 3-3v-20c0-.555-.097-1.096-.273-1.611 2.246-.577 4.37-1.559 6.273-2.913v7.524c0 1.103.897 2 2 2h28c1.103 0 2-.897 2-2v-10c0-1.103-.897-2-2-2h-25.519c.884-1.24 1.602-2.581 2.164-4zm-36 0h5.948c-2.369 3.688-6.505 6-10.948 6-7.168 0-13-5.832-13-13s5.832-13 13-13c4.443 0 8.579 2.312 10.948 6h-5.948c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2zm0-2v-10h12v10zm36.001 0h-22.001v-10h22zm-39.001 36h-4c-.551 0-1-.449-1-1v-15h6v15c0 .551-.449 1-1 1zm1-21v3h-6v-3c0-.426.095-.838.265-1.22.896.13 1.804.22 2.735.22.923 0 1.834-.086 2.736-.217.17.381.264.792.264 1.217zm10-7h14v10h-14zm28 10h-12v-10h12zm-28.063-11.994c-1.052.034-1.897.879-1.93 1.932-3.072 2.615-6.959 4.062-11.007 4.062-9.374 0-17-7.626-17-17s7.626-17 17-17c6.711 0 12.765 3.965 15.493 10h-2.234c-2.583-4.877-7.713-8-13.259-8-8.271 0-15 6.729-15 15s6.729 15 15 15c5.546 0 10.676-3.123 13.259-8h2.228c-.653 1.447-1.511 2.786-2.55 4.006z"></path><path d="m57 19h2v2h-2z"></path><path d="m53 19h2v2h-2z"></path><path d="m49 19h2v2h-2z"></path><path d="m45 19h2v2h-2z"></path><path d="m41 19h2v2h-2z"></path><path d="m34.293 16.293-5.293 5.293-1.293-1.293-1.414 1.414 2.707 2.707 6.707-6.707z"></path><path d="m57 49h-28c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h28c1.103 0 2-.897 2-2v-10c0-1.103-.897-2-2-2zm-28 2h12v10h-12zm14 10v-10h14l.001 10z"></path><path d="m53 55h2v2h-2z"></path><path d="m49 55h2v2h-2z"></path><path d="m45 55h2v2h-2z"></path><path d="m35 37h2v2h-2z"></path><path d="m39 37h2v2h-2z"></path><path d="m43 37h2v2h-2z"></path><path d="m38.293 52.293-5.293 5.293-1.293-1.293-1.414 1.414 2.707 2.707 6.707-6.707z"></path><path d="m51.293 40.293 1.414 1.414 2.293-2.293 2.293 2.293 1.414-1.414-2.293-2.293 2.293-2.293-1.414-1.414-2.293 2.293-2.293-2.293-1.414 1.414 2.293 2.293z"></path></g></svg>
            <span>Consulta de CNPJ</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section5Ref)}>
          <svg fill="#7300cc"  xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><g><path d="M472,128H461.61a72,72,0,1,0-107.22,0H256V48a8,8,0,0,0-8-8H216a8,8,0,0,0-8,8v80h-8V16a8,8,0,0,0-8-8H160a8,8,0,0,0-8,8V128h-8V72a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H40A32.036,32.036,0,0,0,8,160V400a32.036,32.036,0,0,0,32,32H204.9l-10.67,32H168a8,8,0,0,0-8,8v16H80a8,8,0,0,0,0,16H432a8,8,0,0,0,0-16H352V472a8,8,0,0,0-8-8H317.77L307.1,432H472a32.036,32.036,0,0,0,32-32V160A32.036,32.036,0,0,0,472,128ZM416,24.58A56.11,56.11,0,0,1,463.42,72H416ZM411.31,88h52.11a55.962,55.962,0,0,1-88.94,36.83ZM352,80a56.086,56.086,0,0,1,48-55.42V76.69l-36.83,36.83A55.708,55.708,0,0,1,352,80ZM224,56h16V208H224Zm-24,88h8v64h-8ZM168,24h16V208H168ZM144,144h8v64h-8ZM112,80h16V208H112ZM336,480v8H176v-8ZM211.1,464l10.67-32h68.46l10.67,32ZM488,400a16.021,16.021,0,0,1-16,16H40a16.021,16.021,0,0,1-16-16V384H488Zm0-32H24V160a16.021,16.021,0,0,1,16-16H96v64H88V160a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56a8,8,0,0,0,8,8H304a8,8,0,0,0,8-8V160a8,8,0,0,0-8-8H272a8,8,0,0,0-8,8v48h-8V144H375.08a71.733,71.733,0,0,0,65.84,0H472a16.021,16.021,0,0,1,16,16ZM72,168v40H56V168Zm208,40V168h16v40Z"></path><path d="M96,392H48a8,8,0,0,0,0,16H96a8,8,0,0,0,0-16Z"></path><path d="M128,392h-8a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Z"></path><path d="M344,208a7.974,7.974,0,0,0,5.657-2.343L379.313,176H448a8,8,0,0,0,0-16H376a8,8,0,0,0-5.657,2.343l-32,32A8,8,0,0,0,344,208Z"></path><path d="M448,296a24,24,0,0,0-20.75,11.97L343.5,259.11a24,24,0,0,0-47.11.6l-84.28,63.21a23.979,23.979,0,0,0-41.48,2.18l-83.3-34.71a24.01,24.01,0,1,0-1.96,16.51l83.3,34.71a23.995,23.995,0,0,0,46.94-1.32l84.28-63.21a23.973,23.973,0,0,0,40.86-1.05l83.75,48.86A24,24,0,1,0,448,296Zm-376,.04a8.02,8.02,0,1,1,0-.04ZM192,344a8.011,8.011,0,0,1-8-8v-.04a8,8,0,1,1,8,8.04Zm128-72a8,8,0,1,1,8-8A8.011,8.011,0,0,1,320,272Zm128,56a8,8,0,1,1,8-8A8.011,8.011,0,0,1,448,328Z"></path><path d="M384,344H328a8,8,0,0,0,0,16h56a8,8,0,0,0,0-16Z"></path><path d="M384,320H360a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"></path><path d="M48,248h88a8,8,0,0,0,0-16H48a8,8,0,0,0,0,16Z"></path><path d="M160,248h8a8,8,0,0,0,0-16h-8a8,8,0,0,0,0,16Z"></path></g></svg>
            <span>Relatórios de compra</span>
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
    <img src={Image1} alt="" />
  </div>

  <div className="right">
    <span>Cotações Online</span>
    <p>
      Com a Blue ERP, você conta com uma ferramenta poderosa para <strong>otimizar cotações</strong> e melhorar suas compras. Crie <strong>cotações</strong> e envie diretamente para o e-mail dos seus fornecedores, que podem responder aos custos da sua solicitação por meio de um <strong>formulário online</strong>.
      <br /><br />
      Depois de receber as cotações, você pode analisá-las no próprio sistema e transformar a melhor proposta em uma <strong>ordem de compra aprovada</strong>, trazendo mais praticidade e controle aos processos de compra da sua empresa.
    </p>
    <button onClick={() => abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
  </div>
  <img src={Set} alt="descer" className="bottom" onClick={() => handleScrollToSection(section2Ref)} />
</S.Main2>

<S.Main2 ref={section2Ref}>
  <div className="left">
    <span>Ordem de Compra</span>
    <p>
      As ordens de compra são documentos que autorizam a <strong>aquisição de mercadorias</strong> junto aos fornecedores. Na BLUE ERP, você pode cadastrar suas ordens de compra <strong>manualmente</strong> ou gerá-las a partir de uma cotação. Além disso, é possível <strong>enviar as ordens diretamente para o e-mail</strong> do fornecedor ou imprimir um modelo personalizado de acordo com suas preferências.
    </p>
    <button onClick={() => abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
  </div>
  <div className="right">
    <img src={Image2} alt="" />
  </div>
  <img src={Set} alt="descer" className="bottom" onClick={() => handleScrollToSection(section3Ref)} />
</S.Main2>

<S.Main2 ref={section3Ref}>
  <div className="left">
    <img src={Image3} alt="" />
  </div>

  <div className="right">
    <span>Nota de Entrada</span>
    <p>
      As <strong>Notas Fiscais de Entrada</strong> registram a compra de produtos, bens ou serviços por uma empresa. Com a BLUE ERP, você pode cadastrar cada NF de entrada recebida, seja gerando-a a partir de uma <strong>ordem de compra</strong> ou importando o arquivo XML enviado pelo seu fornecedor.
      <br /><br />
      O registro da nota de entrada é integrado diretamente ao <strong>setor financeiro</strong> e ao estoque, permitindo que você controle a entrada dos itens no estoque e as duplicatas a serem pagas com facilidade.
    </p>
    <button onClick={() => abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
  </div>
  <img src={Set} alt="descer" className="bottom" onClick={() => handleScrollToSection(section4Ref)} />
</S.Main2>

<S.Main2 ref={section4Ref}>
  <div className="left">
    <span>Consultar Notas Emitidas contra seu CNPJ</span>
    <p>
      Monitorar todas as <strong>notas fiscais emitidas</strong> para a sua empresa é essencial para evitar problemas futuros. Com a BLUE ERP, você pode acessar, diretamente no módulo de <strong>Gestão de Compras</strong>, todas as notas emitidas contra o seu CNPJ, garantindo um controle eficiente e tranquilo das suas transações.
    </p>
    <button onClick={() => abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
  </div>
  <div className="right">
    <img src={Image4} alt="" />
  </div>
  <img src={Set} alt="descer" className="bottom" onClick={() => handleScrollToSection(section5Ref)} />
</S.Main2>

<S.Main2 ref={section5Ref}>
  <div className="left">
    <img src={Image5} alt="" />
  </div>

  <div className="right">
    <span>Relatórios de Compras</span>
    <p>
      Seja para analisar seu <strong>Estoque Global</strong>, identificar o <strong>Estoque Crítico</strong>, monitorar as movimentações entre estoques ou reconciliar dados de saídas e receitas, a BLUE ERP oferece relatórios perfeitos para cada uma dessas operações. Esses relatórios organizam as informações de forma clara, permitindo um acompanhamento eficiente de tudo o que ocorre em seus armazéns.
      <br /><br />
      Além disso, você conta com relatórios de <strong>Previsão de Compra</strong>, Grade de Produtos, Inventário e Produtos com Lote e Validade. Com este último, é possível visualizar o saldo de cada produto armazenado, conforme a data de vencimento e o número do lote, evitando o risco de comercializar itens vencidos.
    </p>
    <button onClick={() => abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
  </div>
</S.Main2>


      <Footer/>
     </S.Container>
    )
}