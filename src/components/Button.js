import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

export default class Button extends Component {
  render() {
    const {onPress, label} = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: '#1F90EB',
          marginTop: 10,
          paddingVertical: 10,
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({});
