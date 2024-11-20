import styled from "styled-components";

import Back1 from "../assets/FundoEspecial.jpg"
import Back2 from "../assets/FundoEspecial2.jpg";

export const Container = styled.div`

`

export const Main = styled.main`
height: 100vh;
width: 100%;

background: rgb(0,0,198);
background: linear-gradient(180deg, rgba(0,0,198,1) 0%, rgba(115,0,204,1) 100%);

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
 font-size: 2.6rem;
 font-weight: 400;
 color: #FFFFFF;

 margin-bottom: 1rem;
 margin: 0 40rem 1rem;
}

.options {
width: 100%;

justify-content: center;
align-items: center;
display: flex;
gap: 1rem;

.option {
 height: 5.6rem;
 width: 25rem;

 background-color: #420075;
 border-radius: .5rem;

 justify-content: center;
 align-items: center;
 display: flex;
 gap: 1rem;

 font-size: 1.4rem;
 font-weight: 600;
 color: #FFFFFF;

 svg {
  font-size: 2rem;
 }

 img {
  width: 12rem;
 }

 .lite {
  width: 10rem;
 }

 &:hover {
  cursor: pointer;
  filter: brightness(90%);
 } 

 &[data-selected="true"]{
  background-color: #FFFFFF;
  color: #7300cc;

  p {
    color: #7300cc;  
  }
 }
}
}

.selected {
 height: 70rem;
 width: 85%;

 margin: -3rem 0rem -60rem 0rem;
 border-radius: 1.5rem;
 overflow: hidden;
}

.box {
 height: 100%;
 width: 100%;

 position: relative;
 overflow: hidden;

 .text {
  height: 100%;
  width: 55%;
  
  background-color: #2e14a3;
  position: absolute;
  padding: 4rem;

  align-items: flex-start;
  flex-direction: column;
  text-align: left;
  display: flex;
  gap: 2rem;

 img {
  width: 20rem;
 }

  p {
   font-size: 1.5rem;
   font-weight: 300;

   display: inline;
    strong {
      display: inline;
      font-size: 1.4rem;
      text-decoration: underline;
      cursor: pointer;
    }
  }

  button {
   height: 5rem;
   width: 25rem;

   position: absolute;
   bottom: 4rem;
   background-color: #7300cc;
   border: 1px solid #FFFFFF;
   border-radius: 5rem;
   margin-top: 2rem;

   font-size: 1.5rem;
   font-weight: 600;
   color: #ffffff;

   &:hover {
    background-color: #ffffff;
    border-color: #7300cc;
    color: #7300cc;

    cursor: pointer;
   }
  }

  .download {
   width: 100%;

   position: absolute;
   bottom: 4rem;

   align-items: center;
   display: flex;
   gap: 2rem;

   img {
    cursor: pointer;
   }
  }

  &::after {
  content: ""; 
  position: absolute;
  top: 0;
  right: -20rem;
  bottom: 0;
  width: 20rem;
  transform: translateY(180deg);
  
 
  background: linear-gradient(to right, #2e14a3, transparent);
  
 
 }
 }

 .image {
  height: 100%;
  flex: 1;

  margin-right: -50rem;
  overflow: hidden;

  img {
    height: 100%;

  }
 }
}

.mobi {

  .text {
    background-color: rgb(0%, 0%, 77.598572%);
    &::after {
  background: linear-gradient(to right,  rgb(0%, 0%, 77.598572%), transparent);
  
 
 }
  }

}

.lite {
  .text {
    background-color: #7300cc;

    &::after {
  background: linear-gradient(to right, #7300cc, transparent);
  
 
 }
  }

}

@media (max-width: 450px){
  height: 100vh;
  gap: 5rem;

  h1 {
   font-size: 2.4rem;
   margin: 0;
  }

  .options {
    flex-direction: column;
  }
  .title {
   margin-top: -15rem;
  }

  .selected {
    height: 130vh;
    width: 90%;

    margin: -3rem 0rem -100rem 0rem;
  }
  .box {

    .image {
     display: none;
    }

    .text {
      width: 100%;
      &::after {
       display: none;
      }

      .download {
       flex-direction: column;
       justify-content: center;
       align-items: center;
  }
    }
  }
}
`

export const About = styled.div`
min-height: 200vh;
width: 100%;

background-color: #FFFFFF;
padding: 60rem 10rem 5rem;

flex-direction: column;
text-align: center;
display: flex;
gap: 15rem;

.first {
 width: 100%;

 justify-content: space-between;
 display: flex;

 p {
  width: 70%;
 
  font-size: 1.6rem;
  line-height: 2rem;
  font-weight: 300;
  color: #414141;

  text-align: left;
  display: flex;
 }

 ul {
  flex-direction: column;
  display: flex;
  gap: 2rem;

  li {
    align-items: center;
    display: flex;
    gap: .5rem;

    
    list-style: none;

    p {
      font-size: 1.5rem;
      font-weight: 600;
      color: #7300cc;

      white-space: nowrap;
    }
    svg {
     font-size: 1.8rem;
     color: rgb(9, 194, 9);
    }
  }
 }
}

.topic {
  height: 60vh;
  width: 100%;

  justify-content: space-between;
  align-items: center;
  display: flex;
  gap: 4rem;
  
  border-bottom: 1px solid #bebebe7e;
  overflow: hidden;
  padding: 2rem 0 8rem;

  .left, .right {
    flex-direction: column;
    text-align: left;
    display: flex;
    gap: 1rem;
  }
  img {
    width: 50rem;
  }

  strong {
   font-size: 1.4rem;
   color: #7300cc;
  }
  span {
   font-weight: 300;
   font-size: 2rem;
   color: #8f00fc;

   margin-bottom: 1rem;
  }
  p {
   font-size: 1.4rem;
   line-height: 1.5rem;
   color: #888484c2;
  }
  button {
   height: 4.5rem;
   width: 24rem;

   background-color: #7300cc;
   border: 1px solid #FFFFFF;
   border-radius: 5rem;
   margin-top: 1rem;

   font-size: 1.3rem;
   font-weight: 600;
   color: #ffffff;

   &:hover {
    background-color: #ffffff;
    border-color: #7300cc;
    color: #7300cc;

    cursor: pointer;
   }
  }
}


@media (max-width: 450px){
height: fit-content;
padding: 80rem 2rem 5rem;
gap: 5rem;


.first {
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 3rem;
  
  p {
   width: 100%;
  }
}

.topic {
 flex-direction: column-reverse;
 height: fit-content;

 .left, .right {
  align-items: center;
  text-align: center;
 }

 img {
  width: 34rem;
 }
}

.reverse {
 flex-direction: column;
}
}
`

export const About2 = styled.div`
height: fit-content;
width: 100%;

background-color: #ffffff;
padding: 5rem 20rem 10rem;

flex-direction: column;
align-items: center;
display: flex;

h3 {
 font-weight: 600;
 font-size: 2rem;

 color: #7300cc;
}
h2 {
 font-size: 2.5rem;
 font-weight: 300;
 color: #8f00fc;

 margin-bottom: 4rem;
}

.list {
 width: fit-content;

 grid-template-columns: repeat(3, 1fr);
 display: grid;
 gap: 3rem;

 .card {
  height: 23rem;
  width: 27rem;

  border: 2px solid #bebebe7e;
  border-radius: .5rem;

  justify-content: center;
  align-items: center;
  display: flex;
  
  &:hover {
   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
   border-color: #7300cc;
   cursor: pointer;
  }
 }
}

@media (max-width: 450px){
 padding: 3rem 2rem 5rem;

 .list {
  grid-template-columns: repeat(1, 1fr);
 }
}
`

export const About3 = styled.div`
height: 150vh;
width: 100%;

background-image: url(${Back2});
position: relative;

align-items: center;
display: flex;
gap: 0rem;

.Cloud {
width: 100%;
  
position: absolute;
top: 0;
}

.left {
 height: 60%;
 flex: 1;
 padding: 0 0 0 4rem;

 justify-content: center;
 flex-direction: column;
 display: flex;
 gap: 3rem;

 strong {
  font-size: 2rem;
  color: #7300cc;
 }
 h2 {
  font-size: 3rem;
  font-weight: 400;
  color: #8f00fc;
 }

 .motivos {
  height: 100%;
  width: 100%;

  display: flex;
  gap: 2rem;

  .topicos {
   height: 100%;
   width: 40%;

   align-items: flex-start;
   flex-direction: column;
   display: flex;

   .topic {
    width: 100%;
    height: 4.5rem;

    border-radius: 4.5rem;
    padding: 1rem 2rem;

    font-size: 1.4rem;
    font-weight: 600;
    color: #ffffff;

    justify-content: space-between;
    align-items: center;
    display: flex;

    svg {
     opacity: 0;
    }

    &:hover {
      background-color: #ffffffa2;
      cursor: pointer;
    }
   }

   .selected {
    background-color: #FFFFFF;
    color: #7300cc;

    svg {
     opacity: 1;
    }

    &:hover {
      background-color: #FFFFFF;
    }
   }
  }

  ul {
   height: 45rem;
   flex: 1;
   
   flex-direction: column;
   display: flex;
   gap: .5rem;

   padding: 0 1rem 0 0;
   overflow: auto;

   &::-webkit-scrollbar {
    width: .7rem;           /* Largura da barra de rolagem */
   }

   &::-webkit-scrollbar-track {
    background: transparent;  /* Cor do fundo da barra */
    border-radius: .5rem;
   }

   &::-webkit-scrollbar-thumb {
    background-color:  #7300cc;
    border-radius: .5rem;   
   }


   span {
    font-size: 2.3rem;
    font-weight: 600;
    color: #7300cc;

    margin-bottom: 1rem;
   }

   li {
    width: 100%;

    list-style: none;

    align-items: center;
    display: flex;
    gap: 1rem;

    font-size: 1.4rem;
    font-weight: 300;
    color: #8f00fc;

    svg {
      width: 1.7rem;                
      height: 1.7rem;              
      flex-shrink: 0;  
      color: rgb(9, 194, 9);
    } 
   }
  }
 }
}

.right {
 height: 100%;
 width: 40%;

 position: relative;

 img {
  width: 53rem;
  position: absolute;
  bottom: 0;
 }
}

@media (max-width: 450px){
height: fit-content;
padding: 5rem 2rem ;

.right {
  display: none;
}

.left {
  align-items: center;
  padding: 0;

  .motivos {
    flex-direction: column;
    align-items: center;

    .topicos {
     width: 100%;
     align-items: center;
    }

    ul {
      height: 30rem;
      flex: none;
      overflow: auto;
    }
  }
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
}
`