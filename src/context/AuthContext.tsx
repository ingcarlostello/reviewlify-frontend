"use client";

// @React
import { createContext } from "react";

// @Interfaces
import { IAuthContextPros } from "@/interfaces/IAuth";

export const AuthContext = createContext<IAuthContextPros>({} as IAuthContextPros);
