import styled from "styled-components";

export const Container = styled.footer`
width: 100%;

`

export const Help = styled.div`
height: 55vh;
width: 100%;

background-color: rgba(115,0,204,0.5242471988795518);
padding: 0 13rem;

justify-content: space-between;
align-items: center;
display: flex;

.left {
 align-items: flex-start;
 flex-direction: column;
 display: flex;
 gap: 4rem;

 h2 {
  font-size: 3rem;
  font-weight: 500;
  color: #FFFFFF;

  strong {
   font-weight: 700;
  }
 }

 button {
  width: 28rem;
  height: 7rem;
  
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  background-color: #7300cc;
  border: 1px solid #FFFFFF;
  border-radius: 7rem;

  font-size: 1.6rem;
  font-weight: 600;
  color: #FFFFFF;

  &:hover {
   filter: brightness(105%);
   transform: scale(110%);
   cursor: pointer;
  }
 }
}

.right {
 align-items: flex-end;
 flex-direction: column;
 display: flex;
 gap: 4rem;

 ul {
  flex-direction: column;
  display: flex;
  gap: 2rem;

  li {
   justify-content: flex-end;
   align-items: center;
   display: flex;
   gap: .3rem;

   font-size: 1.3rem;
   color: #FFFFFF;

   svg {
    margin-right: .3rem;
    font-size: 1.5rem;
    color: #FFFFFF;
   }
  }
 }

 .call {
  height: 6rem;
  width: 90%;

  justify-content: space-between;
  align-items: center;
  display: flex;

  background-color: #FFFFFF;
  border: 1px solid #7300cc;
  border-radius: .3rem;
  padding: 2rem 3rem;

  p {
   font-size: 1.3rem;
   font-weight: 400;
   color: #3f3f3f;
  }

  strong {
   font-size: 1.3rem;
   font-weight: 600;
   color: #7300cc;
  }

  a {
   font-size: 1.6rem;
   font-weight: 600;
   color: #7300cc;
  }
}
}

@media (max-width: 450px) {
 min-height: 55vh;
 padding: 0rem 2rem;

 justify-content: center;
 flex-direction: column;
 gap: 3rem;

 .left {
  margin-top: 5rem;
  align-items: center;
  gap: 2rem;
 }

 .right {
  align-items: flex-start;
  gap: 2rem;

  ul {

   li {
    align-self: flex-start;
    font-size: 1.2rem;

    svg {
     font-size: 1rem;
    }
   }
  }

  .call {
   width: 100%;

   padding: 1rem 1.5rem;

   p {
   font-size: 1.2rem;
  }

  strong {
   font-size: 1.2rem;
  }

  a {
   font-size: 1.3rem;
  }
  }
 }
}
`

export const RealFooter = styled.div`
min-height: 100vh;
width: 100%;

background: rgb(255,255,255);
background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(115,0,204,0.5242471988795518) 100%);
padding: 0 13rem;

flex-direction: column;
display: flex;
gap: 4rem;

.title {
 width: 100%;

 justify-content: space-between;
 align-items: center;
 display: flex;

 border-bottom: 1px solid #FFFFFF;
 padding: 5rem 0;

 .call {
  align-items: center;
  display: flex;
  gap: 2rem;

  svg {
   font-size: 3rem;
   color: #7300cc;
  }

  span {
   font-size: 2rem;
   font-weight: 500;
   color: #FFFFFF;

   a {
    font-size: 2rem;
    font-weight: 700;
    color: #7300cc;
   }
  }
 }

 .eco {
  width: fit-content;

  flex-direction: column;
  align-items: center;
  display: flex;
  gap: 1rem;

  h5 {
   font-size: 1.6rem;
   color: #FFFFFF;

   cursor: pointer;
  }

  .ecosystem {
   height: 3rem;
   width: 100%;
   
   background-color: #FFFFFF;
   border-radius: 2.5rem;
   cursor: pointer;
   
   justify-content: space-between;
   align-items: center;
   display: flex;

   .circle {
    height: 4.5rem;
    width: 4.5rem;

    border-radius: 50%;

    justify-content: center;
    align-items: center;
    display: flex;

    svg {
     font-size: 2.4rem;
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
 }

 .follow {
  align-items: center;
  display: flex;

  gap: 1rem;

  span {
   font-size: 1.5rem;
   font-weight: 500;
   color: #FFFFFF;
  }

  a:hover {
    z-index: 200;
  }
  svg {
   justify-content: center;
   align-items: center;
   display: flex;

   font-size: 2rem;
   color: #FFFFFF;

   &:hover {
    transform: scale(105%);
   }
  }
 }
}

h4 {
 font-size: 2rem;
 color: #7300cc;
}

.links {
 width: 100%;

 grid-template-columns: repeat(4, 1fr);
 display: grid;


 .topic {
  h5 {
   font-size: 1.6rem;
   font-weight: 600;
   color: #7300cc;

   margin-bottom: 1.5rem;
  }

  .none {
   opacity: 0;
  }

  ul {
   flex-direction: column;
   display: flex;
   gap: .8rem;
  }

  li {
   list-style: none;

   font-size: 1.2rem;
   font-weight: 500;
   color: #35005e;

   &:hover {
    cursor: pointer;
    color: #7300cc;
   }
  }
 }
}

.bottom {
 width: 100%;
 
 margin-bottom: 5rem;

 justify-content: space-between;
 align-items: center;
 display: flex;

 .direct {
  span {
   font-size: 1.2rem;
   color: #888484c2;
  }
 }

 .app {
 height: 7rem;
 width: 33rem;


 border-radius: 1rem;
 overflow: hidden;

 align-items: center;
 display: flex;

 .appImg {
  height: 7rem;
  width: 7rem;
 }

 .apps {
  height: 7rem;
  flex: 1;
  
  justify-content: space-evenly;
  align-items: center;
  display: flex;

  background-color: #7300cc;

  img {
   width: 10rem;
   cursor: pointer;
  }
 }
}
}

@media (max-width: 450px) {
 padding: 0 2rem;
 gap: 3rem;

 .title {
  flex-direction: column;
  gap: 2rem;

  padding: 2rem 0rem;
  margin-top: 3rem;

  .call {
    display: none;
  }
 }

 .links {
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
 }

 .bottom {
  flex-direction: column-reverse;
  gap: 3rem;
 }
}
`