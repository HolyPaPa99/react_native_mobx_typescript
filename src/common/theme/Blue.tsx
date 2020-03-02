import {StyleSheet} from 'react-native';
import * as ScreenUtil from '@/common/utils/ScreenUtil';

export const Color = {
  Status: {
    Primary: '#0091FF',
    Secondary: '#ffffff',
    Success: '#6dd400',
    Danger: '#FF2D55',
  },
  Font: {
    Font1: 'rgba(0,0,0,0.25)',
    Font2: 'rgba(0,0,0,0.5)',
    Font3: '#ffffff',
    Font4: '#0091FF',
    Font5: '#32c5ff',
    Font6: '#FF2D55',
  },
  Border: {
    Border1: '#D8D8D8',
  },
  Background: {
    Background1: '#ffffffff',
    Background2: 'rgba(0,0,0,0.1)',
    Background3: '#0091FF',
    Background4: 'rgba(0,0,0,0.25)',
    Background5: '#D8D8D8',
  },
  Icon: {
    Icon1: '#0091FF',
    Icon2: 'rgba(0,0,0,0.25)',
    Icon3: '#6dd400',
  },
};

export const Image = {
  LoginBackground: require('@/assets/png/login/background-login-purpleblue.png'),
  LoginStatement: require('@/assets/png/login/logo.png'),
};

export const FontStyles = StyleSheet.create({
  Font1: {
    color: Color.Font.Font4,
    fontSize: ScreenUtil.scaleSize(28),
    lineHeight: ScreenUtil.scaleSize(40),
    fontWeight: '400',
  },
  Font2: {
    color: Color.Font.Font1,
    fontSize: ScreenUtil.scaleSize(16),
    fontWeight: '400',
    lineHeight: ScreenUtil.scaleSize(22),
  },
  Font3: {
    color: Color.Font.Font2,
    fontSize: ScreenUtil.scaleSize(16),
    fontWeight: '400',
  },
  Font4: {
    color: Color.Font.Font4,
    fontSize: ScreenUtil.scaleSize(16),
    fontWeight: '400',
    lineHeight: ScreenUtil.scaleSize(22),
  },
  Font5: {
    color: Color.Font.Font6,
    fontSize: ScreenUtil.scaleSize(16),
    fontWeight: '400',
  },
  Font6: {
    color: Color.Font.Font3,
    fontSize: ScreenUtil.scaleSize(24),
    fontWeight: '400',
    lineHeight: ScreenUtil.scaleSize(33),
  },
  Font7: {
    color: Color.Font.Font5,
    fontSize: ScreenUtil.scaleSize(24),
    fontWeight: '400',
    lineHeight: ScreenUtil.scaleSize(33),
  },
  Font8: {
    color: Color.Font.Font2,
    fontSize: ScreenUtil.scaleSize(18),
    fontWeight: '400',
    lineHeight: ScreenUtil.scaleSize(25),
  },
  Font9: {
    color: Color.Font.Font3,
    fontSize: ScreenUtil.scaleSize(24),
    fontWeight: '400',
    lineHeight: ScreenUtil.scaleSize(33),
  },
  Font10: {
    color: Color.Font.Font4,
    fontSize: ScreenUtil.scaleSize(24),
    fontWeight: '400',
    lineHeight: ScreenUtil.scaleSize(33),
  },
  Font11: {
    color: Color.Font.Font4,
    fontSize: ScreenUtil.scaleSize(16),
    fontWeight: '400',
    lineHeight: ScreenUtil.scaleSize(26),
  },
});
