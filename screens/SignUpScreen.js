import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function SignupScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [medicalConditions, setMedicalConditions] = useState('');

  const handleSignup = () => {
    // Handle the signup logic here
    console.log({
      username,
      password,
      age,
      gender,
      bloodGroup,
      medicalConditions,
    });
    // Navigate back or to a different screen after signup
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Enter your username"
        placeholderTextColor="#ccc"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
        placeholderTextColor="#ccc"
      />

      <Text style={styles.label}>Age</Text>
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={setAge}
        placeholder="Enter your age"
        keyboardType="numeric"
        placeholderTextColor="#ccc"
      />

      <Text style={styles.label}>Gender</Text>
      <TextInput
        style={styles.input}
        value={gender}
        onChangeText={setGender}
        placeholder="Enter your gender"
        placeholderTextColor="#ccc"
      />

      <Text style={styles.label}>Blood Group</Text>
      <TextInput
        style={styles.input}
        value={bloodGroup}
        onChangeText={setBloodGroup}
        placeholder="Enter your blood group"
        placeholderTextColor="#ccc"
      />

      <Text style={styles.label}>Medical Conditions</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        value={medicalConditions}
        onChangeText={setMedicalConditions}
        placeholder="Enter your medical conditions"
        multiline
        placeholderTextColor="#ccc"
      />

      <Button title="Signup" onPress={handleSignup} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#000',
  },
  label: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  textArea: {
    height: 100,
  },
});
