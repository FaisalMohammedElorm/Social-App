import Button from '@/components/Button';
import Input from '@/components/input';
import ScreenWrapper from '@/components/ScreenWrapper';
import { hp, wp } from '@/helpers/common';
import { supabase } from '@/lib/supabase';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SignUpScreen = () => {
  const router = useRouter();
  const emailRef = useRef("");
  const nameRef = useRef("");
  const passwordRef = useRef("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
  
     if (!emailRef.current || !nameRef.current || !passwordRef.current) {
      Alert.alert('Sign Up', "Please fill all the fields");
      return;
    }

    let name = nameRef.current.trim();
    let email = emailRef.current.trim();
    let password = passwordRef.current.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Sign Up', "Please enter a valid email address");
      return;
    }

    setLoading(true);

      setLoading(true);

      try {
        const { data: authData, error: authError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { name },
          },
        });

        if (authError) {
          console.log('Auth error:', authError);
          Alert.alert('Sign Up Failed', `Error: ${authError.message}`);
          return;
        }

        // Only insert if user creation was successful and we have a user ID
        if (authData.user?.id) {
          const { error: insertError } = await supabase
            .from('Nonusers') 
            .insert({
              id: authData.user.id,
              email,
              name,
            });

          if (insertError) {
            console.log('Insert error:', insertError);
            Alert.alert('Sign Up Failed', `Database error: ${insertError.message}`);
            return;
          }
        }

        Alert.alert('Sign Up Successful', 'Your account has been created successfully!');
      } catch (error: any) {
        console.log('Sign Up error:', error);
        Alert.alert('Sign Up Failed', `Unexpected error: ${error.message || error}`);
      } finally {
        setLoading(false);
      }
    };


  return (
    <ScreenWrapper bg='white'>
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <TouchableOpacity onPress={() => router.back()} style={styles.button}>
            <AntDesign name="arrowleft" size={35} color="black" />
          </TouchableOpacity>
          {/** Welcome Text */}
          <View>
            <Text style={styles.welcomeText}>Let&apos;s</Text>
            <Text style={styles.welcomeText}>Get Started</Text>
          </View>
          {/** Form */}
          <View style={styles.form}>
            <Text style={{ fontSize: hp(2), color: '#A3A0A0', fontWeight: 'bold' }}>
              Please fill in the details below to create your account
            </Text>
            <Input
              Icon={() => <Feather name="user" size={25} color="#A3A0A0" />}
              placeholder="Enter your name"
              onChangeText={value => nameRef.current = value}
            />
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
            {/** Button */}
            <Button
              title={'Sign Up'}
              loading={loading}
              onPress={onSubmit}
              buttonStyle={{ marginTop: 25 }}
            />
          </View>
          {/** Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => router.push('/loginScreen')}>
              <Text style={[styles.footerText, { fontWeight: 'bold', color: '#00C26F' }]}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  button: {
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
    paddingHorizontal: wp(4),
    gap: 30,
    minHeight: hp(100),
  },
  form: {
    gap: 25
  },
  forgotPassword: {
    textAlign: 'right',
    fontWeight: 'bold',
    color: '#000000'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5
  },
  footerText: {
    textAlign: 'center',
    color: '#4D4343',
    fontSize: hp(1.6)
  }
});
export default SignUpScreen