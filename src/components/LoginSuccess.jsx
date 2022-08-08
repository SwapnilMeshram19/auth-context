import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
export const LoginSuccess=()=>{
    const {token}=useContext(AuthContext)
    if(token){
        return (<h1>Login Success</h1>)
    }
}