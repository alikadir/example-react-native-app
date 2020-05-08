import React, { useEffect, useRef, useState } from 'react';
import { View, Text, FlatList, Image, Linking, Platform } from 'react-native';

import { Map, Phone } from '../svgs';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';

const ListPage = props => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const refFlatList = useRef(null);

  const loadData = () => {
    setPage(page + 1);

    fetch(`https://randomuser.me/api/?page=${page}&results=30&seed=foobar`)
      .then(result => result.json())
      .then(result => {
        console.log(result.results.length);
        setList([...list, ...result.results]);
      })
      .catch(console.error);
  };

  useEffect(() => {
    (async function fetchData() {
      const response = await fetch(
        'https://randomuser.me/api/?page=0&results=30&seed=foobar',
      );
      const json = await response.json();
      setList([...json.results]);
    })();
  }, []);

  const itemRender = ({ item, index }) => (
    <View style={{ padding: 10, flexDirection: 'row' }}>
      <Image
        style={{ width: 75, height: 75, borderRadius: 10 }}
        source={{ uri: item.picture.large }}
      />
      <View style={{ marginLeft: 10, justifyContent: 'space-evenly' }}>
        <Text style={{ fontSize: 25 }}>
          {item.name.first} {item.name.last}
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Map width={15} height={15} color={'#3999fc'} />
          <Text
            onPress={() => {
              if (Platform.OS === 'ios') {
                Linking.openURL('maps:?q=' + item.location.country);
              } else {
                Linking.openURL('geo:?q=' + item.location.country);
              }
            }}
            style={{ marginLeft: 5, marginRight: 20, color: '#3999fc' }}>
            {item.location.country}
          </Text>
          <Phone width={15} height={15} color={'#39842b'} />
          <Text
            style={{ marginLeft: 5, color: '#39842b' }}
            onPress={() => {
              Linking.openURL('tel:' + item.phone);
            }}>
            {item.phone}
          </Text>
        </View>
        <Text style={{ color: '#717171' }}>
          {item.email} ({index})
        </Text>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        ref={refFlatList}
        data={list}
        renderItem={itemRender}
        keyExtractor={(item, index) => item.login.uuid + index}
        ListFooterComponent={() => (
          <View style={{ padding: 30 }}>
            <Placeholder Animation={Fade} Left={PlaceholderMedia}>
              <PlaceholderLine width={80} />
              <PlaceholderLine />
              <PlaceholderLine width={30} />
            </Placeholder>
          </View>
        )}
        onEndReachedThreshold={0.5}
        onEndReached={info => {
          loadData();
        }}
      />
    </View>
  );
};

export default ListPage;
