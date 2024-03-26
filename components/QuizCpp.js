import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const questions = [
  {
    question: 'Apa hasil dari 10 % 3?',
    options: ['0', '2', '3', '1'],
    correctAnswer: '1'
  },
  {
    question: 'Apa output dari cout << "Hello, World!"; dalam C++?',
    options: ['Hello, World!', 'Hello World!', 'Hello', 'World!'],
    correctAnswer: 'Hello, World!'
  },
  {
    question: 'Apa hasil dari 8 / 2 dalam C++?',
    options: ['3', '4', '2', '0'],
    correctAnswer: '4'
  },
  {
    question: 'Apa yang dilakukan oleh operator "++x;" dalam C++?',
    options: ['Mengincrement nilai x', 'Mengdecrement nilai x', 'Mengecek apakah nilai x lebih kecil dari 10', 'Mengecek apakah nilai x lebih besar dari 10'],
    correctAnswer: 'Mengincrement nilai x'
  },
  {
    question: 'Apa output dari cout << (5 + 3) * 2; dalam C++?',
    options: ['16', '10', '26', '8'],
    correctAnswer: '16'
  },
  {
    question: 'Apa yang dilakukan pernyataan "using namespace std;" dalam C++?',
    options: ['Menggunakan semua fungsi dalam namespace std', 'Menggunakan fungsi tertentu dalam namespace std', 'Mengabaikan namespace std', 'Membuat namespace baru'],
    correctAnswer: 'Menggunakan semua fungsi dalam namespace std'
  },
  {
    question: 'Apa yang dilakukan pernyataan "cin >> x;" dalam C++?',
    options: ['Memasukkan nilai ke dalam variabel x', 'Menampilkan nilai dari variabel x', 'Mendeclare variabel x', 'Mengeluarkan nilai dari variabel x'],
    correctAnswer: 'Memasukkan nilai ke dalam variabel x'
  },
  {
    question: 'Apa yang dilakukan pernyataan "int numbers[5];" dalam C++?',
    options: ['Membuat array dengan 5 elemen', 'Membuat variabel bernama numbers dengan tipe data int', 'Membuat pointer ke variabel numbers', 'Membuat variabel global dengan 5 elemen'],
    correctAnswer: 'Membuat array dengan 5 elemen'
  },
  {
    question: 'Apa yang dilakukan pernyataan "cout << numbers[2];" dalam C++?',
    options: ['Menampilkan nilai elemen ke-3 dari array numbers', 'Menampilkan semua elemen dari array numbers', 'Menampilkan nilai elemen ke-2 dari array numbers', 'Menampilkan panjang array numbers'],
    correctAnswer: 'Menampilkan nilai elemen ke-3 dari array numbers'
  },
  {
    question: 'Apa yang dilakukan pernyataan "int x = 5, y = 3;" dalam C++?',
    options: ['Mendeklarasikan dua variabel, x dan y, dan memberi mereka nilai awal', 'Mendeklarasikan variabel x dengan nilai 5', 'Mendeklarasikan dua variabel, x dan y, tetapi tidak memberi nilai awal', 'Mendeklarasikan dua variabel, x dan y, dengan nilai awal 5 dan 3'],
    correctAnswer: 'Mendeklarasikan dua variabel, x dan y, dan memberi mereka nilai awal'
  },
  {
    question: 'Apa yang dilakukan pernyataan "if (x > y) { cout << "x lebih besar dari y"; }" dalam C++?',
    options: ['Menampilkan pesan "x lebih besar dari y" jika nilai x lebih besar dari y', 'Mengubah nilai x menjadi y jika x lebih besar dari y', 'Mendeklarasikan variabel x dan y', 'Menampilkan pesan "y lebih besar dari x" jika nilai y lebih besar dari x'],
    correctAnswer: 'Menampilkan pesan "x lebih besar dari y" jika nilai x lebih besar dari y'
  },
  {
    question: 'Apa yang dilakukan pernyataan "for (int i = 0; i < 5; i++) { cout << i; }" dalam C++?',
    options: ['Mengulang output angka dari 0 hingga 4', 'Mengulang output angka dari 1 hingga 5', 'Mengulang output angka dari 0 hingga 5', 'Mengulang output angka dari 1 hingga 4'],
    correctAnswer: 'Mengulang output angka dari 0 hingga 4'
  },
  {
    question: 'Apa yang dilakukan pernyataan "while (x < 10) { x++; }" dalam C++?',
    options: ['Mengincrement nilai x hingga mencapai 10', 'Mengdecrement nilai x hingga mencapai 10', 'Mengecek apakah nilai x lebih kecil dari 10', 'Mengecek apakah nilai x lebih besar dari 10'],
    correctAnswer: 'Mengincrement nilai x hingga mencapai 10'
  },
  {
    question: 'Apa yang dilakukan pernyataan "switch (x) { case 1: cout << "Satu"; break; case 2: cout << "Dua"; break; default: cout << "Bukan satu atau dua"; }" dalam C++?',
    options: ['Menampilkan "Satu" jika nilai x adalah 1, "Dua" jika nilai x adalah 2, dan "Bukan satu atau dua" jika nilai x tidak sama dengan 1 atau 2', 'Mengubah nilai x menjadi 1 jika x adalah 2, dan sebaliknya', 'Mendeklarasikan variabel x', 'Menampilkan "Dua" jika nilai x adalah 1, dan "Satu" jika nilai x adalah 2'],
    correctAnswer: 'Menampilkan "Satu" jika nilai x adalah 1, "Dua" jika nilai x adalah 2, dan "Bukan satu atau dua" jika nilai x tidak sama dengan 1 atau 2'
  },
  {
    question: 'Apa yang dilakukan pernyataan "int* ptr = &x;" dalam C++?',
    options: ['Membuat pointer yang menunjuk ke variabel x', 'Membuat variabel x bertipe pointer', 'Membuat variabel pointer bernama ptr dengan nilai x', 'Mendeclare variabel x'],
    correctAnswer: 'Membuat pointer yang menunjuk ke variabel x'
  },
  {
    question: 'Apa yang dilakukan pernyataan "int add(int a, int b) { return a + b; }" dalam C++?',
    options: ['Mendefinisikan sebuah fungsi bernama add yang menerima dua parameter dan mengembalikan hasil penjumlahan keduanya', 'Mendeklarasikan variabel bernama add dengan nilai 0', 'Menambahkan nilai a dan b', 'Mengalikan nilai a dan b'],
    correctAnswer: 'Mendefinisikan sebuah fungsi bernama add yang menerima dua parameter dan mengembalikan hasil penjumlahan keduanya'
  },
];

export default function QuizCpp({ navigation }) {
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
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CertificateCpp')}>
          <Text style={styles.buttonText}>Ambil Sertifikat</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.back}>
          <TouchableOpacity onPress={() => navigation.navigate('KelasCpp')}>
            <FontAwesomeIcon icon={faArrowLeft} size={25} color='#213555' />
          </TouchableOpacity>
          <Text style={styles.text1}>Quiz C++</Text>
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
    left: 90
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