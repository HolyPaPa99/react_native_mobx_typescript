import React from 'react';
import {Dimensions, PixelRatio} from 'react-native';

export const deviceWidth = Dimensions.get('window').width; //设备的宽度
export const deviceHeight = Dimensions.get('window').height; //设备的高度
import {
  View,
  Text,
  SafeAreaView,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import {NavigationStackScreenProps} from 'react-navigation-stack';

import * as ScreenUtil from '@/common/utils/ScreenUtil';

const logo = require('@/assets/png/login/logo.png');
const footprint = require('@/assets/png/login/footprint.png');
class LoginScreen extends React.Component<NavigationStackScreenProps, {}> {
  static navigationOptions = {
    headerShown: false,
  };

  render() {
    return (
      <SafeAreaView style={{backgroundColor: '#5EA2EC', flex: 1}}>
        <View
          style={{
            width: ScreenUtil.scaleSize(414),
            height: ScreenUtil.scaleSize(212),
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 60,
          }}>
          <Image source={logo} />
        </View>
        <View style={{flex: 1}}>
          <View
            style={{
              flex: 1,
              marginTop: 66,
              marginLeft: 40,
              marginRight: 40,
              marginBottom: 60,
              borderRadius: 10,
              backgroundColor: '#fff',
            }}>
            <View style={{height: 50}}>
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
            <View
              style={{
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 28, color: '#5EA2EC'}}>登录</Text>
            </View>
            <View
              style={{
                height: 147,
                marginTop: 20,
                marginLeft: 27,
                marginRight: 27,
              }}>
              <View style={{flex: 3, flexDirection: 'row'}}>
                <View
                  style={{
                    width: 104,
                    height: 48,
                    borderBottomWidth: 1,
                    borderBottomColor: '#D8D8D8',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'normal',
                      color: '#5EA2EC',
                      lineHeight: 48,
                      textAlign: 'center',
                    }}>
                    国家/地区
                  </Text>
                </View>
                <View
                  style={{
                    width: 125,
                    height: 48,
                    borderBottomWidth: 1,
                    borderBottomColor: '#D8D8D8',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'normal',
                      color: '#5EA2EC',
                      lineHeight: 48,
                      paddingLeft: 13,
                    }}>
                    中国
                  </Text>
                </View>
                <View
                  style={{
                    width: 48,
                    height: 48,
                    borderBottomWidth: 1,
                    borderBottomColor: '#D8D8D8',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'normal',
                      color: '#5EA2EC',
                      lineHeight: 48,
                      textAlign: 'center',
                    }}>
                    >
                  </Text>
                </View>
              </View>
              <View style={{flex: 3, flexDirection: 'row'}}>
                <View
                  style={{
                    width: 104,
                    height: 48,
                    borderBottomWidth: 1,
                    borderBottomColor: '#D8D8D8',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'normal',
                      color: '#5EA2EC',
                      lineHeight: 48,
                      textAlign: 'center',
                    }}>
                    国家/地区
                  </Text>
                </View>
                <View
                  style={{
                    width: 125,
                    height: 48,
                    borderBottomWidth: 1,
                    borderBottomColor: '#D8D8D8',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'normal',
                      color: '#5EA2EC',
                      lineHeight: 48,
                      paddingLeft: 13,
                    }}>
                    中国
                  </Text>
                </View>
                <View
                  style={{
                    width: 48,
                    height: 48,
                    borderBottomWidth: 1,
                    borderBottomColor: '#D8D8D8',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'normal',
                      color: '#5EA2EC',
                      lineHeight: 48,
                      textAlign: 'center',
                    }}>
                    >
                  </Text>
                </View>
              </View>
              <View style={{flex: 3, flexDirection: 'row'}}>
                <View
                  style={{
                    width: 104,
                    height: 48,
                    borderBottomWidth: 1,
                    borderBottomColor: '#D8D8D8',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'normal',
                      color: '#5EA2EC',
                      lineHeight: 48,
                      textAlign: 'center',
                    }}>
                    国家/地区
                  </Text>
                </View>
                <View
                  style={{
                    width: 125,
                    height: 48,
                    borderBottomWidth: 1,
                    borderBottomColor: '#D8D8D8',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'normal',
                      color: '#5EA2EC',
                      lineHeight: 48,
                      paddingLeft: 13,
                    }}>
                    中国
                  </Text>
                </View>
                <View
                  style={{
                    width: 48,
                    height: 48,
                    borderBottomWidth: 1,
                    borderBottomColor: '#D8D8D8',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'normal',
                      color: '#5EA2EC',
                      lineHeight: 48,
                      textAlign: 'center',
                    }}>
                    >
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={{
                width: 279,
                height: 56,
                backgroundColor: '#5EA2EC',
                borderRadius: 5,
                opacity: 0.8,
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 60,
              }}>
              <Text style={{fontSize: 24, color: '#ffffff'}}>下一步</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
export default LoginScreen;
