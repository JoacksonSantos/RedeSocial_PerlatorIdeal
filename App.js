import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,KeyboardAvoidingView, Image, TextInput, TouchableOpacity} from 'react-native';
import Login from './screens/login';
import Principal from './screens/principal';
import Cadastro from './screens/cadastros.js';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();


function MyStack() {
  return (
    <Stack.Navigator
       screenOptions={{
       headerStyle: {
        backgroundColor: '#ffff00',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
    >
      <Stack.Screen name="login" component={Login}/>
      <Stack.Screen name="Principal" component={Principal}/>
      <Stack.Screen name="Cadastro" component={Cadastro}/>
      
      
      
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
       <MyStack/>
    </NavigationContainer>
     
  );
}


