"use client";

import { loginUserService, registerUserService } from "@/services/auth.service";
import { AuthContextInterface, LoginUserData, RegisterUserData } from "@/types/auth";
import { useRouter } from "next/navigation";
import React,{ createContext, useContext } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext<AuthContextInterface>({} as AuthContextInterface);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    
    const router = useRouter();

    const registerUser = async (data: RegisterUserData) => 
    {
        try
        {
            const response = await registerUserService(data);
            localStorage.setItem("@token", JSON.stringify(response.accessToken));
            toast.success("Cadastro realizado com sucesso!");
            router.push("/login");
        }  
        catch (error: any) 
        {
            toast.error(error.response.data);
        }  
        
    };

    const loginUser = async (data: LoginUserData) => 
    {
        try
        {
            const response = await loginUserService(data);
            console.log(response);
            localStorage.setItem("@token", JSON.stringify(response.accessToken));
            router.push("/");
            toast.success("Login realizado com sucesso!");
        }
        catch (error: any) 
        {
            toast.error(error.response.data);
        }
    };
    
    return (
        <AuthContext.Provider value={{registerUser, loginUser}}>{children}</AuthContext.Provider>
    );
};

export const  useAuth = () => useContext(AuthContext);

export default AuthProvider;