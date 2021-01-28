import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Navigation from './navigation';

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    );
  }
}
