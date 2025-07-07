import React, { createContext, useContext, useState } from "react";

interface User {
  id?: string;
  email?: string;
  name?: string;
  [key: string]: any;
}

interface AuthContextType {
  user: User | null;
  setAuth: (authUser: User | null) => void;
  setUserData: (userData: User) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  
  const setAuth = (authUser: User | null) => {
    setUser(authUser);
  };
  
  const setUserData = (userData: User) => {
    setUser({ ...user, ...userData });
  };

  return (
    <AuthContext.Provider value={{ user, setAuth, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};