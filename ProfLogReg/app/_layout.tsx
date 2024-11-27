import { Slot, useRouter, useSegments } from 'expo-router';
import { useEffect, useState } from 'react';

export default function RootLayout() {
  const router = useRouter();
  const segments = useSegments();
  
  // Simulating authentication state; replace with real logic
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Redirect unauthenticated users to login
    if (!isAuthenticated && segments[0] !== 'auth') {
      router.replace('/auth/login');
    }

    // Redirect authenticated users away from auth pages
    if (isAuthenticated && segments[0] === 'auth') {
      router.replace('/auth/profile');
    }
  }, [segments, isAuthenticated]);

  return <Slot />;
}
