// import React, { useState ,useEffect, useRef} from 'react';
// import { View, Text , StyleSheet } from 'react-native';
// import { Camera ,CameraType} from 'expo-camera';
// import * as MediaLibrary from 'expo-media-library';

// export default function CameraScreen(){
//   const [hasCameraPermission,setHasCameraPermission]=useState(null);
//   const [image,setImage]=useState(null);
//   const [type,setType]=useState(Camera.Constants.Type.back);
//   const [flash,setFlash]=useState(Camera.Constants.FlashMode.off);
//   const cameraRef=useRef(null);


//   useEffect(()=>{
//     (async ()=>{
//       MediaLibrary.requestPermissionsAsync();
//       const cameraStatus=await Camera.requestCameraPermissionsAsync();
//       setHasCameraPermission(cameraStatus.status==='granted');
//     })();
//   })
//   return(
//     <View style={styles.container}>
      
//     </View>
//   );
// }

// const styles=StyleSheet.create({
//   container:{
//     flex:1,
//     backgroundColor:"#fff",
//     alignItems:'center',
//     justifyContent:'center',
//   }
// })
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

export default function CameraScreen({ navigation }) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(status === 'granted');

      // Request media library permissions
      await MediaLibrary.requestPermissionsAsync();
    })();
  }, []);

  if (hasCameraPermission === null) {
    return <View><Text>Requesting camera permission...</Text></View>;
  }
  if (hasCameraPermission === false) {
    return <View><Text>No access to camera</Text></View>;
  }

  // Function to handle taking a picture
  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setImage(photo.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        flashMode={flash}
        ref={cameraRef}
      />
      <View style={styles.buttonContainer}>
        <Button title="Take Picture" onPress={takePicture} />
        {image && <Image source={{ uri: image }} style={styles.preview} />}
        <Button
          title="Results"
          onPress={() => navigation.navigate('ResultScreen')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  preview: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
});

