import React, { useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import ImageViewer from 'react-native-image-zoom-viewer';

const EGazetePage = props => {
  const window = useWindowDimensions();
  const [imageList, setImageList] = useState(null);

  useEffect(() => {
    fetch(
      'http://tmdereader.tmgrup.com.tr/api/Home/Get/?AppRefNo=iphonereaderv0201&did=10C69890-67B9-4774-9EB1-12058D954D1F',
    )
      .then(result => result.json())
      .then(result => {
        fetch(
          `http://tmdereader.tmgrup.com.tr/api/Issues/Get/?id=${
            result.Detail.find(x => x.DisplayOrder === 1).Id
          }&AppRefNo=iphonereaderv0201&did=10C69890-67B9-4774-9EB1-12058D954D1F`,
        )
          .then(result2 => result2.json())
          .then(result2 => {
            setImageList(
              result2.Detail.map(item => ({ url: item.ImageUrl, props: {} })),
            );
          });
      });
  }, []);

  return (
    <ViewPager style={{ flex: 1 }} transitionStyle="curl">
      <View
        style={{
          backgroundColor: 'white',
        }}>
        {imageList && (
          <ImageViewer
            style={{ marginTop: -55 }}
            doubleClickInterval={300}
            backgroundColor="white"
            enablePreload
            loadingRender={() => <Text>yukleniyor...</Text>}
            imageUrls={imageList}
            renderIndicator={() => {}}
          />
        )}
      </View>
      {imageList &&
        imageList.map(item => (
          <View
            style={{
              backgroundColor: 'white',
            }}>
            <ScrollView
              maximumZoomScale={5}
              scrollEnabled={true}
              minimumZoomScale={1}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}>
              <Image
                style={{ width: '100%', height: window.height - 150 }}
                source={{ uri: item.url }}
              />
            </ScrollView>
          </View>
        ))}
    </ViewPager>
  );
};

export default EGazetePage;
