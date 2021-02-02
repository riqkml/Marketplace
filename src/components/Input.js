import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Input extends Component {
  render() {
    const {
      label,
      placeholder,
      password,
      icon,
      iconSize,
      state,
      setText,
      visible,
      showPassword,
    } = this.props;
    return (
      <View style={{marginTop: 10}}>
        <Text>{label}</Text>
        <View style={styles.inputContainer}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Icon name={icon} size={iconSize} color="#636e72" />
          </View>
          <View style={{flex: 1, paddingLeft: 10}}>
            <TextInput
              value={state}
              onChangeText={setText}
              placeholder={placeholder}
              secureTextEntry={visible}
            />
          </View>
          {password && (
            <TouchableOpacity
              onPress={showPassword}
              style={{justifyContent: 'center'}}>
              <Icon
                name={visible ? 'eye-slash' : 'eye'}
                size={25}
                color="#636e72"
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    marginTop: 10,
  },
});
