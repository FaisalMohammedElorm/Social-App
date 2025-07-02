import ScreenWrapper from '@/components/ScreenWrapper'
import { useRouter } from 'expo-router'
import React from 'react'
import { Button, Text, View } from 'react-native'


const Index = () => {
  const router = useRouter()
  return (
    <ScreenWrapper>
      <View>
        <Text>Index</Text>
        <Button title='Welcome' onPress={() => router.push('/Welcome')} />
      </View>
    </ScreenWrapper>
  )
}

export default Index