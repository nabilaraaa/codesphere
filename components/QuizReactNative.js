import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const questions = [
  {
    question: 'Apa yang dilakukan oleh komponen "Text" dalam React Native?',
    options: ['Menampilkan teks', 'Membuat input teks', 'Menggambar bentuk', 'Menampilkan gambar'],
    correctAnswer: 'Menampilkan teks'
  },
  {
    question: 'Apa perbedaan antara "state" dan "props" dalam React Native?',
    options: ['Tidak ada perbedaan', '"state" bersifat statis, sedangkan "props" bersifat dinamis', '"state" bersifat dinamis, sedangkan "props" bersifat statis', '"state" dan "props" adalah hal yang sama'],
    correctAnswer: '"state" bersifat dinamis, sedangkan "props" bersifat statis'
  },
  {
    question: 'Apa fungsi dari "render()" dalam komponen React Native?',
    options: ['Mengatur tampilan komponen', 'Mengubah nilai state', 'Mengirimkan data antara komponen', 'Menjalankan kode setiap kali komponen diperbarui'],
    correctAnswer: 'Mengatur tampilan komponen'
  },
  {
    question: 'Apa yang dilakukan oleh perintah "npm start" dalam pengembangan React Native?',
    options: ['Mengompilasi aplikasi React Native', 'Menjalankan simulator iOS', 'Menjalankan simulator Android', 'Menjalankan server pengembangan'],
    correctAnswer: 'Menjalankan server pengembangan'
  },
  {
    question: 'Apa perbedaan antara "StyleSheet.create" dan "inline styles" dalam React Native?',
    options: ['Tidak ada perbedaan', '"StyleSheet.create" digunakan untuk gaya global, sedangkan "inline styles" untuk gaya lokal', '"StyleSheet.create" digunakan untuk gaya lokal, sedangkan "inline styles" untuk gaya global', '"StyleSheet.create" hanya digunakan untuk komponen tertentu'],
    correctAnswer: '"StyleSheet.create" digunakan untuk gaya lokal, sedangkan "inline styles" untuk gaya global'
  },
  {
    question: 'Apa yang dilakukan oleh komponen "TouchableOpacity" dalam React Native?',
    options: ['Menampilkan teks', 'Membuat input teks', 'Mengatur tampilan', 'Menanggapi sentuhan pengguna'],
    correctAnswer: 'Menanggapi sentuhan pengguna'
  },
  {
    question: 'Apa perintah untuk membuat proyek React Native baru menggunakan Expo CLI?',
    options: ['expo start', 'react-native init', 'create-react-native-app', 'npm create-react-native-app'],
    correctAnswer: 'expo start'
  },
  {
    question: 'Apa yang dilakukan oleh perintah "react-native run-android"?',
    options: ['Menjalankan aplikasi React Native di simulator Android', 'Menjalankan server pengembangan React Native', 'Mengompilasi aplikasi React Native untuk Android', 'Membuat proyek React Native baru'],
    correctAnswer: 'Menjalankan aplikasi React Native di simulator Android'
  },
  {
    question: 'Apa yang dilakukan oleh komponen "ScrollView" dalam React Native?',
    options: ['Menampilkan teks', 'Membuat input teks', 'Menampilkan gambar', 'Menampilkan konten bergulir'],
    correctAnswer: 'Menampilkan konten bergulir'
  },
  {
    question: 'Apa yang dilakukan oleh perintah "react-native init MyApp"?',
    options: ['Menjalankan aplikasi React Native di simulator', 'Membuat proyek React Native baru bernama "MyApp"', 'Mengompilasi aplikasi React Native', 'Menjalankan server pengembangan'],
    correctAnswer: 'Membuat proyek React Native baru bernama "MyApp"'
  },
  {
    question: 'Apa fungsi dari "useState" dalam React Native?',
    options: ['Untuk mengatur tampilan komponen', 'Untuk menyimpan nilai state dalam komponen', 'Untuk membuat tautan navigasi antara layar', 'Untuk menanggapi sentuhan pengguna'],
    correctAnswer: 'Untuk menyimpan nilai state dalam komponen'
  },
  {
    question: 'Apa yang dilakukan oleh perintah "react-native link" dalam React Native?',
    options: ['Menjalankan aplikasi React Native di simulator', 'Mengompilasi aplikasi React Native', 'Menghubungkan pustaka native ke proyek React Native', 'Menjalankan server pengembangan'],
    correctAnswer: 'Menghubungkan pustaka native ke proyek React Native'
  },
  {
    question: 'Apa yang dilakukan oleh komponen "FlatList" dalam React Native?',
    options: ['Menampilkan teks', 'Menampilkan daftar item yang scrollable', 'Mengatur tampilan', 'Menanggapi sentuhan pengguna'],
    correctAnswer: 'Menampilkan daftar item yang scrollable'
  },
  {
    question: 'Apa perintah untuk menginstal paket pihak ketiga dalam proyek React Native menggunakan npm?',
    options: ['npm add', 'npm install', 'npm link', 'npm start'],
    correctAnswer: 'npm install'
  },
  {
    question: 'Apa yang dilakukan oleh perintah "expo build:android" dalam React Native?',
    options: ['Menjalankan aplikasi React Native di simulator Android', 'Mengompilasi aplikasi React Native untuk Android', 'Menjalankan server pengembangan React Native', 'Membuat proyek React Native baru'],
    correctAnswer: 'Mengompilasi aplikasi React Native untuk Android'
  },
  {
    question: 'Apa yang dilakukan oleh komponen "View" dalam React Native?',
    options: ['Menampilkan teks', 'Membuat input teks', 'Mengatur tampilan', 'Menampilkan konten tanpa gaya'],
    correctAnswer: 'Mengatur tampilan'
  },
  {
    question: 'Apa perbedaan antara "React" dan "React Native"?',
    options: ['Tidak ada perbedaan', '"React" untuk pengembangan web, sedangkan "React Native" untuk pengembangan aplikasi mobile', '"React" untuk pengembangan aplikasi mobile, sedangkan "React Native" untuk pengembangan web', '"React" digunakan dalam bahasa pemrograman, sedangkan "React Native" digunakan dalam framework'],
    correctAnswer: '"React" untuk pengembangan web, sedangkan "React Native" untuk pengembangan aplikasi mobile'
  },
  {
    question: 'Apa yang dilakukan oleh perintah "expo eject" dalam React Native?',
    options: ['Menginstal dependensi proyek native', 'Menghapus proyek React Native', 'Mengubah proyek Expo menjadi proyek React Native murni', 'Membuat proyek Expo'],
    correctAnswer: 'Mengubah proyek Expo menjadi proyek React Native murni'
  },
  {
    question: 'Apa yang dilakukan oleh komponen "Image" dalam React Native?',
    options: ['Menampilkan teks', 'Membuat input teks', 'Menampilkan gambar', 'Menampilkan konten tanpa gaya'],
    correctAnswer: 'Menampilkan gambar'
  },
  {
    question: 'Apa fungsi dari "useEffect" dalam React Native?',
    options: ['Untuk mengatur tampilan komponen', 'Untuk menyimpan nilai state dalam komponen', 'Untuk menjalankan kode setiap kali komponen diperbarui', 'Untuk membuat tautan navigasi antara layar'],
    correctAnswer: 'Untuk menjalankan kode setiap kali komponen diperbarui'
  },
  {
    question: 'Apa yang dilakukan oleh perintah "npm run android" dalam React Native?',
    options: ['Menjalankan aplikasi React Native di simulator Android', 'Mengompilasi aplikasi React Native untuk Android', 'Menjalankan server pengembangan React Native', 'Membuat proyek React Native baru'],
    correctAnswer: 'Mengompilasi aplikasi React Native untuk Android'
  },
  {
    question: 'Apa yang dilakukan oleh perintah "adb reverse tcp:8081 tcp:8081" dalam React Native?',
    options: ['Menghubungkan perangkat Android ke server pengembangan React Native', 'Menghapus cache aplikasi React Native di perangkat Android', 'Menginstal aplikasi React Native di perangkat Android', 'Mengaktifkan layanan debug USB di perangkat Android'],
    correctAnswer: 'Menghubungkan perangkat Android ke server pengembangan React Native'
  }
];

export default function QuizReactNative({ navigation }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleAnswer = (selectedOption) => {
    const correctAnswer = questions[currentQuestion].correctAnswer;
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = selectedOption;
    setAnswers(updatedAnswers);
    if (selectedOption === correctAnswer) {
      setScore(score + 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setAnswers(Array(questions.length).fill(null));
  };

  const navigateToCertificate = () => {
    navigation.navigate('CertificatePage', { score });
  };

  useEffect(() => {
    if (currentQuestion < questions.length) {
      setAnswers(Array(questions.length).fill(null));
    }
  }, [currentQuestion]);

  if (showResult) {
    return (
      <View style={styles.container}>
        <Image 
          source={require('../assets/Congrats.png')}
          style={styles.icon}
        />
        <Text style={styles.text2}>Yeayy! Selamat ya kamu berhasil selesai mengerjakan quiz ini. Yuk kembali ke kelas untuk lanjut pahamin materi yang lain.</Text>
        <Text style={styles.resultText}>Skor Anda: {score} / {questions.length}</Text>
        <TouchableOpacity style={styles.button} onPress={resetQuiz}>
          <Text style={styles.buttonText}>Coba Lagi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CertificateReactNative')}>
          <Text style={styles.buttonText}>Ambil Sertifikat</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.back}>
          <TouchableOpacity onPress={() => navigation.navigate('KelasReactNative')}>
            <FontAwesomeIcon icon={faArrowLeft} size={25} color='#213555' />
          </TouchableOpacity>
          <Text style={styles.text1}>Quiz React Native</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.progressText}>{currentQuestion + 1} / {questions.length}</Text>
        <Text style={styles.questionText}>{questions[currentQuestion].question}</Text>
        {questions[currentQuestion].options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              answers[currentQuestion] === option && option === questions[currentQuestion].correctAnswer ? styles.correctOption : null,
              answers[currentQuestion] === option && option !== questions[currentQuestion].correctAnswer ? styles.incorrectOption : null
            ]}
            onPress={() => handleAnswer(option)}
            disabled={answers[currentQuestion] !== null}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#4F709C' }]}
        onPress={() => {
          const nextQuestion = currentQuestion + 1;
          if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
          } else {
            setShowResult(true);
          }
        }}
      >
        <Text style={styles.buttonText}>Lanjut</Text>
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
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    height: 510,
    width: 300,
    marginTop: 40,
    marginBottom: 20,
    elevation: 5,
  },
  questionText: {
    fontSize: 17,
    marginBottom: 20,
    alignSelf: 'center',
    marginTop: 40
  },
  optionButton: {
    backgroundColor: '#4F709C',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 260,
    height: 60,
    alignSelf: 'center',
    marginTop: 20,
  },
  optionText: {
    fontSize: 16,
    color: 'white',
  },
  correctOption: {
    backgroundColor: 'lightgreen',
  },
  incorrectOption: {
    backgroundColor: 'red',
  },
  progressText: {
    position: 'absolute',
    top: 10,
    left: 10,
    fontSize: 16,
    color: '#4F709C',
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4F709C',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#4F709C',
    padding: 10,
    borderRadius: 50,
    width: '80%',
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  back: {
    position: 'absolute',
    flexDirection: 'row',
    top: 60,
    left: 30
  },
  text1: {
    fontWeight: 'bold',
    color: '#213555',
    fontSize: 19,
    left: 55
  },
  text2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#213555',
    maxWidth: 270,
    textAlign: 'center',
    marginBottom: 20
  },
  icon: {
    width : 280,
    height: 240,
  }
});