import * as S from "./style";

import { useEffect } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";



export function P1(){
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
          Amazon é parceiro Blue ERP!
        </span>

        <div className="Logo">
         
        </div>
      </S.SubHeader>

      <S.Main>
       <span>
       Os serviços da Amazon Web Services {'(AWS)'} são uma referência global em soluções de armazenamento e hospedagem na nuvem, assegurando a disponibilidade contínua do ERP BLUE ERP.
       </span>

       <p>
       A Amazon, sendo a maior empresa mundial no setor de e-commerce, praticamente criou o modelo de negócios para vendas online. Ela iniciou sua trajetória vendendo livros exclusivamente online, e logo conquistou seu espaço no mercado.
<br /><br />
Para sustentar seu destaque como uma das principais empresas digitais globais, a Amazon ampliou sua oferta de produtos e, em 2006, lançou publicamente o Amazon Web Services {'(AWS)'}, oferecendo soluções de armazenamento e hospedagem na nuvem.
<br /><br />
Reconhecida como a plataforma de nuvem mais segura do mundo, a AWS disponibiliza um vasto poder computacional, armazenamento de bancos de dados, distribuição de conteúdo e muitas outras funcionalidades essenciais para o crescimento empresarial.
<br /><br />
Com infraestrutura distribuída globalmente, milhões de clientes contam com as soluções de nuvem da AWS para desenvolver aplicações robustas, mantendo sempre a flexibilidade, escalabilidade e confiabilidade.
<br /><br />
Esses valores institucionais e o reconhecimento da Amazon Web Services como a melhor plataforma de serviços em nuvem resultaram nesta parceria sólida com o BLUE ERP. A união foi firmada para garantir a total disponibilidade do mais completo ERP online do Brasil.
<br /><br />
O BLUE ERP está hospedado em diversos servidores da Amazon ao redor do mundo. Essa estrutura oferece planos de contingência diversos e backups exclusivos das bases de dados do ERP, garantindo que os clientes BLUE possam acessar seus dados a qualquer momento, sem interrupções.
       </p>
      </S.Main>
      <Footer/>
     </S.Container>
    )
}