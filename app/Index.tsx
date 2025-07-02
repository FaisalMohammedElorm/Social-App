import ScreenWrapper from '@/components/ScreenWrapper'
import { useRouter } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'


const Index = () => {
  const router = useRouter()
  return (
    <ScreenWrapper>
      <View>
        <Text>Index</Text>
      </View>
    </ScreenWrapper>
  )
}

export default Index