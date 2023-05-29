import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
        
       // currentRoute = props.navigation.getCurrentRoute();
    })
    
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
        <Box flex={1} backgroundColor="FAFAFA" flexDir="column" alignContent="center" margin="5%">    
            <Box margin={4}>
                <Text fontSize="3xl" fontWeight={"bold"} textAlign="center"> Catalogar Tablet</Text>
                <Divider bg="emerald.600"/>
            </Box>   

            <Box flexDir="row" margin={1}>
            <FormControl.Label marginRight="1">Patrimônio:</FormControl.Label>
                <Input placeholder="" flex={1}
                onChangeText={setPatrimonio}  
                alignContent="center" 
                justifyContent="center"
                marginX="1"
                >{patrimonio}</Input> 
                <IconButton size="md" icon={<Icon name="qr-code" color="black" />} colorScheme="emerald" 
                onPress={()=> {setRead(true); props.navigation.navigate("Scan", route.name)}} ></IconButton>
            </Box>
            <Box flexDir="row" margin={1} >
                <FormControl.Label marginRight="1">IMEI:</FormControl.Label>
                <Input placeholder="" flex={1}
                onChangeText={setImei}  
                alignContent="center" 
                justifyContent="center"
                marginX="1"
                >{IMEI}</Input>
                <IconButton size="md" icon={<Icon name="qr-code" color="black" />} colorScheme="emerald" 
                onPress={()=> {setRead(false); props.navigation.navigate("Scan", route.name); }} ></IconButton>
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
            <Box alignItems="center" padding={1} marginTop={2} safeArea>
                <Text>Observações/Ocorrências</Text>
                <TextArea h={20} width="90%" ></TextArea>
            </Box>
            <Box alignItems="center" justifyContent="flex-end">
                <Button width="80%" colorScheme="emerald" size="lg"
                onPress={encapsularDados}>
                    Catalogar</Button>
            </Box>
        </Box>
    );
}