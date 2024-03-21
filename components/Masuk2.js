import { faCheckSquare, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, TextInput} from 'react-native';
import { faLock } from '@fortawesome/free-solid-svg-icons';

export default function Masuk2({ navigation, }) {
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
                <TextInput 
                    style={styles.input1}
                    placeholder="Email"
                    leftIcon={<FontAwesomeIcon icon={faEnvelope} size={20} color='black'/>}
                    />
                <TextInput 
                    style={styles.input2}
                    placeholder="Password"
                    />
                <View style={styles.rf}>
                    <FontAwesomeIcon style={styles.iconC} icon={faCheckSquare} size={25} color='white' />
                    <Text style={styles.is}>Ingat Saya</Text>
                    <TouchableOpacity>
                        <Text style={styles.lp}>Lupa Password?</Text>
                    </TouchableOpacity>

                </View>
                <TouchableOpacity 
                    style={styles.buttonmasuk} 
                    onPress={() => navigation.navigate('OnBoard4')}
                    >
                    <Text style={styles.text3}>Masuk</Text>
                </TouchableOpacity>
                <Text style={styles.text2}>Atau Lanjut Dengan</Text>
            </View>
            <View style={styles.daftar}> 
            <TouchableOpacity style={styles.buttongoogle}>
                <Image 
                    style={styles.iconG}
                    source={require('../assets/Google.webp')}
                    />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonapple}>
                <Image 
                    style={styles.iconA}
                    source={require('../assets/Apple.png')}
                    />
            </TouchableOpacity>
            </View>
            <View style={styles.daftar}>
                <Text style={styles.text5}>Tidak Punya Akun?</Text>
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
    left: 155,
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
  input1: {
    width: 300,
    height: 55,
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
    marginTop: 50,
    backgroundColor: 'white'
  },
  input2: {
    width: 300,
    height: 55,
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    backgroundColor: 'white'
  },
  daftar: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center'
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
    top: 30,
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
    top: 60,
    color: 'white',
    alignSelf: 'center',
    margin: 5,
    opacity: 0.6
  },
  text6: {
    fontSize: 13,
    top: 60,
    color: 'white',
    alignSelf: 'center',
    margin: 5,
    textDecorationLine: 'underline'
  },
  text7: {
    fontSize: 13,
    top: 30,
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