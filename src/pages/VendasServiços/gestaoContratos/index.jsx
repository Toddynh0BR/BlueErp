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
            <span> Personalização e impressão de contratos</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section2Ref)}>
            <span>Criação de contratos</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section3Ref)}>
            <span>Envio por e-mail</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section4Ref)}>
            <span>Registros financeiros</span>
        </div>
        <div className="card" onClick={() => handleScrollToSection(section5Ref)}>
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
       <img src={Image2} alt="" className="especial"/>
       </div>

       <div className="right">
        <span>
        Personalização e Impressão de Contratos
        </span>

        <p>
    

Está cansado de redigir manualmente todas as cláusulas e informações dos contratos? Com a BLUE ERP, você pode definir suas informações padrão uma única vez!
<br /><br />
 Assim, sempre que precisar imprimir esse modelo de contrato, o sistema automaticamente preencherá os dados necessários, facilitando e agilizando o processo.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <img src={Set} alt="descer" className="bottom" onClick={()=> handleScrollToSection(section2Ref)}/>
      </S.Main2>

      <S.Main2 ref={section2Ref}>
       <div className="left">
        <span>
        Criação de Contratos
        </span>

        <p>
        
        Defina de forma clara e objetiva os dados do credor, a duração do contrato, as datas de pagamento ou vencimento, os valores e a quantidade de parcelas, além da comissão do vendedor, se aplicável. Isso tudo visa promover a eficiência na negociação.
        <br /><br />
         Além disso, você pode controlar o status do contrato, podendo verificar se ele está ativo, em processo judicial, em acordo contratual ou rescindido.
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
        Envio do Contrato por E-mail
        </span>

        <p>
        
        Com a criação do catálogo no BLUE ERP, você pode facilmente enviar contratos aos seus clientes por e-mail. O consumidor poderá visualizar a descrição do contrato no computador ou em dispositivos móveis, como tablets e smartphones, acessando imagens, características, preços e finalizando a compra.
        <br /><br />
         Personalize o servidor de e-mails da sua empresa e, assim, caso o cliente tenha alguma dúvida, ele poderá responder diretamente ao seu e-mail!
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <img src={Set} alt="descer" className="bottom" onClick={()=> handleScrollToSection(section4Ref)}/>
      </S.Main2>

      <S.Main2 ref={section4Ref}>
       <div className="left">
        <span>
        Registros Financeiros
        </span>

        <p>
        
        Tenha total controle dos registros financeiros gerados pela realização de um contrato. 
        <br /><br />
        Com o módulo Financeiro, você pode visualizar amplamente as parcelas abertas, pagas ou em atraso, facilitando o processo de cobranças e renegociações.
        <br /><br />
         Além disso, é possível gerar boletos para cada parcela do contrato em vigor, que também são enviados diretamente para o e-mail do contratante.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
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
        Emissão de NFS-e
        </span>

        <p>
       

Além de todos os recursos para otimizar a criação do contrato, com nosso sistema para emissão de Nota Fiscal de Serviço Eletrônica (NFS-e), você pode emitir seus documentos fiscais rapidamente após o faturamento do contrato, com apenas alguns cliques.
 <br /><br />
 E não se preocupe, a BLUE ERP possui integração com mais de 1.000 municípios e está continuamente expandindo!
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>
      </S.Main2>


      <Footer/>
     </S.Container>
    )
}