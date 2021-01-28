import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class Gap extends Component {
  render() {
    const {Width, Height} = this.props;
    return <View style={{width: Width, height: Height}} />;
  }
}
