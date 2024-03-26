import { faArrowLeft, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function LupaPass1({ navigation }) {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <TouchableOpacity onPress={() => navigation.navigate('Masuk2')}>
          <FontAwesomeIcon icon={faArrowLeft} size={25} color='#213555'/>
        </TouchableOpacity>
        <Text style={styles.text5}>Lupa Password</Text>
      </View>
      <Image 
        source={require('../assets/LupaPass.png')}
        style={styles.icon}
      />
      <Text style={styles.text4}>Pilih Detail Kontak yang Akan Dipakai Untuk Rest Password Mu</Text>
      <TouchableOpacity
        style={[styles.buttoEML, selectedOption === 'email' && styles.selectedOption]}
        onPress={() => setSelectedOption('email')}
      >
        <View style={styles.email}>
          <FontAwesomeIcon icon={faEnvelope} size={19} color='white' />
        </View>
        <Text style={styles.text1}>Via Email</Text>
        <Text style={styles.text2}>nastiti@gmail.com</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttoSMS, selectedOption === 'sms' && styles.selectedOption]}
        onPress={() => setSelectedOption('sms')}
      >
        <View style={styles.email}>
          <FontAwesomeIcon icon={faEnvelope} size={19} color='white' />
        </View>
        <Text style={styles.text1}>Via SMS</Text>
        <Text style={styles.text2}>(+62) 123-456-7890</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttoLanjut, !selectedOption && styles.disabledButton]}
        onPress={() => {
          if (selectedOption) {
            navigation.navigate('LupaPass2');
          }
        }}
        disabled={!selectedOption}
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
    backgroundColor: 'white',
  },
  back: {
    flexDirection: 'row',
    marginBottom: 90,
    marginRight: 120
  },
  icon: {
    height: 250,
    width: 310,
    bottom: 60
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
    maxWidth: 290,
    bottom: 50
  },
  text5: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#213555',
    alignSelf: 'center',
    marginLeft: 20
  },
  buttoLanjut: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: 300,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#213555',
    justifyContent: 'center',
  },
  buttoSMS: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    width: 300,
    height: 80,
    borderRadius: 15,
    backgroundColor: '#D9D9D9',
    marginBottom: 20,
    padding: 20,
    bottom: 20
  },
  buttoEML: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    width: 300,
    height: 80,
    borderRadius: 15,
    backgroundColor: '#D9D9D9',
    marginBottom: 20,
    padding: 20,
    bottom: 20
  },
  selectedOption: {
    borderWidth: 2,
    borderColor: '#213555',
  },
  disabledButton: {
    backgroundColor: '#D9D9D9',
  },
});
