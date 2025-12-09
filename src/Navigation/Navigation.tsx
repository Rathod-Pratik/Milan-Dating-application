import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../Screen/SignUp/SignUp';
import Welcome from '../Screen/Welcome/Welcome';
import UpdateProfile from '../Screen/Profile/UpdateProfile';
import Premium from '../Screen/Premium/Premium';
import LinearGradient from 'react-native-linear-gradient';
import { ChevronRight } from 'lucide-react-native';
import { fontPixel } from '../utils/Responsive';

export type RootStackParamList = {
  signup: undefined;
  welcome: undefined;
  updateprofile: undefined;
  premium: undefined;
};

const Navigation = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator
      id="RootStack"
      initialRouteName="signup"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen component={SignUp} name="signup" />
      <Stack.Screen component={Welcome} name="welcome" />
      <Stack.Screen component={UpdateProfile} name="updateprofile" />
      <Stack.Screen
        name="premium"
        component={Premium}
        options={{
          headerShown: true,
          headerBackVisible: false,
          headerTitle: '',
          headerBackground: () => (
            <LinearGradient
              colors={['#E461A3', '#E44C59']}
              style={{ flex: 1 }}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
            />
          ),
          headerLeft: () => (
            <Text style={{ color: '#fff', fontSize: fontPixel(18), fontFamily: 'Urbanist-SemiBold' }}>
              Upgrade to Premium
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => console.log('Skip Pressed')}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 5,
                  justifyContent: 'center',
                }}
              >
                <Text style={{ color: '#fff', fontSize: fontPixel(16),fontFamily: 'Urbanist-Regular' }}>Skip</Text>
                <Text>
                  <ChevronRight color={'#fff'} />
                </Text>
              </View>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
