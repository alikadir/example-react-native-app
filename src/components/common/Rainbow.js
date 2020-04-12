import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const Rainbow = props => (
  <>
    <ScrollView horizontal={true}>
      {Array(100)
        .fill()
        .map((_, i) => (
          <View
            key={i}
            style={[myStyle.box, { backgroundColor: randomColor() }]}
          />
        ))}
    </ScrollView>
    <ScrollView horizontal={true} pagingEnabled={true}>
      {Array(100)
        .fill()
        .map((_, i) => (
          <View
            key={i}
            style={[myStyle.box, { backgroundColor: randomColor() }]}
          />
        ))}
    </ScrollView>
  </>
);

const randomColor = () => {
  var r = (Math.round(Math.random() * 127) + 50).toString(16);
  var g = (Math.round(Math.random() * 127) + 50).toString(16);
  var b = (Math.round(Math.random() * 127) + 50).toString(16);
  return '#' + r + g + b;
};

const myStyle = StyleSheet.create({
  box: {
    width: 150,
    height: 200,
    margin: 20,
  },
});

export default Rainbow;
