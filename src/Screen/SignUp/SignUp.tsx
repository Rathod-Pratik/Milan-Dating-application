import {
  Animated,
  Image,
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

const SignUp = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      <View style={styles.contentContainer}>
        
        {/* --- Top Section: Logo (Takes available space) --- */}
        <View style={styles.topSection}>
          <Animated.Image
            source={require('../../assets/Image/Logo.png')}
            style={[styles.logo, { opacity: fadeAnim }]}
            resizeMode={'contain'}
          />
        </View>

        {/* --- Bottom Section: Title, Buttons, Footer --- */}
        <View style={styles.bottomSection}>
          
          <Text style={styles.title}>New to Milan?</Text>

          <View style={styles.buttonContainer}>
            
            {/* Email Button */}
            <TouchableOpacity activeOpacity={0.8}>
              <LinearGradient
                colors={['#E461A3', '#E44C59']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
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

            {/* Mobile Button */}
            <TouchableOpacity activeOpacity={0.8}>
              <LinearGradient
                colors={['#E461A3', '#E44C59']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
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

            {/* Google Button */}
            <TouchableOpacity activeOpacity={0.8}>
              <LinearGradient
                colors={['#E461A3', '#E44C59']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
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
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: widthPixel(24),
  },
  // --- New Section Styles ---
  topSection: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSection: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: heightPixel(30), // Padding from bottom edge
  },
  // --- Element Styles ---
  logo: {
    height: heightPixel(220),
    width: widthPixel(220),
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#171725',
    marginBottom: heightPixel(24), // Added space between title and buttons
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    gap: heightPixel(16),
    marginBottom: heightPixel(20), // Space between buttons and footer
  },
  gradientBorder: {
    height: heightPixel(56),
    borderRadius: 16,
    padding: 1.5, 
    width: '100%',
  },
  innerButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    borderRadius: 14.5, 
    paddingHorizontal: widthPixel(20),
  },
  iconWrapper: {
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleIcon: {
    width: 24,
    height: 24,
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