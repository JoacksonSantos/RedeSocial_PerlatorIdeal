import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

export default function Login({navigation}){

    const entrar = () =>{
        navigation.reset({
            index: 0,
            routes: [{name: "Principal"}]
        })
    }
    const cadastrar = () =>{
        navigation.navigate("Cadastro")
    }

   return ( 
    
   <KeyboardAvoidingView style={styles.container}> 
        <View style={styles.logo}>
            <Image
            source={require('../assets/logo1.png')}
            />
        </View>

        <View style={styles.container2}>
            <TextInput
                placeholder="Email"
                autoCorrect={false}
                onChangeText={() => {}}
            />

        <TextInput
            placeholder="Senha"
            autoCorrect={false}
            onChangeText={() => {}}
        />
        <TouchableOpacity 
          onPress={() => entrar()}
        >
            <Text>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() => cadastrar()}
        >
            <Text>Criar Conta</Text>
        </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
)
   

   

}

const styles=StyleSheet.create({
    container:{
    flex: 1,
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center',
    },
    logo:{
        flex: 1,
        justifyContent: 'center'
    },
    container2:{
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    width:'90%'
    }
});