
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PilotFinderScreen() {
  return (
    <View style={styles.container}>
      <Text>Bem-vindo ao Pilot Finder!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
