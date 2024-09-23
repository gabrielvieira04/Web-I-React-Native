
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Encontre seus pilotos favoritos aki !!</Text>
      <Button
        title="ENTRAR"
        color="#007bff"
        onPress={() => navigation.navigate('PilotFinder')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
  },
});
