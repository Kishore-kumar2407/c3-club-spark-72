
import React, { createContext, useState, useEffect, useContext } from 'react';
import { supabase } from '@/lib/supabase';
import { Session } from '@supabase/supabase-js';

type AuthContextType = {
  session: Session | null;
  user: any | null;
  isRegistered: boolean;
  setIsRegistered: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  checkRegistration: (email: string) => Promise<boolean>;
};

const AuthContext = createContext<AuthContextType>({
  session: null,
  user: null,
  isRegistered: false,
  setIsRegistered: () => {},
  loading: true,
  checkRegistration: async () => false,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    const loadSession = async () => {
      // Check for stored session
      const storedSession = localStorage.getItem('c3_user_session');
      if (storedSession) {
        const userData = JSON.parse(storedSession);
        setUser(userData);
        setIsRegistered(true);
      }

      setLoading(false);
    };

    loadSession();
  }, []);

  // Check if a user is registered
  const checkRegistration = async (email: string): Promise<boolean> => {
    try {
      const { data, error } = await supabase
        .from('registrations')
        .select()
        .eq('email', email)
        .single();

      if (error) {
        console.error("Error checking registration:", error);
        return false;
      }

      return !!data;
    } catch (error) {
      console.error("Error checking registration:", error);
      return false;
    }
  };

  const value = {
    session,
    user,
    isRegistered,
    setIsRegistered,
    loading,
    checkRegistration,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
