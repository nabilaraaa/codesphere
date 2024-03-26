import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Linking, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faBookmark, faCertificate, faChevronRight, faHomeAlt, faListAlt, faPlayCircle, faQuestion, faQuestionCircle, faUser } from '@fortawesome/free-solid-svg-icons';

export default function KelasReactNative({ navigation }) {

    const handlePressMulaiLagi = () => {
        Linking.openURL('https://www.youtube.com/watch?v=iZ1iMR6_Mb8&list=PLIan8aHxsPj33EE-3KqsvkAeQxHyQ4DVt&index=1&pp=iAQB');
    };

    const handlePress01 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=iZ1iMR6_Mb8&list=PLIan8aHxsPj33EE-3KqsvkAeQxHyQ4DVt&index=1&pp=iAQB');
    };
    const handlePress02 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=_0HqJaHTigk&list=PLIan8aHxsPj33EE-3KqsvkAeQxHyQ4DVt&index=2&pp=iAQB');
    };
    const handlePress03 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=f639EP4zJPQ&list=PLIan8aHxsPj33EE-3KqsvkAeQxHyQ4DVt&index=3&pp=iAQB');
    };
    const handlePress04 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=f639EP4zJPQ&list=PLIan8aHxsPj33EE-3KqsvkAeQxHyQ4DVt&index=3&pp=iAQB');
    };
    const handlePress05 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=f639EP4zJPQ&list=PLIan8aHxsPj33EE-3KqsvkAeQxHyQ4DVt&index=3&pp=iAQB');
    };
    const handlePress06 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=f639EP4zJPQ&list=PLIan8aHxsPj33EE-3KqsvkAeQxHyQ4DVt&index=3&pp=iAQB');
    };
    const handlePress07 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=f639EP4zJPQ&list=PLIan8aHxsPj33EE-3KqsvkAeQxHyQ4DVt&index=3&pp=iAQB');
    };
    


    const VerticalScrollView = () => {
        return(
        <ScrollView contentContainerStyle={{alignItems: 'center', height: 680,}}>
            <View style={styles.card}>
                <Text style={{fontWeight: 'bold', color: '#213555', marginTop: 20, marginLeft: 10, fontSize: 16, marginBottom: 10}}>Kumpulan Materi React Native</Text>

                <TouchableOpacity style={styles.play} onPress={handlePress01}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>01</Text>
                    </View>
                    <Text style={styles.judul}>Pengenalan React Native</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>4:29 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress02}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>02</Text>
                    </View>
                    <Text style={styles.judul}>Instalasi di Windows</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>15:36 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress03}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>03</Text>
                    </View>
                    <Text style={styles.judul}>Mengenal Component</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>8:12 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress04}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>04</Text>
                    </View>
                    <Text style={styles.judul}>Belajar Core Component</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>8:51 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress05}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>05</Text>
                    </View>
                    <Text style={styles.judul}>Desain Tampilan dan Flexbox</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>18:51 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress06}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>06</Text>
                    </View>
                    <Text style={styles.judul}>State dan Props</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>12:49 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress07}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>07</Text>
                    </View>
                    <Text style={styles.judul}>Belajar Membuat Form</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>16:10 Menit</Text>
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
                    <FontAwesomeIcon icon={faArrowLeft} size={25} color='#213555' />
                </TouchableOpacity>
                <Text style={styles.text1}>Kelas React Native</Text>
            </View>
            <View style={styles.navbar}>
                <TouchableOpacity style={styles.sertiv} onPress={() => navigation.navigate('CertificateReactNative')}>
                    <FontAwesomeIcon icon={faCertificate} color='#4F709C' size={25} style={{elevation: 9}}/>
                    <FontAwesomeIcon icon={faCertificate} color='gold' size={16} style={{elevation: 9, position: 'absolute'}}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.quiz} onPress={() => navigation.navigate('QuizReactNative')}>
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
        height: 580,
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
        flexDirection: 'row',
        right: 80,
        bottom: 765
    },
    text1: {
        fontWeight: 'bold',
        color: '#213555',
        fontSize: 19,
        left: 20
    },
});
