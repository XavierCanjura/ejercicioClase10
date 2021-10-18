import React from 'react';
import HomeScreen from './components/Menu'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text , View, Button  } from 'react-native'
import WebScreen from './components/WebScreen'
 
const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={ HomeScreen } />
        <Stack.Screen name='Web' component={ WebScreen } />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 