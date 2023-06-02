import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRoute } from '@react-navigation/native';

import { Box,
    Center, 
    Button, 
    Divider, 
    Text,
    Input , 
    Select, 
    Checkbox,
    FormControl,
    TextArea,
    IconButton,
} from 'native-base'


export default function Catalogar(props){

    const [patrimonio, setPatrimonio] = useState("");
    const [IMEI, setImei] = useState("");
    const [Responsavel, setResponsavel] = useState("");
    const [lendoPatrimonio, setRead]  = useState(true);

    const route = useRoute();
    const { data } = route.params;
    
    useEffect(()=>{
            if(lendoPatrimonio===false)
                setImei(data);
            else
                setPatrimonio(data);
    },[data])
    
    async function encapsularDados()
    {
        const newData={
            patrimonio,
            IMEI,
            Responsavel
        }
        const response = await AsyncStorage.getItem("@catalagoDeTablets:tablets");
        const previousData = response ? JSON.parse(response): [];
        const data = [...previousData, newData];

        await AsyncStorage.setItem("@catalagoDeTablets:tablets", JSON.stringify(data));
        console.log(await AsyncStorage.getItem("@catalagoDeTablets:tablets"));
    }
     
    return(
        <Box flex={1} backgroundColor="FAFAFA" flexDir="column" alignContent="center" margin='5%'>    
            <Box >
                <Text fontSize="3xl" fontWeight={"bold"} textAlign="center"> Catalogar Tablet</Text>
                <Divider bg="emerald.600"/>
            </Box>   

            <Box flexDir="row" marginTop='3%'>
            <FormControl.Label marginRight="1">Patrimônio:</FormControl.Label>
                <Input placeholder="" flex={1}
                onChangeText={setPatrimonio}  
                alignContent="center" 
                justifyContent="center"
                
                >{patrimonio}</Input> 
                <IconButton size="md" icon={<Ionicons name="barcode" color="black" />} colorScheme="emerald" 
                onPress={()=> {setRead(true); props.navigation.navigate("Scan", route.name)}} ></IconButton>
            </Box>

            

            <Box flexDir="row" marginTop='3%'>
                <FormControl.Label marginRight="1">IMEI:</FormControl.Label>
                <Input placeholder="" flex={1}
                onChangeText={setImei}  
                alignContent="center" 
                justifyContent="center"
                >{IMEI}</Input>
                <IconButton size="md" icon={<Ionicons name="barcode" color="black" />} colorScheme="emerald" 
                onPress={()=> { setRead(false); props.navigation.navigate("Scan", route.name); }} ></IconButton>
            </Box>
            <Box flexDir="row"marginTop='3%' justifyContent='space-between'>
                <Text marginX={3} >Responsável pelo Tablet:</Text>
                <Select accessibilityLabel="Responsável" placeholder="Responsável" minWidth="150">
                    <Select.Item label="Aluno" value="student" />
                    <Select.Item label="Funcionário" value="func" />
                    <Select.Item label="Escola" value="school" />
                </Select>
            </Box>
            <Box padding={4} >
                <Text>Nome do Responsável :</Text>
                <Input placeholder="" 
                onChangeText={setResponsavel} 
                />
            </Box>
            <Box>
                <Center>
                    <Divider bg="emerald.600"  />      
                    <Text fontSize="2xl" fontWeight={"bold"}> Status</Text>
                </Center>
            </Box>

            {/* Status */}
            <Box flexDir="row" marginTop={2} justifyContent='space-between'>
                
                    <Text>Paradeiro :</Text>
                    <Select minWidth="100" >
                    <Select.Item label="Usuário" value="user" />
                    <Select.Item label="Escola" value="school" />
                    <Select.Item label="SME" value="SME" />
                    <Select.Item label="Sem Informação" value="noinfo" />
                </Select>
                
                <Box flexDir="row">
                    <Checkbox value="maintaince" accessibilityLabel="maintaince"> Manutenção </Checkbox>
                </Box>   
            </Box>


            {/* butão */}

            <Box  flex={1} alignItems='center' justifyContent="flex-end" alignContent='flex-end'>
                <Button width="80%" colorScheme="emerald" size="lg"
                onPress={encapsularDados}>
                    Catalogar</Button>
            </Box>
        </Box>
    );
}