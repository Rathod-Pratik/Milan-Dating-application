import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronRight } from 'lucide-react-native';
import { fontPixel } from '../../utils/Responsive';
import RenderInput from '../../Component/RenderInput';
import { RenderProgressBar } from '../../Component/RenderProgressBar';
import UploadPhoto from '../../Component/UploadPhoto';
import Header from '../../Component/Header';
import { steps } from '../../utils/Data';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Navigation/Navigation';

const UpdateProfile = () => {
  const Navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      Navigation.navigate('premium');
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const SkipUpdate = () => {
    Navigation.navigate('premium');
  };
  const handleChange = (id:string, value:string) => {
    setFormData({ ...formData, [id]: value });
  };

  const progressValue = ((currentStep + 1) / steps.length) * 100;
  const currentScreen = steps[currentStep];

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      {RenderProgressBar(progressValue)}
      <Header
        type={currentScreen.type}
        handleBack={handleBack}
        SkipUpdate={SkipUpdate}
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.titleSection}>
          {currentScreen.icon && (
            <View
              style={[
                styles.iconCircle,
                {
                  backgroundColor:
                    currentScreen.IconBackgroundColor || '#FCE4EC',
                  borderRadius: 40,
                },
              ]}
            >
              {currentScreen.icon}
            </View>
          )}
          {currentScreen.title ? (
            <Text style={styles.screenTitle}>{currentScreen.title}</Text>
          ) : null}
        </View>

        {currentScreen.type === 'custom_photo' ? (
          <UploadPhoto />
        ) : (
          <View style={styles.formContainer}>
            {currentScreen.fields.map(field => (
              <RenderInput
                key={field.id}
                field={field}
                handleChange={handleChange}
                formData={formData}
              />
            ))}
          </View>
        )}
      </ScrollView>

      <View style={styles.footer}>
        {currentScreen.type === 'custom_photo' ? (
          <TouchableOpacity style={styles.skipContainer} onPress={handleNext}>
            <Text style={styles.skipText}>Add Photos Later</Text>
            <ChevronRight size={20} color="#656565" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.continueButton} onPress={handleNext}>
            <Text style={styles.continueText}>Continue</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingHorizontal: '5%',
    paddingBottom: 20,
  },
  titleSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  screenTitle: {
    fontSize: fontPixel(16),
    fontFamily: 'Urbanist-Regular',
    color: '#656565',
    textAlign: 'center',
  },
  formContainer: {
    width: '100%',
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    backgroundColor: '#fff',
  },
  skipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  skipText: {
    fontSize: fontPixel(14),
    fontFamily: 'Urbanist-Light',
    color: '#656565',
    marginRight: 4,
  },
  continueButton: {
    backgroundColor: '#E91E63',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
  },
  continueText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UpdateProfile;
