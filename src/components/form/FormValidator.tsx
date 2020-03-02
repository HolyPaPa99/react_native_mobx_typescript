import {Validator} from './FormItem';
import {isEmpty} from '@wessberg/stringutil';
import Log from '@/common/log';

export const PhoneValidator: Validator = (value: string): boolean => {
  Log.info('PhoneValidator:' + value);
  if (isEmpty(value)) {
    throw 'FE0001';
  }
  return true;
};

export const PasswordValidator: Validator = (value: string): boolean => {
  Log.info('PasswordValidator:' + value);
  if (isEmpty(value)) {
    throw 'FE0002';
  }
  return true;
};

export const UserNameValidator: Validator = (value: string): boolean => {
  Log.info('UserNameValidator:' + value);
  if (isEmpty(value)) {
    throw 'FE003';
  }
  return true;
};

export const PhoneVerifyCodeValidator: Validator = (value: string): boolean => {
  Log.info('PhoneVerifyCodeValidator:' + value);
  if (isEmpty(value)) {
    throw 'FE004';
  }
  return true;
};
