import ScreenWrapper from '@/components/ScreenWrapper'
import { useRouter } from 'expo-router'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Index = () => {
  const router = useRouter()
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Social App</Text>
        <Button 
          title="Go to Welcome Screen" 
          onPress={() => router.push('/welcome')}
        />
      </View>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Index