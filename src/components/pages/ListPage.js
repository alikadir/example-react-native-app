import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { Map, Phone } from '../svgs';

const ListPage = props => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);

  const loadData = () => {
    fetch(`https://randomuser.me/api/?page=${page}&results=50&seed=foobar`)
      .then(result => result.json())
      .then(result => {
        console.log(result.results.length);
        setList([...list, ...result.results]);
        console.log(list);
      })
      .catch(console.error);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://randomuser.me/api/?page=0&results=300&seed=foobar',
      );
      const json = await response.json();
      setList([...json.results]);
    }

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={list}
        renderItem={({ item, index }) => (
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
                <Map width={15} height={15} />
                <Text
                  style={{ marginLeft: 5, marginRight: 20, color: '#3999fc' }}>
                  {item.location.country}
                </Text>
                <Phone width={15} height={15} color={'#39842b'} />
                <Text style={{ marginLeft: 5, color: '#39842b' }}>
                  {item.phone}
                </Text>
              </View>
              <Text style={{ color: '#717171' }}>
                {item.email} ({index})
              </Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.email}
      />
    </View>
  );
};

export default ListPage;
