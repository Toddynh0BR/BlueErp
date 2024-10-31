import * as S from "./style";

import { useEffect } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";



export function P2(){
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
         Mercado Livre é parceiro Blue ERP!
        </span>

        <div className="Logo">
         
        </div>
      </S.SubHeader>

      <S.Main>
       <span>
       O Mercado Livre é uma das principais plataformas de comércio online da América Latina, permitindo que qualquer pessoa possa vender seus produtos e alcançar milhares de consumidores.
       </span>

       <p>
Como uma empresa de tecnologia, o Mercado Livre busca democratizar o comércio eletrônico, oferecendo uma plataforma robusta e todos os serviços necessários para que pessoas e empresas possam comprar, vender, pagar, anunciar, enviar e gerenciar seus negócios na internet.
<br /><br />
Em 2017, a plataforma ultrapassou a marca de 211 milhões de usuários registrados na América Latina, refletindo o fortalecimento do ecossistema nos países onde está presente. Hoje, conta com mais de 10 milhões de vendedores e 34 milhões de compradores ativos.
<br /><br />
A parceria do BLUE ERP com o Mercado Livre possibilita integrações que tornam as operações diárias dos vendedores mais eficientes, além de expandir a visibilidade da plataforma para novos empreendedores.
<br /><br />
Com a integração entre o Mercado Livre e o BLUE ERP, é possível gerenciar com eficácia e organização as vendas, os anúncios e o estoque, proporcionando maior controle e informações para o crescimento do seu negócio.
       </p>
      </S.Main>
      <Footer/>
     </S.Container>
    )
}