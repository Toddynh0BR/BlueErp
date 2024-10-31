import styled from "styled-components";

import Image from "../assets/logoAmazonMarketplace.jpg";

export const Container = styled.div`

`

export const SubHeader = styled.div`
height: 30rem;
width: 100%;

padding-top: 5rem;

justify-content: center;
flex-direction: column;
align-items: center;
text-align: center;
display: flex;
gap: 2rem;

background: rgb(0,0,198);
background: linear-gradient(120deg, rgba(0,0,198,1) 0%, rgba(115,0,204,1) 100%);

h2 {
 font-size: 3.3rem;
 color: #FFFFFF;
}

span {
 font-size: 1.7rem;
 color: #FFFFFF;
}

.Logo {
 max-width: 35rem;
 min-width: 15rem;
 width: 30vw;
 height: 8rem;
    
 background-image: url(${Image});
 background-repeat: no-repeat;
 background-position: center;
 background-color: #fff;
 background-size: 50%;

 border: 1px solid rgba(115,0,204,1);
 border-radius: 10rem;
 margin: 0 auto;
 margin-bottom: -12.5rem;
}
`

export const Main = styled.main`
min-height: 90vh;
width: 100%;

padding: 5rem 30rem;

flex-direction: column;
display: flex;
gap: 2rem;

span {
 font-size: 1.6rem;
 font-weight: 600;
 color: #7300cc;

 text-align: center;
}

p {
 font-size: 1.3rem;
 color: #636363c2;
}
`