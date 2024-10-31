import * as S from "./style";

import { useEffect } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";



export function P17(){
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
        Stone é parceiro Blue ERP!
        </span>

        <div className="Logo">
         
        </div>
      </S.SubHeader>

      <S.Main>
       <span>
       Stone: Transformando a Gestão Empresarial com Integração Eficiente ao ERP
       </span>

       <p>
       A Stone é uma plataforma inovadora que oferece soluções de pagamento e gestão financeira para empresas de diferentes portes. Com um foco em facilitar transações financeiras e otimizar processos, a Stone se destaca no mercado por sua capacidade de integrar-se perfeitamente com sistemas de ERP (Planejamento de Recursos Empresariais).
       <br /><br />
       A integração da Stone com ERPs permite que as empresas sincronizem dados financeiros em tempo real, melhorando a eficiência operacional e reduzindo erros manuais. Através dessa integração, as transações realizadas por meio da Stone são automaticamente registradas no sistema de ERP, proporcionando uma visão consolidada da saúde financeira da empresa.
       <br /><br />
       Ao adotar a plataforma Stone e integrá-la com seu ERP, as empresas não apenas aprimoram suas operações financeiras, mas também ganham uma vantagem competitiva significativa no mercado. Essa sinergia entre soluções de pagamento e gestão empresarial é essencial para impulsionar a eficiência e o crescimento sustentável nos negócios modernos.
       </p>
      </S.Main>
      <Footer/>
     </S.Container>
    )
}