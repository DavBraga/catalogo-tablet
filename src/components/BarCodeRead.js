import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button,  StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Vibration } from 'react-native';
import { Audio } from 'expo-av';
import { useRoute } from '@react-navigation/native';




export default function BarCodePage(props) {

  const [hasPermission, setHasPermission] = useState(null);
  const [scanning, setScanning] = useState(true);
  const [sound, setSound] = useState();
  const route = useRoute();
  let routename = route.params;

  
  async function playSound() {
    console.log('Carregando som...');
    const { sound } = await Audio.Sound.createAsync( require('../../assets/barcode.mp3')
    );
    setSound(sound);

    console.log('Tocando som...');
    await sound.playAsync();
  }



  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);


  const handleBarCodeScanned = ({ type, data }) => {
    Vibration.vibrate(100);
    playSound();
    setScanning(false);
    console.log("content "+data);
    props.navigation.navigate(routename, { data});
  };

  if (hasPermission === null) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Requesitando permissões de camera.</Text>
      </SafeAreaView>
    );
  }
  if (hasPermission === false) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Sem acesso a camera.</Text>
        <Button title='Retornar' onPress={()=>{props.navigation.navigate({routename}, { data: '0'})}}></Button>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar  style ='auto' />
      <Text style={styles.text}>Aponte para o código de barras.</Text> 
      {!scanning && 
      <View>
        <Button title={'Toque para escanear Dados.'} onPress={() =>{setScanning(true)} } color='#379263' />
      </View>
      }
      {scanning &&
        <View style={styles.contentContainer}>
        <BarCodeScanner
          onBarCodeScanned={!scanning ? undefined : handleBarCodeScanned}
           style ={StyleSheet.absoluteFillObject}
        />
         {/* {scanning && <Button title={'Toque para escanear novamente.'} onPress={() => setScanned(false)} color='#379263' />} */}
      </View> 
      }
      <Button  title='Retornar' color='#379263' onPress={()=>{props.navigation.navigate(routename, { data: '0'})}}></Button>
    
      <View style={styles.buttonContainer}>
       
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    
  },
});
