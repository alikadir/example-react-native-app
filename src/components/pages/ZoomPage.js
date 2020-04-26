import React from 'react';
import ImageZoom from 'react-native-image-pan-zoom';
import { Dimensions, Image } from 'react-native';
import img from '../../../images/image-not-found.jpg';

const ZoomPage = props => (
  <ImageZoom
    cropWidth={Dimensions.get('window').width}
    cropHeight={Dimensions.get('window').height}
    imageWidth={Dimensions.get('window').width}
    imageHeight={350}
    doubleClickInterval={300}>
    <Image
      style={{ width: Dimensions.get('window').width, height: 350 }}
      source={img}
    />
  </ImageZoom>
);

export default ZoomPage;
