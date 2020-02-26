import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {scaleSize} from '@/common/utils/ScreenUtil';
import Theme from '@/common/theme';

class Separator extends React.Component {
  render() {
    return (
      <View
        style={{
          width: 0.5,
          height: scaleSize(14),
          backgroundColor: Theme.Color.Background.Background3,
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
                  <Text style={Theme.FontStyles.Font4}>{item.text}</Text>
                </TouchableOpacity>
              );
            } else {
              return (
                <React.Fragment key={index}>
                  <Separator />
                  <TouchableOpacity onPress={item.onPress}>
                    <Text style={Theme.FontStyles.Font4}>{item.text}</Text>
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
