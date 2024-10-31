import * as S from "./style";

import { useEffect } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";



export function P5(){
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
        Amazon Marketplace  é parceiro Blue ERP!
        </span>

        <div className="Logo">
         
        </div>
      </S.SubHeader>

      <S.Main>
       <span>
       Venda mais e impulsione o crescimento de sua empresa com os benefícios de uma marca reconhecida mundialmente.
       </span>

       <p>
       Com mais de 20 anos de experiência no e-commerce, a gigante Amazon oferece seu próprio Marketplace. Trata-se de uma plataforma rápida e intuitiva, que permite escolher um plano de acordo com o volume de vendas da sua empresa.
<br /><br />
Além de contar com o reconhecimento e a confiança consolidados da Amazon, você não precisa criar um site; o gerenciamento de suas vendas pode ser feito diretamente pelo Seller Central. E os benefícios não param por aí: com uma única conta, você pode vender em vários países, como Canadá, Estados Unidos e México. Melhor ainda? Mesmo que o cliente parcele a compra, você recebe o valor à vista.
<br /><br />
Imagine agora integrar sua loja física e virtual de maneira completa e eficiente através do ERP em Nuvem mais avançado do Brasil! A integração entre o BLUE ERP e o Amazon Marketplace torna essa visão uma realidade.
       </p>
      </S.Main>
      <Footer/>
     </S.Container>
    )
}