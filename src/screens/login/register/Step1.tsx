import React from 'react';
import {SafeAreaView} from 'react-native';
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

class Step1 extends React.Component<{[propName: string]: any}, {}> {
  formRef: any;
  
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
            placeholder={formatMessage({id: 'intl.input.username.placeholder'})}
            validator={Validator.UserNameValidator}
            style={{backgroundColor: Theme.Color.Background.Background1}}
          />
          <Separator />
          <PasswordInput
            placeholder={formatMessage({id: 'intl.input.password.placeholder'})}
            validator={Validator.PasswordValidator}
            style={{backgroundColor: Theme.Color.Background.Background1}}
          />
          <Separator />
          <TouchableInput
            label={formatMessage({id: 'intl.input.phoneverifycode.label'})}
            placeholder={formatMessage({
              id: 'intl.input.phoneverifycode.placeholder',
            })}
            touchableText={formatMessage({
              id: 'intl.input.phoneverifycode.send',
            })}
            interval={60}
            validator={Validator.PhoneVerifyCodeValidator}
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
              navigation.navigate('Register.Step2');
            }
          }}
          style={{marginHorizontal: scaleSize(40)}}
        />
      </SafeAreaView>
    );
  }
}

export default injectIntl(Step1);
