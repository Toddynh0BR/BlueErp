import * as S from "./style";

import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";

import Set from "../assets/bottom-set.svg";
import Image1 from "../assets/top-image-crm.svg"
import Image2 from "../assets/dashboard-crm.svg";
import Image3 from "../assets/funil-de-vendas.svg";
import Image4 from "../assets/pipe-de-vendas.svg";
import Image5 from "../assets/historico-de-interacoes.svg";

export function GestaoCRM(){
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
        Transforme Seu Time de Vendas com <br />
        Nosso <strong>Módulo de CRM</strong>
        </h2>

        <p>
Tenha controle total para acompanhar de perto a evolução das suas oportunidades de negócios,  <br />
desde o cadastro inicial até a concretização da venda.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
        <img src={Image1} alt="Image" />
       </div>
       </div>

       <div className="Bottom">
        <div className="card" onClick={() => handleScrollToSection(section1Ref)}>
          <svg fill="#7300cc" id="Layer_5" enable-background="new 0 0 64 64" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m33 9c1.103 0 2 .897 2 2h2c0-2.206-1.794-4-4-4s-4 1.794-4 4v2c0 2.206 1.794 4 4 4s4-1.794 4-4h-2c0 1.103-.897 2-2 2s-2-.897-2-2v-2c0-1.103.897-2 2-2z"></path><path d="m44 7h-5v10h2v-4h3c.551 0 1 .449 1 1v3h2v-3c0-.771-.301-1.468-.78-2 .48-.532.78-1.229.78-2 0-1.654-1.346-3-3-3zm-3 4v-2h3c.551 0 1 .449 1 1s-.449 1-1 1z"></path><path d="m54.279 13h-.558l-2-6h-2.721v10h2v-5.838l1.279 3.838h3.442l1.279-3.838v5.838h2v-10h-2.721z"></path><path d="m5 21h2v2h-2z"></path><path d="m9 21h2v2h-2z"></path><path d="m13 21h2v2h-2z"></path><path d="m52 31h-16c-1.654 0-3 1.346-3 3v2c0 1.654 1.346 3 3 3v2c-1.654 0-3 1.346-3 3v2c0 1.654 1.346 3 3 3v2c-1.654 0-3 1.346-3 3v2c0 1.654 1.346 3 3 3h16c1.654 0 3-1.346 3-3v-2c0-1.654-1.346-3-3-3v-2c1.654 0 3-1.346 3-3v-2c0-1.654-1.346-3-3-3v-2c1.654 0 3-1.346 3-3v-2c0-1.654-1.346-3-3-3zm1 23v2c0 .552-.449 1-1 1h-16c-.551 0-1-.448-1-1v-2c0-.552.449-1 1-1h16c.551 0 1 .448 1 1zm-3-3h-12v-2h12zm3-7v2c0 .552-.449 1-1 1h-16c-.551 0-1-.448-1-1v-2c0-.552.449-1 1-1h16c.551 0 1 .448 1 1zm-3-3h-12v-2h12zm3-5c0 .552-.449 1-1 1h-16c-.551 0-1-.448-1-1v-2c0-.552.449-1 1-1h16c.551 0 1 .448 1 1z"></path><path d="m58 1h-28c-2.757 0-5 2.243-5 5v11h-21c-1.654 0-3 1.346-3 3v40c0 1.654 1.346 3 3 3h52c1.654 0 3-1.346 3-3v-37.101c2.279-.465 4-2.484 4-4.899v-12c0-2.757-2.243-5-5-5zm-54 18h21.101c.465 2.279 2.484 4 4.899 4h3.532l1.667 2h-32.199v-5c0-.551.449-1 1-1zm52 42h-52c-.551 0-1-.448-1-1v-33h33.865l.754.905c.58.696 1.432 1.095 2.338 1.095 1.31 0 2.419-.837 2.847-2h14.196v33c0 .552-.449 1-1 1zm-13-36v-2h14v2zm18-7c0 1.654-1.346 3-3 3h-17v4.957c0 .575-.468 1.043-1.043 1.043-.311 0-.603-.137-.802-.375l-4.687-5.625h-4.468c-1.654 0-3-1.346-3-3v-12c0-1.654 1.346-3 3-3h28c1.654 0 3 1.346 3 3z"></path><path d="m18 51c6.065 0 11-4.935 11-11s-4.935-11-11-11-11 4.935-11 11 4.935 11 11 11zm0-2c-2.122 0-4.071-.742-5.611-1.975l6.025-6.025h8.527c-.499 4.493-4.317 8-8.941 8zm7.025-14.611c1.036 1.295 1.723 2.878 1.916 4.611h-6.527zm-1.414-1.414-5.611 5.611-5.611-5.611c1.54-1.233 3.489-1.975 5.611-1.975s4.071.742 5.611 1.975zm-12.636 1.414 5.611 5.611-5.611 5.611c-1.233-1.54-1.975-3.489-1.975-5.611s.742-4.071 1.975-5.611z"></path><path d="m5 53h2v2h-2z"></path><path d="m9 53h22v2h-22z"></path><path d="m5 57h6v2h-6z"></path><path d="m13 57h18v2h-18z"></path></g></svg>
            <span>Dashboard de CRM</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section2Ref)}>
          <svg fill="#7300cc" id="Capa_1" enable-background="new 0 0 512.08 512.08" height="512" viewBox="0 0 512.08 512.08" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m442.591 153.797h-87.42c6.315-14.009 9.626-29.273 9.626-44.797 0-9.049-1.113-18.047-3.307-26.744-1.013-4.016-5.089-6.45-9.107-5.438-4.016 1.014-6.451 5.091-5.437 9.107 1.892 7.499 2.851 15.262 2.851 23.074 0 15.708-3.921 31.104-11.353 44.797h-48.242c4.138-5.287 6.549-11.563 6.549-18.297 0-16.506-14.433-30.296-33.5-33.36v-37.713c10.597 2.498 18.5 9.765 18.5 18.074 0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5c0-16.506-14.433-30.296-33.5-33.36v-11.64c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v11.494c-19.56 2.735-34.5 16.713-34.5 33.506s14.94 30.771 34.5 33.506v37.786c-11.096-2.265-19.5-9.723-19.5-18.292 0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5c0 6.733 2.411 13.01 6.549 18.297h-47.15c-7.432-13.693-11.353-29.088-11.353-44.797 0-51.832 42.168-94 94-94 31.219 0 60.33 15.451 77.871 41.331 2.324 3.429 6.988 4.325 10.417 2 3.429-2.323 4.324-6.987 2-10.416-20.336-30.003-54.088-47.915-90.288-47.915-60.103 0-109 48.897-109 109 0 15.524 3.311 30.788 9.626 44.797h-86.934c-12.407 0-22.5 10.094-22.5 22.5v13.321c0 11.169 8.182 20.46 18.867 22.203l54.455 61.285c2.751 3.096 7.492 3.377 10.588.625 3.097-2.751 3.376-7.492.625-10.588l-45.337-51.024h339.642l-128.072 143.28h-30.207c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h26.053l-.055 43.729c-.005 4.143 3.349 7.505 7.491 7.51h.009c4.138 0 7.495-3.352 7.5-7.49l.06-48.382 137.602-153.943c10.692-1.737 18.881-11.031 18.881-22.205v-13.321c0-12.406-10.093-22.5-22.5-22.5zm-160.84-18.297c0 8.31-7.903 15.576-18.5 18.074v-36.148c10.598 2.498 18.5 9.764 18.5 18.074zm-53-53c0-8.569 8.404-16.027 19.5-18.292v36.584c-11.096-2.265-19.5-9.723-19.5-18.292zm221.34 107.118c0 4.136-3.365 7.5-7.5 7.5h-373.102c-4.136 0-7.5-3.364-7.5-7.5v-13.321c0-4.136 3.364-7.5 7.5-7.5h99.262c.015 0 .031.003.046.003s.029-.003.044-.003h173.911c.015 0 .029.003.044.003.016 0 .031-.003.046-.003h99.748c4.135 0 7.5 3.364 7.5 7.5v13.321z"></path><path d="m301.014 441.638c-.003 0-.006 0-.009 0-4.138 0-7.495 3.352-7.5 7.49l-.044 35.716c.303 9.478-10.645 15.502-18.751 10.288 0 0-47.706-29.696-48.29-30.172-7.348-5.983-8.788-7.506-8.788-11.512v-83.049h14.919c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-19.051l-58.726-66.091c-2.751-3.097-7.491-3.378-10.588-.625-3.097 2.751-3.376 7.492-.625 10.588l59.07 66.479v87.698c0 11.484 6.634 16.887 14.315 23.143.947.734 49.883 31.305 49.883 31.305 11.703 7.294 27.326 4.936 35.884-6.155 3.751-4.851 5.739-10.686 5.747-16.877l.044-35.716c.006-4.143-3.348-7.505-7.49-7.51z"></path></g></svg>
            <span>Funil de Vendas</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section3Ref)}>
        <svg fill="#7300cc" id="Layer_1_1_" enable-background="new 0 0 64 64" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m7 38h8c.347 0 .668-.18.851-.475s.199-.663.044-.973l-4-8c-.339-.678-1.45-.678-1.789 0l-4 8c-.155.31-.138.678.044.973s.503.475.85.475zm4-6.764 2.382 4.764h-4.764z"></path><path d="m21 38h8c.552 0 1-.447 1-1v-8c0-.553-.448-1-1-1h-8c-.552 0-1 .447-1 1v8c0 .553.448 1 1 1zm1-8h6v6h-6z"></path><path d="m39 38c2.757 0 5-2.243 5-5s-2.243-5-5-5-5 2.243-5 5 2.243 5 5 5zm0-8c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3z"></path><path d="m48.553 35.895 4 2c.14.07.294.105.447.105s.307-.035.447-.105l4-2c.339-.17.553-.516.553-.895v-4c0-.379-.214-.725-.553-.895l-4-2c-.281-.141-.613-.141-.895 0l-4 2c-.338.17-.552.516-.552.895v4c0 .379.214.725.553.895zm1.447-4.277 3-1.5 3 1.5v2.764l-3 1.5-3-1.5z"></path><path d="m61 24h-28v-4h22c.552 0 1-.447 1-1v-3.434l4.515-2.709c.301-.18.485-.505.485-.857v-6c0-.352-.184-.677-.485-.857l-5-3c-.317-.189-.712-.189-1.029 0l-5 3c-.302.18-.486.505-.486.857v6c0 .352.184.677.485.857l4.515 2.709v2.434h-14v-3.09c2.833-.478 5-2.942 5-5.91 0-3.309-2.691-6-6-6s-6 2.691-6 6c0 2.967 2.167 5.431 5 5.91v3.09h-13v-3h4c.552 0 1-.447 1-1v-10c0-.553-.448-1-1-1h-10c-.552 0-1 .447-1 1v10c0 .553.448 1 1 1h4v3h-14v-3h4c.34 0 .657-.173.841-.459.184-.285.21-.646.069-.955l-5-11c-.162-.357-.518-.586-.91-.586s-.748.229-.91.586l-5 11c-.141.31-.115.67.069.955.184.286.501.459.841.459h4v4c0 .553.448 1 1 1h23v4h-28c-.552 0-1 .447-1 1v16c0 .553.448 1 1 1h28v4.069c-3.94.495-7 3.859-7 7.931 0 4.411 3.589 8 8 8s8-3.589 8-8c0-4.072-3.06-7.436-7-7.931v-4.069h28c.552 0 1-.447 1-1v-16c0-.553-.448-1-1-1zm-10-17.434 4-2.4 4 2.4v4.867l-4 2.4-4-2.4zm-16 2.434c0-2.206 1.794-4 4-4s4 1.794 4 4-1.794 4-4 4-4-1.794-4-4zm-15-4h8v8h-8zm-12 .417 3.447 7.583h-6.894zm30 48.583c0 3.309-2.691 6-6 6s-6-2.691-6-6 2.691-6 6-6 6 2.691 6 6zm22-14h-56v-14h56z"></path><path d="m29.707 53.293-1.414 1.414 2 2c.195.195.451.293.707.293s.512-.098.707-.293l4-4-1.414-1.414-3.293 3.293z"></path></svg>
            <span>Pipe de Oportunidades</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section4Ref)}>
        <svg fill="#7300cc" id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m428.5 82.499v-82.499h-280.607l-64.393 64.393v18.106h-68.5v60h15v-45h53.5v234.503h15v-257.002h60v-60h255v332.001h-383.5v-189.502h-15v264.502h203.499v20.729l-12.135 24.27h-55.364c-12.407 0-22.5 10.093-22.5 22.5v22.5h255v-22.5c0-12.407-10.094-22.5-22.5-22.5h-55.364l-12.135-24.27v-20.729h128.5v-15h-392.001v-45h452v45h-44.999v15h59.999v-339.502zm-319.394-22.499 34.393-34.393v34.393zm259.394 429.5v7.5h-225v-7.5c0-4.136 3.364-7.5 7.5-7.5h210c4.136 0 7.5 3.364 7.5 7.5zm-79.634-22.5h-65.732l10.365-20.729v-24.27h45.002v24.27zm139.634-119.999v-249.502h53.5v249.502z"></path><path d="m248.5 377.001h15v15h-15z"></path><path d="m190.974 99.145-10.607-10.606-26.517 26.516-15.91-15.909-10.607 10.606 26.517 26.516z"></path><path d="m153.85 226.267 37.124-37.123-10.607-10.606-26.517 26.516-15.91-15.91-10.607 10.606z"></path><path d="m213.164 185.661h151.2v15h-151.2z"></path><path d="m213.164 215.661h119.1v15h-119.1z"></path><path d="m213.164 275.66h151.2v15h-151.2z"></path><path d="m213.164 305.66h119.1v15h-119.1z"></path><path d="m213.164 125.662h119.1v15h-119.1z"></path><path d="m153.85 316.266 37.124-37.123-10.607-10.607-26.517 26.517-15.91-15.91-10.607 10.607z"></path><path d="m213.164 95.662h151.2v15h-151.2z"></path><path d="m230.137 45h75v15h-75z"></path><path d="m452 112.499h15v15h-15z"></path><path d="m452 142.499h15v45h-15z"></path></g></svg>
            <span>Histórico de Interações</span>
        </div>
        <div className="card" onClick={() => handleScrollToSection(section5Ref)}>
        <svg fill="#7300cc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="512" height="512"><g id="Calendar"><path d="M57,8H52V6a4,4,0,0,0-8,0V8H36V6a4,4,0,0,0-8,0V8H20V6a4,4,0,0,0-8,0V8H7a5,5,0,0,0-5,5V53a5,5,0,0,0,5,5H35a1,1,0,0,0,0-2H7a3.009,3.009,0,0,1-3-3V22H60V39a1,1,0,0,0,2,0V13A5,5,0,0,0,57,8ZM46,6a2,2,0,0,1,4,0v6a2,2,0,0,1-4,0ZM30,6a2,2,0,0,1,4,0v6a2,2,0,0,1-4,0ZM14,6a2,2,0,0,1,4,0v6a2,2,0,0,1-4,0ZM60,20H4V13a3.009,3.009,0,0,1,3-3h5v2a4,4,0,0,0,8,0V10h8v2a4,4,0,0,0,8,0V10h8v2a4,4,0,0,0,8,0V10h5a3.009,3.009,0,0,1,3,3Z"></path><path d="M30,29a2,2,0,0,0-2-2H24a2,2,0,0,0-2,2v3a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2Zm-6,3V29h4v3Z"></path><path d="M18,29a2,2,0,0,0-2-2H12a2,2,0,0,0-2,2v3a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2Zm-6,3V29h4v3Z"></path><path d="M52,34a2,2,0,0,0,2-2V29a2,2,0,0,0-2-2H48a2,2,0,0,0-2,2v3a2,2,0,0,0,2,2Zm-4-5h4v3H48Z"></path><path d="M30,38a2,2,0,0,0-2-2H24a2,2,0,0,0-2,2v3a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2Zm-6,3V38h4v3Z"></path><path d="M18,38a2,2,0,0,0-2-2H12a2,2,0,0,0-2,2v3a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2Zm-6,3V38h4v3Z"></path><path d="M28,45H24a2,2,0,0,0-2,2v3a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2V47A2,2,0,0,0,28,45Zm-4,5V47h4v3Z"></path><path d="M36,34h4a2,2,0,0,0,2-2V29a2,2,0,0,0-2-2H36a2,2,0,0,0-2,2v3A2,2,0,0,0,36,34Zm0-5h4v3H36Z"></path><path d="M34,41a2,2,0,0,0,2,2,1,1,0,0,0,0-2V38h4a1,1,0,0,0,0-2H36a2,2,0,0,0-2,2Z"></path><path d="M16,45H12a2,2,0,0,0-2,2v3a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2V47A2,2,0,0,0,16,45Zm-4,5V47h4v3Z"></path><path d="M49,36A13,13,0,1,0,62,49,13.015,13.015,0,0,0,49,36Zm0,24A11,11,0,1,1,60,49,11.013,11.013,0,0,1,49,60Z"></path><path d="M54.778,44.808,47,52.586,43.465,49.05a1,1,0,0,0-1.414,1.414l4.242,4.243a1,1,0,0,0,1.414,0l8.485-8.485a1,1,0,0,0-1.414-1.414Z"></path></g></svg>
            <span>CRM Completo</span>
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
        Dashboard de CRM
        </span>

        <p>
       
Essa funcionalidade oferece uma <strong> visão ampla e precisa sobre todos os indicadores das suas oportunidades de negócio,</strong>
por meio de uma série de gráficos com os resultados atualizados diariamente.







        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <img src={Set} alt="descer" className="bottom" onClick={()=> handleScrollToSection(section2Ref)}/>
      </S.Main2>

      <S.Main2 ref={section2Ref}>
       <div className="left">
        <span>
        Funil de Vendas
        </span>

        <p>
        O Funil de Vendas é uma ferramenta que permite acompanhar o progresso das negociações com seus clientes. Ele é estruturado com base nas informações das oportunidades vinculadas ao módulo de vendas, exibindo o valor total de oportunidades, pedidos e faturamentos.
        <br /><br />
        Dessa forma, você pode <strong>visualizar facilmente o andamento de cada negociação.</strong>

        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
          <img src={Image3} alt="" />
       </div>

       <img src={Set} alt="descer" className="bottom" onClick={()=> handleScrollToSection(section3Ref)}/>
      </S.Main2>

      <S.Main2 ref={section3Ref}>
       <div className="left">
       <img src={Image4} alt="" />
       </div>

       <div className="right">
       
        <span>
        Pipe de Oportunidades
        </span>

        <p>

        
O Pipe de Oportunidades oferece uma tela prática para gerenciar suas oportunidades de negócio. Com ele, é possível verificar o status de cada negociação e acompanhar as atividades pendentes em cada uma. 
<br /><br /><br />
<strong>
Ganhe agilidade na visualização dos seus dados e garanta que nenhuma oportunidade seja perdida!
</strong>
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <img src={Set} alt="descer" className="bottom" onClick={()=> handleScrollToSection(section4Ref)}/>
      </S.Main2>

      <S.Main2 ref={section4Ref}>
       <div className="left">
        <span>
        Histórico de Interações
        </span>

        <p>
        

Essa funcionalidade registra todos os <strong>contatos realizados com os clientes,</strong> facilitando a compreensão de suas necessidades e expectativas, e contribuindo para sua fidelização.
<br /><br />
Com esse acompanhamento, você pode otimizar os resultados e desenvolver estratégias de conversão mais eficazes e organizadas.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">     
           <img src={Image5} alt="" />
       </div>

  
      </S.Main2>

      <S.Main3 ref={section5Ref}>
        <span>Tenha recursos exclusivos para força de vendas e <strong>gestão de clientes!</strong></span>

        <div className="cards">
         <div className="card">
          <span>Campanhas</span>
          <p>
          
          Gerencie suas campanhas publicitárias cadastrando e monitorando cada uma com precisão. Acompanhe a execução e avalie os resultados para entender o impacto de suas ações.
          </p>
         </div>

         <div className="card">
          <span>Lembretes e Agendamentos</span>
          <p>
          
          Organize seu calendário com lembretes e agendamentos vinculados a cada oportunidade, enviando notificações de tarefas antecipadamente à sua equipe. Esta funcionalidade permite integração com o Google Agenda, garantindo notificações via SMS ou e-mail.
          </p>
         </div>

         <div className="card">
          <span>Avaliação de Ações</span>
          <p>
          
          Utilize a ferramenta de avaliação para registrar e acompanhar os feedbacks recebidos de clientes ou parceiros. Este recurso ajuda a planejar ações que ofereçam maior valor e reconhecimento para o seu público.
          </p>
         </div>

        </div>
      </S.Main3>
      <Footer/>
     </S.Container>
    )
}