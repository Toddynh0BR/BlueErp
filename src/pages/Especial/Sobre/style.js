import styled from "styled-components";

import Back1 from "../assets/FundoEspecial.jpg"
import Back2 from "../assets/FundoEspecial2.jpg";

export const Container = styled.div`
max-width: 100%;
overflow: hidden;
`

export const Main = styled.main`
height: 90vh;
width: 100%;

background-image: url(${Back1});
background-size: cover;

justify-content: center;
flex-direction: column;
align-items: center;
text-align: center;
display: flex;
gap: 4rem;

p {
 font-size: 1.4rem;
 font-weight: 600;
 color: #FFFFFF;

 justify-content: center;
 align-items: center;
 display: flex;
 gap: 1rem;

 strong {
  font-size: 1.8rem;
 }
}
h1 {
 font-size: 3.5rem;
 font-weight: 400;
 color: #FFFFFF;

 margin-bottom: 1rem;
}
span {
 font-size: 1.5rem;
 font-weight: 400;
 color: #FFFFFF;
}
.CloudBottom {
width: 100%;

position: absolute;
bottom: 6rem;
left: 0;

align-items: center;
display: flex;

img {
 width: 100%;
}
}

.balls {
 align-items: center;
 display: flex;
 gap: 7rem;

 margin-bottom: -20rem;

}

.ball {
 height: 25rem;
 width: 25rem;

 background-color: #FFFFFF;
 border: 4px solid #8f00fc13;
 border-radius: 50%;

 justify-content: center;
 align-items: center;
 display: flex;
 z-index: 1;

 p {
  font-size: 1.5rem;
  font-weight: 600;
  color: rgb(0%, 0%, 77.598572%);

  flex-direction: column;
  line-height: 4rem;

  strong {
   font-weight: 400;
   font-size: 6.5rem;
   color: #7300cc;
  }
 }
}

.slider {
 display: none;
}

@media (max-width: 450px){
  height: 90vh;
  overflow: hidden;
 gap: 5rem;

  .title {
   margin-top: -15rem;
  }
 .balls {
  display: none;
 }
 .slider {
 height: 26rem;
 width: 100%;

 display: flex;
 margin-bottom: -30rem;
}

.swiper-wrapper {
 width: 100%;
 border: none;
 margin: none;


}

.swiper-pagination {
 display: none;
}

.ball {
 align-self: center;
 justify-self: center;
}

.CloudBottom {
width: 100%;
overflow: hidden;

align-items: center;
display: flex;

bottom: 6rem;
img {
width: 400%;
margin-left: -150%;
}
}
}
`

export const About = styled.div`
height: 200vh;
width: 100%;

background-color: #FFFFFF;
padding: 10rem 20rem 5rem;

flex-direction: column;
text-align: center;
display: flex;
gap: 15rem;

p {
 font-size: 1.6rem;
 line-height: 2rem;
 font-weight: 300;
 color: #414141;
}

.cards {
 width: 100%;

 justify-content: space-between;
 align-items: center;
 display: flex;
}

.card {
 height: 30rem;
 width: 31rem;

 justify-content: space-between;
 flex-direction: column;
 align-items: center;
 display: flex;

 border: 2px solid #bebebe7e;
 border-bottom: 2px solid #7300cc;
 border-radius: .6rem;
 padding: 2rem;

 .image {
  height: 12rem;
  width: 12rem;

  justify-content: center;
  align-items: center;
  display: flex;

  border: 2px solid #bebebe7e;
  background-color: #FFFFFF;
  border-radius: 50%;
  margin-top: -10rem;
  overflow: hidden;
  padding: 1rem;

  img {
   width: 100%;

  }

  .especial {
    width: 125%;
  }
 }

 p {
  font-size: 1.4rem;
  margin-top: -2rem;
 }

 button {
  height: 4rem;
  width: 18rem;

  background-color: #FFFFFF;
  border: 2px solid #7300cc;
  border-radius: 5rem;

  &:hover {
   background-color: #7300cc;
   cursor: pointer;
   color: #FFFFFF;
  }
 }

 &:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  background-color: #8f00fc;
  border-color: #7300cc;

  p {
    color: #FFFFFF;
  }
 }
}

.midia {
 flex-direction: column;
 align-items: center;
 display: flex;
 gap: 3rem;

 span {
  font-weight: 300;
  font-size: 2.4rem;
  color: #7300cc;
 }

 .midias {
  width: 100%;

  justify-content: space-between;
  display: flex;

  img {
   filter: grayscale(100%);
   transform: scale(85%);

   &:hover {
    filter: grayscale(0%);
    cursor: pointer;
   }
  }
 }
}

@media (max-width: 450px){
height: fit-content;
padding: 4rem 2rem;

.cards {
 flex-direction: column;
 gap: 15rem;
}

.midia {
 span {
  font-size: 2rem;
 }
 
 .midias {
 grid-template-columns: repeat(2, 1fr);
 display: grid;
 gap: 1rem;

 width: fit-content;
 img {
  transform: scale(50%);
 }
 }
}
}
`

export const About2 = styled.div`
height: 170vh;
width: 100%;

background-image: url(${Back2});
background-size: cover;
position: relative;

justify-content: space-between;
align-items: center;
display: flex;

padding: 0 5rem;

.cloud {
position: absolute;
top: 0;

width: 100%;
}

.left {
flex-direction: column;
display: flex;
gap: 1rem;

h2 {
 font-size: 3.5rem;
 font-weight: 300;
 color: #FFFFFF;
 margin-bottom: 1rem;
}

span {
 font-weight: 600;
 font-size: 2rem;
 color: #7300cc;
}

p {
 font-size: 1.5rem;
 color: #5a5a5a;
}
}

.right {
img {
 transform: scale(70%);
}
}

@media (max-width: 450px){
  height: fit-content;
  padding: 10rem 2rem;

  flex-direction: column-reverse;
  justify-content: start;
  gap: 5rem;

 .right {
  height: 30rem;
  width: 30rem;


  justify-content: center;
  align-items: center;
  display: flex;

  img {
   width: 200%;
  }
 }

 .left {
  text-align: center;
 }
}
`

export const Rest = styled.div`
height: fit-content;
width: 100%;

.slider {
 height: 26rem;
 width: 100%;

 display: flex;
}

.swiper-wrapper {
 width: 100%;
 border: none;
 margin: none;
}

.SlideImg {
 height: 100%;
 width: 100%;

 background-size: cover;

 filter: grayscale(55%) saturate(78%) contrast(112%);
-webkit-filter: grayscale(55%) saturate(78%) contrast(112%);
-moz-filter: grayscale(55%) saturate(78%) contrast(112%);

&:hover {
 filter: none;
}
}

.contrate {
 height: 60vh;
 width: 100%;
 
 justify-content: center;
 flex-direction: column;
 align-items: center;
 display: flex;
 gap: 2rem;

 span {
  font-size: 2.4rem;
  font-weight: 300;
  color: #7300cc;
 }

 button {
  height: 6rem;
  width: 30rem;

  background-color: #7300cc;
  border: 1px solid #FFFFFF;
  border-radius: 6rem;

  font-size: 1.6rem;
  font-weight: 600;
  color: #FFFFFF;

  &:hover {
   background-color: #FFFFFF;
   transform: scale(105%);
   border-color: #7300cc;
   cursor: pointer;
   color: #7300cc;
  }
 }
}

.three {
  align-items: center;
  display: flex;
  gap: 3rem;

  margin-top: 10rem;
  padding: 0 10rem;

  div {
    text-align: center;

    span {
      font-size: 1.7rem;
      font-weight: 600;
      color: #7300cc;

      margin-bottom: 1rem;
    }
    p {
      font-size: 1.5rem;
      color: #5a5a5a;
    }
  }
}

@media (max-width: 450px){

.slider {
 height: 15rem;
}

.contrate {
  span {
   text-align: center;
   font-size: 2.5rem;
  }
}

.three {
  flex-direction: column;
  gap: 2rem;

  margin-top: 5rem;
  padding: 0 2rem;
}
}
`