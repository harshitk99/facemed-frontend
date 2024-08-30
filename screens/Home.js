import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FaceMed⚕️</Text>
      
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1717501219604-cc1902b5d845?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.image}
        />
      </View>
      
      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => navigation.navigate('Signup')}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.loginButton} 
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F1F2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36,
    color: '#1E3D59',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  imageContainer: {
    marginBottom: 40,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 15,
  },
  signupButton: {
    backgroundColor: '#1E3D59',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 20,
    elevation: 3,
  },
  loginButton: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 3,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
