import React from 'react';
import {Box,
    Text, 
    HStack, 
    Divider, 
    Input,
    Button,
} from 'native-base';
export default function Consultar()
{
    return(
        <Box flex={1} backgroundColor="FAFAFA" flexDir="column">
            <HStack padding={4} w="100%" alignContent="center" justifyContent="center" flexDir="row" safeArea >
                <Box >
                    <Text fontSize="3xl" fontWeight={"bold"}> Consultar Tablet</Text>
                    <Divider bg="emerald.600"/>
                </Box>
            </HStack>
            <Box padding={4}>
                <Box>
                    <Text fontWeight="bold">Preencha um dos campos : </Text>                  
                </Box>
                <Box>
                    <Text>Patrimônio</Text>
                    <Input placeholder="" width="90%" />
                </Box>
                <Box>
                    <Text>IMEI</Text>
                    <Input placeholder="" width="90%" />
                </Box>
                <Box>
                    <Text>Nome do Responsável</Text>
                    <Input placeholder="" width="90%" />
                </Box>      
            </Box>
            <Box alignItems="center" justifyContent="center" height="100%">
                <Button colorScheme="emerald">Consultar</Button>
            </Box>
                
        </Box>     
    );
}