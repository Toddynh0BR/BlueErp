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

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
        <img src={Image1} alt="Image" />
       </div>
       </div>

       <div className="Bottom">
        <div className="card" onClick={() => handleScrollToSection(section1Ref)}>
            <span>Cotações Online</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section2Ref)}>
            <span>Ordem de compra</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section3Ref)}>
            <span>Notas de entrada</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section4Ref)}>
            <span>Consulta de CNPJ</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section5Ref)}>
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
        <span>
        Cotações Online
        </span>

        <p>
        
Com a Blue ERP, você conta com uma ferramenta poderosa para otimizar cotações e melhorar suas compras. Crie cotações e envie diretamente para o e-mail dos seus fornecedores, que podem responder aos custos da sua solicitação por meio de um formulário online.
<br /><br />
Depois de receber as cotações, você pode analisá-las no próprio sistema e transformar a melhor proposta em uma ordem de compra aprovada, trazendo mais praticidade e controle aos processos de compra da sua empresa.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <img src={Set} alt="descer" className="bottom" onClick={()=> handleScrollToSection(section2Ref)}/>
      </S.Main2>

      <S.Main2 ref={section2Ref}>
       <div className="left">
        <span>
         Ordem de Compra
        </span>

        <p>
 As ordens de compra são documentos que autorizam a aquisição de mercadorias
 junto aos fornecedores. Na BLUE ERP, você pode cadastrar suas ordens de compra manualmente 
 ou gerá-las a partir de uma cotação. Além disso, é possível enviar as ordens 
 diretamente para o e-mail do fornecedor ou imprimir um modelo personalizado de acordo com suas preferências.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
          <img src={Image2} alt="" />
       </div>

       <img src={Set} alt="descer" className="bottom" onClick={()=> handleScrollToSection(section3Ref)}/>
      </S.Main2>

      <S.Main2 ref={section3Ref}>
       <div className="left">
       <img src={Image3} alt="" />
       </div>

       <div className="right">
       
        <span>
         Nota de Entrada
        </span>

        <p>
       
As Notas Fiscais de Entrada registram a compra de produtos, bens ou serviços por uma empresa. Com a BLUE ERP, você pode cadastrar cada NF de entrada recebida, seja gerando-a a partir de uma ordem de compra ou importando o arquivo XML enviado pelo seu fornecedor.
<br /><br />
O registro da nota de entrada é integrado diretamente ao setor financeiro e ao estoque, permitindo que você controle a entrada dos itens no estoque e as duplicatas a serem pagas com facilidade.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <img src={Set} alt="descer" className="bottom" onClick={()=> handleScrollToSection(section4Ref)}/>
      </S.Main2>

      <S.Main2 ref={section4Ref}>
       <div className="left">
        <span>
        Consultar Notas Emitidas contra seu CNPJ
        </span>

        <p>
       

Monitorar todas as notas fiscais emitidas para a sua empresa é essencial para evitar problemas futuros.
 Com a BLUE ERP, você pode acessar, diretamente no módulo de Gestão de Compras,
  todas as notas emitidas contra o seu CNPJ,
garantindo um controle eficiente e tranquilo das suas transações.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       
       </div>

       <div className="right">
       <img src={Image4} alt="" />
       </div>

       <img src={Set} alt="descer" className="bottom" onClick={()=> handleScrollToSection(section5Ref)}/>
      </S.Main2>

      <S.Main2 ref={section5Ref}>
       <div className="left">
       <img src={Image5} alt="" />
       </div>

       <div className="right">
       
        <span>
        Relatórios de Compras
        </span>

        <p>
       
        
Seja para analisar seu Estoque Global, identificar o Estoque Crítico, monitorar as movimentações entre estoques ou reconciliar dados de saídas e receitas, a BLUE ERP oferece relatórios perfeitos para cada uma dessas operações. Esses relatórios organizam as informações de forma clara, permitindo um acompanhamento eficiente de tudo o que ocorre em seus armazéns.

Além disso, você conta com relatórios de Previsão de Compra, Grade de Produtos, Inventário e Produtos com Lote e Validade. Com este último, é possível visualizar o saldo de cada produto armazenado, conforme a data de vencimento e o número do lote, evitando o risco de comercializar itens vencidos.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

      </S.Main2>

      <Footer/>
     </S.Container>
    )
}