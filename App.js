import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/modules/home';
import Login from './src/modules/login';
import { NavigationContainer } from '@react-navigation/native';



const Stack = createStackNavigator();

export default class App extends React.Component {

  constructor(props) {
    super(props);
    
  }

  //*** VIEW */

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }



}

