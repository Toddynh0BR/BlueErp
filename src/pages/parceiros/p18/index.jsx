import * as S from "./style";

import { useEffect } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";



export function P18(){
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
        Woocommerce  é parceiro Blue ERP!
        </span>

        <div className="Logo">
         
        </div>
      </S.SubHeader>

      <S.Main>
       <span>
       Conte com uma plataforma de eCommerce totalmente personalizável para criar uma loja online de sucesso!
       </span>

       <p>
 
       Considerada a plataforma de comércio eletrônico mais popular da web, a WooCommerce é open source, desenvolvida especialmente para rodar junto com o WordPress. Seu grande diferencial é a facilidade de uso, o que lhe garante, atualmente, uma generosa fatia de 25% das lojas de comércio eletrônico mundial.
<br /><br />
Além disso, a WooCommerce possui centenas de extensões, tanto gratuitas quanto pagas, que permitem aos usuários adaptar a plataforma às necessidades de cada tipo de negócio.
<br /><br />
Você, cliente BLUE ERP, que já possui uma loja WooCommerce ou deseja criar a sua, saiba que pode integrar seu sistema de gestão e sua loja com apenas alguns cliques. Assim, em um só lugar, é possível realizar todo tipo de controle financeiro, gerenciamento de pedidos e do catálogo, gestão de estoque, vendas e fiscal, através da interface que você já conhece. Potencialize seus resultados com uma solução que traz simplicidade e eficácia ao seu eCommerce!
       </p>
      </S.Main>
      <Footer/>
     </S.Container>
    )
}