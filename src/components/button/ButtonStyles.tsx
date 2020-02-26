import {StyleSheet} from 'react-native';
import {scaleSize} from '@/common/utils/ScreenUtil';
import Theme from '@/common/theme';

export default class ButtonStyles {
  primary = StyleSheet.create({
    default: {
      height: scaleSize(56),
      backgroundColor: Theme.Color.Status.Primary,
      borderRadius: scaleSize(5),
      opacity: 0.8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textDefault: Theme.FontStyles.Font9,
  });

  secondary = StyleSheet.create({
    default: {
      height: scaleSize(56),
      backgroundColor: Theme.Color.Status.Secondary,
      borderRadius: scaleSize(5),
      opacity: 0.8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textDefault: Theme.FontStyles.Font10,
  });

  danger = StyleSheet.create({
    default: {
      height: scaleSize(56),
      backgroundColor: Theme.Color.Status.Danger,
      borderRadius: scaleSize(5),
      opacity: 0.8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textDefault: Theme.FontStyles.Font9,
  });
}
