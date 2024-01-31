// UserContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase.tsx';
interface UserContextProps {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<any>;
  signOut: () => Promise<void>;
  signUp: (email: string, password: string) => Promise<any>;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const useUser = (): UserContextProps => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
type ProviderProps = {
  children: React.ReactNode
}
export const UserProvider = (props: ProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signIn = async (email: string, password: string): Promise<any> => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = async (): Promise<void> => {
    return signOut(auth);
  };

  const signUp = async (email: string, password: string): Promise<any> => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const value = {
    user,
    loading,
    signIn,
    signOut: signOutUser,
    signUp,
  };

  return <UserContext.Provider value={value}>{props.children}</UserContext.Provider>;
};
