import styled from "styled-components";

import backGeral from "./assets/backGeral.svg";
import BackSite from "./assets/backSite.svg";

export const Container = styled.div`
background-color: #FFFFFF;
`

export const Main = styled.main`
height: 110vh;
width: 100%;

background-image: url(${backGeral});
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

padding: 0 10rem;
 
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
padding: 0 10rem;
 position: absolute;
 bottom: 0;

 justify-content: space-between;
 align-items: flex-start;
 display: flex;
 gap: 1rem;

 .card {
  height: 12rem;
  width: 17rem;

  margin-top: -6rem;
  background-color: #FFFFFF;
  border-radius: .5rem;
  padding: 2rem;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;

  font-size: 1.3rem;
  font-weight: 700;
  color: #7300cc;

  svg {
    height: 4rem;
    width: 4rem;
  }

  &:hover {
   cursor: pointer;
   transform: scale(105%);
  }
 }
}

.especial {
 border-radius: 10rem 0 9rem 0;
}

@media (max-width: 450px) {
height: fit-content;
padding-top: 5rem;

flex-direction: column;
display: flex;
gap: 3rem;

.GeralHeader {
  height: 5rem;

  justify-content: center;
  align-items: center;
  padding: 2rem;

 .ecosystem {
  display: none;
 }
}

 .Center {
  padding: 0rem 2rem;

  justify-content: center;
  flex-direction: column;
  align-items: center;

  .left {
   align-items: center;
  }
  .right {
    display: none;
  }
 }

 .Bottom {
  height: fit-content;

  position: relative;
  grid-template-columns: repeat(2, 1fr);
  display: grid;
  gap: 1rem;

  padding: 2rem 2rem;

  .card {
  height: 10rem;
  width: 100%;

  font-size: 1.2rem;
  margin-top: 0rem;
  padding: 1.5rem;
 }
 }
}
`

export const Main2 = styled.div`
height: 70vh;
width: 100%;

justify-content: space-between;
align-items: center;
display: flex;

padding: 0 10rem;

.left {
 width: 45%;

 flex-direction: column;
 display: flex;
 gap: 1rem;

 span {
  line-height: 3rem;
  font-weight: 400;
  font-size: 2rem;
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

@media (max-width: 450px) {
 flex-direction: column;
 gap: 3rem;

 height: fit-content;

 padding: 5rem 2rem 3rem;

 .left, .right {
  width: 100%;
  align-items: center;

  span {
  line-height: 1.5rem;
  font-size: 1.5rem;
  }

 }
 img, .especial, .Especial {
  display: none;
 }
}
`

export const Main3 = styled.div`
height: 70vh;
width: 100%;

justify-content: space-between;
align-items: center;
display: flex;


padding: 0 10rem;

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

@media (max-width: 450px) {
 flex-direction: column;
 gap: 3rem;

 height: fit-content;

 padding: 5rem 2rem 3rem;

 .left, .right {
  width: 100%;
  align-items: center;

  span {
  line-height: 1.5rem;
  font-size: 1.5rem;
  }

 }
 img, .especial, .Especial {
  display: none;
 }
}
`

export const Main4 = styled.div`
min-height: 100vh;
width: 100%;

justify-content: space-between;
align-items: center;
display: flex;

padding: 0 10rem;
position: relative;

.back {
  height: 100%;
  width: 100%;

  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
}

background-image: url(${BackSite});
background-size: cover;

.left {
 z-index: 2;
 img {
  transform: scale(85%);
 }
}

.right {
 flex-direction: column;
 display: flex;
 gap: 1rem;

 z-index: 2;

 h2 {
  font-weight: 400;
  font-size: 3rem;
  color: #FFFFFF;

  margin-bottom: 2rem;
 }

 h4 {
  font-size: 1.8rem;
  color: #FFFFFF;

  margin-top: 1rem;
 }

 p {
  font-size: 1.4rem;
  color: #FFFFFF;
 }

 button {
  width: 30rem;
  height: 6rem;

  margin-top: 2rem;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  background-color: #FFFFFF;
  border: 1px solid #7300cc;  

  border-radius: 6rem;

  font-size: 1.6rem;
  font-weight: 600;
  color: #7300cc; 

  &:hover {
   background-color: #7300cc;
   border: 1px solid #FFFFFF;
   transform: scale(105%);
   cursor: pointer;
   color: #FFFFFF;
  }
 }
}

@media (max-width: 450px) {
  justify-content: flex-start;
  flex-direction: column;

  min-height: fit-content;
  height: fit-content;
  padding: 2rem;
  
  .left {
   display: none;
  }

  .right {
    align-items: center;
   h2 {
    font-size: 2rem;
   }

   h4 {
    font-size: 1.7rem;
   }

   p {
    font-size: 1.2rem;
   }
  }
}
` 

export const Main5 = styled.div`
min-height: 100vh;
width: 100%;

justify-content: space-between;
align-items: center;
display: flex;
gap: 5rem;

padding: 0 5rem;
position: relative;

.back {
  height: 100%;
  width: 100%;

  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
}

background-image: url(${BackSite});
background-size: cover;

.left {
 z-index: 2;
 img {
  transform: scale(85%);
 }
}

.right {
 flex-direction: column;
 display: flex;
 gap: 1rem;

 z-index: 2;

 h2 {
  font-weight: 400;
  font-size: 3rem;
  color: #FFFFFF;

  margin-bottom: 2rem;
 }

 h4 {
  font-size: 1.8rem;
  color: #FFFFFF;

  margin-top: 1rem;
 }

 p {
  font-size: 1.4rem;
  color: #FFFFFF;
 }

 button {
  width: 30rem;
  height: 6rem;

  margin-top: 2rem;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  background-color: #FFFFFF;
  border: 1px solid #7300cc;  

  border-radius: 6rem;

  font-size: 1.6rem;
  font-weight: 600;
  color: #7300cc; 

  &:hover {
   background-color: #7300cc;
   border: 1px solid #FFFFFF;
   transform: scale(105%);
   cursor: pointer;
   color: #FFFFFF;
  }
 }
}

@media (max-width: 450px) {
  justify-content: flex-start;
  flex-direction: column;

  min-height: fit-content;
  height: fit-content;
  padding: 2rem;
  
  .left {
   display: none;
  }

  .right {
    align-items: center;
   h2 {
    font-size: 2rem;
   }

   h4 {
    font-size: 1.7rem;
   }

   p {
    font-size: 1.2rem;
   }
  }
}
` 

