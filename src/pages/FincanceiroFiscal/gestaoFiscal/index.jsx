import * as S from "./style";

import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";


import Set from "../assets/bottom-set.svg";
import Image1 from "../assets/top-image-controle-fiscal.svg";
import Image2 from "../assets/sped-fiscal.svg";
import Image3 from "../assets/bloco-k.svg";
import Image4 from "../assets/cfe-sat.svg";

export function GestaoFiscal(){
    const navigate = useNavigate();

    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);

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
         Faça seu <strong> Controle Fiscal </strong> com a BLUE ERP e mantenha sua empresa em conformidade!
        </h2>

        <p>

        Faça seu Controle Fiscal com a BLUE ERP e mantenha sua empresa em conformidade!
Utilize nosso Sistema Emissor de Nota Fiscal, que proporciona autonomia e agilidade, permitindo que você economize tempo em suas operações fiscais.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
        <img src={Image1} alt="Image" />
       </div>
       </div>

       <div className="Bottom">
        <div className="card" onClick={() => handleScrollToSection(section1Ref)}>
          <svg fill="#7300cc" height="496pt" viewBox="0 0 496 496" width="496pt" xmlns="http://www.w3.org/2000/svg"><path d="m384 144v-17.472656c9.289062-3.3125 16-12.113282 16-22.527344 0-13.230469-10.769531-24-24-24-4.40625 0-8-3.59375-8-8s3.59375-8 8-8 8 3.59375 8 8h16c0-10.414062-6.710938-19.214844-16-22.527344v-17.472656h-16v17.472656c-9.289062 3.3125-16 12.113282-16 22.527344 0 13.230469 10.769531 24 24 24 4.40625 0 8 3.59375 8 8s-3.59375 8-8 8-8-3.59375-8-8h-16c0 10.414062 6.710938 19.214844 16 22.527344v17.472656zm0 0"></path><path d="m472 256v-25.824219c0-16.582031-10.433594-31.632812-25.960938-37.457031l-38.039062-14.261719v-8.570312c32.726562-12.839844 56-44.664063 56-81.886719 0-48.519531-39.480469-88-88-88s-88 39.480469-88 88c0 37.222656 23.273438 69.046875 56 81.886719v8.570312l-38.039062 14.269531c-15.527344 5.816407-25.960938 20.867188-25.960938 37.449219v25.824219h-16v-128h-104c-22.054688 0-40 17.945312-40 40 0 13.128906 6.449219 24.703125 16.246094 32-9.796875 7.296875-16.246094 18.871094-16.246094 32 0 9.039062 3.128906 17.296875 8.207031 24h-24.207031v-128h-80v128c-13.230469 0-24 10.769531-24 24v16c0 13.230469 10.769531 24 24 24v176h448v-176c13.230469 0 24-10.769531 24-24v-16c0-13.230469-10.769531-24-24-24zm-104.046875-37.398438-25.695313 10.277344-5.128906-30.757812 12.070313-4.519532zm34.847656-25 12.0625 4.527344-5.128906 30.757813-25.695313-10.277344zm-98.800781-105.601562c0-39.695312 32.304688-72 72-72s72 32.304688 72 72-32.304688 72-72 72-72-32.304688-72-72zm72 88c5.472656 0 10.800781-.566406 16-1.527344v6.863282l-16 21.335937-16-21.335937v-6.863282c5.199219.960938 10.527344 1.527344 16 1.527344zm-80 54.175781c0-9.953125 6.257812-18.976562 15.574219-22.472656l10.289062-3.855469 7.878907 47.273438 46.257812-18.503906 46.257812 18.496093 7.878907-47.273437 10.289062 3.855468c9.316407 3.503907 15.574219 12.527344 15.574219 22.480469v25.824219h-160zm-48 25.824219h-16v-48h16zm-48-64v-48h16v48zm16 16v48h-16v-48zm32-16h-16v-48h16zm-112-24c0-13.230469 10.769531-24 24-24h24v48h-24c-13.230469 0-24-10.769531-24-24zm0 64c0-13.230469 10.769531-24 24-24h24v48h-24c-13.230469 0-24-10.769531-24-24zm-48-8h-48v-16h48zm0-80v48h-48v-48zm-48 96h48v16h-48zm416 240h-416v-160h416zm24-184c0 4.40625-3.59375 8-8 8h-448c-4.40625 0-8-3.59375-8-8v-16c0-4.40625 3.59375-8 8-8h448c4.40625 0 8 3.59375 8 8zm0 0"></path><path d="m312 448h128v16h-128zm0 0"></path><path d="m280 416h160v16h-160zm0 0"></path><path d="m56 336h128v16h-128zm0 0"></path><path d="m56 368h160v16h-160zm0 0"></path><path d="m56 160h16v16h-16zm0 0"></path><path d="m152 224h16v16h-16zm0 0"></path><path d="m152 160h16v16h-16zm0 0"></path></svg>
            <span> SPED Fiscal</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section2Ref)}>
          <svg fill="#7300cc" id="Capa_1" enable-background="new 0 0 512.34 512.34" height="512" viewBox="0 0 512.34 512.34" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m410.581 184.638c-4.142 0-7.5-3.358-7.5-7.5 0-4.142 3.358-7.5 7.5-7.5 4.142 0 7.5 3.358 7.5 7.5 0 4.142-3.357 7.5-7.5 7.5z"></path><g><path d="m509.801 206.406-61.723-61.723v-20.581c18.032-12.131 29.92-32.723 29.92-56.042 0-37.22-30.28-67.5-67.5-67.5-23.058 0-43.443 11.628-55.625 29.32h-42.035c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h34.261c-5.31 14.975-5.463 29.975-.461 45h-102.525c5.253-14.836 5.005-30.722-.035-45h36.08c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-43.567c-15.64-23.482-46.316-35.006-73.574-27.702-32.377 8.676-54.51 42.395-49.208 75.691l-44.875 77.715c-38.779 6.581-68.593 41.754-68.593 81.267 0 50.135 46.394 89.336 95.72 81.434l77.989 65.445c-.028.879-.053 73.61-.053 73.61h-42.5c-4.142 0-7.5 3.358-7.5 7.5v40c0 4.142 3.358 7.5 7.5 7.5h250c4.142 0 7.5-3.358 7.5-7.5v-40c0-4.142-3.358-7.5-7.5-7.5h-42.5v-14.61c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v14.61h-81.16c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h131.16v25h-235v-25h71.16c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-21.16v-70.97c0-36.233 31.399-67.5 67.5-67.5 37.22 0 67.5 30.28 67.5 67.5v23.68c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-23.68c0-45.491-37.009-82.5-82.5-82.5-4.359 0-8.724.354-13.031 1.034l-78.222-65.625c.311-10.657-1.426-21.355-5.211-31.463l44.741-77.5c12.624-4.858 23.871-13.503 31.834-25.437h117.359c5.004 7.656 11.51 14.243 19.11 19.325v20.319l-61.883 61.883c-1.407 1.406-2.197 3.314-2.197 5.303v40c0 1.989.79 3.897 2.197 5.303l74 74c4.29 4.291 12.803 1.891 12.803-5.303v-60c0-1.989-.79-3.897-2.197-5.303l-28.697-28.697 22.283-22.283c14.089 8.755 28.185 8.777 42.288.067l22.216 22.216-28.697 28.697c-1.407 1.406-2.197 3.314-2.197 5.303v60c0 7.194 8.513 9.595 12.803 5.303l74-74c1.407-1.406 2.197-3.314 2.197-5.303v-40c.002-1.989-.788-3.896-2.195-5.303zm-474.689 78.174c-25.802-25.802-25.86-69.6 0-95.459 25.772-25.771 69.629-25.829 95.459 0 26.318 26.318 26.318 69.142 0 95.459-26.002 26.002-69.37 26.088-95.459 0zm190.782 25.161c-24.259 9.736-42.975 31.122-49.393 56.463l-62.892-52.776c24.272-9.748 42.922-31.11 49.243-56.577zm-73.936-117.936c-14.337-21.988-38.837-36.039-65.07-37.316l33.05-57.237c11.714 23.866 38.521 39.237 64.982 37.457zm2.28-78.961c-25.07-14.474-33.69-46.646-19.216-71.716 14.226-24.64 47.34-33.291 71.716-19.216 25.07 14.474 33.691 46.646 19.217 71.716-14.475 25.069-46.647 33.691-71.717 19.216zm256.26-97.284c28.949 0 52.5 23.551 52.5 52.5s-23.551 52.5-52.5 52.5-52.5-23.551-52.5-52.5 23.551-52.5 52.5-52.5zm-59.303 221.453 31.803 31.803v38.787l-59-59v-33.787l49.08-49.08c-.834 10.458.468 24.425 5.885 32.902l-27.768 27.768c-2.929 2.929-2.929 7.678 0 10.607zm36.883-58.503v-46.793c15.003 5.142 30.003 5.124 45-.054v46.848c0 12.407-10.093 22.5-22.5 22.5s-22.5-10.094-22.5-22.501zm108.92 70.093-59 59v-38.787l31.803-31.803c2.929-2.929 2.929-7.678 0-10.606l-27.67-27.67c5.445-8.465 6.778-22.38 5.947-32.84l48.92 48.92z"></path><path d="m213.998 384.332c0 23.435 19.065 42.5 42.5 42.5s42.5-19.065 42.5-42.5-19.065-42.5-42.5-42.5-42.5 19.065-42.5 42.5zm70 0c0 15.164-12.336 27.5-27.5 27.5s-27.5-12.336-27.5-27.5 12.336-27.5 27.5-27.5 27.5 12.336 27.5 27.5z"></path><path d="m112.894 266.902c16.571-16.571 16.571-43.533 0-60.104-16.397-16.397-43.707-16.396-60.104 0-16.396 16.396-16.397 43.708 0 60.104 16.396 16.397 43.708 16.396 60.104 0zm-57.552-30.052c0-7.346 2.86-14.251 8.055-19.445 12.964-10.74 25.927-10.74 38.891 0 10.722 10.722 10.722 28.168 0 38.891-12.964 10.74-25.927 10.74-38.891 0-5.194-5.195-8.055-12.101-8.055-19.446z"></path><path d="m194.238 43.562c-13.133-7.582-29.984-3.066-37.566 10.066s-3.066 29.984 10.066 37.565c13.101 7.564 30.078 2.905 37.565-10.065 7.582-13.132 3.067-29.984-10.065-37.566zm-2.924 30.066c-3.805 5.678-10.825 7.678-17.075 4.575-6.174-3.065-8.021-11.106-4.576-17.075 3.447-5.97 11.106-8.022 17.076-4.576 5.968 3.447 8.021 11.107 4.575 17.076z"></path><path d="m410.498 95.56c15.164 0 27.5-12.336 27.5-27.5s-12.336-27.5-27.5-27.5-27.5 12.336-27.5 27.5 12.337 27.5 27.5 27.5zm0-40c6.893 0 12.5 5.607 12.5 12.5s-5.607 12.5-12.5 12.5-12.5-5.607-12.5-12.5 5.608-12.5 12.5-12.5z"></path></g></g></svg>
            <span>Bloco K</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section3Ref)}>
          <svg fill="#7300cc" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><g id="POS"><path d="m61 34h-9v-26a6 6 0 0 0 -6-6h-21a5 5 0 0 0 -5 5v7.1a5.017 5.017 0 0 0 -4 4.9v7h-13a1 1 0 0 0 -1 1v28a1 1 0 0 0 1 1h13v1a5 5 0 0 0 5 5h20a5 5 0 0 0 5-5v-13h10a6 6 0 0 0 6-6v-3a1 1 0 0 0 -1-1zm-53 20h-4v-26h4zm4 0h-2v-26h2zm4 0h-2v-26h2zm6-47a3.009 3.009 0 0 1 3-3h16.53a5.971 5.971 0 0 0 -1.53 4v14h-18zm22 50a3.009 3.009 0 0 1 -3 3h-20a3.009 3.009 0 0 1 -3-3v-38a3.01 3.01 0 0 1 2-2.82v6.82a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1v-6.82a3.01 3.01 0 0 1 2 2.82zm2-15v-23a5.017 5.017 0 0 0 -4-4.9v-6.1a4 4 0 0 1 8 0v30a5.979 5.979 0 0 0 1.54 4zm14-4a4 4 0 0 1 -8 0v-2h8z"></path><path d="m25 36h-4a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0 -1-1zm-1 4h-2v-2h2z"></path><path d="m33 36h-4a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0 -1-1zm-1 4h-2v-2h2z"></path><path d="m41 36h-4a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0 -1-1zm-1 4h-2v-2h2z"></path><path d="m25 44h-4a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0 -1-1zm-1 4h-2v-2h2z"></path><path d="m33 44h-4a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0 -1-1zm-1 4h-2v-2h2z"></path><path d="m41 44h-4a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0 -1-1zm-1 4h-2v-2h2z"></path><path d="m25 52h-4a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0 -1-1zm-1 4h-2v-2h2z"></path><path d="m33 52h-4a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0 -1-1zm-1 4h-2v-2h2z"></path><path d="m41 52h-4a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0 -1-1zm-1 4h-2v-2h2z"></path><path d="m41 28h-20a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1v-4a1 1 0 0 0 -1-1zm-1 4h-18v-2h18z"></path><path d="m34 15a3.01 3.01 0 0 1 -2 2.82v1.18h-2v-1.18a3.01 3.01 0 0 1 -2-2.82h2a1 1 0 1 0 1-1 3 3 0 0 1 -1-5.82v-1.18h2v1.18a3.01 3.01 0 0 1 2 2.82h-2a1 1 0 1 0 -1 1 3.009 3.009 0 0 1 3 3z"></path><path d="m2 2h2v2h-2z"></path><path d="m6 2h8v2h-8z"></path><path d="m2 8h2v2h-2z"></path><path d="m6 8h8v2h-8z"></path><path d="m2 14h2v2h-2z"></path><path d="m6 14h8v2h-8z"></path><path d="m60 48h2v2h-2z"></path><path d="m50 48h8v2h-8z"></path><path d="m60 54h2v2h-2z"></path><path d="m50 54h8v2h-8z"></path><path d="m60 60h2v2h-2z"></path><path d="m50 60h8v2h-8z"></path></g></svg>
            <span>CF-e SAT</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section4Ref)}>
          <svg fill="#7300cc" id="Layer_5" enable-background="new 0 0 64 64" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m49 14.618 13.236-6.618-13.236-6.618v2.618h-19v2h21v-1.382l6.764 3.382-6.764 3.382v-1.382h-29v2h27z"></path><path d="m26 4h2v2h-2z"></path><path d="m22 4h2v2h-2z"></path><path d="m36 49.382-13.236 6.618 13.236 6.618v-2.618h19v-2h-21v1.382l-6.764-3.382 6.764-3.382v1.382h29v-2h-27z"></path><path d="m57 58h2v2h-2z"></path><path d="m61 58h2v2h-2z"></path><path d="m57 40h2v2h-2z"></path><path d="m53 40h2v2h-2z"></path><path d="m49 40h2v2h-2z"></path><path d="m49 36h10v2h-10z"></path><path d="m60 20h-7-10-6.819c-3.813-4.452-9.313-7-15.181-7-11.028 0-20 8.972-20 20s8.972 20 20 20c5.868 0 11.368-2.548 15.181-7h23.819c1.654 0 3-1.346 3-3v-20c0-1.654-1.346-3-3-3zm-9 2v4h-6v-4zm-16.886-1.314c-.42.343-.744.793-.93 1.314h-5.448c-.665-2.653-1.587-4.948-2.754-6.557 3.479.786 6.652 2.599 9.132 5.243zm-1.114 21.314h-4.822c.484-2.525.757-5.271.811-8h4.011zm-12 9c-1.69 0-3.491-2.637-4.674-7h9.349c-1.184 4.363-2.985 7-4.675 7zm-5.152-9c-.474-2.326-.772-5.029-.829-8h11.963c-.057 2.971-.356 5.674-.829 8zm-12.797-8h9.96c.054 2.729.327 5.475.811 8h-8.386c-1.381-2.378-2.225-5.097-2.385-8zm17.949-19c1.69 0 3.491 2.637 4.674 7h-9.349c1.184-4.363 2.985-7 4.675-7zm5.152 9c.474 2.326.772 5.029.829 8h-11.962c.057-2.971.356-5.674.829-8zm-13.141 8h-9.96c.161-2.903 1.004-5.622 2.385-8h8.386c-.484 2.525-.757 5.271-.811 8zm19.989 0h-4.011c-.054-2.729-.327-5.475-.811-8h4.822zm-15.996-16.538c-1.16 1.608-2.078 3.895-2.74 6.538h-7.48c2.512-3.239 6.094-5.597 10.22-6.538zm-10.22 28.538h7.48c.662 2.643 1.579 4.93 2.74 6.537-4.126-.94-7.708-3.298-10.22-6.537zm18.198 6.557c1.167-1.609 2.089-3.904 2.754-6.557h5.448c.186.521.509.971.93 1.314-2.48 2.644-5.653 4.457-9.132 5.243zm36.018-7.557c0 .552-.449 1-1 1h-24c-.551 0-1-.448-1-1v-20c0-.551.449-1 1-1h7v6h10v-6h7c.551 0 1 .449 1 1z"></path><path d="m17 36h2v2h-2z"></path><path d="m21 36h2v2h-2z"></path><path d="m23 28h2v2h-2z"></path><path d="m19 28h2v2h-2z"></path></svg>
            <span>MDF-e e Notas de Exportação</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section4Ref)}>
        <svg fill="#7300cc" id="Layer_1" enable-background="new 0 0 480.013 480.013" height="512" viewBox="0 0 480.013 480.013" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m238.068 322.013c0 57.897 47.103 105 105 105s105-47.103 105-105c0-37.745-20.022-70.896-50-89.406v-131.594c0-2.61-1.256-4.921-3.19-6.382-99.397-99.397-92.966-93.788-96.367-94.462-1.189-.236 11.366-.156-234.566-.156-17.645 0-32 14.355-32 32v416c0 17.645 14.355 32 32 32h302c17.645 0 32-14.355 32-32 0-4.418-3.582-8-8-8s-8 3.582-8 8c0 8.822-7.178 16-16 16h-302c-8.822 0-16-7.178-16-16v-416c0-8.822 7.178-16 16-16h225v61c0 17.645 14.355 32 32 32h61.123v115.515c-13.043-5.236-27.215-7.882-42-7.469v-57.045c0-13.233-10.767-24-24-24h-202c-13.234 0-24 10.767-24 24v102c0 13.233 10.766 24 24 24h105c4.418 0 8-3.582 8-8s-3.582-8-8-8h-36v-51h72c4.418 0 8-3.582 8-8v-59h53c4.411 0 8 3.589 8 8v58.727c-48.858 8.966-86 51.861-86 103.272zm82.877-229c-8.822 0-16-7.178-16-16v-49.686l65.687 65.687h-49.687zm-206.877 59h53v51h-61v-43c0-4.411 3.589-8 8-8zm53 118h-53c-4.411 0-8-3.589-8-8v-43h61zm80-67h-64v-51h64zm185 119c0 49.075-39.925 89-89 89s-89-39.925-89-89 39.925-89 89-89 89 39.925 89 89zm-81 20v-3.237c0-3.518-2.256-6.586-5.614-7.636l-9.544-2.982c-10.074-3.148-16.842-12.354-16.842-22.907v-3.237c0-10.429 6.689-19.321 16-22.624v-3.376c0-4.418 3.582-8 8-8s8 3.582 8 8v3.376c9.311 3.303 16 12.195 16 22.624 0 4.418-3.582 8-8 8s-8-3.582-8-8c0-4.411-3.589-8-8-8s-8 3.589-8 8v3.237c0 3.518 2.256 6.586 5.614 7.636l9.544 2.982c10.074 3.148 16.842 12.354 16.842 22.907v3.237c0 11.519-8.159 21.165-19 23.472v2.528c0 4.418-3.582 8-8 8s-8-3.582-8-8v-4.68c-7.713-3.996-13-12.05-13-21.32 0-4.418 3.582-8 8-8s8 3.582 8 8c0 4.411 3.589 8 8 8s8-3.589 8-8zm-261-12c0-4.418 3.582-8 8-8h78c4.418 0 8 3.582 8 8s-3.582 8-8 8h-78c-4.418 0-8-3.582-8-8zm0 60c0-4.418 3.582-8 8-8h98c4.418 0 8 3.582 8 8s-3.582 8-8 8h-98c-4.418 0-8-3.582-8-8z"></path></svg>
            <span>NF-e, NFC-e e CT-e</span>

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
    <span>SPED Fiscal</span>

    <p>
      Diga adeus às dores de cabeça ao enviar os arquivos do <strong>SPED</strong> para o seu contador! No módulo de <strong>SPED Fiscal</strong> da BLUE ERP, você pode gerar o arquivo a partir dos XMLs de entrada dos fornecedores e das notas fiscais emitidas.
      <br /><br />
      Oferecemos uma estrutura fiscal robusta e coesa, que permite gerar e armazenar todas as suas informações e operações fiscais. Isso aumenta sua produtividade e garante <strong>eficiência</strong> e <strong>fluidez</strong> em sua rotina administrativa.
    </p>

    <button onClick={() => abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
  </div>

  <img src={Set} alt="descer" className="bottom" onClick={() => handleScrollToSection(section2Ref)} />
</S.Main2>

<S.Main2 ref={section2Ref}>
  <div className="left">
    <span>Bloco K</span>

    <p>
      Se você precisa apresentar os <strong>controles de estoque</strong> e produção ao fisco, conte com o <strong>Gerador de Bloco K</strong> do SPED disponível em nosso sistema.
      <br /><br />
      Com a BLUE ERP, você tem total controle sobre <strong>matéria-prima</strong>, <strong>composição de produtos</strong>, pedidos e ordens de produção, além de garantir a qualidade e a integração completa de seus lançamentos fiscais.
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
    <span>CF-e SAT</span>

    <p>
      Se você empreende no estado de São Paulo, sabe que a emissão do <strong>CF-e SAT</strong>, que substitui o tradicional <strong>Cupom Fiscal</strong>, é essencial. Por que perder tempo com sistemas que têm limites de uso ou que não se integram com outras áreas do seu negócio?
      <br /><br />
      Experimente um <strong>ERP completo</strong>, prático e eficiente. Com a BLUE ERP, você pode emitir seus documentos fiscais rapidamente e sem complicações. E, para garantir seu sucesso, oferecemos <strong>suporte gratuito</strong> para ajudar sua empresa a crescer cada vez mais.
    </p>

    <button onClick={() => abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
  </div>

  <img src={Set} alt="descer" className="bottom" onClick={() => handleScrollToSection(section4Ref)} />
</S.Main2>

<S.Main3 ref={section4Ref}>
  <span>Ferramentas desenvolvidas para <strong>organizar e descomplicar o seu dia a dia!</strong></span>

  <div className="cards">
    <div className="card">
      <span>NF-e</span>
      <p>
        Simplifique a gestão fiscal do seu negócio automatizando os processos e centralizando todas as informações em um único lugar. Assim que a <strong>NF-e</strong> é emitida, a baixa no <strong>estoque</strong> e no <strong>financeiro</strong> ocorre instantaneamente, permitindo que você envie o Danfe e o XML para o cliente por e-mail rapidamente.
      </p>
    </div>

    <div className="card">
      <span>NFC-e</span>
      <p>
        Emitir <strong>NFC-e</strong> nunca foi tão simples! Com o emissor de notas fiscais da BLUE ERP, você pode gerar a Nota Fiscal de Consumidor Eletrônica por meio de um PDV completo e fácil de operar. Além disso, oferecemos integração com todos os setores da sua empresa, automatizando a gestão de <strong>produção</strong>, <strong>estoque</strong> e finanças.
      </p>
    </div>

    <div className="card">
      <span>NFS-e</span>
      <p>
        Com nosso sistema para emissão de Nota Fiscal de Serviço Eletrônica (<strong>NFS-e</strong>), você pode integrar ordens de serviço e emitir seus documentos fiscais em poucos cliques. O BLUE ERP já possui integração com mais de <strong>1.000 municípios</strong> e continua expandindo, garantindo que você não precise se preocupar com a emissão.
      </p>
    </div>

    <div className="card">
      <span>NF-e de Exportação</span>
      <p>
        Por meio da BLUE ERP, você pode emitir notas fiscais de exportação de forma <strong>automatizada</strong> e ágil, carregando os dados de produtos rapidamente. Suas notas são armazenadas na <strong>nuvem</strong>, permitindo acesso a elas onde e quando desejar, além de ser possível imprimi-las ou enviá-las por e-mail aos seus clientes facilmente.
      </p>
    </div>

    <div className="card">
      <span>CT-e</span>
      <p>
        Se você deseja emitir <strong>CT-e</strong> com facilidade e receber suporte e treinamento total em um sistema compatível com Certificados A1 e A3, a BLUE ERP é a solução. Elimine erros de digitação ou cálculos imprecisos de impostos, permitindo que sua equipe economize tempo nas operações de <strong>transporte</strong>.
      </p>
    </div>

    <div className="card">
      <span>MDF-e</span>
      <p>
        Com a BLUE ERP, você pode acompanhar o status dos seus <strong>MDF-es</strong> a qualquer momento e de qualquer lugar. Além de exportá-los em XML ou PDF de maneira prática, você poderá encerrar os manifestos emitidos rapidamente, liberando veículo e motorista para novas entregas.
      </p>
    </div>
  </div>

  <div className="bottom"></div>
</S.Main3>


      <Footer/>
     </S.Container>
    )
}