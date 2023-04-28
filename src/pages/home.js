import React from 'react'

import { Box,HStack, Center, Button, Divider, Text,} from 'native-base'

export default function Home(){
    return(
        <Box flex={1} backgroundColor="FAFAFA" flexDir="column">
            <HStack padding={4} w="100%" alignContent="center" justifyContent="center" flexDir="row" safeArea >
                    <Box >
                        <Text fontSize="3xl" fontWeight={"bold"}> Catálogo de Tablets</Text>
                        <Divider bg="emerald.600" />
                    </Box>
            </HStack>
            <Center height="80%"  alignItems="center" justifyContent="center">
                <Box justifyItems="center" >
                    <Button colorScheme="emerald" size="lg" >
                        Catalogar Tablet
                    </Button>
                    <Button colorScheme="emerald" marginTop ="3%" size="lg">
                        Consultar Tablet
                    </Button>
                    <Button colorScheme="muted" disabled={true} marginTop ="3%" size="lg">
                        Carregar/Exportar .CSV
                    </Button>
                </Box>
            </Center>
        </Box>
    );
}