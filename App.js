import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import { setStringAsync } from 'expo-clipboard';
import Promocao from './src/components/Promocao';

export default function App() {



  return <ScrollView>
    <StatusBar
      barStyle="dark-content"
      backgroundColor="#837920"/>
      <View>
        <Promocao 
          titulo="Promocao em tênis de Corrida!"
          imagem={ require("./src/data/tenis.webp")}
          promocao={80}
          codigo="TENISFROMOZ"/>
        <Promocao 
          titulo="Domesticos"
          imagem={ require("./src/data/roboDomestico.webp")}
          promocao={50}
          codigo="ROBOBEINGPERSON"/>
        <Promocao 
          titulo="vaidade, o seu creme para rosto"
          imagem={ require("./src/data/vaidade.jpg")}
          promocao={10}
          codigo="GUMBALLMODEL"/>
      </View>
  </ScrollView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
