// --- START OF FILE Menu.js ---
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Menu() {
  const cliqueMenu = (categoria) => {
    alert(`Você clicou em: ${categoria}`);
  };

  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity style={styles.menuItem} onPress={() => cliqueMenu('Celulares')}>
        <Text style={styles.menuText}>Celulares</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => cliqueMenu('Notebooks')}>
        <Text style={styles.menuText}>Notebooks</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => cliqueMenu('Tvs')}>
        <Text style={styles.menuText}>Tvs</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => cliqueMenu('Relogios')}>
        <Text style={styles.menuText}>Relogios</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 10,
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  menuText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
// --- END OF FILE Menu.js ---