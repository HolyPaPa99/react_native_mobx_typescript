import {StyleSheet} from 'react-native';
import * as ScreenUtil from '@/common/utils/ScreenUtil';
import Theme from '@/common/theme';

export const itemHeight = ScreenUtil.scaleSize(48);
export const placeholderTextColor = Theme.Color.Font.Font1;
export const inputPaddingHorizontal = ScreenUtil.scaleSize(10);
export const containerPaddingHorizontal = ScreenUtil.scaleSize(15);
export const borderWidth = 0.5;
export const borderColor = Theme.Color.Border.Border1;
export const borderRadius = ScreenUtil.scaleSize(5);
export const marginWidth = ScreenUtil.scaleSize(5);

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
    ...Theme.FontStyles.Font3,
    paddingHorizontal: inputPaddingHorizontal,
  },
});

export const LabelStyle = StyleSheet.create({
  container: {
    height: itemHeight,
    justifyContent: 'center',
    paddingHorizontal: containerPaddingHorizontal,
  },
  text: Theme.FontStyles.Font2,
});

export const ErrorMessageStyle = StyleSheet.create({
  container: {
    height: itemHeight,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: containerPaddingHorizontal,
    marginBottom: marginWidth,
  },
  text: Theme.FontStyles.Font5,
});
