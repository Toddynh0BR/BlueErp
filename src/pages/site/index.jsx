import * as S from "./style";

import MouseFollower from "../../components/mouse";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

export function Site(){
    return(
     <S.Container>
      <MouseFollower/>
      <Header/>

     </S.Container>
    )
}