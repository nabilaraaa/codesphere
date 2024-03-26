import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { faBell, faBookmark, faBorderAll, faChevronRight, faHomeAlt, faListAlt, faSearch, faUser, faUserAlt, faUserAltSlash, faUserClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export default function HomeScreen({ navigation }) {

  const HorizontalScrollView1 = () => {
    return(
      <ScrollView horizontal={true} style={{flexDirection: 'row', marginTop: 0, height: 250 }}>
      <View style={styles.sv1}>
        <TouchableOpacity onPress={() => navigation.navigate('Kategori')}>
          <View style={styles.card1}>
            <View style={styles.All}>
              <FontAwesomeIcon icon={faBorderAll} size={30} color='white' />
            </View>
            <Text style={styles.text5}>All</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('KelasPython')}>
          <View style={styles.card1}>
            <Image
              source={require('../assets/python.png')}
              style={styles.icon}
            />
            <Text style={styles.text6}>Python</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('KelasReactNative')}>
          <View style={styles.card1}>
            <Image
              source={require('../assets/react.png')}
              style={styles.icon}
            />
            <Text style={styles.text6}>React Native</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('KelasCpp')}>
          <View style={styles.card1}>
            <Image
              source={require('../assets/cpp.png')}
              style={styles.icon}
            />
            <Text style={styles.text6}>C++</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('KelasMySql')}>
          <View style={styles.card1}>
            <Image
              source={require('../assets/sql.png')}
              style={styles.icon}
            />
            <Text style={styles.text6}>SQL</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('KelasJava')}>
          <View style={styles.card1}>
            <Image
              source={require('../assets/java.png')}
              style={styles.icon}
            />
            <Text style={styles.text6}>Java</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('KelasJavaScript')}>
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
    );
  };


  const HorizontalScrollView2 = () => {
    return(
        <ScrollView horizontal={true} style={{flexDirection: 'row', top: 370, position: 'absolute' }}>
        <TouchableOpacity style={styles.python}>
            <Text style={{ color: 'white' }}>Python</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.React}>
            <Text style={{ color: 'white' }}>React Native</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Cpp}>
            <Text style={{ color: 'white' }}>C++</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.JavaS}>
            <Text style={{ color: 'white' }}>JavaScript</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.HTML}>
            <Text style={{ color: 'white' }}>HTML</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Sql}>
            <Text style={{ color: 'white' }}>SQL</Text>
        </TouchableOpacity>
    </ScrollView>
    );
  };

  const AllCategories = () => {
    return (
        <ScrollView style={{ position: 'absolute',height: 370, top: 410, marginBottom: 30}} >
          <TouchableOpacity style={styles.card2} onPress={() => navigation.navigate('KelasReactNative')}>
            <Image
                source={require('../assets/BG/BGReact.png')}
                style={styles.bg}
            />
            <Text style={{fontWeight: 'bold', color: '#213555', marginTop: 5, fontSize: 16, marginLeft: 5}}>React Native Home Service App</Text>
            <Text style={{fontWeight: 'bold', color: '#213555', opacity: 0.5, marginTop: 1, marginLeft: 5}}>CODESPHERE</Text>
            <View style={{fontWeight: 'bold', color: '#213555', flexDirection: 'row'}}>
              <FontAwesomeIcon icon={faBookmark} size={15} color='#213555' style={{ left: 5, top: 2 }}/>
              <Text style={{fontWeight: 'bold', color: '#213555', marginLeft: 10}}>7 Chapters</Text>
              <Text style={{position: 'absolute', color: 'red', fontWeight: 'bold', right: 15}}>Paid</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card2} onPress={() => navigation.navigate('KelasCpp')}>
            <Image
                source={require('../assets/BG/BGCpp.png')}
                style={styles.bg}
            />
            <Text style={{fontWeight: 'bold', color: '#213555', marginTop: 5, fontSize: 16, marginLeft: 5}}>C++</Text>
            <Text style={{fontWeight: 'bold', color: '#213555', opacity: 0.5, marginTop: 1, marginLeft: 5}}>CODESPHERE</Text>
            <View style={{fontWeight: 'bold', color: '#213555', flexDirection: 'row'}}>
              <FontAwesomeIcon icon={faBookmark} size={15} color='#213555' style={{ left: 5, top: 2 }}/>
              <Text style={{fontWeight: 'bold', color: '#213555', marginLeft: 10}}>39 Chapters</Text>
              <Text style={{position: 'absolute', color: 'red', fontWeight: 'bold', right: 15}}>Paid</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card2} onPress={() => navigation.navigate('JavaScript')}>
            <Image
                source={require('../assets/BG/BGJs.webp')}
                style={styles.bg}
            />
            <Text style={{fontWeight: 'bold', color: '#213555', marginTop: 5, fontSize: 16, marginLeft: 5}}>JavaScript</Text>
            <Text style={{fontWeight: 'bold', color: '#213555', opacity: 0.5, marginTop: 1, marginLeft: 5}}>CODESPHERE</Text>
            <View style={{fontWeight: 'bold', color: '#213555', flexDirection: 'row'}}>
              <FontAwesomeIcon icon={faBookmark} size={15} color='#213555' style={{ left: 5, top: 2 }}/>
              <Text style={{fontWeight: 'bold', color: '#213555', marginLeft: 10}}>18 Chapters</Text>
              <Text style={{position: 'absolute', color: 'red', fontWeight: 'bold', right: 15}}>Paid</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card2} onPress={() => navigation.navigate('MySqL')}>
            <Image
                source={require('../assets/BG/BGSql.jpg')}
                style={styles.bg}
            />
            <Text style={{fontWeight: 'bold', color: '#213555', marginTop: 5, fontSize: 16, marginLeft: 5}}>MySqL</Text>
            <Text style={{fontWeight: 'bold', color: '#213555', opacity: 0.5, marginTop: 1, marginLeft: 5}}>CODESPHERE</Text>
            <View style={{fontWeight: 'bold', color: '#213555', flexDirection: 'row'}}>
              <FontAwesomeIcon icon={faBookmark} size={15} color='#213555' style={{ left: 5, top: 2 }}/>
              <Text style={{fontWeight: 'bold', color: '#213555', marginLeft: 10}}>13 Chapters</Text>
              <Text style={{position: 'absolute', color: 'red', fontWeight: 'bold', right: 15}}>Paid</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card2} onPress={() => navigation.navigate('Python')}>
            <Image
                source={require('../assets/BG/BGPython.png')}
                style={styles.bg}
            />
            <Text style={{fontWeight: 'bold', color: '#213555', marginTop: 5, fontSize: 16, marginLeft: 5}}>Python</Text>
            <Text style={{fontWeight: 'bold', color: '#213555', opacity: 0.5, marginTop: 1, marginLeft: 5}}>CODESPHERE</Text>
            <View style={{fontWeight: 'bold', color: '#213555', flexDirection: 'row'}}>
              <FontAwesomeIcon icon={faBookmark} size={15} color='#213555' style={{ left: 5, top: 2 }}/>
              <Text style={{fontWeight: 'bold', color: '#213555', marginLeft: 10}}>21 Chapters</Text>
              <Text style={{position: 'absolute', color: 'red', fontWeight: 'bold', right: 15}}>Paid</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card2} onPress={() => navigation.navigate('Java')}>
            <Image
                source={require('../assets/BG/BGJava.jpg')}
                style={styles.bg}
            />
            <Text style={{fontWeight: 'bold', color: '#213555', marginTop: 5, fontSize: 16, marginLeft: 5}}>Java</Text>
            <Text style={{fontWeight: 'bold', color: '#213555', opacity: 0.5, marginTop: 1, marginLeft: 5}}>CODESPHERE</Text>
            <View style={{fontWeight: 'bold', color: '#213555', flexDirection: 'row'}}>
              <FontAwesomeIcon icon={faBookmark} size={15} color='#213555' style={{ left: 5, top: 2 }}/>
              <Text style={{fontWeight: 'bold', color: '#213555', marginLeft: 10}}>37 Chapters</Text>
              <Text style={{position: 'absolute', color: 'red', fontWeight: 'bold', right: 15}}>Paid</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
    );
  };



  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
        <View style={styles.container}>
        <HorizontalScrollView1/>
        <HorizontalScrollView2/>
          <Text style={styles.text1}>Selamat Datang!</Text>
          <Text style={styles.text2}>Apa yang ingin kamu pelajari hari ini?</Text>
          <View>
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
            <TouchableOpacity style={styles.ls} onPress={() => navigation.navigate('Terpopuler')}>
              <Text style={styles.text8}>LIHAT SEMUA</Text>
              <FontAwesomeIcon style={{ opacity: 0.8, right: 5 }} icon={faChevronRight} color='#213555' size={13} />
            </TouchableOpacity>
          </View>
        <AllCategories/>
          <View style={styles.navbar}>
            <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('HomeScreen')}>
              <FontAwesomeIcon icon={faHomeAlt} size={22} color='white' />
              <Text style={styles.navText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Kelas')}>
              <FontAwesomeIcon icon={faListAlt} size={22} color='white' />
              <Text style={styles.navText}>Kelas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Profile')}>
              <FontAwesomeIcon icon={faUser} size={22} color='white' />
              <Text style={styles.navText}>Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white', // Customize the background color
  },
  bg: {
    height: 110,
    width: 300,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  card2: {
    width: 300,
    height: 200,
    elevation: 2,
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 20

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
    width: 390,
    height: 90,
    backgroundColor: '#213555',
    position: 'absolute',
    top: 760
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
    top: 330,
    position: 'absolute'
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#213555',
    borderRadius: 10,
    width: 350,
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
    maxWidth: 300,
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
  python: {
    width: 70,
    height: 30,
    backgroundColor: '#213555',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginLeft: 30,
    alignSelf: 'center'
},
HTML: {
    width: 60,
    height: 30,
    backgroundColor: '#213555',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginLeft: 10,
    alignSelf: 'center'
},
Cpp: {
    width: 50,
    height: 30,
    backgroundColor: '#213555',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginLeft: 10,
    alignSelf: 'center'
},
Sql: {
    width: 50,
    height: 30,
    backgroundColor: '#213555',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginLeft: 10,
    alignSelf: 'center',
    marginRight: 30
},
React: {
    width: 100,
    height: 30,
    backgroundColor: '#213555',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginLeft: 10,
    alignSelf: 'center'
},
JavaS: {
    width: 90,
    height: 30,
    backgroundColor: '#213555',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginLeft: 10,
    alignSelf: 'center'
},
});
