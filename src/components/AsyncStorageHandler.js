import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export async function RecuperarDados()
{   
    const queryKey =  JSON.parse(await AsyncStorage.getItem("@catalagoDeTablets:queryKey"));
    const response =JSON.parse(await asyncRecuperarDados());
    return Compare(response, queryKey);

    // try
    // {
    //     if(queryKey.IMEI != "")
    //     {
    //         const previousData = response ? JSON.parse(response) : [];
    //         previousData.forEach(element => {
    //             if(element.IMEI == queryKey.IMEI) 
    //             {
    //                 console.log('found');
    //                 return "element";
    //         }
    //         });
    //     }
    //     if(queryKey.patrimonio != "")
    //     {
    //         const previousData = response ? JSON.parse(response) : [];
    //         previousData.forEach(element => {
    //         if(element.patrimonio == queryKey.patrimonio)
    //         {
    //             console.log('found');
    //             return "element";
                
    //         }
    //         });
    //     }
    //     else if(queryKey.Responsavel != "")
    //     {
    //         const previousData = response ? JSON.parse(response) : [];
    //         previousData.forEach(element => {
    //             if(element.Responsavel == queryKey.Responsavel) 
    //             {
    //                 console.log('found');
    //                 return "element";
    //         }
    //         });
    //     }
    // }catch(error)
    // {
    //     console.log("falha ao recuperar dados:"+ error);
    //     throw error;
    // }
            // if(queryKey == null) return ;
        
            // else if(queryKey.IMEI != "")
            // {
            //     const previousData = response ? JSON.parse(response) : [];
            //     previousData.forEach(element => {
            //         if(element.IMEI == queryKey.IMEI) 
            //         {
            //             console.log(element);
            //     }
            //     });
            // }
        
            // if(queryKey.patrimonio != "")
            // {
            //     const previousData = response ? JSON.parse(response) : [];
            //         previousData.forEach(element => {
            //         if(element.patrimonio == queryKey.patrimonio)
            //         {
            //             console.log(element);
                        
            //         }
            //     });
        
            // }
            // else if(queryKey.Responsavel != "")
            // {
            //     const previousData = response ? JSON.parse(response) : [];
            //     previousData.forEach(element => {
            //         if(element.Responsavel == queryKey.Responsavel) 
            //         {
            //             console.log(element);
            //     }
            //     });
            // }

}

function Compare(response ,queryKey)
{
    let av;
    response.forEach(element => {
        if(element.patrimonio== queryKey.patrimonio)
        {
            av = element;   
        }
    });
    return av;
}

export function testFunction()
{
    return 500;
}

export function SalvarDados(dadosASeremSalvos)
{
    console.log(dadosASeremSalvos);
    EncapsularDados(dadosASeremSalvos);
}

export function SalvarParametrosDeBusca(parametrosDeBusca)
{
    saveQueryParam(parametrosDeBusca);
}


async function saveQueryParam(queryParam)
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