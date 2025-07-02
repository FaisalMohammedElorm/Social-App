import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ScreenWrapperProps {
  children: ReactNode;
  bg?: string;
}

const ScreenWrapper = ({children, bg}: ScreenWrapperProps) => {
  const {top} = useSafeAreaInsets()
  const paddingTop = top > 0 ? top+5 : 30; 
  return (
    <View style={[styles.container, {backgroundColor: bg, paddingTop}]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
export default ScreenWrapper
