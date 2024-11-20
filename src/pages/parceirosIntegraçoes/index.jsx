import * as S from "./style";

import {useNavigate } from "react-router-dom";
import { useEffect } from "react";

import MouseFollower from "../../components/mouse";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";


export function ParceirosIntegraçoes(){
    const navigate = useNavigate();

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
         Integramos outras soluções e sistemas que <br /> contribuem para uma
         organização ainda mais eficiente dos seus negócios.
        </span>
      </S.SubHeader>

      <S.List>
       <div className="card c1" onClick={()=> navigate('/amazon')}>
       </div>

       <div className="card c2" onClick={()=> navigate('/mercado-livre')}>
       </div>

       <div className="card c3" onClick={()=> navigate('/magalu')}>
       </div>

       <div className="card c4" onClick={()=> navigate('/google')}>
       </div>

       <div className="card c5" onClick={()=> navigate('/amazon-marketplace')}>
       </div>

       <div className="card c6" onClick={()=> navigate('/magento')}>
       </div>

       <div className="card c7" onClick={()=> navigate('/mastercard')}>
       </div>

       <div className="card c8" onClick={()=> navigate('/b2w')}>
       </div>

       <div className="card c9" onClick={()=> navigate('/cnova')}>
       </div>

       <div className='card c10' onClick={()=> navigate('/feevale')}>
       </div>

       <div className='card c11' onClick={()=> navigate('/jet')}>
       </div>

       <div className='card c12' onClick={()=> navigate('/junior')}>
       </div>

       <div className='card c13' onClick={()=> navigate('/loja-integrada')}>
       </div>

       <div className='card c14' onClick={()=> navigate('/moovin')}>
       </div>

       <div className='card c15' onClick={()=> navigate('/paghiper')}>
       </div>

       <div className='card c16' onClick={()=> navigate('/signashop')}>
       </div>

       <div className='card c17' onClick={()=> navigate('/stone')}>
       </div>

       <div className='card c18' onClick={()=> navigate('/woocomerce')}>
       </div>
      </S.List>

      <Footer/>
     </S.Container>
    )
}