import * as S from "./style";

import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";

import { IoShieldCheckmarkOutline,  IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdCloudOutline } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { RiWifiOffLine } from "react-icons/ri";

import Set from "../assets/bottom-set.svg";
import Image1 from "../assets/top-image-pdv.png";
import Image2 from "../assets/cfe-sat.svg";
import Image3 from "../assets/sistema-de-pdv-offline.svg";
import Image4 from "../assets/contas-a-pagar-e-a-receber.svg";
import Image5 from "../assets/suporte-ao-tef.svg";
import Image6 from "../assets/impressao-documento-fiscal.svg";

export function PDV(){
    const navigate = useNavigate();

    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
    const section5Ref = useRef(null);
    const section6Ref = useRef(null);

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

       <div className="Bottom">
        <div className="card" onClick={() => handleScrollToSection(section1Ref)}>
            <span>Emissão de NFC-e e CF-e SAT</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section2Ref)}>
            <span>NFC-e em Contingência</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section3Ref)}>
            <span>Controle de Fluxo de Caixa</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section4Ref)}>
            <span>Suporte ao TEF</span>
        </div>
        <div className="card" onClick={() => handleScrollToSection(section5Ref)}>
            <span>Impressoras Térmicas</span>
        </div>
        <div className="card" onClick={() => handleScrollToSection(section6Ref)}>
            <span>PDV Completo</span>
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
        <img src={Image2} alt="" />
       </div>

       <div className="right">
        <span>
        Emissão de NFC-e e CF-e SAT
        </span>

        <p>

       
Esse recurso elimina a necessidade de investimentos em impressoras fiscais e mensalidades de manutenção de equipamentos, pois o documento fiscal é digital. Você pode enviá-lo diretamente por e-mail ao cliente ou acessá-lo no site da Secretaria da Fazenda utilizando a leitura de um QR-Code. Se precisar imprimir o documento, qualquer impressora não fiscal servirá.
<br /><br />
Com isso, uma das grandes vantagens do nosso PDV é que você começa a economizar tanto tempo quanto dinheiro desde o início!
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <img src={Set} alt="descer" className="bottom" onClick={()=> handleScrollToSection(section2Ref)}/>
      </S.Main2>

      <S.Main2 ref={section2Ref}>
       <div className="left">
        <span>
        Ponto de Venda Offline com Emissão de NFC-e em Contingência
        </span>

        <p>

        
Quem nunca enfrentou problemas com a conexão de internet no negócio? Seja por localização, clima ou outras inconsistências, com a BLUE ERP você não precisa se preocupar com a falta de internet.
<br /><br />
Os clientes da BLUE ERP têm à disposição um moderno e exclusivo Sistema de Retaguarda, que permite operar offline e continuar realizando vendas.
<br /><br />
 Além disso, a emissão de notas e cupons fiscais também é garantida, podendo ser feita em contingência. Quando a conexão for restabelecida, o sistema envia automaticamente as notas emitidas em contingência para a SEFAZ do seu estado. Assim, você pode esquecer as dores de cabeça na hora de vender!

        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
          <img src={Image3} alt="" className="especial"/>
       </div>

       <img src={Set} alt="descer" className="bottom" onClick={()=> handleScrollToSection(section3Ref)}/>
      </S.Main2>

      <S.Main2 ref={section3Ref}>
       <div className="left">
       <img src={Image4} alt="" />
       </div>

       <div className="right">
       
        <span>
         Controle de Fluxo de Caixa
        </span>

        <p>


Gerenciar o fluxo de caixa é essencial para manter a saúde financeira do seu negócio. Para facilitar esse processo, a BLUE ERP oferece uma solução simplificada, que não apenas torna o lançamento das vendas no PDV mais eficiente, mas também inclui dois movimentos adicionais: retirada e reforço de caixa.
<br /><br />
Com o Sistema ERP BLUE ERP, você poderá realizar essas movimentações com facilidade, além de abrir e fechar o caixa, registrar vendas e emitir notas fiscais simultaneamente.
<br /><br />
 Você também terá acesso a uma variedade de funcionalidades financeiras, incluindo o cadastro de credenciadoras para vendas com cartão de crédito ou débito, além de diversos relatórios financeiros, fiscais e de vendas para uma gestão mais completa e informada.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <img src={Set} alt="descer" className="bottom" onClick={()=> handleScrollToSection(section4Ref)}/>
      </S.Main2>

      <S.Main2 ref={section4Ref}>
       <div className="left">
        <span>
        Suporte ao TEF
        </span>

        <p>

A Transferência Eletrônica de Fundos (TEF) é uma solução que facilita as transações financeiras eletrônicas. Com o recurso de PDV da BLUE ERP, você pode integrar as informações das transações TEF diretamente nas suas vendas.
<br /><br />
Ao realizar uma transação na máquina disponível em seu estabelecimento, um comprovante é impresso com todos os detalhes da operação. Esse comprovante contém informações essenciais, como a empresa responsável pela máquina utilizada e o código da transação, que você pode registrar no sistema.
<br /><br />
 Assim, a BLUE ERP proporciona um controle eficiente das vendas realizadas por meio de cartões, garantindo praticidade e segurança na gestão financeira do seu negócio.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
          <img src={Image5} alt="" className="especial"/>
       </div>

       <img src={Set} alt="descer" className="bottom" onClick={()=> handleScrollToSection(section5Ref)}/>
      </S.Main2>

      <S.Main2 ref={section5Ref}>
       <div className="left">
       <img src={Image6} alt="" />
       </div>

       <div className="right">
       
        <span>
        Integração com Impressoras Térmicas
        </span>

        <p>

        

       
A BLUE ERP proporciona uma integração eficaz com impressoras térmicas, tornando o controle do fluxo de caixa uma tarefa mais simples e eficiente. Além de facilitar o lançamento das vendas no seu PDV, o sistema permite realizar movimentações adicionais, como retirada e reforço de caixa.
<br /><br />
Com o uso do Sistema ERP BLUE ERP, você pode abrir o caixa, registrar vendas juntamente com a emissão da nota fiscal e efetuar o fechamento de caixa de forma prática. Essa integração garante que todos os comprovantes e recibos sejam impressos de maneira rápida e eficiente. 
<br /><br />
Além disso, você terá acesso a diversos recursos financeiros, como o cadastro de credenciadoras para vendas via cartão de crédito ou débito, além de uma variedade de relatórios financeiros, fiscais e de vendas para uma gestão mais completa e organizada do seu negócio.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

      </S.Main2>

      <S.Main3 ref={section6Ref}>
        <span><strong>Frente de Caixa </strong> totalmente integrado à Plataforma de Gestão do seu negócio!</span>

        <div className="cards">
         <div className="card">
          <span>Leitor de Código de Barras</span>
          <p>
          
          Com uma interface moderna e intuitiva, o PDV da BLUE ERP permite o uso de leitores de código de barras, facilitando a localização e adição de produtos às vendas. Após a leitura de todos os itens, basta finalizar a venda, e o documento fiscal será emitido com todos os produtos registrados automaticamente.
          </p>
         </div>

         <div className="card">
          <span> Vendas Consignadas</span>
          <p>
         
As vendas consignadas são ideais para representantes externos que retiram mercadorias para revenda. Com o PDV da BLUE ERP, você pode controlar as mercadorias consignadas, assim como monitorar a devolução dessas mercadorias, garantindo uma gestão eficiente e organizada.


          </p>
         </div>

         <div className="card">
          <span>Aviso de Meta no PDV</span>
          <p>
          
          Para facilitar o acompanhamento de metas de vendas, a BLUE ERP oferece uma funcionalidade que permite ao administrador definir uma Meta de Venda Mensal para cada vendedor. Quando o usuário acessa o sistema, uma mensagem informativa exibe o valor da meta, o quanto foi atingido até o momento e o que falta para alcançá-la.
          </p>
         </div>

         <div className="card">
          <span> Edição de Preços no PDV</span>
          <p>
         
          Com a opção de editar preços diretamente no PDV, você pode alterar rapidamente o valor de qualquer produto sem precisar acessar o cadastro. Essa funcionalidade torna o processo de vendas mais prático e ágil, permitindo que você faça ajustes de preço de forma imediata.


          </p>
         </div>

         <div className="card">
          <span>Emissão de NFS-e</span>
          <p>
          
          A BLUE ERP agora possibilita a emissão de Notas Fiscais de Serviço Eletrônicas (NFS-e) diretamente pelo PDV. Durante a venda, você pode buscar serviços da mesma forma que faz com os produtos, e ao final, a NFS-e é emitida automaticamente, simplificando o processo fiscal.
          </p>
         </div>

         <div className="card">
          <span>Configurações de PDV</span>
          <p>
          
Os clientes da BLUE ERP têm acesso a um recurso exclusivo que permite configurar seu PDV conforme as necessidades específicas de seu negócio. Essa flexibilidade assegura que o sistema se adapte perfeitamente ao seu modelo de operação, maximizando a eficiência e a satisfação do cliente.
          </p>
         </div>
        </div>

        <div className="bottom">

        </div>
      </S.Main3>

      <Footer/>
     </S.Container>
    )
}