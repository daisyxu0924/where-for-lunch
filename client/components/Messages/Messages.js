import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Messages.css';

const Messages = ({ type, size, message }) => {
  return (
    <div
      className={classNames({
        [styles.root]: true,
        [styles[type || 'error']]: true,
      })}
      style={{ fontSize: size || 20 }}
    >
      { message || null }
    </div>
  );
};

Messages.propTypes = {
  type: PropTypes.string,
  size: PropTypes.number,
  message: PropTypes.string,
};

export default Messages;
