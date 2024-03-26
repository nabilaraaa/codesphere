import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Linking, TextInput } from 'react-native'; // Import ScrollView
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faBookmark, faCertificate, faChevronRight, faHomeAlt, faListAlt, faPlayCircle, faQuestion, faQuestionCircle, faUser } from '@fortawesome/free-solid-svg-icons';

export default function KelasJavaScript({ navigation }) {

    const handlePressMulaiLagi = () => {
        Linking.openURL('https://www.youtube.com/watch?v=_8NvUoiU_wA&list=PLnrs9DcLyeJT2OAViJYE5FfsJTTDB7hFR');
    };

    const handlePress01 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=_8NvUoiU_wA&list=PLnrs9DcLyeJT2OAViJYE5FfsJTTDB7hFR&index=1&pp=iAQB');
    };
    const handlePress02 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=_8NvUoiU_wA&list=PLnrs9DcLyeJT2OAViJYE5FfsJTTDB7hFR&index=1&pp=iAQB');
    };
    const handlePress03 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=OuccJageYfI&list=PLnrs9DcLyeJT2OAViJYE5FfsJTTDB7hFR&index=3&pp=iAQB');
    };
    const handlePress04 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=OuccJageYfI&list=PLnrs9DcLyeJT2OAViJYE5FfsJTTDB7hFR&index=3&pp=iAQB');
    };
    const handlePress05 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=KyvwjYobGIM&list=PLnrs9DcLyeJT2OAViJYE5FfsJTTDB7hFR&index=5&pp=iAQB');
    };
    const handlePress06 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=KyvwjYobGIM&list=PLnrs9DcLyeJT2OAViJYE5FfsJTTDB7hFR&index=5&pp=iAQB');
    };
    const handlePress07 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=B9Jv9AylyX8&list=PLnrs9DcLyeJT2OAViJYE5FfsJTTDB7hFR&index=7&pp=iAQB');
    };
    const handlePress08 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=--5zMGpyst8&list=PLnrs9DcLyeJT2OAViJYE5FfsJTTDB7hFR&index=8&pp=iAQB');
    };
    const handlePress09 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=ctwuuMFUiwc&list=PLnrs9DcLyeJT2OAViJYE5FfsJTTDB7hFR&index=9&pp=iAQB');
    };
    const handlePress10 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=jP3hwLyNO-c&list=PLnrs9DcLyeJT2OAViJYE5FfsJTTDB7hFR&index=10&pp=iAQB');
    };
    const handlePress11 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=jP3hwLyNO-c&list=PLnrs9DcLyeJT2OAViJYE5FfsJTTDB7hFR&index=10&pp=iAQB');
    };
    const handlePress12 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=2S_6pA0todk&list=PLnrs9DcLyeJT2OAViJYE5FfsJTTDB7hFR&index=12&pp=iAQB');
    };
    const handlePress13 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=2S_6pA0todk&list=PLnrs9DcLyeJT2OAViJYE5FfsJTTDB7hFR&index=12&pp=iAQB');
    };
    const handlePress14 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=AY6fo-wV8yM&list=PLnrs9DcLyeJT2OAViJYE5FfsJTTDB7hFR&index=14&pp=iAQB');
    };
    const handlePress15 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=AY6fo-wV8yM&list=PLnrs9DcLyeJT2OAViJYE5FfsJTTDB7hFR&index=14&pp=iAQB');
    };
    const handlePress16 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=AY6fo-wV8yM&list=PLnrs9DcLyeJT2OAViJYE5FfsJTTDB7hFR&index=14&pp=iAQB');
    };
    const handlePress17 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=AY6fo-wV8yM&list=PLnrs9DcLyeJT2OAViJYE5FfsJTTDB7hFR&index=14&pp=iAQB');
    };
    const handlePress18 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=AY6fo-wV8yM&list=PLnrs9DcLyeJT2OAViJYE5FfsJTTDB7hFR&index=14&pp=iAQB');
    };
    


    const VerticalScrollView = () => {
        return(
        <ScrollView contentContainerStyle={{alignItems: 'center', height: 1510,}}>
            <View style={styles.card}>
                <Text style={{fontWeight: 'bold', color: '#213555', marginTop: 20, marginLeft: 10, fontSize: 16, marginBottom: 10}}>Kumpulan Materi Javascript</Text>

                <TouchableOpacity style={styles.play} onPress={handlePress01}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>01</Text>
                    </View>
                    <Text style={styles.judul}>Pengenalan Javascript</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>8:06 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress02}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>02</Text>
                    </View>
                    <Text style={styles.judul}>Cara Mengimport Javascript</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>7:36 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress03}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>03</Text>
                    </View>
                    <Text style={styles.judul}>Menampilkan Output</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>15:56 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress04}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>04</Text>
                    </View>
                    <Text style={styles.judul}>Mengakses Elemen HTML</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>19:18 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress05}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>05</Text>
                    </View>
                    <Text style={styles.judul}>Mengubah Elemen HTML</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>12:10 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress06}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>06</Text>
                    </View>
                    <Text style={styles.judul}>Menambah & Menghapus Elemen</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>23:00 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress07}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>07</Text>
                    </View>
                    <Text style={styles.judul}>DOM Event & Event Listener</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>12:40 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress08}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>08</Text>
                    </View>
                    <Text style={styles.judul}>Variabel Javascript</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>12:17 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress09}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>09</Text>
                    </View>
                    <Text style={styles.judul}>Tipe Data Javascript</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>16:42 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress10}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>10</Text>
                    </View>
                    <Text style={styles.judul}>Tipe Data Number</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>19:51 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress11}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>11</Text>
                    </View>
                    <Text style={styles.judul}>Tipe Data String</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>37:50 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress12}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>12</Text>
                    </View>
                    <Text style={styles.judul}>Array</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>33:38 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress13}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>13</Text>
                    </View>
                    <Text style={styles.judul}>Operators Javascript</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>35:24 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress14}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>14</Text>
                    </View>
                    <Text style={styles.judul}>If Else & Switch Case</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>23:41 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress15}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>15</Text>
                    </View>
                    <Text style={styles.judul}>Form Validation Javascript</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>18:40 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress16}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>16</Text>
                    </View>
                    <Text style={styles.judul}>Function</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>23:52 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress17}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>17</Text>
                    </View>
                    <Text style={styles.judul}>Object</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>17:44 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress18}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>18</Text>
                    </View>
                    <Text style={styles.judul}>Loop While</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>21:12 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

            </View>
        </ScrollView>
        );
    };

    return(
        <View style={styles.container}>
            <TextInput 
                placeholder="Codesphere"
                placeholderTextColor="white"
                style={styles.search}
            />
            <VerticalScrollView/>
            <View style={styles.back}>
                <TouchableOpacity onPress={() => navigation.navigate('Kelas')}>
                    <FontAwesomeIcon icon={faArrowLeft} size={25} color='#213555' style={{position: 'absolute'}} />
                </TouchableOpacity>
                <Text style={styles.text1}>Kelas JavaScript</Text>
            </View>
            <View style={styles.navbar}>
                <TouchableOpacity style={styles.sertiv} onPress={() => navigation.navigate('CertificateJavaScript')}>
                    <FontAwesomeIcon icon={faCertificate} color='#4F709C' size={25} style={{elevation: 9}}/>
                    <FontAwesomeIcon icon={faCertificate} color='gold' size={16} style={{elevation: 9, position: 'absolute'}}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.quiz} onPress={() => navigation.navigate('QuizJavaScript')}>
                    <FontAwesomeIcon icon={faQuestionCircle} color='#4F709C' size={25} style={{elevation: 9}}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mulaiLagi} onPress={handlePressMulaiLagi}>
                    <Text style={{fontWeight: 'bold', color: '#213555', position: 'absolute', left: 20, fontSize: 16}}>Mulai Lagi</Text>
                    <View style={{position: 'absolute', height: 50, width: 50, backgroundColor: '#213555', borderRadius: 50, right: 5, alignItems: 'center', justifyContent: 'center'}}>
                        <FontAwesomeIcon icon={faChevronRight} color='white' size={20}/>
                    </View>
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
    mulaiLagi: {
        height: 60,
        width: 160,
        backgroundColor: 'white',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15
    },
    quiz: {
        height: 60,
        width: 70,
        backgroundColor: 'white',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sertiv: {
        height: 60,
        width: 70,
        backgroundColor: 'white',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15
    },
    judul: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#213555',
        marginLeft: 10,
        marginBottom: 20
    },
    bulet: {
        backgroundColor: '#213555',
        height: 40,
        width: 40,
        borderRadius: 40,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    number: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    play: {
        height: 70,
        width: 300,
        flexDirection: 'row',
        marginTop: 5,
        alignItems: 'center',
        borderRadius: 10,
        alignSelf: 'center'
    },
    search: {
        width: 310,
        height: 55,
        alignSelf: 'center',
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#213555',
        marginTop: 100,
        marginBottom: 5
    },
    card: {
        height: 1410,
        width: 320,
        backgroundColor: 'white',
        borderRadius: 15,
        top: 10,
        elevation: 5,
        alignSelf: 'center',
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
        bottom: 0,
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
        top: 50,
        left: 30,
        justifyContent: 'center',
    },
    text1: {
        fontWeight: 'bold',
        color: '#213555',
        fontSize: 19,
        marginLeft: 40
    },
});
