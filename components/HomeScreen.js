import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { faArrowAltCircleRight, faArrowRight, faArrowRightFromBracket, faArrowRightFromFile, faArrowRightToCity, faArrowRotateRight, faBell, faBorderAll, faChevronRight, faHomeAlt, faListAlt, faSearch, faUser, faUserAlt, faUserAltSlash, faUserClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export default function HomeScreen({ navigation }) {
  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.container}>
        <Text style={styles.text1}>Hi, NASTITI</Text>
        <Text style={styles.text2}>Apa yang ingin kamu pelajari hari ini? Telusuri Disini.</Text>
        <View>
        </View>
        <View>
          <ScrollView style={{ height: 100 }} horizontal>
            <View style={styles.sv1}>
              <TouchableOpacity onPress={() => navigation.navigate('Kategori')}>
                <View style={styles.card1}>
                  <View style={styles.All}>
                    <FontAwesomeIcon icon={faBorderAll} size={30} color='white' />
                  </View>
                  <Text style={styles.text5}>All</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.card1}>
                  <Image
                    source={require('../assets/python.png')}
                    style={styles.icon}
                  />
                  <Text style={styles.text6}>Python</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.card1}>
                  <Image
                    source={require('../assets/react.png')}
                    style={styles.icon}
                  />
                  <Text style={styles.text6}>React Native</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.card1}>
                  <Image
                    source={require('../assets/cpp.png')}
                    style={styles.icon}
                  />
                  <Text style={styles.text6}>C++</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.card1}>
                  <Image
                    source={require('../assets/sql.png')}
                    style={styles.icon}
                  />
                  <Text style={styles.text6}>SQL</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.card1}>
                  <Image
                    source={require('../assets/html.png')}
                    style={styles.icon}
                  />
                  <Text style={styles.text6}>HTML</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.card1}>
                  <Image
                    source={require('../assets/java.png')}
                    style={styles.icon}
                  />
                  <Text style={styles.text6}>Java</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.card1}>
                  <Image
                    source={require('../assets/javascript.png')}
                    style={styles.icon}
                  />
                  <Text style={styles.text6}>Javascript</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <FontAwesomeIcon
          style={styles.bell}
          icon={faBell} size={28} color="#213555"
        />
      <View style={styles.search}>
        <FontAwesomeIcon icon={faSearch} size={20} color="white" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="white"
        />
      </View>
        <View style={styles.kategori}>
          <Text style={styles.text3}>Kategori</Text>
          <TouchableOpacity style={styles.ls} onPress={() => navigation.navigate('Kategori')}>
            <Text style={styles.text4}>LIHAT SEMUA</Text>
            <FontAwesomeIcon style={{ opacity: 0.8 }} icon={faChevronRight} color='#213555' size={13} />
          </TouchableOpacity>
        </View>
        <View style={styles.terpopuler}>
          <Text style={styles.text7}>Terpopuler</Text>
          <TouchableOpacity style={styles.ls}>
            <Text style={styles.text8}>LIHAT SEMUA</Text>
            <FontAwesomeIcon style={{ opacity: 0.8, right: 5 }} icon={faChevronRight} color='#213555' size={13} />
          </TouchableOpacity>
        </View>
        <View style={styles.navbar}>
          <TouchableOpacity style={styles.navButton} onPress={() => console.log("Home pressed")}>
            <FontAwesomeIcon icon={faHomeAlt} size={22} color='white' />
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => console.log("List pressed")}>
            <FontAwesomeIcon icon={faListAlt} size={22} color='white' />
            <Text style={styles.navText}>Kelas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => console.log("Profile pressed")}>
            <FontAwesomeIcon icon={faUser} size={22} color='white' />
            <Text style={styles.navText}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
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
    marginLeft: 20,
    width: 50,
    height: 50
  },
  crp: {
    width: 50,
    height: 20,
    backgroundColor: '#213555'
  },
  sv1: {
    flexDirection: 'row',
    padding: 30,
    top: 200,
    height: 100
  },
  sv2: {
    flexDirection: 'row',
    padding: 30,
    top: 600,
  },
  card1: {
    alignItems: 'center'
  },
  All: {
    height: 50,
    width: 50,
    backgroundColor: '#213555',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
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
    width: '100%',
    height: 90,
    backgroundColor: '#213555',
    position: 'absolute',
    bottom: 0,
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 10
  },
  ls: {
    flexDirection: 'row',
    left: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },
  kategori: {
    flexDirection: 'row',
    top: 190,
    position: 'absolute'
  },
  terpopuler: {
    flexDirection: 'row',
    top: 320,
    position: 'absolute'
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
  bell: {
    position: 'absolute',
    top: 70,
    right: 30
  },
  text1: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#213555',
    top: 55,
    left: 25,
    position: 'absolute'
  },
  text2: {
    color: '#213555',
    top: 90,
    left: 25,
    maxWidth: 190,
    fontSize: 12,
    opacity: 0.7,
    position: 'absolute'
  },
  text3: {
    right: 70,
    fontWeight: 'bold',
    color: '#213555',
    fontSize: 17,
  },
  text4: {
    fontSize: 12,
    color: '#213555',
    marginRight: 5,
    fontWeight: 'bold',
    opacity: 0.7,
  },
  text5: {
    fontSize: 12,
    marginTop: 10,
    fontWeight: 'bold'
  },
  text6: {
    fontSize: 12,
    marginTop: 10,
    fontWeight: 'bold',
    marginLeft: 20
  },
  text7: {
    right: 65,
    fontWeight: 'bold',
    color: '#213555',
    fontSize: 17,
  },
  text8: {
    fontSize: 12,
    color: '#213555',
    right: 10,
    fontWeight: 'bold',
    opacity: 0.7,
  },

});
