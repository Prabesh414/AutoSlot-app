// app/login.tsx
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { ThemedText } from '../components/themed-text';
import { ThemedView } from '../components/themed-view';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login pressed:', email, password);
    // router.push('home'); // Navigate to Home
  };

  return (
    <ThemedView style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          {/* Title */}
          <ThemedText type="title" style={styles.title}>AutoSlot</ThemedText>
          <ThemedText style={styles.subtitle}>Book your vehicle servicing date in seconds</ThemedText>

          {/* Login Box */}
          <View style={styles.innerBox}>
            <Image
              source={require('../assets/images/Logo.png')}
              style={styles.logo}
            />

            <TextInput
              style={styles.input}
              placeholder="Email or Username"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <ThemedText style={styles.buttonText}>Login</ThemedText>
            </TouchableOpacity>

            <View style={styles.linksContainer}>
              <TouchableOpacity onPress={() => router.push('/forgot-password')}>
                <ThemedText style={styles.link}>Forgot Password?</ThemedText>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => router.push('/register')}>
                <ThemedText style={styles.link}>Register</ThemedText>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  outerContainer: { flex: 1, backgroundColor: '#f2f2f2' },
  scrollContainer: { flexGrow: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  container: { width: '100%', alignItems: 'center' },

  title: { fontSize: 36, fontWeight: 'bold', color: '#4CAF50', marginBottom: 5 },
  subtitle: { fontSize: 16, color: '#555', marginBottom: 20, textAlign: 'center' },

  innerBox: {
    width: '100%',
    maxWidth: 360,
    padding: 25,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
    alignItems: 'center',
  },

  logo: { width: 100, height: 100, marginBottom: 20, resizeMode: 'contain' },

  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 15,
    fontSize: 16,
  },

  button: {
    width: '100%',
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: { color: 'white', fontSize: 16, fontWeight: '600' },

  linksContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
  link: { color: '#00796B', textDecorationLine: 'underline', fontSize: 14 },
});
