import styled from 'styled-components';

export const Container = styled.header`
height: fit-content;
width: 100%;

position: fixed;
z-index: 10;
top: 0;


flex-direction: column;
display: flex;

&[data-top="false"]{
padding: 0 5rem;
}

@media (max-width: 450px){
&[data-top="false"]{
padding: 0;
}
 
}
`

export const Top = styled.div`
height: 6rem;
width: 100%;

justify-content: flex-end;
align-items: center;
display: flex;

.download {
 width: fit-content;
 height: 100%;

 border-radius: 0 0 0 3rem;
 border: 1px solid #FFFFFF;
 padding: 2rem 3rem;

 border-right-color: transparent;
 border-right-width: 0;
 border-top-color: transparent;
 border-top-width: 0;

 align-items: center;
 display: flex;
 gap: 2rem;

 img {
  cursor: pointer;
 }
}

button {
 width: 23.5rem;
 height: 100%;

 outline: none;
 border: none;

 align-items: center;
 display: flex;
 gap: 1rem;

 background-color: #FFFFFF;
 padding: 2rem 8rem;

 font-size: 1.5rem;
 font-weight: 600;
 color: #7300cc;

 svg {
  font-size: 2rem;
 }

 &:hover {
  background-color: #7300cc;
  cursor: pointer;
  color: #FFFFFF;
 }
}

&[data-top="false"]{
 .download {
    opacity: 0;
    height: 0rem;
 }
 button {
  opacity: 0;
  height: 0rem;
 }

 height: 0rem;
}


@media (max-width: 450px){
 display: none;
}
`

export const Buttom = styled.div`
height: 6rem;
width: 100%;


padding: 0 0 0 5rem;

justify-content: space-between;
align-items: center;
display: flex;

.Logo {
 width: 15rem;

 filter: invert(1) brightness(100000000%);
 cursor: pointer;
}

.right {
 width: fit-content;

 align-items: center;
 display: flex;
 gap: 2rem;

 span {
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 600;
  color: #FFFFFF;

  padding: .5rem 1rem;
  border-radius: 2rem;

  &:hover {
   background-color: #FFFFFF;
   color: #7300cc;
  }
 }

 button {
 width: 23.5rem;
 height: 100%;

 outline: none;
 border: none;

 justify-content: center;
 align-items: center;
 display: flex;
 gap: 1rem;

 background-color: #7300cc;
 border-radius: 0 0 0 3rem;
 padding: 2rem 5rem;

 font-size: 1.5rem;
 font-weight: 600;
 color: #FFFFFF;


 svg {
  font-size: 2rem;
 }

 &:hover {
  background-color: #FFFFFF;
  cursor: pointer;
  color: #7300cc;
 }
}
}

.hover {
 height: fit-content;
 width: fit-content;

 width: 90%;

 transform: translateX(-50%);
 position: absolute;
 top: 12rem;
 left: 50%;

}
.Functions {
 height: 43rem;
 width: 100%;

 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
 background-color: #FFFFFF;
 border-radius: 1rem;
 overflow: hidden;

 align-items: center;
 display: flex;
 z-index: 10;

 .collum {
  height: 100%;
  flex: 1;

  border-right: 1px solid #bebebe7e;
  padding: 2rem;

  flex-direction: column;
  align-items: center;
  display: flex;
  gap: 2rem;

  h4 {
   font-size: 1.5rem;
   color: #7300cc;
  }

  li {
   list-style: none;
   padding: 1rem 0;

   font-size: 1.3rem;
   color: #5e5e5ec2;

   &:hover {
    cursor: pointer;
    color: #7300cc;
   }
  }
 }


 .bigCollum {
  height: 100%;
  width: 30rem;

  flex-direction: column;
  display: flex;


  img {
   flex: 1;

   &:hover {
    cursor: pointer;
    filter: saturate(1.5);
   }
  }
 }
}
.Areas {
 height: fit-content;
 width: 100%;

 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
 background-color: #FFFFFF;
 border-radius: 1rem;
 overflow: hidden;
 padding: 2rem;

 grid-template-columns: repeat(4, 1fr);
 display: grid;
 gap: 1.5rem;
 z-index: 10;

 li {
  font-size: 1.4rem;
  color: #5e5e5ec2;

  width: 100%;

  align-items: center;
  display: flex;
  gap: 1rem;

  border-bottom: 1px solid #5e5e5ec2;
  padding: 2rem 1rem; 
  list-style: none; 

  svg {
    width: 3rem;
    height: 3rem;
    fill: #7300cc;
    transition: 0s ease-in-out;
  }
  img {
    transition: 0s ease-in-out;
  }

  &:hover {
    background-color: #7300cc;
    border-radius: .5rem;
    cursor: pointer;
    color: #FFFFFF;

    svg {
      fill: #FFFFFF;
    }
  }
 }
}



&[data-top="false"]{
 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 border-radius: 0 0 2rem 2rem;
 background-color: #FFFFFF;
 padding: 0 0 0 2rem;

 .Logo {
  filter: none;
 }
.right {
 span {
  color: #5e5e5ec2;
  &:hover {
    color: #7300cc;
  }
 }
 button {
 border-radius: 0 0 2rem 0;
 }
}

.hover {
 top: 7rem;
}
}

@media (max-width: 450px){
  span{
   display: none;
  }
  .right{
     display: none;
  }
  justify-content: center;
  padding: 4rem 2rem;

  &[data-top="false"]{
 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 border-radius: 0 0 2rem 2rem;
 background-color: #FFFFFF;
 padding: 2rem;

 .Logo {
  filter: none;
 }
.right {
 span {
  color: #5e5e5ec2;
  &:hover {
    color: #7300cc;
  }
 }
 button {
 border-radius: 0 0 2rem 0;
 }
}

.hover {
 top: 7rem;
}

}
 
}
`