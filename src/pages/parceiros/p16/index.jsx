import * as S from "./style";

import { useEffect } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";



export function P16(){
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
        Signashop é parceiro Blue ERP!
        </span>

        <div className="Logo">
         
        </div>
      </S.SubHeader>

      <S.Main>
       <span>
       Já pensou em criar a sua própria loja virtual através da Plataforma Magento, contando com profissionais especializados, atualizações constantes e a possibilidade de personalizá-la como desejar?!
       </span>

       <p>
    
Pensando em agregar grandes oportunidades de crescimento aos usuários que desejam gerenciar sua loja virtual com eficiência e praticidade, desenvolvemos a integração com a Signashop, a solução perfeita para quem quer liberdade para administrar, sem se preocupar com hospedagem, faturar muito mais e, claro, contar com os melhores recursos de gestão empresarial.
<br /><br />
Com essa super parceria, você terá acesso a um ambiente de e-commerce robusto e flexível, permitindo que sua loja se destaque no mercado. Aproveite as facilidades de personalização e as atualizações contínuas da plataforma, garantindo que sua loja virtual esteja sempre alinhada com as últimas tendências e tecnologias. Conheça essa nova forma de potencializar suas vendas e maximize o sucesso do seu negócio!
       </p>
      </S.Main>
      <Footer/>
     </S.Container>
    )
}