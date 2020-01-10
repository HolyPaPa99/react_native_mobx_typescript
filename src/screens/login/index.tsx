import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
const LoginScreen = (props: any) => {
  return (
    <SafeAreaView>
      <View>
        <Text>This Is Login Screen</Text>
      </View>
      <View>
        <Button
          onPress={() => props.navigation.navigate('Home')}
          title="Go to Home"
        />
      </View>
    </SafeAreaView>
  );
};
export default LoginScreen;
