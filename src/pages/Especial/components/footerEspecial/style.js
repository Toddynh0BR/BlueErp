import styled from "styled-components";

import Back from "../../assets/bgRodapeSigeCloud.jpg";

export const Container = styled.div`
height: fit-content;
width: 100%;

padding: 4rem 4rem 0rem 4rem;

.RealFooter {
 height: 100%;
 width: 100%;

 flex-direction: column;
 display: flex;

 border-radius: 4rem 4rem 0 0;
 overflow: hidden;

 .help {
  height: 30rem;
  width: 100%;

  border-bottom: 1px solid #bebebe7e;
  background-image: url(${Back});
  background-repeat: no-repeat;
  background-position: right;
  background-color: #7300cc;
  background-size: 75%;
  padding: 0 6rem;

  position: relative;

  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  gap: 3rem;

  .top {
   width: 100%;
   z-index: 5;

   img {
    filter: brightness(2000%);
    width: 20rem;
   }
  }

  .bottom {
   width: 100%;
   z-index: 5;

   justify-content: space-between;
   align-content: center;
   display: flex;



   span {
    font-size: 1.7rem;
    font-weight: 600;
    color: #fff;
   }
   .topic {
    flex-direction: column;
    display: flex;
    gap: 0.5rem;

    strong {
     font-size: 1.5rem;
     color: #fff;
    }

    p {
     font-size: 1.3rem;
     opacity: .8;
     color: #fff;
    }
   }
   .downloads {
    align-items: center;
    display: flex;
    gap: 2rem;
   }
  }
  .gradiant {
   height: 100%;
   width: 25%;

   background-color: #5800cc;
   position: absolute;
   left: 0;

   &::after {
    content: "";
    height: 100%;
    width: 20rem;

    position: absolute;
    right: -20rem;
    z-index: 1;
    top: 0;

    background: transparent;
    background: linear-gradient(263deg, transparent 10%, #5800cc 80%);
   }
  }
 }

 .functions {
  height: 100vh;
  width: 100%;

  border-bottom: 1px solid #bebebe7e;
  background-color: #5800cc;
  padding: 6rem;

  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 5rem 1fr;
  grid-template-areas:
  "function function function function"
  "collum1 collum2 collum3 collum4";
  display: grid;
  gap: 2rem;
  column-gap: 3rem;

  h3 {
    grid-area: function;
    font-size: 2rem;
    color: #FFFFFF;
  }

  ul {
    height: 100%;
    width: 100%;

    flex-direction: column;
    display: flex;
    gap: 2rem;

    span {
     font-size: 1.6rem;
     font-weight: 600;
     color: #FFFFFF;

     height: 3.5rem;
     display: flex;
    }

    li {
     font-size: 1.5rem;
     font-weight: 300;
     list-style: none;
     color: #FFFFFF;
     opacity: .7;

     &:hover {
      cursor: pointer;
      color: #FFFF; 
      opacity: 1;
     }
    }
  }

  .c1 {
    grid-area: collum1;
  }
  .c2 {
    grid-area: collum2;
  }
  .c3 {
    grid-area: collum3;
  }
  .c4 {
    grid-area: collum4;
  }
 }
}
`