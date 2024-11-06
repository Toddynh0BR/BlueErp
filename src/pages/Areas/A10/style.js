import styled from "styled-components";

import backGeral from "../../../assets/backGeral.svg"

export const Container = styled.div`

`

export const Main = styled.main`
height: 100vh;
width: 100%;

background-image: url(${backGeral});
position: relative;
padding-top: 10rem;

.Center {
 width: 100%;

 padding: 0rem 10rem;
 
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
   font-size: 2.5rem;
   font-weight: 400;
   color: #FFFFFF;
  }

  li {
   font-size: 1.4rem;
   font-weight: 400;
   color: #FFFFFF;

   padding: .5rem 0;
   align-items: center;
   display: flex;
   gap: 1rem;

   svg {
    color: rgb(9, 194, 9);
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
 }

 .right {
  img {
   transform: scale(90%);
  }
 }
}

.Bottom {
 height: 6.5rem;
 width: 100%;
 
 background-color: #7400cc8c;
 padding: 0rem 10rem;
 position: absolute;
 bottom: 0;

 justify-content: space-between;
 align-items: flex-start;
 display: flex;

 .card {
  height: 10rem;
  width: 18rem;

  margin-top: -5rem;
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

@media (max-width: 450px) {
height: fit-content;
padding-top: 10rem;
padding-bottom: 4rem;

flex-direction: column;
display: flex;
gap: 3rem;

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
min-height: 130vh;
width: 100%;

grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);
display: grid;

padding: 0 4rem;

.box {
 height: 100%;
 width: 100%;

 justify-content: space-between;
 align-items: center;
 display: flex;

 padding: 2rem;

 .left {
  justify-content: center;
  flex-direction: column;
  display: flex;
  gap: 2rem;

  height: 100%;

  strong {
  font-size: 2rem;
  color: #7300cc;
 }

 img {
  transform: scale(95%);
 }
 }

 ul {
 width: 50%;
 justify-content: center;
 flex-direction: column;
 display: flex;
 gap: 2rem;


  li {
    width: 100%;

    list-style: none;

    align-items: center;
    display: flex;
    gap: 1rem;

    font-size: 1.4rem;
    font-weight: 700;
    color: #686868;
 
   &:hover {
    cursor: pointer;
    color: #7300cc;
  }
  }
 }
}

.b1 {
 border-bottom: 1px solid #bebebe7e;
 border-right: 1px solid #bebebe7e;
}
.b4 {
 border-top: 1px solid #bebebe7e;
 border-left: 1px solid #bebebe7e;
}

@media (max-width: 450px) {
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(4, 1fr);

  height: fit-content;
  padding: 0 2rem;

  .box {
    border: none;

    flex-direction: column;
    gap: 2rem;
    img {
      display: none;
    }
  }
}
`

export const Ecossistem = styled.div`
height: 20vh;
width: 100%;

justify-content: space-between;
align-items: center;
display: flex;

padding: 0rem 10rem;
background: rgb(0,0,198);
background: linear-gradient(120deg, rgba(0,0,198,1) 0%, rgba(115,0,204,1) 100%);

span {
 font-size: 1.7rem;
 font-weight: 400;
 color: #FFFFFF;
}

strong {
 font-size: 1.7rem;
 font-weight: 700;
 color: #FFFFFF;
}

.hover {
 cursor: pointer;
}

@media (max-width: 450px) {
 justify-content: center;
 flex-direction: column;
 text-align: center;
 gap: 2rem;

 height: fit-content;
 padding: 3rem 2rem;
}
`

export const Main3 = styled.div`
height: 90vh;
width: 100%;

justify-content: space-between;
align-items: center;
position: relative;
display: flex;
gap: 15rem;

padding: 0rem 10rem 5rem;

.left {
 width: 50%;

 flex-direction: column;
 display: flex;
 gap: 1rem;

 span {
  line-height: 3rem;
  font-weight: 500;
  font-size: 2.3rem;
  color: #7300cc;

  margin-bottom: 1rem;
 }

 p {
  font-size: 1.5rem;
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
 width: 50%;

 flex-direction: column;
 display: flex;
 gap: 1rem;

 span {
  line-height: 3rem;
  font-weight: 500;
  font-size: 2.3rem;
  color: #7300cc;

  margin-bottom: 1rem;
 }

 p {
  font-size: 1.4rem;
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

 .especial {
  transform: scale(65%);
 }
}

.especial {
  width: 40rem;
 }

 .left, .right {
  z-index: 2;

  img {
  transform: scale(85%);
  }

 }


.bottom {
position: absolute;
bottom: 0;

z-index: 1;
}

@media (max-width: 450px) {
 flex-direction: column;
 gap: 3rem;

 height: fit-content;

 padding: 5rem 2rem 3rem;

 .left, .right {
  width: 100%;
  align-items: center;
  text-align: center;
 }
 img, .especial, .Especial {
  display: none;
 }
}
`

export const Main4 = styled.div`
min-height: 100vh;
width: 100%;

justify-content: center;
flex-direction: column;
align-items: center;
display: flex;
gap: 3rem;

h2 {
 font-size: 2.3rem;
 font-weight: 400;
 color: #7300cc;
}

.texts {
 width: 100%;

 justify-content: center;
 align-items: flex-start;
 display: flex;
 gap: 2rem;

 .text {
  width: 35rem;

  flex-direction: column;
  align-items: center;
  text-align: center;
  display: flex;
  gap: 1rem;

  span {
    font-size: 1.8rem;
    font-weight: 600;
    color: #7300cc;
  }

  p {
   font-size: 1.4rem;
   color: #4d4d4d;
  }
 }

}

button {
 width: 30rem;
 height: 6rem;

 background-color: #7300cc;
 border: 1px solid #FFFFFF;
 border-radius: 6rem;
 margin-top: 2rem;

 font-size: 1.4rem;
 font-weight: 600;
 color: #FFFFFF;

 &:hover {
  background-color: #FFFFFF;
  border-color: #7300cc;
  cursor: pointer;

  color: #7300cc;
 }
}

&[data-color="true"]{
  background-color: #7300cc;

  h2  {
    color: #FFFFFF;
  }
  .texts {
    .text {
      span, p {
        color: #FFFFFF;
      }
    }
  }

  button {
  background-color: #FFFFFF;
  border-color: #7300cc;

  color: #7300cc;

  &:hover {
 background-color: #7300cc;
 border: 1px solid #FFFFFF;
 color: #FFFFFF;
  }
  }
}

@media (max-width: 450px) {
  text-align: center;
  padding: 2rem;

  height: fit-content;
  .texts {
    flex-direction: column;
    align-items: center;
  }
}
`