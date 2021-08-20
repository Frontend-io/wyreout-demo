import { RouteProps } from 'react-router-dom';

interface IRoute extends RouteProps {
    isProtected?: boolean;
    children:any
}

export type {
    IRoute
}