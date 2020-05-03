import React, { useRef, useState } from 'react';
import {
  Button,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Text,
  useWindowDimensions,
  View,
  Animated,
  Keyboard,
} from 'react-native';
import SearchTextInput from '../common/SearchTextInput';
import img from '../../../images/plant.jpg';
import { Back, CircuitBoard, Heart } from '../svgs';
const FormPage = props => {
  const [visible, setVisible] = useState(true);

  const searchBarHeightAnim = useRef(new Animated.Value(175)).current;
  const patternOpacityAnim = useRef(new Animated.Value(1)).current;

  const upAnim = Animated.parallel([
    Animated.timing(searchBarHeightAnim, {
      toValue: 0,
      duration: 350,
      useNativeDriver: false,
    }),
    Animated.timing(patternOpacityAnim, {
      toValue: 0,
      duration: 350,
      useNativeDriver: false,
    }),
  ]);

  const downAnim = Animated.parallel([
    Animated.timing(searchBarHeightAnim, {
      toValue: 175,
      duration: 350,
      useNativeDriver: false,
    }),
    Animated.timing(patternOpacityAnim, {
      toValue: 1,
      duration: 350,
      useNativeDriver: false,
    }),
  ]);

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
          style={{ paddingTop: 30, paddingLeft: 20 }}
          onPress={() => props.navigation.goBack()}>
          <Back width={30} height={30} stroke="green" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: 'absolute',
            paddingTop: 30,
            right: 20,
          }}
          onPress={() => {
            Keyboard.dismiss();
            setVisible(!visible);
          }}>
          <Heart width={30} height={30} stroke="#866439" />
        </TouchableOpacity>
        <Animated.View style={{ marginTop: searchBarHeightAnim }}>
          <View style={{ padding: 15 }}>
            <SearchTextInput
              onFocus={() => {
                upAnim.start();
              }}
              onBlur={() => {
                downAnim.start();
              }}
            />
            <Animated.View style={{ opacity: patternOpacityAnim }}>
              <CircuitBoard
                width={window.width - 20}
                height={400}
                stroke={'rgba(208,207,207,0.47)'}
              />
            </Animated.View>
          </View>
        </Animated.View>
      </ImageBackground>
    </View>
  );
};

export default FormPage;
