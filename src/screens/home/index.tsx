import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
import {observer, inject} from 'mobx-react';
const HomeScreen = inject('todoStore')(
  observer((props: any) => {
    return (
      <SafeAreaView>
        <View>
          <Text>This Is Home Screen</Text>
        </View>
        <View>
          <Button
            onPress={e => {
              e.preventDefault();
              props.navigation.navigate('Login');
            }}
            title="Go to Login"
          />
        </View>
      </SafeAreaView>
    );
  }),
);
export default HomeScreen;
