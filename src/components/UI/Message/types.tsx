import { AlertProps } from "@chakra-ui/react";
import { ReactElement } from "react";

interface IMessage extends AlertProps {
    title?:any;
    description?: string
    icon?: ReactElement
    dismissable?:boolean
}

export type {
    IMessage
}