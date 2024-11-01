import * as S from "./style";

import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";

import Set from "../assets/bottom-set.svg";
import Image1 from "../assets/top-image-controle-de-vendas.svg";
import Image2 from "../assets/sistema-de-pdv-offline.svg";
import Image3 from "../assets/sistema-crm.svg";
import Image4 from "../assets/faturamento-em-lote.svg";
import Image5 from "../assets/gestao-de-vendedores.svg";
import Image6 from "../assets/impressao-documento-fiscal.svg";

export function CatalogoVirtual(){
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
        Otimize Suas Vendas com a Criação de <br />
        um <strong> Catálogo Virtual</strong>
        </h2>

        <p>
        Permita que seus clientes acessem seus produtos e escolham o que desejam, onde e quando quiserem, proporcionando comodidade ao seu público, mesmo à distância.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
        <img src={Image1} alt="Image" />
       </div>
       </div>

       <div className="Bottom">
        <div className="card" onClick={() => handleScrollToSection(section1Ref)}>
            <span>Tabela de preço</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section2Ref)}>
            <span>Imagem e descrição de produtos</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section3Ref)}>
            <span>Envio do catálogo por e-mail</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section4Ref)}>
            <span>Compra online</span>
        </div>
        <div className="card" onClick={() => handleScrollToSection(section5Ref)}>
            <span>Finalização da venda</span>
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
         Tabela de Preço
        </span>

        <p>

        
Se seu estabelecimento possui diferentes preços para os produtos, como atacado ou varejo, ou até mesmo variações de preço entre loja física e online, utilize a ferramenta de tabela de preços.
<br /><br />
Com ela, você pode informar o preço dos produtos para cada situação de venda de forma prática. 
<br /><br />
Além disso, não é necessário alterar manualmente os preços de cada item, pois qualquer atualização será automática.
<br /><br />
Isso proporciona mais agilidade e eficiência, permitindo que você venda mais!
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <img src={Set} alt="descer" className="bottom" onClick={()=> handleScrollToSection(section2Ref)}/>
      </S.Main2>

      <S.Main2 ref={section2Ref}>
       <div className="left">
        <span>
        Imagens e Descrição de Produtos
        </span>

        <p>

        
Invista em boas imagens para seus produtos! Como o catálogo virtual será enviado ao cliente, onde ele realizará a compra, as imagens devem atrair a atenção e incentivar a aquisição do item.
<br /><br />
Além disso, forneça descrições detalhadas sobre o produto. 
<br /><br />
Dessa forma, seu cliente terá total clareza e confiança de que está escolhendo o produto correto.

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
         Envio do Catálogo por E-mail
        </span>

        <p>

        
Com a criação do catálogo em seu sistema BLUE ERP, você pode enviá-lo aos seus clientes por e-mail.
<br /><br />
O consumidor poderá visualizar seus produtos no computador ou em dispositivos móveis, como tablets e smartphones, acessando imagens, características, preços e finalizando a compra.
<br /><br />
Personalize o servidor de e-mails da sua empresa e, assim, se o cliente tiver alguma dúvida, ele poderá responder diretamente ao e-mail!
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <img src={Set} alt="descer" className="bottom" onClick={()=> handleScrollToSection(section4Ref)}/>
      </S.Main2>

      <S.Main2 ref={section4Ref}>
       <div className="left">
        <span>
        Cliente Compra Diretamente pelo Catálogo
        </span>

        <p>
        
        A experiência de compra se torna muito mais fácil para o cliente!
        <br /><br />
        No catálogo virtual, o consumidor pode conferir detalhes sobre os produtos, como imagem, descrição e preço, e adicionar os itens ao carrinho de compras. 
        <br /><br />
        Quando desejar, basta finalizar o pedido informando seu nome, CPF/CNPJ, e-mail, telefone e a forma de pagamento desejada.
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
        Finalização da venda
        </span>

        <p>
        
Quando o cliente finaliza o pedido através do catálogo virtual, essa venda entra na BLUE ERP, onde é possível que você finalize da forma que desejar. 
<br /><br />
Com a venda finalizada, é gerado o lançamento financeiro, e também, ocorre a baixa dos produtos vendidos do depósito configurado no catálogo virtual. 
<br /><br />
Ainda, é possível que você emita nota fiscal e boletos bancários, caso necessário.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

      </S.Main2>
      <Footer/>
     </S.Container>
    )
}