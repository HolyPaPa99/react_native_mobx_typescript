import React from 'react';
import {inject, observer} from 'mobx-react';
import {View, Text, SafeAreaView} from 'react-native';

const Hello = inject('todoStore')(
  observer(props => {
    setTimeout(() => {
      props.todoStore.setName('hey dear');
    }, 2000);
    return (
      <SafeAreaView>
        <View>
          <Text>{props.todoStore.name}</Text>
        </View>
      </SafeAreaView>
    );
  }),
);

export default Hello;
