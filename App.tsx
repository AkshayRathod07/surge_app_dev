import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LoginScreen, PointsScreen } from './src/screens';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <LoginScreen />
      {/* <PointsScreen /> */}
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
