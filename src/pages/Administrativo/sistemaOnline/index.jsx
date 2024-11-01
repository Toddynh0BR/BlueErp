import * as S from "./style";

import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";

import Set from "../assets/bottom-set.svg";
import Image1 from "../assets/top-image-controle-de-vendas.svg";
import Image2 from "../assets/sistema-de-pdv-offline.svg";
import Image3 from "../assets/sistema-crm.svg";
import Image4 from "../assets/faturamento-em-lote.svg";
import Image5 from "../assets/gestao-de-vendedores.svg";

export function SistemaOnline(){
    const navigate = useNavigate();

    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
    const section5Ref = useRef(null);
    const section6Ref = useRef(null);
    const section7Ref = useRef(null);

    function abrirNovaAba(url) {
      window.open(url, '_blank');
    };

    const handleScrollToSection = (sectionRef) => {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };
   
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

      <S.Main>

       <div className="Center">
       <div className="left">
        <h2>
        Com o nosso Sistema Online, as informações da <br />
        sua empresa estão sempre ao seu alcance.
        </h2>

        <p>
        Adote uma plataforma tecnológica que oferece agilidade, controle e segurança,  <br />
        impulsionando resultados de alta performance em todos os setores do seu negócio.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
        <img src={Image1} alt="Image" />
       </div>
       </div>

       <div className="Bottom">
        <div className="card" onClick={() => handleScrollToSection(section1Ref)}>
            <span>Usuários e Permissões</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section2Ref)}>
            <span>App de Vendas no Celular</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section3Ref)}>
            <span>Envio de Orçamentos por e-mail</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section4Ref)}>
            <span>Atributos Personalizados</span>
        </div>
        <div className="card" onClick={() => handleScrollToSection(section5Ref)}>
            <span>Segurança</span>
        </div>
        <div className="card" onClick={() => handleScrollToSection(section6Ref)}>
            <span>Importação de Dados</span>
        </div>
        





       </div>
      </S.Main>

      <S.Ecossistem>
      <span>
       <strong>Integre todos os setores </strong> do  <br /> seu negócio com nossas ferramentas!
      </span>

      <strong className="hover">
        {'>> Conhecer Ecossistema <<'}
      </strong>
      </S.Ecossistem>

      <S.Main2 ref={section1Ref}>
       <div className="left">
       <img src={Image2} alt="" className="especial"/>
       </div>

       <div className="right">
        <span>
        Usuários e Permissões
        </span>

        <p>
        Com o módulo Usuários e Permissões da BLUE ERP, você cadastra usuários para acessar a base de dados da empresa de maneira segura e rastreável.
        <br />
        Cada colaborador possui credenciais próprias, e você pode personalizar as permissões individualmente, definindo quais ferramentas podem ser consultadas e editadas.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

      </S.Main2>

      <S.Main2 ref={section2Ref}>
       <div className="left">
        <span>
         Aplicativo para Vendas no Celular
        </span>

        <p>
Com o BLUE Mobi, você e sua equipe de vendas têm em mãos uma solução completa e intuitiva para realizar vendas diretamente pelo smartphone. O aplicativo possibilita buscas de produtos por código de barras, cadastros rápidos, geração de pedidos e orçamentos, e acompanhamento de múltiplos estoques. Além disso, você pode emitir e enviar cupons fiscais por e-mail e contar com um PDV móvel, ideal para vendas em qualquer local. 
<br /><br />
Totalmente sincronizado com o BLUE ERP, o BLUE Mobi atualiza suas transações instantaneamente, garantindo que todos os registros estejam sempre em dia, mesmo longe do computador.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
          <img src={Image3} alt="" />
       </div>

      </S.Main2>

      <S.Main2 ref={section3Ref}>
       <div className="left">
       <img src={Image4} alt="" />
       </div>

       <div className="right">
       
        <span>
        Aprovação de Orçamentos por E-mail
        </span>

        <p>
Com o BLUE ERP, a aprovação de orçamentos fica prática e ágil. Envie orçamentos diretamente por e-mail para seus clientes, permitindo que eles analisem e aprovem os detalhes de qualquer lugar, de forma rápida e segura. Esse recurso elimina a burocracia e facilita a comunicação, tornando o processo mais dinâmico e eficaz. 
<br /><br />
Seu cliente pode aprovar o orçamento com apenas alguns cliques, mantendo o foco na eficiência e garantindo que a distância não seja um obstáculo para fechar negócios.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

      </S.Main2>

      <S.Main2 ref={section7Ref}>
       <div className="left">
        <span>
        Envio de Documentos por e-mail
        </span>

        <p>
        Com a BLUE ERP, o envio de documentos por e-mail é prático e flexível. Você pode enviar contratos, notas fiscais para seus clientes, e também compartilhar documentos com fornecedores. Personalize o assunto e o corpo do e-mail para garantir uma comunicação alinhada ao tom da sua empresa.
        Após cadastrar um orçamento ou uma ordem de compra, basta um clique para que o documento chegue ao destinatário.
        <br /><br />
        Além disso, você tem a liberdade de personalizar o próprio documento anexado, tornando o processo ainda mais eficiente e adaptado às necessidades da sua empresa.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
          <div className="Especial">
           <img src={Image5} alt="" />
          </div>
       </div>

  
      </S.Main2>

      <S.Main2 ref={section4Ref}>
       <div className="left">
       <img src={Image4} alt="" />
       </div>

       <div className="right">
       
        <span>
        Atributos Personalizados
        </span>

        <p>
        

Com a BLUE ERP, você pode criar atributos personalizados para atender às especificidades do seu negócio.
Amplie as possibilidades de cadastro de produtos e vendas com campos próprios e exclusivos, sem ficar limitado aos campos padrão. Tenha total autonomia para adicionar novos campos conforme a necessidade e utilize filtros para encontrar informações rapidamente, facilitando a gestão e organização dos dados.
Essa personalização garante que o sistema se ajuste às suas operações, trazendo mais eficiência ao seu dia a dia.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

      </S.Main2>

      <S.Main2 ref={section5Ref}>
       <div className="left">
        <span>
        Segurança
        </span>

        <p>
        

A proteção das informações da sua empresa é nossa prioridade! A BLUE ERP utiliza criptografia de nível bancário para assegurar que todas as transações no seu ERP sejam realizadas com total segurança. Com servidores hospedados na Amazon — líder global em serviços de nuvem — você conta com uma infraestrutura robusta e confiável. Além disso, temos um plano de contingência, garantindo que o sistema esteja sempre disponível, mesmo em situações inesperadas, para que você nunca perca uma venda ou enfrente interrupções indesejadas.

        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
          <div className="Especial">
           <img src={Image5} alt="" />
          </div>
       </div>

  
      </S.Main2>

      <S.Main2 ref={section6Ref}>
       <div className="left">
       <img src={Image4} alt="" />
       </div>

       <div className="right">
       
        <span>
        Importação de Dados
        </span>

        <p>
        


Ao migrar para um novo sistema de gestão, a transferência dos cadastros existentes é uma preocupação comum. Para facilitar esse processo, a BLUE ERP oferece planilhas em Excel que permitem a importação de todos os seus dados anteriores de forma rápida e eficiente. Dependendo do plano contratado, você também pode solicitar a ajuda da nossa equipe de Implantação para realizar a importação dos dados do seu antigo ERP, garantindo que todos os seus cadastros sejam corretamente configurados na nova plataforma sem complicações.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

      </S.Main2>

      <S.Main3 >
        <span><strong>Funcionalidades exclusivas </strong> para clientes da BLUE ERP</span>

        <div className="cards">
         <div className="card">
          <span>Backup</span>
          <p>
         


Uma das grandes vantagens da BLUE ERP é a realização de backups diários, garantindo a segurança dos dados da sua empresa com cópias de segurança a cada 24 horas. Se necessário, o usuário pode solicitar a restauração desses dados, assegurando que as informações estejam sempre protegidas e disponíveis.


          </p>
         </div>

         <div className="card">
          <span>BLUE no Excel</span>
          <p>
          

Se você precisa analisar informações em planilhas, a BLUE ERP facilita esse processo ao permitir que você verifique todos os dados da sua empresa diretamente no Microsoft Excel. Essa funcionalidade é ativada com a instalação de um suplemento que sincroniza a BLUE ERP com o Excel. Com isso, você pode criar novos relatórios, gerar gráficos e tabelas dinâmicas, tornando o acompanhamento de todos os setores do seu negócio mais fácil e eficiente.
          </p>
         </div>

         <div className="card">
          <span>Integração com Google</span>
          <p>

A BLUE ERP também permite a integração com o Google, possibilitando o compartilhamento de calendários de tarefas e arquivos diretamente com o Google Drive. Ao fazer login na BLUE ERP usando uma conta Google, os dados armazenados serão automaticamente compartilhados no Drive, permitindo um aproveitamento multifuncional das informações e facilitando a colaboração entre sua equipe.
          </p>
         </div>
        </div>
      </S.Main3>

      <Footer/>
     </S.Container>
    )
}