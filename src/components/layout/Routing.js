import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import HomePage from '../pages/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import RainbowPage from '../pages/RainbowPage';
import ParallaxPage from '../pages/ParallaxPage';
import ImageGalleryPage from '../pages/ImageGalleryPage';
import PagerPage from '../pages/PagerPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { View } from 'react-native';
import { Coffee, Heart, Video } from '../svgs';
import FormPage from '../pages/FormPage';
import ZoomPage from '../pages/ZoomPage';
import ZoomGalleryPage from '../pages/ZoomGalleryPage';
import SvgPage from '../pages/SvgPage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = props => (
  <Stack.Navigator initialRouteName="TabNavigator">
    <Stack.Screen name="TabNavigator" component={TabNavigator} />
    <Stack.Screen name="Home" component={HomePage} />
    <Stack.Screen name="Pager" component={PagerPage} />
    <Stack.Screen name="Zoom" component={ZoomPage} />
    <Stack.Screen name="ZoomGallery" component={ZoomGalleryPage} />
    <Stack.Screen name="Svg" component={SvgPage} />
    <Stack.Screen
      name="Form"
      component={FormPage}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      mode="modal"
      headerMode="none"
      name="ImageGallery"
      component={ImageGalleryPage}
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
          return <Video width={size} height={size} stroke={color} />;
        },
      }}
    />
    <Tab.Screen
      name="Rainbow"
      component={RainbowPage}
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
                <Coffee width={size} height={size} stroke="white" />
              </View>
            </View>
          );
        },
      }}
    />
    <Tab.Screen
      name="Parallax"
      component={ParallaxPage}
      options={{
        tabBarIcon: ({ focused, color, size }) => {
          return <Heart width={size} height={size} stroke={color} />;
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
