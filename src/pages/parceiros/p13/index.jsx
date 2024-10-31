import * as S from "./style";

import { useEffect } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";



export function P13(){
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
        Loja Integrada  é parceiro Blue ERP!
        </span>

        <div className="Logo">
         
        </div>
      </S.SubHeader>

      <S.Main>
       <span>
       Crie sua loja virtual sem complicação e potencialize os resultados do seu negócio apostando na Loja Integrada!
       </span>

       <p>
Considerada uma das plataformas mais populares do Brasil, a Loja Integrada possui integração com os principais marketplaces do mercado. Além disso, um de seus grandes diferenciais é a facilidade que os usuários têm em criar sua loja, de qualquer segmento, a partir de temas prontos e com design responsivo, disponíveis para personalização.
<br /><br />
O resultado desses benefícios e flexibilidade não poderia ser diferente. Hoje, a Loja Integrada já conta com quase 1 milhão de lojas virtuais cadastradas.
<br /><br />
E o seu sistema ERP, BLUE ERP, não vai deixar você de fora. Agora, clientes BLUE ERP contam com mais essa vantagem. Através da nossa Central de Integrações, é possível vincular sua conta na Loja Integrada ao seu sistema de gestão. Assim, você pode importar e exportar produtos, controlar estoques, gerenciar suas vendas, emitir notas e muito mais.
       </p>
      </S.Main>
      <Footer/>
     </S.Container>
    )
}