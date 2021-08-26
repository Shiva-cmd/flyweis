/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Aboutus from './src/screens/aboutUs';
import Chatprice from './src/screens/chatPrice';
import Editprofile from './src/screens/editProfile';
import FaceVerification from './src/screens/faceVerifation';
import Uploadposter from './src/screens/uploadPoster';
import Setting from './src/screens/setting';
const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (

    <NavigationContainer >
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen
          name="Setting"
          component={Setting}
        />
        <Stack.Screen
          name="FaceVerification"
          component={FaceVerification}
        />
        <Stack.Screen name="ChatPrice" component={Chatprice} />
        <Stack.Screen name="uploadPoster" component={Uploadposter} />
        <Stack.Screen name="AboutUs" component={Aboutus} />
        <Stack.Screen name="EditProfile" component={Editprofile} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
