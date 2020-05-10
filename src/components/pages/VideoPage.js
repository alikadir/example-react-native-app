import React, { useEffect, useRef, useState } from 'react';
import { View, Platform, FlatList, useWindowDimensions } from 'react-native';
import Video from 'react-native-video';

const VideoPage = props => {
  const window = useWindowDimensions();
  const list2 = [
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/96369602_136414067977687_1622581692608686222_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=MCdDQ6VDAsIAX_K9Mqd&oe=5EB8E4D7&oh=da347f9e471a8e32e44d3f28dded354c',
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/96275815_2558478941134577_7533917303449524600_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=zFrEubJWauwAX8dkQiS&oe=5EB91694&oh=cbc9ee6400b9cc2f4d8559bc30ed2047',
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/96811679_533703577269986_1377224207106457915_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=mT4qb_3Zh_sAX8cLdN7&oe=5EB8DD0C&oh=5bbfecae5d316d4db755232a698255ca',
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/96151736_1506257449554829_3148516918132161857_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=nMRjCh7Am2YAX8x8gmy&oe=5EB91C39&oh=77a68e5d5da076c9c31d65a092a864e3',
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/95991942_290271775468607_8509055845213713577_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=kz5Yx0ipIB8AX8HJAQI&oe=5EB89E41&oh=c47ae18a41fd17e138b424369c903556',
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/96440159_230582368229257_4431841085430370774_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=su4b9L9riUEAX9ipMFt&oe=5EB8C776&oh=801cd5551cc72690c6ad476dfb34e3f5',
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/96512361_293482031813705_9183040988356202992_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=CGKO2T6z1FEAX8ePdKH&oe=5EB8B154&oh=ec072c38ec0c3d769569fef42834eca6',
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/95867653_227462108548538_633012667950680954_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=SlMDHGcPQyMAX8eGI9m&oe=5EB8FA8E&oh=035bddb7b6833bdb6cecf00b89b53f8c',
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/96285333_1342150589305926_7892972219299720956_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=yJCs5bI5T3wAX9Q4IZv&oe=5EB8A6C6&oh=c4970ca1d09fc6e754dfe63a386b3954',
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/96001906_376317269981580_5512311100597547470_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=AAbeMkGZ9rwAX8wZzqO&oe=5EB93617&oh=1bd0091d1c317058771b7525f22d3f9b',
  ];

  const list = [
    require('../../../videos/v0.mp4'),
    require('../../../videos/v1.mp4'),
    require('../../../videos/v2.mp4'),
    require('../../../videos/v3.mp4'),
    require('../../../videos/v4.mp4'),
    require('../../../videos/v5.mp4'),
    require('../../../videos/v6.mp4'),
    require('../../../videos/v7.mp4'),
    require('../../../videos/v8.mp4'),
    require('../../../videos/v9.mp4'),
  ];

  const [paused, setPaused] = useState(list.map((_, index) => index !== 0));

  /*setTimeout(() => {
    setPaused([...list.map((_, index) => index !== 3)]);
    console.log(paused);
    setTimeout(() => {
      setPaused([...list.map((_, index) => index !== 4)]);
      console.log(paused);
      setTimeout(() => {
        setPaused([...list.map((_, index) => index !== 5)]);
        console.log(paused);
      }, 4000);
    }, 4000);
  }, 4000);*/

  const myViewableItemsChanged = useRef(event => {
    if (event.viewableItems.length === 1) {
      setPaused(list.map((_, index) => index !== event.viewableItems[0].index));
    }
  });

  useEffect(() => {
    return () => {
      // setPaused(list.map(() => true));
    };
  }, [list]);

  return (
    <FlatList
      data={list}
      onViewableItemsChanged={myViewableItemsChanged.current}
      viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
      keyExtractor={item => item}
      pagingEnabled
      renderItem={({ item, index }) => {
        return (
          <View>
            <Video
              paused={paused[index]}
              repeat
              resizeMode={'cover'}
              style={{
                width: '100%',
                height:
                  Platform.OS === 'ios' ? window.height : window.height - 24,
              }}
              source={item}
            />
          </View>
        );
      }}
    />

    /* <ViewPager
      style={{ flex: 1 }}
      orientation={'horizontal'}
      pageMargin={10}
      onPageSelected={event => {
        setPaused(
          list.map((_, index) => !(index === event.nativeEvent.position)),
        );
        console.info(event.nativeEvent.position);
        console.info([
          ...list.map((_, index) => !(index === event.nativeEvent.position)),
        ]);
      }}>
      {list.map((item, index) => (
        <ViewPager orientation={'vertical'} key={index}>
          <View>
            <Button
              sryle={{ zIndex: 999, position: 'absolute' }}
              title={'play'}
              onPress={() => {
                setPaused(list.map((_, index2) => !(index2 === index)));
              }}
            />
            <Video
              controls
              paused={true}
              repeat
              style={{ width: 450, height: 700 }}
              source={require('../../../videos/v0.mp4')}
            />
          </View>
          <ScrollView>
            {Array(30)
              .fill()
              .map((_, i) => (
                <View key={i + 'text'}>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ab, accusantium ad amet corporis impedit in incidunt
                    inventore iste itaque non nulla obcaecati officia porro
                    quaerat, quam quia quibusdam saepe sequi!
                  </Text>
                  <Text>{`${i} - ${i} - ${i} - ${i} - ${i} - ${i} - ${i} - ${i} - ${i}`}</Text>
                </View>
              ))}
          </ScrollView>
        </ViewPager>
      ))}
    </ViewPager>*/
  );
};

export default VideoPage;
