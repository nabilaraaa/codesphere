import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';

export default function Masuk1({ navigation, }) {
  return (
    <View style={styles.container}>
        <Text style={styles.text1}>Yuk Masuk!</Text>
        <TouchableOpacity style={styles.buttongoogle}>
            <Image 
                style={styles.iconG}
                source={require('../assets/Google.webp')}
                />
            <Text style={styles.text4}>Lanjut Dengan Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonapple}>
            <Image 
                style={styles.iconA}
                source={require('../assets/Apple.png')}
                />
            <Text style={styles.text4}>Lanjut Dengan Google</Text>
        </TouchableOpacity>
        <Text style={styles.text2}>( Atau )</Text>
        <TouchableOpacity 
            style={styles.buttonmasuk} 
            onPress={() => navigation.navigate('Masuk2')}
            >
            <Text style={styles.text3}>Masuk Dengan Akunmu</Text>
        </TouchableOpacity>
        <View style={styles.daftar}>
            <Text style={styles.text5}>Tidak Punya Akun?</Text>
            <TouchableOpacity>
                <Text style={styles.text6}>DAFTAR</Text>
            </TouchableOpacity>
        </View>
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
  daftar: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconG: {
    width: 30,
    height: 30,
    margin: 10
  },
  iconA: {
    width: 26,
    height: 26,
    margin: 15
  },
  text1: {
    fontSize: 22,
    fontWeight: 'bold',
    top: 110,
    color: '#213555',
    alignSelf: 'center',
  },
  text2: {
    fontSize: 14,
    fontWeight: 'bold',
    top: 170,
    color: '#213555',
    alignSelf: 'center',
  },
  text3: {
    color: 'white',
    fontWeight: 'bold'
  },
  text4: {
    color: 'black',
    fontWeight: 'bold',
    opacity: 0.5
  },
  text5: {
    fontSize: 13,
    top: 230,
    color: '#213555',
    alignSelf: 'center',
    margin: 5,
    opacity: 0.6
  },
  text6: {
    fontSize: 13,
    top: 230,
    color: '#213555',
    alignSelf: 'center',
    margin: 5,
    textDecorationLine: 'underline'
  },
  buttongoogle: {
    alignSelf: 'center',
    alignItems: 'center',
    width: 300,
    height: 60,
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    top: 200,
    flexDirection: 'row'
  },
  buttonapple: {
    alignSelf: 'center',
    alignItems: 'center',
    width: 300,
    height: 60,
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    top: 70,
    flexDirection: 'row'
  },
  buttonmasuk: {
    alignSelf: 'center',
    alignItems: 'center',
    width: 300,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#213555',
    justifyContent: 'center',
    top: 200
  },
});