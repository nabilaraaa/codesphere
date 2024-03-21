import { faArrowLeft, faEnvelope, faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function BuatPass({ navigation, }) {
  return (
    <View style={styles.container}>
        <View style={styles.back}>
        <TouchableOpacity 
          style={styles.buttonArrow}
          onPress={() => navigation.navigate('Daftar1')}
        >
          <FontAwesomeIcon style={styles.iconB} icon={faArrowLeft} size={26} color='#213555'/>
        </TouchableOpacity>
        <Text style={styles.text5}>Buat Password Baru</Text>
      </View>
        <Image 
            source={require('../assets/LupaPass.png')}
            style={styles.icon}
        />
        <Text style={styles.text4}>Buat Password Baru</Text>
        <TextInput 
            style={styles.input}
            placeholder='Password'
        >
        </TextInput>
        <TextInput
            style={styles.input}
            placeholder='Password'
        >
        </TextInput>
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
    bottom: 30
  },
  input: {
    width: 300,
    height: 55,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    backgroundColor: 'lightgray'
  },
  iconB: {
    top: -38,
    right: 60
  },
  icon: {
    width: 230,
    height: 260,
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
    color: '#213555',
    fontWeight: 'bold',
    fontSize: 14,
    maxWidth: 290,
    right: 90
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