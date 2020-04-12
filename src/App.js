/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { style, width } from 'styled-system';
import Rainbow from './components/common/Rainbow';

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Rainbow />
    </NavigationContainer>
  );
};

export default App;
