import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Loading = ({size='large', color='black'}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <ActivityIndicator size={size} color={color} />
    </View>
  )
}

const styles = StyleSheet.create({

})
export default Loading
