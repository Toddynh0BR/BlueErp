import * as S from "./style";

import { useEffect } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";



export function P3(){
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
        Magazine Luiza é parceiro Blue ERP!
        </span>

        <div className="Logo">
         
        </div>
      </S.SubHeader>

      <S.Main>
       <span>
       Venda seus produtos em um dos maiores marketplaces do Brasil e gerencie tanto sua loja física quanto virtual através do BLUE ERP.
       </span>

       <p>
      
Reconhecida como a principal empresa de tecnologia para o varejo no país, a Magazine Luiza é uma plataforma ideal para quem quer vender móveis, eletrodomésticos, ou itens de decoração.
<br /><br />
Com mais de 35 milhões de acessos mensais, o Magalu oferece um ambiente digital com ampla visibilidade para quem deseja alcançar mais clientes, sem se preocupar com os custos e a complexidade de criar um site próprio.
<br /><br />
É exatamente isso! Agora, lojistas que utilizam o BLUE ERP podem aproveitar a segurança e a experiência do Magalu. Além disso, contam com todas as funcionalidades do BLUE ERP para criar anúncios, importar pedidos, controlar estoques, gerar vendas e muito mais.
       </p>
      </S.Main>
      <Footer/>
     </S.Container>
    )
}