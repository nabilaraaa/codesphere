// SplashScreen.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';

export default function SplashScreen({ navigation, }){
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/Logo.png')}
        style={styles.icon}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#213555', // Customize the background color
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  icon: {
    position: 'absolute',
    width : 100,
    height: 120
  }
});
