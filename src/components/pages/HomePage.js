import React, { useState } from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import StyledView from '../styleds/StyledView';

const HomePage = props => {
  return (
    <StyledView as={ScrollView} style={{ flex: 1 }}>
      <Button
        title="Go to Pager"
        onPress={() => props.navigation.navigate('Pager')}
      />
      <Button
        title="Go to Form"
        onPress={() => props.navigation.navigate('Form')}
      />
      <Button
        title="Go to Zoom"
        onPress={() => props.navigation.navigate('Zoom')}
      />
      <Button
        title="Go to Zoom Gallery"
        onPress={() => props.navigation.navigate('ZoomGallery')}
      />
      <Button
        title="Go to Svg"
        onPress={() => props.navigation.navigate('Svg')}
      />
      <Button
        title="Go to E-Gazete"
        onPress={() => props.navigation.navigate('EGazete')}
      />
      <Button
        title="Go to Notification"
        onPress={() => props.navigation.navigate('Notification')}
      />
      <Button
        title="Go to WebView"
        onPress={() => props.navigation.navigate('WebView')}
      />
      {Array(100)
        .fill()
        .map((_, i) => (
          <Text key={i}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,
            accusantium ad amet corporis impedit in incidunt inventore iste
            itaque non nulla obcaecati officia porro quaerat, quam quia
            quibusdam saepe sequi!
          </Text>
        ))}
    </StyledView>
  );
};

export default HomePage;
