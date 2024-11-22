import * as S from "./style";
import React, { useRef, useEffect } from "react";

import MouseFollower from "../../../components/mouse";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";

import { GoShieldCheck } from "react-icons/go";

import Back from "../assets/back1.svg";

import Image1 from "../assets/sistema-para-lojas-de-limpeza-sige-cloud.png";
import Image2 from "../assets/vendas-produtos-de-limpeza.svg";
import Image3 from "../assets/c2.svg";
import Image4 from "../assets/v3.svg";
import Image5 from "../assets/v4.svg";

import Image6 from "../assets/sistema-de-pdv-offline.svg";
import Image7 from "../assets/gestao-de-estoque-sige-cloud.svg";
import Image8 from "../assets/gestao-financeira-sige-cloud.svg";
import Image9 from "../assets/gestao-fiscal-sige-cloud-servicos.svg";


export function A21(){
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

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
        Mais eficiência para vender <strong> produtos de limpeza </strong> em loja física ou virtual!

        </h2>
          
        <ul>
<li>
   <GoShieldCheck/>Gestão de Produção PCP.
</li>
<li>
  <GoShieldCheck/>Catálogo de Produtos e Loja Virtual;
</li>
<li>
  <GoShieldCheck/>PDV para vendas diretas e consignadas;
  



</li>        
        </ul>

        <button  onClick={()=> abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
       </div>

       <div className="right">
        <img src={Image1} alt="Image" />
       </div>
       </div>


      </S.Main>

      <S.Main2>
        <div className="box b1">
         <div className="left">
         <strong>Gestão de vendas

</strong>
         <img src={Image2} alt="" className="especial"/>
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section1Ref)}>
            <p>PDV para vendas diretas e consignadas
            



</p>
          </li>

          <li onClick={() => handleScrollToSection(section1Ref)}>
            <p>Catálogo Virtual de Produtos</p>
          </li>

          <li onClick={() => handleScrollToSection(section1Ref)}>
           
            <p>Gestão de Pedidos e Orçamentos</p>
          </li>
         </ul>
        </div>

        <div className="box b2">
         <div className="left">
         <strong>Estoque e Produção


</strong>
         <img src={Image3} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>Cadastro de produtos com variação
            


</p>
          </li>

          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>Gestão de Múltiplos depósitos</p>
          </li>

          <li onClick={() => handleScrollToSection(section2Ref)}>
           
            <p>
            Gestão de Produção (PCP)</p>
          </li>
         </ul>
        </div>

        <div className="box b3">
         <div className="left">
         <strong>Gestão Financeira


</strong>
         <img src={Image4} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section3Ref)}>
           
            <p>Faturamento em Lote




</p>
          </li>

          <li onClick={() => handleScrollToSection(section3Ref)}>
           
            <p>Faturamento parcial de Pedidos
            </p>
          </li>

          <li onClick={() => handleScrollToSection(section3Ref)}>
           
            <p>
            Fluxo de Caixa profissional
            </p>
          </li>
         </ul>
        </div>

        <div className="box b4">
         <div className="left">
         <strong>Emissão de notas fiscais
         </strong>
         <img src={Image5} alt="" />
         </div>

         <ul>
          <li onClick={() => handleScrollToSection(section4Ref)}>
           
            <p>Emissão de NFCe



            </p>
          </li>

          <li onClick={() => handleScrollToSection(section4Ref)}>
           
            <p>Configurações de ICMS</p>
          </li>

          <li onClick={() => handleScrollToSection(section4Ref)}>
           
            <p>Facilitador do SPED Fiscal</p>
          </li>
         </ul>
        </div>
      </S.Main2>

      <S.Ecossistem>
      <span>
       <strong>Integre todos os setores </strong> do  <br /> seu negócio com nossas ferramentas!
      </span>

      <strong className="hover">
        {'>> Conhecer Ecossistema <<'}
      </strong>
      </S.Ecossistem>

      <S.Main3 ref={section1Ref}>
       <div className="left">
       <img src={Image6} alt="" />
       </div>

       <div className="right">
        <span>
        Quero vender mais

        </span>

        <h4> 
       <strong> Módulo de vendas </strong> completo para você conquistar mais clientes!
       </h4>

       <p>Seja para efetuar <strong>vendas diretas</strong> ao consumidor final ou para profissionais que trabalham com <strong>vendas em consignação</strong> para outras lojas, você pode aproveitar o PDV Frente de Caixa do Blue ERP. Com essa solução, é possível <strong>importar orçamentos</strong>, registrar saídas consignadas e realizar vendas diretas com emissão de NFC-e ou CF-e SAT.</p>


        <button  onClick={()=> abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
       </div>

      
      </S.Main3>

      <S.Main4 data-color={false}>
        <h2>
        Soluções para comprar pelo melhor preço, <strong> vender mais e conquistar clientes!</strong>
        </h2>

        <div className="texts">
          <div className="text">
            <span>Catálogo Virtual</span>
            <p>Expanda as <strong>oportunidades de venda</strong> da sua loja de produtos químicos e de limpeza com a criação de um <strong>Catálogo Virtual exclusivo</strong>. Esse catálogo pode ser enviado diretamente por e-mail, impactando toda a sua carteira de clientes de maneira prática e eficiente. Para tornar o processo ainda mais ágil, o cliente pode <strong>aprovar a compra</strong> com apenas um clique no botão dentro do e-mail, integrando automaticamente o pedido ao seu sistema.</p>

          </div>

          <div className="text">
            <span>Módulo de CRM</span>
            <p>Além de gerenciar toda a sua carteira de clientes, o Blue ERP oferece um <strong>módulo completo de CRM</strong>. Esse módulo proporciona gráficos sempre atualizados sobre <strong>vendas e negociações</strong>, permitindo a criação de um funil de vendas e um pipe de oportunidades. Com essa poderosa ferramenta de força de vendas, você poderá <strong>projetar ações de marketing</strong>, desenvolver fluxos de prospecção de clientes e explorar muitas outras funcionalidades para impulsionar o crescimento do seu negócio.</p>


          </div>

          <div className="text">
            <span> Tabelas de Preços</span>
            <p>Que tal implementar <strong>tabelas de preços promocionais</strong> para mercadorias que estão paradas no seu estoque? Além disso, você pode oferecer <strong>preços diferenciados</strong> para compras em grande volume ou até mesmo criar condições especiais para os seus <strong>clientes fiéis</strong>. Essas estratégias ajudam a movimentar o estoque e a fidelizar ainda mais seus consumidores!</p>

          </div>
        </div>

        <button onClick={()=> abrirNovaAba('https://site.blueerp.com.br/ativacao')}>
          Experimente
        </button>
      </S.Main4>

      <S.Main3 ref={section2Ref}>
       <div className="left">
       <span>
       Quero gerenciar estoques
        </span>

        <h4> 
        Recursos flexíveis de <strong> armazenamento de mercadorias </strong> para quem tem uma ou várias lojas!
       </h4>

       <p>O Blue ERP conta com um <strong>moderno e completo módulo de gestão de estoque</strong> que possibilita o gerenciamento eficiente de todas as etapas, desde a <strong>compra de mercadorias</strong>, a organização em diferentes depósitos, o controle do <strong>giro de mercadorias</strong> em estoque e até o acompanhamento das entregas. Uma solução completa para otimizar sua operação!</p>


        <button  onClick={()=> abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
       </div>

       <div className="right">
       <img src={Image7} alt="" />
       
       </div>

       <img src={Back} alt="" className="bottom"/>
      </S.Main3>

      <S.Main4 data-color={true}>
        <h2>
        Para você <strong> não perder mais vendas </strong> por falta de mercadorias!
        </h2>

        <div className="texts">
          <div className="text">
            <span>           
                   
            Múltiplos depósitos
            </span>
            <p>Por ser um <strong>sistema multiempresa</strong> com suporte para múltiplos depósitos, o Blue ERP elimina a necessidade de contratar uma licença separada para cada loja, fábrica ou unidade de negócio. Com ele, você pode <strong>cadastrar as mercadorias</strong> em um único lugar e gerenciar diferentes locais de armazenamento de forma <strong>ágil, independente e flexível</strong>, simplificando sua operação.</p>

          </div>

          <div className="text">
            <span>Produtos com variação</span>
            <p>Com o Blue ERP, você pode registrar <strong>produtos simples e variáveis</strong>, como desinfetantes que variam em aroma ou quantidade. Tudo é gerenciado com <strong>códigos específicos</strong> e variações personalizadas para atender às <strong>demandas específicas</strong> do seu tipo de negócio, garantindo mais organização e controle.</p>

          </div>

          <div className="text">
            <span>Endereçamento de estoque
            </span>
            <p>Com o Blue ERP, você pode registrar <strong>produtos simples e variáveis</strong>, como desinfetantes que variam em aroma ou quantidade. Tudo é gerenciado com <strong>códigos específicos</strong> e variações personalizadas para atender às <strong>demandas específicas</strong> do seu tipo de negócio, garantindo mais organização e controle.</p>

          </div>
        </div>

        <div className="texts">
          <div className="text">
            <span>           
                   
            Gerar ordem de compras
            </span>
            <p>De maneira prática e automatizada, com os recursos para <strong>Fábricas de Produtos de Limpeza</strong> do Blue ERP, você pode <strong>criar ordens de compra</strong> com apenas alguns cliques, diretamente a partir dos pedidos realizados. Um processo simples que otimiza sua operação e economiza tempo!</p>

          </div>

          <div className="text">
            <span>Gestão de Produção (PCP)</span>
            <p>Com o Blue ERP, você pode <strong>cadastrar insumos</strong>, criar ordens de produção, definir requisitos para o <strong>controle de qualidade</strong>, realizar simulações de produção e gerenciar todo o processo produtivo. Tudo isso com recursos específicos para atender indústrias de pequeno, médio ou grande porte, garantindo eficiência e controle em cada etapa.</p>

          </div>
        </div>
        <button onClick={()=> abrirNovaAba('https://site.blueerp.com.br/ativacao')}>
          Experimente
        </button>
      </S.Main4>

      <S.Main3 ref={section3Ref}>
       <div className="left">
       <img src={Image8} alt="" />
       </div>

       <div className="right">
        <span>
        Quero gerenciar meu financeiro
        </span>

        <h4> 
        Para sua empresa faturar muito mais, nada melhor que contar com <strong> tecnologia de ponta em gestão financeira!</strong>
       </h4>

       <p>Com o Blue ERP, você tem módulos completos para controlar o seu <strong>fluxo de caixa</strong>, fazer projeções de receitas e despesas, gerenciar centros de custos e planos de contas, tudo para <strong>organizar sua gestão financeira</strong>. Isso permite reduzir custos e otimizar recursos, contribuindo diretamente para o <strong>crescimento do seu negócio</strong>.</p>


        <button  onClick={()=> abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
       </div>

      
      </S.Main3>

      <S.Main4 data-color={false}>
        <h2>       
        Funcionalidades para ter uma <strong> gestão financeira eficiente!</strong>
</h2>

        <div className="texts">
          <div className="text">
            <span> Gestão de Vendedores e Metas</span>
            <p>
           
            Com o Blue ERP, você pode gerenciar de forma eficiente a performance da sua equipe comercial, acompanhar as vendas realizadas, registrar lançamentos de comissões e verificar o percentual de meta atingido. Além disso, é possível controlar os dados acessíveis aos seus vendedores, por meio do gerenciamento de permissões, garantindo a segurança e a organização das informações.
            </p>
          </div>

          <div className="text">
            <span> Relatório de Lucratividade</span>
            <p>
           
            Acompanhe a lucratividade do seu negócio com precisão e segurança. O Blue ERP disponibiliza um relatório detalhado, considerando custos e faturamento de cada venda, garantindo dados reais para tomadas de decisão estratégicas e para o seu planejamento financeiro.
            </p>
          </div>

          <div className="text">
            <span> Lançamentos Recorrentes</span>
            <p>
           
            Facilite o gerenciamento de pagamentos recorrentes! No Blue ERP, você pode registrar cobranças recorrentes e gerar boletos automaticamente, enviando-os aos seus clientes sem preocupações. Além disso, o sistema conta com um calendário financeiro que avisa quando o vencimento está próximo, ajudando a manter o fluxo de caixa sempre em dia.
            </p>
          </div>
        </div>
        
        <div className="texts">
          <div className="text">
            <span>Faturamento parcial de pedidos</span>
            <p>Falou em flexibilidade para a gestão financeira, falou Blue ERP! Outro grande benefício do nosso módulo financeiro é a possibilidade de <strong>faturar pedidos da maneira que preferir</strong>, inclusive de forma parcial. Você acessa o pedido, seleciona o valor pago e, automaticamente, o <strong>status é atualizado</strong> no seu financeiro, tornando todo o processo mais ágil e organizado.</p>

          </div>

          <div className="text">
            <span>Leilão de Fornecedores
            </span>
            <p>Com o Blue ERP, você pode criar cotações e enviá-las por e-mail para seus fornecedores, que poderão preencher os custos da sua solicitação através de um <strong>formulário online</strong>. Depois, basta escolher a melhor opção dentro do sistema e <strong>converter a cotação em uma ordem de compra</strong>. Assim, você garante sempre a compra de mercadorias pelo <strong>melhor preço</strong>!</p>

          </div>

          <div className="text">
            <span>Carnês de pagamento
            </span>
            <p>Se você deseja oferecer ainda mais comodidade para sua clientela, que tal trabalhar com <strong>carnês de pagamento</strong>? No Blue ERP, você pode gerar carnês diretamente a partir de um pedido ou venda, imprimindo documentos referentes a cada parcela da compra. E o melhor, esse lançamento já fica automaticamente <strong>vinculado ao cadastro do seu cliente</strong>, tornando o processo mais ágil e organizado.</p>

          </div>
        </div>


        <button onClick={()=> abrirNovaAba('https://site.blueerp.com.br/ativacao')}>
          Experimente
        </button>
      </S.Main4>

      <S.Main3 ref={section4Ref}>
       <div className="left">
       <span>
       Quero gestão fiscal completa
        </span>

        <h4> 
        <strong> Pare de perder vendas </strong> com o caixa trancado ou com a demora para emitir notas fiscais!
       </h4>

       <p>Com o módulo de <strong>Gestão Fiscal</strong> do Blue ERP, a emissão de notas se torna um processo simples e ágil, permitindo que você e sua equipe tenham mais tempo para oferecer um bom atendimento e conquistar ainda mais clientes. Configure os impostos necessários e emita NF-e, NFC-e, CF-e SAT e outros documentos fiscais, com a certeza de estar sempre <strong>em dia com a legislação</strong>.</p>


        <button  onClick={()=> abrirNovaAba('https://site.blueerp.com.br/ativacao')}>Experimente</button>
       </div>

       <div className="right">
       <img src={Image9} alt="" />
       
       </div>

       <img src={Back} alt="" className="bottom"/>
      </S.Main3>

      <S.Main4 data-color={true}>
        <h2>
        <strong>Descomplique! </strong> Faça a gestão fiscal mais simples e organizada com BLUE ERP.</h2>

        <div className="texts">
          <div className="text">
            <span>Emissão de NFC-e e CF-e SAT</span>
            <p>Para você que realiza vendas para o consumidor final, além de todos os recursos de produção e financeiro, conte com a emissão de <strong>NFC-e</strong> ou <strong>CF-e SAT</strong>. Com o PDV Frente de Caixa, moderno e fácil de usar, você pode emitir esses e outros documentos fiscais em instantes. É só começar e aproveitar a praticidade!</p>

          </div>

          <div className="text">
            <span> Configurações de ICMS</span>
            <p>No Blue ERP, nós damos uma mãozinha para manter sua empresa sempre em dia com o Fisco. Entre nossas funcionalidades, você encontra campos que permitem configurar valores complexos de <strong>ICMS Efetivo</strong>, <strong>ICMS Desonerado</strong> e toda a informação referente à <strong>Substituição Tributária (ST)</strong>, garantindo total conformidade fiscal.</p>

          </div>

          <div className="text">
            <span>Facilitador de Sped Fiscal</span>
            <p>Chega de dor de cabeça na hora de enviar seus documentos fiscais para a contabilidade! Com o recurso de <strong>SPED Fiscal</strong> do Blue ERP, você gera o arquivo a partir das entradas de XML dos fornecedores e das saídas de produtos das notas fiscais emitidas, podendo contar também com as informações do <strong>Bloco K</strong> e do <strong>Bloco H</strong>. Uma solução eficiente e prática para sua gestão fiscal!</p>

          </div>

        </div>

        <button onClick={()=> abrirNovaAba('https://site.blueerp.com.br/ativacao')}>
          Experimente
        </button>
      </S.Main4>

      <Footer/>
     </S.Container>
    )
}