import * as S from "./style";

import { useEffect } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";



export function P8(){
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
        B2W  é parceiro Blue ERP!
        </span>

        <div className="Logo">
         
        </div>
      </S.SubHeader>

      <S.Main>
       <span>
       Aumente seu faturamento anunciando seus produtos no B2W Marketplace!
       </span>

       <p>
Fundada no final de 2006, a B2W revolucionou o comércio eletrônico brasileiro ao surgir da fusão entre os gigantes Submarino, Shoptime e Americanas.com, consolidando-se como a terceira maior empresa de vendas online do mundo.
<br /><br />
Atualmente, suas páginas recebem mais de 635 milhões de visualizações mensais, o que significa que seus potenciais clientes estão por lá. Que tal aproveitar esse ecossistema completo para impulsionar sua loja virtual? Com a B2W, você se beneficia de uma visibilidade excepcional e SEO de qualidade, sem a necessidade de um investimento inicial. Você paga apenas uma comissão pelas vendas efetivamente realizadas.
<br /><br />
Como cliente do BLUE ERP, você desfruta de uma integração total entre seu sistema e sua loja virtual na B2W. Isso significa que você pode facilmente enviar produtos para anúncios, importar pedidos diretamente para o sistema, atualizar preços, gerenciar estoques e muito mais, facilitando a administração do seu negócio.
       </p>
      </S.Main>
      <Footer/>
     </S.Container>
    )
}