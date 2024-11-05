import * as S from "./style";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";

import Image1 from "../assets/ferramentas-e-ferragens-gestao-completa.png";

export function A1(){
    return(
     <S.Container>
      <MouseFollower/>
      <Header/>

      <S.Main>
       <div className="Center">
       <div className="left">
        <h2>
        Frente de Caixa (PDV) <br /> com Cupom Fiscal Eletrônico
        </h2>

        <p>
        Com ele você emite notas e cupons fiscais, tem suporte ao TEF, <br />
        pode usar leitores de códigos de barra, gerar a baixa <br /> 
        no estoque e o lançamento financeiro, automaticamente.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
        <img src={Image1} alt="Image" />
       </div>
       </div>


      </S.Main>
     </S.Container>
    )
}