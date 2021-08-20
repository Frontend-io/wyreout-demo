import React from 'react';
import { Button } from '@chakra-ui/react';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { IButton } from './types';

const WyreButton = ({ children, variant="default", ...props }:IButton):ReactJSXElement => {
  const types:any = {
    default: {
      bg: 'gray.50',
      color: 'gray.600',
    },
    outlined: {
      bg: 'transparent',
      color: '#BB29BB',
      border: '2px solid #BB29BB',
    },
    danger: {
      bg: 'red.500',
      color: 'white',
    },
    wyreBlue: {
      bg: '#6837EF',
      color: '#FFF',
    },
  };

  return (
    <Button
      color="#FFF"
      bg="#43C970"
      borderRadius="xl"
      p={{ base: '.3rem .8rem', md: '1rem 2rem' }}
      fontSize={{ base: 'x-small', lg: 'sm' }}
      _hover={{ opacity: .7 }}
      {...types[variant]}
      {...props}
    >
      {children}
    </Button>
  );
};

export default WyreButton;
