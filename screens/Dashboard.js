import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FaceMed ⚕️</Text>
      <View style={styles.cameraPlaceholder}>
        <Text style={styles.cameraText}>&lt;user's camera&gt;</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>show results</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 34,
    color: '#fff',
    marginTop:-100,
    marginBottom: 20,
  },
  cameraPlaceholder: {
    width: '80%',
    height: '50%',
    backgroundColor: '#333',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  cameraText: {
    color: '#888',
    fontSize: 18,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'green',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Dashboard;
