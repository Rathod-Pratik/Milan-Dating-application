import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Animated,
} from 'react-native';
import { Check, X } from 'lucide-react-native';
import React, { useState, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { PremiumCardData, PremiumType } from '../../utils/Data';
import { fontPixel, heightPixel, widthPixel } from '../../utils/Responsive';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.72;
const SPACER_WIDTH = (width - ITEM_WIDTH) / 2;

const Premium = () => {
  const [Type, SetType] = useState<string>('Monthly');
  const scrollX = useRef(new Animated.Value(0)).current;

  const SelectType = (type: string) => {
    SetType(type);
  };

  const renderPremiumType = ({ item }: { item: any }) => {
    const isSelected = Type === item.type;
    return (
      <TouchableOpacity
        onPress={() => SelectType(item.type)}
        style={styles.PremiumText}
      >
        <Text
          style={[
            styles.PremiumTypeText,
            isSelected && {
              color: '#000',
              backgroundColor: '#fff',
              borderRadius: 25,
            },
          ]}
        >
          {item.type}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderCard = ({ item, index }: { item: any; index: number }) => {
    const inputRange = [
      (index - 1) * ITEM_WIDTH,
      index * ITEM_WIDTH,
      (index + 1) * ITEM_WIDTH,
    ];

    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.9, 1, 0.9],
      extrapolate: 'clamp',
    });

    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.6, 1, 0.6],
      extrapolate: 'clamp',
    });

    const cleanPrice = parseInt(item.price.replace(/[^0-9]/g, '')) || 0;
    const originalPrice = Math.floor(cleanPrice * 1.42);
    const perMonth = Math.floor(cleanPrice / 6);

    return (
      <Animated.View
        style={[styles.cardWrapper, { transform: [{ scale }], opacity }]}
      >
        <View style={styles.card}>
          <View style={styles.cardHeaderRow}>
            <Text style={styles.cardTitle}>{item.title.toUpperCase()}</Text>
            <Text style={styles.cardDuration}>6 MONTHS</Text>
          </View>

          <View style={styles.pricingContainer}>
            <View style={styles.discountRow}>
              <Text style={styles.discountText}>30% off</Text>
              <Text style={styles.originalPriceText}>₹{originalPrice}</Text>
            </View>
            <Text style={styles.mainPriceText}>{item.price}</Text>
            <Text style={styles.perMonthText}>₹{perMonth} per month</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.featuresContainer}>
            {item.features.map((feature: string, i: number) => {
              const isIncluded = true;

              return (
                <View key={i} style={styles.featureRow}>
                  {isIncluded ? (
                    <Check size={20} color="#4CAF50" strokeWidth={3} />
                  ) : (
                    <X size={20} color="#FF3B30" strokeWidth={3} />
                  )}
                  <Text
                    style={[
                      styles.featureText,
                      !isIncluded && styles.excludedText,
                    ]}
                  >
                    {feature}
                  </Text>
                </View>
              );
            })}
            <View style={styles.featureRow}>
              <X size={20} color="#FF3B30" strokeWidth={3} />
              <Text style={[styles.featureText, styles.excludedText]}>
                Offline Viewing
              </Text>
            </View>
          </View>
        </View>
      </Animated.View>
    );
  };

  return (
    <LinearGradient
      colors={['#E461A3', '#E44C59', '#fff', '#fff', '#fff']}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <SafeAreaView style={styles.MainContainer}>
        <View style={styles.TitleContainer}>
          <Text style={styles.MainTitle}>Offer vaild till 22nd October</Text>
          <View style={styles.PremiumContainer}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.FlatListContent}
              renderItem={renderPremiumType}
              data={PremiumType}
              keyExtractor={item => item.id.toString()}
            />
          </View>
        </View>

        <View style={styles.PremiumCardContainer}>
          <Animated.FlatList
            data={PremiumCardData}
            renderItem={renderCard}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={ITEM_WIDTH}
            decelerationRate="fast"
            contentContainerStyle={{
              paddingHorizontal: SPACER_WIDTH,
              paddingBottom: 20,
            }}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: true },
            )}
            scrollEventThrottle={16}
          />
        </View>
        <View style={styles.Loginbutton}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.LoginbuttonWrapper}
          >
            <LinearGradient
              colors={['#E461A3', '#E44C59']}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={styles.gradientButton}
            >
              <Text style={styles.loginText}>Buy Plan</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Premium;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  TitleContainer: {
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    flex: 1,
  },
  MainTitle: {
    color: '#fff',
    fontSize: fontPixel(16),
    fontFamily: 'Urbanist-SemiBold',
    textAlign: 'center',
    marginBottom: 20,
  },
  PremiumContainer: {
    width: '100%',
    alignItems: 'center',
    height: heightPixel(50),
  },
  FlatListContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    gap: 15,
  },
  PremiumText: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  PremiumTypeText: {
    borderColor: '#fff',
    color: '#fff',
    borderWidth: 1.5,
    borderRadius: 50,
    textAlign: 'center',
    width: widthPixel(35),
    height: heightPixel(35),
    paddingTop: heightPixel(7),
    fontSize: fontPixel(12),
  },
  PremiumCardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardWrapper: {
    width: ITEM_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 16, // Added border radius to all corners
    paddingVertical: heightPixel(25),
    paddingHorizontal: widthPixel(20),
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: heightPixel(15),
  },
  cardTitle: {
    fontSize: fontPixel(16),
    fontFamily: 'Inter_18pt-SemiBold',
    color: '#000',
    marginRight: 8,
  },
  cardDuration: {
    fontSize: fontPixel(14),
    fontFamily: 'Inter_18pt-Regular',
    color: '#B1B1B1',
  },
  pricingContainer: {
    alignItems: 'center',
    marginBottom: heightPixel(20),
  },
  discountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  discountText: {
    fontSize: fontPixel(16),
    fontFamily: 'Inter_18pt-SemiBold',
    color: '#4CAF50',
    marginRight: 8,
  },
  originalPriceText: {
    fontSize: fontPixel(16),
    fontFamily: 'Inter_18pt-SemiBold',
    color: '#333',
    textDecorationLine: 'line-through',
  },
  mainPriceText: {
    fontSize: fontPixel(36),
    fontFamily: 'Inter_18pt-Bold',
    color: '#555',
  },
  perMonthText: {
    fontSize: fontPixel(12),
    fontFamily: 'Inter_18pt-Regular',
    color: '#999',
    marginTop: 4,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#F0F0F0',
    marginBottom: heightPixel(20),
  },
  featuresContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: heightPixel(12),
  },
  featureText: {
    fontSize: fontPixel(14),
    fontFamily: 'Inter_18pt-Regular',
    color: '#333',
    marginLeft: 12,
  },
  excludedText: {
    textDecorationLine: 'line-through',
  },
  LoginbuttonWrapper: {
    width: '100%',
    marginTop: heightPixel(25),
    alignItems: 'center',
  },
  gradientButton: {
    height: heightPixel(56),
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
  },
  Loginbutton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontSize: fontPixel(16),
    fontWeight: '700',
    fontFamily: 'Urbanist-SemiBold',
  },
});
