import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';

export default function OnBoard4({ navigation, }) {
  return (
    <View style={styles.container}>
        <View style={styles.bulet}/>
        <Text style={styles.text1}>Selamat Datang di</Text>
        <Text style={styles.text2}>CODESPHERE</Text>
        <Text style={styles.text3}>Yuk daftarkan akun mu untuk lanjut ke Codesphere!</Text>
        <TouchableOpacity 
          style={styles.buttonmasuk} 
          onPress={() => navigation.navigate('Masuk2')}
          >
            <Text style={styles.text4}>Masuk</Text>
        </TouchableOpacity>
        <TouchableOpacity 
            style={styles.buttondaftar}
            onPress={() => navigation.navigate('Daftar1')}
            >
            <Text style={styles.text4}>Daftar</Text>
        </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Customize the background color
  },
  bulet: {
    width: 600,
    height: 600,
    backgroundColor: '#213555',
    position: 'absolute',
    borderRadius: 600,
    left: 140,
    top: -100
  },
  text1: {
    fontSize: 24,
    fontWeight: 'bold',
    top: 120,
    right: 68,
    color: '#213555'
  },
  text2: {
    fontSize: 24,
    fontWeight: 'bold',
    top: 120,
    right: 90,
    color: '#213555'
  },
  text3: {
    fontSize: 13,
    fontWeight: 'bold',
    bottom: 290,
    right: 58,
    color: '#213555',
    position: 'absolute',
    opacity: 0.7,
    maxWidth: 500
  },
  text4: {
    color: 'white',
    fontWeight: 'bold'
  },
  buttonmasuk: {
    alignSelf: 'center',
    alignItems: 'center',
    width: 300,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#213555',
    justifyContent: 'center',
    top: 200
  },
  buttondaftar: {
    alignSelf: 'center',
    alignItems: 'center',
    width: 300,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#213555',
    justifyContent: 'center',
    top: 230
  },

});