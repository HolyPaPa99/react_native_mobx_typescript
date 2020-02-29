import React from 'react';
import {View, Text} from 'react-native';
import * as Form from '@/components/form';

export default class extends React.Component {
  render() {
    return (
      <View style={{backgroundColor: '#fff', flex: 1}}>
        <Form.TouchableInput
          label="短信验证码"
          placeholder="请输入短信验证码"
          interval={60}
          touchableText="发送"
          onPress={() => console.log('send')}
        />
        <Form.Separator/>
      </View>
    );
  }
}
