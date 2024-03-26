import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const questions = [
  {
    question: 'Apa output dari console.log(2 * 3 + 1)?',
    options: ['5', '6', '7', '9'],
    correctAnswer: '7'
  },
  {
    question: 'Apa yang dilakukan oleh operator "===" dalam JavaScript?',
    options: ['Mengecek kesamaan nilai dan tipe data', 'Menggabungkan dua nilai', 'Mengurangi satu nilai dari yang lain', 'Mengalikan dua nilai'],
    correctAnswer: 'Mengecek kesamaan nilai dan tipe data'
  },
  {
    question: 'Apa output dari console.log(typeof 42)?',
    options: ['"number"', '"string"', '"boolean"', '"object"'],
    correctAnswer: '"number"'
  },
  {
    question: 'Apa yang dilakukan oleh pernyataan "let x = 10;" dalam JavaScript?',
    options: ['Mendeklarasikan variabel x dengan nilai 10', 'Menghapus variabel x', 'Menampilkan nilai 10 ke layar', 'Mengubah variabel x menjadi 10'],
    correctAnswer: 'Mendeklarasikan variabel x dengan nilai 10'
  },
  {
    question: 'Apa yang dilakukan pernyataan "let y = x + 5;" dalam JavaScript jika x memiliki nilai 3?',
    options: ['Mendeklarasikan variabel y dengan nilai 8', 'Mendeklarasikan variabel y dengan nilai 5', 'Menampilkan nilai x + 5 ke layar', 'Mengubah variabel y menjadi x + 5'],
    correctAnswer: 'Mendeklarasikan variabel y dengan nilai 8'
  },
  {
    question: 'Apa yang dilakukan pernyataan "console.log("Hello, " + "World!");" dalam JavaScript?',
    options: ['Menggabungkan dua string menjadi satu', 'Menghapus string "World!" dari "Hello"', 'Membuat variabel "Hello World!"', 'Menampilkan string "Hello, World!" ke layar'],
    correctAnswer: 'Menggabungkan dua string menjadi satu'
  },
  {
    question: 'Apa yang dilakukan pernyataan "let numbers = [1, 2, 3];" dalam JavaScript?',
    options: ['Membuat array dengan elemen-elemen 1, 2, dan 3', 'Membuat variabel bernama numbers dengan nilai 1, 2, dan 3', 'Membuat variabel bernama numbers dengan panjang 3', 'Membuat array dengan panjang 3'],
    correctAnswer: 'Membuat array dengan elemen-elemen 1, 2, dan 3'
  },
  {
    question: 'Apa yang dilakukan pernyataan "console.log(numbers[1]);" dalam JavaScript jika numbers memiliki nilai [4, 5, 6]?',
    options: ['Menampilkan nilai elemen ke-2 dari array numbers (nilai 5)', 'Menampilkan semua elemen dari array numbers', 'Menampilkan nilai elemen ke-1 dari array numbers (nilai 4)', 'Menampilkan panjang array numbers (nilai 3)'],
    correctAnswer: 'Menampilkan nilai elemen ke-2 dari array numbers (nilai 5)'
  },
  {
    question: 'Apa yang dilakukan pernyataan "let result = true && false;" dalam JavaScript?',
    options: ['Membuat variabel result yang bernilai false', 'Membuat variabel result yang bernilai true', 'Mengecek apakah true sama dengan false', 'Mengecek apakah true lebih besar dari false'],
    correctAnswer: 'Membuat variabel result yang bernilai false'
  },
  {
    question: 'Apa yang dilakukan pernyataan "if (x > 5) { console.log("x lebih besar dari 5"); }" dalam JavaScript?',
    options: ['Menampilkan pesan "x lebih besar dari 5" jika nilai x lebih besar dari 5', 'Mengubah nilai x menjadi 5 jika x lebih besar dari 5', 'Mendeklarasikan variabel x', 'Menampilkan pesan "5 lebih besar dari x" jika nilai 5 lebih besar dari x'],
    correctAnswer: 'Menampilkan pesan "x lebih besar dari 5" jika nilai x lebih besar dari 5'
  },
  {
    question: 'Apa yang dilakukan pernyataan "for (let i = 0; i < 3; i++) { console.log(i); }" dalam JavaScript?',
    options: ['Mengulang output angka dari 0 hingga 2', 'Mengulang output angka dari 1 hingga 3', 'Mengulang output angka dari 0 hingga 3', 'Mengulang output angka dari 1 hingga 2'],
    correctAnswer: 'Mengulang output angka dari 0 hingga 2'
  },
  {
    question: 'Apa yang dilakukan pernyataan "while (x < 10) { x++; }" dalam JavaScript?',
    options: ['Mengincrement nilai x hingga mencapai 10', 'Mengdecrement nilai x hingga mencapai 10', 'Mengecek apakah nilai x lebih kecil dari 10', 'Mengecek apakah nilai x lebih besar dari 10'],
    correctAnswer: 'Mengincrement nilai x hingga mencapai 10'
  },
  {
    question: 'Apa yang dilakukan pernyataan "switch (x) { case 1: console.log("Satu"); break; case 2: console.log("Dua"); break; default: console.log("Bukan satu atau dua"); }" dalam JavaScript?',
    options: ['Menampilkan "Satu" jika nilai x adalah 1, "Dua" jika nilai x adalah 2, dan "Bukan satu atau dua" jika nilai x tidak sama dengan 1 atau 2', 'Mengubah nilai x menjadi 1 jika x adalah 2, dan sebaliknya', 'Mendeklarasikan variabel x', 'Menampilkan "Dua" jika nilai x adalah 1, dan "Satu" jika nilai x adalah 2'],
    correctAnswer: 'Menampilkan "Satu" jika nilai x adalah 1, "Dua" jika nilai x adalah 2, dan "Bukan satu atau dua" jika nilai x tidak sama dengan 1 atau 2'
  },
  {
    question: 'Apa yang dilakukan pernyataan "let add = (a, b) => a + b;" dalam JavaScript?',
    options: ['Mendefinisikan sebuah fungsi arrow bernama add yang menerima dua parameter dan mengembalikan hasil penjumlahan keduanya', 'Mendeklarasikan variabel add dengan nilai 0', 'Menambahkan nilai a dan b', 'Mengalikan nilai a dan b'],
    correctAnswer: 'Mendefinisikan sebuah fungsi arrow bernama add yang menerima dua parameter dan mengembalikan hasil penjumlahan keduanya'
  },{
    question: 'Apa perbedaan antara "==" dan "===" dalam JavaScript?',
    options: ['"==" membandingkan nilai tanpa memperhatikan tipe data, sedangkan "===" membandingkan nilai dan tipe data secara ketat', '"==" hanya digunakan untuk string, sedangkan "===" digunakan untuk semua jenis data', '"==" membandingkan nilai dan tipe data secara ketat, sedangkan "===" membandingkan hanya nilai', '"==" dan "===" memiliki fungsi yang sama dalam JavaScript'],
    correctAnswer: '"==" membandingkan nilai tanpa memperhatikan tipe data, sedangkan "===" membandingkan nilai dan tipe data secara ketat'
  },
  {
    question: 'Apa yang dilakukan pernyataan "let person = { name: "John", age: 30 };" dalam JavaScript?',
    options: ['Membuat objek person dengan properti name dan age', 'Membuat array person dengan elemen "John" dan 30', 'Membuat variabel bernama person dengan nilai "John" dan 30', 'Membuat fungsi person dengan parameter "John" dan 30'],
    correctAnswer: 'Membuat objek person dengan properti name dan age'
  },
  {
    question: 'Apa output dari console.log("5" + 3)?',
    options: ['"53"', '8', '15', 'Error'],
    correctAnswer: '"53"'
  },
  {
    question: 'Apa yang dilakukan pernyataan "let fruits = ["Apple", "Banana", "Orange"]; console.log(fruits.length);" dalam JavaScript?',
    options: ['Menampilkan panjang array fruits', 'Menampilkan semua elemen dari array fruits', 'Menampilkan nilai terakhir dari array fruits', 'Membuat array baru dengan panjang fruits'],
    correctAnswer: 'Menampilkan panjang array fruits'
  },
  {
    question: 'Apa yang dilakukan pernyataan "let greeting = Hello, ${name};" dalam JavaScript?',
    options: ['Membuat string greeting dengan nilai "Hello, " ditambah dengan nilai dari variabel name', 'Membuat variabel greeting dengan nilai "Hello, ${name}"', 'Membuat variabel greeting dengan nilai "Hello, " dan ${name}', 'Menampilkan "Hello, " diikuti dengan nilai dari variabel name'],
    correctAnswer: 'Membuat string greeting dengan nilai "Hello, " ditambah dengan nilai dari variabel name'
  },
  {
    question: 'Apa yang dilakukan pernyataan "let result = (5 > 3) ? "True" : "False";" dalam JavaScript?',
    options: ['Membuat variabel result yang bernilai "True" jika 5 lebih besar dari 3, dan "False" jika tidak', 'Membuat variabel result yang bernilai "False" jika 5 lebih besar dari 3, dan "True" jika tidak', 'Menampilkan "True" jika 5 lebih besar dari 3, dan "False" jika tidak', 'Menampilkan "False" jika 5 lebih besar dari 3, dan "True" jika tidak'],
    correctAnswer: 'Membuat variabel result yang bernilai "True" jika 5 lebih besar dari 3, dan "False" jika tidak'
  },
  {
    question: 'Apa yang dilakukan pernyataan "console.log(Math.random());" dalam JavaScript?',
    options: ['Menampilkan angka acak antara 0 dan 1', 'Menampilkan angka acak antara 1 dan 10', 'Menampilkan angka acak antara 0 dan 100', 'Menampilkan angka acak negatif'],
    correctAnswer: 'Menampilkan angka acak antara 0 dan 1'
  }
];

export default function QuizJavaScript({ navigation }) {
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
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CertificateJavaScript')}>
          <Text style={styles.buttonText}>Ambil Sertifikat</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.back}>
          <TouchableOpacity onPress={() => navigation.navigate('KelasJavaScript')}>
            <FontAwesomeIcon icon={faArrowLeft} size={25} color='#213555' />
          </TouchableOpacity>
          <Text style={styles.text1}>Quiz JavaScript</Text>
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
    left: 65
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