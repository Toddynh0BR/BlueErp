import styled from "styled-components";

import backGeral from "../../assets/backGeral.svg";

export const Container = styled.div`

`

export const Main = styled.main`
height: 100vh;
width: 100%;

background-image: url(${backGeral});
position: relative;
padding-top: 20rem;

flex-direction: column;
align-items: center;
display: flex;

p {
 font-size: 1.6rem;
 font-weight: 600;
 color: #FFFFFF;
}

h3 {
 font-size: 2.5rem;
 font-weight: 400;
 color: #FFFFFF;

 strong {
  font-size: 2.5rem;
 }
}

.Bottom {
  height: 30rem;
  width: 100%;
  
  justify-content: space-between;
  align-items: center;
  display: flex;
  gap: 3rem;

  padding: 0 5rem;

  position: absolute;
  bottom: 0;

  .exp {
    height: 100%;
    width: 30rem;

    border-radius: 1rem 1rem 0 0;
    background-color: #8f00fc;
    padding: 2rem;

    justify-content: center;
    flex-direction: column;
    align-items: center;
    display: flex;
    gap: 3rem;

    button {
     height: 5.5rem;
     width: 80%;


     border-radius: .5rem;
     outline: none;
     border: none;

     font-size: 1.6rem;
     font-weight: 600;
     color: #8f00fc;

     &:hover {
      transform: scale(105%);
      cursor: pointer;
     }
    }
  }

  .plans {
    height: 80%;
    flex: 1;

    justify-content: space-between;
    align-self: flex-end;
    align-items: center;
    display: flex;

    background-color: #FFFFFF;
    border-radius: 1rem 1rem 0 0;

    .Plan {
      padding: 2rem;
      height: 100%;
      flex: 1;

      justify-content: space-between;
      flex-direction: column;
      align-items: center;
      display: flex;
      gap: 1rem;

      .top {
       width: 100%;

       flex-direction: column;
       display: flex;
       gap: 1rem;

       h4 {
       font-size: 2.2rem;
       color: #7300cc;
       }

       p {
        font-size: 1.4rem;
        font-weight: 400;
        color: #4d4d4d;
       }
      }

      .bottom {
        width: 100%;

        justify-content: space-between;
        align-items: center;
        display: flex;

        strong {
          font-size: 2.6rem;
          color: #8f00fc;

          flex-direction: column;
          display: flex;

          span {
            font-size: 1.4rem;
            font-weight: 400;
            
          }

          p {
            font-size: 1.3rem;
            font-weight: 400;
            color: #00008a;
          }
        }
      }

    }
 
    .standard {
      background-color: #bebebe7e;
    }
  }
}

@media (max-width: 450px) {
height: fit-content;
padding-top: 10rem;
padding-bottom: 5rem;

flex-direction: column;
text-align: center;
display: flex;
gap: 3rem;

 p {
  font-size: 1.4rem;
 }
 h3 {
  font-size: 2rem;
  strong {
    font-size: 2rem;
  }
 }

 .Bottom {
 display: none;
}
}
`
export const Plans = styled.div`
min-height: 100vh;
width: 100%;

background-color: #FFFF;
padding: 0 5rem;

ul {
 width: 100%;

header, footer {
  height: 5.6rem;
  width: 100%;

  align-items: center;
  display: flex;

  background-color: #8f00fc;
  padding-left: 5rem;

  font-size: 1.8rem;
  font-weight: 600;
  color: #FFFFFF;
}

footer {
  border-radius: 0 0 2rem 2rem;
  margin-bottom: 10rem;
}

 li:nth-child(even) {
  background-color: #f0f0f0; /* Cor para os itens ímpares */
 }

 li:nth-child(odd) {
  background-color: transparent; /* Cor para os itens pares */
 }

 li {
  height: 5.6rem;
  width: 100%;

  justify-content: space-between;
  align-items: center;
  display: flex;
  gap: 3rem;

  .name {
    height: 100%;
    width: 30rem;

    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    display: flex;

    font-size: 1.3rem;
    font-weight: 700;
    color: #8f00fc;
    padding: 1rem;

    p {
     font-size: 1.2rem;
     color: #6d6d6d;
    }
  }

  .plans {
    height: 100%;
    flex: 1;

    align-items: center;
    display: flex;


    .plan {
      height: 100%;
      flex: 1;

      justify-content: center;
      align-items: center;
      display: flex;

      border-left: 1px solid #bebebe7e;

      font-size: 1.5rem;
      font-weight: 600;
      color: rgb(9, 194, 9);
    }
  }

  &:hover {
    background-color: #7400cc28;
  }
 }

 .especial {
  display: none;
 }
}

@media (max-width: 450px) {
  padding: 0rem;

  ul {

    li {
      min-height: 10rem;
      padding: 1rem 0 1rem 2rem;
      .name {
        width: 12rem;
        padding: 0;
      }
    }

    .especial {
      display: flex;
      height: 5.6rem;
      min-height: 5.6rem;

      .plans {
        .plan {
          font-size: 1rem;
        }
      }
    }
  }
}
`
