// style.js
import styled from "styled-components";

export const Mouser = styled.div`
  position: absolute;
  width: 4rem;
  height: 4rem;
  background-color: rgba(112, 0, 204, 0.411);
  border-radius: 50%; 
  pointer-events: none; 
  transition: transform 0.1s ease, background-color 0.3s ease; /* Adicionando transição suave para a cor */
  z-index: 100;

  &[data-cursor="true"] {
    background-color: rgba(112, 0, 204, 0.76);  
  }
`;
