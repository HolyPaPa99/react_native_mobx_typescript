import {StyleSheet} from 'react-native';
import * as ScreenUtil from '@/common/utils/ScreenUtil';

export const placeholderTextColor = 'rgba(60,60,67,0.3)';
export const fontColor = '#5EA2EC';
export const itemHeight = ScreenUtil.scaleSize(48);
export const fontSize = ScreenUtil.scaleSize(16);
export const inputPaddingHorizontal = ScreenUtil.scaleSize(10);
export const containerPaddingHorizontal = ScreenUtil.scaleSize(15);
export const borderWidth = ScreenUtil.scaleSize(1);
export const borderColor = '#D8D8D8';
export const borderRadius = ScreenUtil.scaleSize(5);
export const marginWidth = ScreenUtil.scaleSize(5);
export const buttonHeight = ScreenUtil.scaleSize(56);
export const buttonColor = '#5EA2EC';

export const ComponentStyle = StyleSheet.create({
  container: {
    borderWidth: borderWidth,
    borderColor: borderColor,
    borderRadius: borderRadius,
    marginBottom: marginWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const InputStyle = StyleSheet.create({
  container: {
    flex: 1,
    height: itemHeight,
    justifyContent: 'center',
  },
  textInput: {
    fontSize: fontSize,
    paddingHorizontal: inputPaddingHorizontal,
    color: fontColor,
  },
});

export const LabelStyle = StyleSheet.create({
  container: {
    height: itemHeight,
    justifyContent: 'center',
    paddingHorizontal: containerPaddingHorizontal,
  },
  text: {
    fontSize: fontSize,
    color: fontColor,
  },
});

export const ButtonStyle = StyleSheet.create({
  container: {
    height: buttonHeight,
    backgroundColor: buttonColor,
    borderRadius: borderRadius,
    opacity: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: ScreenUtil.scaleSize(24),
    color: '#ffffff',
  },
});

export const ErrorMessageStyle = StyleSheet.create({
  container: {
    height: itemHeight,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: containerPaddingHorizontal,
    marginBottom: marginWidth,
  },
  text: {
    color: '#FF2D55',
    fontSize: fontSize,
  },
});
