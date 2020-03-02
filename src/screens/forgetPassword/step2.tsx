import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import {injectIntl} from 'react-intl';

import {Form, PasswordInput, Separator} from '@/components/form';
import Button from '@/components/button';
import {scaleSize} from '@/common/utils/ScreenUtil';
import * as Validator from '@/components/form/FormValidator';
import Log from '@/common/log';
import Theme from '@/common/theme';

class Step2 extends React.Component<
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
          <PasswordInput
            placeholder={formatMessage({
              id: 'intl.input.newpassword.placeholder',
            })}
            validator={Validator.PasswordValidator}
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
              navigation.navigate('Step3');
            }
          }}
          style={{marginHorizontal: scaleSize(40)}}
        />
      </SafeAreaView>
    );
  }
}

export default injectIntl(Step2);
