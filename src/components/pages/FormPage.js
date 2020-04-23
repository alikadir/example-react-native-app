import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { Search, Video } from '../svgs';
import SearchTextInput from '../common/SearchTextInput';

const FormPage = props => {
  const [data, setData] = useState(null);

  return (
    <View>
      <Text>Form</Text>
      <View style={{ padding: 15 }}>
        <SearchTextInput />
      </View>
    </View>
  );
};

export default FormPage;
