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
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/97959932_247483173231714_503273401416109211_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=mUEMhmiyhtQAX9CJwhh&oe=5EBBA66F&oh=bfd77b672c92f9896957bac9abf4de1e',
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/96497975_2303240706638543_2373278859488363590_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=xhqKJLjvuJUAX9g_0pf&oe=5EBC1687&oh=ff98268ae355f320b2983f5407d27610',
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/96284173_102353921442661_4182239977232844935_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=8jqA7HaIjkoAX-bNR6T&oe=5EBB87FA&oh=549545395b2025fe8b789f17428cad86',
  ];

  const list2 = [
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/96364044_160156452203964_5308360623978998932_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=BTjQyhSNKM0AX9SrvhN&oe=5EBB733D&oh=7d8b3d3ddc88729d05181808c180013b',
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/96636498_743647933044417_7040401067835581064_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=ie4CQH7TA_sAX8BE5d-&oe=5EBBB355&oh=51531ba4bcaa36f7b701267842f1ec1f',
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/97085858_226844565273236_4546448305181440901_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=L9EpPfp3sXUAX_qtzu5&oe=5EBB8F70&oh=2c81917fe6c80fe3ef6bc9822dd9a207',
  ];
  const list3 = [
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/97029417_1089365458103073_2515912353974130610_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=E06Ta3-7Uy4AX8i2kpv&oe=5EBBAB91&oh=d3615fca7a5e65a614315ecb177eed3e',
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/95884858_546188766040733_3878173690932042412_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=m0_5oeEvuSsAX9A943f&oe=5EBBEDC8&oh=09543fd2b90524f21ac22702350bdf81',
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/96501996_3114007055329638_8342137888786763131_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=hKnuS5FKz2YAX-6OsIU&oe=5EBBD1B3&oh=1a6ba095e320057e1f8e979c1c0a831c',
  ];
  const list4 = [
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/97543455_467408567374213_7208700138994284552_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=r0H-KHENJuMAX_dKRbu&oe=5EBB9729&oh=446e1ca73b91c2be9601f95eefd5073f',
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/96779814_156937575864763_6034203424923049477_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=xmGi2QkpMsgAX9QglFe&oe=5EBBA5FE&oh=0e08a500ddb6a25ecbe31a960dc01f47',
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/97951670_233540237930476_7277393532847697333_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=ESZbE3MXRnkAX_oS_yy&oe=5EBBA804&oh=ea83bc588b79a8dd04349de9b3d73d88',
  ];

  const list5 = [
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/97142709_245518663175625_3136058108528109514_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=c_0pkfLKkaQAX_15y6C&oe=5EBC13C2&oh=a2a555bc88d69fe81a15af7ee278b4eb',
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/96001352_574239183203083_8887035925607069474_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=HDqbidix0XAAX8z_i4s&oe=5EBBBC80&oh=3cd432ffec95efc7c3639274498e8162',
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/97160752_836297356857541_9209305082816959309_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=W3TYiy68n7gAX-oLXns&oe=5EBBC864&oh=ad796b5825c56f657f82bc73e8aca190',
  ];

  const list6 = [
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/96813275_520340601977619_1073905718906325333_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=2xy-FJoDJFsAX9-T7pL&oe=5EBBB25B&oh=51f50e3245d865d022e7e464d89f47fc',
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/97056389_143610780574278_3738389735512795135_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=M3aXTb8WiBkAX_B47bk&oe=5EBBDC8B&oh=db9dc3aa90191214d3a6e1e1f4179473',
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/96669557_144286833820167_2289553131438709394_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=Q7FM1KiCqMgAX_gWesR&oe=5EBBA6FC&oh=6117261fef222d33bcfe11c719d0e3cb',
  ];

  const list7 = [
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/95987954_295431494783970_5626257559218324763_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=RYtSttVxO_cAX95OB1v&oe=5EBBD0E8&oh=7376f746b27599aaa741018e5f805f9b',
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/96232193_2592065107727546_4034579935513309473_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=2KU_1owTdVoAX__f1dP&oe=5EBB93A8&oh=9e8c01546b9bf8c65f44a4cead3b80f9',
    'https://instagram.fist10-1.fna.fbcdn.net/v/t50.12441-16/97798651_2934006330045989_7781822158181258735_n.mp4?_nc_ht=instagram.fist10-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=2MS_M-b_q1kAX9_3q8I&oe=5EBBA3C7&oh=39b40e0acb302eb58e6b19c7a886aa53',
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
        }, 1500);
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
