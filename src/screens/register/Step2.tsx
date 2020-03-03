import React from 'react';
import {SafeAreaView} from 'react-native';
import {injectIntl} from 'react-intl';
import Success from '@/components/success';
import Button from '@/components/button';
import {scaleSize} from '@/common/utils/ScreenUtil';
import Log from '@/common/log';

class Step2 extends React.Component<{[propName: string]: any}, {}> {
  render() {
    Log.info('render forget password step1');
    const {formatMessage} = this.props.intl;
    const {navigation} = this.props;
    return (
      <SafeAreaView>
        <Success
          infoText={formatMessage({id: 'intl.screen.register.step2.success'})}
        />
        <Button
          type="primary"
          value={formatMessage({id: 'intl.button.loginnow'})}
          onPress={() => {
            navigation.navigate('Login');
          }}
          style={{marginHorizontal: scaleSize(40), marginTop: scaleSize(58)}}
        />
      </SafeAreaView>
    );
  }
}

export default injectIntl(Step2);
