import React from 'react';
import {

  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

import GoogleIcon from '../assets/icons/GoogleIcon';
import { SafeAreaView } from 'react-native-safe-area-context';

// Background image (provided in the repository)
const bg = require('../assets/images/background_login_img.png');

const { width, height } = Dimensions.get('window');

const LoginScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={bg}
        resizeMode="cover"
        style={styles.bg}
        // shift the rendered image a bit upward so the visible crop aligns to the top
        imageStyle={{ top: -height * 0.08 }}
      >
        <View style={styles.bottomContent}>
          <Text style={styles.title}>Move money. Skip{"\n"}the fees.</Text>

          <TouchableOpacity style={styles.googleButton} activeOpacity={0.85}>
            <View style={styles.googleMark}>
              <GoogleIcon width={18} height={18} />
            </View>
            <Text style={styles.googleText}>Continue with Google</Text>
          </TouchableOpacity>
        </View>

        {/* Terms pinned to bottom */}
        <View style={styles.termsContainer} pointerEvents="box-none">
          <Text style={styles.terms}>
            By continuing, you're accepting our <Text style={styles.link}>Terms of Service</Text> and{' '}
            <Text style={styles.link}>Privacy Policy</Text>
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  bg: { flex: 1, width: '100%', height: '100%', },
  bottomContent: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 64,
  },
  title: {
  fontSize: 36,
  fontWeight: '800',
    textAlign: 'center',
    color: '#000',
  marginBottom: 34,
  lineHeight: 44,
  },
  googleButton: {
  width: '85%',
    backgroundColor: '#fff',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: '#D7D7D7',
    // iOS shadow
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    // Android elevation
    elevation: 2,
    marginBottom: 22,
  },
  googleMark: {
   marginRight: 12,
    
  },
  g: { fontWeight: '700', color: '#4285F4' },
  googleText: { fontSize: 16, color: '#111', fontWeight: '600' },
  terms: { fontSize: 12, color: '#9C9C9C', textAlign: 'center', marginTop: 0, lineHeight: 18 },
  termsContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 20,
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  link: { color: '#222', fontWeight: '600' },
});
