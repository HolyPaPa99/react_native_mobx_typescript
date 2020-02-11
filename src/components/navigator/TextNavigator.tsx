import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {scaleSize} from '@/common/utils/ScreenUtil';

class Separator extends React.Component {
  render() {
    return (
      <View
        style={{
          width: 0.5,
          height: scaleSize(18),
          backgroundColor: '#5EA2EC',
          marginHorizontal: scaleSize(10),
        }}></View>
    );
  }
}

class TextNavigator extends React.Component<{
  navigators: Array<{
    text: string;
    onPress: any;
  }>;
  [propName: string]: any;
}> {
  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          padding: scaleSize(10),
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {this.props.navigators.map((item, index) => {
            if (index === 0) {
              return (
                <TouchableOpacity onPress={item.onPress} key={index}>
                  <Text style={{color: '#5EA2EC', fontSize: scaleSize(16)}}>
                    {item.text}
                  </Text>
                </TouchableOpacity>
              );
            } else {
              return (
                <React.Fragment key={index}>
                  <Separator />
                  <TouchableOpacity onPress={item.onPress}>
                    <Text style={{color: '#5EA2EC', fontSize: scaleSize(16)}}>
                      {item.text}
                    </Text>
                  </TouchableOpacity>
                </React.Fragment>
              );
            }
          })}
        </View>
      </View>
    );
  }
}

export default TextNavigator;
