import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar
} from 'react-native';
import React, { useEffect, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { heightPixel, widthPixel } from '../../utils/Responsive';
import { Mail, Smartphone } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../Navigation/Navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const SignUp = () => {
  const Navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const Redirect = () => {
    Navigation.navigate("welcome")
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView 
        contentContainerStyle={styles.scrollContent} 
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.contentContainer}>
          <View style={styles.topSection}>
            <Animated.Image
              source={require('../../assets/Image/Logo.png')}
              style={[styles.logo, { opacity: fadeAnim }]}
              resizeMode={'contain'}
            />
          </View>

          <View style={styles.bottomSection}>
            
            <Text style={styles.title}>New to Milan?</Text>

            <View style={styles.buttonContainer}>
              
              <TouchableOpacity activeOpacity={0.8} onPress={Redirect}>
                <LinearGradient
                  colors={['#E461A3', '#E44C59']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  style={styles.gradientBorder}
                >
                  <View style={styles.innerButton}>
                    <View style={styles.iconWrapper}>
                      <Mail color="#000" size={24} />
                    </View>
                    <Text style={styles.socialButtonText}>Sign Up with Email</Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.8} onPress={Redirect}>
                <LinearGradient
                  colors={['#E461A3', '#E44C59']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  style={styles.gradientBorder}
                >
                  <View style={styles.innerButton}>
                    <View style={styles.iconWrapper}>
                      <Smartphone color="#000" size={24} />
                    </View>
                    <Text style={styles.socialButtonText}>Sign Up with Mobile</Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.8} onPress={Redirect}>
                <LinearGradient
                  colors={['#E461A3', '#E44C59']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  style={styles.gradientBorder}
                >
                  <View style={styles.innerButton}>
                    <View style={styles.iconWrapper}>
                      <Image 
                        source={require("../../assets/Image/GoogleIcon.png")} 
                        style={styles.googleIcon} 
                      />
                    </View>
                    <Text style={styles.socialButtonText}>Sign Up with Google</Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>

            </View>

            <View style={styles.footer}>
              <Text style={styles.footerText}>Already have an account? </Text>
              <TouchableOpacity>
                <Text style={styles.loginLink}>Login</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: widthPixel(24),
  },
  topSection: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: heightPixel(250), 
  },
  bottomSection: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: heightPixel(30),
  },
  logo: {
    height: heightPixel(220),
    width: widthPixel(220),
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: '#171725',
    marginBottom: heightPixel(24),
    textAlign: 'center',
    fontFamily: "Urbanist-SemiBold",
  },
  buttonContainer: {
    width: '100%',
    gap: heightPixel(16),
    marginBottom: heightPixel(20),
  },
  gradientBorder: {
    height: heightPixel(56),
    borderRadius: 100,
    padding: 1.5, 
    width: '100%',
  },
  innerButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    borderRadius: 100,
    paddingHorizontal: widthPixel(20),
  },
  iconWrapper: {
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleIcon: {
    width: widthPixel(24),
    height: heightPixel(24),
    resizeMode: 'contain',
  },
  socialButtonText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#171725',
    marginRight: 30,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#9CA4AB',
  },
  loginLink: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000',
    textDecorationLine: 'underline',
  },
});