import { StyleSheet, Text, View ,KeyboardAvoidingView, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
export default function Cadastro({navigation}){
        return(
            <KeyboardAvoidingView  style={styles.container}>
                <View style={styles.logo}>
                    <Image  source={require('../assets/cadastro.png')}/>
                </View>
                <View style={styles.container2}>
                   <TextInput
                      style={styles.input}
                      placeholder="Nome Usuario"
                      autoCorrect={false}
                      onChangeText={() => {}}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Email"
                      autoCorrect={false}
                      onChangeText={() => {}}
                    />

                    <TextInput
                    style={styles.input}
                        placeholder="Senha"
                        autoCorrect={false}
                        onChangeText={() => {}}
                    />
                </View>
            </KeyboardAvoidingView>
        )
}

const styles = StyleSheet.create(
    {container:{
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
    },
    input:{
        width:'100%',
        height:40,
        backgroundColor:'white',
        margin:5,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius:10,
    }
    
})