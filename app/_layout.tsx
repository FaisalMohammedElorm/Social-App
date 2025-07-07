// app/_layout.tsx
import { AuthProvider } from '@/contexts/AuthContext';
import { Stack } from "expo-router";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useAuthInitializer } from '@/hooks/useAuthInitializer';
import 'react-native-url-polyfill/auto';

// Simple component that uses the hook
const AuthInitializer = ({ children }: { children: React.ReactNode }) => {
  useAuthInitializer();
  return <>{children}</>;
};

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <AuthInitializer>
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: "white" },
            }}
          />
        </AuthInitializer>
      </AuthProvider>
    </SafeAreaProvider>
  );
}