import React from 'react';
import {
  useWindowDimensions,
  ScrollView,
  Text,
  View,
  Button,
} from 'react-native';

const Rainbow = props => {
  const window = useWindowDimensions();

  return (
    <ScrollView>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}>
        {Array(100)
          .fill()
          .map((_, i) => (
            <View
              key={i}
              style={{
                marginBottom: 20,
                height: 250,
                width: window.width,
                backgroundColor: randomColor(),
              }}
            />
          ))}
      </ScrollView>
      <Text style={{ marginRight: 20, marginLeft: 20 }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ab amet
        aspernatur aut consequuntur corporis distinctio, ducimus eaque esse
        explicabo harum libero molestiae nesciunt perspiciatis quaerat quasi
        sunt temporibus voluptate.{'\n\n'}Accusamus alias id illum ipsa iusto
        laborum libero, maiores minima officiis quidem sapiente sunt temporibus
        ullam! A assumenda consequatur delectus facere iusto odio ratione, saepe
        sit tempora tenetur.
      </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {Array(100)
          .fill()
          .map((_, i) => (
            <View
              key={i}
              style={{
                width: 100,
                height: 100,
                margin: 15,
                backgroundColor: randomColor(),
              }}
            />
          ))}
      </ScrollView>
      <Text style={{ marginRight: 20, marginLeft: 20, marginBottom: 20 }}>
        Ad adipisci aliquid amet aperiam architecto asperiores beatae commodi
        culpa cum deleniti deserunt dignissimos dolorem dolorum et, eum,
        excepturi facere illum laudantium libero minus natus nulla perspiciatis
        placeat possimus quia repellat repellendus reprehenderit saepe sit
        tempore, totam unde vel velit voluptas voluptates voluptatibus
        voluptatum? Consequatur dolor ex incidunt? {'\n\n'}Ad asperiores
        delectus dolorem eligendi explicabo facere fugiat inventore magni maxime
        modi nisi perspiciatis porro quo saepe, sequi totam vel! Aliquid
        architecto ducimus, facere illum itaque odio rem soluta. Alias aliquid
        at atque cum doloremque doloribus dolorum ducimus enim est eveniet
        expedita harum id, illum necessitatibus neque nostrum quibusdam quos
        sequi vel voluptatem? {'\n\n'}Ab accusamus amet assumenda aut autem
        blanditiis cupiditate dignissimos dolore dolorem eum exercitationem
        explicabo facilis fugiat ipsa itaque iusto maiores, minus necessitatibus
        nemo neque nulla provident quo quod repellat repudiandae rerum
        temporibus, ullam unde, ut vel?{'\n\n'}Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. A, ab amet aspernatur aut consequuntur
        corporis distinctio, ducimus eaque esse explicabo harum libero molestiae
        nesciunt perspiciatis quaerat quasi sunt temporibus voluptate. Accusamus
        alias id illum ipsa iusto laborum libero, maiores minima officiis quidem
        sapiente sunt temporibus ullam! A assumenda consequatur delectus facere
        iusto odio ratione, saepe sit tempora tenetur.
      </Text>
      <Button
        title="Back to Home Page"
        onPress={() => {
          props.navigation.pop();
        }}
      />
      <Text style={{ margin: 20 }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
        dolores eaque eius ipsa ipsum itaque quibusdam rem sit ut vero! Alias
        earum illo nihil nisi odit, omnis quibusdam sequi totam.{'\n\n'}
        Ad asperiores delectus dolorem eligendi explicabo facere fugiat
        inventore magni maxime modi nisi perspiciatis porro quo saepe, sequi
        totam vel! Aliquid architecto ducimus, facere illum itaque odio rem
        soluta. Alias aliquid at atque cum doloremque doloribus dolorum ducimus
        enim est eveniet expedita harum id, illum necessitatibus neque nostrum
        quibusdam quos sequi vel voluptatem
      </Text>
    </ScrollView>
  );
};

const randomColor = () => {
  var r = (Math.round(Math.random() * 127) + 50).toString(16);
  var g = (Math.round(Math.random() * 127) + 50).toString(16);
  var b = (Math.round(Math.random() * 127) + 50).toString(16);
  return '#' + r + g + b;
};

export default Rainbow;
