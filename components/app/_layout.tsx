import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayout() {
  return (
    <Stack>
      {/* Login is first */}
      <Stack.Screen name="login" options={{ headerShown: false }} />
      {/* Home screen after login */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
