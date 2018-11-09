import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.css';

const Button = ({ children, theme, icon, ...attributes }) => {
  return (
    <button
      className={classNames({
        [styles.root]: true,
        [styles[theme]]: true,
        [styles[icon]]: true,
      })}
      {...attributes}
    >
      { children }
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
  ]),
  icon: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  theme: PropTypes.string,
};

export default Button;
