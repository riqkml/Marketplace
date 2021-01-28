import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

export default class RegisterScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text> Halaman Register</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({});
