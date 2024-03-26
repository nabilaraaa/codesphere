import { faCheckSquare, faEnvelope, faEye, faEyeSlash, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import axios from 'axios';


export default function Masuk2() {
  const navigation = useNavigation();
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(`http://192.168.43.191:5001/api/auth/login`, {
        email: email,
        password: password,
      });
      // Handle successful login, e.g., store user token
      console.log('Login successful', response.data);
      navigation.navigate('HomeScreen');
    } catch (error) {
      console.error('Login error', error);
    }
  };

  return (
    <View style={styles.container}>
        <Image 
            style={styles.iconL}
            source={require('../assets/Logo.png')}
        />
        <View style={styles.content}>
            <View>
                <Text style={styles.text1}>Yuk Masuk!</Text>
                <Text style={styles.text7}>Masuk menggunakan akun mu sebelumnya yaa!</Text>
                <View style={styles.inputContainer2}>
                  <FontAwesomeIcon icon={faEnvelope} size={20} style={styles.icon} />
                  <TextInput
                      placeholder="Email"
                      placeholderTextColor="black"
                      style={styles.input}
                      value={email}
                      onChangeText={setEmail}
                  />
                </View>
                <View style={styles.inputContainer3}>
                  <FontAwesomeIcon icon={faLock} size={20} style={styles.icon} />
                  <TextInput
                      placeholder="Password"
                      placeholderTextColor="black"
                      secureTextEntry={secureTextEntry}
                      style={styles.input}
                      value={password}
                      onChangeText={setPassword}
                  />
                  <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)} style={styles.eyeIcon}>
                      <FontAwesomeIcon icon={secureTextEntry ? faEye : faEyeSlash} size={20} />
                  </TouchableOpacity>
                </View>
                <View style={styles.rf}>
                    <FontAwesomeIcon style={styles.iconC} icon={faCheckSquare} size={25} color='white' />
                    <Text style={styles.is}>Ingat Saya</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('LupaPass1')}>
                        <Text style={styles.lp}>Lupa Password?</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity 
                    style={styles.buttonmasuk} 
                    onPress={handleLogin}
                    >
                    <Text style={styles.text3}>Masuk</Text>
                </TouchableOpacity>
                <Text style={styles.text2}>Atau Lanjut Dengan</Text>
            </View>
            <View style={styles.loginWith}> 
            <TouchableOpacity style={styles.buttongoogle}>
                <Image 
                    style={styles.iconG}
                    source={require('../assets/Google.webp')}
                    />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonapple}>
                <Image 
                    style={styles.iconA}
                    source={require('../assets/Facebook.png')}
                    />
            </TouchableOpacity>
            </View>
            <View style={styles.daftar}>
            <Text style={styles.text5}>Belum Punya Akun?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Daftar1')}>
              <Text style={styles.text6}>DAFTAR</Text>
            </TouchableOpacity>
            </View>
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
  icon: {
    marginRight: 10,
  },
  rf: {
    flexDirection: 'row',
    marginTop: 10
  },
  is: {
    left: 55,
    fontWeight: 'bold',
    color: 'white'
  },
  lp: {
    marginLeft: 160,
    color: 'white'
  },
  content: {
    backgroundColor: '#213555',
    position: 'absolute',
    height: 800,
    width: 400,
    top: 275,
    borderRadius: 50
  },
  inputContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 310,
    height: 55,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 20,
    backgroundColor: 'white',
    marginTop: 54,
    marginBottom: 5,
  },
  inputContainer3: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 310,
    height: 55,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 20,
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
      flex: 1,
  },
  loginWith: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  daftar: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    top: 60,
  },
  iconL: {
    width: 91,
    height: 107,
    position: 'absolute',
    top: 100
  },
  iconC: {
    left: 50
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
    top: 20,
    color: 'white',
    alignSelf: 'center',
    right: 90
  },
  text2: {
    fontSize: 14,
    fontWeight: 'bold',
    top: 55,
    color: 'white',
    alignSelf: 'center',
  },
  text3: {
    color: 'black',
    fontWeight: 'bold'
  },
  text4: {
    color: 'black',
    fontWeight: 'bold',
    opacity: 0.5
  },
  text5: {
    fontSize: 13,
    color: 'white',
    alignSelf: 'center',
    margin: 5,
    opacity: 0.6,
    fontWeight: 'bold'
  },
  text6: {
    marginLeft: 2,
    textDecorationLine: 'underline',
    color: 'white'
  },
  text7: {
    fontSize: 13,
    top: 20,
    color: 'white',
    alignSelf: 'center',
    margin: 5,
    right: 10,
    fontWeight: 'bold'
  },
  buttongoogle: {
    alignSelf: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    top: 60,
    margin: 20,
    flexDirection: 'row'
  },
  buttonapple: {
    alignSelf: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    top: 60,
    margin: 20,
    flexDirection: 'row'
  },
  buttonmasuk: {
    alignSelf: 'center',
    alignItems: 'center',
    width: 300,
    height: 55,
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    top: 30
  },
});
