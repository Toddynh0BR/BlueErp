import * as S from "./style";

import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import MouseFollower from "../../components/mouse";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

import i1 from "./assets/amazon.png";
import i2 from "./assets/b2w.png";
import i3 from "./assets/carrefour.png";
import i4 from "./assets/via-varejo.png";
import i5 from "./assets/signa-shop.png";
import i6 from "./assets/get-commerce.png";
import i7 from "./assets/dafiti.png";
import i8 from "./assets/leroy-merlin.png";
import i9 from "./assets/loja-integrada.png";
import i10 from "./assets/magalu.png";
import i11 from "./assets/magento-commerce.png";
import i12 from "./assets/mercado-livre.png";
import i13 from "./assets/moovin.png";
import i14 from "./assets/jet-commerce.png";
import i15 from "./assets/netshoes.png";
import i16 from "./assets/ricardo-eletro.png";
import i17 from "./assets/shop-facil.png";
import i18 from "./assets/woocommerce.png";
import i19 from "./assets/pag-hiper.png";
import i20 from "./assets/sigep-web-dos-correios.png";
import i21 from "./assets/skytef.png";
import i22 from "./assets/jadlog.png";
import i23 from "./assets/dslite.png";
import i24 from "./assets/shopify.png";
import i25 from "./assets/bom-pra-credito.png";
import i26 from "./assets/bis2bis-logo.png";

import Image from "../../assets/integra.png";

export function CentralIntegraçoes(){
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);
  const section7Ref = useRef(null);
  const section8Ref = useRef(null);
  const section9Ref = useRef(null);
  const section10Ref = useRef(null);
  const section11Ref = useRef(null);
  const section12Ref = useRef(null);
  const section13Ref = useRef(null);
  const section14Ref = useRef(null);
  const section15Ref = useRef(null);
  const section16Ref = useRef(null);
  const section17Ref = useRef(null);
  const section18Ref = useRef(null);
  const section19Ref = useRef(null);
  const section20Ref = useRef(null);
  const section21Ref = useRef(null);
  const section22Ref = useRef(null);
  const section23Ref = useRef(null);
  const section24Ref = useRef(null);
  const section25Ref = useRef(null);
  const section26Ref = useRef(null);
  

  const navigate = useNavigate();

  const handleScrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  function abrirNovaAba(url) {
    window.open(url, '_blank');
  }

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

      <S.Main >
        <div className="left">
       

         <h2>
          A nossa <strong> Central de Integrações </strong>  é toda sua!
         </h2>

         <h4>
          Na BLUE ERP,<strong> vender online é uma prioridade! </strong> 
          Por isso, o sistema oferece integração com as maiores 
          plataformas de <br /> e-commerce e marketplaces do país.
         </h4>

          <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>

          <span>Ver todas as <br /><strong>Integrações</strong></span>
        </div>

        <div className="right">
         <img src={Image} alt="" />
        </div>
      </S.Main>

      <S.Inter>
        <h2><strong>Integramos com as melhores </strong> plataformas do mercado!</h2>

        <div className="inter">
<div className="card" onClick={() => handleScrollToSection(section1Ref)}>Amazon</div>
<div className="card" onClick={() => handleScrollToSection(section2Ref)}>B2W</div>
<div className="card" onClick={() => handleScrollToSection(section3Ref)}>Carrefour</div>
<div className="card" onClick={() => handleScrollToSection(section4Ref)}>Via Marketplace</div>
<div className="card" onClick={() => handleScrollToSection(section5Ref)}>Signashop</div>
<div className="card" onClick={() => handleScrollToSection(section6Ref)}>GetCommerce</div>
<div className="card" onClick={() => handleScrollToSection(section7Ref)}>Dafiti, Kanui, Tricae</div>
<div className="card" onClick={() => handleScrollToSection(section8Ref)}>Leroy Merlin</div>
<div className="card" onClick={() => handleScrollToSection(section9Ref)}>Loja Integrada</div>
<div className="card" onClick={() => handleScrollToSection(section10Ref)}>Magalu</div>
<div className="card" onClick={() => handleScrollToSection(section11Ref)}>Magento</div>
<div className="card" onClick={() => handleScrollToSection(section12Ref)}>Mercado Livre</div>
<div className="card" onClick={() => handleScrollToSection(section13Ref)}>Moovin</div>
<div className="card" onClick={() => handleScrollToSection(section14Ref)}>Jet Commerce - NEO</div>
<div className="card" onClick={() => handleScrollToSection(section15Ref)}>Netshoes e Zattini</div>
<div className="card" onClick={() => handleScrollToSection(section16Ref)}>Ricardo Eletro</div>
<div className="card" onClick={() => handleScrollToSection(section17Ref)}>ShopFácil</div>
<div className="card" onClick={() => handleScrollToSection(section18Ref)}>WooCommerce</div>
<div className="card" onClick={() => handleScrollToSection(section19Ref)}>PagHiper</div>
<div className="card" onClick={() => handleScrollToSection(section20Ref)}>SIGEP Web - Correios</div>
<div className="card" onClick={() => handleScrollToSection(section21Ref)}>Skytef</div>
<div className="card" onClick={() => handleScrollToSection(section22Ref)}>Jadlog</div>
<div className="card" onClick={() => handleScrollToSection(section23Ref)}>DSLite</div>
<div className="card" onClick={() => handleScrollToSection(section24Ref)}>Shopify</div>
<div className="card" onClick={() => handleScrollToSection(section25Ref)}>Bom Pra Credito</div>
<div className="card" onClick={() => handleScrollToSection(section26Ref)}>Bis2Bis</div>

        </div>

        <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
      </S.Inter>

      <S.All>
        <div className="Card" ref={section1Ref}>
         <div className="image">
          <img src={i1} alt="" />
         </div>

         <div className="texts">
          <h2>Amazon</h2>

          <p>
           A BLUE ERP chega para somar outros benefícios às suas vendas no Marketplace da Amazon.
           Através do painel administrativo, é possível integrar sua conta Amazon com o ERP.
           De modo que em um só lugar você poderá controlar anúncios, importar e exportar produtos,
           emitir notas fiscais e até, integrar com os Correios para otimizar a logística do seu negócio,
           usando a BLUE ERP.
          </p>

          <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
         </div>
        </div>

        <div className="Card2" ref={section2Ref}>
         <div className="texts">
          <h2> B2W (Americanas, Submarino, Shoptime)</h2>

          <p>
         
Acompanhamos a tendência de mercado que mais cresce: Comércio Eletrônico,
 e desenvolvemos uma integração com essa empresa que reúne as principais lojas virtuais do país.
  Através desta integração você pode enviar produtos para anúncio, importar pedidos diretamente para o sistema,
   atualizar preços, estoques e muito mais


          </p>

          <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
         </div>

         <div className="image">
          <img src={i2} alt="" />
         </div>
        </div>

        <div className="Card" ref={section3Ref}>
         <div className="image">
          <img src={i3} alt="" />
         </div>

         <div className="texts">
          <h2>Carrefour</h2>

          <p>
          
          Consolidada com uma das maiores redes de supermercados do mundo, a marca Carrefour se lançou no comércio eletrônico há alguns anos. E há cada dia conquista mais adeptos. Uma vez que você opte por anunciar no Marketplace do Carrefour, sua loja contará com o reconhecimento e confiabilidade de uma das marcas mais conhecidas do Brasil.
          </p>

          <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
         </div>
        </div>

        <div className="Card2" ref={section4Ref}>
         <div className="texts">
          <h2>Via Marketplace</h2>

          <p>
          
As famosas lojas brasileiras, Extra, Ponto Frio e Casas Bahia fazem parte das operações da Via Marketplace (antiga Cnova), acumulando mais de 60 milhões de acessos mensais. Quem sabe os seus potenciais clientes não estão por lá? Seja você também um cliente BLUE ERP e saiba como integrar.




          </p>

          <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
         </div>

         <div className="image">
          <img src={i4} alt="" />
         </div>
        </div>

        <div className="Card" ref={section5Ref}>
         <div className="image">
          <img src={i5} alt="" />
         </div>

         <div className="texts">
          <h2>Signashop</h2>

          <p>
          
Pensando em agregar grandes oportunidades de crescimento aos usuários que desejam gerenciar sua loja virtual com eficiência e praticidade, desenvolvemos a integração com a Signashop, a solução perfeita para quem quer liberdade para administrar, sem se preocupar com hospedagem, faturar muito mais e claro, contar com os melhores recursos de gestão empresarial. Conheça essa super parceria!
          </p>

          <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
         </div>
        </div>

        <div className="Card2" ref={section6Ref}>
         <div className="texts">
          <h2>Get.Commerce</h2>

          <p>
          
          Com uma proposta prática e inovadora a Get.Commerce é um ótimo caminho para integrar sua loja Magento com o BLUE ERP. Através de uma plataforma simples, você encontra diversas soluções para vender mais e apresentar seus produtos a um grande público. Com esta integração é possível contar com recursos de logística e do módulo multilíngue, fazendo anúncios em diversos idiomas. Aproveite esta oportunidade e confira os benefícios desta integração.


          </p>

          <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
         </div>

         <div className="image">
          <img src={i6} alt="" />
         </div>
        </div>

        <div className="Card" ref={section7Ref}>
         <div className="image">
          <img src={i7} alt="" />
         </div>

         <div className="texts">
          <h2>Dafiti, Kanui e Tricae</h2>

          <p>
          
Se acaso você vende Roupas, Calçados, Artigos Esportivos ou Produtos para Bebês, essa integração é perfeita para o seu negócio! Este trio é considerado o maior e mais relevante e-commerce de moda da América Latina.
<br /><br />
O que isso quer dizer? Que ao contar com uma loja virtual em algum desses marketplaces, você tem muito mais presença online, com um público altamente engajado e utiliza canais sempre otimizados para fortalecer sua marca e gerar conversões.


          </p>

          <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
         </div>
        </div>

        <div className="Card2" ref={section8Ref}>
         <div className="texts">
          <h2>Leroy Merlin</h2>

          <p>
          
Se a sua empresa atua no segmento de vendas de artigos para casa, construção e decoração, temos uma ótima notícia! Agora o seu Sistema ERP BLUE ERP conta com integração com a Leroy Merlin. Com diversas lojas físicas em todo o território nacional, a Leroy Merlin conta também com um marketplace amplo, com um mix de produtos que permite que o consumidor escolha o que precisar, diretamente do conforto de sua casa.
<br /><br />
Você já anuncia na Leroy? Melhor ainda, você pode agora mesmo acessar sua conta BLUE ERP e em ambiente de marketplace nativo, gerenciar seus anúncios, vendas e estoques, sem descuidar da sua loja física.


          </p>

          <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
         </div>

         <div className="image">
          <img src={i8} alt="" />
         </div>
        </div>

        <div className="Card" ref={section9Ref}>
         <div className="image">
          <img src={i9} alt="" />
         </div>

         <div className="texts">
          <h2>Loja Integrada</h2>

          <p>
          
A Loja Integrada é uma das lojas virtuais mais populares do Brasil e conta com quase 1 milhão de lojas virtuais já cadastradas. Isso se deve, sobretudo, à praticidade de criar sua conta e com um layout simples de usar e flexível já começar a vender.

Vinculando sua conta na Loja Integrada ao BLUE ERP, você pode importar e exportar produtos, controlar estoques, emitir notas e muito mais. Não perca tempo e conheça as vantagens!
          </p>

          <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
         </div>
        </div>

        <div className="Card2" ref={section10Ref}>
         <div className="texts">
          <h2>Magalu</h2>

          <p>
          
No caso da venda de móveis, eletrodomésticos e até mesmo artigos de decoração, o Marketplace Magazine Luiza se vale de uma gigantesca carteira de clientes e de anos de experiência em vendas para reunir lojas virtuais parceiras e impactar milhões de potenciais consumidores.
<br /><br />
E, claro, essa é mais uma das facilidades do BLUE ERP, poder integrar sua loja virtual do Magazine Luiza e gerenciá-la juntamente com as operações da sua loja física. Conheça mais essa funcionalidade!

          </p>

          <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
         </div>

         <div className="image especial1">
          <img src={i10} alt="" />
         </div>
        </div>

        <div className="Card" ref={section11Ref}>
         <div className="image">
          <img src={i11} alt="" />
         </div>

         <div className="texts">
          <h2>Magento</h2>

          <p>
          
Magento é uma das principais plataformas de e-commerce do mundo, atualmente. É uma plataforma robusta, flexível e com diversas possibilidades para sua loja virtual.

Ao integrar sua conta Magento ao seu Sistema ERP BLUE ERP tenha facilidades como: Importação e exportação de produtos; Atualização de Preços, Estoques e Categorias; Importação de Pedidos; Integração disponível para Magento e Magento 2; Emissão simplificada das notas fiscais; Possibilidade de vincular o ERP a BLUE ERP dos Correios.
          </p>

          <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
         </div>
        </div>

        <div className="Card2" ref={section12Ref}>
         <div className="texts">
          <h2>Mercado Livre</h2>

          <p>
          
O Mercado Livre é uma das maiores plataformas de compra e venda online da América Latina. Ele permite que qualquer pessoa possa vender através da plataforma, atingindo milhares de potenciais clientes.

Uma das integrações mais buscadas pelos nossos clientes, aliando suas lojas do Mercado Livre com o Sistema de Gestão Empresarial BLUE ERP, você pode enviar produtos para anúncios; Atualizar de preços e estoques; Importar pedidos diretamente para o sistema; Emitir notas fiscais; Enviar mensagens automáticas e contar com integração com Mercado Pago e Correios. Comece a usar agora mesmo!


          </p>

          <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
         </div>

         <div className="image">
          <img src={i12} alt="" />
         </div>
        </div>

        <div className="Card" ref={section13Ref}>
         <div className="image especial1">
          <img src={i13} alt="" />
         </div>

         <div className="texts">
          <h2>Moovin</h2>

          <p>
          
A Moovin já se destaca por sua proposta de criação. Fundada em 2006, a plataforma foi desenvolvida com o intuito de proporcionar aos lojistas uma solução completa e inovadora para gerenciamento de seus negócios. Ao passo que os empreendedores pudessem centralizar seus anúncios e vender de forma prática e ágil, seu clientes poderiam ter uma experiência de compra ainda mais agradável e satisfatória.
<br /><br />
Através do nosso painel administrativo você pode integrar com Moovin e realizar o gerenciamento tanto da loja física, como da virtual. Faça um teste!


          </p>

          <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
         </div>
        </div>

        <div className="Card2" ref={section14Ref}>
         <div className="texts">
          <h2>Jet Commerce - NEO</h2>

          <p>
         
Já pensou utilizar uma plataforma flexível, que lhe permite criar um layout que transmite a personalidade da sua marca, com SEO preparado para rankear nas melhores posições e garantindo que a sua loja tenha relevância nas buscas orgânicas?
<br /><br />
Sendo cliente BLUE ERP, você pode integrar sua conta no Sistema ERP com a Jet NEO, tendo acesso a dezenas de marketplaces, aumentando a sua visibilidade e conversão. Por isso, não perca tempo! Crie sua loja virtual JET e conecte-se agora mesmo aos maiores marketplaces do mercado.

          </p>

          <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
         </div>

         <div className="image">
          <img src={i14} alt="" />
         </div>
        </div>

        <div className="Card" ref={section15Ref}>
         <div className="image">
          <img src={i15} alt="" />
         </div>

         <div className="texts">
          <h2>Netshoes e Zattini</h2>

          <p>
          
A gigante dos artigos esportivos, administradora de lojas oficiais de diversos times brasileiros, a Netshoes tem anos de mercado e estratégias de marketing fantásticas, sendo responsável por grande parte das vendas em seu segmento. Além disso, a Netshoes conta também com a Zattini, seu marketplace para venda de roupas e acessórios.
<br /><br />
Integrando com o BLUE ERP você tem um ambiente para gerenciamento de Marketplaces nativo, onde pode gerenciar pedidos e catálogo no mesmo lugar. Além tem todos os recursos exclusivos que só mesmo os clientes BLUE ERP têm!


          </p>

          <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
         </div>
        </div>

        <div className="Card2" ref={section16Ref}>
         <div className="texts">
          <h2>Ricardo Eletro</h2>

          <p>
          
Com uma proposta de oferecer sempre o melhor preço a seus clientes, a Ricardo Eletro tem marcado presença no comércio eletrônico ao promover uma infinidade de lojas e marcas. O resultado disso, é uma média de 20 milhões de visitantes mensais, com apresentação responsiva, o que proporciona ao cliente uma experiência de compra ainda mais agradável.


          </p>

          <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
         </div>

         <div className="image">
          <img src={i16} alt="" />
         </div>
        </div>

        <div className="Card" ref={section17Ref}>
         <div className="image">
          <img src={i17} alt="" />
         </div>

         <div className="texts">
          <h2>ShopFácil</h2>

          <p>
          
Pertencente ao grupo Bradesco, a ShopFácil vende de tudo, eletrodomésticos, celulares, móveis, roupas e até mesmo viagens. É isso mesmo, em uma super plataforma as mais de 130 lojas parceiras anunciam seus produtos com condições de pagamento diferenciadas e contam com uma divulgação de primeira, ideal para conquistar muito mais clientes.
<br /><br />
Se sua loja virtual é parceira ShopFácil, não se preocupe, porque o BLUE ERP permite que você administre sua empresa física e virtual com apenas alguns cliques, tendo dados precisos e agilidade.



          </p>

          <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
         </div>
        </div>

        <div className="Card2" ref={section18Ref}>
         <div className="texts">
          <h2>WooCommerce</h2>

          <p>
          
O WooCommerce é uma plataforma open source desenvolvida especialmente para rodar junto com WordPress, motivo principal para o seu grande sucesso. Ela é eficiente e muito intuitiva, facilitando seu uso.
<br /><br />
Se você já conta com uma loja virtual WooCommerce, saiba que ao vinculá-la à sua conta BLUE ERP, será possível realizar todo tipo de controle financeiro, gerenciamento dos pedidos e do catálogo no mesmo ambiente; gestão de estoque, vendas e fiscal, através do nosso ERP.
          </p>

          <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
         </div>

         <div className="image especial1">
          <img src={i18} alt="" />
         </div>
        </div>

        <div className="Card" ref={section19Ref}>
         <div className="image">
          <img src={i19} alt="" />
         </div>

         <div className="texts">
          <h2>PagHiper</h2>

          <p>
          
          Integrando através do painel administrativo do seu Sistema ERP BLUE ERP, em instantes você poderá gerar boletos personalizados (com o logo da sua empresa); terá a tranquilidade de gerenciar seus boletos registrados sem a necessidade arquivos de remessa e retorno, já que todo o processo é online e com conciliação automática; sem surpresas, você não tem custo nenhum para emissão ou cancelamento dos boletos gerados. Além de tudo isso, a PagHiper tem uma taxa extremamente atrativa e você só paga se o seu cliente efetuar o pagamento do boleto. Sem stress e sem burocracia! Confira!
          </p>

          <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
         </div>
        </div>

        <div className="Card2" ref={section20Ref}>
         <div className="texts">
          <h2>BLUE Web Correios</h2>

          <p>
          
Com a integração entre sua conta BLUE ERP e o BLUE ERP dos Correios você poderá gerenciar suas postagens com facilidade e rapidez, reduzindo custos com retrabalho (já que o processo é todo automatizado). Além disso, é possível gerenciar as informações da carga postada e rastrear a mercadoria até o momento da entrega, garantindo segurando a você a aos seus clientes. Desfrute deste poderoso recurso!
          </p>

          <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
         </div>

         <div className="image especial2">
          <img src={i20} alt="" />
         </div>
        </div>

        <div className="Card" ref={section21Ref}>
         <div className="image especial3">
          <img src={i21} alt="" />
         </div>

         <div className="texts">
          <h2>Skytef</h2>

          <p>
          
Implementamos a integração com a Skytef no PDV do BLUE ERP. Assim, se você for cliente da Skytef e tiver a sua maquininha de cartão, poderá integrar o software da sua máquina de cartão ao nosso frente de caixa.

          </p>

          <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
         </div>
        </div>

        <div className="Card2" ref={section22Ref}>
         <div className="texts">
          <h2>Jadlog</h2>

          <p>
          
Envie as mercadorias aos clientes através da integração com a transportadora JadLog. Com o despacho de mercadorias por transportadoras, sua empresa envia produtos sem restrições de embalagens ou peso. Com isso, você tem muito mais controle e segurança. Sem contar, é claro, na economia em logística!


          </p>

          <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
         </div>

         <div className="image">
          <img src={i22} alt="" />
         </div>
        </div>

        <div className="Card" ref={section23Ref}>
         <div className="image">
          <img src={i23} alt="" />
         </div>

         <div className="texts">
          <h2>DSLite</h2>

          <p>
          
O DSLite é uma plataforma online, em que os fornecedores dispõem estoque virtual de produtos para os lojistas/vendedores. Logo, é um sistema onde ocorre o vínculo de logística entre vendedor e fornecedor. Como resultado dessa integração, o DSLite oferece aos vendedores e fornecedores oportunidade de otimizar seus resultados através de crossdocking e logística fracionada dropshipping (sistema organizado de redistribuição). Experimente essa nova forma de aumentar o seu faturamento!


          </p>

          <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
         </div>
        </div>

        <div className="Card2" ref={section24Ref}>
         <div className="texts">
          <h2>Shopify</h2>

          <p>
          
A Shopify é uma plataforma canadense que possui milhares de lojas em todo o mundo. Nela, você encontra uma infinidade de recursos de e-commerce, para a criação de lojas virtuais, integrando com redes sociais e ainda permite que você aposte no dropshipping (venda sem estoque físico), proporcionando aos usuários novas formas de fazer negócio e ampliar suas possibilidades de vendas.
          </p>

          <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
         </div>

         <div className="image">
          <img src={i24} alt="" />
         </div>
        </div>

        <div className="Card" ref={section25Ref}>
         <div className="image">
          <img src={i25} alt="" />
         </div>

         <div className="texts">
          <h2> Bom Pra Crédito</h2>

          <p>
         
A integração com a Bom Pra Crédito (BPC) é utilizada quando você realiza a venda para seu cliente, em que o pagamento dessa venda será realizado através de um financiamento/empréstimo. A BPC é uma plataforma que oferece ao seu cliente diferentes opções de financiamento. Para de fato utilizar essa integração, você precisa ter uma conta junto à BPC, pois dessa forma, quando realizar uma venda para esse cliente, é possível consultar a possibilidade desse financiamento diretamente pelo BLUE ERP.
          </p>

          <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
         </div>
        </div>

        <div className="Card2" ref={section26Ref}>
         <div className="texts">
          <h2>Bis2Bis</h2>

          <p>
          
A Bis2Bis é uma plataforma avançada com as funcionalidades do Magento 1. Com ela, você poderá personalizar o seu e-commerce da forma que desejar, realizar vendas, vincular os produtos ao BLUE ERP e gerenciar todas as atividades através dessa integração!
          </p>

          <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>Experimente</button>
         </div>

         <div className="image especial3">
          <img src={i26} alt="" />
         </div>
        </div>


      </S.All>

      <Footer/>
     </S.Container>
    )
}