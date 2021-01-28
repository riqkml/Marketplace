import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../pages/SplashScreen';
import LoginScreen from '../pages/LoginScreen';
import RegisterScreen from '../pages/RegisterScreen';

const Stack = createStackNavigator();
const Hide = {headerShown: false};

export default class Navigation extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={Hide} />
        <Stack.Screen name="Login" component={LoginScreen} options={Hide} />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={Hide}
        />
      </Stack.Navigator>
    );
  }
}
