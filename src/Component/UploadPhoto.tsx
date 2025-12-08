import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Camera ,  Image as ImageLogo,} from 'lucide-react-native'
import { fontPixel, heightPixel, widthPixel } from '../utils/Responsive'

const UploadPhoto = () => {
  return (
   <View style={styles.photoContainer}>
            <Image
              style={styles.image}
              source={require('../../assets/Image/user.png')}
              resizeMode="contain"
            />
            <Text style={styles.phototitleContainer}>
              Add Photos to complete your Profile
            </Text>
            <Text style={styles.photoSubTitle}>
              Photo Privacy controls available in Settings
            </Text>
            <TouchableOpacity style={styles.galleryButton}>
              <View style={styles.ButtonContainer}>
                <ImageLogo color={'#fff'} />
                <Text style={styles.galleryButtonText}>Add From Gallery</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.ButtonContainer}>
                <Camera color={'#E91E63'} />
                <Text style={styles.cameraText}>Use Camera</Text>
              </View>
            </TouchableOpacity>
          </View>
  )
}

export default UploadPhoto

const styles = StyleSheet.create({
     photoContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    height: heightPixel(100),
    width: widthPixel(100),
    marginBottom: 10,
  },
  phototitleContainer: {
    fontFamily: 'Urbanist-SemiBold',
    fontSize: fontPixel(22),
    textAlign: 'center',
    marginBottom: 5,
  },
  photoSubTitle: {
    fontSize: fontPixel(13),
    fontFamily: 'Urbanist-Regular',
    color: '#656565',
    marginBottom: 20,
  },
  galleryButton: {
    backgroundColor: '#E91E63',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 15,
  },
  galleryButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  cameraText: {
    color: '#E91E63',
    fontSize: 16,
    fontWeight: '500',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
    ButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 5,
    gap: 10,
  },
})