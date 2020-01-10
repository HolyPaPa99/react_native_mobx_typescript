import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
import {NavigationStackScreenProps} from 'react-navigation-stack';
const LoginScreen = ({ navigation }: NavigationStackScreenProps) => {
  return (
    <SafeAreaView>
      <View>
        <Text>This Is Login Screen</Text>
      </View>
      <View>
        <Button
          onPress={() => navigation.navigate('Home')}
          title="Go to Home"
        />
      </View>
    </SafeAreaView>
  );
};
export default LoginScreen;
