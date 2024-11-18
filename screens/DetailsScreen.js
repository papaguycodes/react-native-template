import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      <Text style={styles.subtitle}>More information will go here.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E062B',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginVertical: 10,
  },
});

export default DetailsScreen;
