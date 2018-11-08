import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './style.css';

/**
 * @render react
 * @name Input component
 * @description Input.
 * @example
 * <Input
 *    type="email"
 *    displayOnly={true}
 * />
 */

class Input extends Component {
  static propTypes = {
    id: PropTypes.string,
    action: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    type: PropTypes.string,
    pattern: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
    ]),
    className: PropTypes.string,
    maxLength: PropTypes.number,
    min: PropTypes.string,
    max: PropTypes.string,
    placeholder: PropTypes.string,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyDown: PropTypes.func,
    onChange: PropTypes.func,
    dispatchActionOnBlur: PropTypes.bool,
    setFocusRef: PropTypes.func,
    displayOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    format: PropTypes.func,
    unformat: PropTypes.func,
  };

  static defaultProps = {
    maxLength: null,
    changeCallbackOnBlur: null,
    value: '',
    onKeyDown: () => {},
    displayOnly: false,
    disabled: false,
    format: x => x,
    unFormat: x => x,
  };


  handleOnChange = onChange => () => {
    this.inputValue.value = this.props.format(onChange(this.props.value));
  };

  render() {
    const {
      id,
      action,
      value,
      pattern,
      className,
      maxLength,
      placeholder,
      onFocus,
      onBlur,
      onKeyDown,
      onChange,
      type,
      dispatchActionOnBlur,
      setFocusRef,
      min,
      max,
      displayOnly,
      disabled,
      format,
      unformat,
    } = this.props;
    const { errored, inactive } = this.context;

    const rootStyle = classNames(className, styles.root, {
      [styles.errored]: errored,
      [styles.inactive]: inactive,
      [styles.displayOnly]: displayOnly,
    });

    const sharedProps = {
      type: type || 'text',
      id,
      placeholder,
      maxLength,
      className: rootStyle,
      pattern,
      onFocus,
      onKeyDown,
      onBlur,
      min,
      max,
      disabled,
      ref: (ref) => {
        this.inputValue = ref;
        setFocusRef && setFocusRef(ref);
      },
    };

    if (dispatchActionOnBlur) {
      sharedProps.onBlur = (e) => {
        action(unformat(e.target.value));
      };
      if (onChange) sharedProps.onChange = this.handleOnChange(onChange);
      sharedProps.onKeyPress = e => (e.key === 'Enter') && action(unformat(e.target.value));
      sharedProps.defaultValue = value !== undefined ? format(value) : '';
    } else {
      sharedProps.onChange = (e) => {
        action(unformat(e.target.value));
      };
      sharedProps.value = value !== undefined ? format(value) : '';
    }

    return <input {...sharedProps} />;
  }
}

export default Input;
