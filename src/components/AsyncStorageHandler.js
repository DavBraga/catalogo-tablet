import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export async function RecuperarDados()
{   
    const queryKey =  JSON.parse(await AsyncStorage.getItem("@catalagoDeTablets:queryKey"));
    const response =JSON.parse(await asyncRecuperarDados());
    if(!response) return null;
    return Compare(response, queryKey);
}

async function ChecarSeJaCadastrado(dadosASeremBuscados)
{
    // TODO: Ainda não funciona.
    console.log("Dados a serem checados:"+ dadosASeremBuscados.patrimonio);
    const response =JSON.parse(await asyncRecuperarDados());
    if(!response) return false;
    console.log("Resultado do compare: " +Compare(response, dadosASeremBuscados));
     if(Compare(response, dadosASeremBuscados)!=null)
     {
        console.log("not null so true");
        return true;
     }
        
     console.log("do i arrive here?");
     return false;
}

function Compare(response ,queryKey)
{
    let av;

    for(element of response)
    {
        // SE A CHAVE DE BUSCA NULA, DESISTIR
        if(queryKey==null||queryKey== undefined) return null;

        // CHECK IMEI
        if(queryKey.IMEI != "")
        {
            if(element.IMEI== queryKey.IMEI)
            {
                av = element;
                return av;   
            }
        }

        // CHECK PATRIMONIO
        if(queryKey.patrimonio != "")
        {
            if(element.patrimonio== queryKey.patrimonio)
            {
                av = element;
                return av;   
            }
        }

        // CHECK RESPONSAVEL
        if(queryKey.Responsavel != "")
        {
            console.log(queryKey.Responsavel);
            if(element.Responsavel == queryKey.Responsavel)
            {
                av = element;
                return av;   
            }
        }
    }
    return null;
}

export function testFunction()
{
    return 500;
}

export async function TentarSalvarDados({patrimonio,IMEI,Responsavel})
{
    if(!{patrimonio,IMEI,Responsavel}) return false;
    //console.log("Tentar salvar dados. "+ await ChecarSeJaCadastrado({patrimonio,IMEI,Responsavel}));
    if(await ChecarSeJaCadastrado({patrimonio,IMEI,Responsavel})==true)
    {
        return "Falha!Tablet Já cadastrado."
    }
    
    const validacaoDeDados =ValidarDados({patrimonio,IMEI,Responsavel})
    if(validacaoDeDados===true)
    {
        SalvarDados({patrimonio,IMEI,Responsavel});
        return true;
    }
        
    else 
        return validacaoDeDados;


}

function SalvarDados(dadosASeremSalvos)
{
    console.log(dadosASeremSalvos);
    EncapsularDados(dadosASeremSalvos);
}
function ValidarDados(dados)
{
    if(!dados.patrimonio|| dados.patrimonio === undefined) return "Patrimônio invaldio";
    if(!dados.IMEI|| dados.IMEI=="" || dados.IMEI === undefined || dados.IMEI.length !=15 ) 
    {
        console.log(dados.IMEI);
        console.log(dados.IMEI.length);
        console.log( typeof(dados.IMEI));
        return "IMEI inváldio.";
    }
    
    return true;
}

export async function SalvarParametrosDeBusca(queryParam)
{
    await AsyncStorage.setItem("@catalagoDeTablets:queryKey", JSON.stringify(queryParam));
}



async function EncapsularDados(newData)
{
    const response = await AsyncStorage.getItem("@catalagoDeTablets:tablets");
    const previousData = response ? JSON.parse(response): [];
    const data = [...previousData, newData];

    await AsyncStorage.setItem("@catalagoDeTablets:tablets", JSON.stringify(data));
    console.log(await AsyncStorage.getItem("@catalagoDeTablets:tablets"));
}
// 
async function asyncRecuperarDados()
{
    try
    {
        const response =(await AsyncStorage.getItem("@catalagoDeTablets:tablets"));
        return response;
    }
    catch (error) {
        console.error('Error recuperando dados: ', error);
        throw error;
      } 
}