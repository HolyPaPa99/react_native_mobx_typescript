import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import {injectIntl} from 'react-intl';

import {
  Form,
  Picker,
  PhoneInput,
  TouchableInput,
  UserNameInput,
  PasswordInput,
  Separator,
} from '@/components/form';
import Button from '@/components/button';
import {scaleSize} from '@/common/utils/ScreenUtil';
import * as Validator from '@/components/form/FormValidator';
import Log from '@/common/log';
import Theme from '@/common/theme';

class Step1 extends React.Component<
  {[propName: string]: any} & NavigationStackScreenProps,
  {}
> {
  formRef: any;
  static navigationOptions = {
    headerShown: false,
  };
  render() {
    Log.info('render forget password step1');
    const {formatMessage} = this.props.intl;
    const {navigation} = this.props;
    return (
      <SafeAreaView>
        <Form ref={(ref: any) => (this.formRef = ref)}>
          <Picker
            name="areaCode"
            label={formatMessage({id: 'intl.screen.login.country'})}
            text="中国"
            style={{backgroundColor: Theme.Color.Background.Background1}}
          />
          <Separator />
          <PhoneInput
            areaCode="+86"
            name="phone"
            placeholder={formatMessage({
              id: 'intl.input.phone.placeholder',
            })}
            validator={Validator.PhoneValidator}
            style={{backgroundColor: Theme.Color.Background.Background1}}
          />
          <Separator />
          <UserNameInput
            placeholder="请输入昵称"
            style={{backgroundColor: Theme.Color.Background.Background1}}
          />
          <Separator />
          <PasswordInput
            placeholder="请输入密码"
            style={{backgroundColor: Theme.Color.Background.Background1}}
          />
          <Separator />
          <TouchableInput
            label="短信验证码"
            placeholder="请输入短信验证码"
            touchableText="发送"
            interval={60}
            onPress={() => {
              console.log('send');
            }}
            style={{backgroundColor: Theme.Color.Background.Background1}}
          />
          <Separator />
        </Form>
        <Button
          type="primary"
          value={formatMessage({id: 'intl.button.next'})}
          onPress={() => {
            if (this.formRef.validateForm()) {
              Log.info(this.formRef.getFormValues());
              navigation.navigate('Step2');
            }
          }}
          style={{marginHorizontal: scaleSize(40)}}
        />
      </SafeAreaView>
    );
  }
}

export default injectIntl(Step1);
