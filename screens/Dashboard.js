import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DashboardScreen({ route, navigation }) {
  const { userData } = route.params;

  // Extract the first name from the full name
  const firstName = userData.name.split(' ')[0];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hi {firstName}</Text> 

      <View style={styles.profileContainer}>
        <Text style={styles.label}>Name: <Text style={styles.value}>{userData.name}</Text></Text>
        <Text style={styles.label}>Username: <Text style={styles.value}>{userData.username}</Text></Text>
        <Text style={styles.label}>Age: <Text style={styles.value}>{userData.age}</Text></Text>
        <Text style={styles.label}>Gender: <Text style={styles.value}>{userData.gender}</Text></Text>
        <Text style={styles.label}>Blood Group: <Text style={styles.value}>{userData.bloodGroup}</Text></Text>
        <Text style={styles.label}>Medical Conditions: <Text style={styles.value}>{userData.medicalConditions}</Text></Text>
      </View>

      <Button title="Check" onPress={() => navigation.navigate('CameraScreen')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  profileContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: '#ccc',
    marginBottom: 10,
  },
  value: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
