import React from 'react';
import {
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { IMessage } from './types';

const WyreMessage = (props:IMessage)=> (
  <Alert borderRadius="lg" bg="rgb(187, 41, 187, .3)" p={{base:"1rem", md:"2rem 3rem"}} status={props.status} {...props}>
    <Box>
      {props.icon || <AlertIcon />}
    </Box>
    <Box ml={{base:3, md:10}}>
      <AlertTitle mr={2} fontSize={{ base: 'md', md: 'lg' }}>
        {props.title}
      </AlertTitle>
      <AlertDescription 
        lineHeight="1" 
        color={useColorModeValue("black","gray.200")} 
        mt=".5rem" 
        fontSize={{ base: 'xs', md: 'sm' }}>
        {props.description} {props.children}
      </AlertDescription>
    </Box>
    {props.dismissable ? (
      <CloseButton position="absolute" right="8px" top="8px" />
    ) : null}
  </Alert>
)

export default WyreMessage;
