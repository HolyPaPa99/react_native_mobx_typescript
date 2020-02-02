/**
 * validator接口
 */
export interface Validator {
  (value: any): boolean;
}

/**
 * form item props define interface
 */
export interface FormItemProps {
  require?: boolean;
  rule?: any;
  validator?: Validator;
  [propName: string]: any;
}

export interface FormItem {
  getName(): string | undefined;
  getValue(): string | undefined;
  validate(): boolean | never;
}
