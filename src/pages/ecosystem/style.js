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
padding: 0rem 25rem;

.left {
 flex-direction: column;
 display: flex;
 gap: 2rem;
 width: 35%;

 .ecosystem {
   width: fit-content;
   height: 3rem;
   
   background-color: #FFFFFF;
   border-radius: 2.5rem;

   
   justify-content: space-between;
   align-items: center;
   display: flex;

   .circle {
    height: 4.5rem;
    width: 4.5rem;

    cursor: pointer;

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

 h2 {
  font-size: 3rem;
  color: #7300cc;
 }

 h4 {
  font-size: 1.4rem;
  font-weight: 400;
  color: #888484;

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
}

.right {
 justify-content: center;
 align-items: center;
 display: flex;
 gap: 2rem;

 .box {
  height: 45rem;
  width: 55rem;


  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);

  display: grid;

  .card {
   height: 100%;
   width: 100%;

   flex-direction: column;
   align-items: center;
   display: flex;

   position: relative;
   padding: 2rem 1.5rem;

   h4 {
    font-size: 2rem;
    color: #FFFFFF;
   }
   span {
    font-size: 1.6rem;
    font-weight: 400;
    color: #FFFFFF;
   }
   .Image {
    position: absolute;
    width: 100%;
    bottom: 0;
   }
   &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    border-radius: 2rem 0 2rem 0;
    transform: scale(110%);
    cursor: pointer;
    z-index: 2;
   }
  }

  .c1 {
    border-radius: 2rem 0 0 0;
    background: rgb(0,0,198);
    background: linear-gradient(120deg, rgba(115,0,204,1) 0%, rgba(0,0,198,1) 100%);
  }
  .c2 {
    background: rgb(0,169,228);
    background: linear-gradient(120deg, rgba(0,169,228,1)rgba(0,169,228,1) 20%, rgba(2,0,148,1) 100%);
  }
  .c3 {
    background: rgb(0,179,30);
    background: linear-gradient(120deg, rgba(0,179,30,1) 20%, rgba(0,97,5,1) 100%);
  }
  .c4 {
    border-radius: 0 0 2rem 0;
    background: rgb(75,75,75);
    background: linear-gradient(120deg, rgba(75,75,75,1) 20%, rgba(203,203,203,1) 100%);
  }
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

export const Site = styled.div`
height: 90rem;
width: 100%;

justify-content: space-between;
flex-direction: column;
display: flex;

background-image: url(${backSite});
padding: 4rem 13rem;

.title, .bottom {
 width: 100%;

 justify-content: space-between;
 align-items: center;
 display: flex;

 .ecosystem {
   width: 3rem;
   height: fit-content;
   
   background-color: #FFFFFF;
   border-radius: 2.5rem;

   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   display: flex;

   .circle {
    height: 4.5rem;
    width: 4.5rem;

    cursor: pointer;

    border-radius: 50%;

    justify-content: center;
    align-items: center;
    display: flex;

    svg {
     font-size: 2.4rem;
     color: #7300cc;
    }


   }
   .truck {
    background-color: #7300cc;
    
    svg {
      color: #FFFFFF;
    }
   }

 }

 .text {
  flex-direction: column;
  align-items: flex-end;
  display: flex;
  gap: 1.5rem;

  span {
   font-size: 1.5rem;
   color: #FFFFFF;

   align-items: center;
   display: flex;
   gap: .5rem;

   &:hover {
    cursor: pointer;
    gap: .8rem;
   }
  }
 }

 h3 {
  font-size: 2rem;
  font-weight: 400;
  color: #FFFFFF;

  text-align: right;
 }

 p {
  font-size: 1.3rem;
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

img {
 width: 100%;
}

@media (max-width: 450px) {
  height: fit-content;
  padding: 4rem 2rem;
  gap: 4rem;

  .title{
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;

    .text {
      align-items: flex-start;
    }
    h3 {
      text-align: left;
    }

    .ecosystem {
      width: 100%;
      height: 3rem;

      align-self: center;
      flex-direction: row;
    }
  }

  img {
   display: none;
  }

  .bottom {
    flex-direction: column;
    gap: 2rem;
  }
}
`

export const Mobi = styled.div`
height: 90rem;
width: 100%;

justify-content: space-between;
flex-direction: column;
display: flex;

background-image: url(${backMobi});
padding: 4rem 13rem;

.title, .bottom {
 width: 100%;

 justify-content: space-between;
 align-items: center;
 display: flex;

 .ecosystem {
   width: 3rem;
   height: fit-content;
   
   background-color: #FFFFFF;
   border-radius: 2.5rem;

   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   display: flex;

   .circle {
    height: 4.5rem;
    width: 4.5rem;

    cursor: pointer;

    border-radius: 50%;

    justify-content: center;
    align-items: center;
    display: flex;

    svg {
     font-size: 2.4rem;
     color: #7300cc;
    }


   }
   .phone {
    background-color: #7300cc;
    
    svg {
      color: #FFFFFF;
    }
   }

 }

 .text {
  flex-direction: column;
  align-items: flex-end;
  display: flex;
  gap: 1.5rem;

  span {
   font-size: 1.5rem;
   color: #FFFFFF;

   align-items: center;
   display: flex;
   gap: .5rem;

   &:hover {
    cursor: pointer;
    gap: .8rem;
   }
  }
 }

 h3 {
  font-size: 2rem;
  font-weight: 400;
  color: #FFFFFF;

  text-align: right;
 }

 p {
  font-size: 1.3rem;
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

img {
 width: 100%;
}

@media (max-width: 450px) {
  height: fit-content;
  padding: 4rem 2rem;
  gap: 4rem;

  .title{
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;

    .text {
      align-items: flex-start;
    }
    h3 {
      text-align: left;
    }

    .ecosystem {
      width: 100%;
      height: 3rem;

      align-self: center;
      flex-direction: row;
    }
  }

  img {
   display: none;
  }

  .bottom {
    flex-direction: column;
    gap: 2rem;
  }
}
`

export const Lite = styled.div`
height: 90rem;
width: 100%;

justify-content: space-between;
flex-direction: column;
display: flex;

background-image: url(${backLite});
padding: 4rem 13rem;

.title, .bottom {
 width: 100%;

 justify-content: space-between;
 align-items: center;
 display: flex;

 .ecosystem {
   width: 3rem;
   height: fit-content;
   
   background-color: #FFFFFF;
   border-radius: 2.5rem;

   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   display: flex;

   .circle {
    height: 4.5rem;
    width: 4.5rem;

    cursor: pointer;

    border-radius: 50%;

    justify-content: center;
    align-items: center;
    display: flex;

    svg {
     font-size: 2.4rem;
     color: #7300cc;
    }


   }
   .nowifi {
    background-color: #7300cc;
    
    svg {
      color: #FFFFFF;
    }
   }

 }

 .text {
  flex-direction: column;
  align-items: flex-end;
  display: flex;
  gap: 1.5rem;

  span {
   font-size: 1.5rem;
   color: #FFFFFF;

   align-items: center;
   display: flex;
   gap: .5rem;

   &:hover {
    cursor: pointer;
    gap: .8rem;
   }
  }
 }

 h3 {
  font-size: 2rem;
  font-weight: 400;
  color: #FFFFFF;

  text-align: right;
 }

 p {
  font-size: 1.3rem;
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

img {
 width: 100%;
}

@media (max-width: 450px) {
  height: fit-content;
  padding: 4rem 2rem;
  gap: 4rem;

  .title{
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;

    .text {
      align-items: flex-start;
    }
    h3 {
      text-align: left;
    }

    .ecosystem {
      width: 100%;
      height: 3rem;

      align-self: center;
      flex-direction: row;
    }
  }

  img {
   display: none;
  }

  .bottom {
    flex-direction: column;
    gap: 2rem;
  }
}
`