import * as S from "./style";

import { EspecialHeader } from "../components/headerEspecial/header";
import MouseFollower from "../../../components/mouse";
import { Footer } from "../../../components/footer";

import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";

import i1 from "../assets copy/logoAmazon.jpg";
import i2 from "../assets copy/logoAmazonMarketplace.jpg";
import i3 from "../assets copy/logoB2w.jpg";
import i4 from "../assets copy/logoCnova.jpg";
import i5 from "../assets copy/logoFeevale.jpg";
import i6 from "../assets copy/logoGoogle.jpg";
import i7 from "../assets copy/logoJet.jpg";
import i8 from "../assets copy/logoJunior.jpg";
import i9 from "../assets copy/logoLojaIntegrada.jpg";
import i10 from "../assets copy/logoMagalu.jpg";
import i11 from "../assets copy/logoMagento.jpg";
import i12 from "../assets copy/logoMaster.jpg";
import i13 from "../assets copy/logoMl.jpg";
import i14 from "../assets copy/logoMoovin.jpg";
import i15 from "../assets copy/logoPagHiper.jpg";
import i16 from "../assets copy/logoSignaShop.jpg";
import i17 from "../assets copy/logoStone.jpg";
import i18 from "../assets copy/logoWooCommerce.jpg";

import { GoShieldCheck } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa6";

import playstore from "../assets/seloAndroid.png";
import appstore from "../assets/seloIos.png";
import Cloud from "../assets/cloudDown.png";
import Man from "../assets/pngegg.png";

import t1 from "../assets/Rocket.gif";
import t2 from "../assets/Devices.gif";
import t3 from "../assets/Boletos.gif";
import t4 from "../assets/Chart.gif";
import t5 from "../assets/Nuvem.gif";

import blue from "../assets/imgSolutionSigeCloud.jpg";
import lite from "../assets/imgSolutionSigeLite.jpg";
import mobi from "../assets/imgSolutionSigeMobi.jpg";

import { IoPhonePortraitOutline } from "react-icons/io5";
import { FiMonitor } from "react-icons/fi";
import { FaLaptop } from "react-icons/fa";


export function ComoFunciona(){
   const [selected, setSelected] = useState('blue')
   const [selected2, setSelected2] = useState('G')

   const navigate = useNavigate();

   function abrirNovaAba(url) {
    window.open(url, '_blank');
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
      <EspecialHeader />

      <S.Main>
       <div className="title">
        <p>Uma única licença para todas as soluções</p>
        <h1>A BLUE ERP é um Sistema de Gestão composto por <strong>3 soluções inovadoras,</strong> flexíveis, totalmente integradas e sincronizadas.</h1>
       </div>

       <div className="options">
        <div className="option" data-selected={selected == "blue" ? true : false} onClick={()=> setSelected('blue')}>
          <FiMonitor/>
          <p>BLUE ERP</p>
        </div>

        <div className="option"  data-selected={selected == "lite" ? true : false} onClick={()=> setSelected('lite')}>
          <FaLaptop/>
          <p>BLUE ERP Lite</p>
        </div>

        <div className="option" data-selected={selected == "mobi" ? true : false} onClick={()=> setSelected('mobi')}>
          <IoPhonePortraitOutline/>
          <p>BLUE ERP Mobi</p>
        </div>
       </div>

       <div className="selected">
        { selected == 'blue' ?
         <div className="box blue">
          <div className="text">
           <h3>BLUE ERP</h3>

           <p>
           Reconhecido como o sistema de Gestão Empresarial (ERP) online mais completo do Brasil, a BLUE ERP oferece módulos robustos e variados, trazendo aos nossos clientes o que há de mais avançado em tecnologia para Gestão Financeira, Vendas, Emissão de Notas Fiscais, Controle Avançado de Estoque, Compras e Produção.
<br /><br />
Em um ERP que se propõe a ser completo, não poderia faltar um módulo exclusivo para Gestão de Clientes. Exatamente, com a BLUE ERP, você conta com um poderoso sistema de gestão empresarial que inclui um módulo CRM moderno e eficiente.
<br /><br />
Além de todos esses recursos, disponibilizamos mais de uma centena de relatórios. Com dados precisos e informações seguras sobre finanças e vendas, é possível tomar decisões com maior clareza e acompanhar os resultados de forma eficiente.
<br /><br />
Compreendendo que o empreendedorismo digital é uma das grandes tendências de mercado, integramos a BLUE ERP a diversas plataformas de e-commerce, marketplaces, meios de pagamento e logística. Tudo isso em nuvem, para que você e nossos clientes possam acessar de qualquer lugar e a qualquer momento!
           </p>

           <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>
            Experimente
           </button>
          </div>

          <div className="image">
            <img src={blue} alt="" />
          </div>
         </div>
        :
         null
        }

        { selected == 'lite' ?
         <div className="box lite">
         <div className="text">
          <h3>BLUE ERP Lite</h3>

          <p>
          Sabemos que a vida online nem sempre é perfeita. Mesmo com o aumento do acesso à internet, instabilidades na conexão podem ocorrer a qualquer momento. Mas a sua empresa não pode parar, certo? Pensando nisso, criamos uma versão prática, eficiente e instalável.
<br /><br />
Com quase 200 mil downloads, o BLUE Lite é uma alternativa para continuar atendendo seus clientes e realizando vendas, mesmo offline. Ele oferece PDV Frente de Caixa, emissão de notas em contingência, geração de boletos e diversas outras funcionalidades, tornando-se ideal para diferentes tipos de negócio, incluindo bares e restaurantes.
<br /><br />
Além disso, todos os dados da sua conta BLUE ERP podem ser sincronizados com o BLUE Lite e vice-versa. Assim, ao se reconectar à rede, a sincronização será reativada e um backup automático será gerado. Dessa forma, todas as suas movimentações, como notas fiscais, vendas e movimentações de estoque, estarão sempre atualizadas e alinhadas.
          </p>
          <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>
            Experimente
          </button>
         </div>

         <div className="image">
           <img src={lite} alt="" />
         </div>
        </div>
        :
         null
        } 

        { selected == 'mobi' ?
        <div className="box mobi">
        <div className="text">
        <h3>BLUE Mobi</h3>
        
        <p>
        Oferecer alternativas online e offline para desktop é essencial, mas e quando você está em uma feira, na casa do cliente, ou simplesmente quer ganhar agilidade ao gerar pedidos e consultar produtos fora do seu caixa?
<br /><br />
Sempre atentos às exigências de um mercado dinâmico e em constante evolução, desenvolvemos o nosso aplicativo de vendas para celular: moderno, elegante e prático. E sim, ele é totalmente sincronizado com a sua conta BLUE ERP!
<br /><br />
O BLUE Mobi conta com um PDV frente de caixa extremamente prático e eficiente, ideal para quem busca faturar mais e economizar tempo. Com ele, você pode realizar vendas rapidamente, gerando notas e cupons fiscais para envio imediato aos clientes. Também é possível controlar estoques, acessar os cadastros de produtos e clientes registrados no BLUE ERP, ou adicionar novos cadastros na hora, de forma simples e ágil.
<br /><br />
Além disso, o aplicativo permite a criação de pedidos e orçamentos, a consulta de produtos pelo código de barras e muito mais. Baixe agora mesmo – o BLUE Mobi é gratuito e está disponível para iOS e Android!
        </p>
        <div className="download">
          <img src={playstore} alt="" onClick={()=> abrirNovaAba('https://play.google.com/store/apps/details?id=app.erp.com&hl=pt&pli=1')}/>
          <img src={appstore} alt="" onClick={()=> abrirNovaAba('https://apps.apple.com/br/app/mobi-erp/id6670794703')}/>
        </div>
        </div>

        <div className="image">
          <img src={mobi} alt="" />
        </div>
       </div>
        :
         null
        }
       </div>
      </S.Main>

      <S.About>
      <div className="first">
       <p>
        
Nosso compromisso é oferecer a você, empreendedor, as melhores ferramentas para controle e gestão de comércio, varejo, prestação de serviços e indústrias. É por isso que o BLUE ERP vai além de um simples sistema com campos fixos onde você precisa inserir informações manualmente, tentando conciliar estoques, vendas, finanças e gestão fiscal.
<br /><br />
Pensamos grande e criamos soluções para que sua empresa alcance melhores resultados, integrando setores de forma inteligente e automatizando processos com tecnologia de ponta. Para nós, gestão empresarial, alta performance e qualidade de vida andam lado a lado. Queremos que você conheça o BLUE ERP como uma plataforma completa que atende às necessidades de milhares de empresas em todo o Brasil, com suas três soluções totalmente flexíveis, sincronizadas e conectadas. E o melhor: você tem acesso a tudo isso com uma única licença.
       </p>
 
       <ul>
        <li><GoShieldCheck/> <p>Funciona sem Internet</p></li>
        <li><GoShieldCheck/> <p>App grátis Android e iOS</p></li>
        <li><GoShieldCheck/> <p>Sistema de segurança SSL</p></li>
        <li><GoShieldCheck/> <p>Sem custos de Implantação</p></li>
        <li><GoShieldCheck/> <p>Mobilidade sem custo adicional</p></li>
        <li><GoShieldCheck/> <p>Prático e rápido</p></li>  
       </ul>
      </div>

      <div className="topic">
        <div className="left">
         <strong>BLUE ERP é o mais completo e seguro</strong>
         <span>Sistema de gestão online para Gestão Empresarial</span>
         <p>

O BLUE ERP é o sistema de gestão empresarial online mais completo e seguro, desenvolvido para oferecer as melhores ferramentas de gerenciamento de processos empresariais. Com módulos que simplificam a gestão financeira, o acompanhamento de vendas, a emissão de notas fiscais e muito mais, nosso sistema foi criado para manter todos os setores da sua empresa em perfeito funcionamento.
<br /><br />
Com relatórios detalhados, o BLUE ERP proporciona uma visão abrangente da sua empresa, com dados processados em tempo real e disponíveis para download. Dessa forma, você obtém informações precisas e confiáveis para fundamentar suas decisões estratégicas.
         </p>
         <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>
            Experimente
           </button>
        </div>

        <div className="right">
         <img src={t1} alt="" />
        </div>
      </div>

      <div className="topic reverse">
        <div className="left">
        <img src={t2} alt="" />
        </div>

        <div className="right">
         
         <strong>BLUE ERP ajuda na mobilidade do seu Negócio</strong>
         <span>Mobilidade sem custos adicionais</span>
         <p>

         Além das ferramentas robustas que oferecemos para aprimorar a gestão da sua empresa, o BLUE ERP também contribui para a mobilidade do seu negócio. Com acesso em nuvem, você pode visualizar e gerenciar dados de qualquer lugar, a qualquer momento, e ainda conta com aplicativos disponíveis para Android e iOS.
<br /><br />
Nosso aplicativo financeiro permite o gerenciamento das finanças mesmo sem conexão com a internet. Nele, é possível cadastrar dados, acompanhar o desempenho por meio de gráficos e manter o fluxo de caixa em dia. E o melhor: o app é totalmente gratuito!
         </p>
         <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>
            Experimente
           </button>
        </div>
      </div>

      <div className="topic">
        <div className="left">
         <strong>Simples e Flexível</strong>
         <span>Aplicação offline e gratuita para vendas e notas fiscais</span>
         <p>
         O BLUE Lite foi desenvolvido para ser simples e flexível, permitindo que você gerencie vendas, finanças e documentos fiscais de forma rápida e fácil, mesmo sem conexão com a internet.
<br /><br />
Com download gratuito, uma vez feita a sincronização inicial, você pode continuar suas operações sem preocupações ou receios de interrupções nas vendas. Além disso, o BLUE Lite é totalmente integrado ao sistema online, garantindo que tudo registrado no aplicativo seja sincronizado automaticamente com a plataforma na nuvem.
         </p>
         <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>
            Experimente
           </button>
        </div>

        <div className="right">
         <img src={t3} alt="" />
        </div>
      </div>

      <div className="topic reverse">
        <div className="left">
        <img src={t4} alt="" />
        </div>

        <div className="right">
         
         <strong>O melhor custo benefício do mercado</strong>
         <span>Cresça muito, investindo pouco</span>
         <p>
         Ao escolher os serviços do BLUE ERP, você faz apenas um investimento mensal acessível, eliminando a necessidade de despesas com servidores, manutenções e outros custos elevados associados a sistemas instalados.
<br /><br />
Nosso ERP foi projetado para integrar gestão e controle na sua empresa, oferecendo ferramentas inteligentes e recursos harmoniosos, desenvolvidos com atenção a cada detalhe. Tudo isso é pensado para aprimorar a produtividade da sua equipe e potencializar os resultados do seu negócio.
         </p>
         <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>
            Experimente
           </button>
        </div>
      </div>

      <div className="topic">
        <div className="left">
         <strong>Solução em nuvem Altamente Escalável</strong>
         <span>Escalabilidade para fazer sua empresa crescer</span>
         <p>
        
Em um ERP, a escalabilidade é a capacidade de evolução e crescimento do sistema, garantindo que esse processo ocorra sem impactar negativamente os usuários ou torná-lo obsoleto.
<br /><br />
Nossa solução em nuvem é extremamente escalável. Estamos comprometidos em apoiar os empresários brasileiros durante crises e transformações econômicas. Atendemos mais de 2.000 empresas de diversos tamanhos em todo o Brasil, oferecendo a solução ideal para cada fase do crescimento do seu negócio.
         </p>
         <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>
            Experimente
           </button>
        </div>

        <div className="right">
         <img src={t5} alt="" />
        </div>
      </div>
      </S.About>

      <S.About2>
       <h3>Nossos Parceiros</h3>
       <h2>Confiança que gera Resultados</h2>

       <div className="list">
        <div className="card"  onClick={()=> navigate('/amazon')}>
          <img src={i1} alt="" />
        </div>
        <div className="card"  onClick={()=> navigate('/amazon-marketplace')}>
          <img src={i2} alt="" />
        </div>
        <div className="card" onClick={()=> navigate('/b2w')}>
          <img src={i3} alt="" />
        </div>
        <div className="card" onClick={()=> navigate('/cnova')}>
          <img src={i4} alt="" />
        </div>
        <div className="card" onClick={()=> navigate('/feevale')}>
          <img src={i5} alt="" />
        </div>
        <div className="card" onClick={()=> navigate('/google')}>
          <img src={i6} alt="" />
        </div>
        <div className="card" onClick={()=> navigate('/jet')}>
          <img src={i7} alt="" />
        </div>
        <div className="card"  onClick={()=> navigate('/junior')}>
          <img src={i8} alt="" />
        </div>
        <div className="card"  onClick={()=> navigate('/loja-integrada')}>
          <img src={i9} alt="" />
        </div>
        <div className="card" onClick={()=> navigate('/magalu')}>
          <img src={i10} alt="" />
        </div>
        <div className="card" onClick={()=> navigate('/magento')}>
          <img src={i11} alt="" />
        </div>
        <div className="card" onClick={()=> navigate('/mastercard')}>
          <img src={i12} alt="" />
        </div>
        <div className="card" onClick={()=> navigate('/mercado-livre')}>
          <img src={i13} alt="" />
        </div>
        <div className="card" onClick={()=> navigate('/moovin')}>
          <img src={i14} alt="" />
        </div>
        <div className="card" onClick={()=> navigate('/paghiper')}>
          <img src={i15} alt="" />
        </div>
        <div className="card" onClick={()=> navigate('/signashop')}>
          <img src={i16} alt="" />
        </div>
        <div className="card" onClick={()=> navigate('/stone')}>
          <img src={i17} alt="" />
        </div>
        <div className="card" onClick={()=> navigate('/woocomerce')}>
          <img src={i18} alt="" />
        </div>
       </div>
      </S.About2>

      <S.About3>
       <img src={Cloud} alt="" className="Cloud"/>

       <div className="left">
        <strong>100 razões para contratar o</strong>
        <h2>Sistema de gestão online BLUE ERP</h2>

        <div className="motivos">
          <div className="topicos">
           <div className={`topic ${selected2 == 'G' ? 'selected' : null}`} onClick={()=> setSelected2('G')}>
            <p>Geral</p>
            <FaArrowRight/>
           </div>

           <div className={`topic ${selected2 == 'P' ? 'selected' : null}`} onClick={()=> setSelected2('P')}>
            <p>Principais Diferenciais</p>
            <FaArrowRight/>
           </div>

           <div className={`topic ${selected2 == 'F' ? 'selected' : null}`} onClick={()=> setSelected2('F')}>
            <p>Financeiro e Cobranças</p>
            <FaArrowRight/>
           </div>

           <div className={`topic ${selected2 == 'GE' ? 'selected' : null}`} onClick={()=> setSelected2('GE')}>
            <p>Gestão de Estoque e Produtos</p>
            <FaArrowRight/>
           </div>

           <div className={`topic ${selected2 == 'V' ? 'selected' : null}`} onClick={()=> setSelected2('V')}>
            <p>Vendas</p>
            <FaArrowRight/>
           </div>

           <div className={`topic ${selected2 == 'VP' ? 'selected' : null}`} onClick={()=> setSelected2('VP')}>
            <p>Vendas com PDV</p>
            <FaArrowRight/>
           </div>

           <div className={`topic ${selected2 == 'N' ? 'selected' : null}`} onClick={()=> setSelected2('N')}>
            <p>Notas Fiscais</p>
            <FaArrowRight/>
           </div>

           <div className={`topic ${selected2 == 'NF' ? 'selected' : null}`} onClick={()=> setSelected2('NF')}>
            <p>Notas Fiscais de Serviços</p>
            <FaArrowRight/>
           </div>
          </div>

         
           { selected2 == "G" ? 
            <ul>
             <span>Geral</span>
<li>
  <GoShieldCheck/> <p>Utilizamos o mesmo nível de segurança dos sites bancários para proteger os dados da sua empresa.</p>
</li>
<li>
  <GoShieldCheck/> <p>Executamos rotinas de backup automáticas a cada 24 horas, garantindo a segurança dos seus registros.</p>
</li>
<li>
  <GoShieldCheck/> <p>Você também tem a opção de realizar backups manuais e armazená-los em um local seguro à sua escolha.</p>
</li>
<li>
  <GoShieldCheck/> <p>Gerencie múltiplas empresas ou filiais com uma única licença, simplificando o controle administrativo.</p>
</li>
<li>
  <GoShieldCheck/> <p>Importe seus cadastros de clientes e fornecedores em massa com facilidade, usando planilhas do Excel.</p>
</li>
<li>
  <GoShieldCheck/> <p>Armazene documentos vinculados a lançamentos financeiros, contratos, clientes, fornecedores e outros itens relevantes.</p>
</li>
<li>
  <GoShieldCheck/> <p>Sincronize seus arquivos com documentos armazenados no Google Drive para facilitar o acesso e a organização.</p>
</li>
<li>
  <GoShieldCheck/> <p>Crie lembretes de tarefas para você e sua equipe, promovendo uma gestão eficiente das atividades.</p>
</li>
<li>
  <GoShieldCheck/> <p>Integre sua agenda com o Google Calendar para receber notificações por e-mail ou SMS, mantendo-se sempre atualizado.</p>
</li>
<li>
  <GoShieldCheck/> <p>Importe seus cadastros de produtos e controle de estoque rapidamente por meio de planilhas do Excel.</p>
</li>
<li>
  <GoShieldCheck/> <p>Desenvolva relatórios personalizados que atendam às necessidades específicas do seu negócio.</p>
</li>





             
            </ul>
           :
            null
           }

           { selected2 == "P" ?
            <ul>
              <span>Principais Diferenciais</span>
<li>
  <GoShieldCheck/> <p>Nosso suporte é completamente gratuito, garantindo ajuda sempre que você precisar.</p>
</li>
<li>
  <GoShieldCheck/> <p>Trabalhe online e offline de maneira sincronizada, sem interrupções nos processos.</p>
</li>
<li>
  <GoShieldCheck/> <p>Acesse seus dados de qualquer lugar com conexão à internet, garantindo flexibilidade para seu negócio.</p>
</li>
<li>
  <GoShieldCheck/> <p>Gerencie sua empresa a qualquer hora, com a conveniência de uma plataforma acessível.</p>
</li>
<li>
  <GoShieldCheck/> <p>Em caso de falta de energia, continue operando diretamente do seu Smartphone ou Tablet.</p>
</li>
<li>
  <GoShieldCheck/> <p>Mesmo sem internet, a operação da sua empresa seguirá sem problemas.</p>
</li>
<li>
  <GoShieldCheck/> <p>Mobilidade para controle de vendas e financeiro com um aplicativo móvel, sem custo adicional.</p>
</li>
<li>
  <GoShieldCheck/> <p>Emita notas fiscais com apenas três cliques, facilitando a rotina fiscal.</p>
</li>
<li>
  <GoShieldCheck/> <p>Gere boletos de onde estiver em menos de cinco minutos, proporcionando agilidade nos pagamentos.</p>
</li>
<li>
  <GoShieldCheck/> <p>Personalize orçamentos e pedidos de acordo com as necessidades do seu negócio, tornando o atendimento mais eficiente.</p>              
</li>       
            </ul>
           :
            null
           }

           { selected2 == "F" ? 
            <ul>
            <span>Financeiro e Cobranças</span>
<li>
<GoShieldCheck/>
<p>             
Cadastre lançamentos financeiros parcelados ou recorrentes, mantendo o controle facilitado de suas finanças.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Importe seus lançamentos financeiros antigos diretamente de uma planilha Excel, permitindo a transição sem perder histórico.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Realize múltiplos pagamentos para um único lançamento financeiro, simplificando processos de quitação.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Organize suas conciliações bancárias ao importar arquivos OFX.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Cadastre as contas bancárias da sua empresa e realize transferências de saldo entre elas de forma prática.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Controle o fluxo de caixa offline com o BLUE ERP Lite, uma solução sem custo adicional.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Acesse suas contas e transações de qualquer lugar com nosso aplicativo gratuito para Android e iOS.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Emita boletos com registro e instruções para cartório, otimizando o processo de cobrança.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Facilite o controle de cobranças enviando ou baixando arquivos de remessa no formato CNAB.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Gere carnês de boletos para aprimorar o processo de cobrança e o relacionamento com os clientes.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Envie boletos de cobrança diretamente para o e-mail dos seus clientes.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Acesse dezenas de relatórios financeiros para uma visão ampla do gerenciamento financeiro do seu negócio.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Fature pedidos aprovados pela sua equipe de vendas rapidamente e sem complicações.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Gerencie o pagamento de comissões com controle e transparência.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Tenha um fluxo de caixa centralizado para multiempresas e filiais, adaptado ao crescimento do seu negócio.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Estruture seu plano de contas conforme a necessidade específica da sua empresa.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Cadastre centros de custo para entender e otimizar despesas por setor.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Defina grupos de DRE para consultar resultados financeiros de forma personalizada e comparar períodos como mensal, bimestral ou semanal.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Envie notas fiscais automaticamente aos clientes via e-mail, melhorando a comunicação e a eficiência.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Confirme cálculos de alíquotas e visualize a DANFE antes de emitir notas fiscais, evitando erros.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Crie grupos para organizar receitas e despesas de projetos específicos.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Sincronize lançamentos financeiros com contratos de vendas, ordens de serviço, pedidos faturados, notas fiscais de compra, comissões e mais, integrando o fluxo de informações de forma contínua e precisa.              
</p>
</li>
            </ul>
           :
            null
           }

           { selected2 == "GE" ?
            <ul>
              <span>Gestão de Estoque e Produtos</span>

<li>
<GoShieldCheck/>
<p>
Controle depósitos e gerencie inventário em diferentes endereços ou setores de maneira centralizada.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Cadastre produtos compostos ou crie kits de vendas, oferecendo pacotes personalizados para seus clientes.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Customize grades com opções como tamanhos, cores e outras variáveis relevantes para seu setor.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Gerencie lotes e datas de validade para garantir a qualidade e conformidade dos produtos.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Realize o controle de números de série com facilidade, acompanhando o histórico de cada item.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Adicione fotos aos produtos e inclua-as em orçamentos e pedidos, facilitando a identificação visual.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Defina várias tabelas de preços para adaptar-se a diferentes públicos ou condições comerciais.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Calcule automaticamente o preço de venda com base em custos como impostos, frete e despesas operacionais, aplicando a margem de lucro desejada.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Crie códigos de identificação personalizados para facilitar o rastreamento interno dos produtos.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Use pesquisas rápidas (runtime) para localizar produtos ao criar uma venda ou ordem de compra.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Estabeleça um estoque de segurança e receba notificações automáticas quando o nível de inventário ficar baixo.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Configure preços de venda mínimos para evitar perdas e proteger sua margem de lucro.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Sincronize seu estoque físico com a loja virtual para garantir disponibilidade e evitar rupturas de estoque.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Crie campos personalizados no cadastro de produtos para atender a necessidades específicas do seu negócio.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Imprima etiquetas de armazenamento com códigos de barras para facilitar a organização e rastreio no estoque.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Movimente mercadorias entre depósitos de maneira rápida e registrada.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Organize produtos em categorias para manter o estoque acessível e bem estruturado.
</p>
</li>

<li>
<GoShieldCheck/>
<p>
Cadastre informações detalhadas como marca, modelo, tamanho e peso dos produtos para uma descrição mais completa e precisa.
</p>
</li>

            </ul>
           :
            null
           }
         
           { selected2 == "V" ?
            <ul>
              <span>Vendas</span>

<li>
<GoShieldCheck/>
<p>
Gere orçamentos e pedidos de venda diretamente a partir de oportunidades registradas no CRM, facilitando o acompanhamento do funil de vendas.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Personalize a impressão de cada pedido ou orçamento para atender às necessidades específicas de cada cliente ou proposta.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Crie quantas tabelas de preços forem necessárias para se adaptar a diferentes públicos, mercados ou estratégias de vendas.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Realize vendas que estejam integradas às ordens de serviço, assegurando um fluxo de trabalho coordenado entre equipes.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Monitore a inadimplência de clientes com ferramentas de controle e relatórios específicos.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Configure alertas automáticos para relatórios importantes, mantendo sua equipe sempre informada.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Reserve mercadorias no estoque para pedidos confirmados, evitando vendas duplicadas ou desfalques inesperados.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Defina um preço mínimo de venda para proteger sua margem de lucro e evitar descontos excessivos.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Realize vendas offline usando o aplicativo gratuito, com sincronização automática dos dados ao reconectar-se.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Acesse o aplicativo Android gratuito para que sua equipe de vendas possa realizar operações de qualquer lugar.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Envie orçamentos ou pedidos em PDF diretamente para o e-mail do cliente com um único clique, agilizando o atendimento.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Sincronize as vendas do seu e-commerce com o ERP, centralizando todas as transações e atualizações de estoque.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Duplique vendas com facilidade, acelerando o processo e aumentando a eficiência da equipe comercial.
</p>
</li>

              
            </ul>
           :
            null
           }

           { selected2 == "VP" ?
            <ul>
              <span>Vendas com PDV</span>

<li>
<GoShieldCheck/>
<p>
Emita cupons fiscais eletrônicos (NFC-e) com rapidez e praticidade, garantindo a conformidade fiscal.
</p>
</li>

<li>
<GoShieldCheck/>
<p>
Organize sua oferta de produtos com grades personalizadas, facilitando a visualização e escolha de itens durante a venda.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Veja a foto do produto diretamente na tela de venda, proporcionando uma experiência mais visual e intuitiva.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Realize buscas rápidas por código, nome ou descrição parcial do produto, agilizando o atendimento ao cliente.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Integre leitores de código de barras EAN e balanças, aprimorando a precisão e rapidez nas vendas.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Efetue vendas consignadas e mantenha controle de tudo diretamente pelo PDV.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Configure permissões de desconto protegidas por senha, assegurando controle sobre políticas de preço.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Calcule comissões por vendedor e por loja, promovendo transparência e motivação para a equipe de vendas.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Utilize campos específicos para registrar dados da transação via TEF (Transferência Eletrônica de Fundos).
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Realize abertura e fechamento de caixa com a opção de sangria, garantindo a gestão segura dos valores.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Envie a NFC-e por e-mail para o cliente, reduzindo o uso de papel e oferecendo mais conveniência.
</p>
</li>


            </ul>
           :
            null
           }

           { selected2 == "N" ? 
            <ul>
              <span>Notas Fiscais</span>

<li>
<GoShieldCheck/>
<p>
Emita notas fiscais para empresas de diversos regimes tributários, incluindo Simples Nacional, Lucro Presumido e Lucro Real.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Pré-visualize o DANFE antes de emitir a nota fiscal, garantindo que todas as informações estejam corretas.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Envie automaticamente o XML da nota fiscal para o cliente, facilitando o acesso e armazenamento digital dos documentos.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Baixe o XML da nota fiscal diretamente para o seu computador para registros e auditorias.
</p>
</li>

<li>
<GoShieldCheck/>
<p>
Integre com o Google Drive e envie o XML das notas fiscais automaticamente para o armazenamento em nuvem.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Baixe notas fiscais em lote, compactadas em uma única pasta para facilitar o gerenciamento e organização.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Baixe também as DANFEs em lote com apenas um clique, agilizando o processo de impressão ou armazenamento.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Emita notas fiscais para diversas finalidades, como devoluções, brindes, remessas e garantias, adaptando-se a diferentes necessidades comerciais.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Faça a emissão de notas fiscais de importação, facilitando o controle fiscal de mercadorias importadas.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Gere cartas de correção dentro do sistema para ajustes em notas fiscais emitidas.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Beneficie-se de atualizações automáticas de novas regras fiscais sem custos adicionais, mantendo a conformidade sem preocupações.
</p>
</li>


            </ul>
           :
            null
           }

           { selected2 == "NF" ? 
            <ul>
              <span>Notas Fiscais e Serviços</span>

<li>
<GoShieldCheck/>
<p>
Realize a emissão de notas fiscais de serviços (NFS-e) homologadas em mais de 1.000 municípios, garantindo conformidade com as legislações locais.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Aproveite a agilidade de nosso sistema para deixar de utilizar o sistema da sua prefeitura, centralizando todas as operações fiscais em uma única plataforma.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Gere notas fiscais automaticamente a partir de ordens de serviço, simplificando o processo de faturamento e reduzindo erros.
</p>
</li>
<li>
<GoShieldCheck/>
<p>
Emita notas fiscais com base em contratos de serviços anuais ou mensais, oferecendo flexibilidade e organização na sua gestão fiscal.
</p>
</li>


            </ul>
           :
            null
           }
        </div>
       </div>


       <div className="right">
        <img src={Man} alt="" />
       </div>
      </S.About3>

      <S.Rest>

       <div className="contrate">
         <span>
Adquira o sistema de gestão empresarial líder no Brasil e <br />
simplifique a administração do seu negócio ainda hoje!
         </span>

         <button onClick={()=> abrirNovaAba('https://blueinnovation.com.br/account/')}>
            Experimentar
         </button>
       </div>
      </S.Rest>

      <Footer/>
     </S.Container>
    )
}