import React from 'react';
import { View } from 'react-native';
import { Coffee } from '../svgs';
import { SvgUri } from 'react-native-svg';

const SvgPage = props => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <SvgUri
      width={300}
      height={300}
      uri="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/heliocentric.svg"
    />
    <Coffee width={150} height={150} stroke="purple" />
  </View>
);

export default SvgPage;
