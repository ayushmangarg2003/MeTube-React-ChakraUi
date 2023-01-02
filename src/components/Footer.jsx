import { Box, Button, Heading, HStack, Stack, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} p="16" color={'white'} >
        <Stack>
            <Stack direction={['column', 'column' , 'row']}  minH={'40'} w={'100%'} justifyContent={"space-between"} alignItems={"center"}> 
                <HStack alignItems={'center'}>
                    <Heading size={['sm' , 'md', 'lg']}>Subscribe To Our Newsletter</Heading>
                    <Button colorScheme={'purple'} >Signup</Button>
                </HStack>
                <VStack>
                    <Heading size={['md','lg']} >MeTube Corporation.</Heading>
                    <Heading size={'sm'} width="100%" textAlign={'center'} color={'gray.500'}>All Rights Reserved</Heading>
                </VStack>
            </Stack>
        </Stack>
    </Box>
  )
}

export default Footer
