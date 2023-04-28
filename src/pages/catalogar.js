import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Box,
    HStack, 
    Center, 
    Button, 
    Divider, 
    Text,
    Input , 
    Select, 
    Checkbox,
    TextArea} from 'native-base'

  

export default function Catalogar(){

    const [patrimonio, setPatrimonio] = useState("");
    const [IMEI, setImei] = useState("");
    const [Responsavel, setResponsavel] = useState("");

    async function encapsularDados()
    {
        const newData={
            patrimonio,
            IMEI,
            Responsavel
        }
        await AsyncStorage.setItem("@catalagoDeTablets:tablets", JSON.stringify(newData));
        console.log(await AsyncStorage.getItem("@catalagoDeTablets:tablets"));
    }
    return(
        <Box flex={1} backgroundColor="FAFAFA" flexDir="column">
            <HStack padding={4} w="100%" alignContent="center" justifyContent="center" flexDir="row" safeArea >
                <Box >
                    <Text fontSize="3xl" fontWeight={"bold"}> Catalogar Tablet</Text>
                    <Divider bg="emerald.600"/>
                </Box>
            </HStack>
            <Box>
                <Text padding={2} marginTop="1%" fontWeight="bold">
                    Novo Catalogado
                </Text>
            </Box>
            <Box flexDir="row" padding={2} marginTop="1%" >
                <Text marginX={3} >Patrimônio :</Text>
                <Input placeholder=""  width="50%"
                onChangeText={setPatrimonio}
                />
            </Box>
            <Box flexDir="row" padding={4} >
                <Text marginX={3} >IMEI :</Text>
                <Input placeholder="" width="70%"
                onChangeText={setImei}
                />
            </Box>
            <Box flexDir="row" padding={4} >
                <Text marginX={3} >Responsável pelo Tablet:</Text>
                <Select accessibilityLabel="Responsável" placeholder="Responsável" minWidth="150">
                    <Select.Item label="Aluno" value="student" />
                    <Select.Item label="Funcionário" value="func" />
                    <Select.Item label="Escola" value="school" />
                </Select>
            </Box>
            <Box padding={4} >
                <Text>Nome do Responsável :</Text>
                <Input placeholder="" width="90%"
                onChangeText={setResponsavel} 
                />
            </Box>
            <Box>
                <Center>
                    <Divider bg="emerald.600" width ="90%" />      
                    <Text fontSize="2xl" fontWeight={"bold"}> Status</Text>
                </Center>
            </Box>
            <Box flexDir="row" marginTop={2}>
                <Box marginX={4} >
                    <Text>Paradeiro :</Text>
                    <Select minWidth="100" >
                    <Select.Item label="Aluno" value="student" />
                    <Select.Item label="Escola" value="school" />
                    <Select.Item label="SME" value="SME" />
                    <Select.Item label="Sem Informação" value="noinfo" />
                </Select>
                </Box>
                <Box flexDir="row">
                    <Checkbox value="maintaince" accessibilityLabel="maintaince"> Manutenção </Checkbox>
                </Box>   
            </Box>
            <Box alignItems="center" padding={1} marginTop={2}>
                <Text>Observações/Ocorrências</Text>
                <TextArea h={20} width="90%"></TextArea>
            </Box>
            <Box alignItems="center" justifyContent="flex-end">
                <Button width="80%" colorScheme="emerald" size="lg"
                onPress={encapsularDados}>
                    Catalogar</Button>
            </Box>
        </Box>
    );
}