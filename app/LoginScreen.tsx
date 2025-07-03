import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const LoginScreen = () => {
  return (
    <ScreenWrapper>
      <Text>LoginScreen</Text>
      <Feather name="home" size={24} color='#00C26F' />
    </ScreenWrapper>
  )
}
const styles = StyleSheet.create({
  
});
export default LoginScreen