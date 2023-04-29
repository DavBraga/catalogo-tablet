import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Box,
    Text, 
    HStack, 
    Divider, 
    Input,
    Button,
} from 'native-base';
export default function Consultar(props)
{
    const [patrimonio, setPatrimonio] = useState("");
    const [IMEI, setImei] = useState("");
    const [Responsavel, setResponsavel] = useState("");

    async function saveQueryParam()
    {
        const queryParam={
            patrimonio,
            IMEI,
            Responsavel
        }
        await AsyncStorage.setItem("@catalagoDeTablets:queryKey", JSON.stringify(queryParam));
        props.navigation.navigate("Resultado");
    }

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
                    <Input placeholder="" width="90%" onChangeText={setPatrimonio}/>
                </Box>
                <Box>
                    <Text>IMEI</Text>
                    <Input placeholder="" width="90%" onChangeText={setImei}/>
                </Box>
                <Box>
                    <Text>Nome do Responsável</Text>
                    <Input placeholder="" width="90%" onChangeText={setResponsavel}/>
                </Box>      
            </Box>
            <Box alignItems="center" justifyContent="center" height="80%">
                <Button colorScheme="emerald" size="lg"
                onPress={saveQueryParam}
                
                >Consultar</Button >
            </Box>
                
        </Box>     
    );
}