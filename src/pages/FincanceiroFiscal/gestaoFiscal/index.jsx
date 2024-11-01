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
            <span> SPED Fiscal</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section2Ref)}>
            <span>Bloco K</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section3Ref)}>
            <span>CF-e SAT</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section4Ref)}>
            <span>MDF-e e Notas de Exportação</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section4Ref)}>
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
        <span>
         SPED Fiscal
        </span>

        <p>
        
Diga adeus às dores de cabeça ao enviar os arquivos do SPED para o seu contador! No módulo de SPED Fiscal da BLUE ERP, você pode gerar o arquivo a partir dos XMLs de entrada dos fornecedores e das notas fiscais emitidas.

Oferecemos uma estrutura fiscal robusta e coesa, que permite gerar e armazenar todas as suas informações e operações fiscais. Isso aumenta sua produtividade e garante eficiência e fluidez em sua rotina administrativa.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <img src={Set} alt="descer" className="bottom" onClick={()=> handleScrollToSection(section2Ref)}/>
      </S.Main2>

      <S.Main2 ref={section2Ref}>
       <div className="left">
        <span>
         Bloco K
        </span>

        <p>

    
Se você precisa apresentar os controles de estoque e produção ao fisco, conte com o Gerador de Bloco K do SPED disponível em nosso sistema.

Com a BLUE ERP, você tem total controle sobre matéria-prima, composição de produtos, pedidos e ordens de produção, além de garantir a qualidade e a integração completa de seus lançamentos fiscais.







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
         CF-e SAT
        </span>

        <p>

        
Se você empreende no estado de São Paulo, sabe que a emissão do CF-e SAT, que substitui o tradicional Cupom Fiscal, é essencial. Por que perder tempo com sistemas que têm limites de uso ou que não se integram com outras áreas do seu negócio?

Experimente um ERP completo, prático e eficiente. Com a BLUE ERP, você pode emitir seus documentos fiscais rapidamente e sem complicações. E, para garantir seu sucesso, oferecemos suporte gratuito para ajudar sua empresa a crescer cada vez mais.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <img src={Set} alt="descer" className="bottom" onClick={()=> handleScrollToSection(section4Ref)}/>
      </S.Main2>

      <S.Main3 ref={section4Ref}>
        <span>Ferramentas desenvolvidas para <strong> organizar e descomplicar o seu dia a dia!</strong></span>

        <div className="cards">
         <div className="card">
          <span> NF-e</span>
          <p>
            

          Simplifique a gestão fiscal do seu negócio automatizando os processos e centralizando todas as informações em um único lugar. Assim que a NF-e é emitida, a baixa no estoque e no financeiro ocorre instantaneamente, permitindo que você envie o Danfe e o XML para o cliente por e-mail rapidamente.
          </p>
         </div>

         <div className="card">
          <span>NFC-e</span>
          <p>

          
          Emitir NFC-e nunca foi tão simples! Com o emissor de notas fiscais da BLUE ERP, você pode gerar a Nota Fiscal de Consumidor Eletrônica por meio de um PDV completo e fácil de operar. Além disso, oferecemos integração com todos os setores da sua empresa, automatizando a gestão de produção, estoque e finanças.
          </p>
         </div>

         <div className="card">
          <span>NFS-e</span>
          <p>

          Com nosso sistema para emissão de Nota Fiscal de Serviço Eletrônica (NFS-e), você pode integrar ordens de serviço e emitir seus documentos fiscais em poucos cliques. O BLUE ERP já possui integração com mais de 1.000 municípios e continua expandindo, garantindo que você não precise se preocupar com a emissão.
          </p>
         </div>

         <div className="card">
          <span> NF-e de Exportação</span>
          <p>
          
         
Por meio da BLUE ERP, você pode emitir notas fiscais de exportação de forma automatizada e ágil, carregando os dados de produtos rapidamente. Suas notas são armazenadas na nuvem, permitindo acesso a elas onde e quando desejar, além de ser possível imprimi-las ou enviá-las por e-mail aos seus clientes facilmente.


          </p>
         </div>

         <div className="card">
          <span>CT-e</span>
          <p>
 
          Se você deseja emitir CT-e com facilidade e receber suporte e treinamento total em um sistema compatível com Certificados A1 e A3, a BLUE ERP é a solução. Elimine erros de digitação ou cálculos imprecisos de impostos, permitindo que sua equipe economize tempo nas operações de transporte.
          </p>
         </div>

         <div className="card">
          <span> MDF-e</span>
          <p>
          
      
          Com a BLUE ERP, você pode acompanhar o status dos seus MDF-es a qualquer momento e de qualquer lugar. Além de exportá-los em XML ou PDF de maneira prática, você poderá encerrar os manifestos emitidos rapidamente, liberando veículo e motorista para novas entregas.
          </p>
         </div>
        </div>

        <div className="bottom">

        </div>
      </S.Main3>

      <Footer/>
     </S.Container>
    )
}