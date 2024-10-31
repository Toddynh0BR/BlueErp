import * as S from "./style";

import { useEffect } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";



export function P10(){
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
        Feevale é parceiro Blue ERP!
        </span>

        <div className="Logo">
         
        </div>
      </S.SubHeader>

      <S.Main>
       <span>
       Aproveite o benefício de um software de gestão sem custo com a parceria entre BLUE ERP e a Universidade Feevale!
       </span>

       <p>
     

Por meio da Plano 1 Consultoria Júnior, a BLUE ERP disponibiliza seu software de gestão em nuvem sem custo para acadêmicos dos projetos da consultoria, por tempo ilimitado, e por 90 dias para empresas atendidas pela instituição.
<br /><br />
Essa parceria não só fornece licenças do software, mas também inclui uma capacitação anual gratuita aos acadêmicos sobre seu uso. A Plano 1 presta serviços de planejamento e orientação em gestão de negócios, atendendo cerca de 10 empresas anualmente.
<br /><br />
A professora Drª. Raquel Engelman, da Feevale, afirma que todas as empresas que necessitem de um software de gestão receberão a recomendação do BLUE ERP, destacando a importância da solução, que elimina a necessidade de desenvolver ou pesquisar uma alternativa no mercado.
<br /><br />
O BLUE ERP é um ERP que opera na nuvem, dispensando investimentos em infraestrutura e custos de implantação, ideal para micro e pequenas empresas que precisam melhorar sua gestão, mas têm orçamentos limitados.
<br /><br />
Para a Plano 1, essa colaboração é crucial para oferecer uma solução acessível a seus atendidos e uma experiência prática aos acadêmicos em um software de gestão reconhecido.
<br /><br />
A Plano 1 Consultoria Júnior, desde 2002, atua como uma associação civil sem fins lucrativos, administrada por acadêmicos e graduados da Universidade Feevale, com suporte de especialistas e mestres, promovendo ética, excelência e inovação nas empresas da região do Vale do Sinos, no Rio Grande do Sul.
       </p>
      </S.Main>
      <Footer/>
     </S.Container>
    )
}