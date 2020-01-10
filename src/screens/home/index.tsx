import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
const HomeScreen = (props: any) => {
  return (
    <SafeAreaView>
      <View>
        <Text>This Is Home Screen</Text>
      </View>
      <View>
        <Button
          onPress={e => props.navigation.navigate('Login')}
          title="Go to Login"
        />
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
