import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { faArrowLeft, faArrowRight, faDeleteLeft, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export default function Quiz2({ navigation }) {

  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faArrowLeft} size={25} color='#213555'/>
        </TouchableOpacity>
        <Text style={styles.text1}>Quiz</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.text3}>Pertanyaan</Text>
        <Text style={styles.text6}>2/10</Text>
        <Text style={styles.text5}>Apa tujuan penggunaan try...catch??</Text>
        <TouchableOpacity style={styles.choose1}>
          <Text style={styles.text4}>Untuk menghentikan eksekusi kode jika terjadi error</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.choose2}>
          <Text style={styles.text4}>Untuk menampilkan pesan kesalahan saat terjadi error</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.choose2}>
          <Text style={styles.text4}>Untuk mengatur ulang koneksi API jika terjadi error</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.choose3}>
          <Text style={styles.text4}>Untuk menangkap dan menangani error yang mungkin terjadi saat melakukan request data dari API</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.option}>
        <TouchableOpacity style={styles.ulang} onPress={() => console.log("Quiz1")}>
          <FontAwesomeIcon icon={faArrowLeft} color='white'/>
          <Text style={styles.text2}>Ulang</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.lanjut}>
          <Text style={styles.text2}>Lanjut</Text>
          <FontAwesomeIcon icon={faArrowRight} color='white'/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  choose1: {
    width: 280,
    height: 50,
    backgroundColor: '#4F709C',
    borderRadius: 10,
    margin: 10,
    marginTop: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  choose2: {
    width: 280,
    height: 50,
    backgroundColor: '#4F709C',
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  choose3: {
    width: 280,
    height: 70,
    backgroundColor: '#4F709C',
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  ulang: {
    borderRadius: 40,
    position: 'absolute',
    flexDirection: 'row',
    width: 120,
    height: 45,
    backgroundColor: '#4F709C',
    alignItems: 'center',
    justifyContent: 'center',
    right: 20
  },
  lanjut: {
    borderRadius: 40,
    position: 'absolute',
    flexDirection: 'row',
    width: 120,
    height: 45,
    backgroundColor: '#213555',
    alignItems: 'center',
    justifyContent: 'center',
    left: 20
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 100
  },
  card: {
    height: 510,
    width: 300,
    backgroundColor: 'white',
    position: 'absolute',
    top: 140,
    borderRadius: 15,
    elevation: 5,
    alignItems: 'center'
  },
  back: {
    flexDirection: 'row',
    right: 115,
    bottom: 310
  },
  text1: {
    fontWeight: 'bold',
    color: '#213555',
    left: 10,
    fontSize: 19,
    left: 100
  },
  text2: {
    color: 'white',
    margin: 10,
    fontWeight: 'bold'
  },
  text3: {
    color: '#4F709C',
    position: 'absolute',
    left: 15,
    top: 10,
    fontSize: 16
  },
  text4: {
    color: 'white',
    textAlign: 'center',
    maxWidth: 250
  },
  text5: {
    color: 'black',
    position: 'absolute',
    top: 110,
    fontSize: 15,
    maxWidth: 250,
    textAlign: 'center'
  },
  text6: {
    color: '#4F709C',
    position: 'absolute',
    right: 15,
    top: 10,
    fontSize: 16
  },
});