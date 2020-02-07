import {Validator} from './FormItem';
import {isEmpty} from '@wessberg/stringutil';
import Log from '@/common/log';

export const PhoneValidator: Validator = (value: string): boolean => {
  Log.info('PhoneValidator:' + value);
  if (isEmpty(value)) {
    throw '请输入手机号码';
  }
  return true;
};
