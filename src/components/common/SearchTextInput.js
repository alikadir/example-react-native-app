import React from 'react';
import { TextInput, View } from 'react-native';
import { Search } from '../svgs';

const SearchTextInput = props => (
  <View
    style={{
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 24,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'white',
      backgroundColor: 'white',
    }}>
    <Search
      width={20}
      height={20}
      style={{
        position: 'absolute',
        top: 8,
        left: 8,
        color: 'gray',
      }}
    />
    <TextInput
      style={{
        padding: 10,
        paddingLeft: 35,
        borderRadius: 5,
      }}
      placeholder="e-mail"
      {...props}
    />
  </View>
);

export default SearchTextInput;
