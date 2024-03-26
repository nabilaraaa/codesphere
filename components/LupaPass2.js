import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { faArrowLeft, faDeleteLeft, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const ManualNumberPad = ({ onPress, onDelete }) => {
  const rows = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['*', 0, 'DEL']];

  return (
    <View style={styles.numberPadContainer}>
      {rows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.numberRow}>
          {row.map((number, columnIndex) => (
            <TouchableOpacity 
              key={columnIndex} 
              style={styles.numberButton}
              onPress={() => {
                if (number === 'DEL') 
                {
                  onDelete();
                } else 
                {
                  onPress(number);
                }
              }}
            >
              {number === 'DEL' ? <FontAwesomeIcon icon={faDeleteLeft} size={20} color="black" /> : <Text style={styles.numberButtonText}>{number}</Text>}
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

export default function LupaPass2({ navigation }) {
  const [code, setCode] = useState(['', '', '', '']);
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => 
    {
      setCountdown(prevCountdown => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleNumberPress = (number) => 
  {
    const newCode = [...code];
    const index = newCode.findIndex(c => c === '');
    if (index !== -1) {
      newCode[index] = String(number);
      setCode(newCode);
      setTimeout(() => 
      {
        newCode[index] = '*';
        setCode([...newCode]);
      }, 200);
    }
  };

  const handleDelete = () => 
  {
    const newCode = [...code];
    const index = newCode.findIndex(c => c !== '');
    if (index !== -1) {
      newCode[index] = '';
      setCode(newCode);
    }
  };

  const handleResendCode = () => 
  {
    
    console.log('Mengirim ulang kode...');
  };

  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <TouchableOpacity onPress={() => navigation.navigate('LupaPass1')}>
          <FontAwesomeIcon icon={faArrowLeft} size={25} color='#213555'/>
        </TouchableOpacity>
        <Text style={styles.text3}>Lupa Password</Text>
      </View>
      <Image 
        source={require('../assets/LupaPass.png')}
        style={styles.icon}
      />      
      <Text style={styles.text4}>Kode Akan Segera Dikirimkan</Text>
      <View style={styles.codeInputContainer}>
        {code.map((value, index) => (
          <TextInput 
            key={index}
            style={styles.input}
            value={value}
            editable={false}
            placeholderTextColor="black"
          />
        ))}
      </View>
      <View style={styles.time}>
        <TouchableOpacity onPress={handleResendCode}>
          <Text style={styles.text5}>{
            countdown > 0 ? `Kirim kode lagi dalam ${countdown} detik` : 'Kirim Ulang Kode'
          }</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.spacer} />
      <ManualNumberPad onPress={handleNumberPress} onDelete={handleDelete} />
      <TouchableOpacity 
        style={styles.buttonmasuk} 
        onPress={() => navigation.navigate('BuatPass')}
      >
        <Text style={styles.text2}>Verifikasi</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  input: {
    width: 60,
    height: 55,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'lightgray',
    margin: 10,
    fontSize: 24,
    textAlign: 'center',
    bottom: 15
  },
  codeInputContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  numberPadContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 20,
  },
  numberRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  numberButton: {
    width: 100, 
    height: 60, 
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    top: 55
  },
  numberButtonText: {
    fontSize: 24, 
  },
  time: {
    flexDirection: 'row',
    top: 15
  },
  code: {
    flexDirection: 'row',
    bottom: 170
  },
  icon: {
    top: 15,
    width: 130,
    height: 160
  },
  back: {
    flexDirection: 'row',
    marginRight: 140,
    marginTop: 20
  },
  text1: {
    fontSize: 14,
    fontWeight: 'bold',
    top: 170,
    color: '#213555',
    alignSelf: 'center',
  },
  text2: {
    color: 'white',
    fontWeight: 'bold'
  },
  text3: {
    fontWeight: 'bold',
    color: '#213555',
    marginLeft: 10,
    fontSize: 19
  },
  text4: {
    opacity: 0.5,
    bottom: 20,
  },
  text5: {
    color: '#213555',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  text6: {
    fontWeight: 'bold',
    left: 5
  },
  buttonmasuk: {
    alignSelf: 'center',
    alignItems: 'center',
    width: 300,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#213555',
    justifyContent: 'center',
    bottom: 295
  },
  spacer: {
    height: 50
  }
});