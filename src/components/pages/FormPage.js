import React, { useEffect, useState } from 'react';
import {
  Button,
  ImageBackground,
  StatusBar,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import SearchTextInput from '../common/SearchTextInput';
import img from '../../../images/plant.jpg';
import { marginTop } from 'styled-system';
import { Back, CircuitBoard, ILikeFood } from '../svgs';
const FormPage = props => {
  const [visible, setVisible] = useState(true);
  const window = useWindowDimensions();

  return (
    <View>
      <StatusBar
        barStyle={'dark-content'}
        hidden={visible}
        animated={true}
        showHideTransition={'slide'}
        backgroundColor="transparent"
      />
      <ImageBackground
        source={img}
        resizeMode={'cover'}
        style={{
          width: window.width,
          height: 300,
        }}>
        <TouchableOpacity
          style={{ paddingTop: 50, paddingLeft: 20 }}
          onPress={() => props.navigation.goBack()}>
          <Back width={30} height={30} stroke="green" />
        </TouchableOpacity>
        <View style={{ marginTop: 175 }}>
          <View style={{ padding: 15 }}>
            <Button
              title="show status bar"
              onPress={() => {
                setVisible(!visible);
              }}
            />
            <SearchTextInput />
            <CircuitBoard
              width={window.width}
              height={400}
              // style={{ marginLeft: -0, marginRight: -50 }}
              stroke={'rgba(208,207,207,0.47)'}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default FormPage;
