export interface User {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
}

export interface InfrastructureState {
    user?: User;
    error: boolean;
}

