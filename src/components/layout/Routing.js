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

const Stack = createStackNavigator();

const Routing = props => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{ title: 'Ana Sayfa' }}
      />
      <Stack.Screen name="Rainbow" component={Rainbow} />
      <Stack.Screen
        name="Parallax"
        component={Parallax}
        //options={{ headerShown: false }}
      />
      <Stack.Screen name="ImageGallery" component={ImageGallery} />
      <Stack.Screen name="Pager" component={Pager} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routing;
