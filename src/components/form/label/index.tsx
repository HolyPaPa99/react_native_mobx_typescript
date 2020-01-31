import React from 'react';
import {View, Text} from 'react-native';

import {LabelStyle} from '@/components/form/FormStyle';

const Label = (props: {name: string; style?: any; textStyle?: any}) => {
  return (
    <View style={{...LabelStyle.container, ...props.style}}>
      <Text style={{...LabelStyle.text, ...props.textStyle}}>{props.name}</Text>
    </View>
  );
};

export default Label;
