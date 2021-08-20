import { ButtonProps } from "@chakra-ui/react";

interface IButton extends ButtonProps {
    children:any;
    variant?: string
}

export type {
    IButton
}