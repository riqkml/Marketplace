import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

export default class Button extends Component {
  render() {
    const {label, click} = this.props;
    return (
      <TouchableOpacity
        onPress={click}
        style={{
          backgroundColor: '#028CCE',
          paddingVertical: 10,
          paddingHorizontal: 20,
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 18,
            letterSpacing: 0.5,
          }}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({});
