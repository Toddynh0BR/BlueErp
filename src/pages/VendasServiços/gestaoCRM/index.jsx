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
            <span>Dashboard de CRM</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section2Ref)}>
            <span>Funil de Vendas</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section3Ref)}>
            <span>Pipe de Oportunidades</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section4Ref)}>
            <span>Histórico de Interações</span>
        </div>
        <div className="card" onClick={() => handleScrollToSection(section5Ref)}>
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