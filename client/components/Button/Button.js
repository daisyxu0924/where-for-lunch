import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.css';

const Button = ({ onClick, theme, btnStatus }) => {
  return (
    <button
      className={classNames({
        [styles.root]: true,
        [styles[theme]]: true,
        [styles.colorNotActive]: btnStatus,
      })}
      onClick={onClick}
      disabled={ btnStatus }
    >
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
  ]),
  onClick: PropTypes.func,
  theme: PropTypes.string,
  btnStatus: PropTypes.bool,
};

export default Button;
