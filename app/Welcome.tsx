import ScreenWrapper from '@/components/ScreenWrapper'
import React from 'react'
import { StatusBar, Text, View, StyleSheet } from 'react-native'

const Welcome = () => {
  return (
    <ScreenWrapper bg='#f0f0f0'>
      <StatusBar style="dark"/>
      <View style={styles.container}>

      </View>
    </ScreenWrapper>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    
  }
});
export default Welcome
