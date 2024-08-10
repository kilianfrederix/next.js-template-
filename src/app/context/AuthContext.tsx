// app/context/AuthContext.tsx
'use client';

import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';

// Definieer een interface voor de context waarde
interface AuthContextType {
  accessToken: string | null;
}

// Creëer de context met een initiële waarde van undefined.
// Dit forceert consumenten om binnen de AuthProvider gehuld te zijn.
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { accessTokenRaw } = useKindeBrowserClient();
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    setAccessToken(accessTokenRaw);
  }, [accessTokenRaw]);

  return (
    <AuthContext.Provider value={{ accessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('use Auth within AuthProvider please.');
  }
  return context;
};