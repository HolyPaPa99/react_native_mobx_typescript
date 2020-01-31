import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

//default style
const defaultStyleSheet = StyleSheet.create({
  labelContainer: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  labelText: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#5EA2EC',
  },
});

const Label = (props: {name: string; style?: any; textStyle?: any}) => {
  return (
    <View style={{...defaultStyleSheet.labelContainer, ...props.style}}>
      <Text style={{...defaultStyleSheet.labelText, ...props.textStyle}}>
        {props.name}
      </Text>
    </View>
  );
};

export default Label;
