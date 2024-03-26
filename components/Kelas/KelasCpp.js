import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Linking, TextInput } from 'react-native'; // Import ScrollView
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faCertificate, faChevronRight, faPlayCircle, faQuestion, faQuestionCircle, faUser } from '@fortawesome/free-solid-svg-icons';

export default function KelasCpp({ navigation }) {

    const handlePressMulaiLagi = () => {
        Linking.openURL('https://www.youtube.com/watch?v=RxiSFqPo_Pc&list=PLF82-I80PwDNKmeyYBe4CkEj7excOdy7f');
    };

    const handlePress01 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=WtBF_-pLrjE&list=PLZS-MHyEIRo4Ze0bbGB1WKBSNMPzi-eWI&index=1&pp=iAQB');
    };
    const handlePress02 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=IBlpAwAccog&list=PLF82-I80PwDNKmeyYBe4CkEj7excOdy7f&index=2&pp=iAQB');
    };
    const handlePress03 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=wiH83p6tY9o&list=PLF82-I80PwDNKmeyYBe4CkEj7excOdy7f&index=3&pp=iAQB');
    };
    const handlePress04 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=O14JHtY5dcY&list=PLF82-I80PwDNKmeyYBe4CkEj7excOdy7f&index=4&pp=iAQB');
    };
    const handlePress05 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=EQ1jhQMkByA&list=PLF82-I80PwDNKmeyYBe4CkEj7excOdy7f&index=5&pp=iAQB');
    };
    const handlePress06 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=V3nL5j_th9c&list=PLF82-I80PwDNKmeyYBe4CkEj7excOdy7f&index=6&pp=iAQB');
    };
    const handlePress07 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=NG8GLjfQ610&list=PLF82-I80PwDNKmeyYBe4CkEj7excOdy7f&index=7&pp=iAQB');
    };
    const handlePress08 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=A4-MeIfS3Go&list=PLF82-I80PwDNKmeyYBe4CkEj7excOdy7f&index=8&pp=iAQB');
    };
    const handlePress09 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=RGp8TK8ojjI&list=PLF82-I80PwDNKmeyYBe4CkEj7excOdy7f&index=9&pp=iAQB');
    };
    const handlePress10 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=GwIoYTAS3Co&list=PLF82-I80PwDNKmeyYBe4CkEj7excOdy7f&index=10&pp=iAQB');
    };
    const handlePress11 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=uRzANg-Wikw&list=PLF82-I80PwDNKmeyYBe4CkEj7excOdy7f&index=11&pp=iAQB');
    };
    const handlePress12 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=vp9EA79RJQo&list=PLF82-I80PwDNKmeyYBe4CkEj7excOdy7f&index=12&pp=iAQB');
    };
    const handlePress13 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=3f0IAUcy15M&list=PLF82-I80PwDNKmeyYBe4CkEj7excOdy7f&index=13&pp=iAQB');
    };
    const handlePress14 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=KmV62WyNszw&list=PLF82-I80PwDNKmeyYBe4CkEj7excOdy7f&index=14&pp=iAQB');
    };
    const handlePress15 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=Il8d7n5DVQw&list=PLF82-I80PwDNKmeyYBe4CkEj7excOdy7f&index=15&pp=iAQB');
    };
    const handlePress16 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=R2Z_fV6V3J8&list=PLF82-I80PwDNKmeyYBe4CkEj7excOdy7f&index=16&pp=iAQB');
    };
    const handlePress17 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=Ub4Cxm8Ty2M&list=PLF82-I80PwDNKmeyYBe4CkEj7excOdy7f&index=17&pp=iAQB');
    };
    const handlePress18 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=0D1sVWSU_5Q&list=PLF82-I80PwDNKmeyYBe4CkEj7excOdy7f&index=18&pp=iAQB');
    };
    const handlePress19 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=yKBQKRiC3wo&list=PLF82-I80PwDNKmeyYBe4CkEj7excOdy7f&index=19&pp=iAQB');
    };
    const handlePress20 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=iRrS2-TYmuo&list=PLF82-I80PwDNKmeyYBe4CkEj7excOdy7f&index=20&pp=iAQB');
    };
    const handlePress21 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=eeeXcilV6QU&list=PLF82-I80PwDNKmeyYBe4CkEj7excOdy7f&index=21&pp=iAQB');
    };
    const handlePress22 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=gT0TaouoLAQ&list=PLF82-I80PwDNKmeyYBe4CkEj7excOdy7f&index=22&pp=iAQB');
    };
    const handlePress23 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=vPMTn2bNJM8&list=PLF82-I80PwDNKmeyYBe4CkEj7excOdy7f&index=23&pp=iAQB');
    };
    const handlePress24 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=9KwlHgHO-ws&list=PLF82-I80PwDNKmeyYBe4CkEj7excOdy7f&index=24&pp=iAQB');
    };
    const handlePress25 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=rCXzo-QBHis&list=PLF82-I80PwDNKmeyYBe4CkEj7excOdy7f&index=25&pp=iAQB');
    };
    const handlePress26 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=ofRzA4f-DoA&list=PLF82-I80PwDNKmeyYBe4CkEj7excOdy7f&index=26&pp=iAQB');
    };
    const handlePress27 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=nrcT1qvEYnI&list=PLF82-I80PwDNKmeyYBe4CkEj7excOdy7f&index=27&pp=iAQB');
    };
    const handlePress28 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=EixLwC1SiKo&list=PLF82-I80PwDNKmeyYBe4CkEj7excOdy7f&index=28&pp=iAQB');
    };
    const handlePress29 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=tZTDT078qE4&list=PLF82-I80PwDNKmeyYBe4CkEj7excOdy7f&index=29&pp=iAQB');
    };
    const handlePress30 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=ur_L_4uS-Io&list=PLF82-I80PwDNKmeyYBe4CkEj7excOdy7f&index=30&pp=iAQB');
    };
    const handlePress31 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=bejb06wo_NI&list=PLF82-I80PwDNKmeyYBe4CkEj7excOdy7f&index=31&pp=iAQB');
    };
    const handlePress32 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=1TjlFQGnkKg&list=PLF82-I80PwDNKmeyYBe4CkEj7excOdy7f&index=32&pp=iAQB');
    };
    const handlePress33 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=0p69GK73vpA&list=PLF82-I80PwDNKmeyYBe4CkEj7excOdy7f&index=33&pp=iAQB');
    };
    const handlePress34 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=_-WwvT5AkeA&list=PLF82-I80PwDNKmeyYBe4CkEj7excOdy7f&index=34&pp=iAQB');
    };
    const handlePress35 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=spFoOZsju0s&list=PLF82-I80PwDNKmeyYBe4CkEj7excOdy7f&index=35&pp=iAQB');
    };
    const handlePress36 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=IFgS-2O6f0E&list=PLF82-I80PwDNKmeyYBe4CkEj7excOdy7f&index=36&pp=iAQB');
    };
    const handlePress37 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=1UiqoWNuu9g&list=PLF82-I80PwDNKmeyYBe4CkEj7excOdy7f&index=37&pp=iAQB');
    };
    const handlePress38 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=K0nhwwhpldk&list=PLF82-I80PwDNKmeyYBe4CkEj7excOdy7f&index=38&pp=iAQB');
    };
    const handlePress39 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=K0nhwwhpldk&list=PLF82-I80PwDNKmeyYBe4CkEj7excOdy7f&index=38&pp=iAQB');
    };
    


    const VerticalScrollView = () => {
        return(
        <ScrollView contentContainerStyle={{alignItems: 'center', height: 3090,}}>
            <View style={styles.card}>
                <Text style={{fontWeight: 'bold', color: '#213555', marginTop: 20, marginLeft: 10, fontSize: 16, marginBottom: 10}}>Kumpulan Materi C++</Text>

                <TouchableOpacity style={styles.play} onPress={handlePress01}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>01</Text>
                    </View>
                    <Text style={styles.judul}>Development Environment C++</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>2:21 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress02}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>02</Text>
                    </View>
                    <Text style={styles.judul}>Hello World</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>3:36 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress03}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>03</Text>
                    </View>
                    <Text style={styles.judul}>Komentar</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>2:36 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress04}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>04</Text>
                    </View>
                    <Text style={styles.judul}>Namespace STD</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>1:19 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress05}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>05</Text>
                    </View>
                    <Text style={styles.judul}>Variabel</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>5:47 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress06}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>06</Text>
                    </View>
                    <Text style={styles.judul}>Konstanta Define</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>2:17 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress07}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>07</Text>
                    </View>
                    <Text style={styles.judul}>Konstanta Const</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>1:44 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress08}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>08</Text>
                    </View>
                    <Text style={styles.judul}>Operator Assignment</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>2:28 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress09}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>09</Text>
                    </View>
                    <Text style={styles.judul}>Operator Aritmetis</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>1:05 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress10}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>10</Text>
                    </View>
                    <Text style={styles.judul}>Operator Compound</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>1:48 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress11}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>11</Text>
                    </View>
                    <Text style={styles.judul}>Operator Increment</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>2:21 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress12}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>12</Text>
                    </View>
                    <Text style={styles.judul}>Operator Relasi</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>2:48 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress13}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>13</Text>
                    </View>
                    <Text style={styles.judul}>Operator Logika</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>2:39 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress14}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>14</Text>
                    </View>
                    <Text style={styles.judul}>Operator Bitwise</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>4:10 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress15}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>15</Text>
                    </View>
                    <Text style={styles.judul}>Operator Conditional</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>1:20 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress16}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>16</Text>
                    </View>
                    <Text style={styles.judul}>Operator Comma</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>1:40 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress17}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>17</Text>
                    </View>
                    <Text style={styles.judul}>Urutan Operator</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>2:21 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress18}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>18</Text>
                    </View>
                    <Text style={styles.judul}>Console Input (cin)</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>1:47 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress19}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>19</Text>
                    </View>
                    <Text style={styles.judul}>Console Input (cin) 2 Variabel</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>1:18 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress20}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>20</Text>
                    </View>
                    <Text style={styles.judul}>Percabangan If</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>5:06 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.play} onPress={handlePress21}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>21</Text>
                    </View>
                    <Text style={styles.judul}>Percabangan If Else</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>1:02 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress22}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>22</Text>
                    </View>
                    <Text style={styles.judul}>Percabangan If Else If</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>5:47 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress23}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>23</Text>
                    </View>
                    <Text style={styles.judul}>Percabangan Switch</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>4:02 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress24}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>24</Text>
                    </View>
                    <Text style={styles.judul}>Perluangan While</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>3:45 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress25}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>25</Text>
                    </View>
                    <Text style={styles.judul}>Perulangan Do While</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>2:54 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress26}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>26</Text>
                    </View>
                    <Text style={styles.judul}>Perulangan For</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>2:43 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress27}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>27</Text>
                    </View>
                    <Text style={styles.judul}>Soal Bilangan Ganjil Genap</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>3:50 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress28}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>28</Text>
                    </View>
                    <Text style={styles.judul}>Soal: Faktorial</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>3:38 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress29}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>29</Text>
                    </View>
                    <Text style={styles.judul}>Soal: Tabel Perkalian</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>4:41 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress30}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>30</Text>
                    </View>
                    <Text style={styles.judul}>Array</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>5:14 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress31}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>31</Text>
                    </View>
                    <Text style={styles.judul}>Soal: Array</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>3:27 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress32}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>32</Text>
                    </View>
                    <Text style={styles.judul}>Array 2 Dimensi</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>6:02 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress33}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>33</Text>
                    </View>
                    <Text style={styles.judul}>Fungsi Void</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>5:25 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress34}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>34</Text>
                    </View>
                    <Text style={styles.judul}>Fungsi Kembalian</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>2:31 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress35}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>35</Text>
                    </View>
                    <Text style={styles.judul}>Soal: Fungsi Bilangan Prima</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>4:06 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress36}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>36</Text>
                    </View>
                    <Text style={styles.judul}>Pass By Reference</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>3:15 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress37}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>37</Text>
                    </View>
                    <Text style={styles.judul}>Pointer</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>4:43 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress38}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>38</Text>
                    </View>
                    <Text style={styles.judul}>Referensi (Reference)</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>2:07 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress39}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>39</Text>
                    </View>
                    <Text style={styles.judul}>Tipe Data Struktur</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>2:57 Menit</Text>
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
                <Text style={styles.text1}>Kelas C++</Text>
            </View>
            <View style={styles.navbar}>
                <TouchableOpacity style={styles.sertiv} onPress={() => navigation.navigate('CertificateCpp')}>
                    <FontAwesomeIcon icon={faCertificate} color='#4F709C' size={25} style={{elevation: 9}}/>
                    <FontAwesomeIcon icon={faCertificate} color='gold' size={16} style={{elevation: 9, position: 'absolute'}}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.quiz} onPress={() => navigation.navigate('QuizCpp')}>
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
        height: 2980,
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
        right: 100,
        bottom: 765
    },
    text1: {
        fontWeight: 'bold',
        color: '#213555',
        fontSize: 19,
        left: 20
    },
});
