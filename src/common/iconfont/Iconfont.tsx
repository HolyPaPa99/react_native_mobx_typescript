import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createIconSet} from 'react-native-vector-icons';
import {scaleSize} from '@/common/utils/ScreenUtil';

//init iconSet
const glyphMap = require('./iconfont.json');
const IconSet = createIconSet(glyphMap, 'iconfont', 'iconfont.ttf');

//default style
const styleSheet = StyleSheet.create({
  iconFontContainer: {
    height: scaleSize(48),
    paddingHorizontal: scaleSize(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const Icon = (props: {
  style?: any;
  name: string;
  size?: Number; //default fontSize
  color?: string; //default fontColor
}) => (
  <View style={{...styleSheet.iconFontContainer, ...props.style}}>
    <IconSet
      name={props.name}
      size={Number(props.size || scaleSize(18))}
      color={props.color || '#D8D8D8'}
    />
  </View>
);

export const Heart = (props: {
  style?: any;
  size?: Number | undefined;
  color?: string | undefined;
}) => (
  <Icon
    name="heart"
    style={props.style}
    size={props.size}
    color={props.color}
  />
);

export const Phone = (props: {
  style?: any;
  size?: Number | undefined;
  color?: string | undefined;
}) => (
  <Icon
    name="phone"
    style={props.style}
    size={props.size}
    color={props.color}
  />
);

export const ShoppingBag = (props: {
  style?: any;
  size?: Number | undefined;
  color?: string | undefined;
}) => (
  <Icon
    name="shopping-bag"
    style={props.style}
    size={props.size}
    color={props.color}
  />
);

export const Compass = (props: {
  style?: any;
  size?: Number | undefined;
  color?: string | undefined;
}) => (
  <Icon
    name="compass"
    style={props.style}
    size={props.size}
    color={props.color}
  />
);

export const Home = (props: {
  style?: any;
  size?: Number | undefined;
  color?: string | undefined;
}) => (
  <Icon name="home" style={props.style} size={props.size} color={props.color} />
);

export const Start = (props: {
  style?: any;
  size?: Number | undefined;
  color?: string | undefined;
}) => (
  <Icon
    name="start"
    style={props.style}
    size={props.size}
    color={props.color}
  />
);

export const Needle = (props: {
  style?: any;
  size?: Number | undefined;
  color?: string | undefined;
}) => (
  <Icon
    name="needle"
    style={props.style}
    size={props.size}
    color={props.color}
  />
);

export const Message = (props: {
  style?: any;
  size?: Number | undefined;
  color?: string | undefined;
}) => (
  <Icon
    name="message"
    style={props.style}
    size={props.size}
    color={props.color}
  />
);

export const CircleNeedle = (props: {
  style?: any;
  size?: Number | undefined;
  color?: string | undefined;
}) => (
  <Icon
    name="circle-needle"
    style={props.style}
    size={props.size}
    color={props.color}
  />
);

export const LeftIndicator = (props: {
  style?: any;
  size?: Number | undefined;
  color?: string | undefined;
}) => (
  <Icon
    name="left-indicator"
    style={props.style}
    size={props.size}
    color={props.color}
  />
);

export const RightIndicator = (props: {
  style?: any;
  size?: Number | undefined;
  color?: string | undefined;
}) => (
  <Icon
    name="right-indicator"
    style={props.style}
    size={props.size}
    color={props.color}
  />
);

export const Person = (props: {
  style?: any;
  size?: Number | undefined;
  color?: string | undefined;
}) => (
  <Icon
    name="person"
    style={props.style}
    size={props.size}
    color={props.color}
  />
);

export const EyeOpen = (props: {
  style?: any;
  size?: Number | undefined;
  color?: string | undefined;
}) => (
  <Icon
    name="eye-open"
    style={props.style}
    size={props.size || scaleSize(16)}
    color={props.color}
  />
);

export const EyeClose = (props: {
  style?: any;
  size?: Number | undefined;
  color?: string | undefined;
}) => (
  <Icon
    name="eye-close"
    style={props.style}
    size={props.size || scaleSize(16)}
    color={props.color}
  />
);

export const Lock = (props: {
  style?: any;
  size?: Number | undefined;
  color?: string | undefined;
}) => (
  <Icon name="lock" style={props.style} size={props.size} color={props.color} />
);

export const Camera = (props: {
  style?: any;
  size?: Number | undefined;
  color?: string | undefined;
}) => (
  <Icon
    name="camera"
    style={props.style}
    size={props.size}
    color={props.color}
  />
);

export const CloseFilled = (props: {
  style?: any;
  size?: Number | undefined;
  color?: string | undefined;
}) => (
  <Icon
    name="close-filled"
    style={props.style}
    size={props.size}
    color={props.color}
  />
);

export const Twitter = (props: {
  style?: any;
  size?: Number | undefined;
  color?: string | undefined;
}) => (
  <Icon
    name="twitter"
    style={props.style}
    size={props.size}
    color={props.color}
  />
);

export const Wechat = (props: {
  style?: any;
  size?: Number | undefined;
  color?: string | undefined;
}) => (
  <Icon
    name="wechat"
    style={props.style}
    size={props.size}
    color={props.color}
  />
);

export const PasswordFilled = (props: {
  style?: any;
  size?: Number | undefined;
  color?: string | undefined;
}) => (
  <Icon
    name="password-filled"
    style={props.style}
    size={props.size || scaleSize(20)}
    color={props.color}
  />
);

export const AccountFilled = (props: {
  style?: any;
  size?: Number | undefined;
  color?: string | undefined;
}) => (
  <Icon
    name="account-filled"
    style={props.style}
    size={props.size}
    color={props.color}
  />
);
