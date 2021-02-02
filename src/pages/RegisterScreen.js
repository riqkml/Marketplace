import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, ScrollView} from 'react-native';
import {IconLogo} from '../assets';
import Button from '../components/Button';
import Input from '../components/Input';

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: '',
      email: '',
      nomorHp: '',
      alamat: '',
      sandi: '',
      visible: true,
    };
  }
  render() {
    const {nama, email, nomorHp, alamat, sandi, visible} = this.state;
    const {navigation} = this.props;
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            paddingVertical: 40,
          }}>
          <Image source={IconLogo} style={{width: 140, height: 140}} />
        </View>
        <View style={{flex: 2, paddingHorizontal: 40}}>
          <Input
            iconSize={25}
            state={nama}
            setText={(e) => {
              this.setState({
                nama: e,
              });
            }}
            icon="user"
            label="Nama"
            placeholder="Masukkan Nama..."
          />
          <Input
            iconSize={20}
            state={email}
            setText={(e) => {
              this.setState({
                email: e,
              });
            }}
            icon="envelope"
            label="E-mail"
            placeholder="Masukkan E-mail"
          />
          <Input
            iconSize={25}
            state={nomorHp}
            setText={(e) => {
              this.setState({
                nomorHp: e,
              });
            }}
            icon="phone"
            label="No. Telp"
            placeholder="Masukkan Nomor..."
          />
          <Input
            iconSize={25}
            state={alamat}
            setText={(e) => {
              this.setState({
                alamat: e,
              });
            }}
            icon="home"
            label="Alamat"
            placeholder="Masukkan Alamat..."
          />
          <Input
            iconSize={25}
            state={sandi}
            setText={(e) => {
              this.setState({
                sandi: e,
              });
            }}
            icon="key"
            label="Kata Sandi"
            placeholder="Masukkan Kata Sandi..."
            visible={visible}
            showPassword={() => {
              this.setState({
                visible: !visible,
              });
            }}
            password
          />
          <View style={{marginVertical: 60}}>
            <Button
              label="Daftar"
              onPress={() => navigation.navigate('Register')}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});
