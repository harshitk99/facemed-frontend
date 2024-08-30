import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Here you can add your login logic
    console.log({ username, password });
    // After successful login, navigate to Dashboard
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        placeholderTextColor="#ccc"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="#ccc"
      />
      
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 32,
    marginBottom: 40,
    color: '#424242',
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: '#fff',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  loginButton: {
    backgroundColor: '#444',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  loginText: {
    color: '#fff',
    fontSize: 18,
  },
});
