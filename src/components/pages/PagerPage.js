import React from 'react';
import ViewPager from '@react-native-community/viewpager';
import {
  Image,
  Text,
  useWindowDimensions,
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import { useHeaderHeight } from '@react-navigation/stack';

const PagerPage = props => {
  const window = useWindowDimensions();
  const headerHeight = useHeaderHeight();

  const style = StyleSheet.create({
    image: {
      height: window.height - headerHeight,
    },
  });

  return (
    <ViewPager style={{ flex: 1 }}>
      <ViewPager orientation={'vertical'}>
        <View>
          <Image
            source={{
              uri:
                'https://images.unsplash.com/photo-1586484517425-f697a455aa10?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNzA5MH0',
            }}
            style={{
              height: window.height - headerHeight - StatusBar.currentHeight,
            }}
          />
        </View>
        <View style={{ height: window.height }}>
          <View style={{ margin: 10 }}>
            <Text>
              person in black rain boots walking on road during daytime
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              adipisci aliquam animi distinctio dolor, eaque, eius
              exercitationem fugit inventore iste maxime molestiae nulla optio
              provident quod sint sit soluta. Debitis.
            </Text>
            <Text>
              Adipisci beatae blanditiis consequatur magnam minus non quidem? A
              adipisci alias aliquam aspernatur autem deleniti, dicta distinctio
              dolore incidunt iure maiores minima natus perspiciatis, placeat
              sed unde voluptas voluptates voluptatibus!
            </Text>
            <Text>
              Aliquam amet aspernatur assumenda blanditiis consequuntur
              cupiditate deleniti doloribus earum error eveniet fugiat impedit
              iste labore maxime non perferendis, provident quae quam quibusdam
              quidem quis repudiandae similique sit voluptas voluptates.
            </Text>
            <Text>
              Eveniet exercitationem expedita fugiat itaque perspiciatis, quidem
              sint vel? Animi commodi deleniti distinctio, doloremque eligendi
              eum explicabo id, incidunt libero, minima nesciunt officiis
              perspiciatis rem repellat sapiente totam vero? Accusamus.
            </Text>
          </View>
        </View>
      </ViewPager>
      <ViewPager orientation={'vertical'}>
        <View>
          <Image
            source={{
              uri:
                'https://images.unsplash.com/photo-1586501599685-0c13b073e969?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNzA5MH0',
            }}
            style={{
              height: window.height - headerHeight - StatusBar.currentHeight,
            }}
          />
        </View>
        <View style={{ height: window.height }}>
          <View style={{ margin: 10 }}>
            <Text>
              woman in beige long sleeve shirt and blue denim jeans holding
              green and white paper bags
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              adipisci aliquam animi distinctio dolor, eaque, eius
              exercitationem fugit inventore iste maxime molestiae nulla optio
              provident quod sint sit soluta. Debitis.
            </Text>
            <Text>
              Adipisci beatae blanditiis consequatur magnam minus non quidem? A
              adipisci alias aliquam aspernatur autem deleniti, dicta distinctio
              dolore incidunt iure maiores minima natus perspiciatis, placeat
              sed unde voluptas voluptates voluptatibus!
            </Text>
            <Text>
              Aliquam amet aspernatur assumenda blanditiis consequuntur
              cupiditate deleniti doloribus earum error eveniet fugiat impedit
              iste labore maxime non perferendis, provident quae quam quibusdam
              quidem quis repudiandae similique sit voluptas voluptates.
            </Text>
            <Text>
              Eveniet exercitationem expedita fugiat itaque perspiciatis, quidem
              sint vel? Animi commodi deleniti distinctio, doloremque eligendi
              eum explicabo id, incidunt libero, minima nesciunt officiis
              perspiciatis rem repellat sapiente totam vero? Accusamus.
            </Text>
          </View>
        </View>
      </ViewPager>
      <ViewPager orientation={'vertical'} transitionStyle={'curl'}>
        <View>
          <Image
            source={{
              uri:
                'https://images.unsplash.com/photo-1584863265045-f9d10ca7fa61?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNzA5MH0',
            }}
            style={{
              height: window.height - headerHeight - StatusBar.currentHeight,
            }}
          />
        </View>
        <View style={{ height: window.height }}>
          <View style={{ margin: 10 }}>
            <Text>
              woman in red sports bra and black and gray shorts exercising on
              black exercise equipment
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              adipisci aliquam animi distinctio dolor, eaque, eius
              exercitationem fugit inventore iste maxime molestiae nulla optio
              provident quod sint sit soluta. Debitis.
            </Text>
            <Text>
              Adipisci beatae blanditiis consequatur magnam minus non quidem? A
              adipisci alias aliquam aspernatur autem deleniti, dicta distinctio
              dolore incidunt iure maiores minima natus perspiciatis, placeat
              sed unde voluptas voluptates voluptatibus!
            </Text>
            <Text>
              Aliquam amet aspernatur assumenda blanditiis consequuntur
              cupiditate deleniti doloribus earum error eveniet fugiat impedit
              iste labore maxime non perferendis, provident quae quam quibusdam
              quidem quis repudiandae similique sit voluptas voluptates.
            </Text>
            <Text>
              Eveniet exercitationem expedita fugiat itaque perspiciatis, quidem
              sint vel? Animi commodi deleniti distinctio, doloremque eligendi
              eum explicabo id, incidunt libero, minima nesciunt officiis
              perspiciatis rem repellat sapiente totam vero? Accusamus.
            </Text>
          </View>
        </View>
      </ViewPager>
      <ViewPager orientation={'vertical'} transitionStyle={'curl'}>
        <View>
          <Image
            source={{
              uri:
                'https://images.unsplash.com/photo-1586398388492-067cad669013?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNzA5MH0',
            }}
            style={{
              height: window.height - headerHeight - StatusBar.currentHeight,
            }}
          />
        </View>
        <View style={{ height: window.height }}>
          <View style={{ margin: 10 }}>
            <Text>man in black tank top holding a light</Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              adipisci aliquam animi distinctio dolor, eaque, eius
              exercitationem fugit inventore iste maxime molestiae nulla optio
              provident quod sint sit soluta. Debitis.
            </Text>
            <Text>
              Adipisci beatae blanditiis consequatur magnam minus non quidem? A
              adipisci alias aliquam aspernatur autem deleniti, dicta distinctio
              dolore incidunt iure maiores minima natus perspiciatis, placeat
              sed unde voluptas voluptates voluptatibus!
            </Text>
            <Text>
              Aliquam amet aspernatur assumenda blanditiis consequuntur
              cupiditate deleniti doloribus earum error eveniet fugiat impedit
              iste labore maxime non perferendis, provident quae quam quibusdam
              quidem quis repudiandae similique sit voluptas voluptates.
            </Text>
            <Text>
              Eveniet exercitationem expedita fugiat itaque perspiciatis, quidem
              sint vel? Animi commodi deleniti distinctio, doloremque eligendi
              eum explicabo id, incidunt libero, minima nesciunt officiis
              perspiciatis rem repellat sapiente totam vero? Accusamus.
            </Text>
          </View>
        </View>
      </ViewPager>
    </ViewPager>
  );
};

export default PagerPage;
