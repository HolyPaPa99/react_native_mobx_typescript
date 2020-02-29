import React from 'react';
import {View} from 'react-native';
import * as Form from '@/components/form';
import Success from '@/components/success';

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
        <Form.Separator />
        <Form.UserNameInput placeholder="请输入昵称" />
        <Form.Separator />
        <Success infoText="注册成功，马上登录体验吧！" />
        <Form.Separator />
      </View>
    );
  }
}
