import React, { useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import WebView from 'react-native-webview';
import SegmentedControl from '@react-native-community/segmented-control';

const WebViewPage = props => {
  const [data, setData] = useState(null);
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const list = {
    'File Upload':
      'https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_type_file',
    Video: 'https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_video', //player "playsinline"
    mailto: 'https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_address',
    Instagram: 'https://www.instagram.com',
    Twitter: 'https://twitter.com',
  };

  return (
    <View style={{ flex: 1 }}>
      <SegmentedControl
        selectedIndex={index}
        values={Object.keys(list)}
        onChange={event => {
          setIndex(event.nativeEvent.selectedSegmentIndex);
        }}
      />
      {isLoading && (
        <View
          style={{
            height: 4,
            backgroundColor: '#3380ff',
            width: progress * 100 + '%',
            borderRadius: 10,
          }}
        />
      )}
      {isLoading && <Text>{' % ' + Math.floor(progress * 100)}</Text>}
      <WebView
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => {
          setIsLoading(false);
          setProgress(0);
        }}
        onLoadProgress={event => setProgress(event.nativeEvent.progress)}
        /* startInLoadingState
        renderLoading={() => (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignContent: 'center',
              backgroundColor: '#ffffff',
              borderRadius: 15,
            }}>
            <ActivityIndicator size="large" />
          </View>
        )}*/
        allowsInlineMediaPlayback="true"
        allowsFullscreenVideo
        source={{
          uri: Object.values(list)[index],
        }}
      />
    </View>
  );
};

export default WebViewPage;
