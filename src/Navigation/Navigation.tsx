import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignUp from '../Screen/SignUp/SignUp';
import Welcome from '../Screen/Welcome/Welcome';
import UpdateProfile from '../Screen/Profile/UpdateProfile';

export type RootStackParamList = {
  signup: undefined;
  welcome: undefined;
  updateprofile:undefined
};

const Navigation = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator
        id="RootStack"
        initialRouteName='signup' 
        screenOptions={{ headerShown: false }}
    >
        <Stack.Screen component={SignUp} name='signup' />
        <Stack.Screen component={Welcome} name='welcome' />
        <Stack.Screen component={UpdateProfile} name='updateprofile' />
    </Stack.Navigator>
  )
}

export default Navigation

const styles = StyleSheet.create({})