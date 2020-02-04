import {Validator} from './FormItem';
import {isEmpty} from '@wessberg/stringutil';

export const PhoneValidator: Validator = (value: string): boolean => {
  console.log("phoneValidator",value)
  if (isEmpty(value)) {
    throw '请输入手机号码';
  }
  return true;
};
