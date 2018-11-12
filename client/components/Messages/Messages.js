import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Messages.css';

const Messages = ({ type = 'error', size = 20, message = null }) => {
  return (
    <div
      className={classNames({
        [styles.root]: true,
        [styles[type]]: true,
      })}
      style={{ fontSize: size }}
    >
      { message }
    </div>
  );
};

Messages.propTypes = {
  type: PropTypes.string,
  size: PropTypes.number,
  message: PropTypes.string,
};

export default Messages;
