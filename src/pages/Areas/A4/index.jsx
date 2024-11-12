import * as S from "./style";
import React, { useRef, useEffect } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";

import { GoShieldCheck } from "react-icons/go";

import Image1 from "../assets/sistema-para-agencias-de-turismo.png";

import Image6 from "../assets/gestao-de-clientes-agencias-de-turismo.svg";
import Image7 from "../assets/gestao-de-servicos-para-agencias-de-turismo.svg";
import Image8 from "../assets/gestao-de-vendas-para-agencias-de-turismo.svg";

export function A4(){
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

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
        Sistema de Gestão para <strong> Empresas de Turismo Cultural e de Esporte </strong>

        </h2>
          
        <ul>
<li>
   <GoShieldCheck/>Controle de Contratos de Serviços e Viagens;
</li>
<li>
  <GoShieldCheck/> Gestão de Clientes e Associados;
</li>
<li>
  <GoShieldCheck/> E-commerce integrado para venda de pacotes de viagens.
</li>        
        </ul>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
        <img src={Image1} alt="Image" />
       </div>
       </div>


      </S.Main>

      <S.Main2>
       <div className="box">
        <strong onClick={()=> handleScrollToSection(section1Ref)}>Gestão de Clientes</strong>
         <p onClick={()=> handleScrollToSection(section1Ref)}><GoShieldCheck/>  Cadastro ilimitado de clientes</p>
         <p onClick={()=> handleScrollToSection(section1Ref)}><GoShieldCheck/>  Disponibilize vale crédito</p>
         <p onClick={()=> handleScrollToSection(section1Ref)}><GoShieldCheck/>  Carteira de Clientes por Vendedor</p>
         <p onClick={()=> handleScrollToSection(section1Ref)}><GoShieldCheck/>  Ofereça cashback!</p>
       </div>

       <div className="box">
        <strong onClick={()=> handleScrollToSection(section2Ref)}>Gestão de Serviços</strong>
<p onClick={()=> handleScrollToSection(section2Ref)}><GoShieldCheck/>  Cadastro ilimitado de serviços</p>
<p onClick={()=> handleScrollToSection(section2Ref)}><GoShieldCheck/>  Gestão de guias turísticos</p>
<p onClick={()=> handleScrollToSection(section2Ref)}><GoShieldCheck/>  Contratos para Viagens e Eventos</p>
<p onClick={()=> handleScrollToSection(section2Ref)}><GoShieldCheck/>  Emissão de notas e documentos fiscais</p>     
       </div>

       <div className="box">
<strong onClick={()=> handleScrollToSection(section3Ref)}>Gestão de Vendas</strong>
<p onClick={()=> handleScrollToSection(section3Ref)}><GoShieldCheck/>  Controle de Pedidos e Orçamentos</p>
<p onClick={()=> handleScrollToSection(section3Ref)}><GoShieldCheck/>  Funil de Vendas</p>
<p onClick={()=> handleScrollToSection(section3Ref)}><GoShieldCheck/>  Gestão de Oportunidades</p>
<p onClick={()=> handleScrollToSection(section3Ref)}><GoShieldCheck/>  E-commerce para Agências de Turismo</p>

       </div>
      </S.Main2>

      <S.Ecossistem>
      <span>
       <strong>Integre todos os setores </strong> do  <br /> seu negócio com nossas ferramentas!
      </span>

      <strong className="hover">
        {'>> Conhecer Ecossistema <<'}
      </strong>
      </S.Ecossistem>

      <S.Main3 ref={section1Ref}>
       <div className="left">
       <img src={Image6} alt="" />
       </div>

       <div className="right">
        <span>
        Gestão de clientes
        </span>

        <p>
        Outro recurso do sistema Blue ERP que contribui para a organização da sua empresa é o cadastro de vendedor dentro do cadastro do cliente. Dessa forma, ao atender um cliente — seja pessoa física ou jurídica — e realizar uma venda, a negociação ficará automaticamente vinculada ao vendedor designado. Isso facilita o acompanhamento das vendas e permite um controle mais preciso sobre o desempenho de cada vendedor, além de promover um atendimento personalizado e eficiente.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

      
      </S.Main3>

      <S.Main4 data-color={false}>
        <h2>
        Soluções para você <strong> gerenciar seus clientes.</strong>
</h2>

        <div className="texts">
          <div className="text">
            <span>Cadastro ilimitado de clientes</span>
            <p>
            
            Uma das vantagens do sistema Blue ERP é a ausência de limites de cadastros. Você pode incluir todos os seus clientes, seja por importação de planilha ou cadastrando diretamente no sistema. Além disso, o Blue ERP permite oferecer uma série de benefícios para sua base de clientes, promovendo oportunidades para fechar novas vendas e fortalecer relacionamentos.

            </p>
          </div>

          <div className="text">
            <span> Ofereça Cashback</span>
            <p>
           
Quando um cliente realiza uma compra e recebe um percentual do valor investido para futuras aquisições, você conquista maior fidelização. Com o recurso de cashback do Blue ERP, é possível oferecer essa vantagem aos seus clientes, incentivando novas compras e ampliando o engajamento com sua marca.


            </p>
          </div>

          <div className="text">
            <span> Crie um Vale-Crédito</span>
            <p>
           
            Se um cliente precisar cancelar uma viagem ou reagendar um evento, o Blue ERP facilita a gestão dessas situações. Com o recurso de Vale-Crédito, você pode criar créditos para esses clientes, que ficam registrados no cadastro deles, funcionando como uma poupança que pode ser usada em futuras compras.
            </p>
          </div>
        </div>

        <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>
          Experimente
        </button>
      </S.Main4>

      <S.Main5 ref={section2Ref}>
       <div className="left">
       <span>
       Gestão de serviços
        </span>

        <p>
        Com o Blue ERP, você conta com um sistema de retaguarda completo, permitindo criar contratos diretamente na plataforma para a venda de pacotes de viagens, organização de eventos, passeios, jogos e outras atividades. Essa funcionalidade assegura a documentação necessária para cada transação, facilitando a gestão da relação entre sua empresa e os clientes. Ter contratos formalizados e organizados em um único sistema torna o processo mais ágil, seguro e eficiente, garantindo uma experiência aprimorada e profissional para seus clientes.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
       <img src={Image7} alt="" />
       
       </div>

       <div className="bottom"></div>
      </S.Main5>

      <S.Main4 data-color={true}>

        <div className="texts">
          <div className="text">
            <span>           
            Gestão de Guias Turísticos</span>
            <p>
            
            No Blue ERP, você pode cadastrar todos os Guias Turísticos e Vendedores, oferecendo a cada um acesso próprio ao sistema. Com essa autonomia, eles conseguem gerar pedidos e orçamentos, organizar contratos e até imprimir essas informações de forma personalizada. Além disso, o sistema permite que você acompanhe o desempenho e o andamento dos serviços realizados por cada membro da equipe, garantindo um controle completo e preciso.
            </p>
          </div>

          <div className="text">
            <span> Cadastro Ilimitado de Serviços</span>
            <p>
           
Cadastre sem limites todos os serviços oferecidos pela sua empresa, respeitando as exigências legais. No Blue ERP, você já pode discriminar impostos, classificação do serviço e código específico de cada um. Também é possível monitorar os serviços executados por cada guia turístico, técnico ou vendedor, garantindo uma visão clara das operações da sua equipe.
            </p>
          </div>

          <div className="text">
            <span> Emissão de Notas e Documentos Fiscais</span>
            <p>
           
O módulo de Gestão Fiscal do Blue ERP simplifica a emissão de notas fiscais, como NFS-e, NF-e, entre outras, tornando o processo ágil e seguro. Isso libera tempo para que sua equipe se concentre no atendimento ao cliente e na expansão dos negócios, sempre com a garantia de conformidade fiscal e praticidade na emissão dos documentos essenciais.
            </p>
          </div>
        </div>

        <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>
          Experimente
        </button>
      </S.Main4>

      <S.Main3 ref={section3Ref}>
       <div className="left">
       <img src={Image8} alt="" />
       </div>

       <div className="right">
        <span>
        Gestão de vendas
        </span>

        <p>
        Anunciar serviços como pacotes de viagens, eventos esportivos, shows, concertos, seguros de viagem e até mesmo produtos fica muito mais simples com uma loja virtual. Com os recursos da Blue Loja, você tem uma plataforma completa para criar seu e-commerce de turismo de forma rápida e eficiente!
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

      
      </S.Main3>

      <S.Main4 data-color={false}>
        <h2>Soluções para você <strong> gerenciar seus clientes.</strong></h2>

        <div className="texts">
          <div className="text">
            <span> Funil de Vendas</span>
            <p>
            
           
Acompanhe de perto a evolução das negociações e tenha um pipeline de oportunidades com gráficos sempre atualizados. O Funil de Vendas do Blue ERP oferece uma visão panorâmica do relacionamento com seus clientes e das ações de marketing, auxiliando na tomada de decisões estratégicas.


            </p>
          </div>

          <div className="text">
            <span> Controle de Pedidos e Orçamentos</span>
            <p>
           
            Quando um cliente deseja conhecer seus pacotes ou solicitar um pacote personalizado, você pode criar orçamentos e gerar pedidos no Blue ERP. Acompanhe o progresso de cada negociação por cliente, vendedor ou unidade, otimizando o fluxo de atendimento.
            </p>
          </div>

          <div className="text">
            <span> Gestão de Oportunidades</span>
            <p>
           
Com base nas suas ações de marketing e no cadastro de clientes, o recurso de Gestão de Oportunidades permite acompanhar cada negociação. Gere e acompanhe ligações, e-mails, descontos, cotações, vendas fechadas e todas as interações da sua equipe comercial em um só lugar, facilitando a organização e o acompanhamento das atividades comerciais.







            </p>
          </div>
        </div>

        <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>
          Experimente
        </button>
      </S.Main4>

      <Footer/>
     </S.Container>
    )
}