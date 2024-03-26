import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking, TextInput } from 'react-native'; // Import ScrollView
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowAltCircleDown, faArrowLeft, faChevronCircleRight, } from '@fortawesome/free-solid-svg-icons';
import RNHTMLtoPDF from 'react-native-html-to-pdf';


export default function CertificateReactNative({ navigation }) {


    return(
        <View style={styles.container}>
            <View style={styles.back}>
                <TouchableOpacity onPress={() => navigation.navigate('Kelas')}>
                    <FontAwesomeIcon icon={faArrowLeft} size={25} color='#213555' />
                </TouchableOpacity>
                <Text style={styles.text1}>Certificate</Text>
            </View>
            <Image 
        source={require('../assets/Certificate/React.png')}
        style={styles.Gambar}
        />
            {/* <TouchableOpacity style={styles.unduh}>
                <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>Unduh Sertifikat</Text>
                <FontAwesomeIcon icon={faArrowAltCircleDown} color='white' size={40} style={{position: 'absolute', right: 15}}/>
            </TouchableOpacity> */}
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
    Gambar: {
        height: 220,
        width: 300
    },
    unduh: {
        width: 310,
        height: 70,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        padding: 10,
        backgroundColor: '#213555',
        position: 'absolute',
        bottom: 30,
        flexDirection: 'row'

    },
    back: {
        flexDirection: 'row',
        position: 'absolute',
        top: 50,
        left: 30
    },
    text1: {
        fontWeight: 'bold',
        color: '#213555',
        fontSize: 19,
        left: 20
    },
});
