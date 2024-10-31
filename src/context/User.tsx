import { User } from "firebase/auth";
import React, { createContext, useState, useContext, ReactNode } from "react";
import { UserContextType } from "../interface";

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
    children: ReactNode;
}

function UserProvider({ children }: UserProviderProps) {
    const [user, setUser] = useState<User | undefined>(undefined);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

function useUser() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
}

export {
    UserProvider,
    useUser,
    UserContext
};
