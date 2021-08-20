import { Box, Heading, HStack, Text, Stack } from '@chakra-ui/layout';
import { Avatar, IconButton, Tag } from '@chakra-ui/react';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import React from 'react';
import { FaBell, FaChevronDown } from 'react-icons/fa';
import { Logo } from 'src/assets';
import { ColorModeSwitcher } from 'src/ColorModeSwitcher';
import WyreContainer from '../UI/Container';

const Header = ():ReactJSXElement=> {
    
    return(
        <Box bg="#660066" as="header">
            <WyreContainer>
                <HStack 
                    justify="space-between" 
                    bg="#660066" 
                    py={{base:"1rem", md:"1rem"}} 
                    as="header">
                    <Logo boxSize={10} />
                    <Stack isInline spacing={8} align="center" justify="flex-end">
                        <Box mr={{base:0, lg:10}} pos="relative">
                            <Tag 
                                pos="absolute"
                                top={1}
                                bg="red.400"
                                right={1}
                                boxSize={2} 
                                minW={0} 
                                minH={0} 
                                p={0} 
                                borderRadius="full" />
                                <ColorModeSwitcher 
                                justifySelf="flex-end" />
                            <IconButton 
                                p={0} 
                                isRound
                                color="white"
                                bg="transparent" 
                                icon={<FaBell />}
                                fontSize={{base:"lg", md:"xl", lg:"2xl"}} 
                                aria-label="Notifications" 
                                _hover={{bg:"transparent"}} />
                        </Box>
                        <Stack 
                            isInline 
                            spacing={3} 
                            align="center" 
                            color="white">
                            <Box textAlign="right">
                                <Heading fontSize={{base:"xs", md:"md"}}>Jerryson Ibe</Heading>
                                <Text d={{base:"none", md:"block"}} mt={1} fontSize="x-small">View profile</Text>
                            </Box>
                            <Avatar src={''} name="Jerryson Ibe" size="sm" />
                            <Text color="white" opacity={.5}>
                                <FaChevronDown />
                            </Text>
                        </Stack>
                    </Stack>
                </HStack>
            </WyreContainer>
        </Box>
    )
}

export default Header