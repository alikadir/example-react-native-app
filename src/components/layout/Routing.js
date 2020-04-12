import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../pages/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import Rainbow from '../common/Rainbow';

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
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routing;
