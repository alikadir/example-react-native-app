import React from 'react';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import ViewPager from '@react-native-community/viewpager';

const ImageGallery = props => {
  const window = useWindowDimensions();
  const { params } = props.route;
  const img = params.list[params.index];
  return (
    <ViewPager style={{ flex: 1 }}>
      <View
        style={{
          padding: 20,
          width: window.width,
          backgroundColor: 'lightgreen',
        }}>
        <Text>Image Gallery</Text>
      </View>
      <View>
        <ImageZoom
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
      </View>
    </ViewPager>
  );
};

export default ImageGallery;
