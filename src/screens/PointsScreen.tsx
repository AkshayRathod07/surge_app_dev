import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Defs, LinearGradient as SvgLinearGradient, Circle, Stop } from 'react-native-svg';
import CrownIcon from '../assets/icons/CrownIcon';
const { width, height } = Dimensions.get('window');

const PointsScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topArea} />

      <View style={styles.pointsArea}>
        <Text style={styles.subtitle}>Your Surge points</Text>
        <Text style={styles.points}>2,777,304</Text>

        <View style={styles.bigCircle}>
            <Svg width={width} height={height * 0.68} viewBox="0 0 440 676" style={StyleSheet.absoluteFill} preserveAspectRatio="xMidYMid slice">
              <Defs>
                <SvgLinearGradient id="paint0_linear_968_1840" x1="220" y1="0" x2="220" y2="752" gradientUnits="userSpaceOnUse">
                  <Stop offset="0" stopColor="#FFCD00" stopOpacity="1" />
                  <Stop offset="1" stopColor="#FFE372" stopOpacity="1" />
                </SvgLinearGradient>
              </Defs>
              <Circle opacity="0.8" cx="220" cy="376" r="376" fill="url(#paint0_linear_968_1840)" />
            </Svg>

            <CrownIcon width={237} height={164} style={styles.crown} />

            {/* pill moved inside the circle to match design */}
            <View style={styles.joinedContainer}>
              <Text style={styles.joinedText}>People joined </Text>
              <Text style={styles.joinedNumber}>3,122</Text>
            </View>
          </View>
      </View>
    </SafeAreaView>
  );
};

export default PointsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  topArea: { height: 60 },
  pointsArea: { flex: 1, alignItems: 'center' },
  subtitle: { color: '#9b9b9b', marginTop: 18, fontSize: 16 },
  points: { fontSize: 56, fontWeight: '900', marginTop: 12, letterSpacing: 1 },
  bigCircle: {
    width: width,
    height: height * 0.68,
    backgroundColor: 'transparent',
    borderTopLeftRadius: width / 2,
    borderTopRightRadius: width / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    overflow: 'hidden',
  },
  crown: { width: 160, height: 160, tintColor: '#E68A2A' },
  joinedContainer: {
    // position: 'absolute',
    // bottom: 40,
    alignSelf: 'center',
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 34,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    // shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    // elevation for Android
    elevation: 6,
    marginTop:30
  },
  joinedText: { fontSize: 16, color: '#222' },
  joinedNumber: { fontSize: 16, color: '#0db65f', fontWeight: '700', marginLeft: 6 },
});
