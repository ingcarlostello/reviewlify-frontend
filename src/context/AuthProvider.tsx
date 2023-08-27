"use client"
import { useReducer, useState } from "react";

// @Next Auth
import { SessionProvider } from "next-auth/react"

// @context
import { AuthContext } from "./AuthContext";

// @Reducer
import { authReducer } from "./AuthReducer";

// @Interfaces
import { IAuthProviderProps, IAuthState } from "@/interfaces/IAuth";

const AUTH_INITIAL_STATE: IAuthState = {
    email: "",
    userImage: "",
    userName: "",
};

const AuthProvider = ({ children }: IAuthProviderProps) => {
    const [authState, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);
    const [errorMessage, setErrorMessage] = useState<string>('');

    return (
        <AuthContext.Provider
            value={{
                authState,
                dispatch,
                errorMessage,
                setErrorMessage,
            }}
        >
   
                {children}
     
        </AuthContext.Provider>
    );
};

export default AuthProvider;
