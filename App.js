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
import Quiz1 from './components/Quiz1';
import Quiz2 from './components/Quiz2';
import Profile from './components/Profile';


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
        <Stack.Screen name='Main' component={loading ? SplashScreen : Quiz1} />
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

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
