import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '@/components/Button'
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase'

const Home = () => {
  const {setAuth} = useAuth()
  const onLogout = async () => {
    setAuth(null)
    const { error } = await supabase.auth.signOut()
    if(error){
      Alert.alert('Sign out', "Error signing out")
    }
  }
  return (
    <View style={styles.container}>
      <Text>home</Text>
      <Button title='Logout' onPress={onLogout} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100, // Adjust this value to move content further down
    paddingHorizontal: 20,
  }
})

export default Home
