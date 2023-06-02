import React, {useState, useEffect} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Box, Text, Divider, HStack, Button,} from 'native-base';
import { RecuperarDados,SalvarDados,BuscarDado,SalvarParametrosDeBusca } from '../components/AsyncStorageHandler';


export default function Resultados()
{
    

    function test()
    {
        const newData= {
                patrimonio : "123",
                IMEI : "456",
                Responsavel :"tester"
            }
            SalvarDados(newData);

    }
    test();
    
    return (

            <Box flex={1}  alignItems="center"   margin="5%">
            <Text>Resultados</Text>
            
            </Box>
    );
}