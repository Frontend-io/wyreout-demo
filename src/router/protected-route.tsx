
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { IRoute } from './types';
    
const ProtectedRoute = ({ children, ...rest }: IRoute) => {

    return (
        <Route {...rest} 
            render={
            ({ location }:any) => true ? (children) : (
            <Redirect
                to={{
                pathname: '/login',
                state: {
                    from: location,
                },
                }}
            />
            )
        }
        />
    )
};

export default ProtectedRoute;