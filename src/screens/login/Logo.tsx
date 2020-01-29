import React from 'react';
import {View, Image} from 'react-native';

const footprint = require('@/assets/png/login/footprint.png');

export default class Logo extends React.Component {
  render() {
    return (
      <View style={{height: 116.5}}>
        <View
          style={{
            height: 50,
            marginTop: 66.5,
            marginLeft: 40,
            marginRight: 40,
            borderTopStartRadius: 10,
            borderTopEndRadius: 10,
            backgroundColor: '#fff',
          }}>
          <Image
            source={footprint}
            style={{
              height: 116,
              borderRadius: 58,
              width: 116,
              top: -68,
              alignSelf: 'center',
              borderWidth: 10,
              borderColor: '#5EA2EC',
              backgroundColor: '#5EA2EC',
            }}
          />
        </View>
      </View>
    );
  }
}
