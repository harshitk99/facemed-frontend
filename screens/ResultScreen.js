import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function ResultScreen({ route, navigation }) {
  const { userData } = route.params; // Retrieve userData passed from the DashboardScreen

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medical History</Text>

      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Name: <Text style={styles.value}>{userData.name}</Text></Text>
        <Text style={styles.label}>Username: <Text style={styles.value}>{userData.username}</Text></Text>
        <Text style={styles.label}>Medical Conditions: <Text style={styles.value}>{userData.medicalConditions}</Text></Text>
      </View>

      <Button
        title="Go Back"
        onPress={() => navigation.goBack()} // Navigate back to previous screen
      />
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
  detailsContainer: {
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
