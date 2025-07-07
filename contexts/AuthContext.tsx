import React, { createContext, useContext, useState, useCallback } from "react";

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
  
  // Use useCallback to create stable function references
  const setAuth = useCallback((authUser: User | null) => {
    setUser(authUser);
  }, []);
  
  const setUserData = useCallback((userData: User) => {
    setUser(prevUser => ({ ...prevUser, ...userData }));
  }, []);

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = React.useMemo(() => ({
    user,
    setAuth,
    setUserData
  }), [user, setAuth, setUserData]);

  return (
    <AuthContext.Provider value={contextValue}>
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