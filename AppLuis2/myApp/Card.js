// --- START OF FILE Card.js ---
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Card = ({ id, title, preco, image, onPress }) => {

  const handleComprar = () => {
    alert("Produto adicionado ao carrinho"); // Mostra o alerta
    onPress(); // Navega para a tela de detalhes
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>R$ {preco}</Text>
      <TouchableOpacity style={styles.button} onPress={handleComprar}>
        <Text style={styles.buttonText}>Comprar</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '45%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: 'green',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Card;
// --- END OF FILE Card.js ---