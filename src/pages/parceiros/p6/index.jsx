import * as S from "./style";

import { useEffect } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";



export function P6(){
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
        Magento é parceiro Blue ERP!
        </span>

        <div className="Logo">
         
        </div>
      </S.SubHeader>

      <S.Main>
       <span>
       Impulsione o crescimento do seu negócio integrando seu ERP BLUE ERP com o Magento!
       </span>

       <p>
       

Atuando no mercado de e-commerce desde 2008, a plataforma Magento oferece diversas opções para sua loja virtual.
<br /><br />
Com soluções flexíveis, o Magento atende pequenas e médias empresas de vários segmentos, como moda, alimentação, saúde, beleza e comércio automotivo. O melhor de tudo é que suas soluções atendem tanto negócios B2C quanto B2B.
<br /><br />
E, claro, a equipe do BLUE ERP não poderia deixar nossos clientes de fora dessa. Graças à nossa sólida parceria de longa data, você que possui uma loja Magento pode integrá-la com sua conta do BLUE ERP. Assim, você poderá administrar sua loja física e virtual em um só lugar, com facilidades como: importação e exportação de produtos, atualização de preços, estoques e categorias, importação de pedidos, integração disponível para Magento e Magento 2, emissão simplificada de notas fiscais e a possibilidade de vincular o ERP ao SIGEP Web dos Correios.
       </p>
      </S.Main>
      <Footer/>
     </S.Container>
    )
}