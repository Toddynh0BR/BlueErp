import * as S from "./style";

import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";

import Set from "../assets/bottom-set.svg";
import Image1 from "../assets/top-image-gestao-de-servicos.png";
import Image2 from "../assets/controle-de-equipamentos.svg";
import Image3 from "../assets/gestao-de-tecnicos.svg";
import Image4 from "../assets/controle-interno-de-os.svg";
import Image5 from "../assets/impressao-de-documentos.svg";
import Image6 from "../assets/alterar-os-em-massa.svg";

export function GestaoServiços(){
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
        As <strong>Ferramentas Certas para Sua Empresa </strong> <br />
        de Prestação de Serviços!
        </h2>

        <p>
        
        Recursos centralizados para gerenciar a dinâmica da prestação de serviços, oferecendo acesso rápido e fácil!
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
        <img src={Image1} alt="Image" />
       </div>
       </div>

       <div className="Bottom">
        <div className="card" onClick={() => handleScrollToSection(section1Ref)}>
            <span>Controle de Equipamentos</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section2Ref)}>
            <span>Gestão de Técnicos</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section3Ref)}>
            <span>Controle Interno de OS</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section4Ref)}>
            <span>Impressão de Documentos</span>
        </div>
        <div className="card" onClick={() => handleScrollToSection(section5Ref)}>
            <span>Alterar OS em massa</span>
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
        Controle de Equipamentos
        </span>

        <p>

        Com a gestão de serviços da BLUE ERP, você pode monitorar os equipamentos associados a cada ordem de serviço.
        <br /><br />
         Para quem realiza serviços externos, é possível registrar todos os equipamentos retirados da empresa para a execução do serviço.
         <br /><br />
         Para assistências técnicas, você pode especificar em qual equipamento do cliente o serviço foi realizado.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <img src={Set} alt="descer" className="bottom" onClick={()=> handleScrollToSection(section2Ref)}/>
      </S.Main2>

      <S.Main2 ref={section2Ref}>
       <div className="left">
        <span>
        Acompanhamento dos Técnicos
        </span>

        <p>
       

Outra funcionalidade da Gestão de Serviços do BLUE ERP é o acompanhamento do desempenho dos seus técnicos.
<br /><br />
Você pode cadastrar todos os seus técnicos, permitindo que cada um crie seu próprio laudo para cada Ordem de Serviço. Essas informações podem ser impressas de forma personalizada sempre que necessário.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
        <div className="Especial">
          <img src={Image3} alt="" />
        </div>
       </div>

       <img src={Set} alt="descer" className="bottom" onClick={()=> handleScrollToSection(section3Ref)}/>
      </S.Main2>

      <S.Main2 ref={section3Ref}>
       <div className="left">
       <img src={Image4} alt="" />
       </div>

       <div className="right">
       
        <span>
        Controle Interno de OS
        </span>

        <p>
        
Você pode gerenciar as Ordens de Serviço Avulsas no BLUE ERP. 
<br /><br />
Essas são ordens criadas exclusivamente para controle interno, sem gerar registros financeiros. 
<br /><br />
Dessa forma, é possível registrar todas as informações de maneira eficiente e manter um controle completo sobre os dados.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <img src={Set} alt="descer" className="bottom" onClick={()=> handleScrollToSection(section4Ref)}/>
      </S.Main2>

      <S.Main2 ref={section4Ref}>
       <div className="left">
        <span>
        Impressão de Documentos
        </span>

        <p>
        
        Para cada ordem de serviço criada, o BLUE ERP permite que você imprima diversos documentos. 
        <br /><br />
        Além do espelho da OS, é possível imprimir recibos, ordens externas e até enviar os documentos por e-mail.
        <br /><br />
        Todos os documentos podem ser personalizados, ajustando os dados de acordo com as necessidades da sua empresa.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">     
           <img src={Image5} alt="" />
       </div>
       <img src={Set} alt="descer" className="bottom" onClick={()=> handleScrollToSection(section5Ref)}/>
  
      </S.Main2>

      <S.Main2 ref={section5Ref}>
       <div className="left">
       <img src={Image6} alt="" />
       </div>

       <div className="right">
       
        <span>
        Alterar OS em Massa
        </span>

        <p>
     

Sem dúvida, a praticidade na gestão da sua empresa de prestação de serviços é algo que todo empreendedor busca.
<br /><br />
 Pensando nisso, uma das vantagens do BLUE ERP é a possibilidade de realizar alterações em massa na listagem de Ordens de Serviço. Ao acessar sua lista de OS, você pode: cancelar ordens selecionadas, finalizar ordens selecionadas e modificar o status de várias OS de uma só vez.
 <br /><br />
 Isso economiza tempo e garante mais eficiência na administração da sua empresa.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>
      </S.Main2>


      <Footer/>
     </S.Container>
    )
}