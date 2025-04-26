export interface RegisterUserData{
    name: string;
    email: string;
    password: string;
}

export interface LoginUserData{
    email: string;
    password: string;
}

export interface AuthContextInterface{
    registerUser: (data: RegisterUserData) => void;
    loginUser: (data: LoginUserData) => void;
    user: User | null;
    isLoged: boolean;
}

export interface UserFormData extends RegisterUserData{
    confirmPassword: string;
}

export interface User{
    id: number;
    name: string;
    email: string;
}