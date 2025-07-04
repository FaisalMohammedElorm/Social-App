import { hp } from '@/helpers/common';
import React from 'react';
import { StyleSheet, TextInput, TextInputProps, View, ViewStyle } from 'react-native';

interface InputProps extends TextInputProps {
  containerStyles?: ViewStyle;
  Icon?: () => React.ReactNode;
  inputRef?: React.RefObject<TextInput>;
}

const Input = (props: InputProps) => {
  return (
    <View style={[styles.container, props.containerStyles && props.containerStyles]}>
      {
        props.Icon && props.Icon()
      }
      <TextInput
        style={{ flex: 1}}
        placeholderTextColor={props.placeholderTextColor || '#A3A0A0'}
        ref={props.inputRef && props.inputRef}
        {...props}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: hp(7.2),
    justifyContent: 'center',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: 'white',
    borderCurve: 'continuous',
    paddingHorizontal: 18,
    gap: 12
  },
});
  
export default Input