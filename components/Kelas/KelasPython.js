import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Linking, TextInput } from 'react-native'; // Import ScrollView
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faBookmark, faCertificate, faChevronRight, faHomeAlt, faListAlt, faPlayCircle, faQuestion, faQuestionCircle, faUser } from '@fortawesome/free-solid-svg-icons';

export default function KelasPython({ navigation }) {

    const handlePressMulaiLagi = () => {
        Linking.openURL('https://www.youtube.com/watch?v=1PjHsUnOkes&list=PLZS-MHyEIRo7ab0-EveSvf4CLdyOECMm0&index=1&pp=iAQB');
    };

    const handlePress01 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=1PjHsUnOkes&list=PLZS-MHyEIRo7ab0-EveSvf4CLdyOECMm0&index=1&pp=iAQB');
    };
    const handlePress02 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=w9emRmkbeps&list=PLZS-MHyEIRo7ab0-EveSvf4CLdyOECMm0&index=2&pp=iAQB');
    };
    const handlePress03 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=upngNSC9FU8&list=PLZS-MHyEIRo7ab0-EveSvf4CLdyOECMm0&index=3&pp=iAQB');
    };
    const handlePress04 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=DE-h_oR8Nmo&list=PLZS-MHyEIRo7ab0-EveSvf4CLdyOECMm0&index=4&pp=iAQB');
    };
    const handlePress05 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=6F0T4IEzke4&list=PLZS-MHyEIRo7ab0-EveSvf4CLdyOECMm0&index=5&pp=iAQB');
    };
    const handlePress06 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=k9ANKapvMKo&list=PLZS-MHyEIRo7ab0-EveSvf4CLdyOECMm0&index=6&pp=iAQB');
    };
    const handlePress07 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=k9ANKapvMKo&list=PLZS-MHyEIRo7ab0-EveSvf4CLdyOECMm0&index=6&pp=iAQB');
    };
    const handlePress08 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=NDjX-8kak2g&list=PLZS-MHyEIRo7ab0-EveSvf4CLdyOECMm0&index=8&pp=iAQB');
    };
    const handlePress09 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=r8QcqWXUy2k&list=PLZS-MHyEIRo7ab0-EveSvf4CLdyOECMm0&index=9&pp=iAQB');
    };
    const handlePress10 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=r8QcqWXUy2k&list=PLZS-MHyEIRo7ab0-EveSvf4CLdyOECMm0&index=9&pp=iAQB');
    };
    const handlePress11 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=rakQ1ji9XRM&list=PLZS-MHyEIRo7ab0-EveSvf4CLdyOECMm0&index=11&pp=iAQB');
    };
    const handlePress12 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=G6fmTwxx8rw&list=PLZS-MHyEIRo7ab0-EveSvf4CLdyOECMm0&index=12&pp=iAQB');
    };
    const handlePress13 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=pjHk9CrB1JE&list=PLZS-MHyEIRo7ab0-EveSvf4CLdyOECMm0&index=13&pp=iAQB');
    };
    const handlePress14 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=pjHk9CrB1JE&list=PLZS-MHyEIRo7ab0-EveSvf4CLdyOECMm0&index=13&pp=iAQB');
    };
    const handlePress15 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=sSgKKLzxqS0&list=PLZS-MHyEIRo7ab0-EveSvf4CLdyOECMm0&index=15&pp=iAQB');
    };
    const handlePress16 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=dhIAsMkQeGo&list=PLZS-MHyEIRo7ab0-EveSvf4CLdyOECMm0&index=16&pp=iAQB');
    };
    const handlePress17 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=bn88uOxuUdc&list=PLZS-MHyEIRo7ab0-EveSvf4CLdyOECMm0&index=17&pp=iAQB');
    };
    const handlePress18 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=Kg_Je5POw84&list=PLZS-MHyEIRo7ab0-EveSvf4CLdyOECMm0&index=18&pp=iAQB');
    };
    const handlePress19 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=Kg_Je5POw84&list=PLZS-MHyEIRo7ab0-EveSvf4CLdyOECMm0&index=18&pp=iAQB');
    };
    const handlePress20 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=oLloOdOmCdQ&list=PLZS-MHyEIRo7ab0-EveSvf4CLdyOECMm0&index=20&pp=iAQB');
    };
    const handlePress21 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=nNWkm-Kv4Ps&list=PLZS-MHyEIRo7ab0-EveSvf4CLdyOECMm0&index=21&pp=iAQB');
    };
    


    const VerticalScrollView = () => {
        return(
        <ScrollView contentContainerStyle={{alignItems: 'center', height: 1730,}}>
            <View style={styles.card}>
                <Text style={{fontWeight: 'bold', color: '#213555', marginTop: 20, marginLeft: 10, fontSize: 16, marginBottom: 10}}>Kumpulan Materi C++</Text>

                <TouchableOpacity style={styles.play} onPress={handlePress01}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>01</Text>
                    </View>
                    <Text style={styles.judul}>Pendahuluan</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>17:21 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress02}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>02</Text>
                    </View>
                    <Text style={styles.judul}>Constructor</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>9:30 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress03}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>03</Text>
                    </View>
                    <Text style={styles.judul}>Class dan Instance variables</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>5:40 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress04}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>04</Text>
                    </View>
                    <Text style={styles.judul}>Methods</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>12:59 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress05}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>05</Text>
                    </View>
                    <Text style={styles.judul}>Latihan OOP sederhana</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>21:19 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress06}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>06</Text>
                    </View>
                    <Text style={styles.judul}>Latihan OOP tkinter</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>8:38 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress07}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>07</Text>
                    </View>
                    <Text style={styles.judul}>Private Variable</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>13:21 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress08}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>08</Text>
                    </View>
                    <Text style={styles.judul}>Encapsulasi</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>11:54 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress09}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>09</Text>
                    </View>
                    <Text style={styles.judul}>Staticmethod & Classmethod</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>10:38 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress10}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>10</Text>
                    </View>
                    <Text style={styles.judul}>Getter & Setter</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>17:08 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress11}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>11</Text>
                    </View>
                    <Text style={styles.judul}>Latihan Encapsulasi</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>18:12 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress12}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>12</Text>
                    </View>
                    <Text style={styles.judul}>Pendahuluan Inheritance</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>10:28 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress13}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>13</Text>
                    </View>
                    <Text style={styles.judul}>Super</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>8:22 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress14}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>14</Text>
                    </View>
                    <Text style={styles.judul}>Override Method</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>8:58 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress15}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>15</Text>
                    </View>
                    <Text style={styles.judul}>Latihan Inheritance</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>14:54 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress16}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>16</Text>
                    </View>
                    <Text style={styles.judul}>Multiple Inheritance</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>9:32 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress17}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>17</Text>
                    </View>
                    <Text style={styles.judul}>Method Resolution Order</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>5:54 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress18}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>18</Text>
                    </View>
                    <Text style={styles.judul}>Diamond Problem</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>6:46 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress19}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>19</Text>
                    </View>
                    <Text style={styles.judul}>Magic Method</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>11:46 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress20}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>20</Text>
                    </View>
                    <Text style={styles.judul}>Class Abstract</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>11:32 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.play} onPress={handlePress21}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>21</Text>
                    </View>
                    <Text style={styles.judul}>Class Abstract & Decorator</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>14:41 Menit</Text>
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
                <Text style={styles.text1}>Kelas Python</Text>
            </View>
            <View style={styles.navbar}>
                <TouchableOpacity style={styles.sertiv} onPress={() => navigation.navigate('CertificatePython')}>
                    <FontAwesomeIcon icon={faCertificate} color='#4F709C' size={25} style={{elevation: 9}}/>
                    <FontAwesomeIcon icon={faCertificate} color='gold' size={16} style={{elevation: 9, position: 'absolute'}}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.quiz} onPress={() => navigation.navigate('QuizPython')}>
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
        height: 1630,
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
        right: 90,
        bottom: 765
    },
    text1: {
        fontWeight: 'bold',
        color: '#213555',
        fontSize: 19,
        left: 20
    },
});
