import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import HomePage from '../pages/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import Rainbow from '../common/Rainbow';
import Parallax from '../common/Parallax';
import ImageGallery from '../common/ImageGallery';
import Pager from '../common/Pager';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = props => (
  <Stack.Navigator initialRouteName="TabNavigator">
    <Stack.Screen name="TabNavigator" component={TabNavigator} />
    <Stack.Screen name="Home" component={HomePage} />
    <Stack.Screen name="Pager" component={Pager} />

    <Stack.Screen
      mode="modal"
      headerMode="none"
      name="ImageGallery"
      component={ImageGallery}
      options={{
        gestureEnabled: true,
        cardOverlayEnabled: true,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    />
  </Stack.Navigator>
);

const TabNavigator = props => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomePage} />
    <Tab.Screen name="Rainbow" component={Rainbow} />
    <Tab.Screen name="Parallax" component={Parallax} />
  </Tab.Navigator>
);

const Routing = props => (
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
);

export default Routing;
