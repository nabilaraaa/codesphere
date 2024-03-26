import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './components/SplashScreen';
import HomeScreen from './components/HomeScreen';
import OnBoard1 from './components/OnBoard1';
import OnBoard2 from './components/OnBoard2';
import OnBoard3 from './components/OnBoard3';
import OnBoard4 from './components/OnBoard4';
import Masuk1 from './components/Masuk1';
import Masuk2 from './components/Masuk2';
import Daftar1 from './components/Daftar1';
import Daftar2 from './components/Daftar2';
import LupaPass1 from './components/LupaPass1';
import LupaPass2 from './components/LupaPass2';
import BuatPass from './components/BuatPass';
import Kategori from './components/Kategori';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import Terpopuler from './components/Terpopuler';
import Kelas from './components/Kelas';
import KelasCpp from './components/Kelas/KelasCpp';
import KelasReactNative from './components/Kelas/KelasReactNative';
import KelasJavaScript from './components/Kelas/KelasJavaScript';
import KelasPython from './components/Kelas/KelasPython';
import KelasMySqL from './components/Kelas/KelasMySqL';
import KelasJava from './components/Kelas/KelasJava';
import CertificatePython from './components/CertificatePython';
import CertificateCpp from './components/CertificateCpp';
import CertificateJava from './components/CertificateJava';
import CertificateJavaScript from './components/CertificateJavaScript';
import CertificateMySqL from './components/CertificateMySqL';
import CertificateReactNative from './components/CertificateReactNative';
import QuizPython from './components/QuizPython';
import QuizCpp from './components/QuizCpp';
import QuizJava from './components/QuizJava';
import QuizJavaScript from './components/QuizJavaScript';
import QuizMySqL from './components/QuizMySqL';
import QuizReactNative from './components/QuizReactNative';


const Stack = createStackNavigator();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Main' component={loading ? SplashScreen : OnBoard1} />
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='OnBoard1' component={OnBoard1}/>
        <Stack.Screen name='OnBoard2' component={OnBoard2}/>
        <Stack.Screen name='OnBoard3' component={OnBoard3}/>
        <Stack.Screen name='OnBoard4' component={OnBoard4}/>
        <Stack.Screen name='Masuk1' component={Masuk1}/>
        <Stack.Screen name='Masuk2' component={Masuk2}/>
        <Stack.Screen name='Daftar1' component={Daftar1}/>
        <Stack.Screen name='Daftar2' component={Daftar2}/>
        <Stack.Screen name='Kategori' component={Kategori}/>
        <Stack.Screen name='LupaPass1' component={LupaPass1}/>
        <Stack.Screen name='LupaPass2' component={LupaPass2}/>
        <Stack.Screen name='BuatPass' component={BuatPass}/>
        <Stack.Screen name='Kelas' component={Kelas}/>
        <Stack.Screen name='Profile' component={Profile}/>
        <Stack.Screen name='EditProfile' component={EditProfile}/>
        <Stack.Screen name='Terpopuler' component={Terpopuler}/>
        <Stack.Screen name='KelasCpp' component={KelasCpp}/>
        <Stack.Screen name='KelasReactNative' component={KelasReactNative}/>
        <Stack.Screen name='KelasJavaScript' component={KelasJavaScript}/>
        <Stack.Screen name='KelasPython' component={KelasPython}/>
        <Stack.Screen name='KelasMySqL' component={KelasMySqL}/>
        <Stack.Screen name='KelasJava' component={KelasJava}/>
        <Stack.Screen name='CertificatePython' component={CertificatePython}/>
        <Stack.Screen name='CertificateCpp' component={CertificateCpp}/>
        <Stack.Screen name='CertificateJava' component={CertificateJava}/>
        <Stack.Screen name='CertificateJavaScript' component={CertificateJavaScript}/>
        <Stack.Screen name='CertificateReactNative' component={CertificateReactNative}/>
        <Stack.Screen name='CertificateMySqL' component={CertificateMySqL}/>
        <Stack.Screen name='QuizPython' component={QuizPython}/>
        <Stack.Screen name='QuizCpp' component={QuizCpp}/>
        <Stack.Screen name='QuizJava' component={QuizJava}/>
        <Stack.Screen name='QuizJavaScript' component={QuizJavaScript}/>
        <Stack.Screen name='QuizReactNative' component={QuizReactNative}/>
        <Stack.Screen name='QuizMySqL' component={QuizMySqL}/>




      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
