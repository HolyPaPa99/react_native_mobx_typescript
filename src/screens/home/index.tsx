import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
import {NavigationStackScreenProps} from 'react-navigation-stack';
const HomeScreen = ({navigation}: NavigationStackScreenProps) => {
  return (
    <SafeAreaView>
      <View>
        <Text>This Is Home Screen</Text>
      </View>
      <View>
        <Button
          onPress={() => {
            navigation.navigate('Login');
          }}
          title="Go to Login"
        />
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
