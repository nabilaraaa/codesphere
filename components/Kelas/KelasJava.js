import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Linking, TextInput } from 'react-native'; // Import ScrollView
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faBookmark, faCertificate, faChevronRight, faHomeAlt, faListAlt, faPlayCircle, faQuestion, faQuestionCircle, faUser } from '@fortawesome/free-solid-svg-icons';

export default function KelasJava({ navigation }) {

    const handlePressMulaiLagi = () => {
        Linking.openURL('https://www.youtube.com/watch?v=bxOPd_b0rg4&list=PLZS-MHyEIRo6V4_vk1s1NcM2HoW5KFG7i&index=1&pp=iAQB');
    };
    const handlePress01 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=bxOPd_b0rg4&list=PLZS-MHyEIRo6V4_vk1s1NcM2HoW5KFG7i&index=1&pp=iAQB');
    };
    const handlePress02 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=1vY5eNw5OdE&list=PLZS-MHyEIRo6V4_vk1s1NcM2HoW5KFG7i&index=2&pp=iAQB');
    };
    const handlePress03 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=A9tp4k3Xaac&list=PLZS-MHyEIRo6V4_vk1s1NcM2HoW5KFG7i&index=3&pp=iAQB');
    };
    const handlePress04 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=TgrBFN9wi6c&list=PLZS-MHyEIRo6V4_vk1s1NcM2HoW5KFG7i&index=4&pp=iAQB');
    };
    const handlePress05 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=aQRemTq6Two&list=PLZS-MHyEIRo6V4_vk1s1NcM2HoW5KFG7i&index=5&pp=iAQB');
    };
    const handlePress06 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=45SxJ9GhEO0&list=PLZS-MHyEIRo6V4_vk1s1NcM2HoW5KFG7i&index=6&pp=iAQB');
    };
    const handlePress07 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=_0rSpG23zps&list=PLZS-MHyEIRo6V4_vk1s1NcM2HoW5KFG7i&index=7&pp=iAQB');
    };
    const handlePress08 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=bFVfaWXGTYs&list=PLZS-MHyEIRo6V4_vk1s1NcM2HoW5KFG7i&index=8&pp=iAQB');
    };
    const handlePress09 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=xkvogoEqNLM&list=PLZS-MHyEIRo6V4_vk1s1NcM2HoW5KFG7i&index=9&pp=iAQB');
    };
    const handlePress10 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=iLyKXuH5xis&list=PLZS-MHyEIRo6V4_vk1s1NcM2HoW5KFG7i&index=10&pp=iAQB');
    };
    const handlePress11 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=aRb7SO6iiqE&list=PLZS-MHyEIRo6V4_vk1s1NcM2HoW5KFG7i&index=11&pp=iAQB');
    };
    const handlePress12 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=zwDMHJzTUzs&list=PLZS-MHyEIRo6V4_vk1s1NcM2HoW5KFG7i&index=12&pp=iAQB');
    };
    const handlePress13 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=gI9dI0VG9YU&list=PLZS-MHyEIRo6V4_vk1s1NcM2HoW5KFG7i&index=13&pp=iAQB');
    };
    const handlePress14 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=IJT4VOyo1N8&list=PLZS-MHyEIRo6V4_vk1s1NcM2HoW5KFG7i&index=14&pp=iAQB');
    };
    const handlePress15 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=hiEwJlBp7Ms&list=PLZS-MHyEIRo6V4_vk1s1NcM2HoW5KFG7i&index=15&pp=iAQB');
    };
    const handlePress16 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=hiEwJlBp7Ms&list=PLZS-MHyEIRo6V4_vk1s1NcM2HoW5KFG7i&index=15&pp=iAQB');
    };
    const handlePress17 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=eS8mDTkGqDA&list=PLZS-MHyEIRo6V4_vk1s1NcM2HoW5KFG7i&index=17&pp=iAQB');
    };
    const handlePress18 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=qBPuEU7qpdw&list=PLZS-MHyEIRo6V4_vk1s1NcM2HoW5KFG7i&index=18&pp=iAQB');
    };
    const handlePress19 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=TTt6v_be0Vk&list=PLZS-MHyEIRo6V4_vk1s1NcM2HoW5KFG7i&index=19&pp=iAQB');
    };
    const handlePress20 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=CXqOqqe7zjo&list=PLZS-MHyEIRo6V4_vk1s1NcM2HoW5KFG7i&index=20&pp=iAQB');
    };
    const handlePress21 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=7okH5nc2LEc&list=PLZS-MHyEIRo6V4_vk1s1NcM2HoW5KFG7i&index=21&pp=iAQB');
    };
    const handlePress22 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=7okH5nc2LEc&list=PLZS-MHyEIRo6V4_vk1s1NcM2HoW5KFG7i&index=21&pp=iAQB');
    };
    const handlePress23 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=7okH5nc2LEc&list=PLZS-MHyEIRo6V4_vk1s1NcM2HoW5KFG7i&index=21&pp=iAQB');
    };
    const handlePress24 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=3s-RAtdv5Oo&list=PLZS-MHyEIRo6V4_vk1s1NcM2HoW5KFG7i&index=24&pp=iAQB');
    };
    const handlePress25 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=hvrS5b0k4Jk&list=PLZS-MHyEIRo6V4_vk1s1NcM2HoW5KFG7i&index=25&pp=iAQB');
    };
    const handlePress26 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=ZIvoHsm1PpM&list=PLZS-MHyEIRo6V4_vk1s1NcM2HoW5KFG7i&index=26&pp=iAQB');
    };
    const handlePress27 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=MoIORVH4LwI&list=PLZS-MHyEIRo6V4_vk1s1NcM2HoW5KFG7i&index=27&pp=iAQB');
    };
    const handlePress28 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=7N3lxM05cw0&list=PLZS-MHyEIRo6V4_vk1s1NcM2HoW5KFG7i&index=28&pp=iAQB');
    };
    const handlePress29 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=meuCc-RVGyI&list=PLZS-MHyEIRo6V4_vk1s1NcM2HoW5KFG7i&index=29&pp=iAQB');
    };
    const handlePress30 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=owU4W-DbCFQ&list=PLZS-MHyEIRo6V4_vk1s1NcM2HoW5KFG7i&index=30&pp=iAQB');
    };
    const handlePress31 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=9EfRK80X4pM&list=PLZS-MHyEIRo6V4_vk1s1NcM2HoW5KFG7i&index=31&pp=iAQB');
    };
    const handlePress32 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=9EfRK80X4pM&list=PLZS-MHyEIRo6V4_vk1s1NcM2HoW5KFG7i&index=31&pp=iAQB');
    };
    const handlePress33 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=nUmr7xTamBg&list=PLZS-MHyEIRo6V4_vk1s1NcM2HoW5KFG7i&index=33&pp=iAQB');
    };
    const handlePress34 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=KCJveMUwFDM&list=PLZS-MHyEIRo6V4_vk1s1NcM2HoW5KFG7i&index=34&pp=iAQB');
    };
    const handlePress35 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=KCJveMUwFDM&list=PLZS-MHyEIRo6V4_vk1s1NcM2HoW5KFG7i&index=34&pp=iAQB');
    };
    const handlePress36 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=KCJveMUwFDM&list=PLZS-MHyEIRo6V4_vk1s1NcM2HoW5KFG7i&index=34&pp=iAQB');
    };
    const handlePress37 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=KCJveMUwFDM&list=PLZS-MHyEIRo6V4_vk1s1NcM2HoW5KFG7i&index=34&pp=iAQB');
    };
    const handlePress38 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=_KKS7GiXtPU&list=PLZS-MHyEIRo6V4_vk1s1NcM2HoW5KFG7i&index=38&pp=iAQB');
    };
    


    const VerticalScrollView = () => {
        return(
        <ScrollView contentContainerStyle={{alignItems: 'center', height: 3000,}}>
            <View style={styles.card}>
                <Text style={{fontWeight: 'bold', color: '#213555', marginTop: 20, marginLeft: 10, fontSize: 16, marginBottom: 10}}>Kumpulan Materi Java</Text>

                <TouchableOpacity style={styles.play} onPress={handlePress01}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>01</Text>
                    </View>
                    <Text style={styles.judul}>Pendahuluan</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>22:51 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress02}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>02</Text>
                    </View>
                    <Text style={styles.judul}>Setup VS Code Windows</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>18:48 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress03}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>03</Text>
                    </View>
                    <Text style={styles.judul}>Setup VS Code MacOS</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>15:19 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress04}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>04</Text>
                    </View>
                    <Text style={styles.judul}>Setup VS Code Ubuntu</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>15:29 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress05}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>05</Text>
                    </View>
                    <Text style={styles.judul}>Pengenalan Class dan Object</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>13:10 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress06}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>06</Text>
                    </View>
                    <Text style={styles.judul}>Constructor</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>11:40 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress07}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>07</Text>
                    </View>
                    <Text style={styles.judul}>Methods</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>19:43 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress08}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>08</Text>
                    </View>
                    <Text style={styles.judul}>Latihan Part - 1</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>19:00 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress09}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>09</Text>
                    </View>
                    <Text style={styles.judul}>Latihan Part - 1</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>18:57 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress10}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>10</Text>
                    </View>
                    <Text style={styles.judul}>Reference Pada Object</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>15:09 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress11}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>11</Text>
                    </View>
                    <Text style={styles.judul}>Public & Private Keywords</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>13:15 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress12}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>12</Text>
                    </View>
                    <Text style={styles.judul}>Encapsulasi</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>17:56 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress13}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>13</Text>
                    </View>
                    <Text style={styles.judul}>Latihan Encapsulasi (Part - 1)</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>29:23 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress14}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>14</Text>
                    </View>
                    <Text style={styles.judul}>Latihan Encapsulasi (Part - 1)</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>29:13 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress15}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>15</Text>
                    </View>
                    <Text style={styles.judul}>Static atau Class Attributes</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>13:20 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress16}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>16</Text>
                    </View>
                    <Text style={styles.judul}>Static atau Class Methods</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>13:17 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress17}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>17</Text>
                    </View>
                    <Text style={styles.judul}>Multi File dengan Package</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>11:40 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress18}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>18</Text>
                    </View>
                    <Text style={styles.judul}>Hierarki Package</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>16:07 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress19}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>19</Text>
                    </View>
                    <Text style={styles.judul}>Constructor dan Method</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>10:09 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress20}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>20</Text>
                    </View>
                    <Text style={styles.judul}>Pengenalan Inheritance</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>19:25 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.play} onPress={handlePress21}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>21</Text>
                    </View>
                    <Text style={styles.judul}>Overriding Methods (inheritance)</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>10:15 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress22}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>22</Text>
                    </View>
                    <Text style={styles.judul}>Super (inheritance)</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>8:38 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress23}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>23</Text>
                    </View>
                    <Text style={styles.judul}>Subclass Constructor (inheritance)</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>13:53 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress24}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>24</Text>
                    </View>
                    <Text style={styles.judul}>Latihan Inheritance</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>18:54 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress25}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>25</Text>
                    </View>
                    <Text style={styles.judul}>Polymorphism</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>27:51 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress26}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>26</Text>
                    </View>
                    <Text style={styles.judul}>Final-Public-Private(Inheritance)</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>22:34 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress27}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>27</Text>
                    </View>
                    <Text style={styles.judul}>SObject Casting</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>18:33 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress28}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>28</Text>
                    </View>
                    <Text style={styles.judul}>Abstract Class</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>16:34 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress29}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>29</Text>
                    </View>
                    <Text style={styles.judul}>Abstract Method</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>9:26 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress30}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>30</Text>
                    </View>
                    <Text style={styles.judul}> Protected Keyword</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>10:29 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress31}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>31</Text>
                    </View>
                    <Text style={styles.judul}>Object The Superclass</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>18:34 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress32}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>32</Text>
                    </View>
                    <Text style={styles.judul}>Generic Array List</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>14:36 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress33}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>33</Text>
                    </View>
                    <Text style={styles.judul}>Operasi Array List</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>19:11 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress34}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>34</Text>
                    </View>
                    <Text style={styles.judul}>Reflection Field & Attribute</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>28:28 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress35}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>35</Text>
                    </View>
                    <Text style={styles.judul}>Reflection Method & Constructor</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>29:57 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress36}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>36</Text>
                    </View>
                    <Text style={styles.judul}>Interface</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>10:44 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress37}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>37</Text>
                    </View>
                    <Text style={styles.judul}>Interface VS Abstract</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>15:24 Menit</Text>
                    <FontAwesomeIcon icon={faPlayCircle} color='#4F709C' size={20} style={{right: 15, position: 'absolute'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.play} onPress={handlePress38}>
                    <View style={styles.bulet}>
                        <Text style={styles.number}>38</Text>
                    </View>
                    <Text style={styles.judul}>Latihan Interface</Text>
                    <Text style={{position: 'absolute', opacity: 0.5, marginLeft: 60, top: 35, fontSize: 12}}>22:48 Menit</Text>
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
                <Text style={styles.text1}>Kelas Java</Text>
            </View>
            <View style={styles.navbar}>
                <TouchableOpacity style={styles.sertiv} onPress={() => navigation.navigate('CertificateJava')}>
                    <FontAwesomeIcon icon={faCertificate} color='#4F709C' size={25} style={{elevation: 9}}/>
                    <FontAwesomeIcon icon={faCertificate} color='gold' size={16} style={{elevation: 9, position: 'absolute'}}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.quiz} onPress={() => navigation.navigate('QuizJava')}>
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
        height: 2900,
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
        bottom: 760
    },
    text1: {
        fontWeight: 'bold',
        color: '#213555',
        fontSize: 19,
        left: 20
    },
});
