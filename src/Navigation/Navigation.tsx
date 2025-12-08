import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignUp from '../Screen/SignUp/SignUp';
import Welcome from '../Screen/Welcome/Welcome';

const Navigation = () => {
    const Stack= createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName='signup' screenOptions={{
            headerShown:false
        }}>
        <Stack.Screen component={SignUp} name='signup'  />
        <Stack.Screen component={Welcome} name='welcome' />
    </Stack.Navigator>
  )
}

export default Navigation

const styles = StyleSheet.create({})