import * as S from "./style";

import { useEffect } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";



export function P12(){
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
        Junior Archievement  é parceiro Blue ERP!
        </span>

        <div className="Logo">
         
        </div>
      </S.SubHeader>

      <S.Main>
       <span>
       BLUE ERP incentiva o desenvolvimento do empreendedorismo, proporcionando uma visão completa e antecipada do mundo dos negócios em parceria com a Junior Achievement.
       </span>

       <p>
      

A BLUE ERP, especializada em sistema de gestão em nuvem para pequenas empresas, acaba de firmar uma parceria para apoiar a Junior Achievement – São Paulo, uma entidade sem fins lucrativos voltada ao fomento do empreendedorismo por meio da educação prática de negócios. No Brasil, mais de 4 milhões de alunos foram beneficiados pelos programas, movimentando um voluntariado de mais de 150 mil pessoas.
<br /><br />
A parceria compreende a doação de licenças do software BLUE ERP necessárias para atender os estudantes participantes dos projetos da entidade na sucursal São Paulo, além de treinamento e consultoria para preparar os alunos para o uso e aplicação dos conceitos de gestão utilizando o sistema.
<br /><br />
De acordo com Tiago Rosa, fundador e diretor da BLUE ERP, o objetivo da parceria é despertar o espírito empreendedor dos jovens e facilitar seu acesso ao mercado de trabalho, proporcionando uma visão completa e antecipada do mundo dos negócios.
<br /><br />
O conceito de ERP 100% em nuvem desenvolvido pela BLUE ERP permite que empresas de pequeno porte usufruam dos benefícios de ter um software de gestão para organizar, controlar e gerenciar seus negócios, sem precisar investir em infraestrutura para hospedagem do sistema, já que ele roda nos servidores do fornecedor, nem em serviços de instalação, configurações e atualizações periódicas, que são feitas pela BLUE ERP.
<br /><br />
No formato em nuvem, a empresa utiliza o software e paga um valor fixo por mês, sem surpresas, podendo contar com acesso online a todos os recursos do sistema. Basta acessar pelo navegador web do computador, notebook, tablet ou smartphone Android. O sistema também funciona offline.
<br /><br />
Na parceria com a Junior Achievement, o BLUE ERP é oferecido sem custo mensal, de forma totalmente gratuita. Tiago Rosa afirma que ajudar a instituição é uma iniciativa para incentivar o desenvolvimento do empreendedorismo no Brasil.
       </p>
      </S.Main>
      <Footer/>
     </S.Container>
    )
}