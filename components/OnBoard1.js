// SplashScreen.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';

export default function Onboard1({ navigation, }) {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.buttonLewat}>
            <Text style={styles.text1}>Lewati</Text>
        </TouchableOpacity>
      <Image 
        source={require('../assets/Onboard1.png')}
        style={styles.icon}
        />
        <TouchableOpacity 
          style={styles.buttonArrow}
          onPress={() => navigation.navigate('OnBoard2')}
        >
            <FontAwesomeIcon icon={faArrowRight} size={22} color='white'/>
        </TouchableOpacity>
        <Text style={styles.text2}>Pembelajaran Online</Text>
        <Text style={styles.text3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</Text>
        <View style={styles.indicator1}/>
        <View style={styles.indicator2}/>
        <View style={styles.indicator3}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text1: {
    fontSize: 15,
  },
  text2: {
    fontSize: 24,
    fontWeight: 'bold',
    top: 110,
    right: 50,
    color: '#213555'
  },
  text3: {
    fontSize: 13,
    fontWeight: 'bold',
    bottom: 250,
    right: 58,
    color: '#213555',
    position: 'absolute',
    opacity: 0.7,
    maxWidth: 300
  },
  buttonLewat: {
    position: 'absolute',
    top: 100,
    right: 40,
  },
  buttonArrow: {
    position: 'absolute',
    bottom: 80,
    right: 40,
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#213555',
    alignItems: 'center',
    justifyContent: 'center'
  },
  indicator1: {
    position: 'absolute',
    bottom: 105,
    right: 320,
    width: 25,
    height: 15,
    borderRadius: 50,
    backgroundColor: '#213555',
  },
  indicator2: {
    position: 'absolute',
    bottom: 105,
    right: 290,
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: '#213555',
    opacity: 0.5
  },
  indicator3: {
    position: 'absolute',
    bottom: 105,
    right: 260,
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: '#213555',
    opacity: 0.5
  },
  icon: {
    position: 'absolute',
    width : 220,
    height: 300,
    top: 170,
    
  }
});
