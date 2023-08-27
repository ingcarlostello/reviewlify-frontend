import { Dispatch } from "react";

export interface IAuthProviderProps {
    children: JSX.Element | JSX.Element[];    
}

export interface IAuthState {
    email: string;
    userImage: string;
    userName: string;
}

export interface IAuthContextPros {
    authState: IAuthState;
    dispatch: any;
    errorMessage:string;
    setErrorMessage:any;
}

export interface ILoginCredentials {
    email:string;
    password:string;
}

