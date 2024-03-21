import { faArrowAltCircleRight, faArrowLeft, faArrowRight, faArrowRightFromBracket, faArrowRightFromFile, faArrowRightToCity, faArrowRotateRight, faBell, faChevronRight, faHomeAlt, faListAlt, faUser, faUserAlt, faUserAltSlash, faUserClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function Profile({ navigation, }) {
  return (
    <View style={styles.container}>
        <View style={styles.back}>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faArrowLeft} size={25} color='#213555'/>
        </TouchableOpacity>
        <Text style={styles.text1}>Profile</Text>
        </View>
        <View style={styles.card}>

        </View>
        <View style={styles.navbar}>
        <TouchableOpacity style={styles.navButton} onPress={() => console.log("Home pressed")}>
          <FontAwesomeIcon icon={faHomeAlt} size={22} color='white'/>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => console.log("List pressed")}>
          <FontAwesomeIcon icon={faListAlt} size={22} color='white'/>
          <Text style={styles.navText}>Kelas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => console.log("Profile pressed")}>
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
    left: 20
  },
});