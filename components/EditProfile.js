import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faImage } from '@fortawesome/free-solid-svg-icons';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EditProfile({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    loadProfileImage();
  }, []);

  const loadProfileImage = async () => {
    try {
      const uri = await AsyncStorage.getItem('profileImage');
      if (uri !== null) {
        setProfileImage(uri);
      }
    } catch (error) {
      console.error('Error loading profile image:', error);
    }
  };

  const handleChooseImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
    });

    if (!result.cancelled) {
      setProfileImage(result.uri);
      saveProfileImage(result.uri);
    }
  };

  const saveProfileImage = async (uri) => {
    try {
      await AsyncStorage.setItem('profileImage', uri);
    } catch (error) {
      console.error('Error saving profile image:', error);
    }
  };

  const handleSaveProfile = async () => {
    try {
      await AsyncStorage.setItem('fullName', fullName);
      await AsyncStorage.setItem('email', email);
    } catch (error) {
      console.error('Error saving profile data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <FontAwesomeIcon icon={faArrowLeft} size={25} color='#213555'/>
        </TouchableOpacity>
        <Text style={styles.text1}>Edit Profile</Text>
      </View>
      <View style={styles.editProfile}>
        <Image style={styles.profile} source={{ uri: profileImage }} resizeMode="cover" />
        <TouchableOpacity style={styles.EditImage} onPress={handleChooseImage}>
          <FontAwesomeIcon icon={faImage} size={12} />
        </TouchableOpacity>
      </View>
      <TextInput 
        style={styles.input1}
        placeholder="Nama Lengkap"
        value={fullName}
        onChangeText={text => setFullName(text)}
      />
      <TextInput 
        style={styles.input2}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TouchableOpacity 
        style={styles.buttonmasuk} 
        onPress={() => {
          handleSaveProfile();
          navigation.navigate('Profile');
        }}
      >
        <Text style={styles.text2}>Perbarui</Text>
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
  editProfile: {

},
EditImage: {
    height: 30,
    width: 30,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    borderRadius: 20,
    bottom: 1,
    right: 1
},
profile: {
    height: 90,
    width: 90,
    backgroundColor: 'black',
    borderRadius: 50,
},
  input1: {
    width: 300,
    height: 55,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
    marginTop: 25,
    backgroundColor: '#EEEEEE'
  },
  input2: {
    width: 300,
    height: 55,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    backgroundColor: '#EEEEEE'
  },
  buttonmasuk: {
    alignSelf: 'center',
    alignItems: 'center',
    width: 300,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#213555',
    justifyContent: 'center',
    top: 20
  },
  back: {
    flexDirection: 'row',
    bottom: 20,
    right: 85,
  },
  text1: {
    fontSize: 21,
    left: 20,
    fontWeight: 'bold',
    color: '#213555',
    alignSelf: 'center',
  },
  text2: {
    color: 'white',
    fontWeight: 'bold'
  },
});