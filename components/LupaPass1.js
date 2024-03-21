import { faArrowLeft, faEnvelope, faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';

export default function LupaPass1({ navigation, }) {
  return (
    <View style={styles.container}>
        <View style={styles.back}>
        <TouchableOpacity 
          style={styles.buttonArrow}
          onPress={() => navigation.navigate('Daftar1')}
        >
          <FontAwesomeIcon style={styles.iconB} icon={faArrowLeft} size={26} color='#213555'/>
        </TouchableOpacity>
        <Text style={styles.text5}>Lupa Password</Text>
      </View>
        <Image 
            source={require('../assets/LupaPass.png')}
            style={styles.icon}
        />
        <Text style={styles.text4}>Pilih Detail Kontak yang Akan Dipakai Untuk Rest Password Mu</Text>
        <TouchableOpacity 
            style={styles.buttoEML}
            onPress={() => navigation.navigate('Daftar1')}
            >
            <View style={styles.email}>
                <FontAwesomeIcon icon={faEnvelope} size={19} color='white' />
            </View>
            <Text style={styles.text1}>Via Email</Text>
            <Text style={styles.text2}>nastiti@gmail.com</Text>
        </TouchableOpacity>
        <TouchableOpacity 
            style={styles.buttoSMS}
            onPress={() => navigation.navigate('Daftar1')}
            >
            <View style={styles.email}>
                <FontAwesomeIcon icon={faEnvelope} size={19} color='white' />
            </View>
            <Text style={styles.text1}>Via SMS</Text>
            <Text style={styles.text2}>(+62) 123-456-7890</Text>
        </TouchableOpacity>
        <TouchableOpacity 
            style={styles.buttoLanjut}
            onPress={() => navigation.navigate('Daftar1')}
            >
            <Text style={styles.text3}>Lanjutkan</Text>
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
  back: {
    flexDirection: 'row',
  },
  iconB: {
    top: -38,
    right: 60
  },
  icon: {
    height: 250,
    width: 310,
    bottom: 20
  },
  email: {
    height: 35,
    width: 35,
    borderRadius: 20,
    backgroundColor: '#213555',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    color: '#213555',
    marginLeft: 15,
    marginBottom: 20,
    fontSize: 12
  },
  text2: {
    color: '#213555',
    marginLeft: 70,
    bottom: 25,
    fontSize: 12,
    position: 'absolute',
    fontWeight: 'bold'
  },
  text3: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold'
  },
  text4: {
    textAlign: 'center',
    opacity: 0.6,
    fontSize: 14,
    maxWidth: 290
  },
  text5: {
    fontSize: 21,
    right: 45,
    fontWeight: 'bold',
    top: -40,
    color: '#213555',
    alignSelf: 'center',
  },
  buttoLanjut: {
    alignSelf: 'center',
    alignItems: 'center',
    width: 300,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#213555',
    justifyContent: 'center',
    top: 30
  },
  buttoSMS: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    width: 300,
    height: 80,
    borderRadius: 15,
    backgroundColor: '#D9D9D9',
    top: 15,
    marginBottom: 20,
    padding: 20
  },
  buttoEML: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    width: 300,
    height: 80,
    borderRadius: 15,
    backgroundColor: '#D9D9D9',
    top : 20,
    marginBottom: 20,
    padding: 20
  },


});