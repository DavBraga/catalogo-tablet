import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Box,
    Text, 
    Divider, 
    Input,
    Button,
    IconButton,
} from 'native-base';
export default function Consultar(props)
{
    const [patrimonio, setPatrimonio] = useState("");
    const [IMEI, setImei] = useState("");
    const [Responsavel, setResponsavel] = useState("");
    const [lerCodigo, setLerCodigo] = useState(false);

    const route = useRoute();

    async function saveQueryParam()
    {
        const queryParam={
            patrimonio,
            IMEI,
            Responsavel
        }
        await AsyncStorage.setItem("@catalagoDeTablets:queryKey", JSON.stringify(queryParam));
    }

    useEffect(()=>{
        const {data} = route.params;
       if(lerCodigo=== false) return;
       setLerCodigo(false);
        if(data == '0')
        {
            return;
        } 
        if(data.length!=15)
        {
            console.log("buscando pelo patrimônio");
            setImei("");
            setResponsavel("");
            setPatrimonio(data);   

            return;
        }
        console.log("buscando pelo IMEI: "+ data);
        setImei(data);
        setResponsavel("");
        setPatrimonio("");

    })

    return(
        <Box flex={1} backgroundColor="FAFAFA" flexDir="column" margin='5%'>
                <Box >
                    <Text fontSize="3xl" fontWeight={"bold"} textAlign='center'> Consultar Tablet</Text>
                    <Divider bg="emerald.600"/>
                </Box>
            <Box >
                <Box margin='3%'>
                    <Text fontWeight="bold">Preencha um dos campos : </Text>                  
                </Box>
                <Box>
                    <Text>Patrimônio</Text>
                    <Input placeholder="" width="95%" onChangeText={setPatrimonio}>
                    {patrimonio}
                    </Input>
                </Box>
                <Box>
                    <Text>IMEI</Text>
                    <Input placeholder="" width="95%" onChangeText={setImei}>
                    {IMEI}
                    </Input>
                </Box>
                <Box>
                    <Text>Nome do Responsável</Text>
                    <Input placeholder="" width="95%" onChangeText={setResponsavel}>
                    {Responsavel}
                    </Input>
                </Box>      
            </Box>

            <Box flex={1} alignItems='center' justifyContent="flex-end" alignContent='flex-end'>
            <IconButton size="md" icon={<Icon name="qr-code" color="black" />} colorScheme="emerald" 
                onPress={()=> {setLerCodigo(true); props.navigation.navigate("Scan", route.name); }} ></IconButton>
            </Box>

            <Box flex={1} alignItems='center' justifyContent="flex-end" alignContent='flex-end'>
                <Button colorScheme="emerald" size="lg"
                onPress={()=> {saveQueryParam();  props.navigation.navigate("Resultado");}}
                
                >Consultar</Button >
            </Box>
                
        </Box>     
    );
}