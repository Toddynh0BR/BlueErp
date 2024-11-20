import styled from "styled-components";

import backGeral from "../../../assets/backGeral.svg";
import backSite from "../../../assets/backSite.svg";

export const Container = styled.div`

`

export const Main = styled.main`
height: 110vh;
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

  p {
   font-size: 1.4rem;
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

@media (max-width: 450px) {
height: fit-content;
padding-top: 10rem;

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

export const Main2 = styled.div`
height: 80vh;
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
  font-weight: 700;
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
  font-weight: 700;
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


}

.bottom {
position: absolute;

transform: translate(-50%, -50%);
bottom: 0;
left: 50%;

cursor: pointer;
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

export const Main3 = styled.div`
height: 90vh;
width: 100%;

background-image: url(${backGeral});
flex-direction: column;
align-items: center;
display: flex;

position: relative;
padding: 6rem 0;


span {
 font-size: 2.3rem;
 font-weight: 400;
 color: #FFFFFF;
}

.cards {
 height: 15rem;
 width: 100%;

 position: absolute;
 bottom: 0;

 justify-content: space-between;
 align-items: center;
 position: absolute;
 display: flex;
 gap: 3rem;

 background-color: rgba(0, 0, 198, 0.521);
 padding: 0rem 10rem;
}

.card {
 height: 30rem;
 width: 100%;

 background-color: #FFFFFF;
 border-radius: .5rem;
 margin-top: -30rem;
 padding: 2rem;

 flex-direction: column;

 display: flex;
 gap: 1.5rem;

 span {
  white-space: nowrap;
  font-size: 1.7rem;
  font-weight: 600;
  color: #7300cc;
 }
 p {
  font-size: 1.5rem;
  color: #6e6e6e;
 }
}

@media (max-width: 450px) {
padding: 5rem 2rem;

height: fit-content;

text-align: center;
gap: 2rem;

.cards {
 height: fit-content;
 position: relative;

 justify-content: flex-start;
 flex-direction: column;
 gap: 2rem;

 background-color: none;
 padding: 0;

 .card {
  margin-top: 0;
 }
}
}
`
