import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleRegister = () => {
    alert('Registration successful');
    router.replace('/login'); 
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineLarge" style={styles.title}>Register</Text>
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
      <TextInput
        label="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        mode="outlined"
        style={styles.input}
        theme={{ colors: { primary: '#E8B86D' } }}
      />
      <Button mode="contained" onPress={handleRegister} style={styles.button}>
        Register
      </Button>
      <TouchableOpacity onPress={() => router.push('/login')}>
        <Text style={styles.linkText}>Already have an account? Login here</Text>
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
