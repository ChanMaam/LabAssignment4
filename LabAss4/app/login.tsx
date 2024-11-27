import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    alert('Login successful');
    router.replace('/(tabs)/profile'); // Redirect to Profile after login
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineLarge" style={styles.title}>Login</Text>
      <TextInput
        label="Username"
        value={username}
        onChangeText={setUsername}
        mode="outlined"
        style={styles.input}
        theme={{ colors: { primary: '#E8B86D' } }}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        mode="outlined"
        style={styles.input}
        theme={{ colors: { primary: '#E8B86D' } }}
      />
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Log In
      </Button>
      <TouchableOpacity onPress={() => router.push('/register')}>
        <Text style={styles.linkText}>Don't have an account? Register here</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 20, 
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 10 },
  },
  title: { 
    marginBottom: 30, 
    textAlign: 'center', 
    fontWeight: 'bold', 
    fontSize: 32, 
    color: '#333' 
  },
  input: { 
    marginBottom: 20, 
    borderRadius: 8, 
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  button: { 
    marginTop: 20, 
    backgroundColor: '#E8B86D', 
    borderRadius: 8,
  },
  linkText: { 
    marginTop: 20, 
    textAlign: 'center', 
    color: '#007BFF', 
    fontSize: 16, 
  },
});
