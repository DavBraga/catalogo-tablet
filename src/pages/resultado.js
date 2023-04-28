import React from "react";
import {Box, Text, Divider, HStack, Button} from 'native-base';

export default function Resultado()
{
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
                    <Text>Value</Text>                 
                </Box>
                <Box flexDir="row">
                    <Text marginRight={1}>IMEI:</Text>
                    <Text>Value</Text>  
                </Box>
                <Box flexDir="row">
                    <Text marginRight={1}>Paradeiro do Tablet:</Text>
                    <Text>Value</Text>  
                </Box>   
                <Box>
                    <Text marginBottom={1} fontWeight="bold">Nome do Responsável</Text>
                    <Text>Value</Text>   
                </Box>
                <Box>
                    <Text marginY={2}>Observações:</Text>
                    <Text>Value</Text>  
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