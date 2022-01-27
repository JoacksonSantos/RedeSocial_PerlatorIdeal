import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,KeyboardAvoidingView, Image, TextInput, TouchableOpacity, SafeAreaView} from 'react-native';
import {
    Container,
    Profile,
    Content,
    Header,
    Name,
    Account,
    Timestamp,
    Body,
    Media,
    Footer,
    IconContainer,
    Count,
  } from '../estilos/indesx';

export default function Principal({navigation}){
   return(
    <Container>
    <Profile source={require('../assets/logo.png')} />
    <Content>
      <Header>
        <Name>Joaõ</Name>
        <Account>@joao</Account>
        <Timestamp> · 3 h</Timestamp>
      </Header>
      <Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et sapien sit amet nisi consectetur porta. Vivamus volutpat rhoncus nulla, quis auctor purus tincidunt eu. Maecenas sagittis efficitur felis vitae ornare. Pellentesque porta suscipit quam, eu dictum libero malesuada id. Nam in sagittis tortor. Nulla facilisi. Maecenas auctor nisl quis orci fermentum aliquam.</Body>
    </Content>
  </Container>
   )

}

const styles = StyleSheet.create({
    conteiner:{
        flex: 1
    }
})