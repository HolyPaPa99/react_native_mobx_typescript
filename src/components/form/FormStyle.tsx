import {StyleSheet} from 'react-native';
import * as ScreenUtil from '@/common/utils/ScreenUtil';
import Theme from '@/common/theme';

export const placeholderTextColor = Theme.Color.Font.Font1;
export const fontColor = Theme.Color.Font.Font2;
export const itemHeight = ScreenUtil.scaleSize(48);
export const fontSize = ScreenUtil.scaleSize(16);
export const inputPaddingHorizontal = ScreenUtil.scaleSize(10);
export const containerPaddingHorizontal = ScreenUtil.scaleSize(15);
export const borderWidth = 0.5;
export const borderColor = Theme.Color.Border.Border1;
export const borderRadius = ScreenUtil.scaleSize(5);
export const marginWidth = ScreenUtil.scaleSize(5);
export const buttonHeight = ScreenUtil.scaleSize(56);
export const buttonColor = Theme.Color.Status.Primary;

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
    color: Theme.Color.Font.Font3,
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
    color: Theme.Color.Font.Font6,
    fontSize: fontSize,
  },
});
