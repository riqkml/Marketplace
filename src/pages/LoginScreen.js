import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {IconLogo} from '../assets';
import Button from '../components/Button';
import Input from '../components/Input';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class LoginScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={IconLogo} style={{width: 140, height: 140}} />
        </View>
        <View style={{flex: 2, paddingHorizontal: 40}}>
          <Input
            icon="envelope"
            iconSize={20}
            label="Email"
            placeholder="Masukkan Username..."
          />
          <Input
            icon="key"
            iconSize={25}
            label="Password"
            placeholder="Masukkan Password..."
            password
          />
          <View style={{marginTop: 60}}>
            <Button label="Login" />
            <Button
              label="Register"
              onPress={() => navigation.navigate('Register')}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
