import React, { useEffect, useRef, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import {
  useWindowDimensions,
  View,
  Image,
  Text,
  Button,
  TextInput,
  ScrollView,
} from 'react-native';
import { getImage, getLocalImage } from '../../helpers/unsplash';
import ActionSheet from 'react-native-actions-sheet';

const ParallaxPage = props => {
  const window = useWindowDimensions();

  const actionSheetRef = useRef();

  const [img, setImg] = useState(null);

  useEffect(() => {
    getImage(1)
      .then(imgList => {
        setImg(imgList[0]);
      })
      .catch(() => {
        const localImage = getLocalImage();
        setImg(localImage);
      });
  }, []);

  return (
    <ParallaxScrollView
      parallaxHeaderHeight={400}
      renderBackground={() => (
        <Image
          source={
            img?.isLocal
              ? img.image
              : {
                  uri: img?.image,
                }
          }
          style={{ width: window.width, height: 400 }}
        />
      )}>
      <View>
        <LinearGradient
          colors={['rgba(0,0,0,0.0)', 'rgba(0,0,0,1)']}
          style={{
            top: -75,
            height: 75,
            color: 'white',
            position: 'absolute',
            width: window.width,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <Text
            style={{
              paddingLeft: 20,
              paddingRight: 20,
              paddingBottom: 10,
              color: '#d4d4d4',
              fontStyle: 'italic',
            }}>
            {img?.description}
          </Text>
        </LinearGradient>
        <View style={{ margin: 20 }}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            autem commodi culpa eius error esse exercitationem expedita iste
            laborum laudantium magni officia quam quas quidem, quos ratione
            similique tempore voluptas?
          </Text>
          <Button
            title={'Zoom'}
            onPress={() => {
              actionSheetRef.current.setModalVisible();
            }}
          />
          <Text>
            Ab amet beatae blanditiis cumque enim esse facere fugiat incidunt
            inventore ipsam laborum, magni necessitatibus obcaecati, odit
            perferendis perspiciatis quam quis sequi similique sunt tenetur,
            vero vitae voluptas. Dignissimos, facilis.
          </Text>
          <Text>
            Adipisci beatae blanditiis consequatur magnam minus non quidem? A
            adipisci alias aliquam aspernatur autem deleniti, dicta distinctio
            dolore incidunt iure maiores minima natus perspiciatis, placeat sed
            unde voluptas voluptates voluptatibus!
          </Text>
          <Text>
            Aliquam amet aspernatur assumenda blanditiis consequuntur cupiditate
            deleniti doloribus earum error eveniet fugiat impedit iste labore
            maxime non perferendis, provident quae quam quibusdam quidem quis
            repudiandae similique sit voluptas voluptates.
          </Text>
          <Text>
            Eveniet exercitationem expedita fugiat itaque perspiciatis, quidem
            sint vel? Animi commodi deleniti distinctio, doloremque eligendi eum
            explicabo id, incidunt libero, minima nesciunt officiis perspiciatis
            rem repellat sapiente totam vero? Accusamus.
          </Text>
          <Text>
            A cumque delectus, ea itaque maiores obcaecati perferendis placeat
            quaerat recusandae rerum vel veniam, veritatis. Amet aperiam
            distinctio doloremque, eveniet facilis ipsam ipsum minus omnis
            quisquam saepe, tempore, totam voluptates.
          </Text>
          <Text>
            Accusantium ea enim inventore ipsa maiores numquam perferendis,
            provident reprehenderit unde vero? Accusantium at blanditiis
            doloremque excepturi fuga in itaque libero magni nesciunt, nisi
            perferendis possimus, sint voluptas. Mollitia, voluptas.
          </Text>
          <Text>
            Assumenda blanditiis consequatur, iusto magni quo reiciendis
            repellendus suscipit. Alias dicta dignissimos earum minus nihil.
            Aut, corporis ipsum iusto labore, nihil officia pariatur quas quo,
            quod quos sequi similique. Facere.
          </Text>
          <Text>
            Accusamus ad aliquam blanditiis consectetur corporis culpa eos
            exercitationem hic illo laudantium magnam minima, modi molestiae
            nesciunt nostrum odit possimus quibusdam reiciendis repellat
            reprehenderit sed soluta tenetur voluptas voluptatem voluptates?
          </Text>
          <Text>
            Blanditiis minus omnis quas qui soluta unde vitae. Asperiores
            corporis earum nam nesciunt nihil optio quae quasi repellendus sint
            sit! Culpa illo sint ullam. Assumenda iure iusto necessitatibus quam
            recusandae!
          </Text>
          <Text>
            Illo impedit ipsa maiores, quod rerum veniam voluptas? A assumenda
            culpa dignissimos, dolorem ducimus eligendi, iure necessitatibus
            nemo obcaecati porro quaerat quisquam saepe vel, veritatis
            voluptate? Atque corporis delectus ut.
          </Text>
          <Text>
            Accusamus debitis nesciunt reiciendis saepe? Corporis dignissimos ea
            necessitatibus nulla praesentium sed! Ab adipisci asperiores enim
            ex, facere fugit ipsa laboriosam laborum nesciunt, nobis nulla
            obcaecati provident? Distinctio, explicabo, facere.
          </Text>
          <Text>
            Asperiores aut commodi culpa cupiditate distinctio dolorem doloribus
            dolorum eum explicabo hic illum ipsa magni, molestias nemo neque
            nihil nisi non odio perspiciatis, placeat quis rem reprehenderit
            ullam veniam, voluptatibus.
          </Text>
          <Text>
            Atque commodi corporis eligendi facere facilis itaque optio quis
            soluta voluptatem? Ab asperiores aut consequatur corporis deserunt
            dolore dolores eveniet ipsum itaque odit quae, quibusdam sapiente
            similique sint suscipit voluptatem.
          </Text>
          <Text>
            Delectus quisquam quos temporibus velit! Ad aut enim harum nisi
            voluptas. At commodi dolores ducimus eligendi eveniet in iste
            itaque, iure, nihil odio officiis qui quod sit veniam voluptate
            voluptates.
          </Text>
          <Text>
            Accusamus asperiores fugiat quos. Beatae culpa debitis et, facilis
            illo inventore magni, molestiae, nihil perferendis placeat suscipit
            ullam voluptas voluptatem! Ab accusantium culpa dolores eaque est
            explicabo hic nulla porro.
          </Text>
          <Text>
            Adipisci cum dolore dolorem dolorum enim est eveniet impedit iure
            nam placeat praesentium qui quibusdam repudiandae sed, sunt suscipit
            veritatis voluptate? Accusamus commodi consectetur dolorem est ex
            omnis, possimus ratione!
          </Text>
          <Text>
            Adipisci autem cumque dicta eius ex explicabo, labore repellat
            rerum. Asperiores atque debitis deserunt dicta eius, facere ipsum
            laudantium maxime molestiae necessitatibus, placeat, quia quidem
            rerum sit tempora velit voluptatum.
          </Text>
          <Text>
            Aperiam architecto delectus fugiat quae, rem temporibus? Ad deleniti
            dolore enim harum in, incidunt inventore iusto molestias mollitia
            nihil nobis numquam provident quaerat quod repellat rerum vel vitae
            voluptas voluptatum!
          </Text>
          <Text>
            Delectus dolores doloribus, eaque hic minus natus possimus quis!
            Aspernatur autem doloribus earum et exercitationem in magni
            obcaecati. Architecto consectetur dicta inventore iusto optio. Ex
            quo ratione reprehenderit totam voluptatum.
          </Text>
          <Text>
            A ad culpa dolore est hic iure qui! Delectus eius, inventore minima
            mollitia odit repudiandae sed. Aperiam at, deserunt eligendi
            laudantium nemo nulla numquam quaerat reiciendis repudiandae
            sapiente sint voluptatum!
          </Text>
          <Text>
            A ab commodi cum dignissimos eius eos error est inventore iure nemo
            non nostrum officia optio pariatur, quis reiciendis repellendus
            tempore, totam vel vero. Doloremque doloribus hic maxime nesciunt
            vero!
          </Text>
          <Text>
            Cum fuga fugiat molestiae necessitatibus nesciunt nostrum officia
            omnis optio provident quo recusandae repellat repudiandae,
            temporibus ut voluptas! Doloribus ipsam minus nam, nisi perferendis
            possimus quod ratione sapiente tempore totam!
          </Text>
          <Text>
            Ad animi, consequatur culpa dicta dignissimos dolores ducimus enim
            error expedita explicabo fugit ipsa iste maiores nihil, numquam
            officiis optio placeat possimus, quas qui sed similique tempora
            totam veniam voluptate?
          </Text>
          <Text>
            Commodi eaque et eveniet ex fugiat molestias nam non nostrum
            pariatur placeat, repellendus rerum voluptas voluptate. Aperiam,
            eligendi facere inventore iure laudantium, nisi officiis provident
            quasi, temporibus tenetur veniam voluptatibus.
          </Text>
          <ScrollView
            // style={{ flex: 1, width: 300, height: 350 }}
            maximumZoomScale={5}
            scrollEnabled={true}
            minimumZoomScale={1}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
            <Image
              style={{ height: 300, width: '100%' }}
              source={{
                uri:
                  'https://img0.gaadicdn.com/images/car-images/496x206/Lamborghini/Lamborghini-Huracan/Lamborghini-Huracan-Performante/047.jpg',
              }}
            />
          </ScrollView>
          <Text>
            A at deleniti, dolorem doloremque expedita id ipsam laudantium
            natus, nemo optio pariatur, quo quos rem repellat rerum tempora
            veritatis voluptates! Aliquam est explicabo impedit nisi obcaecati
            odio rem voluptatibus?
          </Text>
          <Text>
            Deleniti facere ipsam quam quo ut. Aspernatur delectus dicta earum
            esse nulla pariatur quibusdam quod ratione totam, vel. At error
            illum mollitia nihil voluptate? Aut eaque esse nemo nihil officia.
          </Text>
          <Text>
            Hic laudantium, molestias nemo reiciendis repellendus sunt. Ad
            aspernatur aut autem corporis, culpa doloribus exercitationem fuga
            inventore ipsa ipsam magnam, mollitia nam nihil praesentium quae
            recusandae sed soluta vitae, voluptas.
          </Text>

          <ActionSheet
            ref={actionSheetRef}
            headerAlwaysVisible
            gestureEnabled
            elevation={100}
            footerAlwaysVisible>
            <View style={{ margin: 15 }}>
              <Text>YOUR CUSTOM COMPONENT INSIDE THE ACTIONSHEET</Text>
              <Text>{'\n'}</Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                aperiam dolor dolores eaque earum error illo impedit iure maxime
                nam necessitatibus perspiciatis, praesentium quibusdam quidem
                quod sunt veniam vero voluptatum.
              </Text>
              <Text>{'\n'}</Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium aliquam assumenda at deleniti dolor, ducimus error
                illum impedit ipsum maxime neque nostrum optio ratione rem ut
                voluptatem voluptates. Culpa, eum!
              </Text>
            </View>
          </ActionSheet>
        </View>
      </View>
    </ParallaxScrollView>
  );
};

export default ParallaxPage;
