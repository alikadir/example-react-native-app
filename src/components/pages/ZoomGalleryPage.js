import React, { useEffect, useState } from 'react';
import ImageViewer from 'react-native-image-zoom-viewer';
import { Text, View, StyleSheet, useWindowDimensions } from 'react-native';
import { getImage, getLocalImage } from '../../helpers/unsplash';

const ZoomGalleryPage = props => {
  const window = useWindowDimensions();

  const [imgList, setImgList] = useState(null);

  useEffect(() => {
    getImage(10)
      .then(imageList => {
        setImgList(imageList);
        console.log(imageList);
      })
      .catch(() => {
        const localImage = getLocalImage();
        setImgList([localImage]);
      });
  }, []);

  return (
    <>
      {imgList && (
        <ImageViewer
          doubleClickInterval={300}
          renderIndicator={(currentIndex, allSize) => (
            <View style={style.view}>
              <Text style={style.text}>
                {currentIndex} / {allSize} alohaa
              </Text>
            </View>
          )}
          renderFooter={currentIndex => (
            <View style={{ padding: 25 }}>
              {
                <Text style={style.text}>
                  {imgList[currentIndex].description}
                </Text>
              }
              <View
                style={{
                  borderRadius: 100,
                  width: 30,
                  height: 30,
                  backgroundColor: 'yellow',
                }}
              />
              <View
                style={{
                  borderRadius: 100,
                  width: 30,
                  height: 30,
                  backgroundColor: 'lightgreen',
                }}
              />
              <View
                style={{
                  borderRadius: 100,
                  width: 30,
                  height: 30,
                  backgroundColor: 'orange',
                }}
              />
              <View
                style={{
                  borderRadius: 100,
                  width: 30,
                  height: 30,
                  backgroundColor: 'magenta',
                }}
              />
            </View>
          )}
          imageUrls={imgList.map(img => {
            return img?.isLocal
              ? {
                  props: {
                    source: img?.image,
                  },
                }
              : {
                  url: img?.image,
                  props: {},
                };
          })}
        />
      )}
    </>
  );
};

const style = StyleSheet.create({
  view: {
    position: 'absolute',
    left: 0,
    right: 0,
    margin: 30,
    zIndex: 13,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  text: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'transparent',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: {
      width: 0,
      height: 0.5,
    },
    textShadowRadius: 0,
  },
});

export default ZoomGalleryPage;
