import * as S from "./style";

import { useEffect } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";



export function P7(){
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
        MasterCard  é parceiro Blue ERP!
        </span>

        <div className="Logo">
         
        </div>
      </S.SubHeader>

      <S.Main>
       <span>
       A MasterCard Empreendedor – www.mastercardempreendedor.com.br, plataforma dedicada a soluções para micro, pequenas e médias empresas, anunciou recentemente uma parceria significativa com uma gigante do setor de sistemas de ERP.
       </span>

       <p>
       Com o objetivo de oferecer uma solução ainda mais completa a seus clientes e parceiros, a MasterCard escolheu o BLUE ERP como seu novo fornecedor de soluções de ERP.
<br /><br />
O BLUE ERP é uma plataforma baseada em nuvem que se destaca por sua usabilidade simplificada, aliada a um conjunto robusto de soluções, incluindo controle de vendas, gestão de estoque, PDV com emissão de cupom fiscal, ordens de serviço e muito mais.
<br /><br />
Com preços acessíveis, o sistema é voltado para negócios de diversos segmentos, especialmente aqueles de menor porte, que buscam uma parceria forte para se consolidar no mercado.
<br /><br />
A MasterCard Empreendedor disponibiliza pacotes de serviços específicos para profissionalizar a gestão empresarial, como controle de fluxo de caixa, estoque, vendas, emissão de notas fiscais, gestão de tarefas e tempo, acesso a internet Wi-Fi em mais de 168 mil locais no Brasil e 1 milhão no mundo, além de ofertas de viagens de negócios com desconto.
       </p>
      </S.Main>
      <Footer/>
     </S.Container>
    )
}