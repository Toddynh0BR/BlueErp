import * as S from "./style";

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import MouseFollower from "../../components/mouse";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

import { FaAnglesRight } from "react-icons/fa6";
import { GoShieldCheck } from "react-icons/go";

import i1 from "../../assets/i1.svg";
import i2 from "../../assets/i2.svg";
import i3 from "../../assets/i3.svg";
import i5 from "../../assets/i4.svg";
import i4 from "../../assets/i5.svg";
import i6 from "../../assets/i6.svg";

import n1 from "../../assets/n1.svg";
import n2 from "../../assets/n2.svg";
import n3 from "../../assets/n3.svg";
import n5 from "../../assets/n4.svg";
import n4 from "../../assets/n5.svg";
import n6 from "../../assets/n6.svg";
import n7 from "../../assets/n7.svg";
import n8 from "../../assets/n8.svg";

import siteDesk from "../../assets/siteDesk.png";
import liteDesk from "../../assets/liteDesk.png";
import mobiDesk from "../../assets/mobiDesk.png";
import Integra from "../../assets/integra.png";
import Over from "../../assets/overlay.png";
import Cloud from "../../assets/cloud.svg";
import lite from "../../assets/lite.svg";
import mobi from "../../assets/mobi.svg";
import site from "../../assets/site.svg";
import ADS from "../../assets/ads.png";

export function Home(){
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate()

    function abrirNovaAba(url) {
      window.open(url, '_blank');
    };

    function abriNovaRota(route) {
      navigate(route)
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

      <S.Ads>
       <div className="left">
        <h2> 
         <strong >Simplifique sua gestão e potencialize suas vendas.</strong>
        </h2>
        <h2>
         <strong>Mais que um ERP. Somos uma solução estratégica</strong> para otimizar seu tempo e acelerar o <strong>crescimento do seu negócio.</strong>
        </h2>

        <div className="ButtonAds"
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
        >
          <div className="button" onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>
            <p><strong>Experimente grátis</strong> por 15 dias</p>
            <div className="circle">
             <img src={Cloud}/>
            </div>
          </div>

          <FaAnglesRight className="sets"/>
        </div>
       </div>

       <div className="right">
         <img src={ADS} alt="Ads" className={isHovered ? 'adsHover': "ads"} />
         <img src={Over} alt="Ads" className="over"/>
        </div>
      </S.Ads>

      <S.Plans>
        <div className="title">
            <h2>
            <strong>
            A solução completa para PME's.
            </strong> <br />
            Ferramentas integradas, com implantação <br /> simples e suporte especializado.
            </h2>

            <span>
                Nossos planos e <strong>preços</strong>
            </span>
        </div>

        <div className="plans">

         <div className="plan">
          <p>aqui vai o plano</p>
         </div>

         <div className="plan">
          <p>aqui vai o plano</p>
         </div>

         <div className="plan">
          <p>aqui vai o plano</p>
         </div>

         <div className="plan">
          <p>aqui vai o plano</p>
         </div>
         
        </div>
      </S.Plans>

      <S.Eco>
        <div className="left">
          <h2>Ecossistema de gestão e vendas</h2>
          <p>A <strong>BlueErp</strong> é uma <strong>solução projetada para aumentar a produtividade e impulsionar as vendas</strong>  de empresas de todos os portes e setores.</p>
          
          <div className="ButtonAds" onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>
          <div className="button">
            <p><strong>Experimente grátis</strong> por 15 dias</p>
            <div className="circle">
             <img src={Cloud}/>
            </div>
          </div>
          </div>

          <span className="eco">Mais sobre <a onClick={()=> abriNovaRota('ecossistema')}>Ecossistema</a></span>
        </div>

        <div className="right">
         <div className="container">
          <div className="card" onClick={()=> navigate('/loja-virtual')}>
            <img src={site} alt="icon" className="Icon Site"/>
            <span><strong>Loja</strong> Virtual</span>
            <ul>
              <li><GoShieldCheck/>Sistema de <strong>  Pagamento;</strong></li>
              <li><GoShieldCheck/>Layout <strong>  Responsivo;</strong></li>
              <li><GoShieldCheck/>Gestão de <strong>  Entregas;</strong></li>
              <li><GoShieldCheck/>Chat via <strong>  WhatsApp.</strong></li>
            </ul>

            <img src={siteDesk} alt="Imagem a ser feita" className="Image"/>
          </div>

          <div className="card" onClick={()=> navigate('/app-de-vendas')}>
            <img src={mobi} alt="icon" className="Icon Mobi"/>
            <span><strong>App</strong> de Vendas</span>
            <ul>
              <li><GoShieldCheck/>Leitor de <strong> Codigo de Barras;</strong></li>
              <li><GoShieldCheck/>Vendas <strong> Externas;</strong></li>
              <li><GoShieldCheck/>Painel de <strong> Caixa;</strong></li>
              <li><GoShieldCheck/>PDV <strong> Mobile.</strong></li>
            </ul>

            <img src={mobiDesk} alt="Imagem a ser feita" className="Image"/>
          </div>
         </div>

         <div className="container">
          <div className="card" onClick={()=> navigate('/app-de-vendas')}>
            <img src={mobi} alt="icon" className="Icon Mobi"/>
            <span><strong>App</strong> de Vendas</span>
            <ul>
              <li><GoShieldCheck/>Leitor de <strong> Codigo de Barras;</strong></li>
              <li><GoShieldCheck/>Vendas <strong> Externas;</strong></li>
              <li><GoShieldCheck/>Painel de <strong> Caixa;</strong></li>
              <li><GoShieldCheck/>PDV <strong> Mobile.</strong></li>
            </ul>

            <img src={mobiDesk} alt="Imagem a ser feita" className="Image"/>
          </div>
          <div className="card" onClick={()=> navigate('/loja-offline')}>
            <img src={lite} alt="icon" className="Icon"/>
            <span><strong>Offline</strong> ERP</span>
            <ul>
              <li><GoShieldCheck/>Notas em <strong> Contigência;</strong></li>
              <li><GoShieldCheck/>Pedidos e <strong> Orçamentos;</strong></li>
              <li><GoShieldCheck/>BackUp <strong> Automático;</strong></li>
              <li><GoShieldCheck/>PDV <strong> Offline</strong></li>
            </ul>

            <img src={liteDesk} alt="imagem a ser feita" className="Image"/>
          </div>
         </div>

        </div>
      </S.Eco>

      <S.Gest>
        <div className="title">
          <h2>
           Toda a <strong> administração do seu negócio </strong> num só lugar.
          </h2>
                    
          <div className="ButtonAds" onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>
          <div className="button">
            <p><strong>Experimente grátis</strong> por 15 dias</p>
            <div className="circle">
             <img src={Cloud}/>
            </div>
          </div>
          </div>
        </div>

        <div className="topics">
          <div className="topic">
            <div className="row">
             <img src={i1} alt="icon"/>
             <span>Frente de Caixa</span>
            </div>
            <p>
             Uma solução prática para gerenciar suas vendas. Cadastre seus produtos, conecte o leitor de código de barras e comece a vender. O PDV Frente de Caixa da Blue ERP opera online e offline, emitindo notas e cupons fiscais com facilidade.
            </p>
          </div>

          <div className="topic">
            <div className="row">
             <img src={i2} alt="icon"/>
             <span>Gestão de Estoque</span>
            </div>
            <p>
            Registre todos os seus produtos, gerencie o estoque, acompanhe o ranking dos mais vendidos e receba alertas quando itens estiverem se esgotando. Sua gestão de estoque sempre atualizada e totalmente integrada ao setor financeiro.
            </p>
          </div>

          <div className="topic">
            <div className="row">
             <img src={i3} alt="icon"/>
             <span>Emissor de notas fiscais</span>
            </div>
            <p>
            Precisa emitir notas fiscais? NF-e, NFC-e ou CF-e SAT? Com o SIGE Cloud, isso é possível! Todas as configurações fiscais são fáceis e intuitivas, permitindo que você concentre seus esforços em atender seus clientes e impulsionar o crescimento da sua empresa!
            </p>
          </div>

          <div className="topic">
            <div className="row">
             <img src={i4} alt="icon"/>
             <span>Gestão de Serviços</span>
            </div>
            <p>
            Se você possui uma empresa de serviços, terá acesso a um modelo padrão de orçamentos para imprimir ou enviar aos seus clientes. Além disso, poderá registrar todos os serviços oferecidos e gerar ordens de serviço ilimitadas!
            </p>
          </div>

          <div className="topic">
            <div className="row">
             <img src={i5} alt="icon"/>
             <span>Relatórios</span>
            </div>
            <p>
            Planejamento, organização e informações seguras são essenciais. Para isso, nada melhor do que ter acesso a relatórios completos do seu negócio. Aqui, você conta com relatórios de Estoque, Financeiro e Gestão Fiscal, proporcionando uma visão abrangente dos seus processos.
            </p>
          </div>

          <div className="topic">
            <div className="row">
             <img src={i6} alt="icon"/>
             <span>A pagar e a receber</span>
            </div>
            <p>
            Realize lançamentos financeiros a partir das vendas, gerencie o calendário de pagamentos, emita boletos e monitore todas as suas receitas e despesas por meio de listagens organizadas e um gráfico de fluxo de caixa.
            </p>
          </div>
        </div>
      </S.Gest>

      <S.Inte>
        <div className="left">
         <img src={Integra} alt="Integrações" />
        </div>
        <div className="right">
          <h2>Central de integrações</h2>
          <p><strong> Nossas ferramentas se integram às principais plataformas de vendas, <br /> </strong> gestão, dropshipping e empresas de distribuição.</p>

          <div className="ButtonAds" onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>
          <div className="button">
            <p><strong>Experimente grátis</strong> por 15 dias</p>
            <div className="circle">
             <img src={Cloud}/>
            </div>
          </div>
          </div>

          <span className="eco">Mais sobre <a href="#">Integrações</a></span>
        </div>

        <img src={Over} alt="over" className="Over"/>
      </S.Inte>

      <S.Neg>
        <div className="title">
          <h2><strong> Para todos </strong> os tipos de negócios</h2>
        </div>

        <div className="negocios">
          <div className="neg">
           <img src={n1} alt="negócio" />
           <span>Restaurantes</span>
          </div>

          <div className="neg">
           <img src={n2} alt="negócio" />
           <span>Vestuário</span>
          </div>

          <div className="neg">
           <img src={n3} alt="negócio" />
           <span>Minimercados</span>
          </div>

          <div className="neg">
           <img src={n4} alt="negócio" />
           <span>Lanchonetes</span>
          </div>

          <div className="neg">
           <img src={n5} alt="negócio" />
           <span>Pizzarias</span>
          </div>

          <div className="neg">
           <img src={n6} alt="negócio" />
           <span>Autopeças</span>
          </div>

          <div className="neg">
           <img src={n7} alt="negócio" />
           <span>Assistências</span>
          </div>

          <div className="neg">
           <img src={n8} alt="negócio" />
           <span>Calçadistas</span>
          </div>
        </div>
      </S.Neg>

      <Footer />

     </S.Container>
    )
}
