import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppContext } from '../context/AppContext';
import CustomButton from '../components/Button';
import { fetchData } from '../utils/api';

const HomeScreen = ({ navigation }) => {
  const { user, setUser } = useContext(AppContext);

  useEffect(() => {
    const loadUser = async () => {
      const userData = await fetchData('/users/1');
      setUser(userData);
    };
    loadUser();
  }, [setUser]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      {user ? (
        <Text style={styles.subtitle}>Hello, {user.name}!</Text>
      ) : (
        <Text style={styles.subtitle}>Loading user...</Text>
      )}
      <CustomButton title="Go to Details" onPress={() => navigation.navigate('Details')} />
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

export default HomeScreen;
