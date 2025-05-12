import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from './src/components/loginscreen.js';

export default function App() {
  return (
    <View style={styles.contenedor}>
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
});
