import * as S from "./style";
import { useState, useEffect } from "react";

export function Preload(){
    const [showFallback, setShowFallback] = useState(true);

    useEffect(() => {
  
      const timer = setTimeout(() => {
        setShowFallback(false); 
      }, 2000);
  
      return () => clearTimeout(timer);
    }, []);

    if (showFallback) {
        return(
            <S.Container>
             <div className="loader">
             
             </div>
            </S.Container>
        );
    } else {
        return null;
    }

};
    