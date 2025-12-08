import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPixel, heightPixel, fontPixel } from '../../utils/Responsive';
import LinearGradient from 'react-native-linear-gradient';

const Welcome = () => {
  const [HidePassword, SetHidePassword] = useState(true);

  const TogglePassword = () => {
    SetHidePassword(!HidePassword);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContent} 
          showsVerticalScrollIndicator={false}
        >
          
          <View style={styles.contentContainer}>
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>Welcome back</Text>
              <Text style={styles.subTitle}>Login to your account</Text>
            </View>

            <View style={styles.buttonWrapper}>
              <TouchableOpacity activeOpacity={0.7}>
                <View style={styles.innerButton}>
                  <View style={styles.iconWrapper}>
                    <Image
                      source={require('../../assets/Image/GoogleIcon.png')}
                      style={styles.googleIcon}
                    />
                  </View>
                  <Text style={styles.socialButtonText}>Sign Up with Google</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.dividerContainer}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>OR</Text>
              <View style={styles.dividerLine} />
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.Inputs}>
                <TextInput
                  style={styles.input}
                  placeholder="Mobile No./ Email ID"
                  placeholderTextColor="#9CA4AB"
                />

                <View>
                  <TextInput
                    placeholder="Password"
                    placeholderTextColor="#9CA4AB"
                    style={styles.input}
                    secureTextEntry={HidePassword}
                    keyboardType="default"
                  />
                  <TouchableOpacity
                    style={styles.HideButton}
                    onPress={TogglePassword}
                  >
                    <Text style={styles.HideText}>
                      {HidePassword ? 'Show' : 'Hide'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.optionsContainer}>
                <TouchableOpacity>
                  <Text style={styles.optionButtonText}>Login with OTP</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.optionButtonText}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.Loginbutton}>
                <TouchableOpacity activeOpacity={0.8} style={styles.LoginbuttonWrapper}>
                  <LinearGradient
                    colors={['#E461A3', '#E44C59']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.gradientButton}
                  >
                    <Text style={styles.loginText}>Login</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Welcome;

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
    padding: widthPixel(20),
    alignItems: 'center',
  },
  titleWrapper: {
    alignItems: 'center',
    marginTop: heightPixel(40),
    marginBottom: heightPixel(40),
  },
  title: {
    fontSize: fontPixel(26),
    fontWeight: '700',
    color: '#323232',
    marginBottom: heightPixel(8),
    fontFamily: 'Urbanist-SemiBold',
  },
  subTitle: {
    fontSize: fontPixel(16),
    color: '#9CA4AB',
    fontWeight: '500',
    fontFamily: 'Urbanist-Regular',
  },
  buttonWrapper: {
    width: '80%',
  },
  innerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 100,
    paddingHorizontal: widthPixel(20),
    height: heightPixel(56),
    borderWidth: 1,
    gap: widthPixel(10),
    borderColor: '#EFEFEF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
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
    fontSize: fontPixel(16),
    fontWeight: '600',
    color: '#171725',
    marginRight: 30,
    fontFamily: 'Urbanist-SemiBold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: heightPixel(30),
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E3E3E3',
  },
  dividerText: {
    marginHorizontal: widthPixel(10),
    fontSize: fontPixel(12),
    color: '#9CA4AB',
    fontWeight: '600',
    fontFamily: 'Urbanist-Regular',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: widthPixel(10),
    marginTop: heightPixel(10),
  },
  Inputs: {
    flexDirection: 'column',
    gap: heightPixel(25),
  },
  inputContainer: {
    width: '90%',
  },
  input: {
    borderBottomColor: '#E3E3E3',
    borderBottomWidth: 1,
    width: '100%',
    color: '#000',
    fontFamily: 'Urbanist-Regular',
    fontSize: fontPixel(16),
    paddingHorizontal: widthPixel(10),
    paddingVertical: heightPixel(10),
    textAlign: 'left',
  },
  HideButton: {
    position: 'absolute',
    right: 0,
    top: heightPixel(10),
    padding: 5,
  },
  HideText: {
    color: '#B1B1B1',
    fontFamily: 'Urbanist-Regular',
    fontSize: fontPixel(12),
  },
  optionButtonText: {
    color: '#00D8D8',
    fontSize: fontPixel(12),
    fontFamily: 'Urbanist-Medium',
  },
  LoginbuttonWrapper: {
    width: '100%',
    marginTop: heightPixel(25),
    alignItems: "center",
  },
  gradientButton: {
    height: heightPixel(56),
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%', 
  },
  Loginbutton: {
    justifyContent: "center",
    alignItems: "center"
  },
  loginText: {
    color: '#fff',
    fontSize: fontPixel(16),
    fontWeight: '700',
    fontFamily: 'Urbanist-SemiBold',
  },
});