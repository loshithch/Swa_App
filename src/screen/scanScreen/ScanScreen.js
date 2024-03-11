import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Camera, useCameraDevices } from 'react-native-vision-camera'

const ScanScreen = () => {
    const devices =useCameraDevices();
    const device =devices.back;

    useEffect( ()=>{
checkPermission();
    },[]);

    const checkPermission = async() =>{
        const newCameraPermission = await Camera.requestCameraPermission();
        const newMicrophonePremission =await Camera.requestMicrophonePermission();
        console.log(newCameraPermission,'111');
    }

  if (device == null) return <ActivityIndicator />
    
  return (
    <View style={styles.container}>
         <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
    />
    </View>
  )
}

export default ScanScreen

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})