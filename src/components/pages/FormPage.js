import React, { useRef, useState } from 'react';
import {
  Button,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  useWindowDimensions,
  View,
  Animated,
  Keyboard,
} from 'react-native';
import SearchTextInput from '../common/SearchTextInput';
import img from '../../../images/plant.jpg';
import { Back, CircuitBoard } from '../svgs';
const FormPage = props => {
  const [visible, setVisible] = useState(true);

  const searchBarHeightAnim = useRef(new Animated.Value(175)).current;

  const upAnim = Animated.timing(searchBarHeightAnim, {
    toValue: 0,
    duration: 350,
  });

  const downAnim = Animated.timing(searchBarHeightAnim, {
    toValue: 175,
    duration: 350,
  });

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
            <Button
              title="show status bar"
              onPress={() => {
                setVisible(!visible);
                Keyboard.dismiss();
              }}
            />
            <CircuitBoard
              width={window.width}
              height={400}
              // style={{ marginLeft: -0, marginRight: -50 }}
              stroke={'rgba(208,207,207,0.47)'}
            />
          </View>
        </Animated.View>
      </ImageBackground>
    </View>
  );
};

export default FormPage;
