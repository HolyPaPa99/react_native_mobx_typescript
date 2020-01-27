/**
 * Created by zhuoy on 2017/6/27.
 * 屏幕工具类
 * ui设计基准,iphone 11
 * width:828
 * height:1792
 */

/*
 设备的像素密度，例如：
 PixelRatio.get() === 3          iphone11 (160 dpi)     
 */

import {Dimensions, PixelRatio} from 'react-native';

export const deviceWidth = Dimensions.get('window').width; //设备的宽度
export const deviceHeight = Dimensions.get('window').height; //设备的高度
let fontScale = PixelRatio.getFontScale(); //返回字体大小缩放比例

let pixelRatio = PixelRatio.get(); //当前设备的像素密度
const defaultPixel = 2; //像素密度
//px转换成dp
const w2 = 414 / defaultPixel;
const h2 = 896 / defaultPixel;
const scale = Math.min(deviceHeight / h2, deviceWidth / w2); //获取缩放比例
/**
 * 设置text为sp
 * @param size sp
 * return number dp
 */
export function setSpText(size: number) {
  size = Math.round(((size * scale + 0.5) * pixelRatio) / fontScale);
  return size / defaultPixel;
}

export function scaleSize(size: number) {
  size = Math.round(size * scale + 0.5);
  return size / defaultPixel;
}
