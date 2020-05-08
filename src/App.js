/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import Routing from './components/layout/Routing';
import { Platform, StatusBar } from 'react-native';

const App: () => React$Node = () => {
  if (Platform.OS === 'ios') {
    StatusBar.setBarStyle('dark-content');
  }

  return <Routing />;
};

export default App;
