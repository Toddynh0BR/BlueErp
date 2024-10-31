import * as S from "./style";

import { useEffect } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";



export function P11(){
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

      <S.SubHeader>
        <h2>Parceiros e Integrações</h2>
        <span>
        Jet Commerce é parceiro Blue ERP!
        </span>

        <div className="Logo">
         
        </div>
      </S.SubHeader>

      <S.Main>
       <span>
       Venda online para milhões de pessoas conectando sua loja aos principais marketplaces do mercado!
       </span>

       <p>
    
Com mais de 18 anos de história focados em e-commerce, a Jet e-business oferece soluções de e-commerce para pequenas, médias e grandes empresas. Com tecnologia escalável e alta performance, foi o parceiro ideal por compartilhar os mesmos atributos e atender o mesmo perfil de empreendedor que o BLUE ERP.
<br /><br />
Passando da marca de 14 mil lojas online ativas, a Jet tem no seu DNA a inovação e a tecnologia. Além de fornecer know-how e qualidade técnica, a empresa se envolve com o projeto de cada cliente, estudando o mercado e desenvolvendo soluções de loja online customizadas para o negócio.
<br /><br />
A parceria com o BLUE ERP proporcionou a tecnologia e a operação necessárias para integrar os negócios dos clientes do BLUE ERP com dezenas de incríveis marketplaces do mercado, como Americanas.com, Submarino.com, Pontofrio.com, Walmart, entre outros. Além disso, essa colaboração também possibilitou a integração com a plataforma de loja online da Jet, facilitando a venda online dos clientes através de uma loja segura, escalável e própria na internet.
       </p>
      </S.Main>
      <Footer/>
     </S.Container>
    )
}