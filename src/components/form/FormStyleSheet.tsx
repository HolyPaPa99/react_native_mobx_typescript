import React from 'react';
import {StyleSheet} from 'react-native';

export const placeholderTextColor = 'rgba(60,60,67,0.3)';

export const styleSheet = StyleSheet.create({
  textInputContainer: {
    height: 48,
    flex: 1,
    flexDirection: 'row',
  },
  textInput: {
    fontSize: 16,
    fontWeight: 'normal',
    paddingHorizontal: 10,
  },
  labelContainer: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelText: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#5EA2EC',
  },
});
