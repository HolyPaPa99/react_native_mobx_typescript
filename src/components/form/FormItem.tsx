import React from 'react';

export interface Validator {
  (value: any): boolean;
}

export interface FormItemProps {
  name?: string;
  validator?: Validator;
}

export interface FormItemState {
  value: any;
}

abstract class FormItem<
  P extends FormItemProps,
  S extends FormItemState
> extends React.Component<P, S> {
  getName() {
    return this.props.name;
  }

  getValue() {
    return this.state.value;
  }

  validate() {
    if (this.props.validator) {
      this.props.validator.call(this, this.state.value);
    }
    return true;
  }
}

export default FormItem;
