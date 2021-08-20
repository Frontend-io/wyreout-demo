import React from 'react'
import { Box, Text, Heading, HStack, Stack, Divider, useColorModeValue } from "@chakra-ui/react"
import Header from '../Header'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import WyreContainer from '../UI/Container'
import { ISidebarProps } from './types'
import { HomeIcon } from 'src/assets'

const SideBar = ({ title, description }:ISidebarProps)=> {

    return(
        <Box
            py={{base:"0", md:"1.5rem", lg:"2.5rem"}}  
            d={{base:"none", md:"block"}}>
            <Box color="#660066" minW="250px">
                <Heading fontSize="3xl">My Transactions</Heading>
                <Text fontSize="xs" mt={2}>welcome Jerry, see your transactions log</Text>
            </Box>
            <HStack 
                mt={10} 
                spacing={5} 
                color="white" 
                bg="#660066" 
                borderRadius="md" 
                boxShadow="md" 
                p={{base:"1rem", md:" 1rem 2rem"}}>
                <Heading>
                    <HomeIcon boxSize={7} />
                </Heading>
                <Divider orientation="vertical" borderColor="gray.400" py={4} />
                <Box>
                    <Heading fontSize="md">$ to N</Heading>
                    <Stack opacity={.9} mt={2} align="center" isInline spacing={3}>
                        <Text m={0} fontSize="xs">80%</Text>
                        <Divider orientation="vertical" borderColor="gray.400" py={1} />
                        <Text m={0} fontSize="xs">2hrs Left</Text>
                    </Stack>
                </Box>
            </HStack>
        </Box>
    )
}

const DashboardLayout = ({ children }:any):ReactJSXElement=> {

    return(
        <React.Fragment>
            <Header />
            <Box as="main" minH="100vh" bg={useColorModeValue("gray.50", "gray.900")}>
                <WyreContainer p={{base:"0"}} pr="0 !important">
                    <HStack
                        py={{base:"0", md:"1.5rem", lg:"2.5rem"}} 
                        pt="0 !important"
                        spacing={{base:0, md:"2rem"}} align="flex-start">
                        <SideBar title="" description="" />
                        <Box 
                            w="full" 
                            pb="20rem" 
                            h="100vh"
                            overflowY="auto" 
                            pt={{base:"0", md:"1.5rem", lg:"2.5rem"}} 
                            pr={{base:"0", md:"2rem", lg:"3rem"}}>
                            {children}
                        </Box>
                    </HStack>
                </WyreContainer>
            </Box>
        </React.Fragment>
    )
}

export default DashboardLayout