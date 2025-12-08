import React from 'react';
import { StyleSheet, View, Text, TextInput, Platform, KeyboardTypeOptions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ChevronDown } from 'lucide-react-native';
import CheckBox from '@react-native-community/checkbox';
import { fontPixel, heightPixel } from '../utils/Responsive';

interface SubInput {
  id: string;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
}

export interface FieldType {
  id: string;
  type: string;
  label: string;
  inputs?: SubInput[];
  options?: string[];
  placeholder?: string;
}

interface RenderInputProps {
  field: FieldType;
  handleChange: (id: string, value: any) => void;
  formData: Record<string, any>;
}

const RenderInput = ({ field, handleChange, formData }: RenderInputProps) => {
  if (field.type === 'phone_group') {
    return (
      <View key={field.id} style={styles.fieldContainer}>
        <Text style={styles.label}>{field.label}</Text>
        <View style={styles.phoneRow}>
          <View style={styles.countryCodeContainer}>
            <TextInput style={styles.input} value="+91" editable={false} />
          </View>
          <View style={styles.phoneNumberContainer}>
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              keyboardType="numeric"
              placeholderTextColor={'#656565'}
              onChangeText={val => handleChange(field.id, val)}
              value={formData[field.id]}
            />
          </View>
        </View>
      </View>
    );
  }

  if (field.type === 'multi_input') {
    return (
      <View key={field.id} style={styles.fieldContainer}>
        <Text style={styles.label}>{field.label}</Text>
        {field.id === 'familydetails' && (
          <Text style={styles.helperText}>
            This really helps find common connections
          </Text>
        )}
        <View style={styles.multiInputContainer}>
          {field.inputs?.map(subField => (
            <View key={subField.id} style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder={subField.placeholder}
                value={formData[subField.id]}
                placeholderTextColor={'#656565'}
                keyboardType={subField.keyboardType || 'default'}
                onChangeText={val => handleChange(subField.id, val)}
              />
            </View>
          ))}
        </View>
      </View>
    );
  }

  return (
    <View key={field.id} style={styles.fieldContainer}>
      <Text style={styles.label}>{field.label}</Text>
      <View style={styles.inputWrapper}>
        {field.type === 'dropdown' ? (
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={formData[field.id]}
              onValueChange={val => handleChange(field.id, val)}
              style={styles.picker}
              dropdownIconColor="#666"
            >
              <Picker.Item
                label={`Select ${field.label}`}
                value=""
                color="#999"
              />
              {field.options?.map(opt => (
                <Picker.Item key={opt} label={opt} value={opt} />
              ))}
            </Picker>
            {Platform.OS === 'ios' && (
              <View style={styles.iconWrapper}>
                <ChevronDown size={20} color="#666" />
              </View>
            )}
          </View>
        ) : (
          <TextInput
            style={styles.input}
            placeholder={field.placeholder || field.label}
            value={formData[field.id]}
            onChangeText={val => handleChange(field.id, val)}
            placeholderTextColor={'#656565'}
          />
        )}
      </View>

      {field.id === 'community' && (
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={formData['casteNoBar'] || false}
            onValueChange={val => handleChange('casteNoBar', val)}
            tintColors={{ true: '#E91E63', false: '#666' }}
            boxType="square"
            style={{ width: 20, height: 20, marginRight: 10 }}
          />
          <Text style={styles.checkboxLabel}>
            Not particular about my partner’s community (Caste no bar)
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  fieldContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: fontPixel(14),
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  helperText: {
    fontSize: fontPixel(14),
    fontFamily: 'Urbanist-Regular',
    color: '#656565',
    marginBottom: 8,
  },
  inputWrapper: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    backgroundColor: '#FAFAFA',
    height: heightPixel(50),
    justifyContent: 'center',
    width: '100%',
  },
  multiInputContainer: {
    flexDirection: 'column',
    gap: 10,
  },
  input: {
    paddingHorizontal: 15,
    fontSize: fontPixel(16),
    fontFamily: 'Urbanist-Regular',
    color: '#656565',
    height: '100%',
    width: '100%',
  },
  pickerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  picker: {
    width: '100%',
    height: '100%',
    color: '#333',
  },
  iconWrapper: {
    position: 'absolute',
    right: 15,
    pointerEvents: 'none',
  },
  phoneRow: {
    flexDirection: 'row',
    width: '100%',
  },
  countryCodeContainer: {
    width: '20%',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    backgroundColor: '#FAFAFA',
    height: heightPixel(50),
    justifyContent: 'center',
  },
  phoneNumberContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    backgroundColor: '#FAFAFA',
    height: heightPixel(50),
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  checkboxLabel: {
    fontSize: fontPixel(12),
    color: '#656565',
    fontFamily: 'Urbanist-Regular',
    flex: 1,
  },
});

export default RenderInput;