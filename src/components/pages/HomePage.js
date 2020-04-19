import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

const HomePage = props => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> HomePage </Text>
      <Text>{'\n'}</Text>
      <Button
        title="Go to Rainbow"
        onPress={() =>
          props.navigation.navigate('Rainbow', {
            param1: 'value1',
            param2: 123,
          })
        }
      />
      <Text>{'\n'}</Text>
      <Button
        title="Go to Parallax"
        onPress={() => props.navigation.navigate('Parallax')}
      />
      <Text>{'\n'}</Text>
      <Button
        title="Go to Pager"
        onPress={() => props.navigation.navigate('Pager')}
      />
    </View>
  );
};

export default HomePage;
