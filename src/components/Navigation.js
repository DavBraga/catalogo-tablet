import React from "react";
import {createStackNavigator} from '@react-navigation/stack'
import Catalogar from "../pages/catalogar";
import Home from "../pages/home";
import Consultar from "../pages/consultar";
import Resultado from "../pages/resultado";
import BarCodePage from "./BarCodeRead";

const Stack = createStackNavigator();

export default function Navigation(props){
    return(
        <Stack.Navigator initialRouteName="home" >
            <Stack.Screen name = "home" component={Home}/>
            
            <Stack.Screen name = "Catalogar" component={Catalogar}/>
            
            <Stack.Screen name = "Consultar" component={Consultar}/>
            
            <Stack.Screen name = "Resultado" component={Resultado}/>
            <Stack.Screen name = "Scan" component={BarCodePage} options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
}