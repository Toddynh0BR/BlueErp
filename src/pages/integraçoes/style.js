import styled from "styled-components";

import svg2 from "../../assets/back2.svg";
import backSite from "../../assets/backSite.svg";
import backLite from "../../assets/backLite.svg";
import backMobi from "../../assets/backMobi.svg";

export const Container = styled.div`

`

export const Main = styled.main`
height: 100vh;
width: 100%;

background-image: url(${svg2});

justify-content: space-between;
align-items: center;
display: flex;
padding: 0rem 10rem;

.left {
 flex-direction: column;
 display: flex;
 gap: 2rem;
 width: 50%;



 h2 {
  font-size: 3.4rem;
  font-weight: 400;
  color: #7300cc;
 }

 h4 {
  font-size: 1.6rem;
  font-weight: 400;
  color: #5a5a5a;

  strong {
    color: #7300cc;

    position: relative;

    &::after {
      content: ' ';
      position: absolute;
      bottom: 0;
      left: 0;

      transition: .3s ease-in-out;
      background-color: #7300cc;
      height: .1rem;
      width: 0%;
    }

    &:hover {
      cursor: pointer;

      &::after {
        width: 100%;
      }
    }
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

 span {
  font-size: 1.3rem;
  font-weight: 400;
  color: #7300cc;

  cursor: pointer;
 }
}

.right {
 justify-content: center;
 align-items: center;
 display: flex;
 gap: 2rem;
 
 img {
  transform: scale(120%);
 }
}

@media (max-width: 450px) {
 padding: 2rem;

 .right {
  display: none;
 }

 .left {
  width: 100%;

  align-items: center;

 button {
  width: 100%;
 }

 }
}
`

export const Inter = styled.div`
height: 90rem;
width: 100%;

justify-content: center;
flex-direction: column;
align-items: center;
display: flex;
gap: 4rem;

padding: 0rem 10rem;

background-image: url(${backSite});

h2 {
 font-weight: 400;
 font-size: 3rem;
 color: #FFFFFF;
}

.inter {
 width: 100%;

 grid-template-columns: repeat(4, 1fr);
 display: grid;
 gap: 1rem;
}

.card {
 height: 5.6rem;
 width: 100%;

 border: 1px solid #bebebec2;
 background-color: #FFFFFF;
 border-radius: .5rem;

 justify-content: center;
 align-items: center;
 display: flex;

 font-size: 1.6rem;
 font-weight: 700;
 color: #7300cc;

 &:hover {
  transform: scale(105%);
  cursor: pointer;
 }
}

button {
  width: 30rem;
  height: 6rem;

  margin-top: 1rem;

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

@media (max-width: 450px) {
 height: fit-content;
 padding: 2rem;

 .inter {
  grid-template-columns: repeat(2, 1fr);
 }
}
`

export const All = styled.div`
min-height: 10vh;
width: 100%;

padding: 10rem 5rem;

flex-direction: column;
display: flex;
gap: 10rem;

.Card {
 height: 40rem;
 width: 90%;

 border-radius: 2rem 0 2rem 0;
 background-color: #c7c7c77e;
 padding: 5rem 10rem 5rem 0rem;

 align-self: flex-end;
 justify-content: space-between;
 align-items: center;
 display: flex;
 gap: 10rem;

 .image {
  height: 30rem;
  width: 30rem;

  justify-content: center;
  align-items: center;
  display: flex;

  border-radius: 2rem 0 2rem 0;
  background-color: #FFFFFF;
  border: 2px solid #7300cc;
  margin-left: -10rem;
 }

 .texts {
  flex: 1;

  align-items: flex-start;
  flex-direction: column;
  display: flex;
  gap: 1rem;

  h2 {
    font-size: 3rem;
    color: #7300cc;
  }

  p {
   font-size: 1.5rem;
   color: #686767;
  }

  button {
    width: 35rem;
    height: 5rem;

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
}

.Card2 {
 height: 40rem;
 width: 90%;

 border-radius: 2rem 0 2rem 0;
 background-color: #c7c7c77e;
 padding: 5rem 0rem 5rem 10rem;

 align-self: flex-start;
 justify-content: space-between;
 align-items: center;
 display: flex;
 gap: 10rem;

 .image {
  height: 30rem;
  width: 30rem;

  justify-content: center;
  align-items: center;
  display: flex;

  border-radius: 2rem 0 2rem 0;
  background-color: #FFFFFF;
  border: 2px solid #7300cc;
  margin-right: -10rem;
 }

 .texts {
  flex: 1;

  align-items: flex-start;
  flex-direction: column;
  display: flex;
  gap: 1rem;

  h2 {
    font-size: 3rem;
    color: #7300cc;
  }

  p {
   font-size: 1.5rem;
   color: #686767;
  }

  button {
  width: 35rem;
  height: 5rem;

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
}

.especial1 {
 img {
  transform: scale(50%);
 }
}

.especial2 {
 img {
  transform: scale(40%);
 }
}

.especial3 {
 img {
  transform: scale(15%);
 }
}

@media (max-width: 450px) {
  padding: 4rem 2rem;
  gap: 5rem;

  .Card, .Card2 {
   height: fit-content;
   width: 100%;

   flex-direction: column;
   align-items: center;
   gap: 2rem;

   padding: 2rem 2rem;

   .image {
    margin: 0;
   }

   .texts {
    width: 100%;

    button {
      width: 100%;
    }
   }
  }

  .Card2 {
   flex-direction: column-reverse;
  }
}
`