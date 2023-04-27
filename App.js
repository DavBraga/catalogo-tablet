import React from "react";
import {NativeBaseProvider, Box, Center} from "native-base";
import Home from "./src/pages/home";

export default function App(){
  return(
    <NativeBaseProvider>
      <Home/>
    </NativeBaseProvider>
  );
}
