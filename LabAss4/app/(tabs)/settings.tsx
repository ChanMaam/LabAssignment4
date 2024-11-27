import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

export default function SettingsPage() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.description}>Settings Page</Text>
      
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Notification Preferences</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Privacy Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Log Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, 
    backgroundColor: '#87CEEB',  
    padding: 20, 
  },
  title: { 
    fontSize: 32, 
    fontWeight: 'bold', 
    color: 'black',  
    marginBottom: 50,  
    textAlign: 'center', 
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  option: {
    width: '100%', 
    padding: 15, 
    backgroundColor: '#fff', 
    borderRadius: 25, 
    marginVertical: 10, 
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3, 
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  optionText: {
    fontSize: 18,
    color: '#333',
    fontWeight: '500',  
  },
  optionHover: {
    backgroundColor: '#E8B86D', 
  }
});
