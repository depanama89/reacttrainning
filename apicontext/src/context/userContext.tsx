import React, { useContext } from "react";
import { createContext, useState, type ReactNode } from "react";
interface User {
  id: number;
  name: string;
  email: string;
}

export interface UserContextType {
  user: User | null;
  login: (userDate: User) => void;
  logout: () => void;
}

//j'utilise undefined juste pour faire la difference de l'origine d'ou provient l'erreur
const UserContext = createContext<UserContextType | undefined>(undefined);

interface userProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<userProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    console.log("Utilisateur connecter", userData.name);

    setUser(userData);
  };

  const logout = () => {
    console.log("L'utilisateur est deconnecté");
    setUser(null);
  };
  const context: UserContextType = {
    user,
    login,
    logout,
  };
 return (
  
    <UserContext.Provider value={context}>
      {children}
    </UserContext.Provider>
  );
};

export const useAuth=()=>{

 const context= useContext(UserContext)
 if(context === undefined){
  throw new Error("useAuth must be used within an AuthProvider")
 }

 return context
}
