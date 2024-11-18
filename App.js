import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, StatusBar } from 'react-native';
import { AppProvider } from './context/AppContext'; // App context provider
import HomeScreen from './screens/HomeScreen'; // Home screen component
import DetailsScreen from './screens/DetailsScreen'; // Details screen component

const Stack = createStackNavigator();

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
