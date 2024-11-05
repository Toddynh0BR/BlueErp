import styled from "styled-components";

import i1 from "./assets/logoAmazon.jpg";
import i2 from "./assets/logoMl.jpg";
import i3 from "./assets/logoMagalu.jpg";
import i4 from "./assets/logoGoogle.jpg";
import i5 from "./assets/logoAmazonMarketplace.jpg";
import i6 from "./assets/logoMagento.jpg";
import i7 from "./assets/logoMaster.jpg";
import i8 from "./assets/logoB2w.jpg";
import i9 from "./assets/logoCnova.jpg";
import i10 from "./assets/logoFeevale.jpg";
import i11 from "./assets/logoJet.jpg";
import i12 from "./assets/logoJunior.jpg";
import i13 from "./assets/logoLojaIntegrada.jpg";
import i14 from "./assets/logoMoovin.jpg";
import i15 from "./assets/logoPagHiper.jpg";
import i16 from "./assets/logoSignaShop.jpg";
import i17 from "./assets/logoStone.jpg";
import i18 from "./assets/logoWooCommerce.jpg";

export const Container = styled.div`

`

export const SubHeader = styled.div`
height: 30rem;
width: 100%;

padding-top: 5rem;

justify-content: center;
flex-direction: column;
align-items: center;
text-align: center;
display: flex;
gap: 2rem;

background: rgb(0,0,198);
background: linear-gradient(120deg, rgba(0,0,198,1) 0%, rgba(115,0,204,1) 100%);

h2 {
 font-size: 3.3rem;
 color: #FFFFFF;
}

span {
 font-size: 1.7rem;
 color: #FFFFFF;
}
`

export const List = styled.div`
height: fit-content;
width: 100%;

grid-template-columns: repeat(3, 1fr);
display: grid;
gap: 4rem;

padding: 3.5rem 20rem;

.card {
 border: 1px solid #bebebec2;
 border-radius: .5rem;

 height: 18rem;

 &:hover {
  transform: scale(105%);
  cursor: pointer;
 }
}

.c1{
 background-image: url(${i1});
 background-repeat: no-repeat;
 background-position: center;
 background-color: #ffffff;
 background-size: cover;
 background-size: 50%;
}
.c2{
 background-image: url(${i2});
 background-repeat: no-repeat;
 background-position: center;
 background-color: #ffffff;
 background-size: cover;
 background-size: 50%;
}
.c3{
 background-image: url(${i3});
 background-repeat: no-repeat;
 background-position: center;
 background-color: #ffffff;
 background-size: cover;
 background-size: 50%;
}
.c4{
 background-image: url(${i4});
 background-repeat: no-repeat;
 background-position: center;
 background-color: #ffffff;
 background-size: cover;
 background-size: 50%;
}
.c5{
 background-image: url(${i5});
 background-repeat: no-repeat;
 background-position: center;
 background-color: #ffffff;
 background-size: cover;
 background-size: 50%;
}
.c6{
 background-image: url(${i6});
 background-repeat: no-repeat;
 background-position: center;
 background-color: #ffffff;
 background-size: cover;
 background-size: 50%;
}
.c7{
 background-image: url(${i7});
 background-repeat: no-repeat;
 background-position: center;
 background-color: #ffffff;
 background-size: cover;
 background-size: 50%;
}
.c8{
 background-image: url(${i8});
 background-repeat: no-repeat;
 background-position: center;
 background-color: #ffffff;
 background-size: cover;
 background-size: 50%;
}
.c9{
 background-image: url(${i9});
 background-repeat: no-repeat;
 background-position: center;
 background-color: #ffffff;
 background-size: cover;
 background-size: 50%;
}
.c10{
 background-image: url(${i10});
 background-repeat: no-repeat;
 background-position: center;
 background-color: #ffffff;
 background-size: cover;
 background-size: 50%;
}
.c11{
 background-image: url(${i11});
 background-repeat: no-repeat;
 background-position: center;
 background-color: #ffffff;
 background-size: cover;
 background-size: 50%;
}
.c12{
 background-image: url(${i12});
 background-repeat: no-repeat;
 background-position: center;
 background-color: #ffffff;
 background-size: cover;
 background-size: 50%;
}
.c13{
 background-image: url(${i13});
 background-repeat: no-repeat;
 background-position: center;
 background-color: #ffffff;
 background-size: cover;
 background-size: 50%;
}
.c14{
 background-image: url(${i14});
 background-repeat: no-repeat;
 background-position: center;
 background-color: #ffffff;
 background-size: cover;
 background-size: 50%;
}
.c15{
 background-image: url(${i15});
 background-repeat: no-repeat;
 background-position: center;
 background-color: #ffffff;
 background-size: cover;
 background-size: 50%;
}
.c16{
 background-image: url(${i16});
 background-repeat: no-repeat;
 background-position: center;
 background-color: #ffffff;
 background-size: cover;
 background-size: 50%;
}
.c17{
 background-image: url(${i17});
 background-repeat: no-repeat;
 background-position: center;
 background-color: #ffffff;
 background-size: cover;
 background-size: 50%;
}
.c18{
 background-image: url(${i18});
 background-repeat: no-repeat;
 background-position: center;
 background-color: #ffffff;
 background-size: cover;
 background-size: 50%;
}

@media (max-width: 450px){
 grid-template-columns: repeat(1, 1fr);
 padding: 3.5rem 2rem;
} 
`