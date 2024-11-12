import styled from "styled-components";

import svg2 from "../../assets/back2.svg";
import svg from "../../assets/back.svg"

export const Container = styled.header`
height: 7rem;
width: 100%;

transition: .3s ease-in-out;
position: fixed;
left: 0;
top: 0;

justify-content: space-between;
align-items: center;
display: flex;
gap: 4rem;

box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
background-color: #FFFFFF;
padding: 0 4rem;
z-index: 20;

img {
 height: 7rem;

 cursor: pointer;
}

.Right {
 width: fit-content;
 height: 7rem;

 align-items: center;
 display: flex;
 gap: 1.5rem;

 .Topic {
  width: fit-content;
  height: 100%;

  padding: .5rem;

  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: .5rem;
  

  span {
   color: rgb(0%, 0%, 77.598572%);
   font-size: 1.5rem;
   font-weight: 700;
  }
  p {
   color: #888484c2;
   font-size: 1.5rem;
   font-weight: 700;
  }
  svg {
   color: rgb(0%, 0%, 77.598572%);
   font-size: 1.5rem;
  }

  &::after {
   content: ' ';
   width: 0%;
   height: .3rem;

   transition: .3s ease-in-out;
   background-color: rgb(0%, 0%, 77.598572%);
   position: absolute;
   bottom: 0;
  }

  &:hover {
   cursor: pointer;

   &::after {
    width: 100%;
    height: .3rem;
   }
  }
 }

 .exp {
  width: 18rem;
  height: 4rem;

  outline: none;
  border: none;

  background-color: rgb(46.66748%, 0%, 79.998779%);
  border-radius: .5rem;

  font-size: 1.5rem;
  font-weight: 600;
  color: #FFFFFF;

  &:hover {
   filter: brightness(120%);
   transform: scale(105%);
   cursor: pointer;
  }
 }
}

.MOBAL {
  display: none;
}

&[data-top="false"]{
  height: 5rem;

  img {
   height: 5rem;
  }

  .Right {
    height: 5rem;
  }
}

&[data-open='soluction']{
.Soluction {
  &::after {
   width: 100%;
  }
}
}

&[data-open='segment']{
.Segment {
  &::after {
   width: 100%;
  }
}
}

&[data-open='functions']{
.Functions {
  &::after {
   width: 100%;
  }
}
}

@media (max-width: 450px){
 height: 5rem;
 width: 100%;

 overflow: hidden;
 padding: 0 2rem;

 img {
   height: 5rem;
 }

 .Right {
  display: none;
 }

 .MOBAL {
  align-items: center;
  display: flex;
  gap: 2rem;

  span {
   color: rgb(0%, 0%, 77.598572%);
   font-size: 1.4rem;
   font-weight: 700;
  }
}
}
`

export const Soluction = styled.div`
height: 100vh;
width: 100%;

position: fixed;
z-index: 18;

.background {
height: 100vh;
width: 100%;

position: fixed;
z-index: 18;

background-color: rgba(116, 0, 204, 0.425);
}

.box {
height: 34rem;
width: 100rem;

transform: translateX(-50%);
position: fixed;
z-index: 19;
left: 50%;
top: 0rem;

display: flex;

box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
background-color: #FFFFFF;
padding-top: 7rem;
opacity: 1;
}

.select {
 height: 100%;
 width: 25rem;

 border:  1px solid #88848471;

 li {
  height: 33.3%;
  width: 100%;

  justify-content: space-between;
  align-items: center;
  display: flex;

  border-bottom: 1px solid #88848471;
  list-style: none;
  padding: 1.5rem;

  img {
   width: 10rem;
  }
  svg {
   font-size: 1.8rem;
   color: #7300cc;
   margin-right: 1rem;
  }

  &:hover {
   cursor: pointer;

   svg {
    margin-right: 0;
   }
  }
 }
}

.selected {
 flex: 1;

 grid-template-columns: repeat(2, 1fr);
 grid-template-rows: repeat(2, 1fr);
 display: grid;
 gap: .5rem;

 background-image: url(${svg2});
 padding: 3rem;

 span {
  font-size: 1.8rem;
  font-weight: 400;
  color: #7300cc;
 }

 .Icon {
  justify-self: flex-end;
  font-size: 4rem;
  color: #7300cc;
 }

 ul {
  padding: 2rem 0 0;

  flex-direction: column;
  display: flex;
  gap: 1rem;

  li {
   align-items: center;
   display: flex;
   gap: 1rem;

   p {
    font-size: 1.4rem;
    color: #7300cc;
   }

   svg {
    font-size: 1.6rem;
    color: rgb(9, 194, 9);
   }
  }
 }

 button {
  height: 5rem;
  width: 80%;

  justify-self: flex-end;
  align-self: flex-end;

  border: 1px solid rgb(9, 194, 9);
  background-color: transparent;
  color:  rgb(9, 194, 9);
  border-radius: 1rem;
  font-size: 1.4rem;
  font-weight: 600;

  &:hover {
   transform: scale(105%);
   cursor: pointer;
  }
 }
}

.EcoLink {
 height: 100%;
 width: 25rem;
 background-image: url(${svg});
 position: relative;
 overflow: hidden;
 padding: 2rem;

 justify-content: space-between;
 flex-direction: column;
 align-items: center;
 display: flex;


 h3 {
  font-weight: 400;
  font-size: 2rem;
  color: #FFFFFF;
 }

 span {
  font-size: 1.8rem;
  color: #FFFFFF;
  z-index: 19;

  align-items: center;
  display: flex;
  gap: .5rem;

  &:hover {
    cursor: pointer;
    gap: 1rem;
  }
 }

 img {
  width: 15rem;
  position: absolute;
  bottom: -3rem;
  right: -3rem;
 }
}

&[data-select="site"]{
 .select {
  .selectSite {
   background-color: #FFFFFF;
   filter: brightness(90%);
  }
 }
}

&[data-select="mobi"]{
 .select {
  .selectMobi {
   background-color: #FFFFFF;
   filter: brightness(90%);
  }
 }
}

&[data-select="lite"]{
 .select {
  .selectLite {
   background-color: #FFFFFF;
   filter: brightness(90%);
  }
 }
}

&[data-top="false"]{
.box {
  padding-top: 5rem;
}

}

@media (max-width: 450px){
  display: none;
}
`

export const Segment = styled.div`
height: 100vh;
width: 100%;

position: fixed;
z-index: 18;

.background {
height: 100vh;
width: 100%;

position: fixed;
z-index: 18;

background-color: rgba(116, 0, 204, 0.425);
}

.box {
height: 36rem;
width: 100rem;

transform: translateX(-50%);
position: fixed;
z-index: 19;
left: 50%;
top: 0rem;

grid-template-columns: repeat(4, 1fr);
display: grid;

box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
background-color: #FFFFFF;
padding-top: 7rem;
opacity: 1;

ul {
 height: 100%;
 width: 100%;

 justify-content: center;
 flex-direction: column;
 align-items: center;
 display: flex;

 background-color:#e2e2e2c2;

 li {
  width: 80%;
  
  list-style: none;
  padding: .8rem .5rem;

  font-size: 1.4rem;
  color: #7300cc;

  &:hover {
   background-color: rgba(116, 0, 204, 0.425);
   cursor: pointer;
  }
 }
}

.other {
 background-color: #FFFFFF;
}
}

.EcoLink {
 height: 100%;
 width: 25rem;
 background-image: url(${svg});
 position: relative;
 overflow: hidden;
 padding: 2rem;

 justify-content: space-between;
 flex-direction: column;
 align-items: center;
 display: flex;


 h3 {
  font-weight: 400;
  font-size: 2rem;
  color: #FFFFFF;
 }

 button {
  font-size: 1.5rem;
  font-weight: 600;
  color: #7300cc;
  z-index: 19;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  background-color: #FFFFFF;
  border: 2px solid #7300cc;
  border-radius: .5rem;
 
  height: 4rem;
  width: 20rem;


  &:hover {
    background-color: #7300cc;
    border: 2px solid #FFFFFF;
    transform: scale(105%);
    cursor: pointer;
    color: #FFFFFF;
  }
 }

 img {
  width: 15rem;
  position: absolute;
  bottom: -3rem;
  right: -3rem;
 }
}

&[data-top="false"]{
.box {
  padding-top: 5rem;
}

}

@media (max-width: 450px){
  display: none;
}
`

export const Functions = styled.div`
height: 100vh;
width: 100%;

position: fixed;
z-index: 18;

.background {
height: 100vh;
width: 100%;

position: fixed;
z-index: 18;

background-color: rgba(116, 0, 204, 0.425);
}

.box {
height: 40rem;
width: 100rem;

transform: translateX(-50%);
position: fixed;
z-index: 19;
left: 50%;
top: 0rem;

grid-template-columns: repeat(4, 1fr);
display: grid;

box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
background-color: #FFFFFF;
padding-top: 7rem;
opacity: 1;

ul {
 height: 100%;
 width: 100%;


 flex-direction: column;
 display: flex;

 background-color:#e2e2e2;
 padding: 2.5rem 1rem 0 3rem;

 h3 {
  font-size: 1.6rem;
  color: #7300cc;

  margin-bottom: .5rem;
 }

 li {
  width: 80%;
  
  align-items: center;
  display: flex;
  gap: .3rem;

  padding: .4rem .5rem;
  list-style: none;

  font-size: 1.4rem;
  color: #7300cc;

  &:hover {
   background-color: rgba(116, 0, 204, 0.425);
   cursor: pointer;
   gap: 1rem;
  }
 }
}

.other {
 background-color: #FFFFFF;
}
}

&[data-top="false"]{
.box {
  padding-top: 5rem;
}

}

@media (max-width: 450px){
  display: none;
}
`

export const PopUp = styled.div`

position: fixed;
z-index: 30;
left: 0;
top: 0;

main {
  height: 0vh;
  width: 0rem;

  transform: translateX(-50%);
   position: fixed;
   z-index: 21;
   left: 50%;
   top: 10%;

   h2 {
    transition: .0s ease-out;
    font-size: 0;
   }

  button {
    height: 0;
    width: 0;

    background-color: #00008a;
    border-radius: 5rem;
    outline: none;
    border: none;

    font-size: 1.6rem;
    font-weight: 600;
    color: #FFFFFF;

    transition: .0s ease-out;
    font-size: 0;
  }
}

&[data-visible='true']{
  height: 100vh;
  width: 100%;

  .background  {
   height: 100%;
   width: 100%;

   background-color: #7400cc52;
   position: fixed;
   z-index: 20;
   left: 0;
   top: 0;
  }

  main {
   height: 90vh;
   width: 50rem;

   background-color: #FFFFFF;
   border-radius: 1rem;

   justify-content: center;
   flex-direction: column;
   align-items: center;
   display: flex;
   gap: 3rem;

   transform: translateX(-50%);
   position: fixed;
   z-index: 21;
   left: 50%;
   top: 4rem;

   h2 {
    font-size: 3.5rem;
    font-weight: 700;

    margin-top: -2rem;
   }

   button {
    height: 5rem;
    width: 70%;

    background-color: #00008a;
    border-radius: 5rem;
    outline: none;
    border: none;

    transition: .3s ease-in-out;
    font-size: 1.6rem;
    font-weight: 600;
    color: #FFFFFF;

    &:hover {
      background-color: #7300cc;
      cursor: pointer;
    }
   }
  }
}
`



