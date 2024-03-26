import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { faArrowLeft, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export default function Kategori({ navigation }) {
  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>      
      <View style={styles.back}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <FontAwesomeIcon icon={faArrowLeft} size={25} color='#213555'/>
        </TouchableOpacity>
        <Text style={styles.text1}>Kategori</Text>
      </View>
      <View style={styles.search}>
        <FontAwesomeIcon icon={faSearch} size={20} color="white" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="white"
        />
      </View>
      <View style={styles.content}>
        <View style={styles.line1}>
          <View style={styles.card1}>
            <TouchableOpacity style={{alignItems: 'center'}} onPress={() => navigation.navigate('KelasPython')}>
              <Image 
                  source={require('../assets/python.png')}
                  style={styles.icon1}
              />
              <Text style={styles.text2}>Python</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card1}>
            <TouchableOpacity style={{alignItems: 'center'}} onPress={() => navigation.navigate('KelasReactNative')}>
              <Image 
                  source={require('../assets/react.png')}
                  style={styles.icon}
              />
              <Text style={styles.text2}>React Native</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card1}>
            <TouchableOpacity style={{alignItems: 'center'}} onPress={() => navigation.navigate('KelasJavaScript')}>
              <Image 
                    source={require('../assets/javascript.png')}
                    style={styles.icon}
                />
                <Text style={styles.text2}>JavaScript</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.line2}>
          <View style={styles.card1}>
            <TouchableOpacity style={{alignItems: 'center'}} onPress={() => navigation.navigate('KelasJava')}>
              <Image 
                  source={require('../assets/java.png')}
                  style={styles.icon1}
              />
              <Text style={styles.text2}>Java</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card1}>
            <TouchableOpacity style={{alignItems: 'center'}} onPress={() => navigation.navigate('KelasCpp')}>
              <Image 
                  source={require('../assets/cpp.png')}
                  style={styles.icon}
              />
              <Text style={styles.text2}>C++</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card1}>
            <TouchableOpacity style={{alignItems: 'center'}} onPress={() => navigation.navigate('KelasMySqL')}>
              <Image 
                    source={require('../assets/sql.png')}
                    style={styles.icon}
                />
                <Text style={styles.text2}>MySqL</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card1: {
    alignItems: 'center',
    padding: 20,
  },
  card2: {
    padding: 20,
    right: 100
  },
  icon1: {
    width: 60,
    height: 60,
  },
  icon: {
    width: 60,
    height: 60
  },
  line1: {
    flexDirection: 'row',
    top: 180,
    position: 'absolute'
  },
  line2: {
    flexDirection: 'row',
    top: 300,
    position: 'absolute'
  },
  line3: {
    flexDirection: 'row',
    top: 415,
    position: 'absolute'
  },
  back: {
    flexDirection: 'row',
    left: 30,
    top: 60,
    position: 'absolute'
  },
  text1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#213555',
    alignSelf: 'center',
    marginLeft: 10
  },
  text2: {
    fontSize: 12,
    marginTop: 10,
    fontWeight: 'bold',
  },
  text3: {
    fontSize: 12,
    marginTop: 10,
    fontWeight: 'bold',
    marginLeft: 50
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#213555',
    borderRadius: 10,
    width: 310,
    height: 55,
    padding: 10,
    position: 'absolute',
    top: 120,
    alignSelf: 'center',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: 'white',
  },
});
