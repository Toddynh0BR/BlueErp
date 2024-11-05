import styled from "styled-components";

export const Container = styled.div`

`

export const Ads = styled.div`
height: 100vh;
width: 100%;

background: rgb(0,0,198);
background: linear-gradient(120deg, rgba(0,0,198,1) 0%, rgba(115,0,204,1) 100%);

padding: 0 13rem;
justify-content: space-between;
display: flex;

.right {
 margin-right: -5rem;
 align-items: center;
 position: relative;
 display: flex;

 .ads {
  transform: scale(85%);

  z-index: 2;
 }
 .adsHover {
    transform: scale(90%);

  z-index: 2;
 }

 .over {
  position: absolute;
  bottom: 15rem;
  right: 15rem;

  opacity: 20%;
  height: 120%;
  width: 120%;
  transform: rotate(140deg);
 }

}

.left {
 justify-content: center;
 flex-direction: column;

 display: flex;
 gap: 2rem;


 h2 {
  width: 50rem;
  font-size: 3rem;
  font-weight: 300;
  color: #FFFFFF;
 }

 .ButtonAds {
  align-items: center;
  display: flex;
  gap: 1rem;

  .button {
   height: 5.3rem;
   width: fit-content;
   p {
    font-size: 2rem;
    font-weight: 300;
    color: #FFFFFF;
   }

   align-items: center;
   display: flex;
   gap: 2rem;

   outline: none;
   border: none;

   background-color: rgb(46.66748%, 0%, 79.998779%);
   -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.40);
   -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.40);
   box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.40);
   border-radius: 3rem;
   padding: .6rem .4rem .6rem 2rem;
   
   .circle {
    height: 4.6rem;
    width: 4.6rem;

    background-color: #FFFFFF;
    border-radius: 50%;
    margin-right: .1rem;

    transition: .5s ease-in-out;
    justify-content: center;
    align-items: center;
    display: flex;
    img {
     width: 2.5rem;
     height: 2.5rem;
    }
   }
  }

  .sets {
   font-size: 2rem;
   color: #FFFFFF;
  }
   
  &:hover {
   gap: 2rem;

   cursor: pointer;
   .button {
    .circle {
        transform: rotate(360deg) scale(1.02) translateX(-1px);
    }
   }
  }
 }
}

@media (max-width: 450px) {
  padding: 0 2rem;

  .right {
    display: none;
  }

  .left {
    h2 {
     font-size: 3rem;
     width: 100%;
    }

   .ButtonAds {

    .button {
      height: 5rem;
      width: 100%;

      justify-content: space-between;

      p {
       font-size: 1.7rem;
      }

    }
    .sets {
     display: none;
    }
   }
  }
}
`

export const Plans = styled.div`
min-height: 100vh;
width: 100%;

flex-direction: column;
display: flex;
gap: 2rem;

padding: 4rem 13rem;

.title {
 width: 100%;

 justify-content: space-between;
 align-items: center;
 display: flex;

 h2 {
  font-size: 2.3rem;
  font-weight: 300;
  color: rgba(115,0,204,1);

  strong {
   font-size: 2.4rem;
  }
 }

 span {
  font-size: 1.7rem;
  font-weight: 400;
  color: rgba(115,0,204,1);
 }
}

.plans {
 width: 100%;

 margin-top: 3rem;
 align-items: center;
 display: flex;

 gap: 2rem;

 .plan {
  height: 60rem;
  width: 100%;

  transition: .5s ease-in-out;
  background-color: #FFFFFF;
  border-radius: 1rem;
  padding: 2rem;

  p {
   font-size: 1.5rem;
  }
  
  &:hover {
   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
   transform: scale(105%);
   cursor: pointer;
  }
 }
}

@media (max-width: 450px) {
padding: 4rem 2rem;
gap: 1rem;

.title {
 flex-direction: column;
 gap: 2rem;
 h2 {
  font-size: 1.8rem;
 }
 strong {
  font-size: 1.9rem;
 }

}

.plans {
 flex-direction: column;
}
}
`

export const Eco = styled.div`
min-height: 100vh;
width: 100%;

background: rgb(0,0,198);
background: linear-gradient(120deg, rgba(115,0,204,1) 0%, rgba(0,0,198,1) 100%);

padding: 4rem 13rem;
justify-content: space-between;
display: flex;

.right {
 flex-direction: column;
 align-items: center;
 display: flex;
 gap: 1rem;
 flex: 1;

 .container {
  align-items: center;
  display: flex;
  gap: 1rem;
 }

 .card {
  height: 33rem;
  width: 23rem;

  flex-direction: column;
  align-items: center;
  position: relative;
  display: flex;

  background-color: #FFFFFF;
  border-radius: 1rem;
  padding: 3rem 2rem;

  .Icon {
   width: 13rem;
   margin-bottom: .5rem;
  }
  .Mobi {
   width: 11rem;
   margin-bottom: .0rem;
  }
  .Site {
   width: 9rem;
   margin-bottom: .2rem;
  }
  span {
   color: rgba(0,0,198,1);
   font-size: 1.4rem;
   font-weight: 300;

   margin-bottom: 2rem;
  }
  ul {
   width: 100%;

   flex-direction: column;
   display: flex;
   gap: 1rem;
  }
  li {
   align-items: center;
   list-style: none;
   display: flex;
   gap: .3rem;

   color: rgba(0,0,198,1);
   white-space: nowrap;
   font-size: 1.3rem;
   font-weight: 300;

   svg {
    color: rgb(9, 194, 9)rgb(9, 194, 9);
    margin-right: .5rem;
    font-size: 1.4rem;
   }
  }
  .Image {
   width: 100%;
   position: absolute;
   bottom: 0;
  }

  &:hover {
   cursor: pointer;
   transform: scale(105%);

   -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.40);
   -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.40);
   box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.40);
  }
 }
}

.left {
 justify-content: center;
 flex-direction: column;

 display: flex;
 gap: 2rem;
 flex: 1;
 padding: 0 20rem 0 3rem;

 h2 {
  text-transform: uppercase;
  font-size: 1.8rem;
  color: #FFFFFF;
 }

 p {
  font-size: 2.9rem;
  font-weight: 300;
  color: #FFFFFF; 

 }

 .ButtonAds {
  margin-top: 3rem;
  .button {
   height: 4.5rem;
   width: fit-content;
   p {
    font-size: 1.8rem;
    font-weight: 300;
    color: #FFFFFF;
   }

   align-items: center;
   display: flex;
   gap: 1.8rem;

   outline: none;
   border: none;

   background-color: rgb(46.66748%, 0%, 79.998779%);
   -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.40);
   -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.40);
   box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.40);
   border-radius: 3rem;
   padding: .5rem .3rem .5rem 1.8rem;
   
   .circle {
    height: 3.8rem;
    width: 3.8rem;

    background-color: #FFFFFF;
    border-radius: 50%;
    margin-right: .1rem;

    transition: .5s ease-in-out;
    justify-content: center;
    align-items: center;
    display: flex;
    img {
     width: 2.5rem;
     height: 2.5rem;
    }
   }
  }
   
  &:hover {
   cursor: pointer;
   .button {
    .circle {
        transform: rotate(360deg) scale(1.02) translateX(-1px);
    }
   }
  }
 }

 .eco {
  margin-top: 2rem;
  font-size: 1.6rem;
  color: #FFFFFF;

  a {
    text-decoration: underline;
    cursor: pointer;
    color: #FFFFFF;
  }
 }
}

@media (max-width: 450px) {
  padding: 4rem 2rem;

  flex-direction: column;
  gap: 2rem;

  .left {
   padding: 0;
  }

  .right {
   .container {
    flex-direction: column;
   }

   .card {
    height: 40rem;
    width: 150%;

    .Image {
      width: 90%;
    }
   }
  }
}
`

export const Gest = styled.div`
min-height: 100vh;
width: 100%;


flex-direction: column;
padding: 10rem 13rem;
display: flex;
gap: 5rem;

.title {
 width: 100%;

 justify-content: space-between;
 align-items: center;
 display: flex;

 h2 {
  font-size: 2.3rem;
  font-weight: 300;
  color: rgba(115,0,204,1);

  strong {
   font-size: 2.4rem;
  }
 }

 .ButtonAds {
  .button {
   height: 4.5rem;
   width: fit-content;
   p {
    font-size: 1.8rem;
    font-weight: 300;
    color: #FFFFFF;
   }

   align-items: center;
   display: flex;
   gap: 1.8rem;

   outline: none;
   border: none;

   background-color: rgb(46.66748%, 0%, 79.998779%);
   -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.40);
   -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.40);
   box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.40);
   border-radius: 3rem;
   padding: .5rem .3rem .5rem 1.8rem;
   
   .circle {
    height: 3.8rem;
    width: 3.8rem;

    background-color: #FFFFFF;
    border-radius: 50%;
    margin-right: .1rem;

    transition: .5s ease-in-out;
    justify-content: center;
    align-items: center;
    display: flex;
    img {
     width: 2.5rem;
     height: 2.5rem;
    }
   }
  }
   
  &:hover {
   cursor: pointer;
   .button {
    .circle {
        transform: rotate(360deg) scale(1.02) translateX(-1px);
    }
   }
  }
 }

}

.topics {
 width: 100%;

 grid-template-columns: repeat(3, 1fr);
 display: grid;
 gap: 2rem;

 .topic {
  width: 100%;

  flex-direction: column;
  display: flex;
  gap: 1rem;

  background-color: #FFFFFF;
  border-radius: 1rem;
  padding: 2rem;

  .row {
   align-items: center;
   display: flex;
   gap: 1rem;
  }

  img {
   width: 3.5rem;
  }

  span {
    color: rgba(115,0,204,1);
    font-size: 1.5rem;
    font-weight: 700;
  }

  p {
   font-size: 1.4rem;
   color: #666262e7;
  }
 }
}

@media (max-width: 450px) {
padding: 5rem 2rem;
gap: 2rem;

.title {
 flex-direction: column;
 gap: 2rem;
}

.topics {
  grid-template-columns: repeat(1, 1fr);
}
}
`

export const Inte = styled.div`
min-height: 100vh;
width: 100%;

justify-content: space-between;
display: flex;
gap: 4rem;

overflow: hidden;
position: relative;
padding: 4rem 13rem;
background: rgb(115,0,204);
background: linear-gradient(120deg, rgba(115,0,204,1) 20%, rgba(0,0,198,1) 100%);

.left {
 flex-direction: column;
 align-items: center;
 display: flex;
 gap: 1rem;
 flex: 1;

 z-index: 2;

 img {
  transform: scale(130%);
 }
}

.right {
 justify-content: center;
 align-items: flex-end;
 flex-direction: column;

 z-index: 2;

 display: flex;
 gap: 1rem;
 flex: 1;

 h2 {
  text-transform: uppercase;
  font-size: 1.8rem;
  color: #FFFFFF;
 }

 p {
  font-size: 2.9rem;
  font-weight: 300;
  color: #FFFFFF; 

  text-align: right;
 }

 .ButtonAds {
  margin-top: 3rem;
  .button {
   height: 4.5rem;
   width: fit-content;
   p {
    font-size: 1.8rem;
    font-weight: 300;
    color: #FFFFFF;
   }

   align-items: center;
   display: flex;
   gap: 1.8rem;

   outline: none;
   border: none;

   background-color: rgb(46.66748%, 0%, 79.998779%);
   -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.40);
   -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.40);
   box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.40);
   border-radius: 3rem;
   padding: .5rem .3rem .5rem 1.8rem;
   
   .circle {
    height: 3.8rem;
    width: 3.8rem;

    background-color: #FFFFFF;
    border-radius: 50%;
    margin-right: .1rem;

    transition: .5s ease-in-out;
    justify-content: center;
    align-items: center;
    display: flex;
    img {
     width: 2.5rem;
     height: 2.5rem;
    }
   }
  }
   
  &:hover {
   cursor: pointer;
   .button {
    .circle {
        transform: rotate(360deg) scale(1.02) translateX(-1px);
    }
   }
  }
 }

 .eco {
  margin-top: 2rem;
  font-size: 1.6rem;
  color: #FFFFFF;

  a {
    text-decoration: underline;
    cursor: pointer;
    color: #FFFFFF;
  }
 }
}

.Over {
 position: absolute;
 
 height: 100%;
 width: 100%;

 align-self: center;
 bottom: 10rem;
 left: 1rem;

 opacity: 30%;

 transform: rotate(180deg) scale(200%);
}

@media (max-width: 450px) {
  flex-direction: column-reverse;
  padding: 4rem 2rem;
  .left {
    img {
      transform: scale(80%);
    }
  }
  .right {
    align-items: flex-start;
  }
}
`

export const Neg = styled.div`
height: 50vh;
width: 100%;

justify-content: center;
flex-direction: column;
align-items: center;
padding: 0 13rem;
display: flex;
gap: 6rem;

.title {
 h2 {
  font-size: 2.5rem;
  font-weight: 400;
  color: rgb(0%, 0%, 77.598572%);

  strong {
   font-weight: 700;
  }
 }
}

.negocios {
 width: 100%;

 justify-content: space-between;
 align-items: center;
 display: flex;

 .neg {
  flex-direction: column;
  align-items: center;
  display: flex;
  gap: 1rem;

  img {
   height: 5rem;
   width: 5rem;
  }

  span {
   font-size: 1.4rem;
   font-weight: 700;
   color: #7300cc;
  }
 }
}


@media (max-width: 450px) {
 height: fit-content;
 padding: 4rem 2rem;
 gap: 3rem;

.negocios {
  grid-template-columns: repeat(3, 1fr);
  display: grid;
  gap: 2rem;
}
}
`
