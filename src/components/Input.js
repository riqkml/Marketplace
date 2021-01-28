import React, {Component} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';

export default class Input extends Component {
  render() {
    const {label} = this.props;
    return (
      <View>
        <Text>{`Masukkan ${label}`}</Text>
        <TextInput style={{borderWidth: 1}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
