import {StyleSheet} from 'react-native';
import * as ScreenUtil from '@/common/utils/ScreenUtil';

export const placeholderTextColor = 'rgba(60,60,67,0.3)';
export const fontColor = '#5EA2EC';
export const itemHight = ScreenUtil.scaleSize(48);
export const fontSize = ScreenUtil.scaleSize(16);
export const inputPaddingHorizontal = ScreenUtil.scaleSize(10);
export const containerPaddingHorizontal = ScreenUtil.scaleSize(15);

export const InputStyle = StyleSheet.create({
  container: {
    height: itemHight,
    flex: 1,
    flexDirection: 'row',
  },
  textInput: {
    fontSize: fontSize,
    paddingHorizontal: inputPaddingHorizontal,
  },
});

export const LabelStyle = StyleSheet.create({
  container: {
    height: itemHight,
    justifyContent: 'center',
    paddingHorizontal: containerPaddingHorizontal,
  },
  text: {
    fontSize: fontSize,
    color: fontColor,
  },
});
