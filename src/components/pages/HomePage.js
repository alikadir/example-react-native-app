import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

const HomePage = props => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> HomePage </Text>
      <Button
        title="Go to Details"
        onPress={() => props.navigation.navigate('Rainbow')}
      />
    </View>
  );
};

export default HomePage;
