import * as S from "./style";

import { useEffect } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";



export function P15(){
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
        Paghiper  é parceiro Blue ERP!
        </span>

        <div className="Logo">
         
        </div>
      </S.SubHeader>

      <S.Main>
       <span>
       Emita todos os seus boletos registrados de forma prática e sem burocracia.
       </span>

       <p>
    

A PagHiper é uma empresa que oferece soluções de pagamento, especializada em boletos bancários registrados de acordo com as normas da Febraban. Através desta parceria, os clientes do BLUE ERP poderão emitir boletos facilmente, sem nenhum custo para emissão ou cancelamento. Além disso, terão a capacidade de gerenciar seus recebimentos diretamente através da sua conta no sistema.
<br /><br />
Com esta parceria, voltada para a sua economia de tempo e trabalho, será possível gerar boletos personalizados e gerenciá-los pelo painel administrativo do seu Sistema ERP BLUE ERP, sem a dor de cabeça de lidar com arquivos de remessa e retorno. Todo o processo acontece online, e a conciliação é automática.
<br /><br />
Sabemos que empreender não é uma tarefa fácil. No entanto, acreditamos que, com as ferramentas certas e parcerias poderosas como essa, você, nosso cliente, terá as melhores oportunidades de desfrutar de recursos incríveis de gestão, permitindo que faça bons negócios e fature ainda mais.
       </p>
      </S.Main>
      <Footer/>
     </S.Container>
    )
}