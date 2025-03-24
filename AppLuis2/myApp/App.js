// --- START OF FILE App.js ---
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from './Menu';
import Card from './Card';
import BannerImage from './assets/banner.jpg';

// Importe as telas de detalhes dos produtos
import IphoneDetalhesScreen from './screens/IphoneDetalhesScreen';
import AppleWatchDetalhesScreen from './screens/AppleWatchDetalhesScreen';
import NotebookDetalhesScreen from './screens/NotebookDetalhesScreen';
import SmartTVDetalhesScreen from './screens/SmartTVDetalhesScreen';

// Dados dos produtos (poderiam vir de uma API)
const produtos = [
  { id: '1', title: "Iphone 16 Pro Max", preco: "10.499,00", image: require('./assets/iphone.jpg'), screen: 'IphoneDetalhes' },
  { id: '2', title: "Apple Watch Series 10", preco: "5.499,00", image: require('./assets/applewatch.jpg'), screen: 'AppleWatchDetalhes' },
  { id: '3', title: "Notebook Gamer G15", preco: "5.849,00", image: require('./assets/notebook.jpg'), screen: 'NotebookDetalhes' },
  { id: '4', title: "Smart TV 55 Neo QLED 8K", preco: "6.299,10", image: require('./assets/tv.jpg'), screen: 'SmartTVDetalhes' },
];

// Componente para a tela inicial com a lista de produtos
function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Luis Eletrônicos</Text>

      {/* Banner */}
      <Image source={BannerImage} style={styles.banner} />

      {/* Menu */}
      <Menu />

      {/* Grid de Cards */}
      <View style={styles.grid}>
        {produtos.map(produto => (
          <Card
            key={produto.id}
            id={produto.id}
            title={produto.title}
            preco={produto.preco}
            image={produto.image}
            onPress={() => navigation.navigate(produto.screen, { produto })}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="IphoneDetalhes" component={IphoneDetalhesScreen} options={{ title: 'Detalhes do Iphone' }} />
        <Stack.Screen name="AppleWatchDetalhes" component={AppleWatchDetalhesScreen} options={{ title: 'Detalhes do Apple Watch' }} />
        <Stack.Screen name="NotebookDetalhes" component={NotebookDetalhesScreen} options={{ title: 'Detalhes do Notebook' }} />
        <Stack.Screen name="SmartTVDetalhes" component={SmartTVDetalhesScreen} options={{ title: 'Detalhes da Smart TV' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 20,
    color: '#333',
  },
  banner: {
    width: '90%',
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
    alignSelf: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
});
// --- END OF FILE App.js ---