import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {IconLogo} from '../assets';

export default class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Login');
    }, 2000);
  }
  render() {
    return (
      <View style={styles.wrapperContainer}>
        <Image source={IconLogo} style={styles.imageIcon} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapperContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageIcon: {width: 140, height: 140},
});
