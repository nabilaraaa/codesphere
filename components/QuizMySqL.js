import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const questions = [
  {
    question: 'Apa itu MySQL?',
    options: ['Bahasa pemrograman', 'Sistem operasi', 'Sistem manajemen basis data', 'Framework JavaScript'],
    correctAnswer: 'Sistem manajemen basis data'
  },
  {
    question: 'Apa singkatan dari SQL?',
    options: ['Structured Logic', 'Sequential Language', 'Structured Language', 'Single Language'],
    correctAnswer: 'Structured Language'
  },
  {
    question: 'Apa perintah untuk membuat database baru di MySQL?',
    options: ['CREATE DATABASE', 'NEW DATABASE', 'MAKE DATABASE', 'ADD DATABASE'],
    correctAnswer: 'CREATE DATABASE'
  },
  {
    question: 'Apa yang dilakukan perintah "SELECT * FROM users;" dalam MySQL?',
    options: ['Menambahkan data ke tabel users', 'Menghapus data dari tabel users', 'Mengupdate data di tabel users', 'Mengambil semua data dari tabel users'],
    correctAnswer: 'Mengambil semua data dari tabel users'
  },
  {
    question: 'Apa fungsi dari perintah "INSERT INTO table_name (column1, column2, column3) VALUES (value1, value2, value3);" dalam MySQL?',
    options: ['Menghapus baris dari tabel', 'Mengupdate baris di tabel', 'Menambahkan baris ke dalam tabel', 'Mengambil data dari tabel'],
    correctAnswer: 'Menambahkan baris ke dalam tabel'
  },
  {
    question: 'Apa yang dilakukan perintah "UPDATE table_name SET column1 = value1, column2 = value2 WHERE condition;" dalam MySQL?',
    options: ['Menambahkan baris ke dalam tabel', 'Mengambil data dari tabel', 'Mengupdate baris di tabel', 'Menghapus baris dari tabel'],
    correctAnswer: 'Mengupdate baris di tabel'
  },
  {
    question: 'Apa fungsi dari perintah "DELETE FROM table_name WHERE condition;" dalam MySQL?',
    options: ['Mengupdate baris di tabel', 'Menambahkan baris ke dalam tabel', 'Menghapus baris dari tabel', 'Mengambil data dari tabel'],
    correctAnswer: 'Menghapus baris dari tabel'
  },
  {
    question: 'Apa perintah untuk menampilkan semua tabel yang ada di database MySQL?',
    options: ['SHOW TABLES;', 'LIST TABLES;', 'VIEW TABLES;', 'DISPLAY TABLES;'],
    correctAnswer: 'SHOW TABLES;'
  },
  {
    question: 'Apa yang dilakukan perintah "SELECT COUNT(*) FROM table_name;" dalam MySQL?',
    options: ['Menghitung jumlah baris di tabel', 'Mengurutkan data di tabel', 'Menghapus data dari tabel', 'Mengupdate data di tabel'],
    correctAnswer: 'Menghitung jumlah baris di tabel'
  },
  {
    question: 'Apa perintah untuk mengambil semua data dari kolom "name" di tabel "users" di MySQL?',
    options: ['SELECT name FROM users;', 'GET name FROM users;', 'SELECT * FROM users WHERE name;', 'GET * FROM users WHERE name;'],
    correctAnswer: 'SELECT name FROM users;'
  },
  {
    question: 'Apa yang dilakukan perintah "SELECT * FROM users WHERE age > 30;" dalam MySQL?',
    options: ['Mengambil semua data dari tabel users', 'Menghapus data dari tabel users', 'Mengupdate data di tabel users', 'Mengambil data dari tabel users dimana umur lebih dari 30'],
    correctAnswer: 'Mengambil data dari tabel users dimana umur lebih dari 30'
  },
  {
    question: 'Apa yang dilakukan perintah "SELECT * FROM users ORDER BY name DESC;" dalam MySQL?',
    options: ['Mengurutkan data dari tabel users berdasarkan nama secara menaik', 'Mengurutkan data dari tabel users berdasarkan nama secara menurun', 'Mengurutkan data dari tabel users berdasarkan umur secara menaik', 'Mengurutkan data dari tabel users berdasarkan umur secara menurun'],
    correctAnswer: 'Mengurutkan data dari tabel users berdasarkan nama secara menurun'
  },
  {
    question: 'Apa yang dilakukan perintah "SELECT DISTINCT city FROM users;" dalam MySQL?',
    options: ['Mengambil semua data dari kolom city di tabel users', 'Menghapus data duplikat dari kolom city di tabel users', 'Mengupdate data di kolom city di tabel users', 'Mengurutkan data di kolom city di tabel users'],
    correctAnswer: 'Mengambil data unik dari kolom city di tabel users'
  },
  {
    question: 'Apa perintah untuk menambahkan kolom baru "email" dengan tipe data VARCHAR(255) ke tabel "users" di MySQL?',
    options: ['ALTER TABLE users ADD COLUMN email VARCHAR(255);', 'CREATE COLUMN email VARCHAR(255) IN TABLE users;', 'ADD COLUMN email VARCHAR(255) TO TABLE users;', 'INSERT INTO users (email) VALUES (VARCHAR(255));'],
    correctAnswer: 'ALTER TABLE users ADD COLUMN email VARCHAR(255);'
  },
  {
    question: 'Apa perintah untuk menghapus kolom "email" dari tabel "users" di MySQL?',
    options: ['ALTER TABLE users DROP COLUMN email;', 'DELETE COLUMN email FROM users;', 'REMOVE COLUMN email FROM users;', 'DROP COLUMN email FROM users;'],
    correctAnswer: 'ALTER TABLE users DROP COLUMN email;'
  },
  {
    question: 'Apa yang dilakukan perintah "SELECT * FROM users LIMIT 5;" dalam MySQL?',
    options: ['Mengambil semua data dari tabel users', 'Menghapus data dari tabel users', 'Mengupdate data di tabel users', 'Mengambil lima data pertamadari tabel users'],
    correctAnswer: 'Mengambil lima data pertama dari tabel users'
  },
  {
    question: 'Apa yang dilakukan perintah "SELECT * FROM users LIMIT 5 OFFSET 10;" dalam MySQL?',
    options: ['Mengambil lima data dari tabel users dimulai dari baris ke-10', 'Mengambil lima data dari tabel users dimulai dari baris pertama', 'Mengambil lima data dari tabel users dimulai dari baris terakhir', 'Mengambil lima data dari tabel users dimulai dari baris ke-5'],
    correctAnswer: 'Mengambil lima data dari tabel users dimulai dari baris ke-10'
  },
  {
    question: 'Apa yang dilakukan perintah "SELECT * FROM users WHERE name LIKE "John%";" dalam MySQL?',
    options: ['Mengambil data dari tabel users dimana nama sama dengan "John"', 'Mengambil data dari tabel users dimana nama berawalan "John"', 'Mengambil data dari tabel users dimana nama berakhir dengan "John"', 'Mengambil data dari tabel users dimana nama mengandung "John"'],
    correctAnswer: 'Mengambil data dari tabel users dimana nama berawalan "John"'
  },
  {
    question: 'Apa yang dilakukan perintah "SELECT * FROM users WHERE age BETWEEN 18 AND 30;" dalam MySQL?',
    options: ['Mengambil data dari tabel users dimana umur kurang dari 18 dan lebih dari 30', 'Mengambil data dari tabel users dimana umur antara 18 dan 30', 'Mengambil data dari tabel users dimana umur lebih dari 18 dan kurang dari 30', 'Mengambil data dari tabel users dimana umur lebih dari 18 atau kurang dari 30'],
    correctAnswer: 'Mengambil data dari tabel users dimana umur antara 18 dan 30'
  },
  {
    question: 'Apa perintah untuk menghapus tabel "users" dari database di MySQL?',
    options: ['DROP TABLE users;', 'DELETE TABLE users;', 'REMOVE TABLE users;', 'REMOVE TABLE users;'],
    correctAnswer: 'DROP TABLE users;'
  },
  {
    question: 'Apa yang dilakukan perintah "SELECT * FROM users WHERE email IS NULL;" dalam MySQL?',
    options: ['Mengambil semua data dari tabel users dimana kolom email kosong', 'Mengambil semua data dari tabel users dimana kolom email tidak kosong', 'Mengambil semua data dari tabel users', 'Menghapus semua data dari tabel users'],
    correctAnswer: 'Mengambil semua data dari tabel users dimana kolom email kosong'
  },
  {
    question: 'Apa perintah untuk mengubah nama tabel "students" menjadi "participants" di MySQL?',
    options: ['ALTER TABLE students RENAME TO participants;', 'CHANGE TABLE students TO participants;', 'UPDATE TABLE students RENAME TO participants;', 'RENAME TABLE students TO participants;'],
    correctAnswer: 'ALTER TABLE students RENAME TO participants;'
  },
  {
    question: 'Apa yang dilakukan perintah "SELECT MIN(age) FROM users;" dalam MySQL?',
    options: ['Mengambil nilai minimum dari kolom age di tabel users', 'Mengambil nilai maksimum dari kolom age di tabel users', 'Mengambil rata-rata dari kolom age di tabel users', 'Mengambil jumlah total dari kolom age di tabel users'],
    correctAnswer: 'Mengambil nilai minimum dari kolom age di tabel users'
  },
  {
    question: 'Apa perintah untuk menambahkan indeks pada kolom "name" di tabel "users" di MySQL?',
    options: ['CREATE INDEX idx_name ON users(name);', 'ADD INDEX name ON users(name);', 'INDEX name ON users(name);', 'CREATE INDEX ON users(name);'],
    correctAnswer: 'CREATE INDEX idx_name ON users(name);'
  },
  {
    question: 'Apa yang dilakukan perintah "SELECT * FROM users WHERE name = "John" AND age > 30;" dalam MySQL?',
    options: ['Mengambil data dari tabel users dimana nama sama dengan "John" dan umur lebih dari 30', 'Mengambil data dari tabel users dimana nama sama dengan "John" atau umur lebih dari 30', 'Mengambil data dari tabel users dimana nama sama dengan "John" dan umur kurang dari 30', 'Mengambil data dari tabel users dimana nama sama dengan "John"'],
    correctAnswer: 'Mengambil data dari tabel users dimana nama sama dengan "John" dan umur lebih dari 30'
  }
];

export default function QuizMySqL({ navigation }) {
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
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CertificateMySqL')}>
          <Text style={styles.buttonText}>Ambil Sertifikat</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.back}>
          <TouchableOpacity onPress={() => navigation.navigate('KelasMySqL')}>
            <FontAwesomeIcon icon={faArrowLeft} size={25} color='#213555' />
          </TouchableOpacity>
          <Text style={styles.text1}>Quiz MySqL</Text>
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
    left: 75
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