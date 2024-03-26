import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const questions = [
  {
    question: 'Apa output dari print(3 ** 2)?',
    options: ['6', '9', '12', '5'],
    correctAnswer: '9'
  },
  {
    question: 'Apa hasilnya dari 8 % 3?',
    options: ['0', '2', '3', '1'],
    correctAnswer: '2'
  },
  {
    question: 'Apa outputnya dari print("hello" + "world")?',
    options: ['"helloworld"', '"hello world"', '"hello+world"', '"hello-world"'],
    correctAnswer: '"helloworld"'
  },
  {
    question: 'Apa hasilnya dari len("Python")?',
    options: ['4', '6', '7', '5'],
    correctAnswer: '6'
  },
  {
    question: 'Apa hasilnya dari type(3.14)?',
    options: ['int', 'float', 'string', 'boolean'],
    correctAnswer: 'float'
  },
  {
    question: 'Apa outputnya dari print(10 // 3)?',
    options: ['3', '3.33', '4', '2'],
    correctAnswer: '3'
  },
  {
    question: 'Apa hasilnya dari 2 == 2?',
    options: ['True', 'False', 'None', 'Error'],
    correctAnswer: 'True'
  },
  {
    question: 'Apa hasilnya dari "apple" in ["banana", "orange", "apple"]?',
    options: ['True', 'False', 'None', 'Error'],
    correctAnswer: 'True'
  },
  {
    question: 'Apa output dari print("hello" * 3)?',
    options: ['"hellohellohello"', '"hello 3 times"', '"hellohello"', '"3hello"'],
    correctAnswer: '"hellohellohello"'
  },
  {
    question: 'Apa hasilnya dari not(True and False)?',
    options: ['True', 'False', 'None', 'Error'],
    correctAnswer: 'True'
  },
  {
    question: 'Apa outputnya dari print("Python"[2])?',
    options: ['P', 't', 'h', 'o'],
    correctAnswer: 't'
  },
  {
    question: 'Apa hasilnya dari 5 > 3?',
    options: ['True', 'False', 'None', 'Error'],
    correctAnswer: 'True'
  },
  {
    question: 'Apa hasilnya dari max([1, 5, 3, 9])?',
    options: ['1', '5', '3', '9'],
    correctAnswer: '9'
  },
  {
    question: 'Apa output dari print("Python"[::-1])?',
    options: ['"Python"', '"nohtyP"', '"thonPy"', '"nyhtoP"'],
    correctAnswer: '"nohtyP"'
  },
  {
    question: 'Apa hasilnya dari 10 != 10?',
    options: ['True', 'False', 'None', 'Error'],
    correctAnswer: 'False'
  },
  {
    question: 'Apa output dari print(3 ** 2)?',
    options: ['6', '9', '12', '5'],
    correctAnswer: '9'
  },
  {
    question: 'Apa hasilnya dari 8 % 3?',
    options: ['0', '2', '3', '1'],
    correctAnswer: '2'
  },
  {
    question: 'Apa outputnya dari print("hello" + "world")?',
    options: ['"helloworld"', '"hello world"', '"hello+world"', '"hello-world"'],
    correctAnswer: '"helloworld"'
  },
  {
    question: 'Apa hasilnya dari len("Python")?',
    options: ['4', '6', '7', '5'],
    correctAnswer: '6'
  },
  {
    question: 'Apa hasilnya dari type(3.14)?',
    options: ['int', 'float', 'string', 'boolean'],
    correctAnswer: 'float'
  },
  {
    question: 'Apa outputnya dari print(10 // 3)?',
    options: ['3', '3.33', '4', '2'],
    correctAnswer: '3'
  },
  {
    question: 'Apa hasilnya dari 2 == 2?',
    options: ['True', 'False', 'None', 'Error'],
    correctAnswer: 'True'
  },
  {
    question: 'Apa hasilnya dari "apple" in ["banana", "orange", "apple"]?',
    options: ['True', 'False', 'None', 'Error'],
    correctAnswer: 'True'
  },
  {
    question: 'Apa output dari print("hello" * 3)?',
    options: ['"hellohellohello"', '"hello 3 times"', '"hellohello"', '"3hello"'],
    correctAnswer: '"hellohellohello"'
  },
  {
    question: 'Apa hasilnya dari not(True and False)?',
    options: ['True', 'False', 'None', 'Error'],
    correctAnswer: 'True'
  },
  {
    question: 'Apa outputnya dari print("Python"[2])?',
    options: ['P', 't', 'h', 'o'],
    correctAnswer: 't'
  },
  {
    question: 'Apa hasilnya dari 5 > 3?',
    options: ['True', 'False', 'None', 'Error'],
    correctAnswer: 'True'
  },
  {
    question: 'Apa hasilnya dari max([1, 5, 3, 9])?',
    options: ['1', '5', '3', '9'],
    correctAnswer: '9'
  },
  {
    question: 'Apa output dari print("Python"[::-1])?',
    options: ['"Python"', '"nohtyP"', '"thonPy"', '"nyhtoP"'],
    correctAnswer: '"nohtyP"'
  },
  {
    question: 'Apa hasilnya dari 10 != 10?',
    options: ['True', 'False', 'None', 'Error'],
    correctAnswer: 'False'
  },
  {
    question: 'Berapa hasilnya dari 2 * 5?',
    options: ['8', '10', '12', '15'],
    correctAnswer: '10'
  },
  {
    question: 'Apa hasilnya dari 20 / 4?',
    options: ['4', '5', '6', '7'],
    correctAnswer: '5'
  },
  {
    question: 'Apa output dari print("2 + 2 = ", 2 + 2)?',
    options: ['"2 + 2 = 4"', '"2 + 2 = 22"', '"2 + 2 = 44"', '"2 + 2 = 8"'],
    correctAnswer: '"2 + 2 = 4"'
  },
  {
    question: 'Apa hasilnya dari min([4, 7, 1, 9])?',
    options: ['4', '7', '1', '9'],
    correctAnswer: '1'
  },
  {
    question: 'Apa outputnya dari print("Hello"[1:3])?',
    options: ['"Hel"', '"He"', '"el"', '"lo"'],
    correctAnswer: '"el"'
  },
  {
    question: 'Apa hasilnya dari 2 > 4?',
    options: ['True', 'False', 'None', 'Error'],
    correctAnswer: 'False'
  }
];

export default function QuizPython({ navigation }) {
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
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CertificatePython')}>
          <Text style={styles.buttonText}>Ambil Sertifikat</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.back}>
          <TouchableOpacity onPress={() => navigation.navigate('KelasPython')}>
            <FontAwesomeIcon icon={faArrowLeft} size={25} color='#213555' />
          </TouchableOpacity>
          <Text style={styles.text1}>Quiz Python</Text>
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
    left: 80
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