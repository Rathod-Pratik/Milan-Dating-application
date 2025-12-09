import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ArrowLeft } from 'lucide-react-native'

interface headerProp{
    type:string,
    handleBack:()=>void,
    SkipUpdate:()=>void,
}
const Header = ({type,handleBack,SkipUpdate}:headerProp) => {
  return (
        <View style={styles.header}>
            {type === 'familydetails' ? (
              <>
                <View />
                <TouchableOpacity onPress={SkipUpdate}>
                  <Text style={styles.headerSkipText}>Skip</Text>
                </TouchableOpacity>
              </>
            ) : (
              <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                <ArrowLeft color="#333" size={24} />
              </TouchableOpacity>
            )}
          </View>
  )
}

export default Header

const styles = StyleSheet.create({
     header: {
    paddingHorizontal: '5%',
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerSkipText: {
    fontSize: 16,
    color: '#E91E63',
    fontWeight: 'bold',
    fontFamily: 'Urbanist-Bold',
  },
  backButton: {
    marginBottom: 0,
  },
})