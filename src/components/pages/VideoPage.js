import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Platform,
  FlatList,
  useWindowDimensions,
  ScrollView,
  Text,
  ActivityIndicator,
} from 'react-native';
import Video from 'react-native-video';

const VideoPage = props => {
  const window = useWindowDimensions();
  const list1 = [
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/96369602_136414067977687_1622581692608686222_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=MCdDQ6VDAsIAX_K9Mqd&oe=5EB8E4D7&oh=da347f9e471a8e32e44d3f28dded354c',
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/96275815_2558478941134577_7533917303449524600_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=zFrEubJWauwAX8dkQiS&oe=5EB91694&oh=cbc9ee6400b9cc2f4d8559bc30ed2047',
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/96811679_533703577269986_1377224207106457915_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=mT4qb_3Zh_sAX8cLdN7&oe=5EB8DD0C&oh=5bbfecae5d316d4db755232a698255ca',
  ];

  const list2 = [
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/95264724_226989748591037_1193822186593878550_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=eMJzyqq7XJ8AX-WFtV4&oe=5EBAAE20&oh=5f197b9d5dca8be9a650df978f2d17fd',
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/97373563_2818954785019475_6000372464985746351_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=eEcjEbuwlFoAX_hLDnQ&oe=5EBAAF0C&oh=b61c6834af2290fd8a97fa978babd200',
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/96721138_2530900867130730_3193066937552642840_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=UTjJdRAe_6MAX_j-o5G&oe=5EBA9EFA&oh=fb0cb878048a670d629b55031e6d0aa2',
  ];
  const list3 = [
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/96151736_1506257449554829_3148516918132161857_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=nMRjCh7Am2YAX8x8gmy&oe=5EB91C39&oh=77a68e5d5da076c9c31d65a092a864e3',
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/95991942_290271775468607_8509055845213713577_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=kz5Yx0ipIB8AX8HJAQI&oe=5EB89E41&oh=c47ae18a41fd17e138b424369c903556',
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/96440159_230582368229257_4431841085430370774_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=su4b9L9riUEAX9ipMFt&oe=5EB8C776&oh=801cd5551cc72690c6ad476dfb34e3f5',
  ];
  const list4 = [
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/96512361_293482031813705_9183040988356202992_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=CGKO2T6z1FEAX8ePdKH&oe=5EB8B154&oh=ec072c38ec0c3d769569fef42834eca6',
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/95867653_227462108548538_633012667950680954_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=SlMDHGcPQyMAX8eGI9m&oe=5EB8FA8E&oh=035bddb7b6833bdb6cecf00b89b53f8c',
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/96285333_1342150589305926_7892972219299720956_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=yJCs5bI5T3wAX9Q4IZv&oe=5EB8A6C6&oh=c4970ca1d09fc6e754dfe63a386b3954',
  ];

  const list5 = [
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/96860100_873251026509196_462069056152765022_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=xP6BhRdj0zUAX8LEfci&oe=5EBA92E5&oh=fedd8f29558ef83a3076a05cc9f9d92b',
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/96045384_274050027083627_2221212977209725706_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=d66JgTxTaBoAX8tACbX&oe=5EBA7A74&oh=ee9a51ff880c6e9703412f84b14d34bc',
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/96001906_376317269981580_5512311100597547470_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=AAbeMkGZ9rwAX8wZzqO&oe=5EB93617&oh=1bd0091d1c317058771b7525f22d3f9b',
  ];

  const list6 = [
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/96144965_281184632923040_8004505296233010159_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=Y6gSXAGuJcgAX9QJlci&oe=5EBA8E15&oh=3bf09a0bad2825c6aef26a644563e3e6',
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/96582964_893748751101235_774888205293288048_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=fXbTuuAKqF4AX-I5zbn&oe=5EBAF26B&oh=22869249cb9d99931a961e0414664c4a',
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/96016827_2665954667021388_6655652529967918700_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=Zjq0fRwu2w0AX-dbOQy&oe=5EBAC2B1&oh=45bb0e0fb6b47803407d42c10cb570be',
  ];

  const list7 = [
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/96853380_156575472505986_5533844559000403621_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=E_1EDUtWXn8AX8e-V7_&oe=5EBAFEC9&oh=6c503e191ebcecaf16ecd007e89edb6a',
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/97056719_247056130039117_4427280647726800547_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=Wct48zmek1wAX-lwxJ6&oe=5EBAA7D6&oh=bc53e29ac597186b8962ea9520ca117c',
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/96535324_237132250711505_5094854170945936326_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=y2eV2kGCb94AX-94_57&oe=5EBA68AA&oh=d4ede2dc54e3a9f08e7f97288d64de8c',
  ];

  const [list, setList] = useState(list1);

  const [paused, setPaused] = useState(list.map((_, index) => index !== 0));
  const [buffering, setBuffering] = useState(list.map(() => false));
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [endList, setEndList] = useState(false);

  const refFlatList = useRef();

  const myViewableItemsChanged = useRef(event => {
    if (event.viewableItems.length === 1) {
      setSelectedIndex(event.viewableItems[0].index);
    }
  });

  useEffect(() => {
    setPaused(list.map((_, index) => index !== selectedIndex));
  }, [list, selectedIndex]);

  /*
    useEffect(() => {
      refFlatList.current.onViewableItemsChanged = event => {
        if (event.viewableItems.length === 1) {
          setPaused(
            list.map((_, index) => index !== event.viewableItems[0].index),
          );
        }
      };
  }, [list]);
    /*
    useEffect(() => {
      setList(list1);
    }, []);*/

  return (
    <FlatList
      ref={refFlatList}
      data={list}
      onViewableItemsChanged={myViewableItemsChanged.current}
      viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
      keyExtractor={item => item}
      pagingEnabled
      horizontal
      ListFooterComponent={() => {
        return (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              width: window.width,
              height: window.height,
            }}>
            <Text>{endList ? 'bitti :)' : 'yukleniyor...'}</Text>
          </View>
        );
      }}
      onEndReachedThreshold={0.5}
      onEndReached={info => {
        setPaused(list.map(() => true));
        setTimeout(() => {
          let l = [];
          switch (list.length / 3) {
            case 1:
              l = [...list, ...list2];
              break;
            case 2:
              l = [...list, ...list3];
              break;
            case 3:
              l = [...list, ...list4];
              break;
            case 4:
              l = [...list, ...list5];
              break;
            case 5:
              l = [...list, ...list6];
              break;
            case 6:
              l = [...list, ...list7];
              break;
            default:
              setEndList(true);
          }

          if (l.length !== 0) {
            setSelectedIndex(list.length);
            setBuffering(l.map(() => false));
            setList(l);
          }
        }, 3000);
      }}
      renderItem={({ item, index }) => {
        return (
          <ScrollView pagingEnabled style={{ width: window.width }}>
            <View>
              {buffering[index] && (
                <ActivityIndicator
                  style={{
                    position: 'absolute',
                    top: window.height / 2 - 10,
                    left: window.width / 2 - 10,
                    zIndex: 9999,
                  }}
                  color="#fff"
                  size={'large'}
                />
              )}
              <Video
                paused={paused[index]}
                onBuffer={event => {
                  if (buffering[index] !== event.isBuffering) {
                    buffering[index] = event.isBuffering;
                    setBuffering([...buffering]);
                  }
                }}
                onLoadStart={event => {
                  buffering[index] = true;
                  setBuffering([...buffering]);
                }}
                repeat
                resizeMode={'cover'}
                style={{
                  width: '100%',
                  height:
                    Platform.OS === 'ios' ? window.height : window.height - 24,
                }}
                source={{ uri: item }}
              />
            </View>
            <View
              style={{
                flex: 1,
                paddingTop: 50,
                paddingLeft: 10,
                paddingRight: 10,
                width: '100%',
                height:
                  Platform.OS === 'ios' ? window.height : window.height - 24,
              }}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad
                aliquam blanditiis culpa delectus ea eius, eum, laudantium, odio
                quae ut vel veniam voluptatibus. Aperiam beatae dolores expedita
                minima
              </Text>
              <Text>{'\n'}</Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad
                aliquam blanditiis culpa delectus ea eius, eum, laudantium, odio
                quae ut vel veniam voluptatibus. Aperiam beatae dolores expedita
                minima
              </Text>
              <Text>{'\n'}</Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad
                aliquam blanditiis culpa delectus ea eius, eum, laudantium, odio
                quae ut vel veniam voluptatibus. Aperiam beatae dolores expedita
                minima
              </Text>
              <Text>{'\n'}</Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad
                aliquam blanditiis culpa delectus ea eius, eum, laudantium, odio
                quae ut vel veniam voluptatibus. Aperiam beatae dolores expedita
                minima
              </Text>
              <Text>{'\n'}</Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad
                aliquam blanditiis culpa delectus ea eius, eum, laudantium, odio
                quae ut vel veniam voluptatibus. Aperiam beatae dolores expedita
                minima
              </Text>
              <Text>{'\n'}</Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad
                aliquam blanditiis culpa delectus ea eius, eum, laudantium, odio
                quae ut vel veniam voluptatibus. Aperiam beatae dolores expedita
                minima
              </Text>
              <Text>{'\n'}</Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad
                aliquam blanditiis culpa delectus ea eius, eum, laudantium, odio
                quae ut vel veniam voluptatibus. Aperiam beatae dolores expedita
                minima
              </Text>
            </View>
          </ScrollView>
        );
      }}
    />
  );
};

export default VideoPage;
