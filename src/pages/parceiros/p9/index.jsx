import * as S from "./style";

import { useEffect } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";



export function P9(){
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
        Cnova é parceiro Blue ERP!
        </span>

        <div className="Logo">
         
        </div>
      </S.SubHeader>

      <S.Main>
       <span>
       Desfrute da melhor experiência vendendo seus produtos em uma empresa de e-commerce com mais de 460 milhões de consumidores em diversos países!
       </span>

       <p>
    
A Cnova, resultado da fusão entre a francesa Cdiscount e a brasileira Nova Pontocom, conquistou uma fatia significativa do mercado de comércio eletrônico, registrando mais de R$11,5 bilhões em vendas.
<br /><br />
No Brasil, suas operações são variadas e oferecem preços muito atrativos, abrangendo grandes redes como Extra, Ponto Frio e Casas Bahia, que acumulam mais de 60 milhões de acessos mensais.
<br /><br />
Agora, como cliente do BLUE ERP, você pode aproveitar a integração entre seu sistema e a Cnova, facilitando o gerenciamento de suas lojas físicas e virtuais em um só lugar e conquistando cada vez mais clientes.
       </p>
      </S.Main>
      <Footer/>
     </S.Container>
    )
}