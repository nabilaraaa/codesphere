import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { faArrowLeft, faEye, faEyeSlash, faLock, faUserCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export default function BuatPass({ navigation }) {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleContinue = () => {
    setIsLoading(true);
    setTimeout(() => {
      setShowPopup(true);
      setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => {
          setShowPopup(false);
          navigation.navigate('Masuk2');
        }, 2000); // Close Navigation
      }, 2000); //Loading
    }, 5000); //PopUp
  };

  return (
    <View style={styles.container}>
      <View style={{...styles.content, opacity: showPopup ? 0.5 : 1 }}>
        <View style={styles.back}>
          <TouchableOpacity onPress={() => navigation.navigate('Masuk2')}>
            <FontAwesomeIcon icon={faArrowLeft} size={25} color='#213555'/>
          </TouchableOpacity>
          <Text style={styles.text1}>Buat Password Baru</Text>
        </View>
        <Image 
          source={require('../assets/LupaPass.png')}
          style={styles.img}
        />
        <Text style={styles.text2}>Buat Password Baru</Text>
        <View style={styles.inputContainer1}>
          <FontAwesomeIcon icon={faLock} size={20} style={styles.icon} />
          <TextInput
            placeholder="Password"
            placeholderTextColor="black"
            secureTextEntry={secureTextEntry}
            style={styles.input}
          />
          <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)} style={styles.eyeIcon}>
            <FontAwesomeIcon icon={secureTextEntry ? faEye : faEyeSlash} size={20} />
          </TouchableOpacity>
        </View>
        <Text style={styles.text4}>* ulangi password</Text>
        <View style={styles.inputContainer2}>
          <FontAwesomeIcon icon={faLock} size={20} style={styles.icon} />
          <TextInput
            placeholder="Password"
            placeholderTextColor="black"
            secureTextEntry={secureTextEntry}
            style={styles.input}
          />
          <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)} style={styles.eyeIcon}>
            <FontAwesomeIcon icon={secureTextEntry ? faEye : faEyeSlash} size={20} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity 
          style={styles.buttoLanjut}
          onPress={handleContinue}
        >
          <Text style={styles.text3}>Lanjutkan</Text>
        </TouchableOpacity>
      </View>
      
      {showPopup && (
        <View style={styles.popUp}>
          <FontAwesomeIcon icon={faUserCircle} color='white' size={90} />
          <Text style={{fontSize: 18, margin: 20, fontWeight: 'bold', color: 'white'}}>SELAMAT!!</Text>
          <Text style={{fontSize: 12, margin: 5, color: 'white', textAlign: 'center', maxWidth: 190}}>Akunmu Sudah Siap untuk Digunakan. Kamu akan diarahkan ke Halaman Beranda dalam Beberapa Detik.</Text>
          {isLoading ? (
            <ActivityIndicator size="large" color="#FFF" />
          ) : (
            <FontAwesomeIcon icon={faCheckCircle} color='green' size={40} />
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Customize the background color
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popUp: {
    position: 'absolute',
    backgroundColor: '#213555',
    height: 400,
    width: 300,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    marginRight: 10,
  },
  img: {
    width: 180,
    height: 210,
    marginBottom: 130
  },
  back: {
    flexDirection: 'row',
    marginBottom: 100,
    marginRight: 100
  },
  inputContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 310,
    height: 55,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 20,
    backgroundColor: '#D9D9D9',
    marginTop: 10,
    bottom: 60,
    marginBottom: 5,
  },
  inputContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 310,
    height: 55,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 20,
    backgroundColor: '#D9D9D9',
    marginTop: 10,
    marginBottom: 5,
    bottom: 50,
  },
  input: {
    flex: 1,
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
    fontSize: 21,
    fontWeight: 'bold',
    color: '#213555',
    alignSelf: 'center',
    marginLeft: 20
  },
  text2: {
    color: '#213555',
    fontWeight: 'bold',
    fontSize: 14,
    maxWidth: 290,
    right: 90,
    bottom: 60
  },
  text3: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold'
  },
  text4: {
    color: '#213555',
    fontWeight: 'bold',
    fontSize: 12,
    maxWidth: 290,
    right: 110,
    bottom: 50
  },
  buttoLanjut: {
    alignSelf: 'center',
    alignItems: 'center',
    width: 300,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#213555',
    justifyContent: 'center',
  },
});