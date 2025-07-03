import Button from '@/components/Button'
import ScreenWrapper from '@/components/ScreenWrapper'
import { hp, wp } from '@/helpers/common'
import { useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Welcome = () => {
  const router = useRouter()
  return (
    <ScreenWrapper bg='white'>
      <StatusBar style="dark"/>
      <View style={styles.container}>
        {/** Welcome Image */}
        <Image 
          style={styles.welcomeImage}
          source={require('@/assets/images/welcome.png')}
          resizeMode='contain'
        />
        {/** Welcome Text */}
        <View style={{gap: 20}}>
          <Text style={styles.title}>
            LinkUp!
          </Text>
          <Text style={styles.punchLine}>
            Where every thought finds a home, and every image tells a story.
          </Text>
        </View>
        {/** Footer */}
        <View style={styles.footer}>
          <Button 
            title='Get Started'
            onPress={() => router.push('/SignUpScreen')}
          />
          <View style={styles.bottomTextContainer}>
            <Text style={styles.loginText}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => router.push('/LoginScreen')}>
              <Text style={[styles.loginText, {fontWeight: 'bold', color: '#00C26F'}]}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingHorizontal: wp(4),
  },
  welcomeImage: {
    width: wp(100),
    height: hp(30),
    alignSelf: 'center',
  },
  title: {
    fontSize: hp(4),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  punchLine: {
    fontSize: hp(1.7),
    paddingHorizontal: wp(10),
    textAlign: 'center',
    color: '#9B9898',
    fontWeight: 'bold'
    
  }, 
  footer:{
    gap:30,
    width: '100%'
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  loginText: {
    textAlign: 'center',
    color: '#9B9898',
    fontSize: hp(1.6),
  }
});
export default Welcome
