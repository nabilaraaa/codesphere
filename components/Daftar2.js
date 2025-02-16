import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker as RNPicker } from '@react-native-picker/picker';

export default function Daftar2({ navigation }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [gender, setGender] = useState('');
  const [birthdate, setBirthdate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+000'); // Default country code

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri); // Menyimpan URI gambar yang dipilih ke dalam state
    }
  };

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
        <TouchableOpacity 
          style={styles.buttonArrow}
          onPress={() => navigation.navigate('Daftar1')}
        >
          <FontAwesomeIcon style={styles.iconB} icon={faArrowLeft} size={26} color='#213555'/>
        </TouchableOpacity>
        <Text style={styles.text1}>Isi Profilmu!</Text>
      </View>
      <TouchableOpacity style={styles.buttonP} onPress={pickImage}>
        {selectedImage ? (
          <Image source={{ uri: selectedImage }} style={styles.profileImage} />
        ) : (
          <FontAwesomeIcon icon={faUserCircle} size={100} color='#213555' />
        )}
      </TouchableOpacity>
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
        onPress={() => navigation.navigate('Masuk2')}
      >
        <Text style={styles.text2}>Lanjutkan</Text>
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
  },
  daftar: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text1: {
    fontSize: 21,
    right: 60,
    fontWeight: 'bold',
    top: -13,
    color: '#213555',
    alignSelf: 'center',
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
