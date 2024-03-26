import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Linking, TextInput } from 'react-native'; // Import ScrollView
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faBookmark, faHomeAlt, faListAlt, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Kelas({ navigation }) {

    const handlePressReact = () => {
        Linking.openURL('https://youtu.be/iZ1iMR6_Mb8?si=XQwiFe6gm3XhKQPZ');
    };

    const handlePressCpp = () => {
        Linking.openURL('https://www.youtube.com/watch?v=RxiSFqPo_Pc&list=PLF82-I80PwDNKmeyYBe4CkEj7excOdy7f');
    };

    const handlePressJS = () => {
        Linking.openURL('https://www.youtube.com/watch?v=_8NvUoiU_wA&list=PLnrs9DcLyeJT2OAViJYE5FfsJTTDB7hFR');
    };

    const handlePressPython = () => {
        Linking.openURL('https://www.youtube.com/watch?v=1PjHsUnOkes&list=PLZS-MHyEIRo7ab0-EveSvf4CLdyOECMm0');
    };

    const handlePressMysql = () => {
        Linking.openURL('https://www.youtube.com/watch?v=IlGj7XYf36I&list=PLL-P0eOZPhbLsQ_D5daqoqBZ4spBi8oDb');
    };

    const handlePressJava = () => {
        Linking.openURL('https://www.youtube.com/watch?v=bxOPd_b0rg4&list=PLZS-MHyEIRo6V4_vk1s1NcM2HoW5KFG7i');
    };

    const VerticalScrollView = () => {
        return(
            <ScrollView contentContainerStyle={{alignItems: 'center', height: 1110,}}>
            <TouchableOpacity style={styles.card1} onPress={() => navigation.navigate('KelasCpp')}>
                <Image
                    style={styles.thumbnail}
                    source={{ uri: 'https://img.youtube.com/vi/RxiSFqPo_Pc/hqdefault.jpg' }} // Perbarui URI gambar
                />
                <View>
                    <Text style={styles.judul}>
                        C++
                    </Text>
                    <Text style={styles.deskripsi}>
                        C++ Materi Dasar
                    </Text>
                    <Text style={styles.brand}>
                        CODESPHERE
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <FontAwesomeIcon icon={faBookmark} size={12} style={{ left: 10 }} />
                        <Text style={{ fontWeight: 'bold', marginLeft: 5, fontSize: 12, left: 10, bottom: 2 }}>39 Chapters</Text>
                    </View>
                    <Text style={styles.free}>Free</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card2} onPress={() => navigation.navigate('KelasReactNative')}>
                <Image
                    style={styles.thumbnail}
                    source={{ uri: 'https://img.youtube.com/vi/iZ1iMR6_Mb8/hqdefault.jpg' }}
                />
                <View>
                    <Text style={styles.judul}>
                        React Native
                    </Text>
                    <Text style={styles.deskripsi}>
                        React Native Materi Dasar
                    </Text>
                    <Text style={styles.brand}>
                        CODESPHERE
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <FontAwesomeIcon icon={faBookmark} size={12} style={{ left: 10 }} />
                        <Text style={{ fontWeight: 'bold', marginLeft: 5, fontSize: 12, left: 10, bottom: 2 }}>7 Chapters</Text>
                    </View>
                    <Text style={styles.free}>Free</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card3} onPress={() => navigation.navigate('KelasJavaScript')}>
                <Image
                    style={styles.thumbnail}
                    source={{ uri: 'https://img.youtube.com/vi/_8NvUoiU_wA/hqdefault.jpg' }}
                />
                <View>
                    <Text style={styles.judul}>
                        JavaScript
                    </Text>
                    <Text style={styles.deskripsi}>
                        JavaScript Materi Dasar
                    </Text>
                    <Text style={styles.brand}>
                        CODESPHERE
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <FontAwesomeIcon icon={faBookmark} size={12} style={{ left: 10 }} />
                        <Text style={{ fontWeight: 'bold', marginLeft: 5, fontSize: 12, left: 10, bottom: 2 }}>18 Chapters</Text>
                    </View>
                    <Text style={styles.free}>Free</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card4} onPress={() => navigation.navigate('KelasPython')}>
                <Image
                    style={styles.thumbnail}
                    source={{ uri: 'https://img.youtube.com/vi/1PjHsUnOkes/hqdefault.jpg' }}
                />
                <View>
                    <Text style={styles.judul}>
                        Python
                    </Text>
                    <Text style={styles.deskripsi}>
                        Python Dasar
                    </Text>
                    <Text style={styles.brand}>
                        CODESPHERE
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <FontAwesomeIcon icon={faBookmark} size={12} style={{ left: 10 }} />
                        <Text style={{ fontWeight: 'bold', marginLeft: 5, fontSize: 12, left: 10, bottom: 2 }}>21 Chapters</Text>
                    </View>
                    <Text style={styles.paid}>Paid</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card5} onPress={() => navigation.navigate('KelasMySqL')}>
                <Image
                    style={styles.thumbnail}
                    source={{ uri: 'https://img.youtube.com/vi/IlGj7XYf36I/hqdefault.jpg' }}
                />
                <View>
                    <Text style={styles.judul}>
                        MySqL
                    </Text>
                    <Text style={styles.deskripsi}>
                        MySqL Materi Dasar
                    </Text>
                    <Text style={styles.brand}>
                        CODESPHERE
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <FontAwesomeIcon icon={faBookmark} size={12} style={{ left: 10 }} />
                        <Text style={{ fontWeight: 'bold', marginLeft: 5, fontSize: 12, left: 10, bottom: 2 }}>13 Chapters</Text>
                    </View>
                    <Text style={styles.free}>Free</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card6} onPress={() => navigation.navigate('KelasJava')}>
                <Image
                    style={styles.thumbnail}
                    source={{ uri: 'https://img.youtube.com/vi/bxOPd_b0rg4/hqdefault.jpg' }}
                />
                <View>
                    <Text style={styles.judul}>
                        Java
                    </Text>
                    <Text style={styles.deskripsi}>
                        Java Materi Dasar
                    </Text>
                    <Text style={styles.brand}>
                        CODESPHERE
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <FontAwesomeIcon icon={faBookmark} size={12} style={{ left: 10 }} />
                        <Text style={{ fontWeight: 'bold', marginLeft: 5, fontSize: 12, left: 10, bottom: 2 }}>37 Chapters</Text>
                    </View>
                    <Text style={styles.free}>Free</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
        );
    };

    return(
        <View style={styles.container}>
            <View style={styles.search}>
                <FontAwesomeIcon icon={faSearch} size={20} color="white" style={styles.searchIcon} />
                <TextInput
                style={styles.searchInput}
                placeholder="Search..."
                placeholderTextColor="white"
                />
            </View>
            <VerticalScrollView/>
            <View style={styles.back}>
                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                    <FontAwesomeIcon icon={faArrowLeft} size={25} color='#213555' />
                </TouchableOpacity>
                <Text style={styles.text1}>Kelas</Text>
            </View>
            <View style={styles.navbar}>
                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('HomeScreen')}>
                    <FontAwesomeIcon icon={faHomeAlt} size={24} style={styles.navText} />
                    <Text style={styles.navText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Kelas')}>
                    <FontAwesomeIcon icon={faListAlt} size={24} style={styles.navText} />
                    <Text style={styles.navText}>Kelas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Profile')}>
                    <FontAwesomeIcon icon={faUser} size={24} style={styles.navText} />
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
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#213555',
        borderRadius: 10,
        width: 310,
        height: 55,
        padding: 10,
        marginTop: 100,
        marginBottom: 5,
        alignSelf: 'center',
      },
      searchIcon: {
        marginRight: 10,
      },
      searchInput: {
        flex: 1,
        color: 'white',
      },
    thumbnail: {
        height: 150,
        width: 120,
        backgroundColor: 'black',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15
    },
    judul: {
        fontWeight: 'bold',
        color: '#FF6B00',
        left: 10,
        marginTop: 20,
        marginBottom: 10
    },
    deskripsi: {
        fontWeight: 'bold',
        color: '#213555',
        left: 10,
        fontSize: 12
    },
    brand: {
        fontWeight: 'bold',
        opacity: 0.5,
        left: 10,
        marginTop: 2,
        marginBottom: 7,
        fontSize: 13
    },
    paid: {
        fontWeight: 'bold',
        color: '#F41616',
        left: 10,
        marginTop: 5
    },
    free: {
        fontWeight: 'bold',
        color: 'green',
        left: 10,
        marginTop: 5
    },
    card1: {
        height: 150,
        width: 320,
        backgroundColor: 'white',
        borderRadius: 15,
        top: 10,
        elevation: 5,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    card2: {
        height: 150,
        width: 320,
        backgroundColor: 'white',
        borderRadius: 15,
        top: 20,
        elevation: 5,
        flexDirection: 'row',
        marginTop: 20,
        alignSelf: 'center'

    },
    card3: {
        height: 150,
        width: 320,
        backgroundColor: 'white',
        borderRadius: 15,
        top: 20,
        elevation: 5,
        flexDirection: 'row',
        marginTop: 20,
        alignSelf: 'center'

    },
    card4: {
        height: 150,
        width: 320,
        backgroundColor: 'white',
        borderRadius: 15,
        top: 20,
        elevation: 5,
        flexDirection: 'row',
        marginTop: 20,
        alignSelf: 'center',
        marginBottom: 30

    },
    card5: {
        height: 150,
        width: 320,
        backgroundColor: 'white',
        borderRadius: 15,
        elevation: 5,
        flexDirection: 'row',
        marginTop: 10,
        alignSelf: 'center',
        marginBottom: 30,
        marginTop: 0

    },
    card6: {
        height: 150,
        width: 320,
        backgroundColor: 'white',
        borderRadius: 15,
        elevation: 5,
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: -20

    },
    python: {
        width: 70,
        height: 30,
        backgroundColor: '#213555',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginLeft: 20,
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
        alignSelf: 'center'
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
    navText: {
        color: 'white',
        marginTop: 5,
        fontSize: 12
    },
    navbar: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: 750,
        width: '100%',
        height: 100,
        backgroundColor: '#213555',
    },
    navButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 10
    },
    back: {
        position: 'absolute',
        flexDirection: 'row',
        left: 25,
        top: 50
    },
    text1: {
        fontWeight: 'bold',
        color: '#213555',
        fontSize: 19,
        left: 20
    },
});
