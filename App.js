import React from "react";
import { SafeAreaView } from "react-native";
import {NativeBaseProvider, Box, Center} from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/components/Navigation";



export default function App(){
  return(
      <NavigationContainer>
        <NativeBaseProvider>
          <Navigation/>
        </NativeBaseProvider>
      </NavigationContainer>
  );
}
