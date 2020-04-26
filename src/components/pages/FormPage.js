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
import { Back } from '../svgs';
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
        <View style={{ marginTop: 100 }}>
          <View style={{ padding: 15 }}>
            <SearchTextInput />
            <Button
              title="show status bar"
              onPress={() => {
                setVisible(!visible);
              }}
            />
          </View>
        </View>
      </ImageBackground>
      <ScrollView
        // style={{ flex: 1, width: 300, height: 350 }}
        maximumZoomScale={5}
        scrollEnabled={true}
        minimumZoomScale={1}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <Image
          style={{ height: 300, width: '100%' }}
          source={{
            uri:
              'https://img0.gaadicdn.com/images/car-images/496x206/Lamborghini/Lamborghini-Huracan/Lamborghini-Huracan-Performante/047.jpg',
          }}
        />
      </ScrollView>
    </View>
  );
};

export default FormPage;
