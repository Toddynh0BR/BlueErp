import * as S from "./style";

import { useEffect } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";



export function P14(){
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
        Loja virtual Moovin é parceiro Blue ERP!
        </span>

        <div className="Logo">
         
        </div>
      </S.SubHeader>

      <S.Main>
       <span>
       Integração com loja virtual robusta para todos os tipos e tamanhos de negócio.
       </span>

       <p>


A Plataforma de E-commerce da Moovin sempre teve como principal objetivo oferecer uma solução inovadora, completa e sofisticada, que vá muito além de uma simples ferramenta online para gerenciamento de pedidos e cadastro de produtos. A empresa cria a sua loja virtual do zero, desde a elaboração do design até a implementação.
<br /><br />
O DNA da Moovin está no resultado dos seus clientes, e por isso, eles focam nos mínimos detalhes para garantir que o projeto online seja um sucesso. A plataforma de e-commerce possui desenvolvimento próprio, baseada no conceito (SaaS), permitindo oferecer uma melhor experiência aos lojistas em termos de usabilidade e funcionalidades.
<br /><br />
Através da parceria entre Moovin e BLUE ERP, é possível proporcionar uma integração das operações do ERP com a plataforma de e-commerce, facilitando o cadastro das vendas online, o registro do financeiro, o controle de clientes e inadimplentes, entre outras facilidades.
<br /><br />
Além disso, a parceria com a Moovin oferece aos clientes BLUE ERP a possibilidade de integrar com outros dos principais marketplaces do mercado, como Mercado Livre, Submarino, Amazon, Magazine Luíza, entre outros.
       </p>
      </S.Main>
      <Footer/>
     </S.Container>
    )
}