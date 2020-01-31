import {StyleSheet} from 'react-native';
import * as ScreenUtil from '@/common/utils/ScreenUtil';

export const placeholderTextColor = 'rgba(60,60,67,0.3)';
export const fontColor = '#5EA2EC';
export const itemHight = ScreenUtil.scaleSize(48);
export const fontSize = ScreenUtil.scaleSize(16);
export const inputPaddingHorizontal = ScreenUtil.scaleSize(10);
export const containerPaddingHorizontal = ScreenUtil.scaleSize(15);
export const borderWidth = ScreenUtil.scaleSize(1);
export const borderColor = '#D8D8D8';
export const borderRadius = ScreenUtil.scaleSize(5);
export const marginWidth = ScreenUtil.scaleSize(5);

export const ComponentStyle = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#D8D8D8',
    borderRadius: 5,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

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
