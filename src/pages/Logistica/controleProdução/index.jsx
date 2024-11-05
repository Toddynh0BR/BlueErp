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
import Image1 from "../assets//top-image-controle-de-producao.png";
import Image2 from "../assets/producao-op.svg";
import Image3 from "../assets/producao-composicao.svg";
import Image4 from "../assets/producao-qualidade.svg";
import Image5 from "../assets/producao-simulador.svg";
import Image6 from "../assets/bloco-k.svg"


export function ControleProdução(){
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
        <strong>Gestão de Produção </strong> com <br />
         Eficiência e Qualidade!
        </h2>

        <p>
        
Aprimore sua performance em todas as fases dos processos produtivos, aumentando sua produtividade e otimizando seus resultados.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
        <img src={Image1} alt="Image" />
       </div>
       </div>

       <div className="Bottom">
       <div className="card" onClick={() => handleScrollToSection(section1Ref)}>
            <span>Ordens de produção</span>
        </div>
        <div className="card" onClick={() => handleScrollToSection(section2Ref)}>
            <span>Produtos compostos</span>
        </div>
        <div className="card" onClick={() => handleScrollToSection(section3Ref)}>
            <span>Controle de qualidade</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section4Ref)}>
            <span>Simulador de Produção</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section5Ref)}>
            <span>Bloco K SPED</span>
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
        Ordens de Produção
        </span>

        <p>
Para cada produto a ser fabricado, é fundamental criar uma ordem de produção (OP). Esse processo permite acompanhar todas as etapas, facilitando o controle de estoque e a avaliação de qualidade dos itens produzidos.
<br /><br />
Com nosso ERP em Nuvem, você também pode gerar subordens de produção com base na OP original, ideal para quando um produto utilizado como matéria-prima também precisa ser fabricado internamente. 
<br /><br />
Outro recurso importante é o descarte de itens produzidos. Esse descarte é realizado quando a mercadoria não atende aos padrões de qualidade definidos pela empresa para comercialização, garantindo a excelência dos produtos finais.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <img src={Set} alt="descer" className="bottom" onClick={()=> handleScrollToSection(section2Ref)}/>
      </S.Main2>

      <S.Main2 ref={section2Ref}>
       <div className="left">
        <span>
        Produtos Compostos
        </span>

        <p>
    
Mantenha o estoque e os demais módulos da sua empresa totalmente sincronizados com o controle de produção.
<br /><br />
Com o Sistema de Controle de Produção da BLUE ERP, é possível cadastrar produtos compostos ou acabados, especificando todos os itens necessários, como matérias-primas e subprodutos. Ao concluir uma Ordem de Produção, o sistema realiza automaticamente a baixa das matérias-primas no estoque e registra a entrada dos produtos finalizados, garantindo uma gestão precisa e eficiente.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
          <img src={Image3} alt="" className="especial"/>
       </div>

       <img src={Set} alt="descer" className="bottom" onClick={()=> handleScrollToSection(section3Ref)}/>
      </S.Main2>

      <S.Main2 ref={section3Ref}>
       <div className="left">
       <img src={Image4} alt="" />
       </div>

       <div className="right">
       
        <span>
        Controle de Qualidade
        </span>

        <p>

        

Quer que seus clientes vejam sua empresa como referência em qualidade? Controlar o padrão de excelência dos produtos é essencial.
<br /><br />
Com o módulo de PCP da BLUE ERP, você conta com ferramentas intuitivas para avaliar a qualidade de cada item produzido. Através de um checklist criado por sua equipe, incluindo todos os critérios que precisam ser verificados em cada produto, é possível registrar no sistema se o item atingiu o nível de qualidade necessário para comercialização. Garanta a excelência e conquiste a confiança dos seus clientes com mais esse recurso oferecido pela BLUE ERP.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <img src={Set} alt="descer" className="bottom" onClick={()=> handleScrollToSection(section4Ref)}/>
      </S.Main2>

      <S.Main2 ref={section4Ref}>
       <div className="left">
        <span>
        Simulador de Produção
        </span>

        <p>

        

Se você precisa acompanhar a previsão de produção e o consumo de matérias-primas, o Simulador de Produção da BLUE ERP é a solução ideal! Nosso sistema ERP online oferece uma série de recursos, sempre atualizados, para aprimorar sua gestão empresarial.
<br /><br />
Entre os principais métodos de controle está o módulo de relatórios, que inclui o Relatório de PCP: o Simulador de Produção. Esse recurso gráfico permite visualizar o progresso do processo produtivo, facilitando o monitoramento das demandas de insumos e outros recursos necessários para atender às ordens de produção.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
          <img src={Image5} alt=""/>
       </div>

       <img src={Set} alt="descer" className="bottom" onClick={()=> handleScrollToSection(section5Ref)}/>
      </S.Main2>

      <S.Main2 ref={section5Ref}>
       <div className="left">
       <img src={Image6} alt="" />
       </div>

       <div className="right">
       
        <span>
        Bloco K - SPED Fiscal
        </span>

        <p>
        


Se sua empresa atua no setor de produção, você já sabe da obrigatoriedade de enviar os relatórios de Estoque e Produção no SPED Fiscal. Com a BLUE ERP, gerar o Bloco K é simples e rápido, atendendo a todas as normas e requisitos legais.
<br /><br />
Essa atualização fiscal exige que os gestores intensifiquem o controle de estoque e estejam em conformidade com as regulamentações. Adaptar-se a essa mudança é mais fácil com um Sistema Integrado de Gestão Empresarial, como a BLUE ERP, que facilita o cumprimento das obrigações fiscais e organiza seu estoque com eficiência.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

      </S.Main2>

      <Footer/>
     </S.Container>
    )
}