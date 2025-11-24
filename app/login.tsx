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

  const handleLogin = () => router.push('/');

  return (
    <ThemedView style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <Image source={require('../assets/images/Logo.png')} style={styles.logo} />
          <ThemedText type="title" style={styles.title}>AutoSlot Login</ThemedText>

          <View style={styles.innerBox}>
            <TextInput style={styles.input} placeholder="Email or Username" value={email} onChangeText={setEmail} />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <ThemedText style={styles.buttonText}>Login</ThemedText>
            </TouchableOpacity>

            <View style={styles.linksContainer}>
              <TouchableOpacity onPress={() => router.push('/forgot-password')}>
                <ThemedText style={styles.link}>Forgot Password?</ThemedText>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => router.push('/register')}>
                <ThemedText style={styles.link}>Sign Up</ThemedText>
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
  scrollContainer: { flexGrow: 1, justifyContent: 'center', padding: 20 },
  container: { width: '100%', alignItems: 'center' },
  logo: { width: 100, height: 100, marginBottom: 20, resizeMode: 'contain' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#4CAF50', marginBottom: 20 },
  innerBox: { width: '100%', maxWidth: 360, padding: 25, backgroundColor: 'white', borderRadius: 20, shadowColor: '#000', shadowOpacity: 0.12, shadowRadius: 12, alignItems: 'center' },
  input: { width: '100%', borderWidth: 1, borderColor: '#ccc', borderRadius: 12, paddingHorizontal: 15, paddingVertical: 12, marginBottom: 15, fontSize: 16 },
  button: { width: '100%', backgroundColor: '#4CAF50', paddingVertical: 14, borderRadius: 12, alignItems: 'center', marginBottom: 10 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  linksContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
  link: { color: '#00796B', textDecorationLine: 'underline', fontSize: 14 },
});
