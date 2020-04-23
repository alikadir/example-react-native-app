import React from 'react';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import ViewPager from '@react-native-community/viewpager';
import { SvgUri } from 'react-native-svg';
import SvgCoffee from '../svgs/Coffee';

const ImageGalleryPage = props => {
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
        <SvgUri
          width={300}
          height={300}
          uri="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/heliocentric.svg"
        />
        <SvgCoffee width={150} height={150} stroke="purple" />
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

export default ImageGalleryPage;
