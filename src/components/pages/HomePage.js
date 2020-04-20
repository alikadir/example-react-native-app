import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

const HomePage = props => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> HomePage </Text>
      <Text>{'\n'}</Text>

      <Button
        title="Go to Pager"
        onPress={() => props.navigation.navigate('Pager')}
      />
    </View>
  );
};

export default HomePage;
