import React from 'react';
import { Image, useWindowDimensions } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

const ImageGallery = props => {
  const window = useWindowDimensions();
  const { params } = props.route;
  const img = params.list[params.index];
  return (
    <ImageZoom
      style={{ flex: 1 }}
      cropWidth={window.width}
      cropHeight={window.height}
      enableDoubleClickZoom
      imageWidth={window.width}
      imageHeight={250}>
      <Image
        source={
          img?.isLocal
            ? img.image
            : {
                uri: img?.image,
              }
        }
        style={{ width: window.width, height: 250 }}
      />
    </ImageZoom>
  );
};

export default ImageGallery;
