import ScreenWrapper from '@/components/ScreenWrapper'
import { wp } from '@/helpers/common'
import { hp } from '@/helpers/common'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Welcome = () => {
  return (
    <ScreenWrapper bg='#f0f0f0'>
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
    fontSize: hp(3),
    fontWeight: 'normal',
    textAlign: 'center',
  }
});
export default Welcome
