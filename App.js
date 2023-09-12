import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View , AsyncStorage} from 'react-native';
import * as React from 'react';
import AuthStackNavigator from './AuthStackNavigator';

export default function App() {
  return (
  <AuthStackNavigator/>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
