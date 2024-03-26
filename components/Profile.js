import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faUser, faSignOut, faChevronRight, faHomeAlt, faListAlt } from '@fortawesome/free-solid-svg-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Profile({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const loadProfileData = async () => {
    try {
      const storedFullName = await AsyncStorage.getItem('fullName');
      const storedEmail = await AsyncStorage.getItem('email');
      if (storedFullName !== null) {
        setFullName(storedFullName);
      }
      if (storedEmail !== null) {
        setEmail(storedEmail);
      }
    } catch (error) {
      console.error('Error loading profile data:', error);
    }
  };

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

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadProfileData();
      loadProfileImage();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
        <View style={styles.back}>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <FontAwesomeIcon icon={faArrowLeft} size={25} color='#213555'/>
          </TouchableOpacity>
          <Text style={styles.text1}>Profile</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.text2}>{fullName}</Text>
          <Text style={styles.text3}>{email}</Text>
          <TouchableOpacity style={styles.editProfile} onPress={() => navigation.navigate('EditProfile')}>
            <FontAwesomeIcon icon={faUser} color='white' size={14}/>
            <Text style={styles.text4}>Edit Profile</Text>
            <FontAwesomeIcon style={{left: 140, }} icon={faChevronRight} color='white' size={17} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.logOut} onPress={() => navigation.navigate('OnBoard1')}>
            <FontAwesomeIcon icon={faSignOut} color='white'size={14}/>
            <Text style={styles.text4}> Keluar</Text>
            <FontAwesomeIcon style={{left: 165, }} icon={faChevronRight} color='white' size={17} />
          </TouchableOpacity>
        </View>
        <Image style={styles.profile} source={{ uri: profileImage }}/>
        <View style={styles.navbar}>
          <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('HomeScreen')}>
            <FontAwesomeIcon icon={faHomeAlt} size={22} color='white'/>
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Kelas')}>
            <FontAwesomeIcon icon={faListAlt} size={22} color='white'/>
            <Text style={styles.navText}>Kelas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Profile')}>
            <FontAwesomeIcon icon={faUser} size={22} color='white'/>
            <Text style={styles.navText}>Profile</Text>
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
    profile: {
      height: 105,
      width: 105,
      borderRadius: 100,
      backgroundColor: 'lightgray',
      position: 'absolute',
      top: 100,
      borderWidth: 5,
      borderColor: '#616161'
    },
    editProfile: {
      flexDirection: 'row',
      right: 70,
      top: 40,
      alignItems: 'center'
    },
    logOut: {
      flexDirection: 'row',
      right: 82,
      top: 70,
      alignItems: 'center'
    },
    card: {
      height: 510,
      width: 300,
      backgroundColor: '#213555',
      position: 'absolute',
      top: 140,
      borderRadius: 15,
      elevation: 5,
      alignItems: 'center'
    },
    navText: {
      color: 'white',
      marginTop: 5,
      fontSize: 12
    },
    navbar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: 90,
      backgroundColor: '#213555',
      position: 'absolute'
    },
    navButton: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      bottom: 10
    },
    back: {
      flexDirection: 'row',
      right: 110,
      bottom: 330
    },
    text1: {
      fontWeight: 'bold',
      color: '#213555',
      fontSize: 19,
      left: 20
    },
    text2: {
      fontWeight: 'bold',
      color: 'white',
      marginTop: 80,
      fontSize: 22
    },
    text3: {
      fontWeight: 'bold',
      color: 'white',
      fontSize: 10
    },
    text4: {
      color: 'white',
      marginLeft: 10
    }
  });