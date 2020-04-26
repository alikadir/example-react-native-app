import React, { useState } from 'react';
import { FlatList, Image, Text, useWindowDimensions, View } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

import ViewPager from '@react-native-community/viewpager';
import PhotoView from 'react-native-photo-view';

const ImageGalleryPage = props => {
  const window = useWindowDimensions();
  const { params } = props.route;
  const [scroll, setScroll] = useState(true);
  //const img = params.list[params.index];
  return (
    <FlatList
      style={{ flex: 1 }}
      // contentOffset={params.index}
      horizontal
      pagingEnabled
      //  scrollEnabled={scroll}
      keyExtractor={img => img.index}
      data={params.list}
      scrollEnabled
      renderItem={({ item }) => {
        console.log(item);
        return (
          <ImageZoom
            style={{ flex: 1 }}
            onMove={({ scale }) => {
              if (!scroll && scale === 1) {
                setScroll(true);
                console.log('scroll', true);
                console.log('scale', scale);
              } else if (scroll && scale !== 1) {
                setScroll(false);
                console.log('scroll', false);
                console.log('scale', scale);
              }
              console.log('scroll', scroll);
            }}
            cropWidth={window.width}
            cropHeight={300}
            doubleClickInterval={300}
            imageWidth={window.width}
            imageHeight={300}>
            <Image
              source={
                item?.isLocal
                  ? item.image
                  : {
                      uri: item?.image,
                    }
              }
              style={{ width: window.width, height: 300 }}
            />
          </ImageZoom>
        );
      }}
    />
  );
};

export default ImageGalleryPage;
