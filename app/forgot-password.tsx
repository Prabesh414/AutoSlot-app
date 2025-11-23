// app/forgot-password.tsx
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

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleReset = () => {
    console.log('Reset password for:', email);
    // router.push('/login');
  };

  return (
    <ThemedView style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <View style={styles.innerBox}>
            <Image source={require('../assets/images/Logo.png')} style={styles.logo} />
            <ThemedText type="title" style={styles.title}>Forgot Password</ThemedText>
            <ThemedText style={styles.infoText}>The verification code will be sent to your email.</ThemedText>

            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <TouchableOpacity style={styles.button} onPress={handleReset}>
              <ThemedText style={styles.buttonText}>Reset Password</ThemedText>
            </TouchableOpacity>

            <View style={styles.linksContainer}>
              <TouchableOpacity onPress={() => router.push('/login')} activeOpacity={0.7}>
                <ThemedText style={styles.link}>Back to Login</ThemedText>
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
  innerBox: {
    width: '100%',
    maxWidth: 360,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  logo: { width: 120, height: 120, marginBottom: 20, resizeMode: 'contain', alignSelf: 'center' },
  title: { fontSize: 28, fontWeight: '700', marginBottom: 10, textAlign: 'center' },
  infoText: { fontSize: 14, color: '#555', textAlign: 'center', marginBottom: 15 },
  input: { width: '100%', borderWidth: 1, borderColor: '#ccc', borderRadius: 8, paddingHorizontal: 15, paddingVertical: 12, marginBottom: 15, fontSize: 16 },
  button: { width: '100%', backgroundColor: '#4CAF50', paddingVertical: 14, borderRadius: 8, alignItems: 'center', marginBottom: 15 },
  buttonText: { color: 'white', fontSize: 16, fontWeight: '600' },
  linksContainer: { flexDirection: 'row', justifyContent: 'center', width: '100%' },
  link: { color: '#00796B', textDecorationLine: 'underline', fontSize: 14 },
});
