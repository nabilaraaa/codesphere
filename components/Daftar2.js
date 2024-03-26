import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faImage, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker as RNPicker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function Daftar2({ navigation, }) {
  const [gender, setGender] = useState('');   
  const [birthdate, setBirthdate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+000'); // Default country code
  const [profileImage, setProfileImage] = useState(null);
  const [userId, setUserId] = useState(null); // State for userId

  useEffect(() => {
    // Load profile image URI and userId when component mounts
    loadProfileImage();
    getUserId();
  }, []);

  const getUserId = async () => {
    try {
      // Get userId from AsyncStorage or wherever it's stored
      const id = await AsyncStorage.getItem('userId');
      setUserId(id);
    } catch (error) {
      console.error('Error getting userId:', error);
    }
  };


  const handleChooseImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      const formData = new FormData();
      formData.append('image', {
        uri: result.uri,
        type: 'image/jpeg',
        name: 'profile.jpg',
      });

      try {
        const response = await axios.post('http://10.212.78.95:5001/api/users/picture', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          data: {
            userId: userId,
          },
        });
        console.log('Upload successful:', response.data);
        // Update profile image state
        setProfileImage(response.data.path);
      } catch (error) {
        console.error('Upload failed:', error);
      }
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
    // Load profile image URI when component mounts
    loadProfileImage();
  }, []);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || birthdate;
    setShowDatePicker(false);
    setBirthdate(currentDate);
  };

  const handleCountryCodeChange = (value) => {
    if (value === '+62') {
      setCountryCode('+62');
    } else if (value === '+1') {
      setCountryCode('+1');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <TouchableOpacity onPress={() => navigation.navigate('Masuk2')}>
          <FontAwesomeIcon icon={faArrowLeft} size={25} color='#213555'/>
        </TouchableOpacity>
        <Text style={styles.text1}>Isi Profilmu!!</Text>
      </View>
      <View style={styles.editProfile}>
        <Image style={styles.profile} source={{ uri: profileImage }} resizeMode="cover" />
          <TouchableOpacity style={styles.EditImage} onPress={handleChooseImage}>
              <FontAwesomeIcon icon={faImage} size={12} />
          </TouchableOpacity>
      </View>
      <View style={{position: 'absolute', top: 220}}>
          <TextInput 
            style={styles.input1}
            placeholder="Nama Lengkap"
          />
          <TextInput 
            style={styles.input2}
            placeholder="Nama Depan"
          />
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <TextInput 
              style={styles.input2}
              placeholder="Tanggal lahir"
              editable={false}
              value={birthdate.toDateString()}
            />
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={birthdate}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={handleDateChange}
            />
          )}
          <TextInput 
            style={styles.input2}
            placeholder="Email"
          />
          <View style={styles.phoneInputContainer}>
            <RNPicker
              selectedValue={countryCode}
              style={{ height: 50, width: 100 }}
              onValueChange={(itemValue, itemIndex) => handleCountryCodeChange(itemValue)}>
              <RNPicker.Item label="ID +62" value="+62" />
              <RNPicker.Item label="US +1" value="+1" />
            </RNPicker>
            <Text style={styles.countryCode}>{countryCode}</Text>
            <TextInput
              style={styles.phoneInput}
              placeholder="Nomor Telepon"
              onChangeText={(text) => setPhoneNumber(text)}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.jnsklmn2}>
            <RNPicker
              selectedValue={gender}
              style={styles.jnsklmn1}
              onValueChange={(itemValue, itemIndex) => setGender(itemValue)}>
              <RNPicker.Item label="Pilih Jenis Kelamin" value="" />
              <RNPicker.Item label="Laki-laki" value="Laki-laki" />
              <RNPicker.Item label="Perempuan" value="Perempuan" />
            </RNPicker>
          </View>
          <TouchableOpacity 
            style={styles.buttonmasuk} 
            onPress={loadProfileImage}
          >
            <Text style={styles.text2}>Lanjutkan</Text>
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
    backgroundColor: 'white',
  },
  editProfile: {
    position: 'absolute',
    top: 120
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
  jnsklmn1: {
    width: 300,
    height: 55,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
  },
  jnsklmn2: {
    width: 300,
    height: 55,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    justifyContent: 'center',
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
  input1: {
    width: 300,
    height: 55,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
    marginTop: 25,
    backgroundColor: '#EEEEEE'
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  countryCode: {
    lineHeight: 50,
    fontSize: 16,
    borderRadius: 10,
    textAlign: 'center',
  },
  iconB: {
    top: -10,
    right: 75
  },
  back: {
    flexDirection: 'row',
    position: 'absolute',
    top: 60,
    left: 30
  },
  daftar: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text1: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#213555',
    alignSelf: 'center',
    marginLeft: 15
  },
  text2: {
    color: 'white',
    fontWeight: 'bold'
  },
  buttonImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  buttonP: {
    height: 100,
    width: 100,
    backgroundColor: 'white',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
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
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  phoneInput: {
    height: 50,
    width: 165,
    marginLeft: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#EEEEEE',
  },
});
