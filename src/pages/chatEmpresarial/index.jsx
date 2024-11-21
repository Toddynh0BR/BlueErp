import * as S from "./style";

import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

import MouseFollower from "../../components/mouse";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

import Image1 from "./assets/images-talk-header.png";
import Image2 from "./assets/talk-canais-comunicacao.svg";
import Image3 from "./assets/talk-colaboracao.svg";
import Image4 from "./assets/talk-cadastro-usuarios.png";
import Image5 from "./assets/talk-envio-de-pedidos.svg";
import Image6 from "./assets/talk-envio-de-xml-de-notas.png";
import Image7 from "./assets/talk-lancamentos-financeiros.svg";

import { IoShieldCheckmarkOutline,  IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdCloudOutline } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { RiWifiOffLine } from "react-icons/ri";

export function ChatEmpresarial() {
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
          <span>Chat Empresarial</span>
          <span onClick={()=> navigate('/loja-virtual')}>Loja Virtual</span>
          <span onClick={()=> navigate('/app-de-vendas')}>APP de Vendas</span>
          <span onClick={()=> navigate('/loja-offline')}>ERP Offline</span>
         </div>
       </div>

       <div className="Center">
       <div className="left">
        <span>BLUE Talk</span>
        <h2>
        A sua plataforma de<br />
        <strong>
comunicação interna <br />
e colaboração</strong>
        </h2>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
        <img src={Image1} alt="Image" className="especial"/>
       </div>
       </div>

       <div className="Bottom">
        <div className="card" onClick={() => handleScrollToSection(section1Ref)}>
        <svg id="Layer_1" enable-background="new 0 0 511.765 511.765" height="512" viewBox="0 0 511.765 511.765" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m491.945 353.116c.15-.305.283-.617.389-.937 30.321-69.981 24.903-155.775-14.478-221.349 21.024-25.133-6.285-61.125-36.149-47.199-5.248-5.363-10.758-10.503-16.468-15.363 11.208-30.468-26.198-55.462-49.494-32.698-67.711-34.191-151.928-33.758-219.265 1.157-23.954-25.385-64.183 1.833-49.68 33.683-8.306 7.263-16.168 15.109-23.417 23.406-6.259 7.164 5.08 16.983 11.296 9.869 6.744-7.718 14.051-15.019 21.769-21.785 14.925 10.765 36.566 5.281 44.754-11.151 27.021 7.778 52.825 18.941 76.87 33.268-2.013 7.259-1.191 15.366 2.263 22.067-19.79 17.095-37.612 36.433-53.088 57.626-14.287-4.317-30.035 2.909-36.248 16.439-31.507.169-63.112 3.558-94.142 10.117-2.74-5.106-6.894-9.337-11.93-12.171 5.83-22.735 15.064-44.362 27.502-64.359 4.956-7.97-7.554-16.255-12.737-7.923-13.224 21.26-23.046 44.251-29.258 68.419-35.93.61-41.962 50.316-7.757 59.878-.504 70.742 30.082 139.52 83.12 186.372-11.064 29.887 24.855 54.539 48.559 33.459 69.178 36.785 156.607 36.79 225.789.012 24.109 23.844 62.723-2.794 49.143-33.965 27.335-24.293 48.57-54.006 62.657-86.872zm-9.45-16.774c-20.761-20.626-43.481-39.337-67.738-55.762 3.445-10.791.451-22.932-7.594-30.898 20.398-33.915 36.411-70.281 47.683-108.27 3.756.013 7.367-.68 10.694-1.934 34.539 58.333 40.856 133.543 16.955 196.864zm-345.126 84.784c-6.312-61.825 4.764-123.504 32.177-179.243 17.03 5.314 35.437-5.885 38.744-23.366 51.715 6.375 101.522 21.558 148.264 45.203-2.248 8.738-.387 18.373 4.968 25.642-52.687 66.749-122.234 116.976-201.83 145.763-4.823-7.637-12.934-12.98-22.323-13.999zm233.227-149.806c0-8.499 6.864-15.413 15.301-15.413 20.298.845 20.292 29.984 0 30.826-8.437 0-15.301-6.914-15.301-15.413zm99.617-160.32c0 8.499-6.864 15.413-15.301 15.413-20.299-.845-20.294-29.984 0-30.826 8.437 0 15.301 6.914 15.301 15.413zm-39.967-17.632c-10.366 14.565-5.555 35.62 10.073 44.277-10.919 36.644-26.399 71.722-46.092 104.441-4.117-1.184-8.687-1.478-12.92-.83-20.584-43.955-50.535-83.546-87.123-115.17 3.457-6.705 4.281-14.798 2.265-22.067 23.159-13.798 47.966-24.672 73.907-32.402 8.622 16.646 31.751 21.346 46.11 8.885 4.759 4.094 9.366 8.395 13.78 12.866zm-178.287 18.793c0-8.499 6.864-15.413 15.301-15.413 20.299.845 20.293 29.983 0 30.825-8.437 0-15.301-6.914-15.301-15.412zm145.068-70.379c8.438 0 15.302 6.914 15.302 15.413-.842 20.447-29.764 20.442-30.603 0 0-8.499 6.864-15.413 15.301-15.413zm-262.94 30.825c-8.437 0-15.301-6.914-15.301-15.413.842-20.448 29.764-20.441 30.603 0 0 8.499-6.865 15.413-15.302 15.413zm30.273-16.563c-.078-2.082-.364-4.109-.84-6.065 62.783-32.467 141.216-33.033 204.483-1.51-.813 2.719-1.258 5.594-1.273 8.571-27.286 8.072-53.377 19.474-77.735 33.961-11.708-12.111-31.757-12.115-43.469-.001-25.383-15.098-52.63-26.834-81.166-34.956zm85.905 81.282c10.142 6.922 23.845 6.923 33.988.001 34.932 30.161 63.548 67.916 83.259 109.841-1.336 1.027-2.584 2.164-3.732 3.395-49.279-24.995-101.867-40.887-156.491-47.281-1.475-4.464-3.951-8.472-7.165-11.753 14.66-19.915 31.484-38.104 50.141-54.203zm-71.738 60.095c8.437 0 15.301 6.914 15.301 15.413-.842 20.448-29.764 20.442-30.603 0 .001-8.499 6.865-15.413 15.302-15.413zm-163.668 27.218c0-8.499 6.864-15.413 15.301-15.413 20.298.845 20.292 29.983 0 30.825-8.436.001-15.301-6.913-15.301-15.412zm22.817 29.465s22.781-4.968 22.781-29.267c0 0 58.456-9.344 87.867-9.672.552 7.266 3.655 13.823 8.414 18.771-29.228 58.801-41.017 123.993-34.231 189.321-2.922 1.218-5.612 2.883-7.99 4.907-48.931-43.834-76.841-117.278-76.841-174.06zm96.411 212.665c-8.437 0-15.301-6.914-15.301-15.413s6.864-15.413 15.301-15.413c8.324 0 15.302 7.21 15.302 15.413 0 8.499-6.865 15.413-15.302 15.413zm133.173 19.877c-36.401 0-72.397-8.718-104.569-25.269 1.306-3.743 1.882-8.007 1.628-11.979 82.338-29.679 154.289-81.546 208.795-150.513 4.478 2.1 9.447 3.064 14.384 2.805 3.332 12.367 5.965 24.984 7.831 37.6 1.429 9.658 16.272 7.5 14.839-2.194-1.981-13.396-4.786-26.794-8.347-39.916 1.793-1.116 3.459-2.417 4.977-3.872 25.028 16.991 48.362 36.496 69.501 58.083-13.11 28.981-32.191 55.222-56.434 76.905-2.397-1.8-5.07-3.248-7.939-4.278 1.474-13.943 2.116-28.021 1.9-41.945-.152-9.798-15.151-9.568-14.998.232.208 13.384-.412 26.917-1.836 40.32-17.689 2.813-29.258 21.155-24.384 38.345-32.374 16.814-68.649 25.676-105.348 25.676zm134.49-18.573c-8.437 0-15.301-6.914-15.301-15.413.842-20.448 29.764-20.441 30.603 0 0 8.499-6.864 15.413-15.302 15.413z"></path></svg>            <span>Canais de Comunicação</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section2Ref)}>
<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m255.107 65.06c5.562 0 10.071-4.509 10.071-10.071v-44.918c0-5.562-4.509-10.071-10.071-10.071s-10.071 4.509-10.071 10.071v44.918c.001 5.562 4.51 10.071 10.071 10.071z"></path><path d="m501.28 345.985-17.791-17.741c-6.329-6.321-14.764-9.803-23.752-9.803-5.747 0-11.264 1.43-16.153 4.109l-33.526-33.486 1.633-1.631c13.601-13.628 13.596-35.773-.001-49.355-4.859-4.868-10.922-8.114-17.531-9.48.91-3.141 1.389-6.431 1.389-9.798 0-9.355-3.634-18.127-10.212-24.678-4.86-4.868-10.922-8.114-17.531-9.48.91-3.141 1.389-6.43 1.389-9.798 0-9.356-3.634-18.127-10.223-24.688-4.976-4.97-11.093-8.116-17.516-9.455 3.436-11.847.5-25.176-8.82-34.512-7.758-7.725-18.285-11.045-28.43-9.969l-66.435-12.575c-10.132-1.922-22.785-3.193-30.772 4.092-.504.46-1.018.989-1.524 1.578-12.384-4.514-26.828-1.826-36.745 8.08-6.579 6.571-10.203 15.339-10.203 24.689 0 3.368.477 6.657 1.386 9.799-6.602 1.365-12.657 4.607-17.5 9.459-6.592 6.565-10.227 15.323-10.234 24.662-.003 3.376.476 6.676 1.39 9.826-6.605 1.362-12.664 4.598-17.522 9.45-6.592 6.585-10.222 15.358-10.222 24.703 0 7.158 2.137 13.977 6.097 19.737-5 1.695-9.58 4.516-13.415 8.347-13.61 13.593-13.615 35.739.009 49.387l1.627 1.62-33.53 33.469c-12.461-5.867-27.814-3.669-38.097 6.601l-17.802 17.752c-6.332 6.324-9.818 14.76-9.819 23.753 0 8.994 3.487 17.431 9.819 23.756l22.217 22.19c3.935 3.931 10.312 3.927 14.242-.008 3.931-3.935 3.927-10.312-.008-14.242l-22.217-22.19c-2.522-2.519-3.911-5.895-3.911-9.505 0-3.609 1.389-6.984 3.905-9.497l17.803-17.753c4.448-4.443 11.256-5.105 16.426-2.014.364.547.785 1.067 1.267 1.55.863.865 1.848 1.528 2.894 2.013l102.093 101.943c.485 1.057 1.151 2.052 2.02 2.922.846.847 1.811 1.502 2.835 1.984 2.159 2.441 3.352 5.559 3.352 8.885 0 3.61-1.389 6.985-3.911 9.504l-17.785 17.764c-5.255 5.232-13.803 5.231-19.042.016l-22.217-22.219c-3.933-3.933-10.309-3.933-14.242 0s-3.933 10.309 0 14.242l22.233 22.235c6.544 6.517 15.138 9.774 23.736 9.774 8.6 0 17.204-3.262 23.756-9.785l17.796-17.775c6.332-6.325 9.819-14.761 9.819-23.756 0-6.419-1.785-12.549-5.104-17.835l37.736-37.69c.04-.041.08-.082.121-.123 4.321-4.467 16.354-3.631 27.991-2.823 8.268.575 17.486 1.214 26.492.176l41.324 41.275c-2.677 4.881-4.106 10.391-4.106 16.129 0 8.985 3.487 17.416 9.819 23.741l17.797 17.775c6.328 6.321 14.763 9.803 23.751 9.803 8.987 0 17.422-3.481 23.751-9.803l107.941-107.81c6.332-6.324 9.819-14.76 9.819-23.754-.001-8.993-3.488-17.429-9.826-23.759zm-267.26-242.55 43.687 8.269-26.149 26.139c-4.045-1.944-9.589-5.57-15.671-11.388-8.325-7.964-14.28-17.159-14.822-22.894-.001-.003-.001-.006-.001-.009 0-.001-.001-.002-.001-.003-.039-.412-.049-.741-.044-.992 1.317-.32 4.815-.675 13.001.878zm-51.058 8.211c5.102-5.097 13.028-5.685 18.793-1.781 3.267 13.698 14.952 26.113 20.209 31.143 3.896 3.728 16.397 14.905 29.015 17.977 1.707 2.447 2.636 5.364 2.636 8.442 0 3.965-1.525 7.672-4.304 10.448-2.771 2.776-6.484 4.304-10.456 4.304-3.973 0-7.686-1.528-10.47-4.317l-.001-.001-.005-.005-45.418-45.336c-2.769-2.765-4.294-6.472-4.294-10.436.001-3.965 1.526-7.672 4.295-10.438zm-26.316 43.947c2.771-2.775 6.48-4.304 10.446-4.304 3.971 0 7.692 1.532 10.481 4.318l36.572 36.499c5.759 5.768 5.759 15.154.02 20.902-2.786 2.775-6.512 4.303-10.491 4.303s-7.705-1.528-10.479-4.291l-.001-.001-27.745-27.739c-.043-.043-.09-.083-.134-.127l-8.68-8.676c-2.785-2.782-4.318-6.496-4.315-10.458.004-3.949 1.532-7.644 4.326-10.426zm-26.366 43.938c2.773-2.769 6.49-4.294 10.468-4.294 3.945 0 7.63 1.503 10.391 4.224l27.83 27.817c2.775 2.764 4.304 6.467 4.304 10.427 0 3.959-1.529 7.662-4.315 10.437-2.772 2.768-6.485 4.293-10.456 4.293-3.977 0-7.702-1.529-10.478-4.293l-10.089-10.077c-.002-.003-.005-.005-.007-.007l-17.647-17.626c-2.782-2.779-4.314-6.491-4.314-10.451 0-3.959 1.532-7.672 4.313-10.45zm-17.54 52.786c2.785-2.782 6.507-4.314 10.48-4.314 3.972 0 7.693 1.531 10.477 4.311l10.103 10.091c2.776 2.764 4.304 6.467 4.304 10.427s-1.529 7.662-4.325 10.448c-2.771 2.775-6.484 4.304-10.456 4.304-3.973 0-7.686-1.528-10.477-4.324l-1.265-1.26c-.017-.017-.03-.035-.046-.051-.019-.018-.039-.034-.058-.052l-8.727-8.693c-5.759-5.771-5.764-15.14-.01-20.887zm205.234 114.458c-3.931-3.936-10.308-3.939-14.242-.009l-8.96 8.949c-8.514 8.514-23.941 7.442-38.86 6.407-16.201-1.126-32.954-2.288-43.795 8.842l-37.095 37.05-92.763-92.627 32.828-32.769c5.426 3.326 11.687 5.109 18.238 5.109 9.359 0 18.135-3.628 24.69-10.195 6.599-6.572 10.234-15.343 10.234-24.699 0-.087-.006-.173-.006-.26.087.001.174.006.261.006 9.346 0 18.115-3.617 24.679-10.173 6.599-6.572 10.234-15.344 10.234-24.699 0-.087-.006-.173-.006-.26.088 0 .176.006.265.006 9.343 0 18.117-3.613 24.725-10.194 6.86-6.871 10.253-15.917 10.188-24.944.09.001.18.006.27.006 9.359-.001 18.134-3.628 24.699-10.205 6.579-6.571 10.203-15.339 10.203-24.689 0-6.539-1.778-12.79-5.093-18.205l28.773-28.761c2.144-2.135 4.788-3.475 7.559-4.028.3-.032.596-.08.889-.138 4.446-.613 9.115.759 12.515 4.145 5.759 5.769 5.759 15.155.021 20.903l-8.763 8.727c-.029.029-.06.055-.089.084l-10.093 10.076c-3.936 3.93-3.94 10.307-.009 14.242 3.932 3.936 10.308 3.939 14.242.009l8.798-8.786c.002-.002.004-.004.006-.006l1.33-1.325c5.775-5.722 15.131-5.71 20.9.051 2.776 2.764 4.305 6.467 4.305 10.427 0 3.959-1.529 7.662-4.327 10.448l-8.813 8.831c-.001.001-.002.002-.003.004l-10.092 10.051c-3.941 3.925-3.954 10.302-.029 14.242 3.925 3.941 10.301 3.953 14.242.029l10.138-10.097c2.771-2.776 6.484-4.304 10.456-4.304 3.973 0 7.687 1.528 10.478 4.324 2.776 2.765 4.304 6.468 4.304 10.428 0 3.959-1.528 7.662-4.32 10.442l-17.57 17.577c-3.932 3.934-3.931 10.31.002 14.242 1.967 1.966 4.543 2.948 7.12 2.948 2.578 0 5.156-.984 7.122-2.951l8.611-8.614c.049-.047.102-.088.151-.137 2.771-2.776 6.484-4.304 10.456-4.304 3.973 0 7.686 1.528 10.467 4.314 5.753 5.747 5.748 15.117 0 20.875l-8.755 8.745c-.003.003-.007.006-.01.009s-.006.007-.009.01l-13.896 13.879c-3.935 3.931-3.939 10.308-.009 14.243 1.967 1.969 4.547 2.954 7.126 2.954 2.575 0 5.151-.982 7.117-2.945l6.797-6.789 32.577 32.539-92.755 92.642-33.234-33.194c2.317-1.49 4.534-3.242 6.615-5.323l8.955-8.944c3.937-3.929 3.941-10.306.01-14.241zm169.078 12.472-107.941 107.81c-2.525 2.522-5.905 3.911-9.517 3.911s-6.992-1.389-9.518-3.912l-17.797-17.775c-2.522-2.518-3.911-5.888-3.911-9.489 0-3.6 1.389-6.97 3.911-9.489l107.941-107.81c2.526-2.523 5.905-3.912 9.518-3.912 3.612 0 6.992 1.389 9.524 3.918l17.791 17.741c2.522 2.519 3.911 5.893 3.911 9.503-.001 3.611-1.39 6.986-3.912 9.504z"></path><path d="m121.378 56.57c1.966 1.962 4.54 2.942 7.114 2.942 2.58 0 5.161-.986 7.128-2.957 3.929-3.937 3.923-10.313-.014-14.242l-36.698-36.625c-3.936-3.929-10.313-3.924-14.242.014-3.929 3.937-3.923 10.313.014 14.242z"></path><path d="m381.722 59.512c2.575 0 5.151-.982 7.117-2.945l36.67-36.626c3.935-3.93 3.939-10.307.008-14.242-3.93-3.935-10.306-3.939-14.242-.008l-36.67 36.626c-3.935 3.93-3.939 10.307-.008 14.242 1.967 1.969 4.546 2.953 7.125 2.953z"></path><path d="m62.819 433.204c-3.899 3.966-3.845 10.343.122 14.242l.029.028c1.957 1.924 4.498 2.882 7.038 2.882 2.607 0 5.214-1.009 7.189-3.018 3.899-3.966 3.83-10.357-.136-14.256-3.965-3.899-10.341-3.844-14.242.122z"></path><path d="m342.606 352.267c1.532 0 3.086-.349 4.545-1.084 4.966-2.505 6.961-8.561 4.457-13.527-2.505-4.966-8.562-6.962-13.527-4.457l-.056.028c-4.966 2.505-6.933 8.547-4.429 13.513 1.768 3.508 5.324 5.527 9.01 5.527z"></path></svg>         <span>Sistema de colaboração</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section3Ref)}>
<svg height="492pt" viewBox="-43 0 492 492.00501" width="492pt" xmlns="http://www.w3.org/2000/svg"><path d="m400.433594 328.949219c-9.152344-6.234375-26.417969-18.597657-39.210938-31.394531-13.589844-13.59375-28.589844-34.210938-34.40625-42.445313-1.863281-2.632813-4.722656-4.390625-7.910156-4.863281-3.191406-.476563-6.4375.378906-8.984375 2.359375l-66.113281 51.421875c-5.078125 3.90625-6.089844 11.167968-2.273438 16.316406 2.132813 2.898438 4.308594 5.785156 6.523438 8.648438l-40.367188-13.460938v-31.890625c24.105469-14.261719 40.929688-38.183594 46.191406-65.691406l4.09375-14.082031c15.507813-4.839844 24.582032-20.898438 20.722657-36.679688-1.988281-8.328125-8.195313-15-16.355469-17.585938v-45.203124c0-57.65625-46.742188-104.398438-104.398438-104.398438-57.660156 0-104.402343 46.742188-104.402343 104.398438v45.191406c-8.179688 2.574218-14.402344 9.257812-16.394531 17.601562-3.859376 15.777344 5.214843 31.839844 20.722656 36.679688l4.09375 14.078125c5.265625 27.507812 22.085937 51.433593 46.191406 65.691406v31.851563l-68.304688 22.148437c-18.714843 6.066406-32.90625 20.675781-37.960937 39.082031-.199219.714844-.382813 1.4375-.550781 2.164063-.921875 4.074219-1.371094 8.238281-1.33593775 12.414062v49.398438c0 3.316406 2.68749975 6 5.99999975 6h169.464844l-9.925781 9.929687c-1.421875 1.417969-2.035157 3.453125-1.640625 5.417969l4.1875 20.941406c.472656 2.378907 2.332031 4.238281 4.707031 4.710938l20.941406 4.191406c1.96875.390625 4-.226563 5.421875-1.644531l10.480469-10.480469 13.773437 1.488281c1.777344.191406 3.546876-.417968 4.828126-1.664062s1.941406-2.996094 1.796874-4.777344l-.832031-10.46875 11.46875.214844c1.78125.03125 3.484375-.726563 4.652344-2.074219 1.164063-1.347656 1.671875-3.140625 1.382813-4.898437l-2.101563-12.789063 57.574219-57.578125c10.667968 9.570312 21.835937 18.644531 33.261718 27.035156 5.148438 3.816406 12.40625 2.804688 16.316407-2.273437l51.335937-66.019531c2.003906-2.574219 2.851563-5.863282 2.347656-9.082032-.503906-3.222656-2.320312-6.09375-5.015624-7.929687zm-233.773438-223.386719c8.199219 8.824219 35.160156 33.519531 83.683594 38.3125v4.800781c-18.050781-.359375-74.832031-4.171875-119.328125-36.523437.789063-.101563 1.582031-.203125 2.378906-.300782 11.203125-1.433593 22.3125-3.535156 33.265625-6.289062zm-101.113281-1.164062c0-51.03125 41.367187-92.398438 92.398437-92.398438s92.398438 41.367188 92.398438 92.398438v27.394531c-36.757812-3.96875-59.921875-20.578125-70.375-30.039063 18.359375-5.902344 33.949219-13.730468 46.597656-23.433594 1.753906-1.285156 2.671875-3.417968 2.402344-5.574218-.265625-2.15625-1.679688-4-3.691406-4.820313-2.015625-.816406-4.3125-.484375-6.011719.875-25.5625 19.605469-61.53125 27.746094-87.203125 31.121094-16.804688 2.242187-33.765625 3.117187-50.710938 2.621094-1.59375-.082031-3.15625.476562-4.339843 1.550781-1.179688 1.074219-1.886719 2.574219-1.960938 4.171875l-1.625 35.726563c-.097656 1.96875-.992187 3.808593-2.480469 5.101562-1.488281 1.292969-3.4375 1.921875-5.402343 1.746094zm8.15625 111.042968c-.035156-.191406-.078125-.378906-.132813-.566406l-4.9375-16.984375c-.417968-2.511719-2.378906-4.488281-4.886718-4.925781-5.101563-.90625-9.601563-3.882813-12.433594-8.226563-2.832031-4.339843-3.738281-9.660156-2.507812-14.695312 1.070312-4.472657 4.511718-7.996094 8.957031-9.171875 5.808593 2.863281 12.667969 2.605468 18.246093-.6875 5.574219-3.292969 9.113282-9.175782 9.40625-15.644532l1.359376-29.847656c5.761718.070313 15.28125-.015625 27.039062-.863281 29.8125 25.660156 66.507812 37.039063 92.292969 42.066406 28.425781 5.542969 49.582031 4.804688 50.46875 4.769531.164062-.003906.328125-.019531.488281-.042968 4.894531.894531 8.804688 4.585937 9.980469 9.421875 1.230469 5.035156.320312 10.355469-2.507813 14.695312-2.832031 4.34375-7.332031 7.320313-12.4375 8.226563-2.507812.4375-4.464844 2.414062-4.882812 4.925781l-4.9375 16.984375c-.054688.1875-.101563.375-.136719.566406-7.625 40.503906-43.003906 69.839844-84.21875 69.839844s-76.59375-29.335938-84.21875-69.839844zm84.222656 81.859375c12.96875.007813 25.808594-2.578125 37.765625-7.601562v26.570312c-23.859375 11.515625-51.671875 11.515625-75.53125 0v-26.570312c11.957032 5.023437 24.796875 7.609375 37.765625 7.601562zm-145.921875 137.398438v-43.398438c-.035156-3.257812.308594-6.503906 1.023438-9.679687.132812-.574219.277344-1.148438.433594-1.714844 3.980468-14.5 15.230468-26.027344 30.09375-30.847656l69.960937-22.683594c27.929687 14.035156 60.855469 14.042969 88.789063.011719l59.925781 19.988281c2.089843 2.433594 4.199219 4.84375 6.339843 7.230469l-81.101562 81.101562zm330.394532-30.234375c-12.65625-9.308594-24.789063-19.304688-36.347657-29.949219-2.363281-2.179687-6.03125-2.105469-8.304687.171875l-63.800782 63.796875c-1.367187 1.367187-1.992187 3.308594-1.679687 5.214844l1.433594 8.726562-10.890625-.203125c-1.695313-.039062-3.328125.648438-4.480469 1.890625-1.160156 1.230469-1.746094 2.898438-1.613281 4.585938l.785156 9.851562-9.433594-1.019531c-1.804687-.191406-3.601562.441406-4.886718 1.722656l-10.238282 10.238282-13.871094-2.769532-2.773437-13.871094 104.800781-104.800781c2.273438-2.273437 2.347656-5.941406.167969-8.308593-10.644531-11.554688-20.640625-23.6875-29.949219-36.34375l65.816406-51.199219c7.480469 10.578125 21.945313 30.179687 35.605469 43.839843 13.402344 13.398438 31.222657 26.199219 40.769531 32.710938zm0 0"></path><path d="m328.589844 301.199219-11.058594-12.636719c-2.09375-2.394531-5.691406-2.738281-8.199219-.789062l-15.078125 11.726562c-2.289062 1.78125-2.976562 4.949219-1.628906 7.519531l18.425781 35.179688c.566407 1.082031 1.449219 1.964843 2.53125 2.53125l35.179688 18.429687c2.570312 1.34375 5.738281.660156 7.519531-1.632812l11.726562-15.078125c1.953126-2.507813 1.609376-6.105469-.785156-8.199219l-12.636718-11.058594c-9.230469-8.078125-17.914063-16.761718-25.996094-25.992187zm26.46875 42.355469-5.171875 6.644531-29.074219-15.230469-15.230469-29.070312 6.648438-5.167969 7.328125 8.375c8.433594 9.632812 17.492187 18.691406 27.125 27.125zm0 0"></path></svg>            <span>Permissões de acesso</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section4Ref)}>
        <svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g id="email-marketing-business-dollar-currency"><path d="m492.896 201.832-92.896-73.832v-40h-.072c.019-2.111-.798-4.144-2.272-5.656l-64-64c-1.51-1.477-3.544-2.297-5.656-2.28v-.064h-208c-4.418 0-8 3.582-8 8v104l-92.896 73.832c-1.933 1.465-3.079 3.743-3.104 6.168v272c0 4.418 3.582 8 8 8h464c4.418 0 8-3.582 8-8v-272c-.025-2.425-1.171-4.703-3.104-6.168zm-92.896 14.168h63.32l-63.32 45.88zm65.048-16h-65.048v-51.6zm-129.048-156.688 36.688 36.688h-36.688zm-16-11.312v56c0 4.418 3.582 8 8 8h56v177.472l-12 8.712c-29.577-64.052-105.479-91.999-169.531-62.421-27.564 12.728-49.693 34.858-62.421 62.421l-12.048-8.712v-241.472zm-64 192c61.856 0 112 50.144 112 112s-50.144 112-112 112-112-50.144-112-112c.066-61.828 50.172-111.934 112-112zm-144 37.88-63.32-45.88h63.32zm0-61.88h-65.048l65.048-51.6zm-80 272v-248.328l101.928 73.856c-21.264 67.419 16.151 139.31 83.57 160.574s139.31-16.151 160.574-83.57c7.904-25.06 7.904-51.945 0-77.005l101.928-73.855v248.328z"></path><path d="m160 112h192v16h-192z"></path><path d="m160 144h192v16h-192z"></path><path d="m160 176h192v16h-192z"></path><path d="m272 384h-32c-8.837 0-16-7.163-16-16h-16c0 17.673 14.327 32 32 32h8v16h16v-16h8c17.673 0 32-14.327 32-32v-8c0-17.673-14.327-32-32-32h-32c-8.837 0-16-7.163-16-16v-8c0-8.837 7.163-16 16-16h32c8.837 0 16 7.163 16 16h16c0-17.673-14.327-32-32-32h-8v-16h-16v16h-8c-17.673 0-32 14.327-32 32v8c0 17.673 14.327 32 32 32h32c8.837 0 16 7.163 16 16v8c0 8.837-7.163 16-16 16z"></path><path d="m160 96h64c4.418 0 8-3.582 8-8v-32c0-4.418-3.582-8-8-8h-64c-4.418 0-8 3.582-8 8v32c0 4.418 3.582 8 8 8zm8-32h48v16h-48z"></path><path d="m248 48h56v16h-56z"></path><path d="m248 80h56v16h-56z"></path></g></svg>            <span>Envio de pedidos</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section5Ref)}>
        <svg id="Layer_1" enable-background="new 0 0 480.013 480.013" height="512" viewBox="0 0 480.013 480.013" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m238.068 322.013c0 57.897 47.103 105 105 105s105-47.103 105-105c0-37.745-20.022-70.896-50-89.406v-131.594c0-2.61-1.256-4.921-3.19-6.382-99.397-99.397-92.966-93.788-96.367-94.462-1.189-.236 11.366-.156-234.566-.156-17.645 0-32 14.355-32 32v416c0 17.645 14.355 32 32 32h302c17.645 0 32-14.355 32-32 0-4.418-3.582-8-8-8s-8 3.582-8 8c0 8.822-7.178 16-16 16h-302c-8.822 0-16-7.178-16-16v-416c0-8.822 7.178-16 16-16h225v61c0 17.645 14.355 32 32 32h61.123v115.515c-13.043-5.236-27.215-7.882-42-7.469v-57.045c0-13.233-10.767-24-24-24h-202c-13.234 0-24 10.767-24 24v102c0 13.233 10.766 24 24 24h105c4.418 0 8-3.582 8-8s-3.582-8-8-8h-36v-51h72c4.418 0 8-3.582 8-8v-59h53c4.411 0 8 3.589 8 8v58.727c-48.858 8.966-86 51.861-86 103.272zm82.877-229c-8.822 0-16-7.178-16-16v-49.686l65.687 65.687h-49.687zm-206.877 59h53v51h-61v-43c0-4.411 3.589-8 8-8zm53 118h-53c-4.411 0-8-3.589-8-8v-43h61zm80-67h-64v-51h64zm185 119c0 49.075-39.925 89-89 89s-89-39.925-89-89 39.925-89 89-89 89 39.925 89 89zm-81 20v-3.237c0-3.518-2.256-6.586-5.614-7.636l-9.544-2.982c-10.074-3.148-16.842-12.354-16.842-22.907v-3.237c0-10.429 6.689-19.321 16-22.624v-3.376c0-4.418 3.582-8 8-8s8 3.582 8 8v3.376c9.311 3.303 16 12.195 16 22.624 0 4.418-3.582 8-8 8s-8-3.582-8-8c0-4.411-3.589-8-8-8s-8 3.589-8 8v3.237c0 3.518 2.256 6.586 5.614 7.636l9.544 2.982c10.074 3.148 16.842 12.354 16.842 22.907v3.237c0 11.519-8.159 21.165-19 23.472v2.528c0 4.418-3.582 8-8 8s-8-3.582-8-8v-4.68c-7.713-3.996-13-12.05-13-21.32 0-4.418 3.582-8 8-8s8 3.582 8 8c0 4.411 3.589 8 8 8s8-3.589 8-8zm-261-12c0-4.418 3.582-8 8-8h78c4.418 0 8 3.582 8 8s-3.582 8-8 8h-78c-4.418 0-8-3.582-8-8zm0 60c0-4.418 3.582-8 8-8h98c4.418 0 8 3.582 8 8s-3.582 8-8 8h-98c-4.418 0-8-3.582-8-8z"></path></svg>            <span>Envio de XML de notas fiscais</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section6Ref)}>
        <svg id="Layer_1" enable-background="new 0 0 480.013 480.013" height="512" viewBox="0 0 480.013 480.013" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m238.068 322.013c0 57.897 47.103 105 105 105s105-47.103 105-105c0-37.745-20.022-70.896-50-89.406v-131.594c0-2.61-1.256-4.921-3.19-6.382-99.397-99.397-92.966-93.788-96.367-94.462-1.189-.236 11.366-.156-234.566-.156-17.645 0-32 14.355-32 32v416c0 17.645 14.355 32 32 32h302c17.645 0 32-14.355 32-32 0-4.418-3.582-8-8-8s-8 3.582-8 8c0 8.822-7.178 16-16 16h-302c-8.822 0-16-7.178-16-16v-416c0-8.822 7.178-16 16-16h225v61c0 17.645 14.355 32 32 32h61.123v115.515c-13.043-5.236-27.215-7.882-42-7.469v-57.045c0-13.233-10.767-24-24-24h-202c-13.234 0-24 10.767-24 24v102c0 13.233 10.766 24 24 24h105c4.418 0 8-3.582 8-8s-3.582-8-8-8h-36v-51h72c4.418 0 8-3.582 8-8v-59h53c4.411 0 8 3.589 8 8v58.727c-48.858 8.966-86 51.861-86 103.272zm82.877-229c-8.822 0-16-7.178-16-16v-49.686l65.687 65.687h-49.687zm-206.877 59h53v51h-61v-43c0-4.411 3.589-8 8-8zm53 118h-53c-4.411 0-8-3.589-8-8v-43h61zm80-67h-64v-51h64zm185 119c0 49.075-39.925 89-89 89s-89-39.925-89-89 39.925-89 89-89 89 39.925 89 89zm-81 20v-3.237c0-3.518-2.256-6.586-5.614-7.636l-9.544-2.982c-10.074-3.148-16.842-12.354-16.842-22.907v-3.237c0-10.429 6.689-19.321 16-22.624v-3.376c0-4.418 3.582-8 8-8s8 3.582 8 8v3.376c9.311 3.303 16 12.195 16 22.624 0 4.418-3.582 8-8 8s-8-3.582-8-8c0-4.411-3.589-8-8-8s-8 3.589-8 8v3.237c0 3.518 2.256 6.586 5.614 7.636l9.544 2.982c10.074 3.148 16.842 12.354 16.842 22.907v3.237c0 11.519-8.159 21.165-19 23.472v2.528c0 4.418-3.582 8-8 8s-8-3.582-8-8v-4.68c-7.713-3.996-13-12.05-13-21.32 0-4.418 3.582-8 8-8s8 3.582 8 8c0 4.411 3.589 8 8 8s8-3.589 8-8zm-261-12c0-4.418 3.582-8 8-8h78c4.418 0 8 3.582 8 8s-3.582 8-8 8h-78c-4.418 0-8-3.582-8-8zm0 60c0-4.418 3.582-8 8-8h98c4.418 0 8 3.582 8 8s-3.582 8-8 8h-98c-4.418 0-8-3.582-8-8z"></path></svg>            <span>Compartilhar Lançamentos</span>
        </div>
       </div>
      </S.Main>

      <S.Main3 ref={section1Ref}>
        <div className="left">
         <span>
         Crie <strong> canais de
comunicação </strong> com
todos os usuários
cadastrados no seu
sistema ERP!
         </span>
         
         <p>
         Se sua empresa possui diversos departamentos e deseja otimizar a comunicação entre os colaboradores, a melhor solução é criar canais de interação, onde o compartilhamento de informações seja ágil, seguro e integrado às funcionalidades do seu sistema ERP.
         </p>

         <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
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
         Sistema de <strong> Colaboração</strong>
         </span>
         
         <p>
         Imagine a facilidade de enviar mensagens, pedidos, orçamentos e comunicados para seus colaboradores em tempo real, de qualquer lugar. E o melhor de tudo: sem custos adicionais!
         </p>

         <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
        </div>
      </S.Main3>

      <S.Main3 ref={section3Ref}>
        <div className="left">
         <span>
         Todos os <strong> usuários BLUE ERP </strong> podem ter acesso a ferramenta!
         </span>
         
         <p>
         Os administradores do sistema têm a capacidade de controlar o acesso dos usuários. Você pode escolher se deseja que apenas os gestores ou somente a equipe administrativa tenham acesso. A decisão está em suas mãos! Tenha total flexibilidade para organizar a comunicação dentro da sua empresa.
         </p>

         <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
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
         Envio de <strong> Pedidos</strong>
         </span>
         
         <p>
         Como todas as soluções do nosso ecossistema estão totalmente integradas na BLUE ERP, os usuários podem compartilhar informações, pedidos ou qualquer tipo de cadastro diretamente com outros usuários no BLUE Talk. Por exemplo, um vendedor pode gerar um pedido no Cloud e compartilhá-lo diretamente com alguém do setor financeiro no BLUE Talk, basta clicar no botão de enviar pedido. Ou, se estiver no BLUE Talk, é só digitar "/pedido" e enviar automaticamente o pedido desejado.
         </p>

         <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
        </div>
      </S.Main3>

      <S.Main3 ref={section5Ref}>
        <div className="left">
         <span>
         Envio de <strong> XML de notas fiscais</strong>
         </span>
         
         <p>
         Em breve, teremos o recurso de envio de XML de nota fiscal. Com essa funcionalidade, o aplicativo reconhecerá automaticamente o arquivo carregado como um XML e oferecerá a opção de importar a nota de entrada diretamente para a BLUE ERP, movimentando estoques e gerando lançamentos financeiros de forma ágil e eficiente.
         </p>

         <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
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
         Compartilhar <strong> Lançamentos Financeiros</strong>
         </span>
         
         <p>
         Outro recurso incrível do Blue Talk é a opção de compartilhar lançamentos financeiros com sua equipe. Ao clicar em "anexar", o Talk puxa automaticamente as informações do módulo financeiro da BLUE ERP, permitindo que você envie lançamentos para quitação ou notifique outro setor sobre o pagamento realizado. Com isso, você ganha tempo e traz mais organização ao seu fluxo de caixa!
         </p>

         <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
        </div>
      </S.Main3>

      <S.Main4>
        <div className="left">
        <p>
        <strong> Você pode baixar o Blue Talk e instalar em seu computador</strong>, tendo ainda mais praticidade para gerenciar a comunicação entre todos os setores da sua empresa.
        </p>
        </div>

        <div className="right">

        </div>
      </S.Main4>

      <Footer/>
     </S.Container>
    )
}