import Button from '@/components/Button';
import Input from '@/components/input';
import ScreenWrapper from '@/components/ScreenWrapper';
import { hp, wp } from '@/helpers/common';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const LoginScreen = () => {
  const router = useRouter();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if(!emailRef.current || !passwordRef.current) {
      Alert.alert('Login', "Please fill all the fields");
      return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailRef.current)) {
      Alert.alert('Login', "Please enter a valid email address");
      return;
    }
    
    setLoading(true);
    
    try {
      // Here you would implement your actual login logic
      // For now, just simulate a login process
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      
      // On successful login, navigate to the main app
      Alert.alert('Success', 'Login successful!');
      // router.push('/home'); // Navigate to home screen after login
      
    } catch (error) {
      console.log('Login error:', error);
      Alert.alert('Login Failed', 'Invalid credentials. Please try again.');
    } finally {
      setLoading(false);
    }
  }
  return (
    <ScreenWrapper bg='white'>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <TouchableOpacity onPress={() => router.back()} style={styles.button}>
          <AntDesign name="arrowleft" size={35} color="black" />
        </TouchableOpacity>
        {/** Welcome Text */}
        <View>
          <Text style={styles.welcomeText}>Hey!</Text>
          <Text style={styles.welcomeText}>Welcome Back</Text>
        </View>
        {/** Form */}
        <View style={styles.form}>
          <Text style={{fontSize: hp(2), color: '#A3A0A0', fontWeight: 'bold'}}>
            Please Sign Up to continue
          </Text>
          <Input 
            Icon={() => <Feather name="mail" size={25} color="#A3A0A0" />} 
            placeholder="Enter your email" 
            onChangeText={value => emailRef.current = value}
          />
          <Input 
            Icon={() => <MaterialIcons name="lock" size={25} color="#A3A0A0" />} 
            placeholder="Enter your password" 
            secureTextEntry
            onChangeText={value => passwordRef.current = value}
          />
        <Text style={styles.forgotPassword}>
          Forgot Password?
        </Text>
        {/** Button */}
        <Button 
          title={'Sign Up'}
          loading={loading}
          onPress={onSubmit}
        />
        </View>
        {/** Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => router.push('/loginScreen')}>
            <Text style={[styles.footerText, {fontWeight: 'bold', color: '#00C26F'}]}>Login</Text>
          </TouchableOpacity>
        </View>
        </View>
      </ScreenWrapper>
    )
  }

const styles = StyleSheet.create({
  button:{
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#F0F0F0',
    shadowColor: '#000',
  },
  welcomeText: {
    fontSize: hp(4),
    fontWeight: 'bold',
    color: 'black',
  },
  container: {
    justifyContent: 'center',
    paddingHorizontal: wp(4),
    gap: 45,
  },
  form:{
    gap: 25
  },
  forgotPassword:{
    textAlign: 'right',
    fontWeight: 'bold',
    color: '#000000'
  }, 
  footer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5
  },
  footerText:{
    textAlign: 'center',
    color: '#4D4343',
    fontSize: hp(1.6)
  }
});
export default LoginScreen