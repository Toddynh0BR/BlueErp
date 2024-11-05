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
import Image1 from "../assets/top-image-controle-de-estoque.svg";
import Image2 from "../assets/lancamentos-automaticos.svg";
import Image3 from "../assets/top-image-controle-de-estoque.svg";
import Image4 from "../assets/relatorios-de-estoque.svg";
import Image5 from "../assets/sincronizacao-loja-fisica-virtual.svg";
import Image6 from "../assets/relatorios-de-estoque.svg";
import Image7 from "../assets/sincronizacao-loja-fisica-virtual.svg";

export function ControleEstoque(){
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
        Soluções de <strong>Logística e Armazenagem </strong> <br />
        para Empresas de Todos os Tamanhos!
        </h2>

        <p>
         

Oferecemos uma gestão de estoque que se integra perfeitamente ao setor financeiro, incluindo módulos de vendas e emissão de notas fiscais, tudo em um único sistema.
<br />
Essa abordagem integrada simplifica os processos e otimiza a operação do seu negócio, independentemente do seu porte!
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
        <img src={Image1} alt="Image" />
       </div>
       </div>

       <div className="Bottom">
       <div className="card" onClick={() => handleScrollToSection(section1Ref)}>
            <span>Lançamentos automáticos</span>
        </div>
        <div className="card" onClick={() => handleScrollToSection(section2Ref)}>
            <span>Múltiplos Depósitos</span>
        </div>
        <div className="card" onClick={() => handleScrollToSection(section3Ref)}>
            <span>Relatórios de Estoque</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section4Ref)}>
            <span>Loja Física e Virtual</span>
        </div>

        <div className="card" onClick={() => handleScrollToSection(section5Ref)}>
            <span>Gestão Logística Completa</span>
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
        Automatização de Lançamentos a partir de Notas Fiscais de Compra e Venda
        </span>

        <p>

      
Ganhe tempo no cadastro de produtos e minimize erros de lançamento. Com a BLUE ERP, você pode automatizar a entrada de mercadorias no seu estoque utilizando o XML das notas fiscais dos seus fornecedores. Ao realizar suas vendas, o sistema atualiza o estoque em tempo real, sem a necessidade de alternar entre diferentes telas.
<br /><br />
Dedique seu tempo e energia ao crescimento e aumento das vendas da sua empresa, enquanto cuidamos do resto para você!
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <img src={Set} alt="descer" className="bottom" onClick={()=> handleScrollToSection(section2Ref)}/>
      </S.Main2>

      <S.Main2 ref={section2Ref}>
       <div className="left">
        <span>
        Gestão de Múltiplos Depósitos
        </span>

        <p>
       
Gerenciar diversos locais de armazenamento de maneira ágil, autônoma e flexível, adaptando-se às necessidades do seu negócio, é fácil com a BLUE ERP.
<br /><br />
Não perca mais tempo! Inicie agora mesmo a experiência de aproveitar as vantagens do Sistema de Gestão Empresarial mais completo do Brasil.
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
        Relatórios de Estoque
        </span>

        <p>       
Imagine ter acesso a uma vasta gama de informações sobre entradas, saídas, faturamento, validades, números de série, lotes e preços de todos os produtos da sua empresa. Seria incrível, não é mesmo?
<br /><br />
Agora, considere a possibilidade de acessar tudo isso com apenas alguns cliques, a qualquer hora e em qualquer lugar. Com essa facilidade, você poderá fundamentar suas decisões e estratégias de compra, além de otimizar a gestão de espaço e o armazenamento de novas mercadorias.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <img src={Set} alt="descer" className="bottom" onClick={()=> handleScrollToSection(section4Ref)}/>
      </S.Main2>

      <S.Main2 ref={section4Ref}>
       <div className="left">
        <span>
        Sincronização de Estoque entre Loja Física e Virtual
        </span>

        <p>
        
Você já sabe que o ERP online BLUE ERP oferece integração com E-commerce, certo? Com o nosso sistema, você pode expor seus produtos a milhões de clientes em potencial. Conecte sua loja a grandes plataformas como B2W, Amazon, Mercado Livre, WooCommerce, Loja Integrada, Magento e muitos outros marketplaces.
<br /><br />
Tudo isso por meio de uma única integração! Tenha controle total do seu negócio com uma interface extremamente intuitiva. E o melhor de tudo: as atualizações de estoque são realizadas a cada sincronização, garantindo que você não corra o risco de anunciar produtos que não estão disponíveis no seu depósito.
        </p>

        <button  onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
       </div>

       <div className="right">
          <img src={Image5} alt=""/>
       </div>

  
      </S.Main2>

      <S.Main3 ref={section5Ref}>
        <span>Ferramentas desenvolvidas para <strong> organizar e descomplicar o seu dia a dia!</strong></span>

        <div className="cards">
         <div className="card">
          <span>Estoque Crítico</span>
          <p>
 
          Com os alertas de estoque da BLUE ERP, você e sua equipe podem facilmente identificar produtos em nível crítico diretamente no dashboard. Isso permite um planejamento de compras mais assertivo ou a redistribuição de produtos entre depósitos conforme as necessidades da sua empresa.
          </p>
         </div>

         <div className="card">
          <span>Ranking de Faturamento</span>
          <p>

          Esse recurso do nosso dashboard facilita ainda mais o acompanhamento do giro de estoque. Com essas informações ao seu alcance, você pode calcular e planejar suas estratégias de venda, além de monitorar em tempo real a rotatividade das mercadorias que mais impactam a receita do seu negócio.
          </p>
         </div>

         <div className="card">
          <span> Controle de Vendas</span>
          <p>
            
         
          Se sua meta é vender, vender e vender, a BLUE ERP é a ferramenta ideal para você. Gerencie suas vendas de forma inteligente, mantendo total controle sobre orçamentos e pedidos, comissões, giro de estoque e dados precisos que tornam seus processos de venda ainda mais eficientes.
          </p>
         </div>
        </div>
      </S.Main3>

      <Footer/>
     </S.Container>
    )
}