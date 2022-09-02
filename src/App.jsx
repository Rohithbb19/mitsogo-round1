import React from "react";
import { useMediaQuery } from 'react-responsive'
import IsDesktopOrLap from "./Isdesktoporlap";
import IsMobilOrTab from "./Ismobilortab";
import "./App.css";

function App() {
  let isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  });
 
  if(isDesktopOrLaptop){
    return(
      <IsDesktopOrLap></IsDesktopOrLap>
    )
  }
  
   return (
      <IsMobilOrTab></IsMobilOrTab>
   )

}

export default App;
