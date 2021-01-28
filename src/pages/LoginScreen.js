import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, TextInput} from 'react-native';
import {IconLogo} from '../assets';
import Button from '../components/Button';
import Gap from '../components/Gap';
import Input from '../components/Input';

export default class LoginScreen extends Component {
  render() {
    const {navigation} = this.props;
    console.log('ini nav', navigation);
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            paddingTop: 20,
            paddingBottom: 20,
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <Image source={IconLogo} style={{width: 100, height: 100}} />
        </View>
        <View style={{paddingHorizontal: 40, flex: 2}}>
          <Input label="Username" />
          <Gap Height={20} />
          <Input label="password" />
          <Gap Height={80} />
          <Button label="Login" />
          <Gap Height={20} />
          <Button
            label="Register"
            click={() => navigation.navigate('Register')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
