import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

export default function AboutPage() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>About</Text>
        <Text style={styles.description}>
          I'm Christian Rey Maambong and this app is a test to see if it will work.
        </Text>
        
        <Text style={styles.sectionTitle}>Our Mission</Text>
        <Text style={styles.sectionText}>
          To make this App work and provide value through sharing.
        </Text>
        
        <Text style={styles.sectionTitle}>Contact Me</Text>
        <Text style={styles.sectionText}>
          Phone Number: 09524885179{'\n'}
          Email: maambong.christianrey@gmail.com
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, 
    backgroundColor: '#87CEEB', 
  },
  container: {
    flex: 1, 
    justifyContent: 'flex-start', 
    padding: 20,
  },
  title: {
    fontSize: 32, 
    fontWeight: 'bold', 
    color: '#333', 
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
  },
  sectionText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'justify',
  }
});
