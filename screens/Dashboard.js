import React, { useEffect, useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

const Dashboard = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);

  useEffect(() => {
    const getCameraPermission = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    };
    
    getCameraPermission();
  }, []);

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Button title="Requesting Camera Permission..." disabled />
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Button title="No access to camera" onPress={() => {/* Handle no access */}} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        ref={(ref) => setCameraRef(ref)}
      />
      <Button
        title="Fetch Record"
        onPress={() => {
          if (cameraRef) {
            // Handle the fetch record action
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    width: '100%',
    height: '60%',
  },
});

export default Dashboard;
