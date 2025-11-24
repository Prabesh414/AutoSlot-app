import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '../components/themed-text';
import { ThemedView } from '../components/themed-view';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="menu" size={28} color="#333" />
        <ThemedText type="title" style={styles.headerTitle}>Home</ThemedText>
        <TouchableOpacity onPress={() => router.push('/login')}>
          <ThemedText style={styles.loginBtn}>Login</ThemedText>
        </TouchableOpacity>
      </View>

      {/* Body */}
      <ScrollView contentContainerStyle={styles.body}>
        <Image source={require('../assets/images/Logo.png')} style={styles.logo} />
        <ThemedText style={styles.welcome}>Welcome to AutoSlot</ThemedText>

        {/* Dashboard Cards */}
        <View style={styles.card}>
          <Ionicons name="car-sport" size={38} color="#4CAF50" />
          <ThemedText style={styles.cardTitle}>Book New Service</ThemedText>
        </View>

        <View style={styles.card}>
          <Ionicons name="time" size={38} color="#4CAF50" />
          <ThemedText style={styles.cardTitle}>Upcoming Bookings</ThemedText>
        </View>

        <View style={styles.card}>
          <Ionicons name="construct" size={38} color="#4CAF50" />
          <ThemedText style={styles.cardTitle}>Service History</ThemedText>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    elevation: 6,
  },
  headerTitle: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', flex: 1 },
  loginBtn: { fontSize: 16, color: '#4CAF50', fontWeight: '600' },
  body: { padding: 20, alignItems: 'center' },
  logo: { width: 120, height: 120, marginBottom: 20, resizeMode: 'contain' },
  welcome: { marginBottom: 20, fontSize: 18, fontWeight: '600' },
  card: {
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 20,
    marginBottom: 20,
    elevation: 4,
    alignItems: 'center',
    width: '100%',
  },
  cardTitle: { marginTop: 10, fontSize: 16, fontWeight: '600' },
});
