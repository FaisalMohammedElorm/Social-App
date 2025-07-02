import { hp } from '@/helpers/common';
import React from 'react';
import { StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';

interface ButtonProps {
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  title?: string;
  onPress?: () => void;
  loading?: boolean;
  hasShadow?: boolean;
}

const Button = ({
  buttonStyle,
  textStyle,
  title = '',
  onPress = () => {},
  loading = false,
  hasShadow = true,
}: ButtonProps) => {
  const shadowStyle = {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  }
  if(loading) {
    return (
      <View style={[styles.button, buttonStyle, {backgroundColor: 'white'}]}>
        
      </View>
    )
  }
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={[styles.button, buttonStyle, hasShadow && shadowStyle]}
      disabled={loading}
    >
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#00C26F',
    height: hp(6.6),
    justifyContent: 'center',
    alignItems: 'center',
    borderCurve: 'continuous',
    borderRadius: 18,
  },
  text: {
    fontSize: hp(2.5),
    color: 'white',
    fontWeight: 'bold',
  }
});

export default Button