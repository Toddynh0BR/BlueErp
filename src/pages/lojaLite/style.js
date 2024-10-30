import styled from "styled-components";

import backLite from "./assets/backLite.svg";
import backSite from "./assets/backSite.svg";
import backLite2 from "./assets/backLite2.svg";

export const Container = styled.div`

`

export const Main = styled.main`
height: 100vh;
width: 100%;

background-image: url(${backLite});
position: relative;
padding-top: 5rem;

.GeralHeader {
 height: 8rem;
 width: 100%;

 justify-content: space-between;
 display: flex;

 background-color: rgba(255, 255, 255, 0.8);
 padding: 4rem 3rem 0rem;

 .ecosystem {
   width: fit-content;
   height: 2.7rem;
   
   background-color: #FFFFFF;
   border-radius: 2.5rem;

   
   justify-content: space-between;
   align-items: center;
   display: flex;

   .circle {
    height: 4.2rem;
    width: 4.2rem;

    cursor: pointer;

    border-radius: 50%;

    justify-content: center;
    align-items: center;
    display: flex;

    svg {
     font-size: 2rem;
     color: #7300cc;
    }


   }
   .cloud {
    background-color: #7300cc;
    
    svg {
      color: #FFFFFF;
    }
   }

 }

 .others {
  align-items: flex-start;
  display: flex;
  gap: 3rem;

  span {
   font-size: 1.4rem;
   font-weight: 700;
   color: #7300cc;

   position: relative;

   &::after {
    content: ' ';
    position: absolute;
    height: .1rem;
    width: 0%;
    bottom: 0;
    left: 0;

    transition: .3s ease-in-out;
    background-color: #7300cc;
   }

   &:hover {
    cursor: pointer;
    &::after{
      width: 100%;
    }
   }
  }
 }
}

.Center {
 width: 100%;

 padding: 0rem 20rem;
 
 justify-content: space-between;
 align-items: center;
 display: flex;

 .left {
  flex-direction: column;
  display: flex;
  gap: 3rem;

  span {
   font-weight: 700;
   font-size: 2rem;
   color: #FFFFFF;
  }

  h2 {
   font-size: 3rem;
   font-weight: 400;
   color: #FFFFFF;
  }

  button {
  width: 30rem;
  height: 6rem;

  margin-top: 1rem;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  background-color: #7300cc;
  border: 1px solid #FFFFFF;
  border-radius: 6rem;

  font-size: 1.6rem;
  font-weight: 600;
  color: #FFFFFF;

  &:hover {
   background-color: #FFFFFF;
   border: 1px solid #7300cc;  
   transform: scale(105%);
   cursor: pointer;
   color: #7300cc; 
  }
 }
 }

 .right {
  img {
   transform: scale(80%);
  }
 }
}

.Bottom {
 height: 6.5rem;
 width: 100%;
 
 background-color: #7400cc8c;
 padding: 0rem 20rem;
 position: absolute;
 bottom: 0;

 justify-content: space-between;
 align-items: flex-start;
 display: flex;

 .card {
  height: 8rem;
  width: 17rem;

  margin-top: -3rem;
  background-color: #FFFFFF;
  border-radius: .5rem;
  padding: 2rem;

  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;

  font-size: 1.3rem;
  font-weight: 700;
  color: #7300cc;

  &:hover {
   cursor: pointer;
   transform: scale(105%);
  }
 }
}
`

export const Main2 = styled.div`
height: 80vh;
width: 100%;

justify-content: space-between;
align-items: center;
position: relative;
display: flex;

padding: 0rem 20rem;

.left {
 width: 45%;

 flex-direction: column;
 display: flex;
 gap: 1rem;

 span {
  line-height: 3rem;
  font-weight: 400;
  font-size: 3rem;
  color: #7300cc;

  margin-bottom: 1rem;
 }

 p {
  font-size: 1.3rem;
  color: #6e6e6e;

  strong {
   filter: brightness(50%);
  }
 }

 button {
  width: 30rem;
  height: 6rem;

  margin-top: 2rem;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  background-color: #7300cc;
  border: 1px solid #FFFFFF;
  border-radius: 6rem;

  font-size: 1.6rem;
  font-weight: 600;
  color: #FFFFFF;

  &:hover {
   background-color: #FFFFFF;
   border: 1px solid #7300cc;  
   transform: scale(105%);
   cursor: pointer;
   color: #7300cc; 
  }
 }
}

.right {
 img {
  transform: scale(85%);
 }
}

.border {
 position: absolute;
 left: 0;
 bottom: 0;

 height: .3rem;
 width: 100%;

 background: rgb(100,72,254);
 background: linear-gradient(55deg, rgba(100,72,254,1) 0%, rgba(96,5,148,1) 86%);
}
`

export const Main3 = styled.div`
height: 70vh;
width: 100%;

justify-content: space-between;
align-items: center;
display: flex;

padding: 0rem 20rem;

.left {
 .title {
  font-size: 1.6rem;
  font-weight: 700;
  color: #7300cc;
 }

 img {

 }

 width: 45%;

 flex-direction: column;
 display: flex;
 gap: 1rem;

 span {
  line-height: 3rem;
  font-weight: 400;
  font-size: 2.5rem;
  color: #7300cc;

  margin-bottom: 1rem;
 }

 p {
  font-size: 1.3rem;
  color: #6e6e6e;

  strong {
   filter: brightness(50%);
  }
 }

 button {
  width: 30rem;
  height: 6rem;

  margin-top: 2rem;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  background-color: #7300cc;
  border: 1px solid #FFFFFF;
  border-radius: 6rem;

  font-size: 1.6rem;
  font-weight: 600;
  color: #FFFFFF;

  &:hover {
   background-color: #FFFFFF;
   border: 1px solid #7300cc;  
   transform: scale(105%);
   cursor: pointer;
   color: #7300cc; 
  }
 }
}

.right {
 .title {
  font-size: 1.6rem;
  font-weight: 700;
  color: #7300cc;
 }

 img {

 }

 width: 45%;

flex-direction: column;
display: flex;
gap: 1rem;

span {
 font-weight: 400;
 font-size: 1.8rem;
 color: #7300cc;

 margin-top: 2rem;
}

p {
 font-size: 1.3rem;
 color: #6e6e6e;

 strong {
  filter: brightness(50%);
 }
}

button {
 width: 30rem;
 height: 6rem;

 margin-top: 2rem;

 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
 background-color: #7300cc;
 border: 1px solid #FFFFFF;
 border-radius: 6rem;

 font-size: 1.6rem;
 font-weight: 600;
 color: #FFFFFF;

 &:hover {
  background-color: #FFFFFF;
  border: 1px solid #7300cc;  
  transform: scale(105%);
  cursor: pointer;
  color: #7300cc; 
 }
}
}
`

export const Main4 = styled.div`
height: 80vh;
width: 100%;

justify-content: space-between;
align-items: center;
display: flex;

background-image:  url(${backLite2});
padding: 0rem 20rem;


.left {
 flex-direction: column;
 display: flex;
 gap: 3rem;

span {
 font-size: 2.5rem;
 font-weight: 500;
 color: #7300cc;
}

p {
 font-size: 1.8rem;
 color: #5a5a5a;
}
}

.right {
 flex-direction: column;
 display: flex;
 gap: 1rem;

 img {
  transform: scale(85%);
 }
}
` 

export const Main5 = styled.div`
height: 70vh;
width: 100%;

padding: 0rem 20rem;

justify-content: center;
flex-direction: column;
align-items: center;
display: flex;
gap: 3rem;

span {
 font-size: 1.7rem;
 font-weight: 600;
 color: #7300cc;
}

.cards {
 width: 100%;

 align-items: center;
 display: flex;

 .card {
  flex: 1;
  height: 20rem;

  padding-top: 2rem;
  padding: 2rem 1rem 4rem;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  display: flex;
  gap: 2rem;

  img {
    transform: scale(90%);
  }
  
  .especial {
   margin-top: 2rem;
   transform: scale(140%);
  }

  p {
    text-align: center;
    font-size: 1.2rem;
    color: #7300cc;
  }

 }

 .card:nth-child(odd) {
    background-color:#7400cc34 ;
}

.card:nth-child(even) {
    background-color: transparent;
}
}

button {
  width: 30rem;
  height: 6rem;

  margin-top: 1rem;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  background-color: #7300cc;
  border: 1px solid #FFFFFF;
  border-radius: 6rem;

  font-size: 1.6rem;
  font-weight: 600;
  color: #FFFFFF;

  &:hover {
   background-color: #FFFFFF;
   border: 1px solid #7300cc;  
   transform: scale(105%);
   cursor: pointer;
   color: #7300cc; 
  }
}
`

export const Main6 = styled.div`
height: 80vh;
width: 100%;

background-image: url(${backSite});
padding: 0 20rem;

justify-content: space-between;
align-items: center;
display: flex;

.left {
  img {
   transform: scale(85%);
  }
}

.right {
 flex-direction: column;
 display: flex;
 gap: 3rem;

 padding: 0 0 0 15rem;

 h2 {
  font-size: 2.7rem;
  font-weight: 400;
  color: #FFFFFF;
 }
 span {
  font-size: 1.9rem;
  font-weight: 400;
  color: #FFFFFF;
 }
}
`