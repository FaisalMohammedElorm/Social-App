import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'expo-router';
import { useCallback, useEffect, useRef } from 'react';

export const useAuthInitializer = () => {
  const { setAuth, setUserData } = useAuth();
  const router = useRouter();
  const initialized = useRef(false);
  const subscriptionRef = useRef<any>(null);

  // Memoize the initialization function
  const initializeAuth = useCallback(async () => {
    if (initialized.current) return;
    
    try {
      const { data: { session } } = await supabase.auth.getSession();
      console.log('Initial session:', session?.user);
      
      if (session?.user) {
        setAuth(session.user);
        setUserData(session.user);
        console.log('User found, auth state updated');
      } else {
        console.log('No user found, staying on current page');
        setAuth(null);
      }
      
      initialized.current = true;
    } catch (error) {
      console.log('Error getting initial session:', error);
      setAuth(null);
      initialized.current = true;
    }
  }, [setAuth, setUserData]); 

  // Memoize the auth state change handler
  const handleAuthStateChange = useCallback((event: string, session: any) => {
    console.log('Auth event:', event, 'User:', session?.user?.id);
    
    if (session?.user) {
      setAuth(session.user);
      setUserData(session.user);
      console.log('User authenticated, navigating to home...');
      router.replace('/(main)/home');
    } else {
      console.log('User signed out, navigating to welcome...');
      setAuth(null);
      router.replace('/welcome');
    }
  }, [setAuth, setUserData, router]);

  useEffect(() => {
    // Initialize auth with a small delay to avoid navigation conflicts
    const timer = setTimeout(initializeAuth, 50);

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(handleAuthStateChange);
    subscriptionRef.current = subscription;

    return () => {
      clearTimeout(timer);
      if (subscriptionRef.current) {
        subscriptionRef.current.unsubscribe();
      }
    };
  }, [initializeAuth, handleAuthStateChange]);
};

// Alternative: If you still have issues, remove all dependencies from useEffect
export const useAuthInitializerStable = () => {
  const { setAuth, setUserData } = useAuth();
  const router = useRouter();
  const initialized = useRef(false);
  const subscriptionRef = useRef<any>(null);

  useEffect(() => {
    // Initialize auth function
    const initializeAuth = async () => {
      if (initialized.current) return;
      
      try {
        const { data: { session } } = await supabase.auth.getSession();
        console.log('Initial session:', session?.user);
        
        if (session?.user) {
          setAuth(session.user);
          setUserData(session.user);
          console.log('User found, auth state updated');
        } else {
          console.log('No user found, staying on current page');
          setAuth(null);
        }
        
        initialized.current = true;
      } catch (error) {
        console.log('Error getting initial session:', error);
        setAuth(null);
        initialized.current = true;
      }
    };

    // Auth state change handler
    const handleAuthStateChange = (event: string, session: any) => {
      console.log('Auth event:', event, 'User:', session?.user?.id);
      
      if (session?.user) {
        setAuth(session.user);
        setUserData(session.user);
        console.log('User authenticated, navigating to home...');
        router.replace('/(main)/home');
      } else {
        console.log('User signed out, navigating to welcome...');
        setAuth(null);
        router.replace('/welcome');
      }
    };

    // Initialize auth with a small delay to avoid navigation conflicts
    const timer = setTimeout(initializeAuth, 50);

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(handleAuthStateChange);
    subscriptionRef.current = subscription;

    return () => {
      clearTimeout(timer);
      if (subscriptionRef.current) {
        subscriptionRef.current.unsubscribe();
      }
    };
  }, []); // Empty dependency array - runs only once
};