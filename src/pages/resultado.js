import React, {useEffect, useState} from "react";
import {Box, Text, Divider, HStack, Button, useToast} from 'native-base';
import { useRoute } from "@react-navigation/native";

export default function Resultado()
{
    const [patrimonio, setPatrimonio] = useState("");
    const [IMEI, setImei] = useState("");
    const [Responsavel, setResponsavel] = useState("");
    const route = useRoute();
    let dadosDeResultado = route.params;
    const toast = useToast();

    function CarregarDados()
    {
        if(dadosDeResultado)
        AtualizarDadosExibidos(dadosDeResultado);
        else
        toast.show({description:"Tablet não encontrado!", placement:'top'});
    }

    function AtualizarDadosExibidos(resultado)
    {
       
        setPatrimonio(resultado.patrimonio);
        setImei(resultado.IMEI);
        setResponsavel(resultado.Responsavel);
    }
    useEffect(()=>{
       CarregarDados();
    },[])


    return(
        <Box flex={1} backgroundColor="FAFAFA" flexDir="column">
            <HStack padding={4} w="100%" alignContent="center" justifyContent="center" flexDir="row" safeArea >
                    <Box >
                        <Text fontSize="3xl" fontWeight={"bold"}> Resultado da Consulta</Text>
                        <Divider bg="emerald.600" />
                    </Box>
            </HStack>

            <Box padding={4}>
                <Box flexDir="row">
                    <Text marginRight={1}>Patrimônio:</Text> 
                    <Text fontWeight="bold">{patrimonio}</Text>                 
                </Box>
                <Box flexDir="row">
                    <Text marginRight={1}>IMEI:</Text>
                    <Text fontWeight="bold">{IMEI}</Text>  
                </Box>
                <Box flexDir="row">
                    <Text marginRight={1}>Paradeiro do Tablet:</Text>
                    <Text fontStyle="italic">Não implementado</Text>  
                </Box>   
                <Box>
                    <Text marginBottom={1}>Nome do Responsável</Text>
                    <Text fontWeight="bold">{Responsavel}</Text>   
                </Box>
                <Box>
                    <Text marginY={2}>Observações:</Text>
                    <Text fontStyle="italic">Não implementado</Text>  
                </Box>   
 
            </Box>
            <Box alignItems="center" justifyContent="center" height="100%" padding={1}>
                <Box flexDir="row">
                    <Button marginX={1} colorScheme="muted" disabled={true}>Editar</Button>
                    <Button marginX={1} colorScheme="muted" disabled={true}>Excluir</Button>
                </Box>
                
            </Box>
        </Box>
    );
}