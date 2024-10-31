import * as S from "./style";

import { useEffect } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";



export function P4(){
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
         Google é parceiro Blue ERP!
        </span>

        <div className="Logo">
         
        </div>
      </S.SubHeader>

      <S.Main>
       <span>
       Os serviços empresariais do Google incluem uma ampla gama de aplicativos disponibilizados pelo G Suite Marketplace.
       </span>

       <p>
       O G Suite Marketplace é uma solução Google desenvolvida para empresas, oferecendo uma variedade de aplicativos que aprimoram o dia a dia organizacional e acrescentam funcionalidades aos aplicativos nativos do Google Cloud.
<br /><br />
Com milhares de opções, pagas e gratuitas, o G Suite Marketplace está disponível para qualquer usuário com uma Conta Google. Além disso, administradores do G Suite podem instalar e autorizar aplicativos para seus colaboradores, permitindo que os funcionários instalem as ferramentas que mais atendem suas necessidades profissionais.
<br /><br />
O BLUE ERP é o único ERP online integrado ao Marketplace, proporcionando uma conexão fluida com ferramentas como Google Agenda e Google Drive. Com isso, é possível facilitar o acesso ao sistema e controlar a empresa de qualquer lugar, integrando atividades com a agenda do Google e mantendo um backup seguro dos arquivos no Google Drive.
<br /><br />
Essas funcionalidades foram desenvolvidas para simplificar o dia a dia do empreendedor, que precisa de praticidade no gerenciamento de seu negócio. O BLUE ERP está disponível no portal Google Marketplace, promovendo eficiência a ainda mais empresas.

       </p>
      </S.Main>
      <Footer/>
     </S.Container>
    )
}