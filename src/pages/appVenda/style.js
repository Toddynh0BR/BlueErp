import styled from "styled-components";

import backGeral from "./assets/backGeral.svg";

export const Container = styled.div`

`

export const Main = styled.main`
height: 100vh;
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
  transform: scale(85%);
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
  transform: scale(85%);
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
`

