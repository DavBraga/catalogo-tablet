import React from "react";
import {NativeBaseProvider, Box, Center} from "native-base";
import Home from "./src/pages/home";
import Consultar from "./src/pages/consultar";
import Catalogar from "./src/pages/catalogar";
import Resultado from "./src/pages/resultado";



export default function App(){
  return(
    <NativeBaseProvider>
      <Resultado/>
    </NativeBaseProvider>
  );
}
