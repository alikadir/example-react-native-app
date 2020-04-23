import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const FormPage = props => {
  const [data, setData] = useState(null);

  return (
    <View>
      <Text>Form</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 10, margin: 10, borderRadius: 5 }}
        placeholder="e-mail"
      />
    </View>
  );
};

export default FormPage;
