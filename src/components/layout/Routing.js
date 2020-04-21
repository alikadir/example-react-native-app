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
import SvgCoffee from '../svgs/Coffee';
import { size } from 'styled-system';
import { Text, View } from 'react-native';
import SvgVideo from '../svgs/Video';
import SvgHeart from '../svgs/Heart';

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
  <Tab.Navigator tabBarOptions={{ showLabel: false }}>
    <Tab.Screen
      name="Home"
      component={HomePage}
      options={{
        tabBarIcon: ({ focused, color, size }) => {
          return <SvgVideo width={size} height={size} stroke={color} />;
        },
      }}
    />
    <Tab.Screen
      name="Rainbow"
      component={Rainbow}
      options={{
        tabBarIcon: ({ focused, color, size }) => {
          return (
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 50,
                width: 75,
                height: 75,
                marginBottom: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: focused ? 'darkred' : 'red',
                  padding: 15,
                  borderRadius: 50,
                }}>
                <SvgCoffee width={size} height={size} stroke="white" />
              </View>
            </View>
          );
        },
      }}
    />
    <Tab.Screen
      name="Parallax"
      component={Parallax}
      options={{
        tabBarIcon: ({ focused, color, size }) => {
          return <SvgHeart width={size} height={size} stroke={color} />;
        },
      }}
    />
  </Tab.Navigator>
);

const Routing = props => (
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
);

export default Routing;
