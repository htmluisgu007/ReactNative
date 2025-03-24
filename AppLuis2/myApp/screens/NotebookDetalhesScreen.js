// --- START OF FILE screens/NotebookDetalhesScreen.js ---
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NotebookDetalhesScreen = ({ route }) => {
  const { produto } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{produto.title}</Text>
      <Image source={produto.image} style={styles.image} />
      <Text style={styles.price}>R$ {produto.preco}</Text>

      <TouchableOpacity style={styles.button} onPress={() => alert("Produto adicionado ao carrinho")}>
        <Text style={styles.buttonText}>Comprar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.voltarButton} onPress={() => navigation.goBack()}>
        <Text style={styles.voltarButtonText}>Voltar para a Loja</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    marginBottom: 20,
    color: 'green',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
   voltarButton: {
    backgroundColor: '#6c757d',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  voltarButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default NotebookDetalhesScreen;
// --- END OF FILE screens/NotebookDetalhesScreen.js ---