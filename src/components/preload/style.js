import styled from "styled-components";

export const Container = styled.div`
 height: 100%;
 width: 100%;
 
 position: fixed;
 z-index: 9999;
 left: 0;
 top: 0;
 
 justify-content: center;
 align-items: center;
 display: flex;
 
 background: #ffffff;

 .loader {
  height: 8rem;
  width: 8rem;

  border: .4rem solid #8f00fc;
  border-top: .4rem solid #ffffff ;
  border-bottom: .4rem solid #ffffff ;
  border-radius: 50%;

  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`