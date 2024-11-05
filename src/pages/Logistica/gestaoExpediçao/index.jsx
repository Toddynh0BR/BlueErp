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
import Image1 from "../assets/top-image-controle-de-estoque.svg";
import Image2 from "../assets/lancamentos-automaticos.svg";
import Image3 from "../assets/top-image-controle-de-estoque.svg";
import Image4 from "../assets/relatorios-de-estoque.svg";
import Image5 from "../assets/sincronizacao-loja-fisica-virtual.svg";
import Image6 from "../assets/relatorios-de-estoque.svg";
import Image7 from "../assets/sincronizacao-loja-fisica-virtual.svg";

export function GestaoExpediçao(){
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


       <div className="Center">
       <div className="left">
        <h2>
        Gerencie o processo de <strong>expedição dos produtos</strong> destinados aos clientes.
        </h2>

        <p>
         Administre a armazenagem, seleção, despacho e a entrega efetiva dos itens a partir de qualquer local e a qualquer momento.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
        <img src={Image1} alt="Image" />
       </div>
       </div>

       <div className="Bottom">
       <div className="card" onClick={() => handleScrollToSection(section1Ref)}>
            <span>Lançamentos automáticos</span>
        </div>
        <div className="card" onClick={() => handleScrollToSection(section2Ref)}>
            <span>Ordens de Expedição</span>
        </div>
        <div className="card" onClick={() => handleScrollToSection(section3Ref)}>
            <span>Etiqueta de Despacho</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section4Ref)}>
            <span>Endereçamento de Estoque</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section5Ref)}>
            <span>Integração com BLUE Web</span>
        </div>
        <div className="card" onClick={() => handleScrollToSection(section6Ref)}>
            <span>Integração com JadLog</span>
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
        Automatização de Lançamentos a partir de Notas Fiscais de Compra e Venda
        </span>

        <p>

      
Ganhe tempo no cadastro de produtos e minimize erros de lançamento. Com a BLUE ERP, você pode automatizar a entrada de mercadorias no seu estoque utilizando o XML das notas fiscais dos seus fornecedores. Ao realizar suas vendas, o sistema atualiza o estoque em tempo real, sem a necessidade de alternar entre diferentes telas.
<br /><br />
Dedique seu tempo e energia ao crescimento e aumento das vendas da sua empresa, enquanto cuidamos do resto para você!
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <img src={Set} alt="descer" className="bottom" onClick={()=> handleScrollToSection(section2Ref)}/>
      </S.Main2>

      <S.Main2 ref={section2Ref}>
       <div className="left">
        <span>
        Ordens de Expedição
        </span>

        <p>
        
        Uma das grandes vantagens de utilizar Ordens de Expedição é a possibilidade de gerar documentos que reúnem informações essenciais, como o depósito onde o produto está armazenado, o cliente, a transportadora encarregada da entrega e o profissional responsável pela separação e despacho dos itens. Essa organização aprimora a eficiência e a produtividade dos processos internos da sua empresa.
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
        Etiqueta de Despacho
        </span>

        <p>

        
Visando agilizar o processo de despacho, a BLUE ERP permite que seus clientes imprimam etiquetas de despacho para serem afixadas nas embalagens dos produtos. Essa prática facilita a identificação rápida dos itens e fornece informações essenciais sobre o destinatário e o endereço de entrega.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <img src={Set} alt="descer" className="bottom" onClick={()=> handleScrollToSection(section4Ref)}/>
      </S.Main2>

      <S.Main2 ref={section4Ref}>
       <div className="left">
        <span>
        Endereçamento de Estoque
        </span>

        <p>

        
Ao realizar a busca por um produto, nada é mais prático do que receber instantaneamente a localização do item. Com o sistema, você pode registrar o local exato onde cada mercadoria está armazenada, como o corredor ou a prateleira específica. Esse processo assegura uma maneira ágil, independente e flexível de localizar rapidamente um produto, otimizando a eficiência na gestão do estoque.
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
        Integração com blue Web
        </span>

        <p>
        
        Com o blue Web, você tem a capacidade de gerenciar e monitorar todas as suas postagens diretamente do seu computador. Essa funcionalidade proporciona maior comodidade ao programar os envios dos seus produtos aos clientes. Antes mesmo de a encomenda ser entregue aos Correios, o sistema gera um código de rastreamento exclusivo para cada volume a ser enviado.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>
       <img src={Set} alt="descer" className="bottom" onClick={()=> handleScrollToSection(section6Ref)}/>
      </S.Main2>

      <S.Main2 ref={section6Ref}>
       <div className="left">
        <span>
        Integração com JadLog
        </span>

        <p>
        
        Envie suas mercadorias para os clientes por meio da integração com a transportadora JadLog. Com esta parceria, sua empresa pode despachar produtos sem limitações em relação a embalagens ou peso, oferecendo maior controle e segurança no processo de entrega. Além disso, essa integração proporciona economia significativa em logística!
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
          <img src={Image7} alt="" />
       </div>

      </S.Main2>

      <Footer/>
     </S.Container>
    )
}